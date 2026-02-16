# TASKS.md - 3kpro.services Company Site
Last Updated: 2026-02-06


## NOW



---

## DEVELOPMENT WORKFLOW

**Critical: Human-Controlled Dev Servers**

All agents (Gemini, Claude, opencode, etc.) working on 3kpro.services MUST follow these rules:

1. **NEVER run `npm run dev`** - Dev server control is reserved for the human
2. **NEVER start/stop dev servers** - Human manages 3kpro.services dev server using:
   - `C:\DEV\3K-Pro-Services\3001.bat` - Starts 3kpro.services on localhost:3001
3. **Focus on code changes only** - Write, edit, and commit code; let human test
4. **Assume server is running** - Human will restart as needed to see changes

**Why:** Human is multitasking across XELORA and 3kpro.services. Agents starting/stopping servers creates conflicts.

---

**Git Workflow: Human-in-Loop Approval**

After completing requested work, agents MUST follow this workflow:

1. **Complete the work** - Make all requested code changes
2. **Verify build** - Run `npm run build` to catch any build errors
3. **Fix if needed** - If build fails, fix errors and repeat step 2
4. **Ask for approval** - Present summary and ask: "Work complete. Build passed. Ready to commit and push to production? (Y/N)"
5. **On "Y" confirmation:**
   - Run `git status` to show what changed
   - Run `git add -A` to stage all changes
   - Run `git commit -m "descriptive message"` (message based on work completed)
   - Run `git push` to current branch
   - Report success with commit hash and branch
6. **On "N":** Wait for further instructions or clarifications

**Why:** This keeps human in control of production deployments while reducing friction. Build verification prevents broken code from reaching production. Agent handles git mechanics after receiving explicit approval.

---

## NOW





- [x] **External Profile Updates** 🌐 (Ready for Manual Update)
      - **Goal:** Update outdated external profiles (Clearbit, LinkedIn company page).
      - **Reference:** `landing-page/docs/Marketing/EXTERNAL_UPDATE_GUIDE.md`
      - **Status:** Metadata validated. User must perform manual updates per guide.

## COMPLETED

- [x] **Fix Xelora Pricing Display** 🐛 ✅ (2026-02-16)
      - **Goal:** Fix "FIXED: NULL" display for Xelora in Marketplace.
      - **Result:** Committed local fix in `ProductCard.tsx` to handle 0 price correctly as "FREE". Verified build and pushed to production.

- [x] **Fix Xelora Provisioning Cost Display** 🐛 ✅ (2026-02-14)
      - **Goal:** Fix "FIXED: NULL" display for Xelora in Marketplace.
      - **Result:** Updated `ProductCard.tsx` to display "FREE" instead of "FIXED: NULL" when price is 0. Verified with build.


- [x] **Implement SEO Canonicals** 🔗 ✅ (2026-02-11)
      - **Goal:** Apply `SEO_STRATEGY.md` (add canonical tags to getxelora.com).
      - **Result:** Updated `landing-page/app/layout.tsx` to point canonical URL to `3kpro.services/marketplace/xelora`.

- [x] **Launch FairMerge** 🚀 ✅ (2026-02-11)
      - **Goal:** Finish Marketing Assets & Beta Launch prep.
      - **Result:** Updated `marketplace.ts` with full product data and checking `FairMergeVisuals`. Configured `PurchaseAction` with placeholder `priceId`. Verified locally. This also closes "Focus on fairmerge" request.

- [x] **SEO: Domain Consolidation Strategy** 🔗 ✅ (2026-02-06)
      - **Goal:** Set up redirects or canonical strategy.
      - **Result:** Created `docs/SYSTEM/SEO_STRATEGY.md`. Selected "Canonical Tag" approach for Phase 1.

- [x] **Marketplace Operations Playbook** 📘 ✅ (2026-02-06)
      - **Goal:** Document how we handle support, billing, and refunds.
      - **Result:** Created `docs/SYSTEM/MARKETPLACE_OPS.md`. Defined centralized support `support@3kpro.services` and unified Stripe account strategy.

- [x] **Marketplace Branding Decision** (Unified vs House of Brands) 🧠 ✅ (2026-02-06)
      - **Goal:** Decide if we consolidate everything under 3kpro or keep products separate.
      - **Decision:** **Option 1 (Unified).** All products launch under `3kpro.services` to leverage shared domain authority and simplify operations.
      - **Outcome:** XELORA and FairMerge will be "Products by 3K Pro".

- [x] **Fix Google Business Profile for 3kpro.services** 🏢 ✅ (2026-02-06)
      - **Goal:** Create and configure Google Business Profile listing.
      - **Status:** Agent preparation complete. Guide created at `docs/Marketing/EXTERNAL_UPDATE_GUIDE.md`. User is performing video verification.
      - **Result:** Schema and Metadata updated in `layout.tsx`.

- [x] **Create Google Business Profile for XELORA** 🎯 ❌ (Cancelled 2026-02-06)
      - **Reason:** Online-only SaaS businesses are **not eligible** for Google Business Profiles.
      - **Alternative:** Relying on `SoftwareApplication` schema (implemented) and 3K Pro Services parent profile.

## BACKLOG (Company-Level Tasks)

 [ ] **External Updates:** (User Action Required)
            - Google Business Profile (Content Cascade AI → 3kpro)
            - Clearbit profile
            - LinkedIn company page
      - **Agent Status:** ✅ Verified public profiles are outdated. ✅ Created guide at `landing-page/docs/Marketing/EXTERNAL_UPDATE_GUIDE.md`. ✅ Cleaned `landing-page` codebase. ✅ **Updated `app/layout.tsx` schema & metadata (2026-02-06).** ✅ **Deployed to Vercel Production.**
      - **Next Step:** User must log in and perform updates using the guide. Website is now ready for verification.
      - Reference: `landing-page/docs/Marketing/BRAND_CLEANUP_CHECKLIST.md`

 [x] **Brand Cleanup Across Web** 🔄
      - [x] **Internal Codebase:** Audit complete. `TrendPulse` removed from `layout.tsx`.
      - [x] **Copy Preparation:** Created `landing-page/docs/Marketing/3KPRO_BRAND_COPY.md` for external profiles.
      - Reference: `landing-page/docs/Marketing/BRAND_CLEANUP_CHECKLIST.md`

---

## COMPLETED (Archive)

- [x] **3kpro.services Full Visual Rebrand** ✅
      - **Completion Date:** 2026-02-06
      - **Result:** Complete visual overhaul and comprehensive rebrand.

- [x] **Fix Build Error localdev:3001** ✅
      - **Result:** Production build passing.

- [x] **Configure Contact Form with Resend** ✅
      - **Result:** Emails are now sent securely via Resend server-side SDK to james.lawson@gmail.com.

- [x] **Code Review Handoff Implementation** ✅
      - **Result:** Architecture is more robust.

- [x] **Fix Xelora Loop on Campaign Create** ✅
      - **Result:** Navigation works reliably.

- [x] **Google Analytics 4 Setup** ✅
      - **Result:** Site is ready for tracking. **Action Required:** Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in Vercel.

- [x] **Marketplace Optimization** ✅
      - **Result:** Marketplace is populated with Dev/ products and ready for sales.

- [x] **Stripe Webhook Configuration** ✅
      - **Result:** Stripe webhook is live and ready to receive events.

- [x] **Setup Google Search Console + Google Ads for 3kpro.services** ✅
      - **Result:** Site is technically ready for Google indexing. Ads account setup paused.

- [x] **Fix Color Contrast Issues (PageSpeed Insights)** ✅
      - **Result:** Meets WCAG contrast requirements for accessibility.

- [x] **Add Main Landmark (Accessibility)** ✅
      - **Result:** Accessibility audit should now find a main landmark.

- [x] **Accelerate Google Search Console Indexing** ✅
      - **Result:** Technical SEO foundation is perfect. `robots.txt` and `sitemap.xml` are aligned.


---

## NOTES

**Task Organization:**
- This file is for **company-level** tasks (3kpro.services site, SEO, brand, Google Business)
- XELORA product tasks: `landing-page/docs/SYSTEM/TASKS.md`
- Marketplace coordination tasks: `Dev/docs/SYSTEM/TASKS.md` (Stripe, auth, product launches)
- Dev/ product tasks: `Dev/products/[product]/TASKS.md`
