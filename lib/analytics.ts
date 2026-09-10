function push(event: string, params: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
  if (typeof w.gtag === "function") {
    w.gtag("event", event, params);
  }
}

export function trackEvent(event: string, params: Record<string, unknown> = {}) {
  push(event, params);
}