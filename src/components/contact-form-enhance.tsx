"use client";

import { useEffect } from "react";

import { trackEvent } from "@/lib/analytics";
import { CHECK_CONTACT_MESSAGES, isFormatKey } from "@/lib/standortcheck";

/** Ergänzt das serverseitig gerenderte Formular, ohne es aus dem HTML zu entfernen. */
export function ContactFormEnhance() {
  useEffect(() => {
    const form = document.getElementById("nachricht-form");
    if (!(form instanceof HTMLFormElement)) return;

    const message = form.elements.namedItem("message");
    const hint = document.getElementById("nachricht-check-hint");
    const thema = new URLSearchParams(window.location.search).get("thema");
    if (
      message instanceof HTMLTextAreaElement &&
      isFormatKey(thema) &&
      message.value.trim() === ""
    ) {
      message.value = CHECK_CONTACT_MESSAGES[thema];
      hint?.removeAttribute("hidden");
    }

    const error = document.getElementById("nachricht-fehler");
    const success = document.getElementById("nachricht-erfolg");
    const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    const idleLabel = button?.textContent ?? "Nachricht senden";

    const onSubmit = async (event: Event) => {
      event.preventDefault();
      error?.setAttribute("hidden", "");
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const data = new FormData(form);
      const name = String(data.get("name") ?? "").trim();
      const email = String(data.get("email") ?? "").trim();
      const phone = String(data.get("phone") ?? "").trim();
      const messageText = String(data.get("message") ?? "").trim();

      if (button) {
        button.disabled = true;
        button.textContent = "Wird gesendet …";
      }

      try {
        const response = await fetch(form.action, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: data.get("access_key"),
            subject: `Kontakt über inspiroo.ch – ${name}`,
            from_name: data.get("from_name"),
            name,
            email,
            phone: phone || "—",
            message: messageText,
            botcheck: data.get("botcheck") === "on",
          }),
        });
        const result = (await response.json()) as { success?: boolean };
        if (!response.ok || !result.success) throw new Error("submit failed");
        trackEvent("contact_form_submit", { method: "web3forms", placement: "contact_form" });
        form.reset();
        hint?.setAttribute("hidden", "");
        form.setAttribute("hidden", "");
        success?.removeAttribute("hidden");
      } catch {
        error?.removeAttribute("hidden");
        if (button) {
          button.disabled = false;
          button.textContent = idleLabel;
        }
      }
    };

    form.addEventListener("submit", onSubmit);
    return () => form.removeEventListener("submit", onSubmit);
  }, []);

  return null;
}
