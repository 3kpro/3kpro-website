import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  typescript: true,
});

export const STRIPE_PRICES = {
  CLOUD_LEDGER_ONE_TIME: (process.env.STRIPE_CLOUD_LEDGER_ONE_TIME_PRICE_ID || "").trim(),
  CLOUD_LEDGER_MONTHLY: (process.env.STRIPE_CLOUD_LEDGER_MONTHLY_PRICE_ID || "").trim(),
};

/**
 * Production-Ready Checkout Session Helper
 * 
 * Enforces:
 * 1. Stripe Tax (Automatic)
 * 2. Billing Address Collection (Required for Tax)
 * 3. Unified Metadata (product_code)
 */
export async function createProductionCheckoutSession(params: {
  customerId?: string;
  customerEmail?: string;
  priceId: string;
  productCode: string;
  successUrl: string;
  cancelUrl: string;
  metadata?: Record<string, string>;
  mode?: "payment" | "subscription";
}) {
  return await stripe.checkout.sessions.create({
    customer: params.customerId,
    customer_email: (!params.customerId && params.customerEmail) ? params.customerEmail : undefined,
    mode: params.mode || "subscription",
    payment_method_types: ["card"],
    line_items: [
      {
        price: params.priceId,
        quantity: 1,
      },
    ],
    automatic_tax: { enabled: true },
    billing_address_collection: "required",
    success_url: params.successUrl,
    cancel_url: params.cancelUrl,
    metadata: {
      ...params.metadata,
      product_code: params.productCode,
    },
    allow_promotion_codes: true,
  });
}

