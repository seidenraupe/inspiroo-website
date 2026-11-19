import { InstantRedirect } from "@/components/instant-redirect";
import { withBase } from "@/lib/paths";

type StandortbestimmungRedirectProps = {
  target: string;
};

export function StandortbestimmungRedirect({ target }: StandortbestimmungRedirectProps) {
  return (
    <InstantRedirect
      target={target}
      message="Weiterleitung zur Standortbestimmung …"
      linkLabel="KMU-Check jetzt starten"
    />
  );
}

/** Ziel-URL für den eingebetteten Standortcheck auf der Startseite. */
export function standortcheckEntryHref() {
  return withBase("/#kurz-check");
}