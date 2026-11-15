/** GA4-Events – nur aktiv, wenn `gtag` geladen ist (siehe SiteAnalytics). */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean | undefined>,
) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  const clean = params
    ? Object.fromEntries(
        Object.entries(params).filter(([, v]) => v !== undefined),
      )
    : undefined;
  window.gtag("event", eventName, clean);
}