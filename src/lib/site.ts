export const site = {
  name: "inspiroo",
  legalName: "inspiroo gmbh",
  tagline: "pragmatisch visionär",
  claim: "advisory services",
  title: "inspiroo | Unternehmensberatung für Startups und KMUs | Schweiz",
  description:
    "Kritische Aussensicht, pragmatische Steuerungs-Instrumente und inspirierende Zusammenarbeit: Thomas Giger begleitet Startups und KMUs von der Analyse zur Aktion.",
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
  founder: {
    name: "Thomas Giger",
    role: "Gründer und Inhaber",
    ageNote: "Thomas Giger (60), Gründer/Inhaber",
  },
} as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/services", label: "Services" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/kontakt", label: "Kontakt" },
] as const;
