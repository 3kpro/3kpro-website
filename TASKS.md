# TASKS - 3kpro.services Company Site

## NOW
- [ ] **Deploy AI Workspace Implementation offer** — New page and outreach
      sheet are built and verified locally. Push `main` and deploy only after
      James explicitly approves production publication.
- [ ] **Ship the 2026-06-07 UI redesign** — `npm run build` now passes on
      Windows. Remaining step is production approval, then push `main`, update
      parent ref in `C:\DEV`, and deploy.
- [ ] **Social posture cleanup** — Align X, YouTube, and TikTok; verify/remove LinkedIn; create and seed Instagram/Facebook before exposing them on the website. See `docs/operations/SOCIAL_POSTURE_AUDIT_2026-06-06.md`.
- [ ] **Business Profile Sync** 🏢
      - **Goal:** Ensure site metadata matches the updated Google Business Profile.
- [ ] **Local AI Consulting Launch Posture**
      - **Goal:** Confirm indexing, tune Google Business Profile services, publish quick-pay links, and align homepage/service pages with website builds, AI automation, and custom micro-SaaS offers.

## BACKLOG
- [ ] **Admin Sales Cockpit v2** — Add lead capture, demo data reset, and Stripe checkout creation tools to the new protected `/admin` backend
- [ ] **Quick Pay Go-Live** — Verify Vercel production uses live-mode `STRIPE_SECRET_KEY`, then deploy `/pay` + `/api/quick-pay/checkout`
- [ ] **SEO Phase 3 — Homepage client→server refactor** — Extract static sections (hero, services grid, stats, pricing) into server components; keep `'use client'` only for modal state. Delegate to OC + DeepSeek.
- [ ] **SEO — FAQ + BreadcrumbList JSON-LD** — Add structured data to all three service pages
- [ ] **SEO — Blog content** — First 3 posts targeting Tulsa-area keywords
- [ ] **Stripe go-live** — Currently test mode only. Swap both keys + recreate Cloud Ledger price IDs in live mode when ready
- [ ] **GetXelora.com SEO audit** — Next site in queue after 3kpro.services

## COMPLETED
- [x] **Green Auto Technology "Tomorrow" 3D Scroll Motion & Fly-In Choreography (`dpl_6aVxCD5z9ZniWy63KkJ4UHsZVotB`)** — Built and wired the two-tier 3D scroll fly-in & spatial choreography engine (`gat-motion.css` + `gat-motion.js`) across the Suite Hub and Previews 01–06 (`f452441`), fixed Windows OS `prefers-reduced-motion` auto-kill in Previews 01/05/06, deployed to `https://3kpro.services/clients/GreenAuto`, and verified across 14/14 desktop & mobile viewports via Playwright (2026-11-08).
- [x] **Green Auto Technology 6-Variation Suite Expansion & Visual QA Release (`preview-05-vortex-3d` & `preview-06-heritage-fleet`)** — Added two new full-content client preview variations (real-time Three.js 3D Vortex Disassembly Cinema + Heavy-Duty Diesel & 1–25 Truck Commercial Fleet Edition), fixed root-relative hub thumbnails and desktop/mobile header & switcher alignment across all 6 variations, deployed to `https://3kpro.services/clients/GreenAuto` (`dpl_5mUAfgKwtN7PkQkrqRiEgR6FM26d`, commit `ada5016`), and verified 14/14 desktop & mobile viewports via Playwright (`visibleBroken: []`, `overflowX: 0`) (2026-11-07).
- [x] **GreenAuto Precision Lab mobile alignment repair** — exact preview approved, released source `88c181a`, production READY; 60/60 responsive states and six live file parity checks passed; James accepted live result (2026-10-27). Closeout: `docs/operations/GREENAUTO_MOBILE_RELEASE_2026-10-27.md`.
- [x] ✅ **Green Auto Technology client preview suite (01–04) + MP4 fluid-dynamics animations** — Built and deployed 4 preview variations at `https://3kpro.services/clients/GreenAuto`, updated `preview-04-wave-flagship` and `preview-03-precision-lab` with `ThrottleBodyCutaway.mp4` + `wave-vortex-animation.mp4` in the "How WAVE™ Technology Works" section and Gemini-remastered Dynojet/Oscilloscope/ASM evidence graphics (2026-10-26)
- [x] ✅ **AI Workspace Implementation revenue page** — Added a productized
      consulting page, sitemap route, and manual outreach sheet; `npm run
      build` passes locally. Not deployed yet (2026-06-16)
- [x] ✅ **Premium UI redesign — homepage, marketplace, 3 service pages** — Applied 3KPRO Design System navy/electric-blue look; added shared `SiteNav`/`SiteFooter`; `.bg-grid-dark` + brand vars in globals.css. tsc clean. On disk, pending build-fix + commit (2026-06-07)
- [x] ✅ **Contact form production delivery restored** — Hardened sender/error handling, replaced the stale Vercel production Resend key, redeployed, and verified a live submission returned success (2026-06-06)
- [x] ✅ **Admin seller login foundation** — Added protected `/admin/login`, `/admin/logout`, and `/admin` seller control room gated by Supabase Auth + email allowlist (2026-06-01)
- [x] ✅ **FairMerge marketplace facelift** — Added 3KPRO context, richer product copy, and review-signal graphics to `/marketplace/fairmerge` (2026-06-01)
- [x] ✅ **Cloud Ledger marketplace checkout 405 fix** — Marketplace "Acquire License" now POSTs to `/api/cloud-ledger/checkout`; direct GETs redirect to Cloud Ledger pricing (2026-06-01)
- [x] ✅ **Quick Pay Checkout integration** — `/pay` now creates Stripe Checkout Sessions for deposits, invoice balances, and custom payments (2026-05-31)
- [x] ✅ **Homepage contact posture and delivery verification** (2026-05-23)
- [x] ✅ **Global no-email contact posture** (2026-05-23)
- [x] ✅ **SEO Phase 2: Hard Redirects** 🔗 (2026-05-17)
- [x] ✅ **Audit Marketplace Sync** 🛒 (2026-05-17)
- [x] ✅ **Update Company Vision** 🔮 (2026-05-17)
- [x] ✅ **Validate Local SEO Phase 1** 📍 (2026-05-17)
- [x] ✅ **Local SEO Phase 1 schema and metadata alignment** (2026-05-11)
- [x] ✅ **Docs consolidation** (2026-04-17)
- [x] ✅ **Cloud Ledger Marketplace Launch** (2026-02-21)
- [x] ✅ **FairMerge Beta Launch** (2026-02-11)
- [x] ✅ **Visual Rebrand Completion** (2026-02-06)
