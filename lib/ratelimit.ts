import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

/**
 * Global Rate Limiter (Upstash Redis)
 * 
 * Protects the marketplace APIs from abuse and ensures fair resource
 * allocation across the portfolio.
 */

const redisUrl = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;

if (!redisUrl || !redisToken) {
  console.warn("[RateLimit] Upstash environment variables missing. Rate limiting disabled.");
}

const redis = redisUrl && redisToken
  ? new Redis({ url: redisUrl, token: redisToken })
  : null;

// Create different limiters for different tiers
export const ratelimit = redis ? {
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
} : null;

/**
 * Helper to get the rate limit for a specific user/IP
 */
export async function checkRateLimit(identifier: string, tier: "public" | "user" | "enterprise" = "public") {
  if (!ratelimit) return { success: true, remaining: 999, reset: 0 };
  
  const { success, remaining, reset } = await ratelimit[tier].limit(identifier);
  return { success, remaining, reset };
}
