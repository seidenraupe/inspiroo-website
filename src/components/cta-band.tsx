import Link from "next/link";

import { cta } from "@/lib/content";
import { site } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="border-t border-ink/10">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="eyebrow">Nächster Schritt</p>
        <h2 className="font-heading mt-4 max-w-3xl text-4xl text-balance sm:text-5xl">
          {cta.title}
        </h2>
        <p className="measure mt-5 text-ink/70">{cta.body}</p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href="/kontakt"
            className="inline-flex h-11 items-center justify-center rounded-full bg-ink px-5 text-sm text-cream hover:bg-ink/85"
          >
            Nachricht schreiben
          </Link>
          <a
            href={site.phoneHref}
            className="text-lg text-ink underline decoration-brand/50 underline-offset-4 hover:decoration-brand"
          >
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
