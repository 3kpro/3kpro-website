import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { monitoring } from "@/lib/monitoring";
import { notifications } from "@/lib/notifications";
import Stripe from "stripe";

export async function POST(req: Request) {
  const body = await req.text();
  const headerPayload = await headers();
  const signature = headerPayload.get("Stripe-Signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error: any) {
    monitoring.captureException(error, "error", { context: "Stripe Webhook Construction" });
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed":
      case "checkout.session.async_payment_succeeded":
      case "checkout.session.async_payment_failed":
        const session = event.data.object as Stripe.Checkout.Session;
        await handleCheckoutSession(session, event.type);
        break;

      case "customer.subscription.created":
      case "customer.subscription.updated":
      case "customer.subscription.deleted":
        const subscription = event.data.object as Stripe.Subscription;
        await handleSubscriptionEvent(subscription, event.type);
        break;

      case "invoice.payment_succeeded":
      case "invoice.payment_failed":
         // Optional: Handle invoice events for revenue recording
         break;

      default:
        // console.log(`Unhandled event type ${event.type}`);
        break;
    }
  } catch (error: any) {
    monitoring.captureException(error, "error", { 
        context: "Stripe Webhook Processing",
        metadata: { eventType: event.type }
    });
    return new NextResponse(`Webhook Handler Error: ${error.message}`, { status: 500 });
  }

  return new NextResponse(null, { status: 200 });
}

// Unified Checkout Session Handler
async function handleCheckoutSession(session: Stripe.Checkout.Session, eventType: string) {
  // Support legacy 'product' key and new 'product_code' key
  const productCode = session.metadata?.product_code || session.metadata?.product; 

  console.log(`[Stripe] Checkout Event: ${eventType} | Product: ${productCode} | Session: ${session.id}`);

  switch (productCode) {
    case "cloud-ledger":
      await handleCloudLedgerCheckout(session, eventType);
      break;
    case "reviewlens":
      await handleReviewLensCheckout(session, eventType);
      break;
    default:
      console.warn(`[Stripe] No handler for product code: ${productCode}`);
  }
}

// Unified Subscription Handler
async function handleSubscriptionEvent(subscription: Stripe.Subscription, eventType: string) {
  // 1. Identify Product
  // A subscription might have multiple items, but for now we assume 1 main product per sub or compatible mix
  const primaryItem = subscription.items.data[0];
  if (!primaryItem) {
      console.error(`[Stripe] Subscription ${subscription.id} has no items.`);
      return;
  }
  
  const productId = typeof primaryItem.price.product === 'string' 
      ? primaryItem.price.product 
      : primaryItem.price.product.id;

  // 2. Fetch Product Metadata to route
  // Optimization: In high scale, cache this product lookup
  const product = await stripe.products.retrieve(productId);
  const productCode = product.metadata.product_code;

  console.log(`[Stripe] Subscription Event: ${eventType} | Product: ${productCode} | Sub: ${subscription.id}`);

  switch (productCode) {
    case "reviewlens":
        await handleReviewLensSubscription(subscription, eventType, product);
        break;
    default:
        console.warn(`[Stripe] No subscription handler for product code: ${productCode}`);
  }
}

// --- Product Specific Handlers ---

// Cloud Ledger (Preserving existing logic intent)
async function handleCloudLedgerCheckout(session: Stripe.Checkout.Session, eventType: string) {
    if (eventType === "checkout.session.completed" || eventType === "checkout.session.async_payment_succeeded") {
        console.log("Processing Cloud Ledger purchase...");
        const email = session.customer_details?.email || session.customer_email;
        if (email) {
            await notifications.sendWelcomeEmail(email, "cloud-ledger");
        }
        // TODO: Implement fulfillment logic here, e.g., update user subscription in Supabase
    } else if (eventType === "checkout.session.async_payment_failed") {
        console.log("Async payment failed:", session.id);
        // TODO: Handle failed payment
    }
}

// ReviewLens (New Implementation)
async function handleReviewLensCheckout(session: Stripe.Checkout.Session, eventType: string) {
    if (eventType === "checkout.session.completed") {
        console.log(`[ReviewLens] Provisioning access for user ${session.client_reference_id || session.customer_email}`);
        const email = session.customer_details?.email || session.customer_email;
        if (email) {
            await notifications.sendWelcomeEmail(email, "reviewlens");
        }
        // TODO: Call ReviewLens provisioning service (or generic Supabase insert)
    }
}

async function handleReviewLensSubscription(subscription: Stripe.Subscription, eventType: string, product: Stripe.Product) {
   const tier = product.metadata.tier; // team | growth | enterprise
   const status = subscription.status; // active | past_due | canceled...
   
   console.log(`[ReviewLens] Subscription update: Tier=${tier} Status=${status}`);
   
   // TODO: Sync state with ReviewLens `organizations` table in Supabase
   // e.g. update organizations set subscription_tier = $1, subscription_status = $2 where stripe_customer_id = $3
}
