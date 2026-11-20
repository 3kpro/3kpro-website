# AGENTS.md — 3KPRO.Services Website

This is the public Next.js/TypeScript **company website** repository. Read [README.md](README.md) and [DEPLOYMENT.md](DEPLOYMENT.md) for the developer-facing overview. This repository is not the source of truth for private customer files, sales scripts, project plans, or operational histories.

## Scope and development

- Website features, routes, components, integrations, accessibility, and SEO belong here.
- Use Node.js 22.x; `npm ci`, `npm run typecheck`, and `npm run build` are the standard verification commands.
- Do not mix isolated client working directories, private data, or generated build/audit outputs into this public repository.
- Operational documentation and historical client records are stored privately under `3kpro/3K_Infra/docs/internal/website/2026-11-12/`. This is a **snapshot**, not an automatically synchronized working directory; consult the current private operations playbook for newer instructions.

## Mandatory production release guardrails

**Never assume that an approved pull request or passing CI authorizes publishing.** Production changes require explicit owner approval of the exact reviewed HTTPS deployment.

The active release procedure is defined in the privately maintained `MainBrain/PLAYBOOKS/Website_Review_To_Production.md`. If it is unavailable, do not initiate a production release. For client-site work:

1. Start an isolated client worktree through `website_review_release.sh start --client <slug>`, as specified in the private playbook.
2. Change only authorized client files inside that worktree. Prepare the exact route, expected text, and scoped paths for preview verification.
3. Produce and verify the HTTPS review URL, including desktop and mobile acceptance criteria.
4. Obtain explicit owner approval of that **exact** review URL before promoting or releasing.
5. Use only the prescribed pinned, serialized release procedure and record its deployment, source commit, and rollback identifier in the private operations records.

Never bypass release manifests, CI, scope locks, rollback or route checks. Do not use `next dev`, localhost, or tunnels as the external client review surface. Do not directly call `npm run deploy`, `vercel --prod`, or a floating Vercel CLI version to publish a client release.

## Documentation and review

- Keep this repository's [CHANGELOG.md](CHANGELOG.md) suitable for public viewing; use Git commits and PRs for technical change history.
- Track private strategy, tasks, scorecards, contact information, and client-delivery records in their access-controlled workspace rather than in public root Markdown.
- Verify any modified code, avoid committing credentials, and do not claim a successful production deployment from a preview result.
