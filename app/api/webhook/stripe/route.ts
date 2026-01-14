import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error: any) {
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  try {
    switch (event.type) {
      case "checkout.session.completed":
        await handleCheckoutSessionCompleted(session);
        break;
      case "checkout.session.async_payment_succeeded":
        await handleAsyncPaymentSucceeded(session);
        break;
      case "checkout.session.async_payment_failed":
        await handleAsyncPaymentFailed(session);
        break;
    }
  } catch (error: any) {
    console.error(`Error handling event ${event.type}:`, error);
    return new NextResponse(`Webhook Handler Error: ${error.message}`, { status: 500 });
  }

  return new NextResponse(null, { status: 200 });
}

async function handleCheckoutSessionCompleted(session: Stripe.Checkout.Session) {
  const metadata = session.metadata;
  console.log("Checkout session completed:", session.id);
  console.log("Metadata:", metadata);
  
  if (metadata?.product === "cloud-ledger") {
    console.log("Processing Cloud Ledger purchase...");
    // TODO: Implement fulfillment logic here, e.g., update user subscription in Supabase
  }
}

async function handleAsyncPaymentSucceeded(session: Stripe.Checkout.Session) {
  console.log("Async payment succeeded:", session.id);
  await handleCheckoutSessionCompleted(session);
}

async function handleAsyncPaymentFailed(session: Stripe.Checkout.Session) {
  console.log("Async payment failed:", session.id);
  // TODO: Handle failed payment (e.g., notify user)
}
