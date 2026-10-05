// Runs inside the Firefly page itself. Watches the page's own JSON responses
// and remembers which image URLs belong to which element name.
(() => {
  if (window.__ffedHooked) return;
  window.__ffedHooked = true;

  const NAME_KEYS = ['name', 'title', 'displayName', 'label', 'elementName'];
  const URL_RE = /^https?:\/\//i;

  function collectUrls(obj, depth, out) {
    if (obj == null || depth > 6) return;
    if (typeof obj === 'string') { if (URL_RE.test(obj)) out.push(obj); return; }
    if (Array.isArray(obj)) { for (const v of obj.slice(0, 200)) collectUrls(v, depth + 1, out); return; }
    if (typeof obj === 'object') for (const k in obj) collectUrls(obj[k], depth + 1, out);
  }

  function walk(obj, depth, found) {
    if (!obj || typeof obj !== 'object' || depth > 14) return;
    if (Array.isArray(obj)) { for (const v of obj) walk(v, depth + 1, found); return; }
    let name = null;
    for (const k of NAME_KEYS) {
      const v = obj[k];
      if (typeof v === 'string' && v.trim() && v.length < 120) { name = v.trim(); break; }
    }
    if (name) {
      const urls = [];
      collectUrls(obj, 0, urls);
      if (urls.length) found.push({ name, urls: [...new Set(urls)].slice(0, 60) });
    }
    for (const k in obj) walk(obj[k], depth + 1, found);
  }

  function handle(data) {
    const found = [];
    try { walk(data, 0, found); } catch (e) { /* ignore */ }
    if (found.length) window.postMessage({ __ffed: true, found }, '*');
  }

  const origFetch = window.fetch;
  window.fetch = async function (...args) {
    const res = await origFetch.apply(this, args);
    try {
      const ct = res.headers.get('content-type') || '';
      if (ct.includes('json')) res.clone().json().then(handle).catch(() => {});
    } catch (e) { /* ignore */ }
    return res;
  };

  const origSend = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.send = function (...a) {
    this.addEventListener('load', () => {
      try {
        const ct = this.getResponseHeader('content-type') || '';
        if (!ct.includes('json')) return;
        let d = null;
        if (this.responseType === '' || this.responseType === 'text') d = JSON.parse(this.responseText);
        else if (this.responseType === 'json') d = this.response;
        if (d) handle(d);
      } catch (e) { /* ignore */ }
    });
    return origSend.apply(this, a);
  };
})();
