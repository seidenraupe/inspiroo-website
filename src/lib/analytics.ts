/**
 * GA4-Events – nur aktiv, wenn `gtag` geladen ist (siehe SiteAnalytics).
 *
 * Erfasst u. a.:
 * - Seitenaufrufe (gtag config + Client-Navigation)
 * - `cta_first_call`, `contact_channel`, `contact_form_submit`
 * - `standortcheck_result`, `standortcheck_cta`, `cta_kurz_check`, `reference_filter`
 * - `cta_format`, `reference_outbound`, `reference_teaser`
 * - `booking_success` (Cal.com-Embed)
 */

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