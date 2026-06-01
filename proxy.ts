import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { checkRateLimit } from "@/lib/ratelimit";
import { isAllowedAdminEmail } from "@/lib/admin/access";

/**
 * Global Edge Proxy (formerly middleware)
 *
 * 1. Auth: Syncs Supabase session at the Edge.
 * 2. Rate Limiting: Protects API routes using Upstash Redis.
 */

export async function proxy(req: NextRequest) {
  const res = NextResponse.next();
  const url = req.nextUrl;

  // --- 1. RATE LIMITING (API Routes Only) ---
  if (url.pathname.startsWith("/api")) {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1";
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
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (url.pathname.startsWith("/admin")) {
    const isAuthRoute =
      url.pathname === "/admin/login" || url.pathname === "/admin/logout";

    if (!isAuthRoute && !isAllowedAdminEmail(user?.email)) {
      const loginUrl = req.nextUrl.clone();
      loginUrl.pathname = "/admin/login";
      loginUrl.searchParams.set("next", url.pathname);
      return NextResponse.redirect(loginUrl);
    }

    if (url.pathname === "/admin/login" && isAllowedAdminEmail(user?.email)) {
      const adminUrl = req.nextUrl.clone();
      adminUrl.pathname = "/admin";
      adminUrl.search = "";
      return NextResponse.redirect(adminUrl);
    }
  }

  return res;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
