# Firefly Elements Downloader (Chrome extension)

Downloads every element on the Firefly **Elements** page into
`Downloads/Firefly_Elements/`, each file named exactly like the element
(`Noora2.png`, `prisoninside.jpg`, ...). For each element it tries every image link it can find
(the card image, larger versions of it, the page's own data) and keeps the **biggest real image**.

## Install
1. Unzip `FIREFLY_ELEMENTS_DOWNLOADER.zip`.
2. Chrome → `chrome://extensions` → turn on **Developer mode** (top right).
3. **Load unpacked** → pick the unzipped folder.
4. Pin it (puzzle icon → pin).

## Use
1. Open firefly.adobe.com → Elements page, then **reload it (F5)** so the extension can see the page's data.
2. Click the extension → **1. Scan** (it scrolls by itself to load every element).
3. **2. Download all**. The list shows the pixel size saved for each element.
4. If sizes look small or some failed → **Save report** and send `_report.json` to Claude.
   The report has no passwords or login tokens (links are saved without their query part).

Notes: two elements with the same name (e.g. two "goat") become `goat.png` and `goat (1).png`.
Files keep their original format (png/jpg/webp), no re-compression.
