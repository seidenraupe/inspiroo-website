"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "invalid" | "failed";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message || !form.checkValidity()) {
      setStatus("invalid");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: site.web3formsKey,
          subject: `Kontakt über inspiroo.ch – ${name}`,
          from_name: "inspiroo.ch",
          name,
          email,
          phone: phone || "—",
          message,
          botcheck: data.get("botcheck") === "on",
        }),
      });
      const result = (await response.json()) as { success?: boolean };
      if (!response.ok || !result.success) throw new Error("submit failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("failed");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-lg border border-navy/15 bg-cream p-7" role="status">
        <p className="text-xl font-semibold">Herzlichen Dank für Deine Nachricht.</p>
        <p className="mt-2 text-ink/70">
          Ich habe sie erhalten und melde mich rasch persönlich bei Dir.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand"
        >
          Weitere Nachricht schreiben
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
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
          <Input name="name" required autoComplete="name" placeholder="Vor- und Nachname" />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-ink/70">E-Mail</span>
          <Input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="du@firma.ch"
          />
        </label>
      </div>
      <label className="block text-sm">
        <span className="mb-1.5 block text-ink/70">Telefon (optional)</span>
        <Input name="phone" type="tel" autoComplete="tel" placeholder="+41 …" />
      </label>
      <label className="block text-sm">
        <span className="mb-1.5 block text-ink/70">Worüber möchtest Du sprechen?</span>
        <Textarea
          name="message"
          required
          rows={6}
          placeholder="Kurz Deine Situation, die offene Frage und was Du Dir als nächsten Schritt vorstellst."
        />
      </label>
      <p className="text-xs leading-relaxed text-ink/55">
        Mit dem Absenden werden Deine Angaben zur Bearbeitung der Anfrage
        übermittelt. Details in der{" "}
        <Link href="/datenschutz" className="underline underline-offset-2 hover:text-ink">
          Datenschutzerklärung
        </Link>
        .
      </p>
      {status === "invalid" ? (
        <p className="text-sm text-destructive" role="alert">
          Bitte Name, eine gültige E-Mail-Adresse und Deine Nachricht ausfüllen.
        </p>
      ) : null}
      {status === "failed" ? (
        <p className="text-sm text-destructive" role="alert">
          Die Nachricht konnte nicht gesendet werden. Bitte schreib direkt an{" "}
          <a href={`mailto:${site.email}`} className="underline">
            {site.email}
          </a>{" "}
          oder ruf an: {site.phone}.
        </p>
      ) : null}
      <Button
        type="submit"
        size="lg"
        disabled={status === "sending"}
        className="h-11 px-5"
      >
        {status === "sending" ? "Wird gesendet …" : "Nachricht senden"}
      </Button>
    </form>
  );
}
