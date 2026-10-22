READ ME FIRST - follow SKILL.md (clip-pipeline).

VERSION 8 - THE FINAL ACT of LITTLE BRAVE HORN. This replaces ALL earlier versions. 13 clips in this order:

CLIP_01_THE_SLEEPING_DART
   MODE: IMAGE-TO-VIDEO | FIRST FRAME: FIRST_FRAME.jpg (in this folder)
   REFERENCES: 04_TALL_POACHER_SHEET, 05_SHORT_POACHER_SHEET, 11_POACHERS_MUDDY_LOOK, 06_BLOWPIPE, 10_SLEEPING_PLACE_FAMILY_ASLEEP, 09_FAMILY_ASLEEP_LOOK

CLIP_02_MAMA_WON_T_WAKE_UP
   MODE: IMAGE-TO-VIDEO | FIRST FRAME: FIRST_FRAME.jpg (in this folder) = the real last frame of CLIP_01
   REFERENCES: 01_BABY_RHINO_SHEET, 02_BLUE_CHAMELEON_SHEET, 03_MAMA_RHINO_SHEET, 10_SLEEPING_PLACE_FAMILY_ASLEEP

CLIP_03_THEY_COME_FOR_THE_BABY
   MODE: IMAGE-TO-VIDEO | FIRST FRAME: LAST FRAME OF CLIP_02
   REFERENCES: 01_BABY_RHINO_SHEET, 02_BLUE_CHAMELEON_SHEET, 04_TALL_POACHER_SHEET, 05_SHORT_POACHER_SHEET, 11_POACHERS_MUDDY_LOOK

CLIP_04_HE_RUNS
   MODE: IMAGE-TO-VIDEO | FIRST FRAME: LAST FRAME OF CLIP_03
   REFERENCES: 01_BABY_RHINO_SHEET, 02_BLUE_CHAMELEON_SHEET, 04_TALL_POACHER_SHEET, 05_SHORT_POACHER_SHEET, 11_POACHERS_MUDDY_LOOK

CLIP_05_THE_CHAMELEON_FIGHTS
   MODE: IMAGE-TO-VIDEO | FIRST FRAME: LAST FRAME OF CLIP_04
   REFERENCES: 02_BLUE_CHAMELEON_SHEET, 04_TALL_POACHER_SHEET, 05_SHORT_POACHER_SHEET, 11_POACHERS_MUDDY_LOOK, 06_BLOWPIPE

CLIP_06_THE_SAW
   MODE: IMAGE-TO-VIDEO | FIRST FRAME: LAST FRAME OF CLIP_05
   REFERENCES: 02_BLUE_CHAMELEON_SHEET, 03_MAMA_RHINO_SHEET, 04_TALL_POACHER_SHEET, 05_SHORT_POACHER_SHEET, 11_POACHERS_MUDDY_LOOK, 07_JEEP_SHEET

CLIP_07_ONLY_THE_LITTLE_ONE
   MODE: IMAGE-TO-VIDEO | FIRST FRAME: LAST FRAME OF CLIP_06
   REFERENCES: 01_BABY_RHINO_SHEET, 05_SHORT_POACHER_SHEET, 11_POACHERS_MUDDY_LOOK

CLIP_08_THE_BULLY_IN_THE_JEEP
   MODE: IMAGE-TO-VIDEO | FIRST FRAME: LAST FRAME OF CLIP_07
   REFERENCES: 01_BABY_RHINO_SHEET, 05_SHORT_POACHER_SHEET, 11_POACHERS_MUDDY_LOOK, 07_JEEP_SHEET

CLIP_09_THE_BIG_RHINO
   MODE: IMAGE-TO-VIDEO | FIRST FRAME: LAST FRAME OF CLIP_08
   REFERENCES: 01_BABY_RHINO_SHEET, 03_MAMA_RHINO_SHEET (the big rhino looks like her, but even bigger), 05_SHORT_POACHER_SHEET, 07_JEEP_SHEET

CLIP_10_THE_LANDING
   MODE: TEXT-TO-VIDEO | FIRST FRAME: NONE
   REFERENCES: 04_TALL_POACHER_SHEET, 05_SHORT_POACHER_SHEET, 11_POACHERS_MUDDY_LOOK, 07_JEEP_SHEET

CLIP_11_THE_HERD
   MODE: IMAGE-TO-VIDEO | FIRST FRAME: LAST FRAME OF CLIP_09
   REFERENCES: 01_BABY_RHINO_SHEET, 03_MAMA_RHINO_SHEET (all herd rhinos look like her, different sizes)

CLIP_12_THE_NET_AND_THE_RANGERS
   MODE: IMAGE-TO-VIDEO | FIRST FRAME: LAST FRAME OF CLIP_10
   REFERENCES: 02_BLUE_CHAMELEON_SHEET, 04_TALL_POACHER_SHEET, 05_SHORT_POACHER_SHEET, 11_POACHERS_MUDDY_LOOK

CLIP_13_MY_BRAVE_LITTLE_HORN
   MODE: TEXT-TO-VIDEO | FIRST FRAME: NONE
   REFERENCES: 01_BABY_RHINO_SHEET, 02_BLUE_CHAMELEON_SHEET, 03_MAMA_RHINO_SHEET, 10_SLEEPING_PLACE_FAMILY_ASLEEP

CHAINS (each clip waits for the clip whose last frame it uses):
- 01 -> 02 -> 03 -> 04 -> 05 -> 06 -> 07 -> 08 -> 09 -> 11
- 10 -> 12
- CLIP_10 and CLIP_13 need no first frame: run them whenever a slot is free.
PARALLEL: max 2 at a time. Start CLIP_01 and CLIP_10 together.

DELIVER EACH CLIP AS SOON AS IT IS READY, exactly like 00_DELIVERY_EXAMPLE.png.
Settings for all: Seedance 2.0 | 15 seconds | 16:9 | 4K. Confirm with me once before starting.

RULES FOR EVERY CLIP:
- CLIP_01 is DONE. Start from CLIP_02 using its FIRST_FRAME.jpg.
- NEW 13_DART_ON_MAMA = the dart's round fluffy PINK tuft on top of Mama's back, just behind her shoulder hump. It stays in exactly that spot, same colour, same fluff, in every clip until it drops off at sunrise in CLIP_13.
- NEW 12_THE_NEXT_HILL = the hill where the baby appears, the jeep drives up and the big rhino rises over the crest (CLIP_06 to CLIP_09 and CLIP_11). Use exactly this hill every time.
- Sound effects and music in every clip. Dialogue ONLY where the exact lines are written; clips marked "No dialogue" have no speech at all.
- The BLOWPIPE is always exactly 06_BLOWPIPE.jpg (brown bamboo, short dark grey metal wide end, no gold, no trumpet). Mouth on the THIN end, the dart comes out of the WIDE METAL end. Tiny sleeping dart with a pink tuft, no blood.
- When the dart is fired there is always a clear distance (several metres) between the shooter and the target, and the location stays exactly the same.
- The family's sleeping place is always exactly 10_SLEEPING_PLACE_FAMILY_ASLEEP (grassy hill, acacia tree, no stone floor).
- The poachers look like their original sheets 04 and 05 plus the mud from 11. No beard on the short poacher. He is an adult, never child-sized.
- The baby rhino is pinkish-GREY, never bright pink. The chameleon is always BLUE.
- SUSPENSE: we never see where the baby went or how he got the herd. After he runs away (CLIP_04) he is not shown again until he appears alone on the hilltop in CLIP_07.
- The herd is always natural: different sizes, spread out, never in a straight line.
- The saw NEVER touches Mama's horn. Kid-friendly: no guns, no blood, no injuries.
