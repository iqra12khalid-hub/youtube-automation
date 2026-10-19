---
name: clip-pipeline
description: Read a folder of character sheets and clip prompts, generate each clip in order (image-to-video or text-to-video as the prompt header says), chain last frames when asked, run at most 2 independent clips in parallel, and deliver every clip immediately as an inline playable and downloadable video card.
---

# SKILL: Clip pipeline from a folder (read this first, follow it every time)

You will receive ONE folder (zip). Everything you need is inside it. Follow these steps exactly.

---

## 1. Read the folder

The folder always looks like this:

```
00_READ_ME_FIRST.txt            <- order of the clips + any special notes
REFERENCE_SHEETS/               <- one sub-folder per character / location
    littlerhino/  meerkat/  mamarhino/  savanna/  ...
CLIP_01_<name>/PROMPT.txt       <- one folder per clip, in order
CLIP_01_<name>/FIRST_FRAME.jpg  <- only if that clip has a ready first frame
CLIP_02_<name>/PROMPT.txt
...
```

- Open `00_READ_ME_FIRST.txt` first. Clip order = folder number order (CLIP_01, CLIP_02, ...).
- Look at every image in `REFERENCE_SHEETS/` before generating anything.

## 2. Read the header of every PROMPT.txt

Every prompt starts with a header like this. Obey it exactly:

```
MODE: IMAGE-TO-VIDEO          (or: TEXT-TO-VIDEO)
FIRST FRAME: FIRST_FRAME.jpg  (or: LAST FRAME OF CLIP_01   or: NONE)
CHARACTERS: littlerhino, meerkat      <- use ONLY these sheets from REFERENCE_SHEETS
LOCATION: savanna
SETTINGS: Seedance 2.0 | 15 seconds | 16:9 | 4K
AUDIO: <what sound is wanted, or VISUAL ONLY>
```

- **MODE: IMAGE-TO-VIDEO** -> start the video from the image named in FIRST FRAME.
- **MODE: TEXT-TO-VIDEO** -> no start image; build the scene from the prompt + the character sheets.
- **FIRST FRAME: LAST FRAME OF CLIP_XX** -> wait until CLIP_XX is finished, take its very last frame yourself, and use it as the first frame.
- **CHARACTERS** -> use ONLY the listed character sheets. Same look, colours and size as the sheet. Never add extra characters. If it says ONE meerkat, there is exactly one.
- Copy the prompt text exactly. Do not add or remove story beats.

## 3. Order and parallel rule

- A clip that needs **LAST FRAME OF CLIP_XX** must wait for CLIP_XX to be finished and delivered.
- A clip with **FIRST FRAME: NONE** or a ready **FIRST_FRAME.jpg** does not wait. It may run **in parallel** with another clip.
- **Maximum 2 clips generating at the same time.** Never more.
- Never skip a clip and never change the order of delivery.

## 4. DELIVER EACH CLIP AS SOON AS IT IS READY (most important rule)

- When one clip is finished: **deliver it immediately, before starting the next one.**
- Do not collect clips and deliver them together at the end.
- Then start the next clip.

### Delivery format (must be exactly this)

- Deliver every clip using your **normal built-in video result**: the same video card that appears automatically in the chat when you finish generating a video.
- That built-in card already shows the first frame, plays inline when clicked, and has a download button. **Use it as it is.**
- **Do NOT build your own card.** Do NOT make HTML, a webpage, a gallery, a chart, a "visualization", a poster image or a thumbnail yourself.
- Do NOT use any visualization / chart / design skill for delivery.
- Do NOT re-upload the video as a file attachment or a link. Do NOT extract frames to make a preview.
- Just let the generated video appear in the chat the normal way, then write one line under it: clip name, length, and "last frame for next clip taken: yes/no".

## 5. Settings check before starting

- Before the FIRST clip of a folder, show me the settings (model, length, ratio, resolution, number of clips, which run in parallel) and **wait for my OK**. Never start without my confirmation.
- After my OK, run the whole folder without asking again, unless something fails.

## 6. If something is blocked

- If a prompt is rejected for audio/copyright (voices, music), make it **VISUAL ONLY**: keep all mouth movements and timings exactly as written, remove the sound. Tell me in one line that you did this.
- If a word is blocked (brand or studio names), remove only that word and tell me.
- Never change the story, characters or timings to get around a block.

## 7. Never

- Never add text, subtitles, logos or a watermark in the video.
- Never use more characters than listed in CHARACTERS.
- Never change camera to a different scene unless the prompt says so.
- Never start a clip that needs a previous last frame before that clip is finished.
