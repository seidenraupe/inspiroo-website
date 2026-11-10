export type ClientVoice = {
  id: string;
  person: string;
  role?: string;
  company: string;
  /** Ohne Logo gilt die Stimme als anonymisiert. */
  logo?: { src: string; width: number; height: number; onDark?: boolean };
  /** Freigegebenes Zitat. Solange null, wird `sample` als markiertes Muster gezeigt. */
  quote: string | null;
  body?: string;
  /** Illustratives Muster, bis das echte Statement vorliegt. */
  sample: string;
};

export const clientVoices = {
  homeOfInnovation: {
    id: "home-of-innovation",
    person: "Raphael Tobler",
    role: "Gründer und VRP",
    company: "Home of Innovation",
    logo: { src: "/logos/home-of-innovation.png", width: 360, height: 168 },
    quote: null,
    sample:
      "Thomas hat uns geholfen, aus vielen Ideen klare strategische Prioritäten zu machen. Er hat umgehend und mit viel persönlichem Einsatz die Umsetzung ertragssteigernder Massnahmen gestartet und eine konsequente Kundenorientierung vorgelebt.",
  },
  danko: {
    id: "danko",
    person: "Fabian Danko",
    role: "Mit-Inhaber",
    company: "Danko Group AG",
    logo: { src: "/logos/danko.png", width: 480, height: 124, onDark: true },
    quote: null,
    sample:
      "Ein Sparring-Partner auf Augenhöhe: unternehmerisch denkend, hinterfragend und voller kreativer Lösungsansätze – stets gepaart mit einem feinen Gespür für machbaren Pragmatismus.",
  },
  raiffeisen: {
    id: "raiffeisen-winterthur",
    person: "Gregor Knoblauch",
    role: "Vorsitzender der Bankleitung",
    company: "Raiffeisenbank Winterthur",
    logo: { src: "/logos/raiffeisen.png", width: 348, height: 51 },
    quote: null,
    sample:
      "Die Zusammenarbeit mit Thomas war inspirierend, unkompliziert und auf unsere Bedürfnisse als Bank abgestimmt. Thomas hat es verstanden, sich pragmatisch in unsere Situation zu versetzen und hat unsere Bedürfnisse sofort erkannt. Die Zusammenarbeit war ‹schnörkellos› und praxisorientiert. Thomas hat es verstanden, uns ‹an der Hand zu nehmen› und hat das Ziel nie aus den Augen verloren.",
  },
  hvw: {
    id: "historischer-verein-winterthur",
    person: "Christian Huggenberg",
    role: "Präsident",
    company: "Historischer Verein Winterthur / Museum Schaffen",
    logo: { src: "/logos/historischer-verein-winterthur.png", width: 480, height: 110 },
    quote: null,
    sample:
      "Mit schlankeren Prozessen für Mitglieder und Veranstaltungen sparen wir heute Zeit und Geld. Thomas hat das Ganze pragmatisch und mit viel Verständnis für einen Verein umgesetzt.",
  },
  webling: {
    id: "webling",
    person: "Demian Holderegger",
    role: "Gründer",
    company: "Webling",
    logo: { src: "/logos/webling.png", width: 480, height: 126 },
    quote: null,
    sample:
      "Thomas hat unseren Strategie- und Budgetprozess so begleitet, dass die strategischen Stossrichtungen direkt in Budget und Jahresziele eingeflossen sind. Zusätzlich gab er uns Instrumente zur Hand, um die Umsetzung der Massnahmen konsequent auf Kurs zu halten.",
  },
} satisfies Record<string, ClientVoice>;

/** Reihenfolge wie auf der Referenzen-Seite (Fallstudien und Mandate). */
export const referenceVoices: ClientVoice[] = [
  clientVoices.homeOfInnovation,
  clientVoices.hvw,
  clientVoices.danko,
  clientVoices.webling,
  clientVoices.raiffeisen,
];

export const allVoices: ClientVoice[] = referenceVoices;
