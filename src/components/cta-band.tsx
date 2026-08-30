import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cta } from "@/lib/content";
import { site } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="bg-brand text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.2em] uppercase text-white/70">
            Nächster Schritt
          </p>
          <h2 className="font-heading mt-3 text-3xl leading-tight text-balance sm:text-4xl">
            {cta.title}
          </h2>
          <p className="mt-4 max-w-xl text-white/85">{cta.body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            render={<Link href="/kontakt" />}
            variant="secondary"
            size="lg"
            className="h-11 bg-white px-5 text-ink hover:bg-cream"
          >
            Nachricht schreiben
          </Button>
          <Button
            render={<a href={site.phoneHref} />}
            variant="outline"
            size="lg"
            className="h-11 border-white/40 bg-transparent px-5 text-white hover:bg-white/10 hover:text-white"
          >
            {site.phone}
          </Button>
        </div>
      </div>
    </section>
  );
}
