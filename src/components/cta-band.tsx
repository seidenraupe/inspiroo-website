import Link from "next/link";

import { closing } from "@/lib/content";
import { firstCallHref, site } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="bg-navy text-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <h2 className="max-w-3xl text-3xl text-balance sm:text-5xl">
          {closing.title}{" "}
          <span className="text-cream/60">{closing.lead}</span>
        </h2>
        <p className="measure mt-6 text-cream/75">{closing.body}</p>
        <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
          <a
            href={firstCallHref}
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-cream px-7 py-3.5 text-center leading-snug font-semibold text-navy transition-colors hover:bg-white"
          >
            Unverbindliches Erstgespräch vereinbaren
          </a>
          <a
            href={site.phoneHref}
            className="text-lg text-cream underline decoration-cream/30 underline-offset-4 hover:decoration-cream"
          >
            {site.phone}
          </a>
          <Link
            href="/kontakt"
            className="text-cream/70 underline decoration-cream/20 underline-offset-4 hover:text-cream"
          >
            Nachricht schreiben
          </Link>
        </div>
      </div>
    </section>
  );
}
