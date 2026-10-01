# THE ONE-EYED ISLAND — FULL HANDOFF (read this first)

This file lets any AI take over the project **exactly where it stopped**. Read it fully before answering the user.

**Status at handoff (1 Oct 2026):** clips 1, 2, 3, 4, 4B and 5 are DONE (edited). The user has just sent **clip 6 ("SHE WAKES")** to Dola with the first frame `Clip005_lastface.png`. Waiting for that result. **Next: 6B → 6C → clip 7.**

---

## 1. Who the user is and how to work with them

- Makes AI films for YouTube. Writes in quick, informal English with typos — read for meaning.
- Wants **simple words, short answers**, and **full copy-paste prompt texts** (never "use the one from before" — always paste the complete prompt again when asked).
- Wants the AI to **wait** when they are still explaining an idea. Don't write prompts until they ask / say go.
- Cares a lot about **not wasting credits**: prefer trimming / zoom-cropping / editing over regenerating.
- Checks every result: they send the video file; the AI analyses it frame by frame (contact sheet + cuts + audio transcription) and gives an honest verdict: what's good, what's wrong, keep / trim / redo.
- Edits in **CapCut** (trims, zoom-crops, mixes clips from different tools, reverses clips).
- Uses several Dola accounts — that is their choice; don't discuss it. Results are the same on any account as long as the same skill, reference files and prompt format are used.
- Planning to use **ElevenLabs** later for one consistent Noor voice (Voice Changer speech-to-speech on Dola's audio keeps lip sync) and for sound effects.

## 2. Tools

| Tool | Use | Notes |
|---|---|---|
| **Dola** (Seedance 2.x video) | main video generator | **max 15 s** per video (asking 30 s gives 15 s), 720p, 24 fps. Has a content filter. |
| **Kartar skill (original)** | loaded in the Dola chat | file `KARTAR_ORIGINAL_SKILL.md` in this repo. It forces 30 s, so **every prompt starts with the line `Make this video 15 seconds, one generation.`** |
| ~~VEYRA Kartar Cinema Studio skill~~ | **NEVER use for this film** | it injects VEYRA enemy/attack text into prompts and caused clip 1 to be blocked. |
| **Omni** | image-to-video, 10 s, 1080p | great for keeping a start frame, but it changed Noor's face to a different woman. Used only for storm shots. |
| Dola image mode (Seedream) / Google Flow (Nano Banana) | reference sheets and still images | never make images inside the Kartar video chat (it turns everything into video). |
| CapCut | editing | flashbacks, trims, zoom-crop, reverse, sound. |
| ElevenLabs | voice + SFX (planned) | Voice Design "Noor", Voice Changer for lip-synced lines. |

## 3. The film

**Title (working):** THE ONE-EYED ISLAND · survival horror / mystery · **~25 min = ~100 clips × 15 s**.
**Full script:** `ISLAND_SCRIPT.md` (100 clips, 6 acts). Image prompts: `ISLAND_ASSET_PROMPTS.txt`. Clip 1–12 prompts (original versions): `ISLAND_CLIPS_01-12.txt` / `.xlsx`.

**Story in short:** Noor, a young woman who flies her own small plane **for fun (NOT a commercial pilot)**, flies alone over the ocean, enters a strange eye-shaped green-lightning storm, crashes into the sea, escapes the sinking plane and washes up on a strange island. The island is watched by a tribe of **one-eyed humanoid creatures**. She is hunted, captured in their jungle hut village, escapes, fights back with parts of her plane (fuel, flares, wires), defeats the Chief, escapes in a canoe through the storm and is rescued; final shot: one eye opens under the rescue boat. **No hero — she survives on her own. Just a strange island (no time travel, no explanation).** First ~3 minutes = wonders + "something watching her".

**Creatures:** too tall, too thin, long arms, grey-brown cracked mud-like skin, **one large real wet bloodshot eye in the forehead that NEVER glows**, no nose (slits), sharp small teeth, rags of sailcloth, shells/bones. The Chief: taller, necklace of ship compasses and trinkets of other castaways. In the story the Chief later rips off Noor's **gold coin necklace** and hangs it on his own (she finds it again in the burned village at the end).

## 4. Reference files (the user has them in `ISLAND_REFERENCES.zip`)

Use these exact names in every prompt. Upload **only** the files a clip needs.

| File | What it is | Notes |
|---|---|---|
| `CHAR_Noor.jpg` | Noor: white t-shirt, black jeans, black shoes, dark brown hair in a ponytail, small gold coin necklace, fair skin | sheet has printed labels (FRONT, BUST SHOT…) → prompts always say "ignore any printed words on the sheet" |
| `CREATURE_Chief.jpg` | the Chief | has printed labels too |
| `CREATURE_Tribe.jpg` | 4 tribe variations + head close-up + crouch | random tribe members follow it |
| `VEH_plane.jpg` | small white high-wing plane, dark-red stripes, red prop tips, family photo on dashboard | always say "plain white, no letters, no numbers, no registration" |
| `LOC_island.jpg` | ONE aerial photo of the island: long curved white beach at the front, rocky points, palm trees + giant ancient trees, green lagoon with giant lily pads, grey cliff with a big cave | the beach in every beach scene is this one |
| `LOC_village.jpg` | the tribe's thatched-hut village in the jungle | the tribe's camp (replaces the old "beached ship camp" idea) |
| `ENV_storm.jpg` | huge dark spinning ring-shaped storm (looks like an eye) with green lightning over the sea at sunset | used in clips 2–3 |

Rules: island/beach/jungle/lagoon scenes → `LOC_island.jpg`; village scenes → `LOC_village.jpg`; sky/stormy-sea scenes (1–4B) → neither.

## 5. Production status (what exists, how it was made)

| Clip | Content | Status |
|---|---|---|
| 1 Flying Alone | plane over sunset ocean, Noor relaxed in cockpit, family photo | ✅ done (Dola). Small "8HL" letters on plane — ignored. |
| 2 The Storm Ahead | eye-storm ahead, Noor worried, compass spinning, fuel gauge, plane enters storm | ✅ done (Dola). Gauge had nonsense text; face slightly drifted — accepted. |
| 3 Inside the Storm | **mixed edit**: Omni shot (plane enters green eye storm, starts from clip 2 last frame) + Dola cockpit Mayday shot + Omni lightning ending | ✅ done. Dialogue used: "Mayday! Mayday! This is Noor! I'm inside the storm, losing altitude! Mayday! Can anyone hear me?!" |
| 4 Impact | started from `Clip003_last.png`; plane falls out of the clouds, hands on yoke, altimeter, sea rushing up, she screams (side view), impact spray, underwater, black | ✅ done (made on a new Dola account — worked identically). No thunder sound in prompt (forgot) — add in edit. |
| 4B Escape | started from `Clip004_start4B.png` (plane half-sunk, frame at 12.3 s of clip 4); plane sinks, Noor underwater in cockpit, eyes snap open, unbuckles, swims out the door, plane settles on a reef (tail up), she swims up and breaks the surface, eye-closing effect, black | ✅ done. A second plane appeared at 8.5–10 s → user fixed it by **zoom-cropping** that shot. |
| 5A The Lonely Beach | empty-beach establishing prompt (no person) | prompt given; optional — user's current edit goes straight from black to clip 5 |
| 5 Washed Ashore | first Dola version: black → face on sand → hand in foam with necklace → crab → camera rising → (then flew off to a floating plane = rejected part) | ✅ done as a **CapCut edit (16 s)**: user **reversed** the good part so it descends from aerial to her face; ends on her sleeping face, fades to black at 14.7 s. Remakes of this scene were **blocked 3× by Dola's filter**. |
| **6 She Wakes** | starts on `Clip005_lastface.png` (14.6 s of the edit, full brightness): gasp, eyes open, pushes up on hands and knees, coughs up seawater, wipes mouth, sits up, looks around confused | ⏳ **SENT TO DOLA — waiting for result** |
| 6B Alone | one continuous drone shot rising from behind her (sitting) to the whole island | not made yet |
| 6C She Remembers | sitting; face freezes, eyes squeeze shut, hands on temples, tears, touches necklace, whispers "Where am I...?" | not made yet; crash flashbacks are inserted in editing |
| 7+ | continue from `ISLAND_SCRIPT.md` clip 7 (The Wonders) onward | not made yet |

**Agreed edit order now:** 4B (ends black) → clip 5 edit (aerial descends to her face) → 6 (wakes + coughs + sits) → 6B (aerial reveal of her alone) → 6C (memories with flashbacks) → 7…

**Numbering note:** production now has extra clips (4B, 5A, 6B, 6C), so production numbers no longer match the script numbers exactly. Script clip 6 ("she sees the plane tail") was changed: **the user does NOT want the plane shown when she wakes**; she remembers instead. The plane still rests on a shallow reef with its tail up (established in 4B) — the script needs it later (she swims to it for flare gun, knife, radio, fuel).

**Flashback method (no new clips needed):** in 6C, when her face freezes / eyes shut / hands on temples, cut in 0.3–0.7 s flashes from existing footage: green eye storm (clip 2), "Mayday!" (clip 3), sea rushing at windshield + impact (clip 4), eyes snapping open underwater (4B). White flash / glitch between them, slightly desaturated, ringing tone + heartbeat underneath.

## 6. Hard rules learned (follow every time)

1. **First line of every Dola prompt:** `Make this video 15 seconds, one generation.`
2. **Format:** JSON with: clip, title, duration_seconds 15, aspect_ratio 16:9, format, references (use_only_these + one line per file), shots (time / camera with lens mm / action), dialogue if any, style, physics, sound, negative. Clips are **4–7 short shots with hard cuts** (like the reference turtle film, avg shot 2.8 s).
3. **First frame (when continuing an action):** put this ABOVE the JSON and upload the image FIRST:
   `FIRST FRAME: Use the uploaded image <name>.png as the FIRST FRAME of this video (image_to_video). The video starts exactly on this image. Do not draw a new picture.` and add `"first_frame": "<name>.png - <what it shows>. This video STARTS EXACTLY on this image."`
   - Use a last frame only when the next clip continues the **same action in the same place** (storm→fall→impact→escape). New scene/time → no frame.
   - If the last frame is black or pure white, pick the **last clear frame before it** (the AI extracts it from the video; check brightness — fades start before the end).
   - Asking Dola to extract the last frame itself is unreliable — the user uploads the frame.
4. **Face lock for Noor:** "her face must match CHAR_Noor.jpg exactly: same young face, soft features, fair skin, same age" + negative "Noor's face must not change or look older". Fewer front close-ups in action scenes (side/shadow/hands) reduce drift.
5. **Never use age words / girl / kid.** Always "young woman".
6. **No text:** "no text, no letters, no numbers, no registration on the plane, no watermark"; gauges = "only needles and tick marks, no numbers".
7. **Sound line must list every sound source in the picture** (lightning → thunder crack, waves → surf/foam, fire → crackle, etc.).
8. **Screen direction:** the plane flies **left to right** in every shot; say "always forward, never backwards".
9. **No gore, no injuries, no blood, no fire explosions**; creatures are aggressive but hits only knock down.
10. **Dola content filter:** it BLOCKS close-ups of Noor **lying still with eyes closed** on the beach ("vulnerable/incapacitated woman"), even worded as "sleeping/resting", and blocked the wake-up when she was lying + coughing in the remakes. What passes: her awake and moving; distant aerial figures; environment-only shots. Avoid words: unconscious, lifeless, motionless, torn, exhausted, alone. If blocked: don't keep retrying — use footage that already passed, change the beat, or move the risky part (e.g. cough only as sound).
11. **If something is wrong in a small part:** trim it, or zoom-crop it (user's trick), or mix shots from Dola/Omni versions. Regenerate only when the error is central and can't be cut.
12. Dola often shows **two "Generating video" lines** = a retry or two versions; let both finish.
13. Plane in the sea: say "ONLY the small tail fin far away… the rest is under water"; Dola otherwise draws a whole floating plane.
14. Camera that must stay on her: "Noor ALWAYS stays in the exact centre of the frame; the camera never turns away, never flies sideways, never leaves her" + negative "the camera does not fly away over the jungle or sea".

## 7. Frames in this repo (`ISLAND_FRAMES/`)

| File | From | Used for |
|---|---|---|
| `Clip002_last.png` | last frame of clip 2 (plane entering the eye storm) | start of clip 3 (Omni) |
| `Clip003_last.png` | last frame of final clip 3 (plane in lightning storm) | start of clip 4 |
| `Clip004_start4B.png` | clip 4 at 12.3 s (plane half-sunk) | start of 4B |
| `Clip005_9.5s.png` | first clip 5 at 9.5 s (aerial, Noor small at waterline) | spare / still image |
| `Clip005_lastface.png` | user's clip 5 edit at 14.6 s (her sleeping face, golden light) | **start of clip 6 (sent now)** |

## 8. Exact prompts that are next

### CLIP 6 — SHE WAKES (already sent to Dola)
Upload: `Clip005_lastface.png` (first), `CHAR_Noor.jpg`, `LOC_island.jpg`
```
Make this video 15 seconds, one generation.

FIRST FRAME: Use the uploaded image Clip005_lastface.png as the FIRST FRAME of this video (image_to_video). The video starts exactly on this image. Do not draw a new picture.

{
  "clip": 6,
  "title": "SHE WAKES",
  "duration_seconds": 15,
  "aspect_ratio": "16:9",
  "first_frame": "Clip005_lastface.png - close-up of Noor's face on the wet white sand in warm golden morning light. This video STARTS EXACTLY on this image and she starts waking up immediately.",
  "format": "one 15-second video made of 5 short shots with hard cuts",
  "references": {
    "use_only_these": ["Clip005_lastface.png", "CHAR_Noor.jpg", "LOC_island.jpg"],
    "CHAR_Noor.jpg": "Noor - her face must match CHAR_Noor.jpg exactly: same young face, soft features, fair skin, same age. Dark brown hair (wet), white t-shirt (wet and sandy), black jeans, black shoes, small gold coin necklace. Design only, ignore any printed words on the sheet.",
    "LOC_island.jpg": "The island - this exact beach: white sand, palm trees and giant ancient trees behind, turquoise water. Copy exactly."
  },
  "shots": [
    {"time": "0-2s", "camera": "same close-up as the first frame, 85mm", "action": "Continue exactly from the first frame: at once she takes a deep sharp gasp of air, her eyes fly open, and she lifts her head from the sand."},
    {"time": "2-6s", "camera": "medium shot from the side, 50mm, at sand level", "action": "She pushes herself up onto her hands and knees and coughs hard, again and again, bringing up seawater that splashes onto the sand, her back shaking with each cough, wet hair hanging over her face, water dripping from her hair and chin."},
    {"time": "6-9s", "camera": "close-up, 85mm", "action": "Still on her hands and knees, she gasps for air between coughs, eyes watering, then wipes her mouth with the back of her hand."},
    {"time": "9-12s", "camera": "medium shot, 50mm", "action": "She sits back on the sand, knees bent, breathing heavily, and pushes the wet hair back from her face with both hands."},
    {"time": "12-15s", "camera": "medium wide, 35mm, low angle from the waterline", "action": "She sits on the white sand catching her breath, looking around at the empty beach and the dark jungle of giant trees, confused."}
  ],
  "acting": "Natural, realistic film acting: someone waking up after nearly drowning - the shock of the first breath, hard coughing, exhaustion, then confusion. Not exaggerated.",
  "style": "photoreal live-action survival drama, shot on ARRI Alexa, warm soft golden morning sunlight, 35mm film grain, 24 fps natural motion blur",
  "physics": "Real body: her arms shake as she pushes up; her back and shoulders jerk with each cough; real seawater comes out and splashes on the sand; sand sticks to her skin and clothes and falls off; water drips from her hair.",
  "sound": "gentle waves and foam hissing on the sand, soft wind in the palms, distant seabirds; her sharp deep gasp as she wakes, hard wet coughing again and again, heavy rasping breaths. No music.",
  "negative": "no plane, no wreck, no boat; Noor's face must not change or look older; no blood, no injuries; no other people; no creatures; no storm, no rain; no text, no letters, no numbers, no watermark; no cartoon or CGI look; no morphing"
}
```
If blocked → reply to Dola: "Keep everything, but she coughs only once while pushing up, and no water comes from her mouth." (add coughs as sound in edit).

### CLIP 6B — ALONE (next)
Upload: `CHAR_Noor.jpg`, `LOC_island.jpg`
```
Make this video 15 seconds, one generation.

{
  "clip": "6B",
  "title": "ALONE",
  "duration_seconds": 15,
  "aspect_ratio": "16:9",
  "format": "ONE continuous 15-second shot, no cuts",
  "references": {
    "use_only_these": ["CHAR_Noor.jpg", "LOC_island.jpg"],
    "CHAR_Noor.jpg": "Noor - same young face, dark brown wet hair, white sandy t-shirt, black jeans, black shoes, small gold coin necklace. Design only, ignore any printed words on the sheet.",
    "LOC_island.jpg": "The island - use EXACTLY this island and beach: the long curved white sand beach, palm trees and giant ancient trees behind, dark rocks, turquoise water with dark coral patches, the green lily-pad lagoon and the grey cliff with the big cave. Copy exactly."
  },
  "shots": [
    {"time": "0-15s", "camera": "one continuous drone shot: starts 2 metres behind Noor at head height, then slowly rises up and back into a very high wide aerial view, 24mm, smooth, Noor always in the centre of the frame", "action": "Noor sits awake on the white sand, hugging her knees, looking out at the sea. The camera rises slowly behind her: first her back and messy wet hair, then the long empty white beach around her with foam lines and driftwood, then the dark jungle of giant trees behind her, and finally the whole island exactly as LOC_island.jpg - the curved beach, the lagoon, the cliff with the cave - with endless turquoise ocean all around and no other land anywhere. She is a tiny figure on the beach."}
  ],
  "style": "photoreal live-action film, shot on ARRI Alexa, warm soft morning light, clear sky, calm sea, lonely mood, 35mm film grain, 24 fps",
  "physics": "Real ocean: waves roll in and slide up the sand leaving foam lines; palm fronds sway gently; the camera rises smoothly without shaking or spinning.",
  "sound": "gentle waves, soft wind, palm fronds rustling, distant seabirds, the sound slowly fading into quiet as the camera rises. No music.",
  "negative": "no plane, no wreck, no boat, no other land; no other people; no creatures; no storm, no rain; no text, no letters, no numbers, no watermark; no cartoon or CGI look; no morphing; no cuts"
}
```

### CLIP 6C — SHE REMEMBERS (after 6B)
Upload: `CHAR_Noor.jpg`, `LOC_island.jpg`
```
Make this video 15 seconds, one generation.

{
  "clip": "6C",
  "title": "SHE REMEMBERS",
  "duration_seconds": 15,
  "aspect_ratio": "16:9",
  "format": "one 15-second video made of 6 short shots with hard cuts, focused on her face and acting",
  "references": {
    "use_only_these": ["CHAR_Noor.jpg", "LOC_island.jpg"],
    "CHAR_Noor.jpg": "Noor - her face must match CHAR_Noor.jpg exactly: same young face, soft features, fair skin, same age. Dark brown hair (damp and messy), white t-shirt (damp and sandy), black jeans, black shoes, small gold coin necklace. Design only, ignore any printed words on the sheet.",
    "LOC_island.jpg": "The island - use EXACTLY this beach: the long curved white sand beach of LOC_island.jpg, with palm trees and giant ancient trees right behind the sand, turquoise water. Copy exactly."
  },
  "shots": [
    {"time": "0-3s", "camera": "medium shot, 50mm, at sand level", "action": "Noor sits awake on the white sand in the warm morning sun, knees bent. She pushes her damp messy hair back from her face with both hands and looks around, confused, blinking."},
    {"time": "3-5s", "camera": "close-up, 85mm, very slow push in", "action": "REMEMBERING: suddenly her face freezes. Her eyes widen and stare at nothing, her breath stops, her lips part - as if she is seeing something terrible in her mind."},
    {"time": "5-7s", "camera": "extreme close-up on her eyes, 100mm", "action": "Her eyes flinch and squeeze shut hard, her eyebrows pull together in pain, she shakes her head slightly as if a loud sound hit her - reliving a frightening memory."},
    {"time": "7-10s", "camera": "medium close-up, 50mm", "action": "She presses both hands against her temples, breathing fast and shaky, rocking slightly forward, eyes still shut, fighting the memories."},
    {"time": "10-12s", "camera": "close-up, 85mm", "action": "Her eyes snap open again, wet with tears, staring at nothing, her chest heaving. She swallows hard."},
    {"time": "12-15s", "camera": "close-up, 85mm", "action": "Tears roll down her cheeks. She slowly touches the small gold coin necklace at her throat, looks up at the jungle and whispers: \"Where am I...?\""}
  ],
  "dialogue": "Noor (whispering, shaken, tearful): \"Where am I...?\"",
  "acting": "Natural, realistic film acting: a young woman remembering a plane crash - shock, fear, pain, then sadness. Real micro-expressions, trembling lips, wet eyes, fast breathing. Not exaggerated.",
  "style": "photoreal live-action survival drama, shot on ARRI Alexa, warm soft morning sunlight, shallow depth of field on her face, 35mm film grain, 24 fps natural motion blur",
  "physics": "Real body: her shoulders rise and fall with fast breathing, her hands tremble, real tears run down her cheeks, sand on her arms, her hair moves in the soft wind.",
  "sound": "gentle waves washing in and out, soft wind in the palm trees, distant seabirds; at 3s all sound fades into a high thin ringing tone and a slow heartbeat; at 10s the ringing stops and the waves return; her fast shaky breathing, her whisper \"Where am I...?\". No music.",
  "negative": "no plane, no wreck, no boat; she stays sitting up the whole time, never lying down; Noor's face must not change or look older; no blood, no injuries; no other people; no creatures; no storm, no rain; no text, no letters, no numbers, no watermark; no cartoon or CGI look; no morphing"
}
```
Flashback insert points: after 3–5 s (storm eye + "Mayday"), after 5–7 s (sea rushing + impact), after 7–10 s (eyes snapping open underwater).

### After 6C
Continue with `ISLAND_SCRIPT.md` from **clip 7 (The Wonders)**: giant ancient trees, umbrella-sized pale flowers opening, strange long-tailed birds, her wonder — then 8 (POV someone watching her from the bushes), 9 (second set of long bare footprints appearing next to hers), 10 ("Hello?!" — birds go silent), 11 (the eye blinking far away under water), 12 (the eye in the leaves at sunset). Write each prompt fresh in the format above (the old versions in `ISLAND_CLIPS_01-12.txt` predate the rules in section 6 — update them: 15-second first line, face lock, no plane unless needed, full sound sources). Note clip 11 in the old file includes the plane tail and wading to it — check with the user whether they want the plane seen there.

## 9. Other files in the repo (older project — on hold)
`VEYRA_*` files belong to an earlier sci-fi film (VEYRA) that was paused because it was too hard for AI (invented world, giant mothership scale problems). Not needed for the island film. `VEYRA_CINEMA_STUDIO.html` is a prompt-builder page for VEYRA only.
