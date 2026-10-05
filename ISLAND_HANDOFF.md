# THE ONE-EYED ISLAND — FULL HANDOFF (read this first, all of it)

This file lets any AI take over the project **exactly where it stopped**. Read it fully before answering the user.

**Status at handoff (1 Oct 2026, evening):**
- **Done and edited:** clips 1, 2, 3, 4, 4B, 5, 6, 6B, 7 (`planeinwater` clip, made with the Kartar skill).
- **Now in progress:** the **BRIDGE clip** (Noor sitting → gets up → walks → creature watching from behind → she ends standing at the water = first frame of clip 7). It is being made in **Adobe Firefly → Kling 3.0** with **first frame + last frame**. Prompt in section 8.1.
- **Next:** the human-tribe reference sheet, then the next story clips (section 8.4).

---

## 1. Who the user is and how to work with them

- Makes AI films for YouTube. Writes fast, informal English with many typos — read for meaning, never comment on it.
- Wants **simple words, short answers**, and **full copy-paste prompts** (never "use the one from before" — always paste the complete prompt again).
- When they are still explaining an idea, **wait**. Don't write prompts until they say go / ask for it.
- Very careful with **credits**: prefer trim / zoom-crop / reverse / mixing takes in CapCut over regenerating.
- Sends every result (video file or screenshot). The AI must **analyse the video frame by frame** (contact sheet + find cuts + listen to audio) and give an honest verdict: what's good, what's wrong, keep / trim / redo, with exact seconds.
- **Use the user's exact file names** (section 4). Once the AI used a wrong name (`REF_beach_plane.jpg`) and the user had to correct it.
- When the user corrects you, accept it directly ("You're right…") and fix it — don't argue.
- Edits in **CapCut**. Plans **ElevenLabs** for Noor's voice (one consistent voice) and sound effects.
- The user uses several accounts on some tools — their choice, don't discuss it. **Don't help** with getting phone numbers from virtual/temporary SMS sites or evading sign-up limits (this was declined once; stay polite and move on).

## 2. Tools (what each is good for — learned the hard way)

| Tool | Use it for | Facts / limits |
|---|---|---|
| **Dola** (ByteDance, Seedance 2.x) | main video tool, Noor's face close-ups, dialogue, acting | **max 15 s** per video (a 30 s prompt gets squeezed into 15 s → looks fake). 720p, 24 fps, has sound. Dola is a **chat assistant with an extra safety layer** in front of Seedance — stricter than the model. Load the **original Kartar skill** (`KARTAR_ORIGINAL_SKILL.md`) in the chat. |
| ~~VEYRA Kartar Cinema Studio skill~~ | **NEVER for this film** | injects sci-fi attack text → clip 1 got blocked. |
| **Adobe Firefly → Kling 3.0** | blocked scenes, **first + last frame bridges**, creature shots, Noor from behind/far | **free daily generations**, 15 s, 16:9, **Multi-shot** toggle, **@ Elements** (saved reference images you tag in the prompt), **prompt limit 2,500 characters**, **no sound** (Audio OFF; add sound in CapCut). Face can drift → use the face-only element. |
| **Kling website (klingai.com)** | backup | user has **66 trial credits**. "3 trials left" next to 1080p = 3 allowed uses of the VIP 1080p mode, **each still costs credits**. Turn Native Audio OFF to save credits. Check the cost on the Generate button before clicking. Use Firefly first (free). |
| **Google Flow (Veo)** | frames-to-video | ~8–10 s clips; **x4 = 4 videos = 4× credits → set x1**. It refused the bridge clip (very strict with a real woman photo + hidden creature). |
| **Omni** | image-to-video with camera moves (/fullshot, /360, /selfie…) | changed Noor's face into another woman → only use it when her face is hidden (from behind / far / storm shots). For creature stills use push-in or parallax, **never /360** (it would orbit and show the creature's face). |
| **Muse** | — | failed. Don't use. |
| Dola image mode (Seedream) / Flow (Nano Banana) / Firefly Image | reference sheets, still images, image edits | never make images inside the Kartar video chat. |
| **CapCut** | editing | trims, zoom-crop, reverse, mixing takes, flashbacks, sound. |
| **ElevenLabs** | voice + SFX (planned) | Voice Design "Noor"; Voice Changer on Dola audio keeps lip sync. |

**Which tool for which shot (rule of thumb):**
- Noor's **face close-up / talking / acting** → **Dola**.
- Noor **from behind, far away, hands, feet**; **creature** shots; anything **Dola blocks**; **bridges between two frames** → **Firefly/Kling**.
- **Hard filter moments** → a **still image + slow camera move** (Omni/Kling), or wide/dark/far shots.

## 3. The film and the STORY (revised — this is the current version)

**Title:** THE ONE-EYED ISLAND · survival horror / mystery · ~25 min ≈ 100 clips × 15 s.
`ISLAND_SCRIPT.md` = the original 100-clip script (written before the story change — use it for structure and the first act, but follow the revised story below).

**Noor:** a young woman who flies her own small plane **for fun — NOT a commercial pilot**. Flies alone over the ocean, enters a strange eye-shaped green-lightning storm, crashes in the sea, escapes the sinking plane, washes up on a strange island.

**REVISED STORY (user's decision, 1 Oct):**
- **ONLY ONE creature in the whole film:** a giant **one-eyed monster** that lives in the **cave in the cliff** (the cliff/cave in `LOC_island.jpg`). It **secretly watches her from the start and protects her**. Its design = `CREATURE_Chief.jpg` (in Firefly the element is named **monsterchartofdifposes**).
- **The enemy is a HUMAN man-eating tribe** (masks, face paint, bones, spears) in the jungle village (`LOC_village.jpg`), led by a **human chief** (needs his own sheet — not made yet). `CREATURE_Tribe.jpg` (one-eyed beings) is **no longer used**.
- Rough plan:
  1. She survives on the beach; the eye/creature keeps watching (never clearly shown early on).
  2. The tribe captures her (implied / shown wide, see filter rules).
  3. The monster crashes into the village and rescues her but is wounded by spears/arrows.
  4. It collapses near its cave. She **dives to the plane wreck** (it rests on a reef, nose dipped, tail up) for the **first-aid box** and bandages it. Trust/friendship.
  5. The tribe comes for both → final fight together → her escape → goodbye with the monster.
- **No gore, the cannibalism is NEVER shown** — only signs: big iron pot on a fire, bones far in the background, other castaways' belongings on poles (shoes, a watch, a necklace), drums, faces in firelight.
- Old idea still usable: the chief takes Noor's gold coin necklace.

## 4. Reference files — EXACT names (user's folder)

| File | What it is | Notes |
|---|---|---|
| `CHAR_Noor.jpg` | Noor multi-pose sheet | **Fair skin**, soft features, brown eyes, long dark brown hair (ponytail), **white t-shirt, black jeans, black shoes, small gold coin necklace**. Sheet has printed labels → always "ignore any printed words on the sheet". Firefly element: **Noora** |
| `CHAR_Noor_face.jpg` | face-only crop of her sheet (in `ISLAND_FRAMES/`) | Firefly element: **nooraface** |
| `CREATURE_Chief.jpg` | **the one-eyed monster** sheet (FULL BODY FRONT / 3/4 / SIDE / **BACK**, head, eye) | Firefly element: **monsterchartofdifposes**. **Back view:** bald head, small ears, wet glossy grey-brown cracked skin, torn faded yellow-tan sailcloth over the **left** shoulder hanging to the knees (right shoulder bare), brown leather strap from **upper left shoulder to lower right hip**, thick twisted rope belt with hanging ends, from behind only a thin cord + small pendant at the nape (the **compass necklace is on the FRONT only**). |
| `CREATURE_Tribe.jpg` | old one-eyed tribe | **not used anymore** |
| `VEH_plane.jpg` | small white high-wing plane, dark-red stripes, red prop tips | always "no letters, no numbers, no registration". Firefly element: **plane**. Cut-out version: `ISLAND_FRAMES/VEH_plane_side_nobg.png` |
| `LOC_island.jpg` | aerial of the island: curved white beach, palms + giant ancient trees, green lily lagoon, grey cliff with cave | Firefly element: **island** |
| `LOC_village.jpg` | the tribe's thatched-hut village in the jungle | |
| `ENV_storm.jpg` | eye-shaped ring storm with green lightning | clips 2–3 |
| `planeinwater.jpg` | **the user's own composed still**: Noor from behind at the water's edge shading her eyes, golden light, footprints, opaque t-shirt; plane tail small far out at sea (~500 m) on the right | first frame of clip 7, **last frame of the bridge**. Weak point: the plane looks pasted on (no splash/reflection). |
| `Noor_sitting.png` | close-up of Noor sitting on the sand, wet hair (end of her waking-up clip) | **first frame of the bridge** (in `ISLAND_FRAMES/`) |
| creature still (user's image, no fixed name yet) | from BEHIND the creature in the woods, hand gripping a tree, Noor small on the beach, plane far out | optional insert shot; compass necklace wrongly on its back + strap mirrored (edit prompt in 8.3) |

**Upload only the files a clip needs.** Island/beach/jungle → `LOC_island.jpg`; village → `LOC_village.jpg`; sky/sea storm → neither.

## 5. Production status

| # | Content | Status / how it was made |
|---|---|---|
| 1 Flying Alone | plane over sunset ocean, Noor relaxed, family photo | ✅ Dola |
| 2 The Storm Ahead | eye storm ahead, compass spinning, enters storm | ✅ Dola |
| 3 Inside the Storm | Omni storm shots + Dola cockpit "Mayday!" | ✅ mixed edit |
| 4 Impact | from `Clip003_last.png`: fall, scream, impact, underwater | ✅ Dola |
| 4B Escape | from `Clip004_start4B.png`: unbuckles, swims out, plane settles on reef tail-up, surfaces | ✅ Dola; second plane zoom-cropped out |
| 5 Washed Ashore | aerial descending to her sleeping face | ✅ CapCut **reversed** edit (remakes were blocked 3×) |
| 6 She Wakes | from `Clip005_lastface.png`: gasp, coughs seawater, sits up | ✅ Dola. Last frame: `Clip006_last.png` |
| 6B Alone | from clip 6 last frame: glide in, circle her, rise to the whole island | ✅ Dola. Save name `Clip006B.mp4`. Small "Dola AI" watermark top right → crop/blur |
| 6C She Remembers | breakdown + "HELP!" scream, flashbacks | prompt written (dramatic version), **not on the timeline** — user skipped it for now |
| **BRIDGE** | `Noor_sitting.png` → gets up → walks tired → **creature from behind** in the woods → ends on `planeinwater.jpg` | ⏳ **in progress in Firefly/Kling 3.0** (section 8.1). Flow refused it. |
| 7 The Tail in the Sea | first frame `planeinwater.jpg`, 3 slow shots: push-in on her back / profile close-up "That's my plane..." / from dark jungle leaves, she is small on the beach | ✅ **Kartar_Skill_1.mp4** (Dola, Kartar skill) — looks real. Issues: plane looks pasted, hair fairly dry, odd hand ~9.5–10.5 s (trim), whisper unclear (add in ElevenLabs). A "redo" prompt adding the creature from behind was written (8.2) but not confirmed as made. |

**Rejected:** the first Kartar 30-s exploring prompt (came out 15 s, 11 fast cuts, dry fresh hair — "doesn't look real"). `ISLAND_FRAMES/Clip007_last.png` is from that rejected clip. First Firefly test (face changed into another woman, wrong trees). Second Firefly test (good, but see-through wet shirt + plane too close) — optional parts only.

**Timeline order now:** 1 → 2 → 3 → 4 → 4B → 5 → 6 → 6B → **BRIDGE** → (optional creature-still push-in) → 7 → next.
(The user's CapCut timeline ends at ~1:57 on the 6B aerial.)

## 6. HOW WE FORCE CHARACTER CONSISTENCY (the user's proven method — always do all of it)

1. **One multi-pose reference sheet per character** (front, 3/4, side, back, face close-up), made once, **never changed**. Same for the monster, plane, locations.
2. **Upload the sheet in EVERY clip the character appears in**, even tiny appearances (hands only, far away, from behind).
3. **Exact file names** in the prompt + only the files the clip needs: `"use_only_these": [...]`.
4. **One line per sheet** saying what it is and what to copy, e.g.
   `"CHAR_Noor.jpg": "Noor - her face must match CHAR_Noor.jpg exactly: same young face, soft features, fair skin, same age. Dark brown hair, white t-shirt, black jeans, black shoes, small gold coin necklace. Design only, ignore any printed words on the sheet."`
5. **THE USER'S CORE RULE — "study her in 3D, then pose her"** (put it in every Dola prompt, in references):
   `"pose_rule": "Before filming, study CHAR_Noor.jpg from every direction - front, right side, left side, back, from above and from below - and understand exactly how she looks as one real person in 3D. Then place her in the pose of each shot, and show her from that shot's camera angle exactly as the matching views on the sheet show her: same face shape, same eyes, nose and lips, same hair, same body, same clothes and necklace. Do not invent anything the sheet does not show."`
   Same rule for the monster (replace the file name).
6. **Inspect ALL views** and name the matching view per shot: "seen from the side - match the SIDE view of CHAR_Noor.jpg", "from behind - match the BACK view", "close-up - match the face close-up". For the monster from behind: "exactly like the FULL BODY BACK view of CREATURE_Chief.jpg".
7. **"Design only"** — never copy the sheet's grey background, straight poses or printed labels.
8. **Describe her current state every time** (wet, sandy, tired) so the model changes only that, not the person.
9. **Face lock in the negative:** "Noor's face must not change or look older".
10. **Firefly/Kling elements:** add **Noora** (full sheet) + **nooraface** (face-only crop — Kling copies a face far better from one clear face picture) + **island** (+ **plane**, + **monsterchartofdifposes** when needed). In the prompt: "face exactly @nooraface in every shot, same fair skin, same age". Put each element tag (chip) **only in the part of the prompt where that thing appears** (picked from the @ list — typed text is not a link).
11. **Wetness / state is held by a START IMAGE, not by text.** Text alone ("soaking wet hair") gets ignored and she turns dry and fresh. Use a first frame that already shows her wet. Add: "hair always soaking wet and messy, never dry, never clean, never styled".
12. **Clothes:** always "thick opaque white cotton t-shirt, NOT see-through" (a Kling result had a see-through wet shirt → bad for YouTube) and "wearing black shoes".
13. **When the face still drifts:** show her from behind / side / far / hands; keep front close-ups for Dola; or trim and replace that shot from another take.
14. Same sheets + same prompt format on any account → same character. Tools remember nothing between chats.

## 7. Hard rules learned (follow every time)

**Prompt format (Dola):** first line `Make this video 15 seconds, one generation.` then JSON: clip, title, duration_seconds 15, aspect_ratio 16:9, (first_frame), format, references (use_only_these + one line per file + pose_rule), shots (time / camera with lens mm / action), dialogue, acting, style, physics, sound, negative.

**Prompt format (Firefly/Kling):** plain text, **under 2,500 characters**, timed shots (0-4s…), element tags, then a short physics/negative line. Settings: Kling 3.0, 16:9, 15 s, Multi-shot ON (one shot box with the whole prompt is fine; the user prefers ONE prompt, not separate shot boxes), Audio OFF.

**Realism (very important):** few, **long, slow shots** (2–4 per 15 s) + a **real-looking start image** = looks real. Many fast cuts (11 in 15 s) + no start image = looks fake/advert. Never ask for 30 s in Dola.

**Frames / joins:**
- Continue the same action → use the real last frame of the previous clip as the first frame. Put above the JSON: `FIRST FRAME: Use the uploaded image <name> as the FIRST FRAME of this video (image_to_video). The video starts exactly on this image. Do not draw a new picture.` and upload that image FIRST.
- If the last frame is black/white (fade), take the **last clear frame before the fade**.
- A jump between two different poses (sitting close-up → standing at the water) → make a **bridge clip with first + last frame** (Firefly/Kling or Flow).
- Dola cannot reliably extract a last frame itself — the user uploads the frame.

**Content filters (Dola is the strictest):**
- Blocks **Noor lying still with eyes closed** ("vulnerable/incapacitated woman").
- Blocks **a hidden watcher + Noor alone in the same shot** ("stalking / threat").
- After a few blocks the **whole chat is poisoned** — even harmless prompts get blocked → **open a brand-new chat**.
- Passes: Noor awake and active; environment-only shots; distant aerials.
- Fixes: put the creature/watcher in **shots without Noor** (or with Noor tiny and far, from behind the creature), make them in Firefly/Kling, or use a **still + slow push-in**. Avoid words: unconscious, lifeless, motionless, victim, stalking.
- **Tribe scenes plan:** tribe-only shots and Noor-only shots, joined in editing; Noor always **active** (hiding, sneaking, cutting ropes, running, fighting back) — never tied/held/lying while men stand over her; capture implied or very wide; neutral words (avoid captured/tied/prisoner/kill/eat/cannibal/blood → use "the tribe gathers", "ceremony", "the feast fire", "drums", "spears raised"); masks help (costume, no face consistency needed).

**Other rules:**
- **Show every move between places on screen (user's rule).** Never cut from the beach straight to inside the jungle. She must be seen walking from the beach to the tree line and stepping in, with the camera following behind her and the light changing from bright sand to green shade. Keep the direction clear: when she goes into the jungle, she faces the jungle and the sea is behind her.
- Never use age words, "girl" or "kid" for Noor → "young woman".
- No text anywhere: "no text, no letters, no numbers, no watermark"; plane "no registration"; gauges "only needles and tick marks".
- Sound line lists every sound source in the picture. (Kling/Firefly are silent → sound in CapCut/ElevenLabs.)
- Plane flies **left to right**, always forward.
- No gore, no blood, no injuries shown in detail.
- Plane in the sea: "only the small tail fin far away… the rest is under water", "small, smaller than her hand in the frame, near the horizon", "the camera does not move closer". Otherwise models draw a whole floating plane, or bring it close.
- Monster: **never show its face or eye** until the story reveals it; from behind only. In camera-move tools never orbit/360.
- Small errors → trim, zoom-crop, reverse, or mix takes. Regenerate only when the error is central.

## 8. Exact prompts in progress / next

### 8.1 BRIDGE clip — Firefly → Kling 3.0 (IN PROGRESS)
Setup: **First frame** `Noor_sitting.png` · **Last frame** `planeinwater.jpg` · Kling 3.0 · Widescreen 16:9 · 15 s · Multi-shot ON (one shot box) · Auto ON (if it makes one continuous shot with no jungle cut, retry with Auto OFF) · Audio OFF.
Elements: **monsterchartofdifposes** (= `CREATURE_Chief.jpg`) placed as a chip at **[CHIP]**; add **Noora / nooraface** if Firefly allows them too. Clear any old text in the box first (there was leftover "missile" text from another project).

```
15-second photoreal survival film, golden late-afternoon light, soft haze, 35mm grain, slow steady camera. Start exactly on the first frame, end exactly on the last frame.

Noor: young woman, fair skin, soft features, brown eyes, same face in every shot. Long dark brown hair soaking wet, stuck to her face and neck, sand on her arms. Thick opaque white t-shirt, never see-through. Black jeans wet with sand, black shoes, small gold coin necklace. Exhausted but alive.

0-4s: Medium close-up, same place as the first frame. Noor slowly pushes the wet hair off her face, breathes heavily, presses one hand into the sand and gets up slowly, unsteady and tired.

4-7s: Wide shot. She walks slowly along the white sand beach toward the water, tired heavy steps, arms loose, feet sinking into wet sand. Dark jungle edge with huge ancient trees behind her.

7-11s: Camera deep inside the dark jungle, BEHIND the tall thin creature [CHIP]. Only its back, head and shoulders are seen, dark and out of focus in the foreground. Its face and eye are NEVER shown. Back exactly as the back view on the reference sheet: torn yellowed sailcloth over its left shoulder, one strap from the left shoulder to the right hip, rope belt, nothing on its back. Its long grey-brown bony fingers slowly tighten on a tree trunk. Through the leaves, Noor is small and far away on the bright beach, in sharp focus.

11-15s: On the beach behind Noor. She reaches the shallow water, stops, raises one hand to shade her eyes and looks out to sea. Far out, about 500 metres away, the white tail of her small plane sticks up from the waves. Hold still and end exactly on the last frame.

Physics: real weight, slow natural movement, heavy wet hair, sand and water react realistically.

Negative: no creature face, no eye, no glowing eye, no second creature, no other people, no dry hair, no see-through shirt, no second plane, no plane near the shore, no text, no watermark, no cartoon or CGI look, no fast cuts.
```
(⚠️ An earlier version given in chat said "olive skin" and "khaki trousers" — that was WRONG. Noor = fair skin, black jeans, black shoes. Use the version above.)
If the creature's face shows → trim it in CapCut. If the end doesn't land on the last frame → cut at the last good frame and use the creature-still push-in (8.3) as a filler.

### 8.2 Clip 7 redo with the creature (optional — paste in the SAME Dola chat that made Kartar_Skill_1; upload `CREATURE_Chief.jpg` too)
```
Make this video 15 seconds, one generation.

REDO the last video (clip 7 "THE TAIL IN THE SEA"). Keep EVERYTHING the same - same first frame planeinwater.jpg, same 3 slow shots, same camera, same light, same beach, same Noor (CHAR_Noor.jpg) - and change ONLY these things:

1. THE PLANE: it must look like a real wreck sitting IN the water, not pasted on - nose dipped under the surface, white tail fin with the dark-red stripe at an angle, small waves breaking white against it with spray, its reflection shimmering on the water. Still small and far, about 500 metres away.

2. HER HAIR: soaking wet and heavy in every shot - wet strands stuck to her neck and cheek, drops of water falling from the ends. Not dry, not neat.

3. HER HAND (shot 2): she lowers her open hand slowly and naturally to her side - no fist, no strange hand.

4. HER WHISPER (shot 2): clear and audible: "That's my plane..."

5. SHOT 3 - THE CREATURE: film it from deep inside the dark woods, from BEHIND a large creature hiding there. In the dark blurred foreground we see only the edge of its huge grey-brown cracked shoulder and its giant hand with very long thin bony fingers (skin and fingers like CREATURE_Chief.jpg) slowly gripping a tree trunk. Through the leaves beyond it, Noor is a small figure far away on the bright beach looking at the sea. The creature stays still and watches her; its fingers tighten slowly on the bark. NEVER show its face, head or eye - only shoulder and hand from behind, out of focus.

Sound for shot 3: a deep slow breath close to the camera, bark creaking under its fingers, then silence.
```
(Since the bridge now carries the creature, this redo may not be needed — ask the user.)

### 8.3 Creature still (from behind) — edit + animate (optional insert, goes right before clip 7)
**Edit its back clothing** (upload the still first, then `CREATURE_Chief.jpg`):
```
Edit image 1. Keep everything exactly the same - the scene, the light, the creature's body, skin, head, pose and hand on the tree. Change ONLY the creature's clothing on its back so it is an exact copy of the clothing in the "FULL BODY BACK" view of image 2 (CREATURE_Chief.jpg):

- Tunic: the same torn, faded yellow-tan sailcloth tunic as the sheet's back view - it covers the left shoulder only and hangs down the back to the knees with ragged, uneven, torn edges; the right shoulder is bare.
- Strap: the same brown leather strap as the sheet's back view - running diagonally from the top of the left shoulder down across the back to the right hip.
- Belt: the same thick twisted rope belt as the sheet's back view - wrapped twice around the waist, with a knot and loose rope ends hanging down at the back.
- Necklace: from behind only a thin cord around the neck with a small pendant at the back of the neck - remove the compasses and coins from the back.

Same colours, fabric texture and wear as the sheet. Photoreal, same light as image 1. No text, no watermark.
```
**Animate it** (5–8 s, push-in, never orbit/360):
```
Start exactly from the uploaded image and keep it exactly the same: the same jungle, the same creature seen from behind, the same woman small on the bright beach far away, the same plane tail far out at sea, the same light.

One continuous shot, very slow and quiet. The camera slowly pushes forward past the creature's shoulder toward the gap in the leaves, so the distant beach and the woman become a little bigger.

The creature stays completely still and seen only from behind - it never turns its head, its face and eye are never shown. Only small movements: its back and shoulders rise and fall slowly with a deep breath, and its long bony fingers slowly tighten on the tree bark, pressing into it.

Far away on the beach the woman stands at the water's edge, one hand shading her eyes, looking at the sea; small waves wash up the sand. The big palm leaves in the foreground move slightly in the wind.

Photoreal live-action survival film, warm golden light on the beach, deep green darkness in the jungle, 35mm film grain, slow natural motion. Sound: a deep slow breath close to the camera, bark creaking under its fingers, distant waves, then the insects go silent. No text, no watermark.
```

### 8.4 What comes next (not written yet — wait for the user's go)
1. **Human tribe sheet** (`CHAR_Tribe.jpg` suggested name): 4–6 human tribe members, masks, white/ochre face paint, bone and shell necklaces, spears, grass/bark clothing, plain grey background, no text. Plus a **human chief sheet** (multi-pose, taller, feathered/bone headdress, necklace of castaways' trinkets).
2. Possibly a bigger "monster" sheet if the user wants it ~3 m tall (currently `CREATURE_Chief.jpg` is used as-is).
3. Story clips after 7: she wades/swims out toward the plane for supplies OR explores the jungle; more "something watching" moments (giant footprints, leaves parting, the eye far away); the tribe's first signs (drums at night, the pot, belongings on poles); then capture → rescue by the monster → wounded monster → dive for the first-aid box → bandaging in the cave.
4. Sound pass: ElevenLabs voice for "That's my plane...", waves/wind/footsteps for all silent Kling clips.

## 9. Frames in this repo (`ISLAND_FRAMES/`)

| File | What | Used for |
|---|---|---|
| `Clip002_last.png` | end of clip 2 | start of clip 3 |
| `Clip003_last.png` | end of clip 3 | start of clip 4 |
| `Clip004_start4B.png` | clip 4 at 12.3 s | start of 4B |
| `Clip005_9.5s.png` | aerial, Noor small at waterline | spare |
| `Clip005_lastface.png` | clip 5 edit at 14.6 s | start of clip 6 |
| `Clip006_last.png` | end of clip 6: low wide from the water, Noor sitting | start of 6B |
| `Clip006B_last.png` | end of 6B aerial | spare |
| `Clip007_start_omni.png` | 6B at 8.0 s, Noor sitting from behind | used for Omni/Firefly tests |
| `Clip007_last.png` | end of the REJECTED fast Kartar clip | don't use |
| `Noor_sitting.png` | Noor sitting close-up, wet hair | **first frame of the BRIDGE** |
| `CHAR_Noor_face.jpg` | face crop of CHAR_Noor.jpg | Firefly element **nooraface** |
| `VEH_plane_side_nobg.png` | plane cut-out, transparent (BiRefNet) | plane compositing |

## 10. Other files
- `ISLAND_SCRIPT.md` — original 100-clip script (pre-story-change).
- `ISLAND_ASSET_PROMPTS.txt` — original sheet prompts (note: the Noor text there is outdated; the real `CHAR_Noor.jpg` is fair skin / white t-shirt / black jeans).
- `ISLAND_CLIPS_01-12.txt/.xlsx` — first prompt versions (older rules).
- `KARTAR_ORIGINAL_SKILL.md` — the skill to load in Dola.
- `VEYRA_*` — an earlier paused sci-fi project, not needed.

## Lessons from Kling (3 Oct)
- **Give clips time.** Never squeeze several actions into 5 s: Kling rushes, blurs and scrambles. Use a **timeline (0-2s, 2-4s…) and 7–10 s minimum** for any clip with more than one action, so she can breathe, pause and move naturally.
- **Don't add the forestinside element when the start frame already shows the forest:** it swapped in a different forest mid-clip.
- **Falls:** one continuous take with a timeline + "does NOT jump/spin/roll, legs never in the air" worked. End frames for falls made her dance.
- Check **Audio ON** every time; one take came out silent.
- **Kling element rule (user's, ALWAYS):** every Kling prompt must include the element chips, each written ONCE inline exactly where it is first needed (no tag line at the top): **@Noora** where she first appears, **@shoes** where she stands/walks, **@Island** where the beach/sand appears (with the dry-sand lock so no water comes in). Never leave them out, even if the start frame already shows them. Do NOT use forestinside when the start frame shows the forest.
- **User's workflow (works best):** run the SAME prompt in 3–4 browser tabs at once; some get rejected, but 3–4 start, and one of them usually comes out right. Send all takes together → compare them, pick the best, give cut points (and mix the best parts of different takes).

## STORY UPDATE (3 Oct, user's decision)
- The tribe is **no longer man-eating**. The **chief wants to marry Noor** (forced wedding ceremony). Keep it PG: no romance or touching shown, the "wedding" = ceremony, flower crown, drums, the chief's necklace gift; she resists and plans escape. The monster rescues her before/at the ceremony.
- Night order: she lights the fire → the monster's eye watches from the jungle (it is protecting her) → torches appear in the jungle → the tribe comes, capture implied (fire kicked out, her scream, black) → END PART 1.
- Tribe = a FICTIONAL island people (own masks, paint, costume), not copied from any real ethnic group.
- Filter-safe capture: never show her held/tied; show torches, shadows, her running, the fire kicked out, a cut to black; in Part 2 she wakes in the village hut (active: looking for a way out).

## PLAN UPDATE (3 Oct) - end of Part 1 / start of capture (NOT generated yet, user will say when)
1. Her fire ignites on the beach (sunset -> dusk).
2. Deep in the jungle a tribesman (fictional tribe, own masks/paint) is working (cutting vines / gathering) - he sees the thin smoke rising above the trees.
3. He runs through the jungle back to the village and alerts the others (drums start).
4. Night: torches move through the jungle toward the beach.
5. She is dozing by the fire. Capture kept off-screen / filter-safe: shadows, a cloth bag comes down over the camera = her POV goes dark.
6. Carried through the jungle: POV from INSIDE the dark bag - near black, faint orange torch light flickering through the woven cloth, muffled drums, footsteps, her breathing. Nothing clearly visible.
7. Arrives at the village (Part 2: the chief wants to marry her).
Filter notes: never show grabbing/tying; use POV + sound. Dola may refuse "bag over head" -> describe as "the screen goes dark, rough woven cloth", separate chat, no Noor face ref in POV clips.

## RULE (4 Oct): from the night/stalk scene onward Noor NEVER smiles
From Awake_last.png onward (rest of Part 1 and all of Part 2): always worried, scared, tense. Every prompt must say "She never smiles, always worried and scared" and add smiling/relaxed to the negative.

## TRIBE ELEMENTS (4 Oct)
- warriorwithspear = masked warrior (ISLAND_ELEMENTS/TRIBE_Warrior_FRONT/SIDE/BACK/mask_closeup.png): spear in right hand, other hand free, woven sack + rope coil at belt, NO torch. One element = the whole group (masks hide faces).
- Tribechief = the chief (unmasked, feather crown, big shell-disc necklace, carved staff). Firefly element name: Tribechief
- Scout dropped: one masked warrior sees the smoke.
- tribeoldwomen = the elder shaman woman (grey locks, bark-cloth dress, shell necklaces, paint bowl). Prepares Noor for the wedding / leads the ceremony.
- 3-element workaround: shoot in separate shots; background warriors as text only; crowded wides via a still start frame.

## FIREFLY ELEMENT NAMES (exact, use these chips)
Noora, Monster, drywoods, Flint, Pyriteelement, firstadbox, Island, shoes, forestinside, frontview, warriorwithspear, Tribechief, tribeoldwomen, caveenterance (location: monster cave entrance in the jungle), caveinside (location: monster lair, firelit), sacrificeplace (location: the temple with the dark doorway), goat (object/animal for the goat scene - use @goat, it is WHITE)
Still missing: tribevillage (location) - prompts given 4 Oct

## STORY UPDATE 2 (4 Oct) - replaces the forced-wedding plan
Kidnap -> rituals -> "sacrifice": the tribe pushes her through the dark temple doorway (ISLAND_ELEMENTS/LOC_sacrifice_temple.png, eye carvings = they worship a ONE-EYED GOD).
The doorway is the offering gate to the god. Behind it: a dark tunnel that leads into the monster's cave (caveinside). The "god" is the monster - and it does not harm her, it saves her.
PG rules stay: no gore, no violence shown, she is never hurt on screen; ritual = paint, flower crown, chanting, drums, walking her up the steps.
Planned beats:
1 Kidnap (tribe comes, sack POV, black)            5 Pushed through the door, stone slab closes, tribe leaves
2 Wakes tied in hut; elder paints her face          6 Total darkness, one eye opens: the monster. It leads her through the tunnel to its cave
3 Night ritual at the temple: drums, dance, chief   7 Tribe learns she escaped -> hunt; monster protects her, gets wounded
4 Walked up the temple steps, terrified             8 Wreck dive for first-aid box, bandaging in caveinside, finale

## STORY UPDATE 3 (4 Oct) - the thing in the temple (option B chosen)
A different, real BEAST lives in the tunnel behind the temple door and eats everything thrown in (never shown clearly: only growls, crunching, a huge shape in the dark). Bones come back out.
- Goat scene first: goat pushed through the doorway, eating only HEARD, a clean white horned skull rolls down the steps to the chief's feet. No blood/gore.
- Noor's ritual -> she sees the goat skull -> pushed in -> stone slab closes -> darkness, growl, something huge moving toward her.
- One eye opens: the one-eyed MONSTER pulls her away and fights the beast in the dark -> monster is WOUNDED -> leads her through the tunnel to its cave (caveinside).
- Then: wreck dive for the first-aid box, bandaging, finale.
- (4 Oct) More elements: prison (location, bamboo cage where Noor wakes, replaces hutinside), ceremonysquare (location), village (CHECK: saved as character type - recreate as location), villageprison (saved as object type, duplicate of prison - do not use). Two elements named "goat": the white goat (use) + one with a temple thumbnail (rename to sacrificeplace or delete).

## DIALOGUE RULE (4 Oct)
From the capture onward every Noor line must be CLEAR so it can be fixed/re-voiced in ElevenLabs: short lines in quotes, spoken slowly and clearly, a short pause before/after, no music in the generation, background sound kept low under her voice. Write tricky words in caps with hyphens (e.g. "MAY-DAY").
- (4 Oct) RULE: every prompt is a full 15 s clip from now on; workarounds (ninja techniques) only when stuck.
- (4 Oct) RULE: give each prompt COMPLETE the first time (actions, counts, all characters' sounds/voices, chips, frame). The user runs all tabs at once - no follow-up additions.
- (5 Oct) cage = hanging stick cage element (object) carried on a pole by two warriors; used from the wake-up after the blackout.
- (5 Oct) Noora2 = dirty/captured Noor sheet (ISLAND_ELEMENTS/CHAR_Noora2_dirty_sheet.png): use from the cage scene onward; Noora (clean) before. Dry dark scratches, gold coin pendant, no blood.
- (5 Oct) handcuffs = rope handcuff-knot element (object): short rope around both wrists, no leash. Use instead of describing tied hands (Kling drew dog-leash ropes).
- (6 Oct) RULE: under every prompt list an "@ CHECKLIST": every @ tag in the order it appears in the prompt text, with its count and the total, so the user can re-select each chip from the @ list (the prompt box is small and names are hard to find).
- (6 Oct) prisoninside = location element: inside of the square bamboo prison (dirt floor, woven mat, clay oil lamp, campfire and huts outside the bars).
- (6 Oct) Firefly unlimited (Premium) = 720p only, with a hidden DAILY cap (429 rate_limited, retry-after 00:00 UTC = 5 AM Pakistan). 1080p always costs credits. Use 720p for tests, 1080p credits only for finals.

## KLING CAN / CAN'T (decided 6 Oct, from all takes so far)
KLING 3.0 OMNI DOES WELL: one person + one simple action per clip (sit, wake, drink, faint, walk slowly); emotional close-ups; continuing from a start frame (best continuity); locations from elements; short clear dialogue; ambient sound; dusk/night/firelight; 1-2 warriors who stand/walk/point; simple object handling (bowl, door, rope knot).
KLING STRUGGLES / AVOID: the monster walking or fighting (stick figure, daylight look); crowds acting together (line of performers); two+ actions in one clip; object scale without people in a start frame (cage); long ropes/nets/leashes; anyone grabbed/pushed/dragged/tied by another person (filter); POV eye effects; 4+ elements; names in dialogue (write NOO-RAH); keeping a second identical object; end frames in Omni.
RULES: one action per clip; start frame whenever continuing; monster = still silhouette / eye / hands only, darken in post; fights and the beast = sound + flashes + shadows in the edit, never shown clearly; crowds = few close people + silhouettes from behind; establishing shots (ship, sunrise, temple) = Ray3.14; action without faces = Runway Gen-4.5; dialogue close-ups can be tested in Veo 3.1 Fast; fixes on existing clips = Ray3.14 Prompt to Edit; bridges with an end frame = Kling 3.0 (non-Omni).
