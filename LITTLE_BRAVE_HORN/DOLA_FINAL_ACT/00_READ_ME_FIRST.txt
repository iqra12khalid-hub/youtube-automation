READ ME FIRST - follow SKILL.md (clip-pipeline).

THE FINAL ACT of LITTLE BRAVE HORN: 9 clips in this order:

CLIP_01_THE_SLEEPING_DART
   MODE: TEXT-TO-VIDEO | FIRST FRAME: NONE
   REFERENCES: 04_TALL_POACHER_SHEET, 05_SHORT_POACHER_SHEET, 06_BLOWPIPE, 08_ACACIA_TREE_NIGHT_LOCATION, 09_FAMILY_ASLEEP_LOOK

CLIP_02_MAMA_WON_T_WAKE_UP
   MODE: IMAGE-TO-VIDEO | FIRST FRAME: LAST FRAME OF CLIP_01
   REFERENCES: 01_BABY_RHINO_SHEET, 02_BLUE_CHAMELEON_SHEET, 03_MAMA_RHINO_SHEET, 08_ACACIA_TREE_NIGHT_LOCATION

CLIP_03_THE_NET
   MODE: IMAGE-TO-VIDEO | FIRST FRAME: LAST FRAME OF CLIP_02
   REFERENCES: 01_BABY_RHINO_SHEET, 02_BLUE_CHAMELEON_SHEET, 04_TALL_POACHER_SHEET, 05_SHORT_POACHER_SHEET

CLIP_04_THE_BRAVE_STAND
   MODE: IMAGE-TO-VIDEO | FIRST FRAME: LAST FRAME OF CLIP_03
   REFERENCES: 01_BABY_RHINO_SHEET, 02_BLUE_CHAMELEON_SHEET, 04_TALL_POACHER_SHEET, 05_SHORT_POACHER_SHEET

CLIP_05_THE_DART_BACKFIRES
   MODE: IMAGE-TO-VIDEO | FIRST FRAME: LAST FRAME OF CLIP_04
   REFERENCES: 01_BABY_RHINO_SHEET, 02_BLUE_CHAMELEON_SHEET, 04_TALL_POACHER_SHEET, 05_SHORT_POACHER_SHEET

CLIP_06_THE_HERD_AND_THE_JEEP
   MODE: IMAGE-TO-VIDEO | FIRST FRAME: FIRST_FRAME.jpg (in this folder)
   REFERENCES: 03_MAMA_RHINO_SHEET (the herd rhinos look like her), 04_TALL_POACHER_SHEET, 05_SHORT_POACHER_SHEET, 07_JEEP_SHEET

CLIP_07_TANGLED_IN_THEIR_OWN_NET
   MODE: IMAGE-TO-VIDEO | FIRST FRAME: LAST FRAME OF CLIP_06
   REFERENCES: 01_BABY_RHINO_SHEET, 02_BLUE_CHAMELEON_SHEET, 04_TALL_POACHER_SHEET, 05_SHORT_POACHER_SHEET

CLIP_08_THE_RANGERS
   MODE: IMAGE-TO-VIDEO | FIRST FRAME: LAST FRAME OF CLIP_07
   REFERENCES: 01_BABY_RHINO_SHEET, 02_BLUE_CHAMELEON_SHEET, 04_TALL_POACHER_SHEET, 05_SHORT_POACHER_SHEET

CLIP_09_MY_BRAVE_LITTLE_HORN
   MODE: TEXT-TO-VIDEO | FIRST FRAME: NONE
   REFERENCES: 01_BABY_RHINO_SHEET, 02_BLUE_CHAMELEON_SHEET, 03_MAMA_RHINO_SHEET, 08_ACACIA_TREE_NIGHT_LOCATION

PARALLEL (max 2 at a time):
- Start CLIP_01 and CLIP_06 together (neither waits for another clip).
- CLIP_02 waits for CLIP_01, CLIP_03 waits for CLIP_02, CLIP_04 waits for CLIP_03, CLIP_05 waits for CLIP_04.
- CLIP_07 waits for CLIP_06, CLIP_08 waits for CLIP_07.
- CLIP_09 needs no first frame: start it whenever a slot is free.

DELIVER EACH CLIP AS SOON AS IT IS READY, exactly like 00_DELIVERY_EXAMPLE.png (your normal video result in the chat).
Settings for all: Seedance 2.0 | 15 seconds | 16:9 | 4K. Confirm with me once before starting.
AUDIO: every clip MUST have sound effects and music. Dialogue ONLY where a clip writes the exact lines; clips marked "No dialogue" have no speech at all.
Kid-friendly: the poachers use a SLEEPING DART blowpipe only. No guns, no blood, no violence. Mama is only asleep and wakes up at sunrise.
The poachers always come from BEHIND the rhinos. Short grass only, never tall grass. The chameleon is always BLUE with yellow spots.

VERSION 3 FIXES (read before generating):
- NEW 10_SLEEPING_PLACE_FAMILY_ASLEEP = the exact place where the family sleeps under the acacia tree, all eyes closed. Use it for CLIP_01 to CLIP_05.
- NEW 11_POACHERS_MUDDY_LOOK = how the poachers look NOW: muddy. Mud is brown splashes, NEVER a beard. The short poacher has no beard and no moustache.
- 06_BLOWPIPE now has arrows: MOUTH on the THIN bamboo end, the dart comes OUT of the WIDE METAL end (the back tail).
- CLIP_01: TEXT-TO-VIDEO, poachers stay three steps behind Mama in one wide shot, no red mark.
- CLIP_06: starts from its FIRST_FRAME.jpg so the jeep is OUR sage-green jeep with roll-cage and spare tyres (07_JEEP_SHEET). The herd pushes the jeep into the mud; it never drives by itself.
