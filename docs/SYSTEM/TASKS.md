# TASKS.md - 3kpro.services Company Site
Last Updated: 2026-01-09

This file lists company-level tasks for 3kpro.services (storefront, marketplace, SEO, brand management).

---
## NOW (One at a time only)

- [ ] **Accelerate Google Search Console Indexing** 🚀
      - **Context:** Search Console shows "Processing data, please check again in a day or so" - Google hasn't crawled the site yet.
      - **Goal:** Speed up initial indexing and ensure all pages are discoverable.
      - **Actions Required:**
        1. **Verify Sitemap Submission:**
           - Go to Search Console → Sitemaps
           - Confirm `sitemap.xml` is submitted and shows no errors
           - If not submitted, manually submit: `https://3kpro.services/sitemap.xml`
        2. **Request Manual Indexing for Key Pages:**
           - Use "URL Inspection" tool for these priority pages:
             - `https://3kpro.services` (homepage)
             - `https://3kpro.services/marketplace` (marketplace)
             - `https://3kpro.services/thank-you` (conversion page)
           - Click "Request Indexing" for each
        3. **Check for Crawl Blockers:**
           - Verify `robots.txt` allows Googlebot: `https://3kpro.services/robots.txt`
           - Confirm no `noindex` meta tags on important pages
           - Check for any "Coverage" errors in Search Console
        4. **Submit to Google Manually (Backup):**
           - Use Google's URL submission tool if needed: https://www.google.com/ping?sitemap=https://3kpro.services/sitemap.xml
      - **Expected Result:**
        - Sitemap processed within 24-48 hours
        - Key pages indexed within 2-3 days
        - "Pages" report shows indexed URLs
      - **Note:** Initial "Processing data" message is normal for new properties. This task accelerates the process.
      - **Assigned:** Gemini


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


---

## NOTES

**Task Organization:**
- This file is for **company-level** tasks (3kpro.services site, marketplace, SEO, brand)
- XELORA product tasks: `landing-page/docs/SYSTEM/TASKS.md`
- Dev/ product tasks: `Dev/products/[product]/TASKS.md`
