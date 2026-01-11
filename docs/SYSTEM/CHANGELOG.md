# CHANGELOG.md - 3kpro.services Company Site

All notable changes to the 3kpro.services company website and marketplace.

---

## [Unreleased]

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
