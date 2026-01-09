# Stripe Setup for Cloud Ledger

## 1. Environment Variables (.env.local)

Add these to your Vercel project and local `.env.local`:

```env
# Stripe Keys (From Dashboard > Developers > API keys)
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...

# Cloud Ledger Product Prices (From Dashboard > Product Catalog)
STRIPE_CLOUD_LEDGER_ONE_TIME_PRICE_ID=price_...
STRIPE_CLOUD_LEDGER_MONTHLY_PRICE_ID=price_...

# App URL
NEXT_PUBLIC_APP_URL=https://3kpro.services
NEXT_PUBLIC_CLOUD_LEDGER_URL=https://your-cloud-ledger-app-url.vercel.app # or http://localhost:3002 for dev
```

## 2. Product Setup in Stripe

1.  **Cloud Ledger - One-Time Audit**
    *   Type: One-time
    *   Price: $49.00
    *   Copy Price ID -> `STRIPE_CLOUD_LEDGER_ONE_TIME_PRICE_ID`

2.  **Cloud Ledger - Monthly Monitoring**
    *   Type: Recurring (Monthly)
    *   Price: $9.00
    *   Copy Price ID -> `STRIPE_CLOUD_LEDGER_MONTHLY_PRICE_ID`

## 3. Webhook Setup (Optional but Recommended)

Set up a webhook endpoint at `https://3kpro.services/api/webhooks/stripe` to handle `checkout.session.completed` if you want to automate provisioning.

## 4. Fulfillment (Manual for MVP)

Currently, the success page redirects to varying locations.
You will need to manually configure what happens next (e.g., emailing them a link to the `azure-analyzer` app, or provisioning an account).

Since `azure-analyzer` uses "Sign in with Microsoft", you can grant them access or send them the link to the deployed app. By default, the success page links to `http://localhost:3002` or `NEXT_PUBLIC_CLOUD_LEDGER_URL`.

## 5. Admin Backdoor (Free Testing)

To test the payment flow without using a credit card (or in Live mode without paying):

1.  Go to **Stripe Dashboard** -> **Product Catalog** -> **Coupons**.
2.  Click **+ New Coupon**.
    -   **Name**: `Admin Access`
    -   **Percentage off**: `100%`
    -   **Duration**: `Forever` (for subscriptions) or `Once`.
    -   **Code**: `ADMIN100` (or your preferred secret code).
3.  **To Use**: During checkout, click "Add promotion code" and enter `ADMIN100`. The total will be $0.00.
