import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

import { ContactThanksTracker } from "@/components/contact-thanks-tracker";

export const metadata: Metadata = {
  title: "Nachricht gesendet",
  robots: { index: false, follow: false },
};

export default function ContactThanksPage() {
  return (
    <>
      <Suspense fallback={null}>
        <ContactThanksTracker />
      </Suspense>
      <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="eyebrow">Kontakt</p>
        <h1 className="mt-4 text-4xl text-balance sm:text-5xl">
          Herzlichen Dank für Ihre Nachricht.
        </h1>
        <p className="measure mt-6 text-xl leading-relaxed text-ink/75">
          Ich habe sie erhalten und melde mich rasch persönlich bei Ihnen.
        </p>
        <p className="mt-10">
          <Link
            href="/kontakt/"
            className="text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand"
          >
            Zurück zur Kontaktseite
          </Link>
        </p>
      </section>
    </>
  );
}