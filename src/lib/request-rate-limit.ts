type RateLimitOptions = {
  limit: number;
  windowMs: number;
};

type RateLimitResult = {
  allowed: boolean;
  retryAfterSeconds: number;
};

type RateBucket = {
  count: number;
  resetAt: number;
};

const buckets = new Map<string, RateBucket>();

function clientAddress(request: Request) {
  return (request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown")
    .split(",")[0]
    .trim()
    .slice(0, 120);
}

// This prevents bursts within a running instance. Production-wide enforcement
// should use a shared store when a persistent database or Redis is provisioned.
export function checkRateLimit(request: Request, scope: string, options: RateLimitOptions): RateLimitResult {
  const now = Date.now();
  const key = `${scope}:${clientAddress(request)}`;
  const current = buckets.get(key);
  const bucket = !current || current.resetAt <= now
    ? { count: 0, resetAt: now + options.windowMs }
    : current;

  bucket.count += 1;
  buckets.set(key, bucket);

  if (bucket.count <= options.limit) return { allowed: true, retryAfterSeconds: 0 };
  return { allowed: false, retryAfterSeconds: Math.max(1, Math.ceil((bucket.resetAt - now) / 1000)) };
}
