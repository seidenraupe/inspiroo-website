export const site = {
  name: "inspiroo",
  legalName: "inspiroo gmbh",
  tagline: "pragmatisch visionär",
  claim: "advisory services",
  title: "Unternehmensberatung und Sparring für KMU in der Schweiz | inspiroo",
  description:
    "Thomas Giger, ehemaliger CEO von Dipl. Ing. Fust, begleitet inhabergeführte KMU, Familienunternehmen und Geschäftsleitungen als unabhängiger Sparring-Partner bei Strategie, Entscheidungen und Umsetzung. Sitz in Winterthur.",
  keywords: [
    "Unternehmensberatung KMU Schweiz",
    "Sparring Partner CEO",
    "Strategieberatung Winterthur",
    "Verwaltungsrat KMU",
    "Unternehmensentwicklung",
  ],
  url: "https://www.inspiroo.ch",
  email: "thomas.giger@inspiroo.ch",
  infoEmail: "info@inspiroo.ch",
  phone: "+41 79 608 24 24",
  phoneHref: "tel:+41796082424",
  address: {
    street: "Seidenstrasse 47",
    zip: "8400",
    city: "Winterthur",
    country: "Schweiz",
  },
  uid: "CHE-273.046.878",
  vat: "CHE-273.046.878 MWST",
  linkedin: "https://www.linkedin.com/company/inspiroo-gmbh",
  /** Online-Terminplaner (z. B. Cal.com oder Calendly). Ohne URL führt der CTA zu einer vorbereiteten E-Mail. */
  bookingUrl: null as string | null,
  /** Zeigt Hinweise auf Platzhalter und noch zu bestätigende Texte. Vor dem Livegang auf false setzen. */
  showDraftHints: true,
  founder: {
    name: "Thomas Giger",
    role: "Gründer und Inhaber",
    headline: "Unternehmer, Verwaltungsrat und Sparring-Partner für KMU",
    linkedin: "https://www.linkedin.com/in/thomas-giger/",
  },
} as const;

const firstCallSubject = encodeURIComponent("Unverbindliches Erstgespräch");
const firstCallBody = encodeURIComponent(
  "Hallo Thomas\n\nIch würde gerne ein unverbindliches Erstgespräch vereinbaren.\n\nUnternehmen:\nAktuelle Herausforderung:\nMögliche Termine:\n\nFreundliche Grüsse\n",
);

export const firstCallHref =
  site.bookingUrl ??
  `mailto:${site.email}?subject=${firstCallSubject}&body=${firstCallBody}`;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Formate" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/kontakt", label: "Kontakt" },
] as const;
