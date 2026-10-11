# Freddy's 3D Anime Fighting Game
A third-person, landscape-only anime fighting game inspired by *Jujutsu Kaisen*, being built on iPhone 13 as a Christmas gift for Freddy. The game itself is **not** Christmas-themed.

**Current prototype:** Combat Lab **v0.3.1** — test arena, placeholder fighters, lock-on camera, touchscreen combat, sparring dummy AI, training and optional 90-second duel.

## Play
Run `Freddys3DFighter_Scriptable_Updater.js` in the Scriptable app on iPhone. It fetches the latest `index.html` from this repository. Portrait orientation lock must be off, and Three.js currently loads online.

## Controls
- Left joystick: move; push fully to sprint. Lock-on means strafing.
- PUNCH / KICK: melee attacks with combo buffering.
- BLOCK: hold to guard.
- DASH: quick directional evade.
- JUMP: leap.
- ENERGY: ranged cursed-energy attack (uses energy).
- LOCK: automatic opponent-facing / framing on or off.
- CAMERA: normal or high angle.
- AI: STILL / GUARD / SPAR in training.
- MODE: TRAIN (unlimited) or DUEL (90-second single fight).
- PAUSE: resume, reset and toggle temporary sound effects.
- DEBUG: FPS, state and training statistics.

## Status
**Prototype / needs device playtesting.** Placeholder figures and effects, not final JJK character models or animations. The 3D engine ran on the user's iPhone with v0.2.1, but v0.3.1 combat changes still need verification there.

- [Master development checklist](MASTER_CHECKLIST.md)
- [Tripo model export guide](CHARACTER_EXPORT_GUIDE.md)

All regular game updates change only `index.html` and automatically load through the existing Scriptable updater.
