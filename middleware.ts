import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { checkRateLimit } from "@/lib/ratelimit";

/**
 * Global Edge Middleware
 * 
 * 1. Auth: Syncs Supabase session at the Edge.
 * 2. Rate Limiting: Protects API routes using Upstash Redis.
 */

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const url = req.nextUrl;

  // --- 1. RATE LIMITING (API Routes Only) ---
  if (url.pathname.startsWith("/api")) {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1";
    // We use IP for anonymous/public rate limiting
    // For authenticated routes, we could use userId from session (handled below)
    const { success, remaining, reset } = await checkRateLimit(ip, "public");

    if (!success) {
      return new NextResponse("Too Many Requests", {
        status: 429,
        headers: {
          "X-RateLimit-Limit": "10",
          "X-RateLimit-Remaining": remaining.toString(),
          "X-RateLimit-Reset": reset.toString(),
        },
      });
    }
  }

  // --- 2. AUTHENTICATION (Shared Supabase Identity) ---
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return req.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: any) {
          req.cookies.set({ name, value, ...options });
          res.cookies.set({ name, value, ...options });
        },
        remove(name: string, options: any) {
          req.cookies.set({ name, value: "", ...options });
          res.cookies.set({ name, value: "", ...options });
        },
      },
    }
  );

  // Refresh session if expired - mandatory for Server Components to see the correct session
  await supabase.auth.getSession();

  return res;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
