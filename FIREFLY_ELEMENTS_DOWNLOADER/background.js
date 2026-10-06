// Tries every candidate URL, keeps the biggest real image, saves it as Firefly_Elements/<element name>.<ext>
const FOLDER = 'Firefly_Elements';

function safeName(n) {
  return n.replace(/[\\/:*?"<>|]/g, '_').replace(/\s+/g, ' ').trim() || 'element';
}
function extFor(type) {
  return ({ 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp', 'image/gif': 'gif', 'image/avif': 'avif' })[type] || 'png';
}
function stripQuery(u) {
  if (u.startsWith('data:')) return 'data:…';
  try { const x = new URL(u); return x.origin + x.pathname; } catch (e) { return u.slice(0, 120); }
}

async function getBlob(u, tabId) {
  try {
    if (u.startsWith('blob:')) {
      const r = await chrome.tabs.sendMessage(tabId, { cmd: 'blob', url: u });
      if (!r || !r.dataUrl) return null;
      return await (await fetch(r.dataUrl)).blob();
    }
    if (u.startsWith('data:')) return await (await fetch(u)).blob();
    const viaPage = await chrome.tabs.sendMessage(tabId, { cmd: 'pageFetch', url: u }).catch(() => null);
    if (viaPage && viaPage.dataUrl) return await (await fetch(viaPage.dataUrl)).blob();
    const res = await fetch(u, { credentials: 'include' });
    if (!res.ok) return null;
    return await res.blob();
  } catch (e) { return null; }
}

async function measure(blob) {
  if (!blob || !blob.type.startsWith('image/')) return null;
  try {
    const bmp = await createImageBitmap(blob);
    const d = { w: bmp.width, h: bmp.height };
    bmp.close();
    return d;
  } catch (e) { return null; }
}

function blobToDataUrl(buf, type) {
  const bytes = new Uint8Array(buf);
  let bin = '';
  for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
  return `data:${type};base64,${btoa(bin)}`;
}

async function downloadItem(item, tabId) {
  let best = null;
  for (const u of item.candidates) {
    const blob = await getBlob(u, tabId);
    const dims = await measure(blob);
    if (!dims) continue;
    const area = dims.w * dims.h;
    if (!best || area > best.area || (area === best.area && blob.size > best.blob.size)) best = { u, blob, area, ...dims };
  }
  if (!best) return { name: item.name, ok: false, tried: item.candidates.map(stripQuery) };

  const filename = `${FOLDER}/${safeName(item.name)}.${extFor(best.blob.type)}`;
  const url = blobToDataUrl(await best.blob.arrayBuffer(), best.blob.type);
  await chrome.downloads.download({ url, filename, conflictAction: 'uniquify', saveAs: false });
  return { name: item.name, ok: true, w: best.w, h: best.h, kb: Math.round(best.blob.size / 1024), type: best.blob.type, from: stripQuery(best.u), tried: item.candidates.length };
}

chrome.runtime.onMessage.addListener((msg, _sender, reply) => {
  if (msg.cmd !== 'download') return;
  (async () => {
    const results = [];
    for (let i = 0; i < msg.items.length; i++) {
      const r = await downloadItem(msg.items[i], msg.tabId);
      results.push(r);
      chrome.runtime.sendMessage({ cmd: 'progress', done: i + 1, total: msg.items.length, last: r }).catch(() => {});
    }
    reply({ results });
  })();
  return true;
});
