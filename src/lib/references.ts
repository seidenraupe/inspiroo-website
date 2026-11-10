export type ReferenceCategory =
  | "Strategie"
  | "Innovation"
  | "eCommerce"
  | "Coaching"
  | "Impuls-Sparring"
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
  /** Mandatsbeschreibung muss noch geliefert werden. */
  pending?: boolean;
};

export type CaseStudy = {
  id: string;
  client: string;
  sector: string;
  tags: string[];
  situation: string;
  contribution: string;
  result: string;
  link?: { label: string; href: string };
  /** Ausgangslage oder Ergebnis noch nicht vom Mandanten bestätigt. */
  draft?: boolean;
};

export const referenceCategories: Array<ReferenceCategory | "Alle"> = [
  "Alle",
  "Strategie",
  "Innovation",
  "eCommerce",
  "Coaching",
  "Impuls-Sparring",
  "Lehre",
];

export const references: Reference[] = [
  {
    id: "home-of-innovation",
    name: "Home of Innovation",
    sector: "Innovationsökosystem und Immobilien-Management, Winterthur",
    summary:
      "Winterthurs Innovations-Hub für Gründer:innen, Selbständige und KMU — von der Idee bis zur Finanzierung unter einem Dach.",
    mandates: [
      "Entwicklung und Durchführung Strategie-Prozess",
      "Verwaltungsrats-Präsidium",
      "Interims-Management",
      "Umsetzung von ertragssteigernden Massnahmen",
    ],
    categories: ["Strategie", "Innovation"],
    links: [{ label: "homeofinnovation.ch", href: "https://homeofinnovation.ch/" }],
    featured: true,
  },
  {
    id: "gebaeudeloesungen",
    name: "Anbieter digitaler Gebäudelösungen",
    sector: "PropTech / Immobilienbranche",
    summary:
      "Neue digitale Lösung für Mehrfamilienhäuser: mehr Flexibilität, Transparenz und weniger Koordinationsaufwand für Bewohnende und Verwaltungen.",
    mandates: [
      "Begleitung Strategie",
      "Product-Market-Fit",
      "Rollout-Planung",
    ],
    categories: ["Strategie", "Innovation"],
    links: [],
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
    id: "handel-lebensmittel",
    name: "Inhabergeführtes Handelsunternehmen",
    sector: "Lebensmittelbranche, Ostschweiz",
    summary:
      "Wachsendes, inhabergeführtes Unternehmen in der Lebensmittelbranche mit mehreren Geschäftsbereichen.",
    mandates: ["Coaching und Sparring GL", "Aufbau Führungs-Cockpit"],
    categories: ["Coaching"],
    links: [],
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
    mandates: ["Impuls-Sparring"],
    categories: ["Impuls-Sparring"],
    links: [{ label: "wades.ch", href: "https://www.wades.ch/" }],
  },
  {
    id: "webkoenig",
    name: "Webkönig AG",
    sector: "Webdesign",
    summary:
      "Webdesign-Agentur in Winterthur für Websites, die Unternehmen im Netz sichtbar und bedienbar machen.",
    mandates: ["Impuls-Sparring"],
    categories: ["Impuls-Sparring"],
    links: [{ label: "webkoenig.ch", href: "https://webkoenig.ch/" }],
  },
  {
    id: "startup-konsumgut",
    name: "Start-up-Unternehmen",
    sector: "Consumer Product",
    summary:
      "Junges Unternehmen mit einem innovativen Konsumgüter-Produkt in der Phase der Markteinführung.",
    mandates: ["Impuls-Sparring"],
    categories: ["Impuls-Sparring", "Innovation"],
    links: [],
  },
  {
    id: "werkstoff-haendler",
    name: "Online-Händler für Werkstoffe",
    sector: "eCommerce / Werkstoffe",
    summary:
      "Schweizer Versandplattform für Werkstoffe mit Zuschnitten nach Mass.",
    mandates: ["Impuls-Sparring"],
    categories: ["Impuls-Sparring", "eCommerce"],
    links: [],
  },
  {
    id: "la-panetteria",
    name: "Ristorante La Panetteria",
    sector: "Gastronomie",
    summary:
      "Mediterranes Restaurant mit Pizzeria an der Tösstalstrasse in Winterthur, seit 2006 inhabergeführt.",
    mandates: [
      "Überarbeitung Website mit automatischem Tisch-Reservationssystem",
      "Reputations-Management mit aktivem Einholen von Google-Rezensionen",
    ],
    categories: ["Strategie", "eCommerce"],
    links: [{ label: "la-panetteria.ch", href: "https://www.la-panetteria.ch/" }],
  },
  {
    id: "hv-winterthur",
    name: "Historischer Verein Winterthur / Museum Schaffen",
    sector: "Kultur / Verein und Museen",
    summary:
      "Seit 1874 engagiert für die Geschichte Winterthurs – Träger von drei Museen, darunter das Museum Schaffen auf dem Lagerplatz.",
    mandates: [
      "Kosteneinsparungen dank verbesserter Prozesse im Mitglieder- und Event-Management",
      "Neukonzeption der Website mit API-Anbindung an Event-/Ticketing-Plattform und Mitglieder-Datenbank",
    ],
    categories: ["Innovation"],
    links: [
      { label: "hvwinterthur.ch", href: "https://www.hvwinterthur.ch/" },
      { label: "museumschaffen.ch", href: "https://www.museumschaffen.ch/" },
    ],
  },
];

export const featuredReferences = references.filter((item) => item.featured);

export const caseStudies: CaseStudy[] = [
  {
    id: "home-of-innovation",
    client: "Home of Innovation Winterthur",
    sector: "Innovationsökosystem und Immobilien-Management",
    tags: ["Strategieentwicklung", "Verwaltungsratspräsidium", "Interims-Management"],
    situation:
      "Ein Innovationsökosystem mit unterschiedlichen Anspruchsgruppen, einer ungenügenden Ertragsentwicklung und dem Bedarf nach einer klaren strategischen Ausrichtung.",
    contribution:
      "Entwicklung und Durchführung eines neuen Strategieprozesses, Übernahme des Verwaltungsratspräsidiums und Unterstützung bei der operativen Weiterentwicklung.",
    result:
      "Klare strategische Prioritäten und eine deutlich verbesserte Ertragssituation – dank optimierter Flächennutzung, neuer Angebote und eines neuen Pricing-Modells.",
    link: { label: "homeofinnovation.ch", href: "https://homeofinnovation.ch/" },
  },
  {
    id: "museum-schaffen",
    client: "Museum Schaffen / Historischer Verein Winterthur",
    sector: "Kultur / Verein und Museen",
    tags: ["Prozesse", "Digitalisierung", "Website"],
    situation:
      "Ein traditionsreicher Verein mit drei Museen, dessen Abläufe rund um Mitglieder und Veranstaltungen viel Aufwand verursachten.",
    contribution:
      "Verbesserung der Prozesse im Mitglieder- und Event-Management sowie Neukonzeption der Website mit API-Anbindung an die Event-/Ticketing-Plattform und die Mitglieder-Datenbank.",
    result:
      "Kosteneinsparungen dank schlankerer Prozesse und eine neue, moderne Website: Veranstaltungen, Tickets und Mitgliederdaten fliessen automatisch ein – so bleibt sie mit wenig Aufwand immer topaktuell.",
    link: { label: "museumschaffen.ch", href: "https://www.museumschaffen.ch/" },
  },
  {
    id: "la-panetteria",
    client: "Ristorante La Panetteria",
    sector: "Gastronomie, Winterthur",
    tags: ["Website", "Online-Reservation", "Reputations-Management"],
    situation:
      "Ein inhabergeführtes mediterranes Restaurant, seit 2006 in Winterthur etabliert, mit einer nicht mehr zeitgemässen Website, telefonischer Tischreservation und einer kaum aktiv gepflegten Online-Reputation.",
    contribution:
      "Überarbeitung der Website mit Integration eines automatischen Tisch-Reservationssystems sowie Aufbau eines Reputations-Managements mit aktivem Einholen von Google-Rezensionen.",
    result:
      "Gäste reservieren rund um die Uhr selbst online, das Team wird am Telefon entlastet, und laufend neue Google-Rezensionen stärken die Sichtbarkeit des Restaurants.",
    link: { label: "la-panetteria.ch", href: "https://www.la-panetteria.ch/" },
    draft: true,
  },
  {
    id: "handel-lebensmittel",
    client: "Inhabergeführtes Handelsunternehmen",
    sector: "Lebensmittelbranche, Ostschweiz",
    tags: ["Coaching", "Sparring Geschäftsleitung", "Führungs-Cockpit", "Organisation"],
    situation:
      "Ein wachsendes, inhabergeführtes Unternehmen in der Lebensmittelbranche mit mehreren Geschäftsbereichen – und dem Wunsch, Führung und Weiterentwicklung auf eine breitere Basis zu stellen.",
    contribution:
      "Regelmässiges Coaching und Sparring der Geschäftsleitung zu Führung, Prioritäten und unternehmerischen Entscheidungen sowie Aufbau eines neuen Führungs-Cockpits.",
    result:
      "Eine zweite Führungsebene, die im Zuge des Wachstums geschaffen wurde, ein strukturierterer Einbezug der Teamleiter und eine Geschäftsleitung, die sich auf strategische Projekte fokussiert und diese konsequent umsetzt.",
  },
  {
    id: "webling",
    client: "Webling",
    sector: "Software für Vereine und Verbände",
    tags: ["Strategieprozess", "Budgetprozess"],
    situation:
      "Ein etabliertes Winterthurer Software-Unternehmen in einem wachsenden Markt, das Strategie und Budget enger miteinander verknüpfen wollte.",
    contribution:
      "Moderation und Begleitung des Strategie- und Budgetprozesses mit der Geschäftsleitung.",
    result:
      "Priorisierte strategische Massnahmen, die direkt in Budget und Jahresziele übersetzt wurden.",
    link: { label: "webling.ch", href: "https://www.webling.ch/" },
  },
  {
    id: "gebaeudeloesungen",
    client: "Anbieter digitaler Gebäudelösungen",
    sector: "PropTech / Immobilienbranche",
    tags: ["Strategie", "Product-Market-Fit", "Rollout-Planung"],
    situation:
      "Eine neue digitale Lösung für Mehrfamilienhäuser – technisch bereit, aber mit offenen Fragen zu Zielgruppe, Positionierung und Markteinführung.",
    contribution:
      "Begleitung der Strategiearbeit, Schärfung des Product-Market-Fit und Erarbeitung einer etappierten Rollout-Planung.",
    result:
      "Eine umfassende Markt- und Wettbewerbsanalyse, eine klare Positionierung gegenüber Verwaltungen und Eigentümern sowie ein priorisierter Plan für die Markteinführung.",
  },
];
