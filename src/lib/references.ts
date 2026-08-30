export type ReferenceCategory =
  | "Strategie"
  | "Innovation"
  | "eCommerce"
  | "Coaching"
  | "Impuls-Beratung"
  | "Lehre";

export type Reference = {
  id: string;
  name: string;
  sector: string;
  summary: string;
  mandates: string[];
  categories: ReferenceCategory[];
  links: { label: string; href: string }[];
  featured?: boolean;
};

export const referenceCategories: Array<ReferenceCategory | "Alle"> = [
  "Alle",
  "Strategie",
  "Innovation",
  "eCommerce",
  "Coaching",
  "Impuls-Beratung",
  "Lehre",
];

export const references: Reference[] = [
  {
    id: "home-of-innovation",
    name: "Home of Innovation",
    sector: "Innovationsökosystem Winterthur",
    summary:
      "Winterthurs Innovations-Hub für Gründer:innen, Selbständige und KMU — von der Idee bis zur Finanzierung unter einem Dach.",
    mandates: [
      "Begleitung Strategie-Prozess",
      "Verwaltungsrats-Präsidium",
      "Interims-Management",
      "Umsetzung von ertragssteigernden Massnahmen",
    ],
    categories: ["Strategie", "Innovation"],
    links: [{ label: "homeofinnovation.ch", href: "https://homeofinnovation.ch/" }],
    featured: true,
  },
  {
    id: "lavaresi",
    name: "Lavaresi / Infra Support",
    sector: "Shared Infrastructure",
    summary:
      "Digitale Waschraum-Infrastruktur für Mehrfamilienhäuser: gemeinsame Nutzung mit mehr Flexibilität, Transparenz und weniger Koordinationsaufwand.",
    mandates: [
      "Begleitung Strategie",
      "Product-Market-Fit",
      "Rollout-Planung",
    ],
    categories: ["Strategie", "Innovation"],
    links: [
      {
        label: "Lavaresi bei Infra Support",
        href: "https://infrasupport.ch/resich/lavaresich",
      },
    ],
    featured: true,
  },
  {
    id: "scherrer",
    name: "Schweisstechnik Scherrer AG",
    sector: "Schweisstechnik und Industriebedarf",
    summary:
      "Familienunternehmen für Schweisstechnik und Schweisszubehör in der Ostschweiz — Beratung und Sortiment für Profis.",
    mandates: ["Evaluation eCommerce-Lösung"],
    categories: ["eCommerce"],
    links: [
      {
        label: "schweisstechnik-scherrer.ch",
        href: "https://www.schweisstechnik-scherrer.ch/",
      },
    ],
  },
  {
    id: "webling",
    name: "Webling",
    sector: "SaaS / Vereinssoftware",
    summary:
      "Winterthurer Vereinssoftware für Mitgliederverwaltung, Buchhaltung, Kommunikation und Events — entwickelt für Vorstände, die den Überblick behalten wollen.",
    mandates: ["Begleitung Strategie- und Budget-Prozess"],
    categories: ["Strategie"],
    links: [{ label: "webling.ch", href: "https://www.webling.ch/" }],
    featured: true,
  },
  {
    id: "raiffeisen-winterthur",
    name: "Raiffeisenbank Winterthur",
    sector: "Banken",
    summary:
      "Genossenschaftliche Regionalbank mit Verankerung in Winterthur und der Region.",
    mandates: ["Innovations-Management"],
    categories: ["Innovation"],
    links: [
      {
        label: "Raiffeisen Winterthur",
        href: "https://www.raiffeisen.ch/winterthur/de.html",
      },
    ],
  },
  {
    id: "danko",
    name: "Danko",
    sector: "Catering und Fleischhandel",
    summary:
      "Event-Catering und Fleischhandel mit Fokus auf massgeschneiderte Konzepte und ausgewählte Produzenten.",
    mandates: ["Coaching und Sparring GL"],
    categories: ["Coaching"],
    links: [{ label: "danko.ch", href: "https://www.danko.ch/" }],
  },
  {
    id: "foodward",
    name: "foodward — Food Finance & Supply Chain",
    sector: "Weiterbildung Food",
    summary:
      "CAS der ZHAW zu finanzieller Führung und Supply-Chain-Management in der Food-Branche.",
    mandates: ["Praxis-Referat"],
    categories: ["Lehre"],
    links: [
      {
        label: "foodward.ch",
        href: "https://foodward.ch/weiterbildungen/food-finance-supply-chain-management/",
      },
    ],
  },
  {
    id: "zhaw-cas-bwl",
    name: "ZHAW SML — CAS Managementorientierte BWL",
    sector: "Hochschul-Weiterbildung",
    summary:
      "Certificate of Advanced Studies der ZHAW School of Management and Law: ganzheitliche Sicht der Unternehmensführung für Fach- und Führungskräfte.",
    mandates: ["Praxis-Referat"],
    categories: ["Lehre"],
    links: [
      {
        label: "CAS Managementorientierte BWL",
        href: "https://www.zhaw.ch/de/sml/weiterbildung/detail/kurs/cas-managementorientierte-bwl",
      },
    ],
  },
  {
    id: "wades",
    name: "Wades AG",
    sector: "Glassanierung",
    summary:
      "Spezialist für Glassanierung, Glasersatz und Oberflächensanierung — Kratzer entfernen statt Scheiben ersetzen.",
    mandates: ["Impuls-Beratung"],
    categories: ["Impuls-Beratung"],
    links: [{ label: "wades.ch", href: "https://www.wades.ch/" }],
  },
  {
    id: "webkoenig",
    name: "Webkönig AG",
    sector: "Webdesign",
    summary:
      "Webdesign-Agentur in Winterthur für Websites, die Unternehmen im Netz sichtbar und bedienbar machen.",
    mandates: ["Impuls-Beratung"],
    categories: ["Impuls-Beratung"],
    links: [{ label: "webkoenig.ch", href: "https://webkoenig.ch/" }],
  },
  {
    id: "steasy",
    name: "Steasy",
    sector: "Consumer Product",
    summary:
      "Mobiler Steamer aus Winterthur: Mittagessen mit Wasserdampf aufwärmen — ohne Mikrowelle, mit Akku und App.",
    mandates: ["Impuls-Beratung"],
    categories: ["Impuls-Beratung", "Innovation"],
    links: [{ label: "steasy.ch", href: "https://steasy.ch/" }],
  },
  {
    id: "material-shop",
    name: "Material-Shop",
    sector: "eCommerce / Werkstoffe",
    summary:
      "Versandplattform für PLEXIGLAS® und verwandte Werkstoffe — Zuschnitte nach Mass ab Standort Schweiz.",
    mandates: ["Impuls-Beratung"],
    categories: ["Impuls-Beratung", "eCommerce"],
    links: [{ label: "material-shop.ch", href: "https://material-shop.ch/" }],
  },
];

export const featuredReferences = references.filter((item) => item.featured);
