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

  // Remember the headers Firefly itself uses for Adobe API calls, so images can be
  // fetched exactly the way the page does (kept inside this closure only).
  let apiHeaders = {};
  function rememberHeaders(input, init) {
    try {
      const url = typeof input === 'string' ? input : (input && input.url) || '';
      if (!/\.adobe\.io\//.test(url)) return;
      const hs = new Headers((init && init.headers) || (input && input.headers) || {});
      const keep = {};
      for (const k of ['authorization', 'x-api-key']) if (hs.get(k)) keep[k] = hs.get(k);
      if (keep.authorization) apiHeaders = keep;
    } catch (e) { /* ignore */ }
  }

  const origFetch = window.fetch;
  window.addEventListener('message', async (e) => {
    if (e.source !== window || !e.data || !e.data.__ffedReq) return;
    const { id, url } = e.data;
    const done = (payload) => window.postMessage({ __ffedRes: true, id, ...payload }, '*');
    try {
      const isApi = /\.adobe\.io\//.test(url);
      const res = await origFetch(url, isApi ? { headers: apiHeaders } : { credentials: 'include' });
      const ct = res.headers.get('content-type') || '';
      if (!res.ok || !ct.startsWith('image/')) return done({});
      const b = await res.blob();
      const fr = new FileReader();
      fr.onload = () => done({ dataUrl: fr.result });
      fr.onerror = () => done({});
      fr.readAsDataURL(b);
    } catch (err) { done({}); }
  });

  window.fetch = async function (...args) {
    rememberHeaders(args[0], args[1]);
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
