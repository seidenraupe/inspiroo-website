import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
      <p className="text-xs tracking-[0.2em] text-violet uppercase">404</p>
      <h1 className="font-heading mt-3 text-4xl">Diese Seite gibt es nicht.</h1>
      <p className="mx-auto mt-4 max-w-md text-ink/65">
        Der Link ist ungültig oder die Seite wurde verschoben.
      </p>
      <Button render={<Link href="/" />} className="mt-8 h-11 px-5">
        Zur Startseite
      </Button>
    </section>
  );
}
