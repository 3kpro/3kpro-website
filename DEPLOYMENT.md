# Deployment and verification

**Project:** [3KPRO.Services](https://3kpro.services) public website.

This repository uses Next.js 16, TypeScript, Node.js 22 and Vercel. Use `package.json` and `AGENTS.md` as the current sources for commands and release approval rules. Older historical deployment details live in Git history.

## Development checks

```bash
npm ci
npm run typecheck
npm run build
```

The local dev command is `npm run dev` (port 3001). Some integrations and builds require environment-specific credentials; never commit them or production customer data.

## CI and release

- `.github/workflows/ci.yml` runs install, type-check, and build for pull requests and pushes.
- `.github/workflows/lighthouse.yml` adds site-quality checks.
- GitHub displays Vercel deployment status on pull requests.
- **Do not treat a green preview or a documentation merge as production release authorization.** Follow the approval-gated release process in `AGENTS.md`.
- Verify the reviewed deployment, production routing, key forms, and rollback details for an authorized release.

For deployment status, use the relevant GitHub checks and Vercel project instead of trusting an outdated static screenshot or historical launch checklist.
