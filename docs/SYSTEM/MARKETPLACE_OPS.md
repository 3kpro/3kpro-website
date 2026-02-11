# Marketplace Operations Playbook (Unified Model)

**Version:** 1.0
**Date:** 2026-02-06
**Status:** Active
**Scope:** Covers all products listed on `3kpro.services/marketplace` (XELORA, FairMerge, etc.)

---

## 1. Governance Overview
In the "Unified" model, **3K Pro Services** is the merchant of record and the primary support interface. Customers deal with "3K Pro", not the individual product entities.

*   **Merchant Name:** 3K Pro Services
*   **Support Email:** `support@3kpro.services` (Centralized)
*   **Billing Descriptor:** `3KPRO* PRODUCTNAME`

---

## 2. Support Tiers

### Tier 1: General Inquiries (Centralized)
**Who:** 3K Pro Admin / AI Agent
**Scope:**
*   Login/Account access issues
*   Billing questions (receipts, refunds)
*   "Where do I find X?"
**SLA:** 24 Hours (Business Days)
**Tools:** Centralized Inbox (Gmail or shared Slack channel)

### Tier 2: Product-Specific (Specialized)
**Who:** Product Lead / Engineer (e.g., FairMerge Specialist)
**Scope:**
*   Bug reports
*   Feature requests
*   Complex configuration (e.g., GitHub OAuth failure)
**Process:**
1.  Tier 1 tags ticket with `[Product-Name]`.
2.  Ticket routed to product specific Slack channel (e.g., `#fairmerge-alerts`).

---

## 3. Billing & Refunds

### Unified Stripe Strategy
*   **One Stripe Account:** All products exist as items within the master 3K Pro Stripe account.
*   **Metadata:** Every Customer and Subscription MUST have `product_id` metadata (e.g., `xelora`, `fairmerge`) to track revenue attribution.

### Refund Policy (Standardized)
*   **Satisfaction Guarantee:** 14-day money-back guarantee for all SaaS subscriptions.
*   **Digital Assets (Templates):** No refunds once downloaded (unless defective).
*   **Process:**
    1.  User emails `support@3kpro.services`.
    2.  Agent verifies date of purchase.
    3.  If <14 days, refund processed immediately via Stripe Dashboard.
    4.  Subscription cancelled immediately.

---

## 4. Branding Guidelines for Ops
When replying to customers, use the "Unified" voice:

*   **Bad:** "The Xelora team will look at this." (creates distance)
*   **Good:** "Our product team for Xelora is looking into this." (unified)

**Email Signature:**
```
[Name]
Customer Success | 3K Pro Services
Home of XELORA, FairMerge, and more.
3kpro.services
```

---

## 5. Incident Management
If a specific product goes down (e.g., FairMerge API outage):
1.  **Status Page:** Update `status.3kpro.services` (Unified status page).
2.  **Notification:** Email **only** the active subscribers of that specific product (segment by Stripe metadata).
3.  **Cross-Impact:** Check if shared services (Auth/Billing) are affected.
