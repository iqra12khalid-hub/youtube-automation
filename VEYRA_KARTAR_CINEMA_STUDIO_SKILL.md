---
name: kartar-cinema-studio
description: kartar2.5 + Cinema Studio — Seedance 2.5 film production skill. Keeps every kartar2.5 rule (hard-locked single 30-second generation, autopilot, bulk TXT queue, skip-and-continue, one end-of-run retry, opt-in Kartar Mode watchdog) and adds a Higgsfield-style Cinema Studio layer on top - a saved Elements registry, camera/lens/lighting/palette/emotion presets written as prompt text, keyframe-first image-to-video, real-last-frame continuity between clips, scale and depth locks, and a quality check before delivery.
---

# kartar + Cinema Studio — Seedance 2.5 — 30s Hard Lock

This skill has two layers:
- **ENGINE (kartar2.5):** how videos are generated, queued, retried and delivered. Unchanged.
- **CINEMA STUDIO:** how every prompt is built and every clip is prepared before it reaches the engine.

---

# PART 1 — ENGINE (kartar2.5, unchanged)

## Hard Lock (non-negotiable, overrides everything below)

- **Duration is locked at 30 seconds.** Always pass `duration: 30`.
- **One single continuous segment.** One tool call = one complete 30-second video. This is the only delivery path.
- **Model is locked to Seedance 2.5.** Always pass `model_version: "seedance_2.5"` explicitly in every call.
- **Skill identity:** This skill is **kartar-cinema-studio** (built on kartar2.5).
- **Bulk runs must not stop because one prompt fails.** A failed item is deferred, checkpointed, and the next pending prompt is processed.
- **No infinite retries.** Failed prompts receive at most one sanitized retry after the main queue finishes; a second failure is discarded.
- **Autopilot generation is the default.** Never ask for `go`, `confirm`, `yes`, `start`, or any other approval before generating a video.
- **Kartar Mode is OFF by default.** Never register, start, or run the cron/watchdog until the user manually says **"kartar mode activate"**.

### Anti-spreading rules — never do any of these:
- Never split into two 15-second clips or any multi-part sequence.
- Never propose, offer, suggest, or mention a two-segment / two-clip / chaptered / multi-part delivery.
- Never offer a shorter-compressed fallback.
- Never present a "platform limitation", "tool cap", "runtime doesn't support 30s" disclaimer, Plan B, fallback, or workaround.
- Never ask the user to choose between split options, segment counts, or duration fallbacks.

### Special cases
- User explicitly requests under 30 seconds → still one single call, `duration` = requested length (5–30 s).
- User requests longer than 30 seconds → still one single 30-second call compressing the narrative arc.

### Maximum videos per reply: **4 (hard cap)**.

## Model Specification
- **Model:** Seedance 2.5 (`seedance_2.5`) — always specify explicitly.
- **Duration:** 30 seconds, single continuous segment.
- **Supported ratios:** 21:9, 16:9, 4:3, 1:1, 3:4, 9:16. **Default for this skill: 16:9** (film project).
- **Input modes:** `text_to_video`, `image_to_video`.

## Autopilot Generation Gate
- The user's prompt, pasted prompt list, or uploaded TXT file is sufficient authorization.
- Never ask for confirmation; never present a blocking summary before generating.
- Infer missing non-essential parameters instead of asking.

## Bulk TXT / Notepad Autopilot Workflow
1. Read the whole input first. Extract prompts in original order (numbering, headings, separators).
2. Do not shorten, summarize or creatively rewrite source prompts (the Cinema Studio layer only ADDS locks and presets around them).
3. Give each prompt a stable `prompt_id`; keep the original text as `source_prompt`.
4. Persistent queue with states `pending`, `generating`, `completed`, `deferred_retry`, `discarded`. Checkpoint after every change.
5. Process in order, at most 4 generations per cycle, then continue automatically in the next cycle until the queue is empty.
6. Before each call mark `generating`; on success mark `completed`, store the asset, deliver via `NotifyHuman`, continue.

### Error Isolation — Skip, Record, Continue
Any failure (moderation, invalid prompt, tool error, timeout, crash, empty session ID, missing URL): record the error and `source_prompt`, mark `deferred_retry`, do not retry immediately, continue with the next `pending` prompt.

### End-of-Main-Queue Retry Pass
Only when no `pending`/`generating` items remain:
1. Analyse each `deferred_retry` item for the smallest likely cause.
2. Safety failure → retry only if the requested video itself is allowed; replace only the minimum wording with neutral wording. Never disguise disallowed intent.
3. Technical failure → retry the original prompt unchanged.
4. Retry once only. Success → `completed` + deliver. Second failure → `discarded`, record the reason.

### Completion
The run is complete when every prompt is `completed` or `discarded`.

## Kartar Mode — 15-Minute Watchdog (opt-in only)
- Default `kartar_mode_active = false`. Activate only on the user command **"kartar mode activate"**.
- Job `kartar2.5-watchdog`, cron `*/15 * * * *`, reads the same queue checkpoint.
- Each tick: no active run → do nothing; run complete → do nothing; items left and no progress → send "Continue kartar video generation from the saved queue. Resume with the next pending prompt; do not restart completed items." Never duplicate completed videos; do the retry pass only after the main queue is exhausted.

## Tool Call Pattern (the only pattern)
```
image_to_video(
  model_version: "seedance_2.5",
  duration: 30,
  ratio: "16:9",
  prompt: "<full Cinema Studio prompt>",
  image_reference_url_list: ["<first frame>", "<element>", "<element>", ...]   // URLs from FileBatchUpload only
)
```
Use `text_to_video` only when a clip has no first frame and no reference images.
Deliver every video via `NotifyHuman` with a renderable asset.

---

# PART 2 — CINEMA STUDIO LAYER (added on top)

## A. Elements Registry (the project's saved "@elements")

Before any generation, load the reference folder and bind every file name to what it is. Inspect every image with `Read`, upload with `FileBatchUpload`, and keep the name → URL map for the whole run.

| Element | File | Role |
|---|---|---|
| Teo | `CHAR_Teo.jpg` | hero sheet: front, 3/4, side, back, face close-up; gauntlet on RIGHT forearm |
| Nyra | `CHAR_Nyra.jpg` | hero sheet; twin swords crossed on her back |
| Kael | `CHAR_Kael.jpg` | hero sheet |
| Dax | `GUEST_Dax.jpg` | guest sheet |
| Oris | `GUEST_Oris.jpg` | guest sheet |
| Rhea | `GUEST_Rhea.jpg` | guest sheet |
| Khorr soldier | `ENEMY_Soldier.jpg` | enemy sheet; faceless |
| Khorr Commander | `ENEMY_Commander.jpg` | enemy sheet; faceless |
| Mothership | `Enemy_ship.jpg` | vehicle sheet |
| Khorr small ships | `Eenmy_responders.jpg` | vehicle sheet |
| Solace fighter | `Friendly_responders.jpg` | vehicle sheet |
| Rust Moth | `ENV_09_rust_moth_exterior.jpg` | vehicle |
| Civilian traffic | `civilain_vehicles.jpg` | vehicle sheet |
| Civilians | `public people .jpg` | people sheet (note the space before .jpg) |
| Solace city | `ENV_01_solace_city.jpg` | location sheet |
| Mothership hall | `ENV_05a_mothership_hall.jpg` | location |
| Mothership bridge | `ENV_05c_mothership_bridge.jpg` | location |
| Golden sky | `ENV_06_sky_peaceful.jpg` | location |
| Salt flats | `ENV_10_dead_expanse.jpg` | location |

Element rules (written into every prompt that uses them):
- Attach ONLY the elements the clip needs; say "use only these, ignore any other image".
- Every character line: "`<Name>` = `<file>`. Inspect all views on this sheet before filming; keep face, outfit, weapons and markings identical."
- **Sheets are DESIGN ONLY.** Never copy a sheet's straight front/side/top camera angle; film through the camera preset.
- Mothership: never show its front face with the two large red lights; show its side and underside; beams fire from its underside vents. Ignore the small jet on its sheet — it is not to scale.
- Khorr are always completely faceless. The enemy fleet is only the mothership and its small ships.

## B. Presets (the "buttons" — always written out as prompt text)

Every prompt starts with a PRESETS block. Take values from the clip; fill any missing value with the project default.

| Preset | Project default |
|---|---|
| Genre / production | photoreal live-action sci-fi feature film, high-budget Hollywood (Dune, Blade Runner 2049) |
| Camera body | ARRI Alexa 65 large format |
| Lens family | Panavision anamorphic (C-Series / E-Series) for the whole film |
| Focal length | per shot: 14–24mm (inside/looking up, towers tall), 35–50mm (people, walking, dialogue), 75–85mm (faces, details), 135–180mm (distant scale, compression) |
| Aperture | T2.8 people, T4–T5.6 wide landscapes |
| Camera move | locked-off, slow dolly, or tracking at subject speed. Never handheld, never zoom |
| Look | anamorphic horizontal flares, oval bokeh, 35mm grain, 24 fps natural motion blur |
| Colour palette | Solace: bone-white, cream, amber · Khorr: matte black, blood-red · golden dusk, two suns, ringed gas giant |
| Lighting | practical sources only (sun, lamps, fire, vents, glow); strong contrast; atmospheric haze |
| Emotion | one line per character per clip |
| Negative | no text/letters/symbols anywhere, no watermark, no cartoon/CGI look, no duplicates, no extra characters, no morphing, no reverse motion, no zoom |

## C. Locks (always included)
- **Physics lock:** real weight and momentum; feet stay in contact; hits push back; cloth, smoke and dust trail behind motion; nothing floats.
- **Screen-direction lock:** state who moves left→right / right→left; it never flips inside the clip.
- **Set lock:** the location is built only from its reference (e.g. Solace = stacked shell towers, root bridges, cream walkways, amber lamps, ribbed arches, Spine Tower).
- **Scale & depth lock (for anything huge):** write three depth layers (foreground / middle / far). The huge object sits at the SAME depth as what it is above (e.g. the mothership directly ABOVE the city, not in front of it), is as hazy as that layer, casts its shadow onto it, runs out of frame, and moves slowly. Clouds pass below it.
- **State log:** what is already damaged or changed from earlier clips.
- **People lock:** bystanders react to danger.
- **Enemy lock:** the Khorr act instantly and relentlessly.

## D. Production Workflow per clip (runs before the Engine call)

1. **Resolve the clip** from the prompt file: title, link (`CUT` or `CONTINUOUS from clip N`), elements, camera, timeline, end frame.
2. **Pick the first frame:**
   - `CONTINUOUS from clip N` → the first frame is the **real last frame extracted from finished clip N** (cut it from the video file; never draw a new still). If clip N is not finished yet, keep this clip `pending` and process the next independent clip; come back when clip N is `completed`.
   - `CUT` with a keyframe prompt → generate the keyframe image first (Seedream 5.0 Pro, 16:9, highest resolution, with the clip's elements), check it against the elements and locks, regenerate once if wrong, then use it as the first frame.
   - `CUT` without a keyframe → no first frame; elements only.
3. **Build the prompt:** PRESETS block + element lines + LOCKS + the clip's timeline and end frame + dialogue + sound + negative. Keep the clip's own text intact; only add around it.
4. **Engine call:** `image_to_video` with the first frame as the FIRST image in `image_reference_url_list` (or the host's dedicated first-frame input if it has one), then the elements; `duration: 30`, `ratio: "16:9"`, `model_version: "seedance_2.5"`.
5. **Quality check before delivery** (look at frames from start, middle and end):
   - characters, vehicles and locations match their elements
   - no text or symbols on screen; no duplicates; faceless Khorr
   - screen direction never flips; scale and depth correct (huge things not in front of the camera)
   - for continuous clips: the first frame matches the previous clip's last frame
   If a check fails, regenerate once (this counts as the item's single retry). Then deliver.
6. **Extract and store this clip's real last frame** so the next continuous clip can use it.
7. Deliver via `NotifyHuman` with the clip number and title.

## E. Order rules for bulk runs
- Independent (`CUT`) clips can run in any order inside the 4-per-cycle cap.
- A `CONTINUOUS` clip always waits for its previous clip to be `completed` and its last frame extracted.
- Never generate two clips of a continuous chain in parallel.
