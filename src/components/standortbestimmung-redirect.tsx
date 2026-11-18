import Link from "next/link";

import { withBase } from "@/lib/paths";

type StandortbestimmungRedirectProps = {
  target: string;
};

/**
 * Sofortweiterleitung zum KMU-Check auf der Startseite (statischer Export, ohne Server-Redirect).
 */
export function StandortbestimmungRedirect({ target }: StandortbestimmungRedirectProps) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace(${JSON.stringify(target)});`,
        }}
      />
      <section className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
        <p className="text-lg text-ink/75">Weiterleitung zur Standortbestimmung …</p>
        <p className="mt-6">
          <Link
            href={target}
            className="font-semibold text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand"
          >
            KMU-Check jetzt starten
          </Link>
        </p>
      </section>
    </>
  );
}

/** Ziel-URL für den eingebetteten Standortcheck auf der Startseite. */
export function standortcheckEntryHref() {
  return withBase("/#kurz-check");
}