export type ClientVoice = {
  id: string;
  person: string;
  role?: string;
  company: string;
  logo: { src: string; width: number; height: number; onDark?: boolean };
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
    company: "Home of Innovation",
    logo: { src: "/logos/home-of-innovation.png", width: 360, height: 168 },
    quote: null,
    sample:
      "Thomas hat uns geholfen, aus vielen Ideen klare strategische Prioritäten zu machen – und er hat die Umsetzung ertragssteigernder Massnahmen konsequent mitgetragen.",
  },
  danko: {
    id: "danko",
    person: "Fabian Danko",
    company: "Danko Group AG",
    logo: { src: "/logos/danko.png", width: 480, height: 124, onDark: true },
    quote: null,
    sample:
      "Ein Sparring-Partner, der unternehmerisch denkt und auch unbequeme Fragen stellt. Genau das hat mir vor wichtigen Entscheidungen gefehlt.",
  },
  raiffeisen: {
    id: "raiffeisen-winterthur",
    person: "Gregor Knoblauch",
    company: "Raiffeisenbank Winterthur",
    logo: { src: "/logos/raiffeisen.png", width: 348, height: 51 },
    quote: null,
    sample:
      "Thomas bringt die Erfahrung eines CEO mit, der Innovation nicht nur fordert, sondern selbst umgesetzt hat. Das hat unserem Innovations-Management Struktur und Tempo gegeben.",
  },
  hvw: {
    id: "historischer-verein-winterthur",
    person: "Christian Huggenberg",
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
      "Thomas hat unseren Strategie- und Budgetprozess so begleitet, dass die strategischen Stossrichtungen direkt in Budget und Jahresziele eingeflossen sind.",
  },
} satisfies Record<string, ClientVoice>;

export const homeVoices: ClientVoice[] = [
  clientVoices.homeOfInnovation,
  clientVoices.danko,
  clientVoices.webling,
];

export const allVoices: ClientVoice[] = Object.values(clientVoices);
