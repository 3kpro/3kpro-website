# 3kpro.services SYSTEM Folder

This directory contains company-level management files for 3kpro.services (the parent company site and marketplace).

---

## File Structure

```
docs/SYSTEM/
├── README.md           → You are here
├── AGENT_CONTRACT.md   → Agent workflow rules (ENTRY/EXIT requirements)
├── TASKS.md            → Company-level tasks (SEO, marketplace, brand)
├── VISION.md           → Company strategy and goals
└── CHANGELOG.md        → Company site update history
```

---

## Purpose

**This folder manages:**
- 3kpro.services company website
- Marketplace features
- Google presence (Search Console, Ads, Analytics)
- Brand management (SEO, business profiles)
- Company-level integrations

**This folder does NOT manage:**
- XELORA product tasks → See `landing-page/docs/SYSTEM/`
- Dev/ product tasks → See `Dev/products/[product]/TASKS.md`

---

## Agent Onboarding

**Before starting work, agents MUST:**
1. Read `AGENT_CONTRACT.md` (workflow rules)
2. Read `VISION.md` (company strategy)
3. Read `TASKS.md` (active tasks)
4. Confirm task exists and is marked OPEN

**Before ending session, agents MUST:**
1. Update `CHANGELOG.md` (log changes)
2. Mark task complete in `TASKS.md` (`- [x]` + ✅)
3. Move task to COMPLETED section
4. Document external changes (Google properties, etc.)

See `AGENT_CONTRACT.md` for full requirements.

---

## Workflow

### Adding Company Tasks

1. Open `TASKS.md`
2. Add task to `## NOW` or `## BACKLOG` section
3. Assign to appropriate agent (Gemini, Claude, etc.)
4. Update status as work progresses
5. Move to `## COMPLETED` when done
6. Log change in `CHANGELOG.md`

### Updating Company Vision

1. Open `VISION.md`
2. Update relevant section (goals, metrics, strategy)
3. Update "Last Updated" timestamp
4. Commit changes with clear message

### Logging Changes

1. Open `CHANGELOG.md`
2. Add entry under `## [YYYY-MM-DD]` format
3. Use categories: Added, Changed, Fixed, Removed
4. Keep entries concise and actionable

---

## Related Directories

**Company Ecosystem:**
```
3K-Pro-Services/
├── 3kpro-website/              → Company site (you are here)
│   └── docs/SYSTEM/            → Company tasks
├── landing-page/               → XELORA product
│   └── docs/SYSTEM/            → XELORA tasks
└── Dev/                        → Product factory
    └── products/[product]/     → Each product has TRUTH/TASKS
```

---

## Agent Responsibilities

**Gemini:**
- Google integrations (Search Console, Ads, Analytics)
- SEO optimization
- Ad campaign management

**Claude (this agent):**
- Company strategy
- Marketplace features
- Brand management
- Cross-project coordination

**Grok:**
- UI/UX updates for company site
- Design polish

**OpenCode agents:**
- Dev/ product development (siloed per product)

---

## Quick Reference

**Current Phase:** Q1 2026 - Google presence establishment
**Primary Goal:** $10k MRR by EOY 2026
**Products Live:** Cloud Ledger (more coming from Dev/)
**Next Launch:** n8n Workflow Marketplace

---

## Notes

- Keep tasks focused on **company-level** work
- Product-specific tasks belong in respective SYSTEM folders
- Update CHANGELOG.md for all significant changes
- Review VISION.md quarterly to ensure alignment
