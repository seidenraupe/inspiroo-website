import type { Metadata } from "next";

import { InstantRedirect } from "@/components/instant-redirect";
import { linkedinCheckRedirectTarget } from "@/lib/linkedin-short-links";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Standortbestimmung",
  robots: { index: false, follow: true },
  alternates: {
    canonical: `${site.url}/`,
  },
};

export default function CheckShortLinkPage() {
  const target = linkedinCheckRedirectTarget();
  return (
    <InstantRedirect
      target={target}
      message="Weiterleitung zur Standortbestimmung …"
      linkLabel="KMU-Check jetzt starten"
    />
  );
}