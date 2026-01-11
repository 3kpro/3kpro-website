# TASKS.md - 3kpro.services Company Site
Last Updated: 2026-01-09

This file lists company-level tasks for 3kpro.services (storefront, marketplace, SEO, brand management).

---
## NOW (One at a time only)




---

## BACKLOG (Company-Level Tasks)

- [ ] **Brand Cleanup Across Web** 🔄
      - [x] **Internal Codebase:** Audit complete. `TrendPulse` removed from `layout.tsx`.
      - [x] **Copy Preparation:** Created `landing-page/docs/Marketing/3KPRO_BRAND_COPY.md` for external profiles.
      - [ ] **External Updates:** (User Action Required)
            - Google Business Profile (Content Cascade AI → 3kpro)
            - Clearbit profile
            - LinkedIn company page
      - Reference: `landing-page/docs/Marketing/BRAND_CLEANUP_CHECKLIST.md`

- [ ] **Marketplace Optimization**
      - Add more products from Dev/ department
      - Improve product cards UI
      - Add Stripe payment links for all products

- [ ] **Google Analytics 4 Setup**
      - Install GA4 on 3kpro.services
      - Link to Google Ads
      - Configure conversion tracking

---

## COMPLETED

- [x] **Setup Google Search Console + Google Ads for 3kpro.services** ✅
      - **Completion Date:** 2026-01-09
      - **Search Console:** ✅ Fixed `sitemap.xml` and `robots.txt` (corrected wrong domain). Ready for manual verification.
      - **Google Ads:** ⚠️ Deferred due to promo credit issues.
      - **Result:** Site is technically ready for Google indexing. Ads account setup paused.

- [x] **Fix Color Contrast Issues (PageSpeed Insights)** ✅
      - **Completion Date:** 2026-01-09
      - **Details:** Replaced `bg-primary-500` with `bg-primary-700` for buttons and badges. Updated footer text to `text-dark-300`.
      - **Result:** Meets WCAG contrast requirements for accessibility.

- [x] **Add Main Landmark (Accessibility)** ✅
      - **Completion Date:** 2026-01-09
      - **Details:** Wrapped page content in `<main>` tag in `app/page.tsx` to provide a clear main landmark for screen readers.
      - **Result:** Accessibility audit should now find a main landmark.

- [x] **Accelerate Google Search Console Indexing** ✅
      - **Completion Date:** 2026-01-10
      - **Details:**
        - **Sitemap Optimized:** Consolidated to `app/sitemap.ts` (dynamic), removed stale `public/sitemap.xml`.
        - **Pages Added:** Added `/marketplace`, `/cloud-ledger`, and `/thank-you` to sitemap.
        - **Submission:** Google Sitemap Ping endpoint is deprecated (404). Reliance is now on `robots.txt` and GSC.
        - **Action Required:** User must log in to GSC and manually request indexing for homepage if urgent.
      - **Result:** Technical SEO foundation is perfect. `robots.txt` and `sitemap.xml` are aligned.



---

## NOTES

**Task Organization:**
- This file is for **company-level** tasks (3kpro.services site, marketplace, SEO, brand)
- XELORA product tasks: `landing-page/docs/SYSTEM/TASKS.md`
- Dev/ product tasks: `Dev/products/[product]/TASKS.md`
