import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
import { stripe, STRIPE_PRICES } from "@/lib/stripe";
import { z } from "zod";

const checkoutSchema = z.object({
  planType: z.enum(["one-time", "monthly"], {
    message: 'Plan type must be either "one-time" or "monthly"',
  }),
});

export async function POST(request: Request) {
  try {
    console.log("Cloud Ledger Checkout API called");

    // 1. Validate Env
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json({ error: "Server configuration error: Missing Stripe Key" }, { status: 500 });
    }

    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    // 2. Parse Body
    const body = await request.json();
    const validation = checkoutSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({ error: "Invalid request data" }, { status: 400 });
    }

    const { planType } = validation.data;
    
    // 3. Determine Price and Mode
    let priceId = "";
    let mode: "payment" | "subscription" = "subscription";

    if (planType === "one-time") {
      priceId = STRIPE_PRICES.CLOUD_LEDGER_ONE_TIME;
      mode = "payment";
    } else {
      priceId = STRIPE_PRICES.CLOUD_LEDGER_MONTHLY;
      mode = "subscription";
    }

    if (!priceId) {
      return NextResponse.json({ error: `Price ID not configured for ${planType}` }, { status: 500 });
    }

    // 4. Get/Create Customer (if user is logged in)
    let customerId: string | undefined;
    
    // Check if profiles table exists and has stripe_customer_id, if so, use it.
    // Assuming profiles table structure matches previous project or is standard supbase + stripe setup.
    // If not, we fall back to creating guest session or relying on email.

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
                // Only try to update if table exists
                await supabase.from("profiles").update({ stripe_customer_id: customerId }).eq("id", user.id);
            }
        } catch (e) {
            console.warn("Could not sync with profiles table", e);
        }
    }

    // 5. Create Session
    const session = await stripe.checkout.sessions.create({
      customer: customerId, // Optional if not logged in
      customer_email: (!customerId && user?.email) ? user.email : undefined, // Prefill email if no customer object
      mode: mode,
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/cloud-ledger?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cloud-ledger?canceled=true`,
      metadata: {
        product: "cloud-ledger",
        plan_type: planType,
        supabase_user_id: user?.id || "guest",
      },
      allow_promotion_codes: true,
    });

    return NextResponse.json({ success: true, url: session.url });

  } catch (error: any) {
    console.error("Cloud Ledger checkout error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
