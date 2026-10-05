// Finds the element cards on the page, their names and every possible image URL.
const netUrls = new Map(); // lower-case element name -> Set of URLs seen in the page's own data

window.addEventListener('message', (e) => {
  if (e.source !== window || !e.data || !e.data.__ffed) return;
  for (const f of e.data.found) {
    const k = f.name.toLowerCase();
    if (!netUrls.has(k)) netUrls.set(k, new Set());
    f.urls.forEach((u) => netUrls.get(k).add(u));
  }
});

const LABEL_RE = /^Element\s*[•·]/;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function bigImagesIn(node) {
  const imgs = [...node.querySelectorAll('img')].filter((i) => {
    const r = i.getBoundingClientRect();
    return r.width >= 60 || i.naturalWidth >= 100;
  });
  const bgs = [...node.querySelectorAll('*')].filter((el) => {
    const bg = getComputedStyle(el).backgroundImage;
    return bg && bg.startsWith('url(') && el.getBoundingClientRect().width >= 60;
  });
  return { imgs, bgs };
}

function findCards() {
  const labels = [...document.querySelectorAll('body *')].filter(
    (el) => el.children.length === 0 && LABEL_RE.test((el.textContent || '').trim())
  );
  const cards = new Map();
  for (const lab of labels) {
    let node = lab;
    let card = null;
    for (let i = 0; i < 10 && node; i++) {
      node = node.parentElement;
      if (!node) break;
      const { imgs, bgs } = bigImagesIn(node);
      if (imgs.length || bgs.length) { card = node; break; }
    }
    if (!card || cards.has(card)) continue;
    const lines = card.innerText.split('\n').map((s) => s.trim()).filter(Boolean);
    const idx = lines.findIndex((l) => LABEL_RE.test(l));
    const name = idx > 0 ? lines[idx - 1] : lines[0];
    if (!name) continue;
    cards.set(card, name);
  }
  return [...cards.entries()].map(([card, name]) => ({ card, name }));
}

function largestFromSrcset(srcset) {
  if (!srcset) return [];
  return srcset.split(',').map((s) => s.trim().split(/\s+/)).map(([u, d]) => ({ u, n: parseFloat(d) || 0 }))
    .sort((a, b) => b.n - a.n).map((x) => x.u);
}

function variants(u) {
  if (!u || u.startsWith('blob:') || u.startsWith('data:')) return [u];
  const out = [u];
  try {
    const x = new URL(u, location.href);
    const SIZE_KEYS = ['width', 'w', 'height', 'h', 'size', 'sz', 'dim', 'maxwidth', 'max_width', 'resize', 'quality', 'q'];
    const big = new URL(x.href);
    let changed = false;
    for (const k of [...big.searchParams.keys()]) {
      if (SIZE_KEYS.includes(k.toLowerCase())) { big.searchParams.delete(k); changed = true; }
    }
    if (changed) out.push(big.href);
    out.push(x.origin + x.pathname);
    const p = x.href.replace(/([;/_-])(size|width|w)[=_-]?\d{2,4}/gi, '').replace(/\b\d{2,4}x\d{2,4}\b/g, '');
    if (p !== x.href) out.push(p);
  } catch (e) { /* ignore */ }
  return [...new Set(out)];
}

function scrollableParent(el) {
  for (let n = el; n; n = n.parentElement) {
    const s = getComputedStyle(n);
    if (/(auto|scroll)/.test(s.overflowY) && n.scrollHeight > n.clientHeight + 10) return n;
  }
  return document.scrollingElement;
}

async function loadAllCards() {
  let last = -1, stable = 0;
  for (let i = 0; i < 60 && stable < 3; i++) {
    const cards = findCards();
    const sc = cards.length ? scrollableParent(cards[cards.length - 1].card) : document.scrollingElement;
    sc.scrollTop = sc.scrollHeight;
    window.scrollTo(0, document.body.scrollHeight);
    await sleep(900);
    const n = findCards().length;
    stable = n === last ? stable + 1 : 0;
    last = n;
  }
}

async function scan() {
  await loadAllCards();
  return findCards().map(({ card, name }) => {
    const { imgs, bgs } = bigImagesIn(card);
    const urls = [];
    for (const i of imgs) {
      urls.push(...largestFromSrcset(i.srcset));
      if (i.currentSrc) urls.push(i.currentSrc);
      if (i.src) urls.push(i.src);
    }
    for (const b of bgs) {
      const m = getComputedStyle(b).backgroundImage.match(/url\(["']?(.*?)["']?\)/);
      if (m) urls.push(m[1]);
    }
    const net = [...(netUrls.get(name.toLowerCase()) || [])];
    const candidates = [...new Set([...urls.flatMap(variants), ...net.flatMap(variants)])].slice(0, 40);
    return { name, candidates };
  });
}

chrome.runtime.onMessage.addListener((msg, _sender, reply) => {
  if (msg.cmd === 'scan') { scan().then((items) => reply({ items })).catch((e) => reply({ error: String(e) })); return true; }
  if (msg.cmd === 'blob') {
    fetch(msg.url).then((r) => r.blob()).then((b) => new Promise((res) => {
      const fr = new FileReader();
      fr.onload = () => res(fr.result);
      fr.readAsDataURL(b);
    })).then((dataUrl) => reply({ dataUrl })).catch(() => reply({}));
    return true;
  }
});
