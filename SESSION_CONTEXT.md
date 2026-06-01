# SESSION_CONTEXT — 3KPRO Website

**Last updated:** 2026-06-01 | **Agent:** Joshua (OpenClaw/Codex) | **Session type:** FairMerge page facelift

## Current State
3kpro.services is live. Cloud Ledger checkout fix is already deployed to production, but GitHub sync from this container remains blocked. FairMerge marketplace page facelift is complete locally and `npm run build` passes.

## What Was Done (Last Session)
- Added FairMerge-specific hero copy for review friction, nitpick churn, reviewer load, and shipping velocity.
- Reworked FairMerge visuals into review-signal, reviewer-load, and bike-shed detector graphics.
- Added a 3KPRO context section, review workflow, and stronger “where it pays off” copy to `/marketplace/fairmerge`.
- `npm run build` passed.

## What's Next
1. Deploy the FairMerge facelift to production after James approves the ship.
2. Reconcile GitHub sync from dev02/OpenCode using `HANDOFF_GITHUB_SYNC.md` so local commits are pushed to `origin main`.

## Blockers (needs James)
- Production deploy still requires explicit approval under the 3KPRO website deploy workflow.
- GitHub push from this container is still blocked by missing credential/SSH plumbing; dev02 host handoff exists.

## Key Facts (don't re-discover these)
- Repo: `github.com/3kpro/3kpro-website` — submodule inside `C:\DEV`, branch = `main` (not master)
- Vercel project: `prj_4Vn9jw9GhsZ2gtm7Ul8c2JtJd1Lg` (name: `3kpro-website`)
- To commit: go into `C:\DEV\_3KPRO-WEBSITE`, commit, push to `origin main`, then update parent ref in `C:\DEV`
- Stripe key: same `sk_live_` as Xelora — single account for all silos
- Contact form: routes to `james@3kpro.services` via Resend
