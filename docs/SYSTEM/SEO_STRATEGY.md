# SEO Domain Consolidation Strategy

**Goal:** Consolidate domain authority (DA) onto `3kpro.services` while preserving the user experience for individual product names.

---

## 1. Domain Hierarchy

| Entity | Domain | Role | Action |
| :--- | :--- | :--- | :--- |
| **Master Brand** | `3kpro.services` | The Hub | **Target.** All backlinks should point here eventually. |
| **SaaS App** | `getxelora.com` | Legacy / App | **Redirect (Marketing)** |
| **Pending App** | `fairmerge.io` | Product | **Redirect** -> `3kpro.services/marketplace/fairmerge` |

---

## 2. Technical Implementation (The "Redirect Strategy")

### A. Marketing Traffic (The Website)
We want Google to index `3kpro.services/marketplace/xelora`, NOT `getxelora.com`.

**Configuration:**
*   **Root Domain:** `getxelora.com`
*   **Redirect Type:** `301 Permanent Redirect`
*   **Target:** `https://3kpro.services/marketplace/xelora`

**Why 301?**
*   Tells Google "This page has moved forever."
*   Transfers ~95-99% of "Link Juice" (Ranking power) to the new URL.
*   Prevents "Duplicate Content" penalties (where Google sees the same text on two sites and ignores both).

### B. App Traffic (The Application)
*Wait!* If users log in at `getxelora.com/login`, a redirect will break their app access.

**Hybrid Application Pattern:**
1.  **Marketing Pages:** (`/`, `/pricing`, `/features`) -> **301 Redirect** to 3K Pro Marketplace.
2.  **App Routes:** (`/login`, `/dashboard`, `/campaigns`) -> **Keep on `getxelora.com`** (or move to `app.getxelora.com`).

**Simplest Next Step (Phase 1):**
*   Keep `getxelora.com` active for now.
*   Add `<link rel="canonical" href="https://3kpro.services/marketplace/xelora" />` to the `getxelora.com` homepage.
*   This tells Google: "I exist, but the 'Official' version of this content is on 3K Pro."

---

## 3. Link Building Policy

Going forward, all external profiles (Twitter, LinkedIn, Guest Posts) should link to:
`https://3kpro.services/marketplace/[product-slug]`

**Do NOT link to:**
`getxelora.com` (unless specially required for app login).

---

## 4. Execution Plan
1.  **Update XELORA Landing Page:** Add `canonical` tag pointing to 3K Pro.
2.  **Update 3K Pro Marketplace:** Ensure the XELORA page content is robust (keywords, h1, etc.) so it *deserves* to rank.
3.  **Future (Phase 2):** When 3K Pro is strong, implement the hard 301 redirects for the marketing root.
