import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

/**
 * Global Rate Limiter (Upstash Redis)
 * 
 * Protects the marketplace APIs from abuse and ensures fair resource
 * allocation across the portfolio.
 */

if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
  console.warn("[RateLimit] Upstash environment variables missing. Rate limiting disabled.");
}

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || "",
  token: process.env.UPSTASH_REDIS_REST_TOKEN || "",
});

// Create different limiters for different tiers
export const ratelimit = {
  // Anonymous / Public endpoints
  public: new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(10, "60 s"),
    analytics: true,
    prefix: "@3kpro/public",
  }),

  // Standard Marketplace User
  user: new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(100, "60 s"),
    analytics: true,
    prefix: "@3kpro/user",
  }),

  // Enterprise / High-throughput
  enterprise: new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(1000, "60 s"),
    analytics: true,
    prefix: "@3kpro/enterprise",
  }),
};

/**
 * Helper to get the rate limit for a specific user/IP
 */
export async function checkRateLimit(identifier: string, tier: "public" | "user" | "enterprise" = "public") {
  if (!process.env.UPSTASH_REDIS_REST_URL) return { success: true, remaining: 999, reset: 0 };
  
  const { success, remaining, reset } = await ratelimit[tier].limit(identifier);
  return { success, remaining, reset };
}
