# TASKS - 3kpro.services Company Site

## NOW
- [ ] **Ship the 2026-06-07 UI redesign** — (1) Fix lightningcss native binary: `npm install lightningcss-win32-x64-msvc --save-optional` (or clean reinstall node_modules); (2) `npm run build` to confirm green; (3) stop `next dev` (port 3001), then commit + push `main` + update parent ref + deploy. Code is type-clean (tsc exit 0) but uncommitted. See SESSION_CONTEXT.md.
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
