# Freddy's 3D Anime Fighting Game — Master Checklist

**Project:** Jujutsu Kaisen-inspired, third-person 3D anime fighting game, being made as a Christmas present for Freddy. **The game itself is not Christmas-themed.**

**Target development/playtesting device:** iPhone 13 • landscape-only • Scriptable + Three.js • GitHub `CaddikLeonJ/Freddys3DFighter`

**Checklist status:** Living placeholder — we can add, remove, rearrange, or abandon features at any point.

## ✅ Set up / confirmed

- [x] Dedicated GitHub repository created: `Freddys3DFighter`
- [x] `index.html` Combat Lab v0.2.1 committed to GitHub
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

- [ ] Tune full-body third-person camera (fighter + opponent clearly visible)
- [ ] Add combat lock-on / opponent tracking, with an easy way to disengage
- [ ] Adjust landscape touch controls for comfortable two-thumb play
- [ ] Refine walk, run/sprint, turn, dash, jump and aerial movement
- [ ] Refine punch and kick timing, ranges, hitboxes and knockback
- [ ] Refine blocking, hit reactions, cooldowns and combo flow
- [ ] Tune training dummy health and reset options
- [ ] Test frame rate, camera clipping and control responsiveness on iPhone

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
- [ ] Standard light / heavy attacks and chained combos
- [ ] Hitstun, guarding, guard break and recovery
- [ ] Cursed energy resource, cost and regeneration
- [ ] Character-specific cursed techniques
- [ ] Special attack effects, sounds and camera moments
- [ ] Domain Expansions (later-stage feature)
- [ ] Enemy AI / difficulty
- [ ] Balancing, invulnerability frames and fair cooldowns

## 🏟️ Maps and presentation

- [ ] Finalise first fighting arena
- [ ] Add suitable anime-style lighting / cel-shaded look
- [ ] Add arena boundaries and prevent camera clipping
- [ ] Create 3D scenery and additional stages (TBD)
- [ ] Improve HUD health, energy, combo and target indicators
- [ ] Main menu, pause, character select, options and result screen
- [ ] Visual feedback for attacks / damage

## 🎵 Sound and voices

- [ ] Make original music with Suno
- [ ] Add suitable attack, impact, movement and UI sounds
- [ ] Add voice lines if desired
- [ ] Set up audio mixing and in-game volume sliders
- [ ] Check music and asset rights before any public release

## 🎮 Modes and game structure — to decide

- [ ] Choose first target: training-only, single fight, arcade, story, etc.
- [ ] Choose first opponent and arena
- [ ] Decide solo AI fight vs other modes
- [ ] Decide whether multiplayer is needed (not included by default)
- [ ] Add progression, unlocks or save system only if needed

## 🛠️ Testing and release

- [ ] Test all core controls and combat on iPhone 13
- [ ] Optimise shaders, model polygon counts and textures
- [ ] Test restarting, pausing and returning to menu
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

**Combat Feel v0.3:** Keep the current arena and temporary fighters, improve full-body combat camera, opponent lock-on, two-thumb landscape controls and clean punch/kick hit reactions. Test on the actual iPhone before replacing the placeholders with finished 3D models.

---
**How we work:** Update this checklist as decisions are made. Keep game changes in `index.html`; Scriptable uses the GitHub auto-updater. No new launcher download is required for normal game updates.
