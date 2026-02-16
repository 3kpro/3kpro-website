# CHANGELOG.md - 3kpro.services Company Site

All notable changes to the 3kpro.services company website and marketplace.

---

## [Unreleased]

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
