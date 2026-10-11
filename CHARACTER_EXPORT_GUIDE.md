# Tripo character guide — for Freddy's 3D Fighter
**Goal:** Make one attractive **game-ready anime fighter** to replace the placeholder in the working iPhone game. You can design the character freely; these are technical tips, not fixed art requirements.

## Suggested model brief
- Full body from head to toe; keep hands, fingers, legs and shoes clearly separated
- Anime/stylised proportions, clean silhouette, readable from a camera positioned behind the fighter
- Neutral **A-pose or T-pose** when generating a riggable base model
- Symmetrical anatomy, sensible arm/leg joints, feet on the ground
- Mesh with textures/materials; avoid permanently sculpted attack effects or elaborate hair geometry that clips through the body

## Export request
1. Prefer **GLB (.glb)** for our Three.js/WebGL workflow.
2. Ideally include a single skinned skeleton (rig) and embedded animation clips.
3. Useful animation clips: **Idle, Walk, Run, Jump, Punch, Kick, Block, Dash, Hit, KO**.
4. If Tripo allows it, lower polygon counts/retopologise and use compressed textures suitable for mobile.
5. Suggested *starting* target, not a strict limit: around **5k–20k triangles for the main character** and textures around **1024²–2048²**. We'll tune after testing on iPhone 13.
6. Export **one scale-consistent model** (height ~1.8 game units). We can correct axes/scale in code.
7. Keep the original project and the exported .glb so we can iterate without generating from scratch.

## What to send
- The `.glb` file (not just an image/render)
- A screenshot showing the full body
- Which animations (if any) are included
- Your preferred fighter name and any character-specific combat ideas

We'll test import and animation clips before promising full automatic rigging. Tripo features, format support and download rights vary with account/plan.

## Licensing
Check the rights for any generated or uploaded source image, plus Tripo export and commercial-use terms, particularly if the project is later distributed beyond a private gift.
