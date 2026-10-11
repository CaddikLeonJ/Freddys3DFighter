# Freddy's 3D Anime Fighting Game — Master Checklist

**Project:** Jujutsu Kaisen-inspired, third-person 3D anime fighting game, being made as a Christmas present for Freddy. **The game itself is not Christmas-themed.**

**Target development/playtesting device:** iPhone 13 • landscape-only • Scriptable + Three.js • GitHub `CaddikLeonJ/Freddys3DFighter`

**Checklist status:** Living placeholder — we can add, remove, rearrange, or abandon features at any point.

## ✅ Set up / confirmed

- [x] Dedicated GitHub repository created: `Freddys3DFighter`
- [x] `index.html` Combat Lab v0.3.1 committed to GitHub
- [x] Simple GitHub → Scriptable updater installed and tested on iPhone
- [x] 3D training arena opens and runs on iPhone 13
- [x] Landscape-only interface/orientation prompt in prototype
- [x] Basic third-person following camera in prototype
- [x] Temporary fighter and training dummy in prototype
- [x] Prototype touchscreen movement and combat buttons
- [x] Basic HUD and combat test effects in prototype
- [x] Tripo available for 3D model creation
- [x] Suno available for soundtrack production

> **Note:** “In prototype” means the feature exists in a basic form, not that it is finished, balanced, or confirmed bug-free.

## 🎯 Next sprint — make the fighting feel good

- [x] Implement full-body third-person camera framing player and opponent (needs iPhone playtest)
- [x] Add combat lock-on / opponent tracking toggle (needs playtest)
- [x] Lay out landscape joystick and fighting buttons (feel still needs playtest)
- [x] Implement movement sprint, strafe, dash and jump prototypes (feel needs playtest)
- [x] Implement punch/kick timing, combo buffering, hit checks and knockback prototypes
- [x] Implement basic guarding, hit reactions, cooldowns and combo flow (balance pending)
- [x] Add dummy modes STILL / GUARD / SPAR, reset and respawn
- [ ] Test v0.3.1 on actual iPhone 13: camera, AI, collisions, controls, sound, timer, pause

## 🧍 Characters and animation

- [ ] Decide our first playable fighter and character design
- [ ] Create/reference a game-ready model in Tripo or Meshy
- [ ] Check polycount, model scale, textures and licence
- [ ] Export and import an animated GLB into Three.js
- [ ] Proper idle, walk, run, jump, dash, block and attack animations
- [ ] Blend animation states without snapping or sliding
- [ ] Add an opponent character and/or training dummy animations
- [ ] Define playable roster (TBD)

## ⚔️ Combat systems

- [ ] Decide combat rules: health, rounds, timers and win conditions
- [x] Prototype light punch / stronger kick and chained combo buffering (actual move trees pending)
- [x] Prototype hitstun, guarding, recovery and hit invulnerability (guard break pending)
- [x] Prototype cursed energy cost and regeneration
- [ ] Character-specific cursed techniques
- [ ] Special attack effects, sounds and camera moments
- [ ] Domain Expansions (later-stage feature)
- [x] Basic optional sparring dummy AI (difficulty options pending)
- [ ] Balancing, invulnerability frames and fair cooldowns

## 🏟️ Maps and presentation

- [ ] Finalise first fighting arena
- [ ] Add suitable anime-style lighting / cel-shaded look
- [ ] Add arena boundaries and prevent camera clipping
- [ ] Create 3D scenery and additional stages (TBD)
- [x] Prototype HUD for HP, cursed energy, combos, target marker and training stats
- [x] Pause, reset, SFX toggle and duel results (main menu and character select pending)
- [x] Placeholder damage numbers, hits and impact feedback

## 🎵 Sound and voices

- [ ] Make original music with Suno
- [x] Temporary synthesised combat feedback SFX (final effects pending)
- [ ] Add voice lines if desired
- [ ] Set up audio mixing and in-game volume sliders
- [ ] Check music and asset rights before any public release

## 🎮 Modes and game structure — to decide

- [x] Implement training mode plus optional 90-second solo duel prototype (other modes TBD)
- [ ] Choose first opponent and arena
- [x] Implement initial solo AI fight (multiplayer not decided)
- [ ] Decide whether multiplayer is needed (not included by default)
- [ ] Add progression, unlocks or save system only if needed

## 🛠️ Testing and release

- [ ] Test all core controls and combat on iPhone 13
- [ ] Optimise shaders, model polygon counts and textures
- [ ] Test pause, reset, duel, result and rematch on device (main menu not built)
- [ ] Fix bugs from playtests
- [ ] Decide final gift delivery format and packaging
- [ ] Back up a stable release version and create an update log

## 💡 Ideas parking lot (not commitments)

- [ ] Multiple playable characters
- [ ] Cinematic ultimates / Domain Expansions
- [ ] Multiple stages
- [ ] Training combo challenges
- [ ] Story or arcade mode
- [ ] Controller support
- [ ] Multiplayer

## 📌 Next recommended milestone

**Current build: Combat Lab v0.3.1**. Added lock-on third-person camera, character-facing strafing, sprinting, buffered combos, guarding, hit/knockback effects, train/guard/spar AI modes, 90-second duel, win/lose/draw results, rematch, pause, SFX and training stats. JavaScript syntax checked and landscape UI layout inspected in a browser. **Not yet validated in the actual Scriptable WebView**.

**Next:** Leon tests the new build on iPhone 13; fix any bugs before importing a Tripo GLB model with embedded rig/animations. Then make model fit and blend animations with the controls.

**Not yet built:** official first fighter, other 3D models and animations, character selection, unique cursed techniques, Domain Expansions, final arenas, Suno music integration, multiplayer, story, polished UI and full QA.

---
**How we work:** Update this checklist as decisions are made. Keep game changes in `index.html`; Scriptable uses the GitHub auto-updater. No new launcher download is required for normal game updates.
