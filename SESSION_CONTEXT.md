# SESSION_CONTEXT — 3KPRO Website

**Last updated:** 2026-06-01 | **Agent:** Joshua (OpenClaw/Codex) | **Session type:** Checkout bug fix

## Current State
3kpro.services is live. Cloud Ledger marketplace checkout bug fixed locally and `npm run build` passes. Production deploy still needs explicit approval under the website deploy skill.

## What Was Done (Last Session)
- Fixed marketplace `PurchaseAction` so internal `/api/*` checkout endpoints are called via `POST`.
- Cloud Ledger marketplace acquisition now posts `{ planType: "one-time" }` to `/api/cloud-ledger/checkout`.
- Added a `GET` redirect on `/api/cloud-ledger/checkout` to `/cloud-ledger#pricing` so accidental direct navigation does not show 405.
- `npm run build` passed.

## What's Next
1. Commit, push, and deploy the Cloud Ledger checkout fix after James approves production ship.
2. Verify `https://3kpro.services/marketplace/cloud-ledger` "Acquire License" opens Stripe Checkout.

## Blockers (needs James)
- None currently

## Key Facts (don't re-discover these)
- Repo: `github.com/3kpro/3kpro-website` — submodule inside `C:\DEV`, branch = `main` (not master)
- Vercel project: `prj_4Vn9jw9GhsZ2gtm7Ul8c2JtJd1Lg` (name: `3kpro-website`)
- To commit: go into `C:\DEV\_3KPRO-WEBSITE`, commit, push to `origin main`, then update parent ref in `C:\DEV`
- Stripe key: same `sk_live_` as Xelora — single account for all silos
- Contact form: routes to `james@3kpro.services` via Resend
