import Link from "next/link";

import { ContactFormEnhance } from "@/components/contact-form-enhance";
import { gaTrackAttrs } from "@/lib/ga-track";
import { site } from "@/lib/site";

const fieldClassName =
  "h-11 w-full min-w-0 rounded-lg border border-input bg-transparent px-3 py-2 text-base text-ink transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50";

/**
 * Server Component. Das `<form>` steht im statischen HTML und funktioniert
 * auch ohne JavaScript (POST an Web3Forms). Mit JavaScript übernimmt
 * `ContactFormEnhance` das Absenden, ohne das Formular aus dem HTML zu nehmen.
 */
export function ContactForm() {
  return (
    <div>
      <ContactFormEnhance />
      <div
        id="nachricht-erfolg"
        hidden
        className="rounded-lg border border-navy/15 bg-cream p-7"
        role="status"
      >
        <p className="text-xl font-semibold">Herzlichen Dank für Ihre Nachricht.</p>
        <p className="mt-2 text-ink/70">
          Ich habe sie erhalten und melde mich rasch persönlich bei Ihnen.
        </p>
      </div>
      <form
        id="nachricht-form"
        action="https://api.web3forms.com/submit"
        method="POST"
        className="space-y-4"
      >
        <input type="hidden" name="access_key" value={site.web3formsKey} />
        <input type="hidden" name="subject" value="Kontakt über inspiroo.ch" />
        <input type="hidden" name="from_name" value="inspiroo.ch" />
        <input
          type="hidden"
          name="redirect"
          value={`${site.url}/kontakt/danke/?sent=1`}
        />
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm">
            <span className="mb-1.5 block text-ink/70">Name</span>
            <input
              name="name"
              required
              autoComplete="name"
              placeholder="Vor- und Nachname"
              className={fieldClassName}
            />
          </label>
          <label className="block text-sm">
            <span className="mb-1.5 block text-ink/70">E-Mail</span>
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="name@firma.ch"
              className={fieldClassName}
            />
          </label>
        </div>
        <label className="block text-sm">
          <span className="mb-1.5 block text-ink/70">Telefon (optional)</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+41 …"
            className={fieldClassName}
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-ink/70">Worüber möchten Sie sprechen?</span>
          <textarea
            name="message"
            required
            rows={6}
            placeholder="Kurz Ihre Situation, die offene Frage und was Sie sich als nächsten Schritt vorstellen."
            className="flex min-h-40 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-base text-ink transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          />
          <span id="nachricht-check-hint" hidden className="mt-2 block text-xs leading-relaxed text-ink/55">
            Vorschlag aus dem Kurz-Check – Sie können den Text vor dem Senden anpassen.
          </span>
        </label>
        <p className="text-xs leading-relaxed text-ink/55">
          Mit dem Absenden werden Ihre Angaben zur Bearbeitung der Anfrage
          übermittelt. Details in der{" "}
          <Link href="/datenschutz" className="underline underline-offset-2 hover:text-ink">
            Datenschutzerklärung
          </Link>
          .
        </p>
        <p id="nachricht-fehler" hidden className="text-sm text-destructive" role="alert">
          Die Nachricht konnte nicht gesendet werden. Bitte schreiben Sie direkt an{" "}
          <a
            href={`mailto:${site.email}`}
            className="underline"
            {...gaTrackAttrs("contact_channel", { channel: "email", placement: "form_error" })}
          >
            {site.email}
          </a>{" "}
          oder rufen Sie an:{" "}
          <a
            href={site.phoneHref}
            className="underline"
            {...gaTrackAttrs("contact_channel", { channel: "phone", placement: "form_error" })}
          >
            {site.phone}
          </a>
          .
        </p>
        <button
          type="submit"
          className="inline-flex h-11 items-center rounded-md bg-navy px-5 text-sm font-semibold text-cream transition-colors hover:bg-brand disabled:opacity-50"
        >
          Nachricht senden
        </button>
      </form>
    </div>
  );
}
