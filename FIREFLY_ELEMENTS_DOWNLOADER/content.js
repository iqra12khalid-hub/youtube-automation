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

const LABEL_RE = /^Element(\s*[•·]|$)/;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// --- Walking the page as it is drawn, including inside shadow DOM (Adobe web components) ---
function flatChildren(node) {
  if (node.nodeName === 'SLOT') {
    const a = node.assignedNodes({ flatten: true });
    return a.length ? a : [...node.childNodes];
  }
  if (node.shadowRoot) return [...node.shadowRoot.childNodes];
  return [...(node.childNodes || [])];
}
function flatParent(node) {
  if (node.assignedSlot) return node.assignedSlot;
  const p = node.parentNode;
  if (p && p.nodeType === 11 && p.host) return p.host; // ShadowRoot -> its host element
  return p;
}
function* flatWalk(root) {
  const stack = [root];
  while (stack.length) {
    const n = stack.pop();
    yield n;
    const kids = flatChildren(n);
    for (let i = kids.length - 1; i >= 0; i--) stack.push(kids[i]);
  }
}
function textPieces(el) {
  const out = [];
  for (const n of flatWalk(el)) {
    if (n.nodeType === 3) {
      const t = n.textContent.replace(/\s+/g, ' ').trim();
      if (t) out.push(t);
    }
  }
  return out;
}
function cssUrl(el) {
  const bg = getComputedStyle(el).backgroundImage;
  const m = bg && bg.match(/url\(["']?(.*?)["']?\)/);
  return m ? m[1] : null;
}
function bigImagesIn(node) {
  const imgs = [], bgs = [];
  for (const n of flatWalk(node)) {
    if (n.nodeType !== 1) continue;
    const w = n.getBoundingClientRect().width;
    if (n.tagName === 'IMG' && (w >= 60 || n.naturalWidth >= 100)) imgs.push(n);
    else if (w >= 60 && cssUrl(n)) bgs.push(n);
  }
  return { imgs, bgs };
}

function findCards() {
  const cards = new Map();
  for (const n of flatWalk(document.documentElement)) {
    if (n.nodeType !== 3 || !LABEL_RE.test(n.textContent.trim())) continue;
    let node = n, card = null;
    for (let i = 0; i < 14 && node; i++) {
      node = flatParent(node);
      if (!node || node.nodeType !== 1) continue;
      const { imgs, bgs } = bigImagesIn(node);
      if (imgs.length || bgs.length) { card = node; break; }
    }
    if (!card || cards.has(card)) continue;
    const pieces = textPieces(card);
    const idx = pieces.findIndex((p) => LABEL_RE.test(p));
    let name = null;
    for (let i = idx - 1; i >= 0; i--) {
      if (pieces[i] && !/^[•·]$/.test(pieces[i])) { name = pieces[i]; break; }
    }
    if (!name) {
      const img = bigImagesIn(card).imgs[0];
      name = (img && (img.alt || img.getAttribute('aria-label'))) || card.getAttribute('aria-label');
    }
    if (name) cards.set(card, name.trim());
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

function scrollBoxes() {
  const out = [document.scrollingElement];
  for (const n of flatWalk(document.documentElement)) {
    if (n.nodeType !== 1) continue;
    const s = getComputedStyle(n);
    if (/(auto|scroll)/.test(s.overflowY) && n.scrollHeight > n.clientHeight + 10) out.push(n);
  }
  return out;
}

async function loadAllCards() {
  let last = -1, stable = 0;
  for (let i = 0; i < 60 && stable < 3; i++) {
    for (const b of scrollBoxes()) b.scrollTop = b.scrollHeight;
    await sleep(900);
    const n = findCards().length;
    stable = n === last ? stable + 1 : 0;
    last = n;
  }
}

function debugInfo() {
  let shadowRoots = 0, labels = 0, imgs = 0;
  for (const n of flatWalk(document.documentElement)) {
    if (n.nodeType === 1 && n.shadowRoot) shadowRoots++;
    if (n.nodeType === 1 && n.tagName === 'IMG') imgs++;
    if (n.nodeType === 3 && LABEL_RE.test(n.textContent.trim())) labels++;
  }
  return { url: location.origin + location.pathname, shadowRoots, labels, imgs, netNames: [...netUrls.keys()].slice(0, 80) };
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
  if (msg.cmd === 'scan') { scan().then((items) => reply({ items, debug: debugInfo() })).catch((e) => reply({ error: String(e) })); return true; }
  if (msg.cmd === 'blob') {
    fetch(msg.url).then((r) => r.blob()).then((b) => new Promise((res) => {
      const fr = new FileReader();
      fr.onload = () => res(fr.result);
      fr.readAsDataURL(b);
    })).then((dataUrl) => reply({ dataUrl })).catch(() => reply({}));
    return true;
  }
});
