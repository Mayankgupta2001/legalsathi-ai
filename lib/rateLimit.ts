const RATE_LIMIT_KEY = 'legal_sathi_queries';
const QUERIES_PER_DAY = 10;
const RESET_TIME_HOURS = 24;

interface RateLimitData {
  count: number;
  timestamp: number;
}

export function checkRateLimit(): { allowed: boolean; remaining: number; resetTime: string } {
  if (typeof window === 'undefined') {
    // Server-side: return no limit
    return { allowed: true, remaining: QUERIES_PER_DAY, resetTime: '' };
  }

  try {
    const storedData = localStorage.getItem(RATE_LIMIT_KEY);
    const now = Date.now();

    let data: RateLimitData;

    if (!storedData) {
      data = { count: 0, timestamp: now };
    } else {
      data = JSON.parse(storedData);
    }

    // Check if 24 hours have passed
    const hoursPassed = (now - data.timestamp) / (1000 * 60 * 60);

    if (hoursPassed >= RESET_TIME_HOURS) {
      // Reset counter
      data = { count: 0, timestamp: now };
    }

    const allowed = data.count < QUERIES_PER_DAY;
    const remaining = Math.max(0, QUERIES_PER_DAY - data.count);
    const resetTime = new Date(data.timestamp + RESET_TIME_HOURS * 60 * 60 * 1000).toLocaleTimeString();

    return { allowed, remaining, resetTime };
  } catch (error) {
    console.error('Rate limit check error:', error);
    // If error, allow the query
    return { allowed: true, remaining: QUERIES_PER_DAY, resetTime: '' };
  }
}

export function incrementQueryCount(): boolean {
  if (typeof window === 'undefined') {
    // Server-side: don't track
    return true;
  }

  try {
    const storedData = localStorage.getItem(RATE_LIMIT_KEY);
    const now = Date.now();

    let data: RateLimitData;

    if (!storedData) {
      data = { count: 0, timestamp: now };
    } else {
      data = JSON.parse(storedData);
    }

    // Check if 24 hours have passed
    const hoursPassed = (now - data.timestamp) / (1000 * 60 * 60);

    if (hoursPassed >= RESET_TIME_HOURS) {
      // Reset counter
      data = { count: 0, timestamp: now };
    }

    // Increment count
    data.count++;

    // Save back to localStorage
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(data));

    return true;
  } catch (error) {
    console.error('Query count increment error:', error);
    return false;
  }
}

export function getRemainingQueries(): number {
  const { remaining } = checkRateLimit();
  return remaining;
}

export function getResetTime(): string {
  const { resetTime } = checkRateLimit();
  return resetTime;
}
