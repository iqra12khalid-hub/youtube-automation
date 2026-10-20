READ ME FIRST - follow SKILL.md (clip-pipeline).

8 clips in this order:

CLIP_01_BREAKFAST_IS_SERVED
   MODE: IMAGE-TO-VIDEO | FIRST FRAME: FIRST_FRAME.jpg (in this folder)
   REFERENCES: rhino, cham, tree

CLIP_02_SUNSET_SLEEP_WITH_MAMA
   MODE: IMAGE-TO-VIDEO | FIRST FRAME: LAST FRAME OF CLIP_01
   REFERENCES: rhino, cham, mama

CLIP_03_THE_JEEP_ON_THE_HILL
   MODE: TEXT-TO-VIDEO | FIRST FRAME: NONE
   REFERENCES: jeep, sav

CLIP_04_TALL_AND_SHORT_POACHER
   MODE: IMAGE-TO-VIDEO | FIRST FRAME: LAST FRAME OF CLIP_03
   REFERENCES: tall, short, jeep

CLIP_05_BINOCULAR_VIEW
   MODE: IMAGE-TO-VIDEO | FIRST FRAME: LAST FRAME OF CLIP_02
   REFERENCES: rhino, mama

CLIP_06_THE_DART_BLOWPIPE
   MODE: IMAGE-TO-VIDEO | FIRST FRAME: LAST FRAME OF CLIP_04
   REFERENCES: tall, short, jeep

CLIP_07_HIS_EARS_HEAR_SOMETHING
   MODE: IMAGE-TO-VIDEO | FIRST FRAME: LAST FRAME OF CLIP_02
   REFERENCES: rhino, cham, mama

CLIP_08_THUNDER_AND_THE_JEEP
   MODE: IMAGE-TO-VIDEO | FIRST FRAME: LAST FRAME OF CLIP_06
   REFERENCES: tall, short, jeep

PARALLEL (max 2 at a time):
- Start CLIP_01 and CLIP_03 together (CLIP_03 needs no first frame).
- CLIP_02 waits for CLIP_01. CLIP_04 waits for CLIP_03.
- CLIP_05 and CLIP_07 wait for CLIP_02. CLIP_06 waits for CLIP_04. CLIP_08 waits for CLIP_06.

DELIVER EACH CLIP AS SOON AS IT IS READY, exactly like 00_DELIVERY_EXAMPLE.png (your normal video result in the chat).
Settings for all: Seedance 2.0 | 15 seconds | 16:9 | 4K. Confirm with me once before starting.
Kid-friendly: the poachers use a SLEEPING DART blowpipe only. No guns, no blood, no violence.
