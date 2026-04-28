---
title: "3kpro-website — Agent Guide"
tags:
  - pillar/consulting
  - agent/onboarding
last-updated: "2026-04-17"
status: active
---

# CLAUDE.md — 3kpro-website

Agent guide for the **consulting site** pillar. Read the portfolio `CLAUDE.md` and `PROJECT_MAP.md` first; this file is the pillar-specific overlay.

## What this pillar is

Public marketing site for the 3KPRO Services consultancy. Next.js app (dev port 3001). Deploys to **3kpro.services**. Separate from the Xelora SaaS landing-page and the Dev marketplace — this is the **company front door**.

## Stack

- Next.js 16 (App Router)
- Supabase (auth, DB)
- Stripe (payments — also powers the marketplace links)
- Upstash Redis (rate limit)
- Sentry (error monitoring)
- AI SDK + `@ai-sdk/google` (Gemini integration in components)

## Layout

```
3kpro-website\
├── CLAUDE.md         ← you are here
├── README.md         ← project overview
├── CHANGELOG.md      ← project history
├── VISION.md         ← company/site strategy
├── DEPLOYMENT.md
├── LOCAL_BUSINESS_SETUP.md
├── OUTREACH_SCRIPT.md
├── QUICKSTART.md
├── app\              ← Next.js App Router routes
├── components\       ← React components
├── lib\              ← shared utilities
├── hooks\
├── public\
├── scripts\
└── docs\
    └── operations\   ← ops runbooks (salvaged from retired docs/SYSTEM/)
```

## Conventions

- **Changelog.** Every non-trivial change gets a line in `CHANGELOG.md`. Cross-project work additionally goes in the portfolio `CHANGELOG.md`.
- **Runbooks.** Add operational runbooks to `docs/operations/`. Do not create a new `docs/SYSTEM/` folder — that pattern is retired portfolio-wide.
- **Strategy.** Site/company strategy edits belong in `VISION.md`, not scattered notes.

## Scope boundaries

- **This pillar owns:** consulting-site content, marketing/SEO for 3kpro.services, company-level integrations (GSC, analytics, business profile), portfolio-root navigation that's about the company (not about Xelora or the marketplace).
- **This pillar does not own:**
  - Xelora product features → `landing-page/`
  - Marketplace product portfolio → `Dev/`
  - Cross-project notes → `MainBrain/`

## Before declaring a task done

1. Edit `CHANGELOG.md` with a dated entry.
2. If strategy shifted, update `VISION.md`.
3. If you created or moved a runbook, note it in `CHANGELOG.md`.
4. Do not commit on the user's behalf unless asked.
