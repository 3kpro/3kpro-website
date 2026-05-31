# CHANGELOG.md - 3kpro.services Company Site

All notable changes to the 3kpro.services company website and marketplace.

---

## [Unreleased]

## [2026-05-31] — Local consulting launch posture and quick-pay page
### Added
- `app/pay/page.tsx`: dedicated quick-pay page for local consulting deposits, invoice balances, and on-the-fly service payments. The page includes a QR code to `https://3kpro.services/pay`.
- `app/api/quick-pay/checkout/route.ts`: Stripe Checkout Session endpoint for fixed deposits plus invoice/custom amount payments.
- `app/sitemap.ts`: added `/pay` to the sitemap.
### Notes
- Quick Pay uses `STRIPE_SECRET_KEY` server-side instead of public Payment Links. Local `.env.local` is currently test mode; Vercel production must have a live-mode Stripe key before this should be used with customers.

## [2026-05-28a] — SEO fixes: noindex, title length, social URLs, OG images, robots.txt
### Added
- `app/admin/layout.tsx`: new server layout applying `robots: { index: false, follow: false }` to all admin routes
- `app/thank-you/layout.tsx`: new server layout applying noindex to thank-you confirmation page
### Changed
- `app/layout.tsx`: shortened title tag to 56 chars (was 69); updated Twitter handle to `@3KPRO_SAAS`; updated sameAs URL to `x.com/3KPRO_SAAS`
- `app/lp/layout.tsx`: added `robots: { index: false, follow: false }` (Launchpad was indexable)
- `app/page.tsx`: replaced generic placeholder social links with verified URLs (X, TikTok, YouTube, LinkedIn)
- `app/sitemap.ts`: removed thank-you entry (now noindexed); added comment explaining exclusion
- `public/robots.txt`: fixed `/(portal)/` route group syntax → `/admin/` + `/portal/` standard paths
- `app/services/ai-automation-consulting/page.tsx`: added OG image + Twitter Card to metadata
- `app/services/custom-saas-development/page.tsx`: added OG image + Twitter Card to metadata
- `app/services/it-strategy-cloud-architecture/page.tsx`: added OG image + Twitter Card to metadata
- `package.json`: restored missing closing brace (pre-existing corruption causing JSONParseError)
### Commit
- `d4ba52e`

## [2026-05-27d] — Remove redundant contact info below form; LAN HMR fix
### Removed
- `components/ContactForm.tsx`: removed redundant "Direct Phone" + "Direct Email" block that appeared below the submit button — duplicated info already present in the left pane of the contact section
### Fixed
- `next.config.js`: added `allowedDevOrigins` for dev machines `192.168.254.2/.3/.7` — stops Next.js 16 cross-origin HMR warnings when browsing from other LAN machines
### Commit
- `f55e352`

## [2026-05-27c] — Fix contact form delivery + new Resend API key
### Changed
- `app/actions.ts`: updated `from` to `3KPRO Contact <system@3kpro.services>` (was Resend sandbox domain)
- `app/actions.ts`: updated `to` to `james@3kpro.services` (was james.lawson@gmail.com)
- `RESEND_API_KEY` patched in Vercel env vars (production + preview) via API — new key active
### Notes
- Platform: Resend (email API). API key rotated because emails were not delivering on old key.
- Redeploy triggered via empty commit `acca8f2` so new env var takes effect immediately.
- `lib/notifications.ts` already used `system@3kpro.services` as from address confirming domain is verified in Resend.

## [2026-05-27b] — Restore james@3kpro.services across all contact surfaces
### Added
- `app/page.tsx` contact section left pane: added "Direct Email / james@3kpro.services" below "Direct Phone" with matching styling
- `app/page.tsx` JSON-LD: added `email: 'james@3kpro.services'` to contactPoint schema
- `components/ContactForm.tsx`: added Direct Email line to left-pane info block and error state fallback
- `app/thank-you/page.tsx`: added email alongside phone in "Need immediate assistance?" note
- `app/cloud-ledger/CloudLedgerFooter.tsx`: added `james@3kpro.services` mailto link in footer nav
- `app/parascanai/page.tsx`: changed both beta feedback links from `/#contact` to `mailto:james@3kpro.services`
### Notes
- Email was restored after user re-established james@3kpro.services on new provider
- Build passed (Next.js 16.2.6, 51 static pages, 0 errors). Committed 40ffd9a, pushed to main.
- Vercel auto-deploys from GitHub main branch via GitHub integration

## [2026-05-27] — Git hygiene, CRLF fix, deploy workflow baked in
### Fixed
- Diagnosed 76-file dirty working tree: 75 files were pure CRLF→LF line-ending noise from Linux agents touching a Windows-committed repo. Only `package-lock.json` had real content changes.
- Root cause: no `.gitattributes` file. Added `.gitattributes` with `* text=auto eol=lf` to permanently normalize line endings across Windows/Linux environments.
### Added
- `.gitattributes` — all text files normalized to LF in git. Prevents CRLF noise on all future cross-platform agent sessions.
- `.gitignore` additions: `npm-audit-*.json`, `npm-build-*.log`, `npm-scripts.json`, `*.backup`, `.learnings/`, `test.tmp` — build artifacts that were previously tracked.
- `deploy` and `deploy:preview` scripts to `package.json` — agents now run `npm run deploy` (which calls `vercel --prod`) to ship to production.
- `git-cleanup.ps1` — one-shot script to clear the current dirty state, untrack junk files, install Vercel CLI if missing, and commit the cleanup.
### Changed
- `AGENTS.md` — added explicit step-by-step deploy workflow: `npm run build` → `git commit` → `git push origin main` → `npm run deploy`. No more ambiguity for agents.
### Notes
- Vercel CLI was not installed globally — `git-cleanup.ps1` installs it automatically.
- Project is already linked (`.vercel/project.json` present) — no `vercel link` needed after install.

## [2026-05-23] — Contact posture and form delivery check

### Changed
- Removed public `james@3kpro.services`/`sys@3kpro.services` email exposure from the homepage contact path and fallback contact text.
- Removed public `@3kpro.services` email links and text from service pages, Cloud Ledger footer, Parascan beta feedback copy, and thank-you page.
- Removed the public email field from homepage business JSON-LD while preserving the phone contact point.

### Verified
- Confirmed the contact server action delivers to `james.lawson@gmail.com` via Resend.
- Sent a Resend verification email to `james.lawson@gmail.com` and received provider message id `52e90491-33e4-4325-aaaf-621b28ff7cc6`.
- Ran `npm run build` successfully after refreshing local dev dependencies with `npm install --include=dev`.

## [2026-05-17] — Portfolio Alignment & Vision Refresh

### Added
- Created project-level `TASKS.md` to track Website-specific management and SEO work.
- Synced `lib/data/marketplace.ts` with the full 27-product factory inventory, adding Ideas 22–28 (medChron, ParaScan.AI, Clipper, etc.) as "In Development" or "Beta".

### Changed
- Updated `VISION.md` to reflect May 2026 (Q2) reality, marking Q1 milestones as completed and establishing new growth targets for Q3/Q4 ($10k-$25k MRR).
- **SEO Phase 2:** Implemented hard 301 redirects in `_XELORA/vercel.json` for marketing pages (`/`, `/pricing`, `/about`, `/try`, `/demo`, `/trend-gen`) pointing to `3kpro.services/marketplace/xelora`.
- Updated canonical tags across `_XELORA` layouts (`layout.tsx`, `pricing/layout.tsx`, `demo/layout.tsx`, `trend-gen/layout.tsx`) to point to the 3KPRO marketplace.

### Fixed
- Verified and validated Local SEO Phase 1 implementation (schema.org ProfessionalService and service page metadata) for Tulsa/Broken Arrow targeting.

---

## [2026-05-11] — Local SEO Phase 1 schema and metadata alignment

### Changed
- Updated `app/layout.tsx` structured data with a stronger `ProfessionalService`/LocalBusiness profile for the Tulsa/Broken Arrow service-area business, including `@id`, image, geo, opening hours, service areas, and synchronized social links.
- Replaced the placeholder Google Search Console verification meta value with an environment-driven `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` value.
- Added canonical URLs and Open Graph metadata to the three local service pages.
- Aligned the IT Strategy & Cloud Architecture title with the Tulsa/Broken Arrow positioning used across the rest of the service pages.
- Cleaned `app/sitemap.ts` by removing fragment URLs, adding the three service landing pages, and including key product/company routes with sane priorities.
- Added crawlable homepage links to the three local service pages for stronger internal linking.

## [2026-04-17] — Docs consolidation (portfolio-level cleanup)

### Changed
- `docs/SYSTEM/` retired. Canonical content moved to project root (`README.md`, `CHANGELOG.md`, `VISION.md`) or to new `docs/operations/` subfolder.
- Project now sits under the new in-place Obsidian vault rooted at `C:\DEV\3K-Pro-Services\`.

### Reference
- See portfolio `CHANGELOG.md` for the full cross-project cleanup entry.
- Pre-cleanup snapshot: `C:\DEV\BCK\3KPRO_MUSEUM\2026-04-17_initial-cleanup\3kpro-website_docs_SYSTEM\`.

## [2026-02-21] - Cloud Ledger Marketplace Launch + Middleware → Proxy Migration

### Added
- **Marketplace:** Cloud Ledger now appears as the third product card alongside Xelora and FairMerge on `/marketplace`
- **`lib/data/marketplace.ts`:** Updated Cloud Ledger entry with improved description, TRUTH.md-aligned features, and correct `demoUrl`/`stripePaymentLink`
- **`proxy.ts`:** Created new Edge Proxy file replacing deprecated `middleware.ts` (Next.js 16 convention)

### Changed
- **`app/marketplace/page.tsx`:** Filter updated to include `cloud-ledger` slug
- **`app/marketplace/azure-optimizer/page.tsx`:** Redirect corrected to `/marketplace/cloud-ledger`

### Removed
- **`middleware.ts`:** Deleted — logic migrated to `proxy.ts` to resolve Next.js 16 deprecation warning
- **`app/marketplace/cloud-ledger/page.tsx`:** Deleted redirect file that was blocking the dynamic `[slug]` route from rendering the product page

## [2026-02-16] - Xelora Pricing Display Fix

### Fixed
- **Marketplace UI:** Fixed "Provisioning Cost" displaying as "FIXED: NULL" for zero-priced products (e.g., Xelora) in `ProductCard.tsx`. It now correctly displays "FREE".

## [2026-02-14] - Xelora Provisioning Cost Fix

### Fixed
- **Marketplace UI:** Fixed "Provisioning Cost" displaying as "FIXED: NULL" for free products (Xelora). Now displays "FREE".

## [2026-02-11] - FairMerge Beta Launch

### Added
- **FairMerge Product Data:** Added full product details, features, and pricing tiers to `lib/data/marketplace.ts`.
- **Checkout Configuration:** Configured `PurchaseAction` to pass `priceId` to the checkout API for the $149 Team plan. (Updated with real Stripe Price ID: `price_1SzhsDRqaU7f53FzaoUfnAHw`)
- **Visuals:** Verified `FairMergeVisuals` component integration on the product page.
- **SEO:** Updated `landing-page/app/layout.tsx` (XELORA) to point canonical URL to `3kpro.services/marketplace/xelora`.

## [2026-02-06] - Marketplace Portfolio Expansion

### Changed
- **Marketplace:** Exposed the full 21-product portfolio at `/marketplace` by removing the "FairMerge only" filter.
- **Product Cards:** Enabled visibility for all Tiers (SaaS, Micro-SaaS, Content, Specialized) with status indicators.

### Context
- Completed "Marketplace Landing Page" task from Dev infrastructure backlog.
- Showcases the full breadth of the "Product Factory" vision.

## [2026-02-06] - Error Monitoring Integration

### Added
- **Slack Alerting:** Implemented `sendToSlack` in `lib/monitoring.ts` to dispatch critical errors to `SLACK_WEBHOOK_URL`.
- **Alert Logic:** Added rich block-kit formatting for alerts including Product, Environment, and Error Context.
- **SEO/Schema:** Updated `app/layout.tsx` with `LocalBusiness` JSON-LD to match Google Business Profile (Name: 3K Pro Services, Phone: +1-918...).

## [2026-02-06] - Visual Rebrand Completion

### Changed
- **Visual Overhaul:** Complete redesign of the 3kpro.services website using "The Velocity Standard" design philosophy.
- **Hero Section:** Implemented structural vector aesthetics with animated entry.
- **Services Section:** Replaced list with interactive "Core Capabilities" grid and detailed modal views.
- **Global Styles:** Unified design system using `Space Grotesk`, `Inter` fonts, and consistent HSL color variables (`globals.css`).

### Context
- Completed the "3kpro.services Full Visual Rebrand" task.
- Validated implementation of all sub-tasks in `page.tsx` and `globals.css`.

## [2026-01-26] - Fix Tailwind v4 Build Error

### Fixed
- **Tailwind v4 Configuration:** Migrated theme configuration from `tailwind.config.js` to `globals.css` using the `@theme` block.
- **Build Error:** Resolved `Cannot apply unknown utility class border-border` by explicitly defining the `border` color in the Tailwind v4 theme.
- **Verified:** Successful production build (`npm run build`) confirmed.

## [2026-01-18] - Code Review & Handoff Implementation

### Added
- **Server Actions:** Implemented `submitContactForm` in `app/actions.ts` to handle form submissions securely on the backend (Web3Forms).
- **CI/CD:** Created GitHub Actions workflow `.github/workflows/ci.yml` for automated linting and building on PRs.

### Changed
- **Contact Form:** Migrated from Web3Forms to **Resend** for email delivery. Implementation uses `resend` SDK on the server side.

### Fixed
- **Contact Form:** Refactored `components/ContactForm.tsx` to use the new Server Action instead of client-side fetch.
- **Dependencies:** Pinned `tailwindcss` version to `4.1.15` in `package.json` for stability.
- **Verification:** Verified `app/layout.tsx` metadata and successful build via `npm run build` (Exit code 0).

### Context
- Addressed "High Priority" and initial "Medium Priority" action items from `docs/SYSTEM/GE_CODE_REVIEW.md`.

## [2026-01-15] - Xelora Campaign Fix

### Fixed
- **Campaign Navigation:** Fixed issue where "Save & Dashboard" button on `/campaigns/create` would not navigate after saving.
- **Helix Context:** Fixed "Maximum update depth exceeded" error by memoizing `HelixContext` methods (`updateContext`, `registerAction`) to prevent infinite render loops in `NewCampaignPage`.
- **Context:** Cross-project fixes in `landing-page` codebase.

---

## [2026-01-15] - Brand Cleanup (External Prep)

### Added
- Created `landing-page/docs/Marketing/EXTERNAL_UPDATE_GUIDE.md` containing specific copy-paste instructions for Google Business, LinkedIn, and Clearbit updates.

### Fixed
- Removing remaining "Content Cascade" references from `landing-page/app` (About page, Settings page).
- Replaced "Content Cascade platform strategy" with "3kpro ecosystem" in About page.

### Context
- Agent verified public profiles (Google, LinkedIn) are still outdated.
- Prepared all materials for user to perform the manual updates.


## [2026-01-14] - Marketplace Optimization

### Added
- **OAuth Token Manager:** Added new Micro-SaaS product to marketplace.
- **Stripe Integration:** Added "Get It Now" buttons and Stripe link logic to product detail pages.
- **UI Improvements:** Added category badges to product cards for better scanning.
- **Product Links:** Added placeholder Stripe payment links for "Available" products (n8n Templates, AI Prompts).

### Context
- Completed "Marketplace Optimization" task.
- Cleaned up Product Card UI (fixed unclosed divs, added badges).
- Ensured all available products have a buy path.

---

## [2026-01-09] - Brand Cleanup (TrendPulse Deprecation)

### Changed
- Removed deprecated `TrendPulse` schema data from `app/layout.tsx`.
- Updated marketing documentation to `3KPRO_BRAND_COPY.md` for consistent external branding.

### Context
- TrendPulse brand has been consolidated/deprecated in favor of XELORA.
- Preparing for external profile updates (Google, LinkedIn, etc.) to unify under "3kpro".

---

## [2026-01-09] - Accessibility & Color Contrast Fixes

### Fixed
- Replaced `bg-primary-500` with `bg-primary-700` in buttons and badges to meet WCAG contrast ratio requirements.
- Updated footer text color from `text-dark-400` to `text-dark-300` for better legibility against dark backgrounds.
- Added `<main>` landmark wrapping the primary content in `app/page.tsx` to assist screen reader navigation.
- Fixed specific failing elements identified in PageSpeed Insights/Lighthouse report.
- **Impact:** Improved accessibility for users with visual impairments and better PageSpeed Insights score.

### Context
- Addressed "Background and foreground colors do not have a sufficient contrast ratio" task.
- Addressed "Document does not have a main landmark" task.
- Ensured brand integrity while meeting accessibility standards.

---

## [2026-01-09] - Google Presence Fixes
      
### Fixed
- Corrected `sitemap.xml` domain from `trendpulse.3kpro.services` to `3kpro.services`
- Consolidated sitemap source to `app/sitemap.ts` (dynamic) and removed static `public/sitemap.xml` to prevent conflicts.
- Added `/marketplace`, `/cloud-ledger`, and `/thank-you` to sitemap with appropriate priorities.
- Updated `robots.txt` to point to correct sitemap URL
- **Impact:** Google Search Console can now verify the site and read the sitemap correctly.

### Deferred
- **Google Ads:** Paused due to credit availability issues. Account setup deferred.

### Context
- User initiated SEO transparency fix.
- Old "TrendPulse" config was blocking proper indexing of the parent company site.

---

## [2026-01-09] - SYSTEM Folder Created

### Added
- Created `docs/SYSTEM/` directory structure
- `TASKS.md` - Company-level task management
- `VISION.md` - Company strategy and goals
- `CHANGELOG.md` - This file

### Context
- Separated company-level tasks from XELORA product tasks (`landing-page/docs/SYSTEM/`)
- Separated from Dev/ product tasks (`Dev/products/[product]/TASKS.md`)
- Clear hierarchy: Company → Products → Dev Department

---

## [2026-01-08] - Cloud Ledger Launch

### Added
- Cloud Ledger product page (`/cloud-ledger`)
- Stripe payment integration for Cloud Ledger
- One-time scan + membership options

### Context
- First product from Dev/ department to go live
- $49 one-time scan, subscription option available

---

## [2025-12-22] - Marketplace Scaffolding

### Added
- `/marketplace` route with product listings
- Product detail pages
- Stripe Payment Link integration
- `lib/data/marketplace.ts` data structure

### Context
- Enables direct sales of Dev/ products
- XELORA showcased as flagship
- Supports one-time + subscription pricing

---

## [2025-12-05] - Initial Company Site

### Added
- Homepage with services overview
- 6 core service categories
  - Website development
  - Cloud solutions
  - Custom development
  - Data management
  - Cybersecurity
  - Mobile solutions
- Contact information
- Tulsa, OK location

### Context
- Initial launch of 3kpro.services parent company site
- Before Dev/ department and marketplace existed

---

## Notes

**Version Format:** [YYYY-MM-DD] - Description

**Categories:**
- **Added** - New features
- **Changed** - Changes to existing functionality
- **Deprecated** - Soon-to-be removed features
- **Removed** - Removed features
- **Fixed** - Bug fixes
- **Security** - Security updates

**Scope:**
- This CHANGELOG tracks **company site** changes only
- XELORA product changes: `landing-page/docs/SYSTEM/CHANGELOG.md`
- Dev/ product changes: `Dev/products/[product]/CHANGELOG.md`
