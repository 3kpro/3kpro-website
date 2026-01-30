import { createClient } from "@/lib/supabase/server";
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function GET() {
  const health = {
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    services: {
      supabase: "unknown",
      stripe: "unknown"
    } as Record<string, string>
  };

  // Check Supabase
  try {
    const supabase = await createClient();
    // Use a lightweight query. 'profiles' is a standard table in shared schema.
    const { count, error } = await supabase.from('profiles').select('*', { count: 'exact', head: true });
    
    if (error) {
       health.services.supabase = `degraded: ${error.message}`;
    } else {
       health.services.supabase = "healthy";
    }
  } catch (e: any) {
    health.services.supabase = `down: ${e.message}`;
  }

  // Check Stripe
  try {
    // Basic connectivity check
    await stripe.balance.retrieve();
    health.services.stripe = "healthy";
  } catch (e: any) {
    health.services.stripe = `down: ${e.message}`;
  }

  const status = Object.values(health.services).every(s => s === "healthy") ? 200 : 503;

  return NextResponse.json(health, { status });
}
