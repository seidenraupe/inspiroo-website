import { site } from "@/lib/site";

const CAL_HOST = /(^|\.)cal\.com$/i;

function pathFromBookingUrl(url: string) {
  try {
    const parsed = new URL(url);
    if (!CAL_HOST.test(parsed.hostname)) return null;
    const path = parsed.pathname.replace(/^\/+|\/+$/g, "");
    return path || null;
  } catch {
    return null;
  }
}

/** Pfad für das Cal.com-Embed, z. B. `thomas-giger-k52rea`. */
export const bookingCalLink = site.bookingUrl
  ? pathFromBookingUrl(site.bookingUrl)
  : null;

export const bookingOrigin = site.bookingUrl
  ? new URL(site.bookingUrl).origin
  : "https://cal.com";

export const bookingEmbedNamespace = "erstgespraech";

/** Farben und Radius der Website – werden beim Deploy ins Embed übernommen. */
export const calEmbedUi = {
  theme: "light" as const,
  hideEventTypeDetails: false,
  layout: "month_view" as const,
  colorScheme: "light",
  cssVarsPerTheme: {
    light: {
      "cal-brand": "#13213a",
      "cal-brand-emphasis": "#24497a",
      "cal-brand-text": "#f7f5f1",
      "cal-brand-subtle": "#24497a",
      "cal-brand-accent": "#f7f5f1",
      "cal-text": "#13213a",
      "cal-text-emphasis": "#13213a",
      "cal-text-subtle": "#4f5a6b",
      "cal-text-muted": "#8a8274",
      "cal-bg": "#ffffff",
      "cal-bg-emphasis": "#ece7de",
      "cal-bg-subtle": "#f7f5f1",
      "cal-bg-muted": "#ece7de",
      "cal-border": "#dcd6cb",
      "cal-border-emphasis": "#24497a",
      "cal-border-subtle": "#ece7de",
      "cal-border-muted": "#ece7de",
      "cal-border-booker": "transparent",
      "cal-border-booker-width": "0px",
      radius: "0.5rem",
    },
    dark: {
      "cal-brand": "#24497a",
      "cal-brand-text": "#f7f5f1",
    },
  },
};