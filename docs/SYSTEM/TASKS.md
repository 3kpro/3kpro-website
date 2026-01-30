# TASKS.md - 3kpro.services Company Site
Last Updated: 2026-01-09

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
## NOW (One at a time only)

- [x] **3kpro.services Full Visual Rebrand** 🎨
      - **Goal:** Transform 3kpro.services from standard SaaS/IT site to modern, eye-catching professional services portal.
      - **Specification:** `docs/upgrades/3kpro_polish.md`
      - **Design Philosophy:**
        - Bold, professional, modern aesthetic
        - Clean with strong personality
        - Interactive card-based layouts
        - Subtle animations and micro-interactions
      - **Critical Focus:**
        1. **Visual Identity & Color Palette**
           - Define core messaging angles (5 options)
           - Create 3 complete visual identity palettes:
             * Primary background (dark theme)
             * Primary text color
             * Main accent (CTAs)
             * Secondary accent (highlights)
             * Headline font (Google Fonts)
             * Body font (Google Fonts)
           - Present in markdown table for selection

        2. **Hero Section Redesign**
           - Bold above-the-fold design
           - Main headline + subheading placement
           - Primary CTA button (hover effect with secondary accent)
           - Secondary link (less prominent)
           - Subtle background animation/graphic
           - "Fade and slide up" animation on load (vanilla JS)
           - Modern CSS (Flexbox/Grid, well-commented)

        3. **Services Section (Card Layout)**
           - Move beyond bullet lists
           - 3 service cards with:
             * Catchy name
             * One-sentence summary
             * 3 key benefits
           - Card hover effects:
             * Lift slightly (box-shadow + transform)
             * "Learn More" link becomes prominent
           - Reusable Modal component for service details

        4. **CSS Architecture**
           - Consistent color palette usage
           - Modern practices (Flexbox/Grid)
           - Well-commented code
           - Interactive hover states
           - Smooth transitions

      - **Agentic Workflow:**
        - **Gemini**: Strategy, layout design, content brainstorming
        - **Claude**: HTML/CSS components, detailed copy
        - **opencode**: Optimized JS functions, animations, modal logic

      - **Implementation Steps:**
        1. Define visual identity (Gemini + Claude)
        2. Build hero section (Gemini layout → Claude HTML/CSS → opencode animation)
        3. Create services section (Gemini content → Claude cards → opencode modal)
        4. Integrate and refine all components
        5. Visual regression testing

      - **Testing Checklist:**
        - [ ] Hero animation works on page load
        - [ ] Service cards hover effects smooth
        - [ ] Modal open/close functionality works
        - [ ] Color palette applied consistently
        - [ ] Mobile responsiveness verified
        - [ ] All fonts load correctly

      - **Priority:** HIGH
      - **Branch:** `feature/3kpro-visual-rebrand`
      - **Assigned:** Gemini + Claude

For contact form setup, I setup an account on resend to send to james.lawson@gmail.com
API Key:
re_TSxJqPmQ_MA7N2TAiS5dKv6UrYk95wmMg

## BACKLOG (Company-Level Tasks)

 [ ] **External Updates:** (User Action Required)
            - Google Business Profile (Content Cascade AI → 3kpro)
            - Clearbit profile
            - LinkedIn company page
      - **Agent Status:** ✅ Verified public profiles are outdated. ✅ Created guide at `landing-page/docs/Marketing/EXTERNAL_UPDATE_GUIDE.md`. ✅ Cleaned `landing-page` codebase.
      - **Next Step:** User must log in and perform updates using the guide.
      - Reference: `landing-page/docs/Marketing/BRAND_CLEANUP_CHECKLIST.md`

 [x] **Brand Cleanup Across Web** 🔄
      - [x] **Internal Codebase:** Audit complete. `TrendPulse` removed from `layout.tsx`.
      - [x] **Copy Preparation:** Created `landing-page/docs/Marketing/3KPRO_BRAND_COPY.md` for external profiles.
      - [ ] **External Updates:** (User Action Required)
            - Google Business Profile (Content Cascade AI → 3kpro)
            - Clearbit profile
            - LinkedIn company page
      - Reference: `landing-page/docs/Marketing/BRAND_CLEANUP_CHECKLIST.md`

---

## COMPLETED

- [x] **Fix Build Error localdev:3001** ✅
      - **Completion Date:** 2026-01-26
      - **Details:** Fixed Tailwind v4 `CssSyntaxError` by migrating theme to `@theme` block in `globals.css`.
      - **Result:** Production build passing.

- [x] **Configure Contact Form with Resend** ✅
      - **Completion Date:** 2026-01-18
      - **Details:** Switched email provider from Web3Forms to Resend.
      - **Result:** Emails are now sent securely via Resend server-side SDK to james.lawson@gmail.com.

- [x] **Code Review Handoff Implementation** ✅
      - **Completion Date:** 2026-01-18
      - **Details:** Implemented Server Action for contact form, added CI/CD pipeline, locked dependency versions, and verified metadata.
      - **Result:** Architecture is more robust.

- [x] **Fix Xelora Loop on Campaign Create** ✅
      - **Completion Date:** 2026-01-15
      - **Details:** Fixed race condition in "Save & Dashboard" button in Xelora codebase (`landing-page`). Button now explicitly waits for save success before navigating.
      - **Result:** Navigation works reliably.

- [x] **Google Analytics 4 Setup** ✅
      - **Completion Date:** 2026-01-14
      - **Details:** Installed `@next/third-parties`, added `<GoogleAnalytics>` to `layout.tsx`, and configured env var placeholder.
      - **Result:** Site is ready for tracking. **Action Required:** Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in Vercel.

- [x] **Marketplace Optimization** ✅
      - **Completion Date:** 2026-01-14
      - **Details:** Added OAuth Token Manager, Category Badges, and Stripe Payment Links for available products.
      - **Result:** Marketplace is populated with Dev/ products and ready for sales.

- [x] **Stripe Webhook Configuration** ✅
      - **Completion Date:** 2026-01-13
      - **Details:** Created webhook handler at `api/webhook/stripe`. Configured `STRIPE_WEBHOOK_SECRET` on Vercel.
      - **Result:** Stripe webhook is live and ready to receive events.

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
- This file is for **company-level** tasks (3kpro.services site, SEO, brand, Google Business)
- XELORA product tasks: `landing-page/docs/SYSTEM/TASKS.md`
- Marketplace coordination tasks: `Dev/docs/SYSTEM/TASKS.md` (Stripe, auth, product launches)
- Dev/ product tasks: `Dev/products/[product]/TASKS.md`
