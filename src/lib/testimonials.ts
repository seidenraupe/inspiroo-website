export type ClientVoice = {
  id: string;
  person: string;
  role?: string;
  company: string;
  /** Ohne Logo gilt die Stimme als anonymisiert. */
  logo?: {
    src: string;
    width: number;
    height: number;
    onDark?: boolean;
    /** Abweichung von der Standard-Logo-Skalierung in Testimonial-Karten. */
    imageClassName?: string;
    /** Höhere Logo-Zeile, falls das Motiv feine Linien hat. */
    slotClassName?: string;
  };
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
    person: "Nathalie Danko",
    role: "Geschäftsführerin",
    company: "Danko Group AG",
    logo: { src: "/logos/danko.png", width: 1009, height: 263 },
    quote:
      "Die Zusammenarbeit ist für uns als Familienunternehmen eine wertvolle Bereicherung. Wir schätzen den Austausch auf Augenhöhe, das kritische Hinterfragen und frische Perspektiven auf komplexe Herausforderungen. Die Beratung hilft uns, Führungsaufgaben bewusster wahrzunehmen und Entscheidungen klarer zu treffen. Dabei stehen stets praxisnahe und umsetzbare Lösungen im Vordergrund.",
    sample:
      "Die Zusammenarbeit ist für uns als Familienunternehmen eine wertvolle Bereicherung. Wir schätzen den Austausch auf Augenhöhe, das kritische Hinterfragen und frische Perspektiven auf komplexe Herausforderungen. Die Beratung hilft uns, Führungsaufgaben bewusster wahrzunehmen und Entscheidungen klarer zu treffen. Dabei stehen stets praxisnahe und umsetzbare Lösungen im Vordergrund.",
  },
  raiffeisen: {
    id: "raiffeisen-winterthur",
    person: "Gregor Knoblauch",
    role: "Vorsitzender der Bankleitung",
    company: "Raiffeisenbank Winterthur",
    logo: { src: "/logos/raiffeisen.png", width: 348, height: 51 },
    quote:
      "Die Zusammenarbeit mit Thomas war inspirierend, unkompliziert und auf unsere Bedürfnisse als Bank abgestimmt. Thomas hat es verstanden, sich pragmatisch in unsere Situation zu versetzen und hat unsere Bedürfnisse sofort erkannt. Die Zusammenarbeit war ‹schnörkellos› und praxisorientiert. Thomas hat es verstanden, uns ‹an der Hand zu nehmen› und hat das Ziel nie aus den Augen verloren.",
    sample:
      "Die Zusammenarbeit mit Thomas war inspirierend, unkompliziert und auf unsere Bedürfnisse als Bank abgestimmt. Thomas hat es verstanden, sich pragmatisch in unsere Situation zu versetzen und hat unsere Bedürfnisse sofort erkannt. Die Zusammenarbeit war ‹schnörkellos› und praxisorientiert. Thomas hat es verstanden, uns ‹an der Hand zu nehmen› und hat das Ziel nie aus den Augen verloren.",
  },
  hvw: {
    id: "historischer-verein-winterthur",
    person: "Christian Huggenberg",
    role: "Präsident",
    company: "Historischer Verein Winterthur / Museum Schaffen",
    logo: {
      src: "/logos/museum-schaffen.svg",
      width: 268,
      height: 86,
      slotClassName: "h-16 sm:h-[4.25rem]",
      imageClassName:
        "max-h-14 w-[13.25rem] max-w-none sm:max-h-16 sm:w-[14.75rem]",
    },
    quote:
      "Mit schlankeren, durchgängig digitalen Prozessen für unsere Mitgliederverwaltung und Veranstaltungen sparen wir im Vorstand heute spürbar Zeit und Geld. Gleichzeitig sind diese Verbesserungen auch für unsere Mitglieder dank einer neuen, modernen Website direkt und einladend erlebbar. Thomas hat das Ganze äusserst pragmatisch, strukturiert und mit viel Verständnis für die spezifischen Bedürfnisse eines Kulturbetriebs umgesetzt.",
    sample:
      "Mit schlankeren, durchgängig digitalen Prozessen für unsere Mitgliederverwaltung und Veranstaltungen sparen wir im Vorstand heute spürbar Zeit und Geld. Gleichzeitig sind diese Verbesserungen auch für unsere Mitglieder dank einer neuen, modernen Website direkt und einladend erlebbar. Thomas hat das Ganze äusserst pragmatisch, strukturiert und mit viel Verständnis für die spezifischen Bedürfnisse eines Kulturbetriebs umgesetzt.",
  },
  webling: {
    id: "webling",
    person: "Demian Holderegger",
    role: "Gründer",
    company: "Webling",
    logo: { src: "/logos/webling.png", width: 480, height: 126 },
    quote:
      "Thomas hat unseren Strategie- und Budgetprozess so begleitet, dass die strategischen Stossrichtungen direkt in Budget und Jahresziele eingeflossen sind. Zusätzlich gab er uns Instrumente zur Hand, um die Umsetzung der Massnahmen konsequent auf Kurs zu halten.",
    sample:
      "Thomas hat unseren Strategie- und Budgetprozess so begleitet, dass die strategischen Stossrichtungen direkt in Budget und Jahresziele eingeflossen sind.",
  },
  zhaw: {
    id: "zhaw-sml",
    person: "Fabian Danko",
    role: "Deputy Head Team Corporate Finance & Corporate Banking",
    company: "ZHAW School of Management and Law",
    logo: { src: "/logos/zhaw.png", width: 256, height: 256 },
    quote: null,
    sample:
      "Mit packenden Einblicken in Führung, digitale Transformation und M&A-Prozesse brachte Thomas mit seinem Referat echte unternehmerische Praxis direkt in den Hörsaal. Die lebhaften Diskussionen zeigten, wie wertvoll ungeschminkter Wissenstransfer aus dem Führungsalltag ist.",
  },
} satisfies Record<string, ClientVoice>;

/** Alle Kundenstimmen (Reihenfolge im Markup; Anzeige clientseitig gemischt). */
export const referenceVoices: ClientVoice[] = [
  clientVoices.homeOfInnovation,
  clientVoices.hvw,
  clientVoices.danko,
  clientVoices.webling,
  clientVoices.raiffeisen,
  clientVoices.zhaw,
];

export const allVoices: ClientVoice[] = referenceVoices;

