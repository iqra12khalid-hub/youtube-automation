let items = [];
let results = [];
let scanDebug = null;
let tabId = null;
const $ = (id) => document.getElementById(id);

function render(rows) {
  $('list').innerHTML = '';
  for (const r of rows) {
    const li = document.createElement('li');
    const a = document.createElement('span');
    a.textContent = r.name;
    const b = document.createElement('span');
    if (r.ok === true) { b.className = 'ok'; b.textContent = `${r.w}×${r.h}`; }
    else if (r.ok === false) { b.className = 'bad'; b.textContent = 'failed'; }
    else b.textContent = `${r.candidates.length} links`;
    li.append(a, b);
    $('list').append(li);
  }
}

$('scan').onclick = async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab || !/^https:\/\/firefly\.adobe\.com\//.test(tab.url || '')) {
    $('status').textContent = 'Open the Firefly Elements page in this tab first.';
    return;
  }
  tabId = tab.id;
  $('status').textContent = 'Scanning (scrolling to load all elements)…';
  $('scan').disabled = true;
  try {
    const res = await chrome.tabs.sendMessage(tabId, { cmd: 'scan' });
    items = (res && res.items) || [];
    scanDebug = res && res.debug;
    $('report').disabled = false;
    $('status').textContent = items.length ? `Found ${items.length} elements.` : 'No elements found. Reload the page (F5) and scan again.';
    render(items);
    $('dl').disabled = !items.length;
  } catch (e) {
    $('status').textContent = 'Could not reach the page. Reload the Firefly tab (F5) and try again.';
  }
  $('scan').disabled = false;
};

$('dl').onclick = async () => {
  $('dl').disabled = true;
  $('status').textContent = `Downloading 0 / ${items.length}…`;
  const res = await chrome.runtime.sendMessage({ cmd: 'download', items, tabId });
  results = (res && res.results) || [];
  const ok = results.filter((r) => r.ok).length;
  $('status').textContent = `Done: ${ok} saved, ${results.length - ok} failed → Downloads/Firefly_Elements`;
  render(results);
  $('report').disabled = false;
  $('dl').disabled = false;
};

chrome.runtime.onMessage.addListener((m) => {
  if (m.cmd === 'progress') $('status').textContent = `Downloading ${m.done} / ${m.total}… (${m.last.name})`;
});

$('report').onclick = () => {
  const strip = (u) => { try { const x = new URL(u); return x.origin + x.pathname; } catch (e) { return String(u).slice(0, 60); } };
  const scan = items.map((i) => ({ name: i.name, candidates: i.candidates.map(strip) }));
  const blob = new Blob([JSON.stringify({ debug: scanDebug, scan, results }, null, 2)], { type: 'application/json' });
  chrome.downloads.download({ url: URL.createObjectURL(blob), filename: 'Firefly_Elements/_report.json', conflictAction: 'overwrite' });
};
