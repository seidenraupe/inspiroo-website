export type FormatKey = "boxen-stopp" | "co-pilot" | "navigator" | "masterplan";

export type CheckOption = {
  key: FormatKey;
  text: string;
};

export type CheckQuestion = {
  id: number;
  question: string;
  options: CheckOption[];
};

export type FormatResult = {
  key: FormatKey;
  title: string;
  headline: string;
  summary: string;
  action: string;
  secondaryHint: string;
};

export const CHECK_QUESTIONS: CheckQuestion[] = [
  {
    id: 1,
    question:
      "Wenn Sie auf die letzten 12 Monate blicken: Was beschäftigt Sie unternehmerisch am meisten?",
    options: [
      {
        key: "boxen-stopp",
        text: "Der Umsatz stimmt grundsätzlich, aber unter dem Strich bleibt zu wenig Marge oder Liquidität hängen.",
      },
      {
        key: "co-pilot",
        text: "Es stehen gewichtige Entscheidungen an (z. B. Nachfolge, Investitionen, Rollenverteilung), bei denen mir ein unabhängiges Gegenüber fehlt.",
      },
      {
        key: "navigator",
        text: "Wir haben gute Pläne, aber im Tagesgeschäft bleibt zu viel liegen oder verpufft.",
      },
      {
        key: "masterplan",
        text: "Unser Markt verändert sich spürbar – wir müssen uns fragen, ob unser heutiges Geschäftsmodell in 3 bis 5 Jahren noch trägt.",
      },
    ],
  },
  {
    id: 2,
    question: "Wie laufen zentrale Entscheidungen in Ihrer Geschäftsleitung aktuell ab?",
    options: [
      {
        key: "boxen-stopp",
        text: "Wir entscheiden oft auf Basis von Bauchgefühl oder unvollständigen Zahlen, weil uns die klare Sicht auf Profitabilität pro Bereich fehlt.",
      },
      {
        key: "co-pilot",
        text: "Viele Grundsatzfragen landen am Ende allein auf meinem Tisch – ein offener Austausch auf Augenhöhe fehlt im Alltag.",
      },
      {
        key: "navigator",
        text: "Entscheidungen werden zwar getroffen, aber Verantwortlichkeiten sind unklar und die Umsetzung zieht sich.",
      },
      {
        key: "masterplan",
        text: "Wir sind stark im Tagesgeschäft absorbiert und kommen kaum dazu, grundlegende Weichenstellungen in Ruhe durchzudenken.",
      },
    ],
  },
  {
    id: 3,
    question: "Was passiert, wenn Sie sich zwei Wochen Auszeit nehmen?",
    options: [
      {
        key: "boxen-stopp",
        text: "Ich habe ein ungutes Gefühl, weil ich nicht sicher bin, ob Kosten, Margen und Liquidität ohne meinen täglichen Blick im Griff bleiben.",
      },
      {
        key: "co-pilot",
        text: "Operative Themen laufen weiter, aber heikle Führungs- oder Inhaberfragen warten auf meine Rückkehr.",
      },
      {
        key: "navigator",
        text: "Vieles stockt, weil Teamleiter zu wenig eigenständig steuern oder Prioritäten nicht eindeutig sind.",
      },
      {
        key: "masterplan",
        text: "Das Tagesgeschäft funktioniert – aber für die langfristige Weiterentwicklung des Unternehmens passiert in dieser Zeit nichts.",
      },
    ],
  },
  {
    id: 4,
    question: "Wie steht es um Ihre Strategie und Ziele?",
    options: [
      {
        key: "boxen-stopp",
        text: "Wir haben zwar Umsatzziele, aber keine klare Sicht darauf, welche Produkte, Kunden oder Bereiche wirklich Geld verdienen.",
      },
      {
        key: "co-pilot",
        text: "Die grobe Richtung stimmt, aber bei konkreten Weichenstellungen bin ich unsicher, welche Option die richtige ist.",
      },
      {
        key: "navigator",
        text: "Unsere Strategie steht auf dem Papier, ist aber im Alltag der Mitarbeitenden noch nicht wirklich angekommen.",
      },
      {
        key: "masterplan",
        text: "Unsere bestehende Strategie stammt aus einer anderen Marktphase – wir brauchen eine ehrliche Überprüfung und Neuausrichtung.",
      },
    ],
  },
  {
    id: 5,
    question: "Wo sehen Sie aktuell den grössten Reibungsverlust in der Organisation?",
    options: [
      {
        key: "boxen-stopp",
        text: "Komplexität und historisch gewachsene Strukturen fressen unsere Ertragskraft auf.",
      },
      {
        key: "co-pilot",
        text: "Spannungen im Führungsteam, im Verwaltungsrat oder im Inhaberkreis bremsen wichtige Schritte.",
      },
      {
        key: "navigator",
        text: "Zwischen Geschäftsleitung und Teams gehen Prioritäten verloren; Digitalisierung und Prozesse hinken hinterher.",
      },
      {
        key: "masterplan",
        text: "Wir verzetteln uns in zu vielen Projekten, weil ein verbindlicher Fokus für die nächsten Jahre fehlt.",
      },
    ],
  },
  {
    id: 6,
    question:
      "Wenn Sie sich für die nächsten 90 Tage eine spürbare Entlastung wünschen dürften: Was wäre das?",
    options: [
      {
        key: "boxen-stopp",
        text: "Volle Transparenz über unsere wirtschaftlichen Hebel – und drei konkrete Massnahmen zur Ergebnisverbesserung.",
      },
      {
        key: "co-pilot",
        text: "Ein vertraulicher Sparring-Partner, mit dem ich heikle Fragen durchdenken und sicher entscheiden kann.",
      },
      {
        key: "navigator",
        text: "Klare Verantwortungen, wirksame Steuerungs-Kennzahlen und spürbar mehr Zug in der Umsetzung.",
      },
      {
        key: "masterplan",
        text: "Ein gemeinsames, tragfähiges Zielbild mit klaren Etappen für die Zukunft des Unternehmens.",
      },
    ],
  },
];

export const CHECK_RESULTS: Record<FormatKey, FormatResult> = {
  "boxen-stopp": {
    key: "boxen-stopp",
    title: "Boxen-Stopp",
    headline: "Zeit für einen Boxen-Stopp",
    summary:
      "Ihre Antworten deuten darauf hin, dass Ihr Unternehmen grundsätzlich auf einem soliden Fundament steht, aber aktuell an Marge, Transparenz oder Fokus verliert. Bevor neue Projekte gestartet werden, lohnt sich ein nüchterner Blick auf Zahlen, Kostenstruktur und Ertragshebel.",
    action:
      "In einem kompakten Boxen-Stopp analysieren wir gemeinsam, wo Ihr Unternehmen heute wirklich Geld verdient – und welche drei Hebel am schnellsten wirken.",
    secondaryHint:
      "Zudem zeigt sich Handlungsbedarf bei Transparenz und Ertragskraft – hier setzt der Boxen-Stopp an.",
  },
  "co-pilot": {
    key: "co-pilot",
    title: "Co-Pilot",
    headline: "Ein unabhängiger Co-Pilot bringt jetzt am meisten",
    summary:
      "An der Spitze eines KMU trägt man viele Fragen allein. Ihre Antworten zeigen, dass nicht ein Konzeptpapier fehlt, sondern ein vertrauliches Gegenüber mit eigener Führungserfahrung, um Optionen durchzudenken und Entscheidungen abzusichern.",
    action:
      "Als Ihr unabhängiger Co-Pilot begleite ich Sie im vereinbarten Rhythmus – diskret, direkt und ohne eigene Agenda.",
    secondaryHint:
      "Gleichzeitig stehen wichtige Führungsentscheidungen im Raum – genau dafür ist der Co-Pilot gedacht.",
  },
  navigator: {
    key: "navigator",
    title: "Navigator",
    headline: "Mit dem Navigator kommt Ihre Strategie auf die Strasse",
    summary:
      "Die Richtung stimmt grundsätzlich – aber im Alltag geht zu viel Energie zwischen Zielen, Prozessen und Verantwortlichkeiten verloren. Hier braucht es keine neue Strategie, sondern wirksame Steuerung, klare Rollen und konsequente Umsetzung.",
    action:
      "Gemeinsam schärfen wir Verantwortlichkeiten, etablieren ein schlankes Führungs-Cockpit und sorgen dafür, dass Ihre Prioritäten im Alltag greifen.",
    secondaryHint:
      "Ebenso zeigt sich Potenzial bei der Umsetzung im Alltag – dabei unterstützt der Navigator.",
  },
  masterplan: {
    key: "masterplan",
    title: "Masterplan",
    headline: "Zeit für einen Masterplan",
    summary:
      "Ihr Umfeld bewegt sich – und die bisherigen Erfolgsrezepte reichen für die nächsten Jahre nicht mehr aus. Jetzt geht es darum, rechtzeitig vom Reagieren ins Gestalten zu kommen und das Unternehmen strategisch neu auszurichten.",
    action:
      "Von der nüchternen Standort- und Marktanalyse bis zu verbindlichen Etappenzielen entwickeln wir gemeinsam eine Strategie, die zu Ihrem Unternehmen passt.",
    secondaryHint:
      "Darüber hinaus lohnt sich ein Blick auf die langfristige Neuausrichtung im Rahmen eines Masterplans.",
  },
};

export const CHECK_CONTACT_MESSAGES: Record<FormatKey, string> = {
  "boxen-stopp":
    "Hallo Thomas,\n\nich habe den Standortcheck auf Ihrer Website gemacht (Ergebnis: Boxen-Stopp) und möchte mich gern in einem kurzen, unverbindlichen Gespräch über unsere aktuelle Situation austauschen.",
  "co-pilot":
    "Hallo Thomas,\n\nich habe den Standortcheck auf Ihrer Website gemacht (Ergebnis: Co-Pilot) und suche ein unabhängiges Sparring für anstehende Entscheidungen.",
  navigator:
    "Hallo Thomas,\n\nich habe den Standortcheck auf Ihrer Website gemacht (Ergebnis: Navigator) und möchte besprechen, wie wir unsere Ziele im Alltag wirksamer umsetzen.",
  masterplan:
    "Hallo Thomas,\n\nich habe den Standortcheck auf Ihrer Website gemacht (Ergebnis: Masterplan) und möchte unsere strategische Neuausrichtung mit Ihnen besprechen.",
};

export function isFormatKey(value: string | null): value is FormatKey {
  return value === "boxen-stopp" || value === "co-pilot" || value === "navigator" || value === "masterplan";
}
