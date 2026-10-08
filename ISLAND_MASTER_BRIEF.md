# THE ONE-EYED ISLAND — MASTER BRIEF (read this first)

One file with everything: the story, how we make it, the tools and limits, every element, what is done, where we are stuck, and the next prompts.
Any AI taking over: read this whole file, then `ISLAND_HANDOFF.md` (the full day-by-day log) only if you need the history of a decision.

Last updated: **7 Oct 2026**.

---

## 1. Where we are right now (short)

- **Part 1** edit is at about **8:10** in CapCut. Target length is about **9:30**, ending on "she knows she's next".
- **Just finished:** the elder paints Noor's face (red ritual paint) → Noor is now **Noora3**. The elder leaves the cage and ties the door.
- **Working on now:** the **goat sacrifice at the temple** (3 clips). Step 1 is a master image made in Firefly Image with the chief at the top of the steps and the warrior + goat at the bottom. See section 10.
- **After that:** warriors take Noor to the temple (she walks herself) → she sees the goat skull → close-up "she knows she's next" → **END OF PART 1**.

---

## 2. The user and how to work with them

- Makes AI films for YouTube. Writes fast, informal English, Urdu or Hindi (sometimes voice-typed, often with typos). Read for meaning, never comment on it. Answer in simple English.
- Wants **short answers** and **complete copy-paste prompts** every time. Never say "use the prompt from before"; paste it in full.
- Under every prompt give an **@ checklist**: each @ tag with how many times it appears. The user has to click each @ name in Firefly so it turns blue.
- Very careful with **credits**. Prefer trimming, cutting and mixing takes over regenerating. Make tests at 720p (free), and use 1080p (credits) only for finals.
- Sends every result. Check each one **frame by frame** (contact sheet, then zoom into problem moments) and give an honest verdict with exact seconds: keep, trim or redo. Save the usable parts with ffmpeg into `ISLAND_CLIPS/` and the useful frames into `ISLAND_FRAMES/`.
- When the user corrects you, accept it ("You're right") and fix it. Don't argue.
- When the user is still explaining an idea, wait. Write prompts only when asked.
- Edits in **CapCut**. Voice and extra sound effects are planned in **ElevenLabs**.

---

## 3. The film and the story (current version)

**Title:** THE ONE-EYED ISLAND · survival horror / mystery · PG · YouTube, in parts.

**Noor:** a young adult woman who flies her own small plane for fun. She enters a strange eye-shaped storm with green lightning, crashes into the sea, escapes the sinking plane and washes up on an island.

**Story (final decisions, 4 Oct):**
1. She survives on the beach and lights a fire. A one-eyed **monster** secretly watches her from the jungle. It protects her and lives in a cliff cave.
2. A fictional human **tribe** (masks, paint, spears) sees her smoke and captures her. The capture is only implied: torches, shadows, black screen.
3. She wakes in a **bamboo prison** in their village. A warrior brings water and cuts her rope. Villagers come to look. She pleads at the bars.
4. The **elder woman** paints her face with red ritual paint, which means she is chosen for the sacrifice.
5. Night ritual at the **temple** (stone steps, dark doorway, eye carvings: they worship a one-eyed god). First a **goat** goes through the doorway. Only eating sounds are heard, then a clean goat skull comes back out. **Noor sees this and knows she is next. END OF PART 1.**
6. Part 2: she is walked up the steps and pushed through the doorway. A stone slab closes. In the darkness a **beast** lives (never clearly shown, only sounds and shapes). **One eye opens: the monster** saves her, fights the beast and is **wounded**, then leads her through a tunnel to its cave.
7. She dives to her **plane wreck** for the first-aid box and bandages the monster. The tribe hunts them, and there's a final escape. Friendship and goodbye.

**Always PG:** no gore, no blood, no sexual content or nudity, no cruelty shown. Danger comes through faces, sound, darkness and the aftermath (for example a clean old skull).

---

## 4. Firefly elements (exact names, use these as @ chips)

| Element | What it is | When to use |
|---|---|---|
| **Noora** | Noor, clean (white t-shirt, black jeans, black shoes, gold coin necklace, ponytail) | before the capture |
| **Noora2** | Noor dirty, captured (dry scratches, torn black jeans) | prison scenes **before** the painting |
| **Noora3** | Noora2 + red face paint: **3 horizontal stripes on the forehead, a short line under each eye, a row of small dots below each line** | **every clip after the painting** |
| **nooraface** | face-only crop of Noor | face close-ups (early film) |
| **shoes** | Noor's black shoes | when she walks |
| **Monster** / **monsterchartofdifposes** | the one-eyed monster | only from behind, silhouette, eye or hands |
| **warriorwithspear** | masked tribal warrior, spear, white dot paint, palm-fibre cape. One element works for all warriors | warriors |
| **Tribechief** | the chief: unmasked, feather crown, big shell-disc necklace, carved staff | chief |
| **tribeoldwomen** | the elder woman: blue-grey braids, white face dots, grass cape, shell necklaces | elder |
| **prisoninside** | location: inside the bamboo prison | shots **inside** the cage |
| **prison** | location: the bamboo prison from **outside** | shots **outside** the cage (exits, door, guards) |
| **upperritual** | location: top of the temple - dark doorway, vines, carved stone faces | shots at the doorway |
| **ritualplace** | location: temple courtyard - stone steps, fire pit, torches | shots at the fire / steps |
| **goat** | the small **white** goat | goat scene |
| **coloringmaterial** | bowl of red ritual dye | painting scene |
| **waterbowl** | old calabash bowl of water | water scene |
| **handcuffs** | short rope knot on both wrists | capture → water scene only |
| **cage** | hanging stick cage carried on a pole | after the capture |
| **Island**, **forestinside**, **caveenterance**, **caveinside**, **ceremonysquare**, **drywoods**, **Flint**, **Pyriteelement**, **firstadbox**, **plane**, **frontview** | other locations and objects | as needed |

Do not use: **villageprison** (duplicate). The second element named "goat" (it has a temple thumbnail) should be renamed or deleted.
Reference images saved in the repo: `REFS_MASTER/` (Noora2, Noora3 sheet, warrior, water bowl, red bowl, temple, prison frame) and `ISLAND_ELEMENTS/` (warrior views, Noora2/Noora3 poses, temple). The **chief, elder and goat images exist only in Firefly**, not in the repo.

---

## 5. Tools, free models and limits

**Main tool: Adobe Firefly → Kling 3.0 Omni** (with @ elements, First frame / Last frame slots, Multi-shot toggle, 5–15 s, 16:9, sound included).

| Fact | Detail |
|---|---|
| Free | **720p** generations of Kling 3.0, Kling 3.0 Omni, Veo 3.1 Fast, Runway Gen-4.5, Ray3.14, Firefly Video |
| Costs credits | **1080p always**: Kling Omni 15 s at 1080p = **600 credits**. The user has about 49,000 credits. |
| Hidden daily cap | Kling 3.0 and Kling 3.0 Omni **share one "fair use" pool**. After about **25–30 clips a day** the error is `429 rate_limited / over_consumption_quota_exhausted`. |
| Reset | **00:00 UTC = 5:00 AM Pakistan time** |
| Still free when Kling is capped | Kling 2.5 Turbo Pro (even 1080p 5 s), Veo 3.1 Fast, Ray3.14, Runway Gen-4.5, Firefly Video |
| Paid only | Veo 3.1, Gemini Omni Flash, Seedance 2.0 / 2.0 Fast / 2.5, Ray3 / HDR |
| Max elements | **3 unique @ elements per prompt.** A 4th gives "Prompt references too many unique elements". The same element repeated still counts as 1. |
| Prompt length | under about 2,500 characters |

**Other tools:** Dola (Seedance) was used for the early clips. Firefly Image (Nano Banana Pro or GPT Image) for still images and master frames; elements can be tagged there too. CapCut for editing. ElevenLabs for voice and sound effects (planned).
**Adobe support:** says limits are "dynamic". An email asking why "unlimited" Kling stops after about 27 clips was drafted for the user. Never attach HAR files (they contain login tokens).

---

## 6. How to write a Kling prompt (rules learned the hard way)

1. **Max 3 different @ elements.** If more are needed: put the location in the **first frame** instead of a chip, describe simple objects in words, or split the scene into two clips.
2. **Repeat the element name wherever the camera should go** ("close-up of @tribeoldwomen's face"). That's what made camera switches work.
3. **Multi-shot:** **ON** only when the shot must **cut to another person or place**. **OFF** for one continuous shot (it keeps faces and clothes more stable). With Multi-shot OFF, Kling ignores "the camera moves to X".
4. **First frame = continuity.** Continue from the real last frame of the previous clip. The **first frame must show the person who does the action** (from Noor's close-up, Kling made Noor do the old woman's action).
5. **Don't give a first frame from inside when the action happens outside.** Exits through a door must be filmed **from outside** with **@prison** (from inside, the elder closed the door on herself).
6. **One main action per clip.** Kling rushes and mixes up several actions. Use time blocks (0-4s, 4-9s…).
7. **Noor never smiles.** Write exactly: *"She does not smile at any moment. Serious, frightened face from start to end, lips pressed together."* **Never write "until"** ("never smiling until the end" made her smile at the end).
8. Add when Noor is in close-up: *"Dry natural lips, no lipstick, no gloss. No mark on her chin."* (Kling made glossy lips and copied the elder's chin line.)
9. Say *"Only one old woman in the clip"* or *"nobody else in this shot"* when Kling might duplicate a person.
10. Clothes: the elder's grass cape must *"cover her whole back and body"* (one take showed her bare back). Women in the tribe wear *"brown bark-cloth tops that fully cover the chest and shoulders"*.
11. Red paint wording: *"red herbal dye made from crushed jungle plants, roots and red seeds, a natural ritual colour, not blood"*. Paint in neat lines and dots, never smears. **Never use a first frame with red smeared on her face** (the output got blocked every time).
12. Tribe language: invented words. Noor speaks short, clear English lines.
13. End every prompt with: `Realistic, film grain, <light>.` plus `SOUND: … No music.`

**Prompt template:**
```
Continue from the start frame. <who> <does what> at @<location>.
0-Xs: <action 1>.
X-Ys: the camera cuts to <close-up of @character> <action 2>.
Y-15s: <action 3>.
<expression / no-smile line for Noor>.
Realistic, film grain, <light>.
SOUND: <sounds>. No music.
```
Then the **@ checklist** (each tag + its count, total unique ≤ 3) and the **settings** (first frame, Multi-shot ON/OFF, length, 720p).

---

## 7. Continuity rules (never break)

- **Prison layout:** the camera is at the back of the cage facing the door. The oil lamp and woven mat are in the **left** front corner. **Noor sits on the right side**, back against the right wall, near the front-right corner by the door.
- **Rope:** her wrists are tied only up to the water clip, where the warrior cuts the rope. After that there's **no rope at all**, just bare wrists with faint red marks.
- **Face paint:** from the painting on, every Noor clip uses **@Noora3** (same paint design).
- **Light:** dusk = warm orange firelight; night = blue moonlight + fire; dawn = grey-blue; morning = soft sun. The paint and elder scenes are at **early evening with torches**.
- **Nobody grabs, drags, ties or carries Noor.** Warriors point, walk beside her or open the door; she walks by herself.

---

## 8. Progress (what's done)

**Early film (done in earlier sessions, in CapCut):** flying → storm → crash → escape → washed ashore → wakes → island reveal → bridge → plane tail in the sea → jungle, fire, net capture and the other survival clips in `ISLAND_CLIPS/`.

**Prison sequence (in the 8:10 edit):** wake/faint → water + rope cut → drink → night sleep → morning villagers → plea at the bars → elder arrives with the red dye → elder enters, Noor pulls back.

**Made on 6–7 Oct (in `ISLAND_CLIPS/`, not yet on the timeline):**

| File | What | Status |
|---|---|---|
| `Paint_multishot_final.mp4` | touch → elder chanting → Noora3, no smile | ✅ usable, but the painting happens too fast |
| `PaintB_elder_closeup_720p.mp4` | hand to forehead → elder close-up for 10 s (Noor not shown) | ✅ |
| `PaintB2_elder_hand_down.mp4` | elder close-up, hand lowered (4.95 s) | ✅ |
| `Paint_take2_1080p_nosmile.mp4`, `Paint_reveal_1080p_nosmile.mp4` | other paint takes, cut before a smile | spare |
| `PaintA_touch.mp4`, `PaintC_noora3.mp4` | short pieces | spare |
| Noor reveal in the cage (Noora3, torches behind) | the user generated a good one (frame seen in chat, video not uploaded) | ✅ on the user's side |
| `Elder_standsup_720p.mp4`, `Noor_behind_bars_720p.mp4`, `Noor_alone_watching_720p.mp4` | pieces kept from failed elder-leaves takes | spare |
| `Elder_leaves_ties_door_720p.mp4` | elder steps out, ties the door, walks away, ends on Noor inside | ⚠️ works, but the elder's **back is bare** → the user wants to remake it |

**Key frames (`ISLAND_FRAMES/`):** `Paint_START_clean.png` (elder with bowl, Noor's face clean), `PaintB2_cut_frame.png` (elder close-up, use it as the start for elder actions), `Paint_multishot_last.png` (Noor painted), `Elder_leaves_last.png`.

---

## 9. Where we are stuck / open problems

1. **The elder leaving** (to remake): use the prompt in 10.1. If it keeps failing, use the existing clip and hide the bare back by cutting to the door being tied, with footsteps as sound.
2. **Kling is weak at:** people going through doors, crowds acting together, two or more actions in one clip, camera switches without Multi-shot, keeping a person single (it duplicates them).
3. **The daily cap** stops work after about 25–30 clips. Plan around the 5 AM reset, or switch to the free models in section 5.
4. **The goat scene** needs 4 things (chief, warrior, goat, temple) but only 3 chips are allowed → solution: make a **master image** first (10.2).
5. Not confirmed: the Firefly elements downloader extension (v1.2) and whether the Adobe support email was sent.

---

## 10. Next prompts

### 10.1 Elder leaves (remake, outside view)
Settings: first frame `ISLAND_FRAMES/PaintB2_cut_frame.png` · Multi-shot OFF · 10 s · 720p.
```
Continue exactly from the start frame. Only one old woman in the clip. Immediately @tribeoldwomen turns away and walks out of the cage door of @prison, the camera following her outside. Her long grass cape covers her whole back and body, fully clothed.
Outside @prison she turns around, pulls the bamboo door shut and ties it closed with a rope, then walks away between the huts without looking back.
Through the bamboo bars, @Noora3 sits inside on the right side close to the door, clearly visible, red face paint, watching her leave, frightened and silent. She does not smile at any moment.
Early evening, burning torches and huts around, warm torchlight.
Realistic, film grain.
SOUND: door creak, rope being tied, footsteps walking away, jungle insects. No music.
```
@ checklist: @tribeoldwomen 1 · @prison 2 · @Noora3 1 (3 unique)

### 10.2 Goat scene: master image (Firefly Image, Nano Banana Pro or GPT Image)
```
Night at @sacrificeplace: the stone temple with steps, the dark doorway at the top, a big fire burning in front of the steps, torches all around, starry sky.
@Tribechief stands at the top of the steps right beside the dark doorway, looking down, holding his carved staff.
@warriorwithspear stands at the bottom of the steps beside the fire, holding the small white @goat by a rope, the goat standing next to his feet.
Around the fire, about ten tribal villagers standing still, the men like the warrior with face paint and grass skirts, the women in brown bark-cloth tops that fully cover the chest and shoulders, partly silhouetted against the flames.
Photorealistic film still, 16:9, wide shot, warm firelight, horror mood. No text.
```
If it says too many elements: remove the @ from sacrificeplace and attach `REFS_MASTER/LOC_sacrifice_temple.png` as a reference image.
The master image becomes the **first frame** of the goat clips (the clips below must be adjusted to match it once it exists).

### 10.3 Goat scene: 3 clips (user's plan)
Beats: villagers dance in a circle around the fire → **the chief, standing at the top in front of the doorway, shouts once, and everyone freezes** → he orders the goat brought → the warrior carries the goat up and **throws it into the dark doorway** → sounds from inside (bleat cut off, crunching, growling; the death is never shown) → after a while **the clean goat skull comes back out** and lands at the bottom of the steps.

**Clip 1: dance + shout.** First frame: the master image (or `LOC_sacrifice_temple.png`) · Multi-shot ON · 15 s.
```
Continue from the start frame. Night at @sacrificeplace, the fire burning in front of the temple steps, torches all around.
0-7s: about fifteen tribal villagers dance in a circle around the fire, stamping their bare feet and chanting to fast heavy drums. The men look like @warriorwithspear: dark skin, white and ochre face paint, bone and shell necklaces, grass skirts, some holding spears and wooden masks. The women wear brown bark-cloth tops that fully cover the chest and shoulders, grass skirts, shell necklaces and white face dots. Two old drummers sit at the edge beating big wooden drums. Their shadows jump across the stone, the dancers partly silhouetted against the flames.
7-10s: close-up of @Tribechief standing at the top of the stone steps of @sacrificeplace in front of the dark doorway. He slams his carved staff on the stone and shouts one loud word in an unknown tribal language.
10-15s: the drums stop at once. All the villagers freeze and turn to look up at him in total silence. Only the fire crackles.
Realistic, film grain, firelight, horror mood.
SOUND: fast tribal drums and chanting, then the chief's single loud shout, the staff hitting stone, sudden silence, crackling fire. No music.
```
@ checklist: @sacrificeplace 2 · @warriorwithspear 1 · @Tribechief 1 (3 unique)

**Clip 2: order + goat thrown in.** First frame: the last frame of clip 1 · Multi-shot ON · 15 s.
```
Continue from the start frame. @Tribechief stands at the top of the stone steps beside the dark doorway and gives a harsh order in an unknown tribal language, pointing his staff down at the warrior.
@warriorwithspear picks up the small white @goat from the bottom of the steps, carries it in his arms up the steps, the goat bleating.
At the top, @warriorwithspear throws the @goat through the doorway into complete darkness. The goat disappears. @Tribechief watches calmly from beside the doorway, and the warrior steps back.
The villagers below watch in silence.
Realistic, film grain, firelight, horror mood.
SOUND: the chief's harsh command, goat bleating, footsteps on stone, crackling fire. No music.
```
@ checklist: @Tribechief 2 · @warriorwithspear 2 · @goat 2 (3 unique; the temple comes from the first frame)

**Clip 3: sounds + skull.** First frame: the last frame of clip 2 · Multi-shot ON · 10 s.
```
Continue from the start frame. The dark doorway at the top of the stone steps of @sacrificeplace, @Tribechief standing beside it, looking into the darkness. Villagers below, silent, firelight flickering.
For a few seconds nothing moves.
Then a clean white goat skull with small horns flies out of the darkness, bounces down the stone steps and stops on the ground at the bottom, in front of the fire. No blood, clean bone only.
Close-up of @Tribechief looking down at the skull, calm and satisfied.
Realistic, film grain, firelight, horror mood.
SOUND: from inside the darkness, the goat bleats once and is cut off, then loud crunching, chewing and deep growling, then silence, then the hollow knock of the skull bouncing down the stone steps. No music.
```
@ checklist: @sacrificeplace 1 · @Tribechief 2 (2 unique)
If the eating sounds come out weak, add stronger ones in the edit.

### 10.4 After the goat (not written yet)
Warriors open the cage and Noor walks out by herself (outside view, @prison) → she is walked to the temple (she walks, warriors beside her) → she sees the skull at the bottom of the steps → close-up of @Noora3: she knows she's next, no smile → black → END OF PART 1.

---

## 11. Editing helpers (ffmpeg in this repo's environment)

- ffmpeg: `/usr/local/lib/python3.11/dist-packages/imageio_ffmpeg/binaries/ffmpeg-linux-x86_64-v7.0.2`
- Contact sheet: `-vf "fps=2,scale=320:-1,tile=6x5" -frames:v 1`
- Trim: `-ss START -i IN -t LENGTH -c:v libx264 -crf 16 -preset slow -c:a aac -b:a 192k` (plus `afade` at the cut points)
- Last frame: `-sseof -0.1 -i IN -frames:v 1 -update 1 out.png`
- Slow motion: `setpts=2*PTS,minterpolate=fps=24:mi_mode=mci:mc_mode=aobmc:vsbmc=1` and `atempo=0.5`
- Save kept clips to `ISLAND_CLIPS/`, frames to `ISLAND_FRAMES/`, add a line to `ISLAND_HANDOFF.md`, then commit and push to the working branch.

## 12. Files in this repo

| Path | What |
|---|---|
| `ISLAND_MASTER_BRIEF.md` | **this file** |
| `ISLAND_HANDOFF.md` | full log of every decision (older parts may be outdated; this brief wins) |
| `ISLAND_FILM_SKILL/SKILL.md` | the PG film brief for Dola/Seedance chats |
| `ISLAND_CLIPS/` | trimmed, usable clips |
| `ISLAND_FRAMES/` | first and last frames |
| `ISLAND_ELEMENTS/`, `REFS_MASTER/` | reference images |
| `ISLAND_SCRIPT.md` | original 100-clip script (from before the story changes) |
| `FIREFLY_ELEMENTS_DOWNLOADER/` | Chrome extension to download element images (v1.2, untested) |
| `DOLA_PACK_WATER/`, `DOLA_WATER_SCENE/` | Dola reference packs |
