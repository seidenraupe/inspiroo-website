import { withBase } from "@/lib/paths";

const linkedinOrganic = {
  utm_source: "linkedin",
  utm_medium: "social_organic",
  utm_campaign: "website_relaunch_2024",
} as const;

/** Ziel für https://www.inspiroo.ch/check → Standortcheck mit Kampagnen-UTMs. */
export function linkedinCheckRedirectTarget() {
  const query = new URLSearchParams({
    ...linkedinOrganic,
    utm_content: "post_01_check",
  });
  return withBase(`/?${query.toString()}#kurz-check`);
}

/** Ziel für https://www.inspiroo.ch/gespraech → Kontakt mit Kampagnen-UTMs. */
export function linkedinGespraechRedirectTarget() {
  const query = new URLSearchParams({
    ...linkedinOrganic,
    utm_content: "post_01_kontakt",
  });
  return withBase(`/kontakt/?${query.toString()}`);
}