# 3KPRO.Services

**Company website for [3KPRO.Services](https://3kpro.services).**

3KPRO helps small and midsize businesses with modern websites and practical automation. This repository contains the company web application. Client projects and internal operations are managed separately.

## Technology

- **Frontend:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Framer Motion
- **Integrations:** Supabase, Stripe, Resend, Upstash Redis
- **Operations:** Sentry, Vercel deployment workflow, TypeScript checks

Dependencies and versions live in [`package.json`](package.json).

## Local development

Use Node.js **22.x**.

```bash
git clone https://github.com/3kpro/3kpro-website.git
cd 3kpro-website
npm ci
npm run dev
```

The development server is configured for `http://localhost:3001`. External-service features require credentials and environment configuration. Never commit secrets.

## Validation

```bash
npm run typecheck
npm run build
```

A production build may depend on environment variables. Run appropriate checks before publishing.

## Project map

| Path | Responsibility |
| :--- | :--- |
| [`app/`](app/) | Routes, layouts, and API endpoints |
| [`components/`](components/) | Shared interface components |
| [`lib/`](lib/) | Application utilities and integrations |
| [`public/`](public/) | Static assets |
| [`AGENTS.md`](AGENTS.md) | Contributor and agent working conventions |
| [`DEPLOYMENT.md`](DEPLOYMENT.md) | Deployment notes |
| [`CHANGELOG.md`](CHANGELOG.md) | Change history |

## Collaboration

Open a focused issue describing the expected outcome and attach verification steps to pull requests. Production credentials, private customer data, and environment secrets must not be included.

[Website](https://3kpro.services) · [Contact](mailto:james@3kpro.services)
