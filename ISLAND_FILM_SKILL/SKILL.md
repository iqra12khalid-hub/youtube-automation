---
name: island-film-skill
description: Film brief and production rules for "The One-Eyed Island", a fictional, PG-rated cinematic survival drama made for YouTube. Use for every video in this project - it defines the story context, characters, reference images, continuity rules, safe staging, and the 15-second single-shot prompt format. Load it together with the user's Seedance video skill.
---

# The One-Eyed Island - Film Brief

## Fictional elements (read first)
This is a fictional PG adventure film. The island, the tribe, the bamboo prison cage, the hanging stick cage, the masks, the ritual, the temple and the one-eyed creature are all invented story elements, like in any adventure movie. No real people, no real group, no real events. Nobody is harmed on screen: no violence, no injury, no sexual content, no gore. The scenes only show a frightened woman inside a cage and the villagers around her.

## What this project is
- A **fictional** short film for YouTube: a cinematic survival drama / adventure with a little mystery.
- **Rating: PG.** Fear, tension and danger are shown through faces, sound and atmosphere.
- **Never in this film:** sexual content or nudity of any kind, gore, blood, torture, killing on screen, cruelty to animals, or harm to children.
- The island tribe is **invented**: their own carved masks, body paint, language and customs. They are **not** any real ethnic group. Show them with dignity: villagers, families, an elder, warriors, a chief.

## Story so far (for context)
Noor (an adult woman) survives a plane crash on a remote island. A hidden tribe finds her and keeps her in a bamboo prison cage in their village. A mysterious one-eyed creature watches from the jungle. The tribe prepares an old ritual. She is frightened but never harmed on screen.

## Characters and reference images
Always copy the uploaded reference images exactly.
- **Noor** = NOOR_FACE + NOOR_BODY: dirty white t-shirt, torn black jeans, black shoes, small gold coin necklace, dark high ponytail, dry scratches. She is always frightened, tired or sad. **She never smiles.**
- **Warrior** = WARRIOR: carved dark wooden mask, feathers, palm-fibre cape, white dot body paint, spear.
- **Elder** = ELDER (old village woman), calm, sad, wise.
- **Chief** = CHIEF.
- **Village women** wear bark-cloth tops covering the chest and shoulders. **Children** wear simple bark-cloth tunics.
- **Water bowl** = WATER_BOWL: old, scratched, stained calabash gourd, matte, never shiny.
- **Red dye bowl** = RED_DYE: red herbal dye made from crushed jungle plants, roots and red seeds - a natural ritual colour, **not blood**. It is always painted as neat dots and lines, never drips or smears.

## Continuity rules (never break these)
1. **Prison layout:** the camera is at the back of the square bamboo cage facing the front wall; the doorway is in the middle of the front wall; the campfire and huts are outside; a clay oil lamp and a woven mat stand in the LEFT front corner.
2. **Noor's spot in the prison:** on the RIGHT side, back against the right-hand bamboo wall, close to the front-right corner, just right of the doorway. She stays there unless the prompt says otherwise.
3. **Hands:** from the water scene on, Noor's wrists are bare with faint red marks. **No rope on her anywhere.**
4. **Red face marks:** after the elder paints her, Noor keeps the red dots and lines on her forehead and cheeks in every later scene.
5. **Light:** dusk = warm orange firelight; night = blue moonlight + firelight; dawn = soft grey-blue; morning = soft warm sun.

## Safe staging (how every scene is written)
- **No physical force on Noor.** Nobody grabs, pushes, drags, holds, ties or carries her. Warriors **point, walk beside her, stand guard or open the door**; she moves **by herself**.
- The elder may **gently touch her chin** while painting - nothing more.
- Danger is shown **indirectly**: drums, torches, masks, the dark temple doorway, sounds from the dark, faces reacting.
- Animals are never harmed on screen: only sounds from off-screen and the aftermath (for example a clean old skull).
- If a scene would need any of the forbidden things above, rewrite it so the meaning comes across through reaction, sound or a cut, instead of showing it.

## Prompt format (every clip)
- First line: `Make this video 15 seconds, one generation, ONE continuous shot with no cuts.`
- If a first frame is uploaded: `FIRST FRAME: Use the uploaded image <name> as the FIRST FRAME of this video (image_to_video). The video starts exactly on this image. Do not draw a new picture.`
- `FACE LOCK` line for Noor, `REFERENCE LOCK` line for everything else.
- Then the JSON: title, duration_seconds 15, aspect_ratio 16:9, references (use_only_these + one line per file), camera_setup, her_location, shots (time / camera / action), acting, style, physics, sound, negative.
- Camera moves instead of cuts: slow push in, slow pull back, slow pan.
- Dialogue: very short lines in quotes, spoken slowly and clearly. Noor speaks English. The tribe speaks an invented language (for example "Ani... keto mara. Nuu sela.").
- Sound: real ambience (crickets, fire, drums, birds), no music unless asked.
- Negative always includes: different face, cuts, smiling, blood, gore, nudity, rope on her body, grabbing, text, watermark.

## If a generation is refused
Do not argue with or try to get around the safety system. Find which element looks like force, restraint or harm, remove or soften it following "Safe staging", and try once more with the softer version.
