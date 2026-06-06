# SESSION_CONTEXT — 3KPRO Website

**Last updated:** 2026-06-06 | **Agent:** Joshua (OpenClaw/Codex) | **Session type:** Social posture audit

## Current State
3kpro.services is live and the contact form is working in production. Social-profile cleanup is now the priority: several website-linked profiles are incomplete or questionable, while Instagram and Facebook do not yet have valid public business pages. Local documentation commits are being retained for the next substantive website push to avoid triggering unnecessary production deployments.

## What Was Done (Last Session)
- Audited X, YouTube, Instagram, Facebook, TikTok, LinkedIn, and all social URLs currently exposed by the website.
- Confirmed Instagram and Facebook target handles do not resolve to public business profiles.
- Found X has blank profile fields, TikTok has a visible bio typo, YouTube has stale/off-brand catalog content, and LinkedIn needs URL verification.
- Created `docs/operations/SOCIAL_POSTURE_AUDIT_2026-06-06.md` with ready-to-paste copy, a posture gate, and execution order.

## What's Next
1. Fix X and TikTok profile fields.
2. Clean YouTube’s visible catalog and feature a clear business-intro video.
3. Verify/remove LinkedIn, then create and seed Instagram and Facebook.
4. Centralize social URLs in the website before adding new links.

## Blockers (needs James)
- Profile edits, new account/page creation, and public posts require James's authenticated social sessions and approval.

## Key Facts (don't re-discover these)
- Repo: `github.com/3kpro/3kpro-website` — submodule inside `C:\DEV`, branch = `main` (not master)
- Vercel project: `prj_4Vn9jw9GhsZ2gtm7Ul8c2JtJd1Lg` (name: `3kpro-website`)
- To commit: go into `C:\DEV\_3KPRO-WEBSITE`, commit, push to `origin main`, then update parent ref in `C:\DEV`
- Stripe key: same `sk_live_` as Xelora — single account for all silos
- Contact form: routes to `james@3kpro.services` via Resend
