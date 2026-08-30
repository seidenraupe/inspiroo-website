"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/site";

type Status = "idle" | "ready" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    const subject = encodeURIComponent(`Kontakt (Website) — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nE-Mail: ${email}\nTelefon: ${phone || "—"}\n\n${message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("ready");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
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
        <span className="mb-1.5 block text-ink/70">Worüber sollen wir sprechen?</span>
        <Textarea
          name="message"
          required
          rows={6}
          placeholder="Kurz Deine Situation, die offene Frage und was Du Dir als nächsten Schritt vorstellst."
        />
      </label>
      {status === "error" ? (
        <p className="text-sm text-destructive" role="alert">
          Bitte Name, E-Mail und Nachricht ausfüllen.
        </p>
      ) : null}
      {status === "ready" ? (
        <p className="text-sm text-brand" role="status">
          Dein E-Mail-Programm sollte sich geöffnet haben. Falls nicht, schreib
          direkt an {site.email}.
        </p>
      ) : null}
      <Button type="submit" size="lg" className="h-11 px-5">
        Nachricht vorbereiten
      </Button>
    </form>
  );
}
