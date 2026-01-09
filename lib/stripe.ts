import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2024-12-18.acacia",
  typescript: true,
});

export const STRIPE_PRICES = {
  CLOUD_LEDGER_ONE_TIME: (process.env.STRIPE_CLOUD_LEDGER_ONE_TIME_PRICE_ID || "").trim(),
  CLOUD_LEDGER_MONTHLY: (process.env.STRIPE_CLOUD_LEDGER_MONTHLY_PRICE_ID || "").trim(),
};
