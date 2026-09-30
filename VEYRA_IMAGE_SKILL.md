---
name: kartar-image-skill
description: kartar image skill — Seedream 5.0 Pro, 4K photoreal still-frame generation for the VEYRA film. Builds every image from the reference vault (multi-pose character sheets + single-view environment plates) without mixing them up, locks character consistency, camera position and direction of travel, processes bulk TXT/Notepad image-prompt lists on autopilot, and delivers each finished image natively the moment it is done before continuing with the next.
---

# kartar image skill — 4K Frame Lock

## Hard Lock (non-negotiable, overrides everything below)

- **Model is locked to Seedream 5.0 Pro.** Always select Seedream 5.0 Pro explicitly in every image call. Never use the Seedream lite version, never fall back to a lighter/faster model, and never let the tool pick a default model.
- **Resolution is locked at 4K.** Always request the highest resolution the image tool supports, targeting **3840 × 2160** for 16:9. Never downscale, never deliver a preview/thumbnail as the final result.
- **Ratio is locked at 16:9** for all VEYRA film frames unless the user explicitly asks for another ratio.
- **One prompt = one finished image.** Each image is one complete frozen moment of the film.
- **Framing is locked to wide / medium-wide — never zoomed in.** Every image is framed like a wide cinema shot: characters are shown full body or at least from the knees up, with clear space around them and the environment visible. Never an extreme close-up, never a tight crop on a face or body part, never a zoomed-in or telephoto-compressed look, never a cut-off head, hands or feet at the frame edge. The video continues from this image, so the image must leave room for movement.
- **Photoreal live-action only.** Every image must look like a still frame from a high-budget 35mm feature film. Never cartoon, anime, 3D render, CGI look, illustration, concept art, digital painting or stylized art.
- **Autopilot is the default.** Never ask for `go`, `confirm`, `yes`, `start` or any approval before generating an image.
- **Deliver each image the moment it is done**, then immediately continue with the next prompt. Never hold finished images back to deliver them in a batch at the end.
- **Bulk runs never stop because one prompt fails.** A failed item is deferred, and the next pending prompt is processed.

---

## The Reference Vault — Two Kinds of Reference Images

The vault contains two different kinds of reference image. They must never be confused.

### 1. Character / enemy sheets (multi-pose)

Every `CHAR_`, `GUEST_` and `ENEMY_` file is **ONE image showing ONE character from several angles/poses side by side**. It is NOT a group of different people.

| File | What the sheet shows |
|---|---|
| `CHAR_Teo` | front view, 3/4 view, side profile, back view |
| `CHAR_Nyra` | front view, side profile, back view, battle pose |
| `CHAR_Kael` | front view, side profile, back view, sword-swing pose |
| `GUEST_Rhea` | front view, side profile, back view, aiming pose |
| `GUEST_Oris` | front view, side profile, back view, staff-raised pose |
| `GUEST_Dax` | front view, left side view, back view, fighting pose |
| `ENEMY_Soldier` | front view, side profile, back view, aiming pose |
| `ENEMY_Elite` | front view, side profile, back view, glaive attack pose |
| `ENEMY_Commander` | front view, left side view, back view, commanding pose |

Rules for sheets:
- Study **every pose on the sheet** before generating, then build the character in the pose and angle the scene needs, matching the sheet exactly: face, hair, body, clothing, armour, weapons, markings, which arm carries what.
- The sheet shows **one** character. Put **only one** of that character in the image unless the prompt explicitly asks for several (e.g. "four soldiers" — then all four match `ENEMY_Soldier`).
- The sheet's plain studio background is **never** part of the scene. Take only the character from the sheet.
- Never describe or reinvent the character in words. The sheet is the only source of truth for how they look. No ages, no body descriptions, no clothing descriptions.
- Enemies are always faceless exactly as on their sheets.

### 2. Environment plates (single view)

Every `ENV_` file is **one wide view of one location**. It is a place, not a character.

`ENV_01_city_peaceful`, `ENV_02a_city_attack_begins`, `ENV_02b_city_under_attack`, `ENV_03_undercity`, `ENV_04_rust_moth` (cockpit), `ENV_05a_mothership_hall`, `ENV_05b_mothership_outside`, `ENV_05c_mothership_bridge`, `ENV_06_sky_peaceful`, `ENV_07_sky_battle`, `ENV_08_hangar`, `ENV_09_rust_moth_exterior`, `ENV_10_dead_expanse`.

Rules for plates:
- Copy the location exactly: architecture, materials, colours, lighting, atmosphere. Re-frame it to the camera position the prompt asks for, but never redesign it.
- Vehicles and ships shown in a plate (`ENV_07` strike craft and interceptors, `ENV_09` Rust Moth) must be copied exactly from that plate.
- Never take a character from a plate, and never take a location from a character sheet.

### Never mix them up

- Character look → **only** from its sheet.
- Location look → **only** from its plate.
- If a prompt lists several sheets, keep each character bound to its own file name. Never swap features between characters (no antlers on the Elite, no gauntlet on Kael, no glow from one character onto another unless the prompt says so).

---

## Workflow

### 1. Reference inspection (every prompt)

1. Read the prompt's `References:` line and collect every file name.
2. Inspect every referenced local image with `Read` first. Visual inspection is required before generating.
3. Upload the images via `FileBatchUpload` and use **only** the returned URLs as reference inputs.
4. Sort them: sheets (`CHAR_`, `GUEST_`, `ENEMY_`) vs plates (`ENV_`).
5. For each sheet, note every pose it contains. For each plate, note the layout, light direction and key landmarks.

### 2. Build the frame

Every image prompt describes **one single frozen moment**. Resolve and include:

- **The moment:** exactly what is happening in that instant (mid-leap, claw reaching, blade striking).
- **Framing:** wide or medium-wide only, as set in the Hard Lock. Even when the prompt focuses on one detail (a hand, a gauntlet, a face), keep the whole character and their surroundings in frame and let the detail sit inside that wide frame.
- **Camera:** where the camera stands, its height, and what it faces (e.g. "in front of the skycar, low, facing it head-on").
- **Placement:** who is left, right, foreground, background.
- **Direction lock:** which way every person, vehicle and ship faces and travels. Vehicles are always nose-first in their direction of travel. Chasers are behind what they chase and face the same way.
- **Enemies:** caught mid-attack — charging, lunging, firing, grabbing. Never idle, never hesitant, never holding back.
- **Physics:** true weight and momentum frozen in the moment — dust, debris, sparks, spray and cloth all react to the action. Bystanders react to what is happening.
- **Lighting and palette:** hero side amber / gold / white / teal; Khorr side obsidian black / blood-red; Nyra's blades blue-white lightning.
- **Negative constraints:** no text, no watermark, no logos, no borders, no split panels, no duplicate characters, no studio background, no cartoon or CGI look.

### 3. Generate

Call the host's image-generation tool with:
- the model set explicitly to **Seedream 5.0 Pro** (not lite),
- the full frame prompt,
- the uploaded reference URLs,
- ratio `16:9`,
- the highest available resolution, targeting 4K (3840 × 2160).

> The exact tool name and the model/version parameter name depend on the host. Use the image tool the host provides and pass Seedream 5.0 Pro in whatever model/version field that tool expects; never invent a tool name. If Seedream 5.0 Pro is unavailable for a call, record it as a failed item (`deferred_retry`) instead of silently generating with the lite version.

### 4. Deliver natively, then continue

- As soon as the image returns, deliver it through `NotifyHuman` with the renderable image asset (`image_url`, `output_url`, `url`, `result_url` or local path), labelled with its prompt number (e.g. `IMAGE 24 — KAEL`).
- Deliver it **as it is** — the native full-resolution result. No re-compression, no cropping, no watermark, no collage.
- Immediately continue with the next pending prompt. Do not wait for the user.

---

## Bulk TXT / Notepad Autopilot

Use when the user pastes several image prompts or uploads a `.txt` file.

1. Read the whole input first. Extract the prompts in their original order using their numbers/headings (e.g. `IMAGE 23`, `IMAGE 24`).
2. Give each prompt a stable `prompt_id` and keep the original text unchanged as `source_prompt`.
3. Keep a queue with states `pending`, `generating`, `completed`, `deferred_retry`, `discarded`, and checkpoint it after every change so the run can resume without redoing finished images.
4. Process in order. Before each call mark `generating`; on success mark `completed`, store the asset, deliver it natively, and move straight to the next `pending` item.
5. Process at most **4 images per reply/cycle**, then automatically continue from the next `pending` item in the next cycle until the queue is empty.

### Error isolation — skip, record, continue

If a prompt fails for any reason (moderation, tool error, timeout, empty result, missing URL):
1. Record the error and the `source_prompt`.
2. Mark it `deferred_retry`. Do not retry immediately.
3. Continue with the next `pending` prompt.

### End-of-queue retry pass

After no `pending` or `generating` items remain:
1. For each `deferred_retry` item, find the smallest likely cause.
2. Technical failure → retry the original prompt unchanged.
3. Moderation failure → only if the requested image itself is allowed, replace the minimum wording with neutral wording that keeps the same scene. Never disguise disallowed content.
4. Retry **once only**. Success → `completed` and deliver. Second failure → `discarded`, record the reason.

The run is complete when every prompt is `completed` or `discarded`.

---

## Quality Check Before Delivery

Before delivering, check the image against the prompt. If any of these fail, regenerate once before delivering:

- Only one of each character (unless more were requested).
- Every character matches its sheet — face, outfit, weapons, markings, correct arm.
- The location matches its plate.
- Vehicles face and travel the way the direction lock says.
- No studio background, text, watermark, panel borders or cartoon/CGI look.
- Framing is wide or medium-wide: nothing zoomed in, nothing tightly cropped, no heads, hands or feet cut off at the frame edge.
- 16:9, 4K-class resolution.
- Generated with Seedream 5.0 Pro (not lite).

---

## Image Prompt Template

```
IMAGE [number] — [NAME]
References: [file names].
[Name] = [FILE]. Inspect all [n] poses from the [FILE] reference sheet ([pose list]) to lock 360° character consistency.
(one line per character / enemy)
Location = [ENV file]. Copy this location exactly as it appears in the image; [where in it].
[Vehicle line if needed.]
Single frozen moment: [what happens in this instant, each character with "(follow [FILE] pose sheet)"].
Camera: [position, height, facing]. [Who is left/right/foreground/background.] [Direction of travel.]
Lighting: [light sources and colours].
Framing: wide / medium-wide cinema shot, full bodies visible with space around them, environment clearly visible. Not zoomed in, no close-up, no tight crop, nothing cut off at the frame edges.
Photoreal live-action feature film still, 16:9, 4K (3840x2160), 35mm film grain, natural atmospheric haze. Only one of each character in the frame. No text, no watermark, no borders.
```
