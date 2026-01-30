import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
import { stripe, createProductionCheckoutSession } from "@/lib/stripe";
import { z } from "zod";

const checkoutSchema = z.object({
  slug: z.string(),
  priceId: z.string().optional(), // If provided, uses this specific price
  metadata: z.record(z.string(), z.string()).optional(),
  successUrl: z.string().optional(),
  cancelUrl: z.string().optional(),
});

/**
 * Centralized Checkout API
 * 
 * Handles checkout initialization for any product in the marketplace.
 * Ensures Stripe Tax, address collection, and consistent metadata.
 */
export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    const body = await request.json();
    const validation = checkoutSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({ error: "Invalid request data" }, { status: 400 });
    }

    const { slug, priceId, metadata, successUrl, cancelUrl } = validation.data;

    // 1. Resolve Price
    // For now, we expect priceId for custom products, or we look it up for core ones
    let finalPriceId = priceId;
    
    // Fallback/Safety Check
    if (!finalPriceId) {
        return NextResponse.json({ error: "Missing Price ID for checkout" }, { status: 400 });
    }

    // 2. Resolve Customer
    let customerId: string | undefined;
    if (user) {
        try {
            const { data: profile } = await supabase
                .from("profiles")
                .select("stripe_customer_id, email")
                .eq("id", user.id)
                .single();
            
            customerId = profile?.stripe_customer_id;

            if (!customerId) {
                const customer = await stripe.customers.create({
                    email: profile?.email || user.email,
                    metadata: { supabase_user_id: user.id },
                });
                customerId = customer.id;
                await supabase.from("profiles").update({ stripe_customer_id: customerId }).eq("id", user.id);
            }
        } catch (e) {
            console.warn("[Checkout] Profile sync warning:", e);
        }
    }

    // 3. Create Session via Production Helper
    const session = await createProductionCheckoutSession({
      customerId,
      customerEmail: user?.email || undefined,
      priceId: finalPriceId,
      productCode: slug,
      mode: "subscription", // Defaulting to subscription for the portfolio model
      successUrl: successUrl || `${process.env.NEXT_PUBLIC_APP_URL}/marketplace?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: cancelUrl || `${process.env.NEXT_PUBLIC_APP_URL}/marketplace?canceled=true`,
      metadata: {
        ...metadata,
        supabase_user_id: user?.id || "guest",
      },
    });

    return NextResponse.json({ success: true, url: session.url });

  } catch (error: any) {
    console.error("[Checkout] Global error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
