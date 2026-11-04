import { clientVoices } from "@/lib/testimonials";

export const hero = {
  kicker: "Sparring und Unternehmensentwicklung für KMU",
  title: "Unternehmerisch denken. Klar entscheiden. Wirksam umsetzen.",
  lead: "Ich begleite Unternehmerinnen und Unternehmer sowie Geschäftsleitungen bei strategischen Herausforderungen, wichtigen Entscheidungen und Veränderungen.",
  body: "Mit über 30 Jahren C-Level-Erfahrung – davon 13 Jahre als CEO – verbinde ich die Perspektive eines erfahrenen Unternehmers mit einer unabhängigen Aussensicht und konsequenter Umsetzungsorientierung.",
};

export const experienceFacts = [
  { value: "30+", label: "Jahre in Geschäftsleitung und C-Level" },
  { value: "13", label: "Jahre CEO der Dipl. Ing. Fust AG" },
  { value: "VR", label: "Verwaltungsrat in Handel, Service und Innovation" },
  { value: "2023", label: "seit 2023 unabhängig mit inspiroo" },
] as const;

export const experienceStations = [
  "Dipl. Ing. Fust",
  "Sony (Schweiz)",
  "Service7000",
  "nettoshop",
  "Home of Innovation",
] as const;

export const occasions = {
  kicker: "Wann ich Unternehmen unterstütze",
  title: "Wenn viel auf dem Spiel steht und der Weg nicht eindeutig ist",
  items: [
    {
      title: "Wachstum und Profitabilität verbessern",
      body: "Der Umsatz wächst, die Marge nicht – oder umgekehrt. Ich helfe Dir herauszufinden, wo Dein Unternehmen Geld verdient und welche Hebel am meisten bewirken.",
    },
    {
      title: "Strategie überprüfen und neu ausrichten",
      body: "Der Markt verändert sich, die bisherigen Erfolgsrezepte tragen nicht mehr. Ich prüfe mit Dir, was bleibt, was sich ändern muss und was als Nächstes kommt.",
    },
    {
      title: "Schwierige Führungsentscheidungen treffen",
      body: "Als Unternehmer trägst Du die Verantwortung allein. Ich bin der unabhängige Gesprächspartner, mit dem Du Optionen offen durchdenken kannst.",
    },
    {
      title: "Digitale Transformation vorantreiben",
      body: "Vom Online-Shop über ERP bis zu digitalen Kundenprozessen: Ich habe solche Vorhaben selbst verantwortet und weiss, woran sie scheitern.",
    },
    {
      title: "Organisation und Führung weiterentwickeln",
      body: "Klare Verantwortungen, eine Kultur der Eigeninitiative und Kennzahlen, die tatsächlich steuern – ich unterstütze Dich dabei, dass Deine Ziele im Alltag ankommen.",
    },
  ],
} as const;

export const audience = {
  kicker: "Für wen ich arbeite",
  title: "Etablierte KMU, die sich weiterentwickeln wollen",
  body: "Meine Erfahrung ist besonders wertvoll für Unternehmen, die bereits eine gewisse Grösse und Organisation haben – und jemanden suchen, der ihre Herausforderungen aus eigener Führungsverantwortung kennt.",
  groups: [
    "Inhabergeführte KMU",
    "Familienunternehmen",
    "Unternehmen in einer Wachstums- oder Veränderungsphase",
    "Unternehmerinnen und Unternehmer, die einen unabhängigen Sparring-Partner suchen",
    "Geschäftsleitungen mit strategischen oder operativen Herausforderungen",
  ],
  secondary:
    "Auch Start-ups begleite ich gerne – vor allem, wenn aus einer guten Idee ein tragfähiges Unternehmen werden soll.",
  image: "/images/werkhalle-inhaberin.webp",
  imageAlt:
    "Inhaberin und Mitarbeiter begutachten ein Werkstück in einer hellen Werkhalle.",
} as const;

export const principles = {
  kicker: "Was meine Zusammenarbeit auszeichnet",
  title: "Sparring auf Augenhöhe – von jemandem, der selbst geführt hat",
  body: "Mit fundiertem Blick von aussen und pragmatischen Werkzeugen schärfe ich Deinen Fokus und setze mit Dir die richtigen Prioritäten für nachhaltigen Erfolg.",
  items: [
    {
      title: "Unabhängig",
      body: "Ich verkaufe keine Software, keine Standardmethodik und keine Folgeaufträge. Meine Empfehlungen orientieren sich ausschliesslich an Deinem Unternehmen.",
    },
    {
      title: "Unternehmerisch",
      body: "Ich habe selbst Budgets verantwortet, Filialnetze entwickelt, Firmen integriert und Transformationen umgesetzt. Ich denke in Ertrag, Liquidität und Risiko.",
    },
    {
      title: "Pragmatisch",
      body: "Lieber drei richtige Prioritäten als dreissig Folien. Ich arbeite mit dem, was in Deinem Unternehmen vorhanden ist, und mache es wirksamer.",
    },
    {
      title: "Umsetzungsorientiert",
      body: "Eine Strategie ist erst dann gut, wenn sie im Alltag ankommt. Auf Wunsch begleite ich auch die Umsetzung – mit klaren Meilensteinen und Kennzahlen.",
    },
  ],
  image: "/images/gespraech-sessel.webp",
  imageAlt:
    "Zwei Sessel und ein kleiner Tisch mit Wassergläsern an einem Fenster mit Blick über die Altstadt.",
} as const;

export const process = {
  kicker: "So läuft die Zusammenarbeit",
  title: "In drei Schritten von der Frage zur Wirkung",
  steps: [
    {
      title: "Erstgespräch",
      body: "Unverbindlich und vertraulich. Du schilderst Deine Situation, ich stelle Fragen. Danach wissen wir beide, ob und wie ich Dich unterstützen kann.",
    },
    {
      title: "Auftragsklärung",
      body: "Ich halte Ziel, Vorgehen, Umfang und Kosten in einer kurzen Offerte fest. Transparent und ohne Kleingedrucktes.",
    },
    {
      title: "Zusammenarbeit",
      body: "Analyse, Sparring oder Begleitung der Umsetzung – im vereinbarten Rhythmus, mit verbindlichen Meilensteinen und regelmässiger Standortbestimmung.",
    },
  ],
} as const;

export const servicesIntro = {
  kicker: "Vier Beratungsformate",
  title: "Für jede Ausgangslage das passende Format",
  body: "Die Formate unterscheiden sich in Dauer und Tiefe – nicht im Anspruch. Im Erstgespräch klären wir gemeinsam, welches zu Deiner Situation passt. Bei Bedarf ziehe ich spezialisierte Partner aus meinem Netzwerk bei.",
};

export const services = [
  {
    number: "01",
    slug: "boxen-stopp",
    title: "Boxen-Stopp",
    problem: "Ich möchte wissen, wo mein Unternehmen wirklich steht.",
    headline: "Klarheit über die wirtschaftliche Situation und die nächsten Hebel.",
    body: "Wo steht Dein Unternehmen? Wo liegen ungenutzte Potenziale? Welche Massnahmen versprechen die grösste Wirkung? In einem strukturierten Kurzmandat analysiere ich die Ausgangslage und erarbeite mit Dir konkrete Handlungsempfehlungen mit klaren Prioritäten.",
    outcomes: [
      "Ehrliche Standortbestimmung zu Markt, Kunden, Zahlen und Organisation",
      "Kurz- und mittelfristige Verbesserungspotenziale",
      "Priorisierte Massnahmenliste mit Verantwortlichkeiten",
    ],
    format: "Kurzmandat, typischerweise einige Wochen",
    image: "/images/analyse-unterlagen.webp",
    imageAlt:
      "Ausgedruckte Auswertungen mit Diagrammen, Brille, Füllfeder und Kaffee auf einem Holztisch.",
    voice: clientVoices.hvw,
  },
  {
    number: "02",
    slug: "co-pilot",
    title: "Co-Pilot",
    problem: "Ich brauche einen unabhängigen Gesprächspartner für schwierige Entscheidungen.",
    headline: "Ein Sparring-Partner, der die Verantwortung eines CEO aus eigener Erfahrung kennt.",
    body: "Als Unternehmerin oder Unternehmer kannst Du nicht jede Frage mit Deinem Team besprechen. Im vertraulichen Sparring übernehme ich die Rolle des kritischen und lösungsorientierten Fragestellers – im 1:1 oder im Verwaltungsrat und in der Geschäftsleitung.",
    outcomes: [
      "Vertraulicher Austausch auf Augenhöhe",
      "Kritische Fragen und neue Perspektiven vor wichtigen Entscheidungen",
      "Sicherheit bei Personal-, Investitions- und Strategiefragen",
    ],
    format: "Regelmässige Sparring-Termine oder auf Abruf",
    image: "/images/unternehmerin-fenster.webp",
    imageAlt:
      "Eine Unternehmerin steht mit einer Tasse Kaffee nachdenklich am Fenster ihres Büros.",
    voice: clientVoices.danko,
  },
  {
    number: "03",
    slug: "navigator",
    title: "Navigator",
    problem: "Ich habe Ziele, aber die Umsetzung kommt nicht richtig voran.",
    headline: "Strategie in den Alltag bringen – mit Steuerung, die funktioniert.",
    body: "Viele Unternehmen wissen, wohin sie wollen. Schwierig wird es im operativen Alltag. Ich begleite Dich über längere Zeit bei der Umsetzung, baue mit Dir ein pragmatisches Kennzahlensystem auf und unterstütze bei Planung, Steuerung und Kontrolle von Projekten und Prozessen.",
    outcomes: [
      "Pragmatisches Kennzahlensystem (KPI), das wirklich steuert",
      "Klare Meilensteine und Verantwortlichkeiten",
      "Regelmässige Standortbestimmung mit der Geschäftsleitung",
    ],
    format: "Längerfristige Begleitung, z. B. monatlich",
    image: "/images/gl-team-planung.webp",
    imageAlt:
      "Geschäftsleitungsteam bespricht einen Meilensteinplan an einem Holztisch.",
    voice: clientVoices.homeOfInnovation,
  },
  {
    number: "04",
    slug: "masterplan",
    title: "Masterplan",
    problem: "Ich muss mein Unternehmen strategisch neu ausrichten.",
    headline: "Von der Marktanalyse zur tragfähigen Strategie mit Etappenzielen.",
    body: "Wenn sich der Markt grundlegend verändert, reichen Korrekturen nicht. Mit Dir analysiere ich Markt, Kunden und Wettbewerb, entwickle eine tragfähige Strategie und übersetze sie in priorisierte Etappenziele – für etablierte Unternehmen genauso wie für junge Firmen in bewegten Märkten.",
    outcomes: [
      "Fundierte Analyse von Markt, Kunden und Wettbewerb",
      "Strategie, die Geschäftsleitung und Verwaltungsrat mittragen",
      "Umsetzungsplan mit Etappenzielen und Budget",
    ],
    format: "Strategieprojekt mit Workshops, mehrere Monate",
    image: "/images/workshop-karten.webp",
    imageAlt:
      "Strategie-Workshop: Karten werden an einer Wand zu Themen geordnet.",
    voice: clientVoices.webling,
  },
] as const;

export const about = {
  title: "Thomas Giger – Unternehmer, Verwaltungsrat und Sparring-Partner für KMU",
  intro:
    "Während über 30 Jahren habe ich in Geschäftsleitung und Verwaltungsrat Verantwortung getragen, davon 13 Jahre als CEO der Dipl. Ing. Fust AG. Heute stelle ich diese Erfahrung als unabhängiger Sparring-Partner Unternehmerinnen, Unternehmern und Geschäftsleitungen von KMU zur Verfügung.",
  teaser:
    "Ich kenne die Herausforderungen eines CEO aus eigener Erfahrung: Entscheidungen unter Unsicherheit, Veränderungen gegen Widerstände, Verantwortung für Mitarbeitende und Ergebnis. Genau diese Perspektive bringe ich in die Zusammenarbeit ein.",
  story: [
    {
      question: "Was ich als CEO gelernt habe",
      points: [
        {
          title: "Entscheiden schlägt Perfektion",
          text: "Eine mutige Entscheidung heute bringt das Unternehmen weiter als monatelanges Abwägen. Fehler lassen sich korrigieren, Stillstand nicht.",
        },
        {
          title: "Strategie entscheidet sich am Boden",
          text: "Die brillanteste Vision verpufft, wenn das Team sie im Alltag nicht greifen kann. Echte Ergebnisse entstehen nicht auf Slides, sondern durch Klarheit und Mitnahme der Schlüsselpersonen.",
        },
        {
          title: "Verantwortung braucht Resonanz",
          text: "An der Spitze steht man mit schwierigen Weichenstellungen oft allein da. Ein offener, unabhängiger Sparring-Partner spart Nerven, Zeit und teure Umwege.",
        },
      ],
    },
    {
      question: "Warum ich inspiroo gegründet habe",
      points: [
        {
          title: "Weil PS auf die Strasse gehören",
          text: "Ich will Unternehmern und Führungskräften den Rücken stärken und dort Wirkung entfalten, wo Ressourcen knapp sind und Tempo zählt.",
        },
        {
          title: "Aus der Praxis für die Praxis",
          text: "Ich kenne den Druck, die Zielkonflikte und die Hürden des CEO-Alltags aus eigener Erfahrung. Dieses Wissen will ich direkt nutzbar machen – ohne Umwege und Theorieballast.",
        },
        {
          title: "Für echtes Unternehmertum",
          text: "Weil es mich antreibt zu sehen, wie aus klaren Impulsen spürbare Dynamik und konkretes Wachstum entstehen.",
        },
      ],
    },
    {
      question: "Was mich an KMU reizt",
      points: [
        {
          title: "Unmittelbare Wirkung",
          text: "Im KMU sieht man das Resultat einer guten Entscheidung oft schon nach wenigen Wochen. Hier bewegt man echte Hebel statt Gremien.",
        },
        {
          title: "Kurze Wege, klare Kante",
          text: "Direkter Draht zu den Inhabern, ehrliche Gespräche und der gemeinsame Wille, Dinge einfach anzupacken und umzusetzen.",
        },
        {
          title: "Das Rückgrat der Wirtschaft",
          text: "Hier wird echte Wertschöpfung betrieben – bodenständig, krisenfest und mit spürbarer Verantwortung für Menschen und Region.",
        },
      ],
    },
    {
      question: "Was mich von klassischen Beratern unterscheidet",
      points: [
        {
          title: "Selbst im Sattel gesessen",
          text: "Ich rede nicht über Führung und Strategie aus der Beobachterrolle. Ich hatte selbst Personal- und Budgetverantwortung und kenne die schlaflosen Nächte.",
        },
        {
          title: "Umsetzer statt Konzept-Produzent",
          text: "Ich schreibe keine 80-seitigen Berichte für die Schublade. Wir erarbeiten pragmatische Lösungen, die direkt am nächsten Tag funktionieren.",
        },
        {
          title: "Sparring auf Augenhöhe",
          text: "Keine akademischen Belehrungen, kein Fachchinesisch. Sondern ein partnerschaftlicher, fordernder und ehrlicher Austausch von Macher zu Macher.",
        },
      ],
    },
  ],
  quote: "Nur aus Enthusiasmus kann Neugierde entstehen, und nur wer neugierig ist, kann lernen.",
  quoteSource: "Leonard Bernstein",
  education:
    "Mein Studium schloss ich an der Universität Zürich als Master of Arts ab. In meiner Abschlussarbeit untersuchte ich das Thema «Manager im Familienunternehmen» am Beispiel der Firma Rieter in Winterthur. Berufsbegleitend bildete ich mich in Management-Seminaren am IMD in Lausanne und autodidaktisch zu allen Aspekten der digitalen Transformation weiter.",
  timeline: [
    { years: "seit 2023", role: "Gründer und Inhaber", org: "inspiroo gmbh" },
    { years: "2010–2022", role: "CEO", org: "Dipl. Ing. Fust AG" },
    { years: "2010–2023", role: "Verwaltungsrat", org: "Service7000 AG" },
    { years: "2014–2021", role: "Verwaltungsrat", org: "nettoshop" },
    { years: "2000–2009", role: "Mitglied der Geschäftsleitung", org: "Dipl. Ing. Fust AG" },
    { years: "1994–2000", role: "Mitglied der Geschäftsleitung", org: "Sony (Schweiz) AG" },
    { years: "1992", role: "Eintritt", org: "Sony (Schweiz) AG" },
    { years: "1991", role: "Master of Arts", org: "Universität Zürich" },
  ],
  image: "/images/sitzungszimmer.webp",
  imageAlt:
    "Vorbereitetes Sitzungszimmer mit langem Eichentisch, Unterlagen und Wasserkaraffe.",
};

export const closing = {
  title: "Was beschäftigt Dich aktuell in Deinem Unternehmen?",
  lead: "Lass uns darüber sprechen.",
  body: "In einem unverbindlichen Erstgespräch besprechen wir Deine aktuelle Herausforderung und klären, ob und wie ich Dich unterstützen kann.",
};

export const firstCall = {
  title: "Lass uns herausfinden, was Dein Unternehmen weiterbringt.",
  body: "In einem unverbindlichen Erstgespräch besprechen wir Deine aktuelle Herausforderung und klären, ob und wie ich Dich unterstützen kann.",
  facts: [
    "Unverbindlich und ohne Auftragsverpflichtung",
    "Persönlich in Winterthur oder per Video",
    "Vertraulich",
  ],
  image: "/images/erstgespraech-tisch.webp",
  imageAlt:
    "Zwei Kaffeetassen und ein Notizbuch auf einem Holztisch, im Hintergrund die Altstadt.",
};

export const leadershipProjects = [
  {
    title: "Digitale Innovation und Transformation",
    body: "In mehreren Etappen lösten wir die über 30 Jahre alte ERP-Eigenentwicklung durch eine moderne Lösung mit SAP-Backbone und rund 30 spezialisierten Umsystemen ab. Dabei digitalisierten wir konsequent sämtliche Kundenprozesse im Service und im Verkauf. Im Mittelpunkt standen immer Mehrwerte für Kunden und Mitarbeitende: Als einer der ersten Detailhändler in der Schweiz setzten wir Tablets im Beratungsprozess ein. Auch die Arbeit der Aussendienst-Techniker wurde mit Tablets unterstützt und die Administration vereinfacht. Kundinnen und Kunden können dank vernetzter IT-Prozesse ihren Liefertermin im Online-Shop selbst wählen oder in der Filiale direkt fixieren. Online-Bestellungen, die bis 21 Uhr eingehen, werden seit 2020 bereits am Folgetag zugestellt.",
  },
  {
    title: "E-Learning",
    body: "Damit alle Mitarbeitenden an über hundert dezentralen Standorten laufend über die neusten technologischen Trends und Produkte geschult werden konnten, setzten wir früh auf E-Learning. Ziel war, mit den bestehenden Ressourcen der eigenen Organisation die Lerninhalte zeitnah und aktuell – natürlich auch mobil – auszuspielen. Gamification, Zertifikate und ein Belohnungs-Shop verstärkten die Motivation. Vor allem in der Führungsausbildung ergänzten wir Präsenzkurse online zu Blended-Learning-Einheiten.",
  },
  {
    title: "Online-Shop mit Zusatznutzen",
    body: "Anfang der 2010er-Jahre bauten wir den Online-Shop neu auf. Das Angebot dehnten wir von wenigen hundert beworbenen Artikeln auf das mehrere zehntausend Produkte umfassende Gesamtsortiment aus. Wir offerierten als einer der ersten Webshops «click & reserve» und wenig später «click & collect». Damit waren die wichtigsten 6000 Produkte des Filialsortiments für Online-Kunden innert Minuten abholbereit. Die integrierte Sparkarten-Funktion für Verbrauchs- und Zubehörprodukte stärkte die Kundenbindung und war später Vorbild für die Sammelpass-Funktion des grössten Schweizer Kundenbindungsprogramms.",
  },
  {
    title: "Erweiterung und Automatisierung des Logistikcenters",
    body: "Angesichts des kontinuierlichen Wachstums und des stark zunehmenden Online-Handels planten wir bereits 2014 eine umfangreiche Vergrösserung der Logistikkapazitäten. Auf einer benachbarten Landreserve verdoppelten wir die Kapazitäten während des laufenden Betriebs. Mit einer Teilautomatisierung der Kommissionierung konnten wir die massiv gestiegene Nachfrage über die Online-Kanäle weiterhin effizient abwickeln.",
  },
  {
    title: "Führungs- und Innovationskultur",
    body: "Mit flachen Hierarchien und dem Prinzip «Führung durch Vorbild» sorgten wir für eine dynamische und unternehmerische Kultur, die offen war für neue Ideen und Lösungen. Wir motivierten mit Respekt und Wertschätzung für die Leistungen der Mitarbeitenden. Weiterentwicklung und Lernen förderten wir mit gezieltem Feedback und der Möglichkeit, sich an neuen Herausforderungen zu beweisen.",
  },
  {
    title: "Reputationsmanagement",
    body: "Was man nicht messen kann, lässt sich auch nicht verbessern. Nach diesem Grundsatz richteten wir an allen Kontaktpunkten Messungen zur Kundenzufriedenheit ein. Parallel erhoben wir Kundenrückmeldungen auf öffentlichen Plattformen und nutzten zeitweise Mystery-Shopping. Alle Resultate bauten wir konsequent in die Führungs- und Ausbildungsarbeit ein.",
  },
  {
    title: "Expansionsstrategie und Umsetzung",
    body: "Für das Filialnetz starteten wir eine umfassende Modernisierung, die wir investitionsschonend über mehrere Jahre verteilten. Dabei berücksichtigten wir die Ertragslage und -aussichten der Standorte und entwickelten das Netz in allen Landesteilen laufend weiter.",
  },
  {
    title: "Akquisitionen und Integrationen",
    body: "Wir spielten eine aktive Rolle bei der Konsolidierung der Branche und nutzten laufend die Chancen von Übernahmen. Die akquirierten Firmen wurden jeweils rasch in die bestehenden Strukturen integriert. Dabei achteten wir auf einen respektvollen Umgang mit den übernommenen Mitarbeitenden und konnten so auch den Kundenkreis laufend erweitern.",
  },
] as const;
