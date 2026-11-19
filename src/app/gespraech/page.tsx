import type { Metadata } from "next";

import { InstantRedirect } from "@/components/instant-redirect";
import { linkedinGespraechRedirectTarget } from "@/lib/linkedin-short-links";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  robots: { index: false, follow: true },
  alternates: {
    canonical: `${site.url}/kontakt/`,
  },
};

export default function GespraechShortLinkPage() {
  const target = linkedinGespraechRedirectTarget();
  return (
    <InstantRedirect
      target={target}
      message="Weiterleitung zur Kontaktseite …"
      linkLabel="Kontakt & Erstgespräch"
    />
  );
}