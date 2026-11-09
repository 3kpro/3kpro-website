# GreenAuto "Tomorrow" 3D Scroll Motion & Fly-In Release — Accepted Closeout (2026-11-08)

## Summary

Upgraded all 6 client previews (`preview-01-gat-os` through `preview-06-heritage-fleet`) and the Suite Hub for **Michael Lee — Green Auto Technology** at `https://3kpro.services/clients/GreenAuto` with the two-tier **"Tomorrow" 3D Scroll Choreography & Spatial Fly-In Engine** (`gat-motion.css` + `gat-motion.js`) and Edge proxy asset acceleration. James reviewed the live deployment and confirmed: *"OK looks good. Throw them up so Michael sees the updated version and do not forget exit behavior and udpating any relevant .md files with proper documentation"*.

- **Live Hub URL:** `https://3kpro.services/clients/GreenAuto`
- **Live Preview Routes:**
  - `https://3kpro.services/clients/GreenAuto/preview-01-gat-os/index.html`
  - `https://3kpro.services/clients/GreenAuto/preview-02-apex-atelier/index.html`
  - `https://3kpro.services/clients/GreenAuto/preview-03-precision-lab/index.html`
  - `https://3kpro.services/clients/GreenAuto/preview-04-wave-flagship/index.html`
  - `https://3kpro.services/clients/GreenAuto/preview-05-vortex-3d/index.html`
  - `https://3kpro.services/clients/GreenAuto/preview-06-heritage-fleet/index.html`
- **Released Source on `origin/main`:** `f452441` (motion engine) -> `f25ba14` (`proxy.ts` Edge middleware bypass + `next.config.js` fallback rewrites + hub thumbnail cache-bust) -> `55ad595` (viewport-edge hysteresis & `_gatLockUntil` cooldown lock in `gat-motion.js?v=20261108c`).
- **Production Deployment:** `dpl_CLUo9Qjcnid4y5LbYJGjwBiGk5MZ` (`https://3kpro-website-ebr0vd6wd-3kpros-projects.vercel.app`, `READY`, aliased to `https://3kpro.services`).
- **Rollback Deployment:** `dpl_5mUAfgKwtN7PkQkrqRiEgR6FM26d` (`ada5016`).

## What Changed

1. **Two-Tier 3D Scroll Fly-In Choreography (`gat-motion.css` + `gat-motion.js`, 559 Animated Boxes):**
   - **Subtle Fly-In Tier (`.gat-box`):** Directional 3D fly-in (`660ms`, `cubic-bezier(0.22, 1, 0.36, 1)`) with row/column stagger on every stat cell, telemetry module, stage card, product card (including dynamically filtered/searched cards via `MutationObserver`), video card, blog article card, step card, calculator slider row, and section header.
   - **Impress Fly-In Tier (`.gat-impress-box` — "Unless We Need to Impress"):** Deep 3D perspective fly-in (`860ms`, `cubic-bezier(0.16, 1, 0.3, 1)`) + automated diagonal **Specular CNC Light Sweep** (`gat-cnc-sheen`) on Hero hardware showcases, all 6 Hub preview cards, Flagship Combustion Stack banners, CFD Dual MP4 consoles, Interactive Simulators, ROI/Fleet Payback output cards, Dynojet/OWON/ASM Proof cards, and Inquiry consoles.
   - **Viewport-Edge Hysteresis & Cooldown Lock (`55ad595`, `gat-motion.js?v=20261108c`):** Added an active-animation + `400ms` cooldown lock (`_gatLockUntil`) and a `140px` off-screen hysteresis dead-band (`rect.top > window.innerHeight + 140 || rect.bottom < -140`) in `boxObserver` so the initial `+46px` vertical fly-in offset never self-cancels or oscillates when a row of boxes is parked at the bottom edge of the viewport (`maxFiresPerElement: 1` verified via Playwright).
2. **Scroll-Driven Atmosphere & Telemetry:**
   - Top 3px glowing **Laser Scroll Progress Beam** (`.gat-scroll-laser`).
   - **3D Hero Ambient Atmosphere** (`.gat-hero-atmosphere`).
   - **Section Laser Horizon Dividers** (`.gat-section-laser`).
   - Desktop **Cursor-Tracked Radial Spotlight & 3D Micro-Tilt** (`--spot-x`, `--spot-y`, `--tilt-x`, `--tilt-y`).
   - Live **Numerical Counter Rollups**, dynamic width fill on Preview 02's `.f-fill` friction bars, and continuous vortex dash flow on Preview 06's SVG intake streamlines (`#svg-stream-1/2/3`).
   - Bottom-right **Motion HUD Pill** (`.gat-motion-hud`) with `↻ Replay Motion` and `⏸ Pause` / `▶ Resume`.
3. **Windows 11 `prefers-reduced-motion` Auto-Kill Fix:**
   - Updated `preview-01-gat-os/styles.css`, `preview-01-gat-os/app.js`, `preview-05-vortex-3d/app.js`, and `preview-06-heritage-fleet/app.js` so Windows 11 OS accessibility flags do not silently disable CSS transitions, the Three.js 3D WebGL throttle body disassembly, or the GSAP ScrollTrigger pinned intake stage on load.
4. **Edge Proxy Asset Acceleration & Thumbnail Protection (`proxy.ts`, `next.config.js`, `public/clients/GreenAuto/index.html`):**
   - Excluded `/clients/` from `proxy.ts` Edge middleware and restricted `supabase.auth.getUser()` to `/admin` routes so static images/videos under `/clients/GreenAuto` never stall or time out against paused Supabase instances (`~32,000ms` -> `290–450ms`).
   - Added fallback rewrites in `next.config.js` (`/clients/:preview(preview-0[1-6]-[^/]+)/:path*` and `/clients/greenauto/:path*`), cache-busted all 6 hub thumbnails (`?v=20261108b`), and set `color: transparent; font-size: 0;` on `.card-thumb img`.

## Verification Evidence

- Playwright verification passed across all 14 desktop (`1440×900`) and mobile (`390×844`) viewports on `https://3kpro.services/clients/GreenAuto` and Previews 01–06 (`status: 200`, `overflowX: 0`, `visibleBroken: []`, `pageErrors: []`).
- Mirrored across `C:\DEV\_3KPRO-WEBSITE\public\clients\GreenAuto\`, `C:\DEV\_3KPRO-GENERAL\MainBrain\CLIENT_DELIVERIES\`, and `C:\DEV\_3KPRO-GENERAL\MainBrain\CLIENT_DELIVERIES\green-auto-technology-site\`.
