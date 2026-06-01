# Admin Seller Access

Operational note for the protected 3KPRO admin/seller backend.

## Purpose

The admin area is a protected field-sales backend for James and approved sellers.
It is not a hidden bypass account. Access uses Supabase Auth plus an email
allowlist.

## Routes

| Route | Purpose |
| --- | --- |
| `/admin/login` | Admin/seller sign-in |
| `/admin/logout` | Ends the Supabase session |
| `/admin` | Seller control room |
| `/admin/analytics` | Marketplace analytics placeholder |
| `/admin/health` | Supabase and Stripe health check |

## Access Rules

`proxy.ts` protects `/admin/*`.

Allowed accounts must satisfy both:

1. The user can sign in through Supabase Auth.
2. The user's email is in `ADMIN_ALLOWED_EMAILS`.

Production `ADMIN_ALLOWED_EMAILS` is configured in Vercel as:

```text
james@3kpro.services,jlawson808@gmail.com
```

The code has the same two emails as a fallback so local/dev builds do not lock
out James if the env var is missing.

## Account Creation

Create the actual account in Supabase Auth:

1. Open the 3KPRO Supabase project.
2. Go to Authentication -> Users.
3. Create or invite `james@3kpro.services`.
4. Set a strong password.
5. Confirm the user can sign in at `/admin/login`.

Do not create a shared public demo password. For sellers, add one named account
per person and add that email to `ADMIN_ALLOWED_EMAILS`.

## Next Iteration

- Add lead capture.
- Add seller role labels.
- Add demo reset/data seeding.
- Add Stripe checkout creation tools.
- Replace placeholder analytics with real Supabase/Stripe queries.

