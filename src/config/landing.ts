// Landing page i18n content - English and Spanish translations

export type Lang = 'en' | 'es';

export interface BlogContent {
  title: string;
  home: string;
  authors: string;
  authorPosts: string;
  articlesByAuthor: string;
  categories: string;
  tags: string;
  readMore: string;
  relatedPosts: string;
  share: string;
  previous: string;
  next: string;
}

export interface LegalSection {
  heading: string;
  body: string[];
  bullets?: string[];
}

export interface LegalDoc {
  title: string;
  updatedLabel: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
  contactHeading: string;
  contactBody: string;
}

export interface AppContent {
  name: string;
  tagline: string;
  eyebrow: string;
  heroLead: string;
  heroAccent: string;
  heroSub: string;
  heroImageAlt: string;
  ctaPrimary: string;
  ctaSecondary: string;
  featNo: string;
  featH: [string, string];
  features: [string, string][];
  howNo: string;
  howH: [string, string];
  how: [string, string, string][];
  privacyNo: string;
  privacyH: [string, string];
  privacyPoints: [string, string][];
  ctaEyebrow: string;
  ctaH: [string, string];
  ctaSub: string;
  backToSite: string;
  legalNav: string;
  privacyLabel: string;
  termsLabel: string;
  privacy: LegalDoc;
  terms: LegalDoc;
}

export interface LandingContent {
  nav: string[];
  cta: string;
  eyebrow: string;
  heroLead: string;
  heroAccent: string;
  heroSub: string;
  marquee: string[];
  servNo: string;
  servH: [string, string];
  services: [string, string][];
  workNo: string;
  workH: [string, string];
  feectory: {
    tag: string;
    type: string;
    year: string;
    title: string;
    desc: string;
    kv: [string, string][];
    link: string;
    linkUrl: string;
  };
  nika: {
    tag: string;
    type: string;
    year: string;
    title: string;
    desc: string;
    kv: [string, string][];
    link: string;
    linkUrl: string;
  };
  procNo: string;
  procH: [string, string];
  process: [string, string, string][];
  ctaEyebrow: string;
  ctaH: [string, string];
  ctaSub: string;
  ctaMail: string;
  footTag: string;
  footLinks: string;
  footLinksList: [string, string][];
  footServ: string;
  footSocial: string;
  footMeta: string;
  seeWork: string;
  blog: BlogContent;
  app: AppContent;
}

export const content: Record<Lang, LandingContent> = {
  en: {
    nav: ["Work", "Services", "Process", "Contact"],
    cta: "Start a project",
    eyebrow: "Now booking · Q3 2026",
    heroLead: "Software, designed",
    heroAccent: "for the way you work.",
    heroSub: "Acadeller is a software studio turning ambitious product ideas into shipped reality — web platforms, mobile apps, and AI tools, built end-to-end by a tight team of engineers and designers.",
    marquee: ["Software studio", "Product design", "Web platforms", "Mobile apps", "AI & automation", "Technical consultancy"],
    servNo: "01 / Services",
    servH: ["What we do, ", "in five strokes."],
    services: [
      ["Product design", "From sketch to spec — flows, prototypes, and design systems that hand off cleanly."],
      ["Web platforms", "Marketing sites, dashboards, and SaaS products — fast, accessible, ready to scale."],
      ["Mobile apps", "Native iOS and Android, or cross-platform when it makes sense. Shipped to the stores."],
      ["AI & automation", "LLM agents, vision scanners, internal copilots — practical AI that ships in weeks, not quarters."],
      ["Technical consultancy", "Architecture audits, technical strategy, and embedded team augmentation when you need a hand."],
    ],
    workNo: "02 / Selected work",
    workH: ["Two recent ", "shipments."],
    feectory: {
      tag: "Featured",
      type: "Web · B2B Platform",
      year: "2026",
      title: "Feectory",
      desc: "A B2B platform we designed and built from zero — onboarding, dashboards, billing, the works.",
      kv: [["Role", "Design + Build"], ["Stack", "Next.js · Postgres"], ["Timeline", "14 weeks"], ["Status", "Live"]],
      link: "feectory.com",
      linkUrl: "https://feectory.com",
    },
    nika: {
      tag: "New",
      type: "Mobile · AI",
      year: "2026",
      title: "Nika TCG Scanner",
      desc: "Real-time One Piece TCG card recognition for iOS. Point your camera, get the card, the price, and your collection updated — all on-device.",
      kv: [["Role", "Design + Build"], ["Stack", "Swift · CoreML"], ["Platform", "iOS"], ["Status", "App Store"]],
      link: "App Store →",
      linkUrl: "https://apps.apple.com/es/app/nika-tcg-optcg-scanner/id6758277197",
    },
    procNo: "03 / Process",
    procH: ["How we ", "actually work."],
    process: [
      ["01", "Discover", "Listen, audit, and frame the real problem before touching a pixel."],
      ["02", "Design", "Wireframes, then hi-fi, then working demos. Decisions in a week."],
      ["03", "Build", "Ship in slices. Weekly releases. You see progress every Friday."],
      ["04", "Scale", "Measure, iterate, and hand over with documentation that doesn't lie."],
    ],
    ctaEyebrow: "Get in touch",
    ctaH: ["Let's build ", "something together."],
    ctaSub: "Have a project in mind? Send us a brief and we'll get back to you within one business day.",
    ctaMail: "contacto@acadeller.com",
    footTag: "A small software studio building thoughtful products for ambitious teams. Spain.",
    footLinks: "Links",
    footLinksList: [
      ["Home", "/"],
      ["Spark", "/app"],
      ["Blog", "/blog"],
      ["Contact", "/contacto"],
      ["Spark privacy", "/app/privacy"],
      ["Spark terms", "/app/terms"],
    ],
    footServ: "Services",
    footSocial: "Find us",
    footMeta: "© 2026 Acadeller · Crafted in Spain",
    seeWork: "See our work",
    blog: {
      title: "Blog",
      home: "Home",
      authors: "Authors",
      authorPosts: "Articles",
      articlesByAuthor: "Articles by this author",
      categories: "Categories",
      tags: "Tags",
      readMore: "Read more",
      relatedPosts: "Related posts",
      share: "Share",
      previous: "Previous",
      next: "Next",
    },
    app: {
      name: "Acadeller Spark",
      tagline: "Your screen time, with a face.",
      eyebrow: "New · iOS · Screen Time",
      heroLead: "Meet Spark.",
      heroAccent: "Your habit, visible.",
      heroSub: "Spark is a little lightbulb that lives on your iPhone and reflects how you actually use it. The more you scroll, the dimmer it gets. Set limits, run a Charge session, and watch it light back up.",
      heroImageAlt: "Spark, a smiling lightbulb character, standing in a warm living room",
      ctaPrimary: "Get early access",
      ctaSecondary: "Talk to us",
      featNo: "01 / What's inside",
      featH: ["Four screens. ", "One habit."],
      features: [
        ["Spark Score", "One number from 0 to 100 for your day. It starts at 100, dips as screen time climbs past two hours, and takes a smaller hit from every pickup."],
        ["Limits", "Pick the apps, categories, and websites that eat your day, then shield them. They stay quiet until you say otherwise."],
        ["Charge", "A timed focus session. Your chosen apps stay blocked until the timer runs out — even if Spark isn't running any more."],
        ["Journey", "A seven-day trend, your top offenders, and a calendar of every day you finished a Charge. Streaks included."],
      ],
      howNo: "02 / How it works",
      howH: ["Three steps, ", "then it's automatic."],
      how: [
        ["01", "Allow Screen Time", "One tap grants Spark read access to your own usage through Apple's Screen Time. No profile to install, no VPN, no account to hand over."],
        ["02", "Choose what to quiet", "Pick apps, categories or sites once. Spark reuses that selection for both Limits and Charge, so you only decide it a single time."],
        ["03", "Watch Spark react", "Spark's mood follows your day — bright, overwhelmed, drained, burned out. A Charge session is how you bring it back."],
      ],
      privacyNo: "03 / Privacy",
      privacyH: ["Your usage never ", "leaves your phone."],
      privacyPoints: [
        ["Computed on device", "Your screen time is measured inside Apple's sandboxed report extension. The raw records are never handed to us — Apple's framework enforces that, so it isn't just a promise we're making."],
        ["We can't see your apps", "Your selection is stored as opaque system tokens on your device. Even we can't tell which apps you chose to block."],
        ["Only your account leaves", "Name, email, and whether your subscription is active. That's the whole list."],
      ],
      ctaEyebrow: "Early access",
      ctaH: ["Want Spark ", "on your phone?"],
      ctaSub: "Spark is in active development for iOS. Drop us a line and we'll add you to the early access list.",
      backToSite: "← Back to Acadeller",
      legalNav: "Legal",
      privacyLabel: "Privacy Policy",
      termsLabel: "Terms of Service",
      privacy: {
        title: "Privacy Policy",
        updatedLabel: "Last updated",
        updated: "September 23, 2026",
        intro:
          "Spark is a screen-time app, so it lives or dies on how it handles your data. This policy explains exactly what stays on your iPhone, what reaches us, and what you can do about it. The short version: your actual usage data never leaves your device.",
        sections: [
          {
            heading: "1. Who we are",
            body: [
              "Acadeller Spark (the \"App\") is built and operated by Acadeller (\"we\", \"us\"), based in Spain. For anything about this policy or your data, write to privacidad@acadeller.com.",
              "Under the EU General Data Protection Regulation (GDPR), we are the data controller for the limited personal data described in section 4.",
            ],
          },
          {
            heading: "2. Your Screen Time data stays on your device",
            body: [
              "Spark asks for Screen Time access through Apple's Family Controls framework, for your own device only. Once you grant it, your usage — time per app, pickups, categories — is read and turned into your Spark Score, your top apps, and your seven-day trend inside a sandboxed Apple report extension running on your iPhone.",
              "Apple's framework does not allow that extension to pass your raw usage records back to the main app, and we do not attempt to work around it. We never receive, store, or transmit your screen time, your pickup counts, or the names of the apps you use. This is enforced by the operating system, not merely by our policy.",
            ],
          },
          {
            heading: "3. What is stored only on your iPhone",
            body: [
              "The following never leaves your device. It lives in local storage and a private app group, and it is removed when you delete the App:",
            ],
            bullets: [
              "Your app, category, and website selection — stored as opaque system tokens. These are meaningless outside your device, and even we cannot read which apps they refer to.",
              "Your focus history — the minutes of Charge you completed, recorded by calendar day to draw your Journey calendar and streak.",
              "Your onboarding answers, including your estimated daily usage.",
              "Your active Limits and any running Charge deadline.",
            ],
          },
          {
            heading: "4. What we do receive",
            body: ["A deliberately short list, and only when it is needed:"],
            bullets: [
              "Account data — when you sign in with Apple or Google, we receive a user identifier, your display name, and your email address. These are stored in our Firebase project so you can sign back in and reach your subscription. If you use Apple's Hide My Email, we only ever see the relay address.",
              "Subscription status — whether your premium entitlement is active, handled by RevenueCat on top of Apple's App Store. We never see your card details; Apple processes all payments.",
              "Diagnostics — crash and error reports, used to fix problems. These contain no Screen Time data.",
              "Support messages — whatever you send us when you contact support, kept so we can reply.",
            ],
          },
          {
            heading: "5. Why we process it, and on what basis",
            body: ["Each purpose has a legal basis under the GDPR:"],
            bullets: [
              "Running your account and restoring your subscription — performance of our contract with you.",
              "Fixing crashes and keeping the App reliable — our legitimate interest in a product that works.",
              "Service emails about your account or important changes — performance of our contract.",
              "Product news or marketing — your consent, which you can withdraw at any time.",
            ],
          },
          {
            heading: "6. Who processes data for us",
            body: [
              "We keep the list short: Google Firebase for authentication and account storage, RevenueCat for subscription state, and Apple for sign-in and payments. They act on our instructions and are contractually bound to protect your data.",
              "Where any of them processes data outside the European Economic Area, the transfer relies on the European Commission's Standard Contractual Clauses or an adequacy decision.",
            ],
          },
          {
            heading: "7. What we do not do",
            body: [
              "We do not sell your personal data. We do not share it with advertisers or data brokers. We do not use third-party advertising or tracking SDKs, and we do not build a profile of you for advertising purposes. We do not collect your location, contacts, photos, microphone, or camera.",
            ],
          },
          {
            heading: "8. How long we keep it",
            body: [
              "Account data is kept while your account exists. Delete your account from Settings and we delete it, along with your Firestore record, within 30 days — except where law requires us to keep billing records longer. Diagnostics are kept for up to 12 months. On-device data disappears the moment you delete the App.",
            ],
          },
          {
            heading: "9. Your rights",
            body: [
              "If you are in the EEA or the UK you can access your data, correct it, delete it, restrict or object to its processing, and request a portable copy. Email privacidad@acadeller.com and we will respond within one month.",
              "Note that we cannot give you a copy of your Screen Time data, because we never had it — that data is yours alone and stays on your device. You can also revoke Screen Time access at any time in iOS Settings, and you can file a complaint with your supervisory authority; in Spain that is the Agencia Española de Protección de Datos (aepd.es).",
            ],
          },
          {
            heading: "10. Children",
            body: [
              "Spark requests Screen Time authorization for an individual device, not as a parental-control tool for someone else's device. It is not directed at children under 14 and we do not knowingly collect their personal data. If you believe a child has given us data, contact us and we will delete it.",
            ],
          },
          {
            heading: "11. Security",
            body: [
              "Data in transit is encrypted, access to account data is restricted internally, and credentials are held in the iOS keychain. No system is perfect; if a breach affects your data and poses a risk to you, we will notify you and the relevant authority as the law requires.",
            ],
          },
          {
            heading: "12. Changes to this policy",
            body: [
              "If we change anything material — especially anything that would change section 2 — we will update the date above and tell you in the App or by email before it takes effect.",
            ],
          },
        ],
        contactHeading: "Contact",
        contactBody:
          "Questions about your data? Write to privacidad@acadeller.com and a human will answer.",
      },
      terms: {
        title: "Terms of Service",
        updatedLabel: "Last updated",
        updated: "September 23, 2026",
        intro:
          "These Terms govern your use of Acadeller Spark, an iOS app operated by Acadeller. By creating an account or using the App, you agree to them. They are short on purpose — please read them.",
        sections: [
          {
            heading: "1. What Spark is",
            body: [
              "Spark helps you notice and reduce how much you use your phone. It shows your own Screen Time back to you as a score and a character, lets you shield apps you choose, and runs timed focus sessions.",
              "Spark is not a medical device, a therapy, or a treatment. It does not diagnose or treat addiction or any other condition. If your phone use is causing you real distress, please talk to a qualified professional.",
            ],
          },
          {
            heading: "2. Your account",
            body: [
              "You sign in with Apple or Google. Keep your credentials to yourself, and tell us promptly if you think someone else has access — you are responsible for activity under your account.",
              "You must be at least 14 to create an account. If you are under 18, you confirm a parent or guardian agrees to these Terms on your behalf.",
            ],
          },
          {
            heading: "3. Screen Time permission and app shields",
            body: [
              "Spark needs Apple's Screen Time authorization to read your usage and to shield apps. You grant it, and you can revoke it at any time in iOS Settings — doing so turns off scores and blocking.",
              "Shields are a friction tool, not a security control. iOS lets you revoke permission, change your selection, or delete the App at any moment, and Apple may change these frameworks. Do not rely on Spark to block anything where failure would actually matter — for safety, compliance, or supervising another person.",
            ],
          },
          {
            heading: "4. Subscriptions and payment",
            body: [
              "Some features require a paid subscription. Prices and billing periods are shown before you buy. Purchases are processed by Apple through the App Store; we never handle your payment details.",
              "Subscriptions renew automatically until you cancel. Cancel any time in your Apple ID settings; it takes effect at the end of the current period. Refunds follow Apple's App Store policy. If you are a consumer in the EU you also have a 14-day right of withdrawal from the date of purchase.",
            ],
          },
          {
            heading: "5. What you may not do",
            body: ["Use Spark to build a better phone habit. Do not:"],
            bullets: [
              "Use it to monitor or restrict another person's device without their knowledge and consent.",
              "Reverse engineer, scrape, or try to disrupt or overload the service.",
              "Copy, resell, or redistribute the App or its artwork and content.",
              "Share your account, or use it in any way that breaks the law or infringes someone's rights.",
            ],
          },
          {
            heading: "6. Our content",
            body: [
              "The App, the Spark character and artwork, the designs, and the software belong to Acadeller or our licensors. You get a personal, non-transferable, non-exclusive licence to use them while your account is active. Everything not expressly granted is reserved.",
            ],
          },
          {
            heading: "7. Your data",
            body: [
              "Your usage data stays on your device — see the Privacy Policy for the detail. We do not claim any ownership of it, and deleting the App removes it.",
            ],
          },
          {
            heading: "8. Availability and changes",
            body: [
              "We work to keep Spark available and accurate, but we do not promise uninterrupted service, and features that depend on Apple's frameworks may change when Apple changes them. We may add, change, or remove features, and we may update these Terms; for material changes we will give reasonable notice, and continuing to use the App means you accept them.",
            ],
          },
          {
            heading: "9. Suspension and termination",
            body: [
              "You can stop using Spark and delete your account at any time from Settings. We may suspend or close an account that breaches these Terms, with notice where it is reasonable to give it. If we close your account without cause, we will refund any unused prepaid period.",
            ],
          },
          {
            heading: "10. Disclaimers and liability",
            body: [
              "The App is provided \"as is\". Scores, trends, and projections are estimates meant to inform, not exact measurements, and we do not guarantee any particular change in your habits or wellbeing.",
              "To the extent the law allows, we are not liable for indirect or consequential loss, and our total liability is limited to what you paid us in the 12 months before the claim. Nothing here limits liability that cannot legally be limited, including your statutory rights as a consumer.",
            ],
          },
          {
            heading: "11. Governing law",
            body: [
              "These Terms are governed by Spanish law, and disputes go to the courts of Spain — except that as a consumer you may also bring proceedings in the courts of your country of residence.",
            ],
          },
        ],
        contactHeading: "Contact",
        contactBody:
          "Questions about these Terms? Write to legal@acadeller.com.",
      },
    },
  },
  es: {
    nav: ["Trabajos", "Servicios", "Proceso", "Contacto"],
    cta: "Empezar proyecto",
    eyebrow: "Disponible · Q3 2026",
    heroLead: "Software diseñado",
    heroAccent: "para cómo trabajas.",
    heroSub: "Acadeller es un estudio de software que convierte ideas ambiciosas en producto real — plataformas web, apps móviles y herramientas de IA, construidas de principio a fin por un equipo pequeño de ingenieros y diseñadores.",
    marquee: ["Estudio de software", "Diseño de producto", "Plataformas web", "Apps móviles", "IA y automatización", "Consultoría técnica"],
    servNo: "01 / Servicios",
    servH: ["Qué hacemos, ", "en cinco trazos."],
    services: [
      ["Diseño de producto", "Del boceto al spec — flujos, prototipos y design systems con un handoff limpio."],
      ["Plataformas web", "Webs, dashboards y SaaS — rápido, accesible, listo para escalar."],
      ["Apps móviles", "iOS y Android nativo, o cross-platform cuando tiene sentido. Publicado en las stores."],
      ["IA y automatización", "Agentes LLM, escáneres con visión, copilotos internos — IA práctica en semanas, no trimestres."],
      ["Consultoría técnica", "Auditorías de arquitectura, estrategia técnica y refuerzo de equipos cuando lo necesitas."],
    ],
    workNo: "02 / Trabajos destacados",
    workH: ["Dos envíos ", "recientes."],
    feectory: {
      tag: "Destacado",
      type: "Web · Plataforma B2B",
      year: "2026",
      title: "Feectory",
      desc: "Una plataforma B2B que diseñamos y construimos desde cero — onboarding, dashboards, facturación, todo.",
      kv: [["Rol", "Diseño + Build"], ["Stack", "Next.js · Postgres"], ["Plazo", "14 semanas"], ["Estado", "Live"]],
      link: "feectory.com",
      linkUrl: "https://feectory.com",
    },
    nika: {
      tag: "Nuevo",
      type: "Móvil · IA",
      year: "2026",
      title: "Nika TCG Scanner",
      desc: "Reconocimiento de cartas One Piece TCG en tiempo real para iOS. Apunta la cámara, obtén la carta, el precio y tu colección actualizada — todo en el dispositivo.",
      kv: [["Rol", "Diseño + Build"], ["Stack", "Swift · CoreML"], ["Plataforma", "iOS"], ["Estado", "App Store"]],
      link: "App Store →",
      linkUrl: "https://apps.apple.com/es/app/nika-tcg-optcg-scanner/id6758277197",
    },
    procNo: "03 / Proceso",
    procH: ["Cómo ", "trabajamos."],
    process: [
      ["01", "Descubrir", "Escuchar, auditar y enmarcar el problema antes de tocar un pixel."],
      ["02", "Diseñar", "Wireframes, luego hi-fi, luego demos vivas. Decisiones en una semana."],
      ["03", "Construir", "Entregar por partes. Releases semanales. Ves progreso cada viernes."],
      ["04", "Escalar", "Medir, iterar y entregar con documentación que no miente."],
    ],
    ctaEyebrow: "Contacto",
    ctaH: ["Construyamos algo ", "juntos."],
    ctaSub: "¿Tienes un proyecto en mente? Envíanos un brief y te responderemos en un día laborable.",
    ctaMail: "contacto@acadeller.com",
    footTag: "Un estudio de software pequeño que construye productos cuidados para equipos ambiciosos.",
    footLinks: "Enlaces",
    footLinksList: [
      ["Inicio", "/"],
      ["Spark", "/app"],
      ["Blog", "/blog"],
      ["Contacto", "/contacto"],
      ["Privacidad Spark", "/app/privacy"],
      ["Términos Spark", "/app/terms"],
    ],
    footServ: "Servicios",
    footSocial: "Encuéntranos",
    footMeta: "© 2026 Acadeller · Hecho en España",
    seeWork: "Ver trabajos",
    blog: {
      title: "Blog",
      home: "Inicio",
      authors: "Autores",
      authorPosts: "Artículos",
      articlesByAuthor: "Artículos de este autor",
      categories: "Categorías",
      tags: "Tags",
      readMore: "Leer más",
      relatedPosts: "Posts relacionados",
      share: "Compartir",
      previous: "Anterior",
      next: "Siguiente",
    },
    app: {
      name: "Acadeller Spark",
      tagline: "Tu tiempo de pantalla, con cara.",
      eyebrow: "Nuevo · iOS · Tiempo de uso",
      heroLead: "Este es Spark.",
      heroAccent: "Tu hábito, a la vista.",
      heroSub: "Spark es una bombilla que vive en tu iPhone y refleja cómo lo usas de verdad. Cuanto más scroll, más se apaga. Pon límites, lanza una sesión de Carga y mírala encenderse otra vez.",
      heroImageAlt: "Spark, una bombilla sonriente, de pie en un salón cálido",
      ctaPrimary: "Consigue acceso anticipado",
      ctaSecondary: "Hablemos",
      featNo: "01 / Qué incluye",
      featH: ["Cuatro pantallas. ", "Un hábito."],
      features: [
        ["Spark Score", "Un número del 0 al 100 para tu día. Empieza en 100, baja según el tiempo de pantalla pasa de dos horas, y se resiente un poco con cada vez que desbloqueas."],
        ["Límites", "Elige las apps, categorías y webs que te comen el día y bloquéalas. Se quedan en silencio hasta que tú digas."],
        ["Carga", "Una sesión de foco con temporizador. Las apps que elijas siguen bloqueadas hasta que acabe — aunque Spark ya no esté abierta."],
        ["Viaje", "Tu tendencia de siete días, tus apps más pesadas y un calendario con cada día que completaste una Carga. Con rachas."],
      ],
      howNo: "02 / Cómo funciona",
      howH: ["Tres pasos, ", "y ya va solo."],
      how: [
        ["01", "Permite Tiempo de uso", "Un toque le da a Spark acceso de lectura a tu propio uso a través de Tiempo de uso de Apple. Sin perfiles que instalar, sin VPN, sin dar tu cuenta."],
        ["02", "Elige qué silenciar", "Escoge apps, categorías o webs una vez. Spark reutiliza esa selección para Límites y para Carga, así que solo lo decides una vez."],
        ["03", "Mira cómo reacciona", "El ánimo de Spark sigue tu día — brillante, agobiada, sin energía, fundida. Una sesión de Carga es como la recuperas."],
      ],
      privacyNo: "03 / Privacidad",
      privacyH: ["Tu uso nunca ", "sale del móvil."],
      privacyPoints: [
        ["Se calcula en tu dispositivo", "Tu tiempo de pantalla se mide dentro de la extensión aislada de Apple. Los datos en bruto nunca llegan a nosotros — lo garantiza el propio framework de Apple, así que no es solo una promesa nuestra."],
        ["No vemos tus apps", "Tu selección se guarda como tokens opacos del sistema en tu dispositivo. Ni siquiera nosotros sabemos qué apps bloqueaste."],
        ["Solo sale tu cuenta", "Nombre, correo y si tu suscripción está activa. Esa es la lista completa."],
      ],
      ctaEyebrow: "Acceso anticipado",
      ctaH: ["¿Quieres Spark ", "en tu móvil?"],
      ctaSub: "Spark está en desarrollo activo para iOS. Escríbenos y te añadimos a la lista de acceso anticipado.",
      backToSite: "← Volver a Acadeller",
      legalNav: "Legal",
      privacyLabel: "Política de Privacidad",
      termsLabel: "Términos del Servicio",
      privacy: {
        title: "Política de Privacidad",
        updatedLabel: "Última actualización",
        updated: "23 de septiembre de 2026",
        intro:
          "Spark es una app de tiempo de pantalla, así que todo depende de cómo trate tus datos. Esta política explica exactamente qué se queda en tu iPhone, qué nos llega a nosotros y qué puedes hacer al respecto. La versión corta: tus datos de uso nunca salen de tu dispositivo.",
        sections: [
          {
            heading: "1. Quiénes somos",
            body: [
              "Acadeller Spark (la \"App\") está desarrollada y operada por Acadeller (\"nosotros\"), con sede en España. Para cualquier tema sobre esta política o tus datos, escribe a privacidad@acadeller.com.",
              "Según el Reglamento General de Protección de Datos (RGPD), somos el responsable del tratamiento de los datos personales limitados que se describen en la sección 4.",
            ],
          },
          {
            heading: "2. Tus datos de Tiempo de uso se quedan en tu dispositivo",
            body: [
              "Spark pide acceso a Tiempo de uso mediante el framework Family Controls de Apple, solo para tu propio dispositivo. Una vez lo concedes, tu uso — tiempo por app, desbloqueos, categorías — se lee y se convierte en tu Spark Score, tus apps más usadas y tu tendencia de siete días dentro de una extensión aislada de Apple que se ejecuta en tu iPhone.",
              "El framework de Apple no permite que esa extensión devuelva tus registros de uso en bruto a la app principal, y nosotros no intentamos sortearlo. Nunca recibimos, almacenamos ni transmitimos tu tiempo de pantalla, tus desbloqueos ni los nombres de las apps que usas. Lo impone el sistema operativo, no solo nuestra política.",
            ],
          },
          {
            heading: "3. Qué se guarda solo en tu iPhone",
            body: [
              "Lo siguiente nunca sale de tu dispositivo. Vive en almacenamiento local y en un grupo de apps privado, y se elimina cuando borras la App:",
            ],
            bullets: [
              "Tu selección de apps, categorías y webs — guardada como tokens opacos del sistema. No significan nada fuera de tu dispositivo, y ni nosotros podemos saber a qué apps se refieren.",
              "Tu historial de foco — los minutos de Carga que completaste, registrados por día natural para dibujar tu calendario de Viaje y tu racha.",
              "Tus respuestas del onboarding, incluida tu estimación de uso diario.",
              "Tus Límites activos y la hora de fin de cualquier Carga en curso.",
            ],
          },
          {
            heading: "4. Qué sí recibimos",
            body: ["Una lista deliberadamente corta, y solo cuando hace falta:"],
            bullets: [
              "Datos de cuenta — al iniciar sesión con Apple o Google recibimos un identificador de usuario, tu nombre visible y tu correo. Se guardan en nuestro proyecto de Firebase para que puedas volver a entrar y recuperar tu suscripción. Si usas Ocultar mi correo de Apple, solo vemos la dirección de reenvío.",
              "Estado de la suscripción — si tu acceso premium está activo, gestionado por RevenueCat sobre la App Store de Apple. Nunca vemos los datos de tu tarjeta; Apple procesa todos los pagos.",
              "Diagnósticos — informes de fallos y errores, para poder corregirlos. No contienen datos de Tiempo de uso.",
              "Mensajes de soporte — lo que nos envías al contactar, conservado para poder responderte.",
            ],
          },
          {
            heading: "5. Por qué lo tratamos y con qué base legal",
            body: ["Cada finalidad tiene una base legal según el RGPD:"],
            bullets: [
              "Gestionar tu cuenta y restaurar tu suscripción — ejecución del contrato contigo.",
              "Corregir fallos y mantener la App fiable — nuestro interés legítimo en un producto que funcione.",
              "Correos de servicio sobre tu cuenta o cambios importantes — ejecución del contrato.",
              "Novedades de producto o comunicaciones comerciales — tu consentimiento, que puedes retirar cuando quieras.",
            ],
          },
          {
            heading: "6. Quién trata datos por nosotros",
            body: [
              "Mantenemos la lista corta: Google Firebase para autenticación y almacenamiento de cuentas, RevenueCat para el estado de la suscripción y Apple para el inicio de sesión y los pagos. Actúan siguiendo nuestras instrucciones y están obligados por contrato a proteger tus datos.",
              "Cuando alguno trata datos fuera del Espacio Económico Europeo, la transferencia se ampara en las Cláusulas Contractuales Tipo de la Comisión Europea o en una decisión de adecuación.",
            ],
          },
          {
            heading: "7. Qué no hacemos",
            body: [
              "No vendemos tus datos personales. No los compartimos con anunciantes ni intermediarios de datos. No usamos SDKs de publicidad o rastreo de terceros y no construimos un perfil tuyo con fines publicitarios. No recogemos tu ubicación, contactos, fotos, micrófono ni cámara.",
            ],
          },
          {
            heading: "8. Cuánto tiempo lo conservamos",
            body: [
              "Los datos de cuenta se conservan mientras exista tu cuenta. Elimínala desde Ajustes y la borramos, junto con tu registro en Firestore, en un plazo de 30 días — salvo que la ley nos obligue a conservar registros de facturación más tiempo. Los diagnósticos se guardan hasta 12 meses. Los datos del dispositivo desaparecen en cuanto borras la App.",
            ],
          },
          {
            heading: "9. Tus derechos",
            body: [
              "Si estás en el EEE o el Reino Unido puedes acceder a tus datos, rectificarlos, suprimirlos, limitar u oponerte a su tratamiento y pedir una copia portable. Escribe a privacidad@acadeller.com y responderemos en el plazo de un mes.",
              "Ten en cuenta que no podemos darte una copia de tus datos de Tiempo de uso, porque nunca los hemos tenido — esos datos son solo tuyos y se quedan en tu dispositivo. También puedes revocar el acceso a Tiempo de uso cuando quieras desde los Ajustes de iOS, y puedes reclamar ante tu autoridad de control; en España, la Agencia Española de Protección de Datos (aepd.es).",
            ],
          },
          {
            heading: "10. Menores",
            body: [
              "Spark solicita la autorización de Tiempo de uso para un dispositivo individual, no como herramienta de control parental sobre el dispositivo de otra persona. No está dirigida a menores de 14 años y no recogemos conscientemente sus datos personales. Si crees que un menor nos ha dado datos, contáctanos y los eliminaremos.",
            ],
          },
          {
            heading: "11. Seguridad",
            body: [
              "Los datos en tránsito van cifrados, el acceso interno a los datos de cuenta está restringido y las credenciales se guardan en el llavero de iOS. Ningún sistema es perfecto; si una brecha afecta a tus datos y supone un riesgo para ti, te lo notificaremos a ti y a la autoridad correspondiente como exige la ley.",
            ],
          },
          {
            heading: "12. Cambios en esta política",
            body: [
              "Si cambiamos algo relevante — especialmente algo que afecte a la sección 2 — actualizaremos la fecha de arriba y te avisaremos en la App o por correo antes de que entre en vigor.",
            ],
          },
        ],
        contactHeading: "Contacto",
        contactBody:
          "¿Dudas sobre tus datos? Escribe a privacidad@acadeller.com y te responderá una persona.",
      },
      terms: {
        title: "Términos del Servicio",
        updatedLabel: "Última actualización",
        updated: "23 de septiembre de 2026",
        intro:
          "Estos Términos regulan el uso de Acadeller Spark, una app de iOS operada por Acadeller. Al crear una cuenta o usar la App, los aceptas. Son cortos a propósito — léelos.",
        sections: [
          {
            heading: "1. Qué es Spark",
            body: [
              "Spark te ayuda a ver y reducir cuánto usas el móvil. Te devuelve tu propio Tiempo de uso en forma de puntuación y de personaje, te deja bloquear las apps que elijas y ejecuta sesiones de foco con temporizador.",
              "Spark no es un producto sanitario, ni una terapia, ni un tratamiento. No diagnostica ni trata adicciones ni ninguna otra condición. Si el uso del móvil te está causando malestar real, habla con un profesional cualificado.",
            ],
          },
          {
            heading: "2. Tu cuenta",
            body: [
              "Inicias sesión con Apple o Google. Guarda tus credenciales y avísanos cuanto antes si crees que alguien más tiene acceso — eres responsable de la actividad de tu cuenta.",
              "Debes tener al menos 14 años para crear una cuenta. Si eres menor de 18, confirmas que un padre, madre o tutor acepta estos Términos en tu nombre.",
            ],
          },
          {
            heading: "3. Permiso de Tiempo de uso y bloqueos",
            body: [
              "Spark necesita la autorización de Tiempo de uso de Apple para leer tu uso y bloquear apps. Tú la concedes y puedes revocarla cuando quieras desde los Ajustes de iOS — al hacerlo se desactivan las puntuaciones y los bloqueos.",
              "Los bloqueos son una herramienta de fricción, no un control de seguridad. iOS te permite revocar el permiso, cambiar tu selección o borrar la App en cualquier momento, y Apple puede cambiar estos frameworks. No confíes en Spark para bloquear nada cuyo fallo importe de verdad — por seguridad, por cumplimiento normativo o para supervisar a otra persona.",
            ],
          },
          {
            heading: "4. Suscripciones y pago",
            body: [
              "Algunas funciones requieren una suscripción de pago. Los precios y periodos de facturación se muestran antes de comprar. Las compras las procesa Apple a través de la App Store; nosotros nunca gestionamos los datos de tu método de pago.",
              "Las suscripciones se renuevan automáticamente hasta que canceles. Puedes cancelar cuando quieras desde los ajustes de tu Apple ID; surte efecto al final del periodo en curso. Los reembolsos siguen la política de la App Store de Apple. Si eres consumidor en la UE, dispones además de 14 días de derecho de desistimiento desde la compra.",
            ],
          },
          {
            heading: "5. Qué no puedes hacer",
            body: ["Usa Spark para mejorar tu relación con el móvil. No lo uses para:"],
            bullets: [
              "Monitorizar o restringir el dispositivo de otra persona sin su conocimiento y consentimiento.",
              "Hacer ingeniería inversa, scraping o intentar interrumpir o sobrecargar el servicio.",
              "Copiar, revender o redistribuir la App, sus ilustraciones o su contenido.",
              "Compartir tu cuenta, o usarla de forma que infrinja la ley o los derechos de terceros.",
            ],
          },
          {
            heading: "6. Nuestro contenido",
            body: [
              "La App, el personaje de Spark y sus ilustraciones, los diseños y el software pertenecen a Acadeller o a nuestros licenciantes. Obtienes una licencia personal, intransferible y no exclusiva para usarlos mientras tu cuenta esté activa. Todo lo no concedido expresamente queda reservado.",
            ],
          },
          {
            heading: "7. Tus datos",
            body: [
              "Tus datos de uso se quedan en tu dispositivo — el detalle está en la Política de Privacidad. No reclamamos ninguna propiedad sobre ellos, y borrar la App los elimina.",
            ],
          },
          {
            heading: "8. Disponibilidad y cambios",
            body: [
              "Trabajamos para mantener Spark disponible y precisa, pero no garantizamos un servicio ininterrumpido, y las funciones que dependen de los frameworks de Apple pueden cambiar cuando Apple los cambie. Podemos añadir, modificar o retirar funciones, y podemos actualizar estos Términos; en cambios relevantes avisaremos con antelación razonable, y seguir usando la App implica que los aceptas.",
            ],
          },
          {
            heading: "9. Suspensión y terminación",
            body: [
              "Puedes dejar de usar Spark y eliminar tu cuenta cuando quieras desde Ajustes. Podemos suspender o cerrar una cuenta que incumpla estos Términos, con aviso previo cuando sea razonable darlo. Si cerramos tu cuenta sin causa, te reembolsaremos el periodo prepagado no consumido.",
            ],
          },
          {
            heading: "10. Garantías y responsabilidad",
            body: [
              "La App se ofrece \"tal cual\". Las puntuaciones, tendencias y proyecciones son estimaciones para informarte, no medidas exactas, y no garantizamos ningún cambio concreto en tus hábitos ni en tu bienestar.",
              "En la medida en que la ley lo permita, no respondemos de daños indirectos o consecuenciales, y nuestra responsabilidad total se limita a lo que nos hayas pagado en los 12 meses anteriores a la reclamación. Nada de esto limita la responsabilidad que legalmente no puede limitarse, incluidos tus derechos como consumidor.",
            ],
          },
          {
            heading: "11. Ley aplicable",
            body: [
              "Estos Términos se rigen por la ley española y los litigios se someten a los tribunales de España — si bien, como consumidor, también puedes acudir a los tribunales de tu país de residencia.",
            ],
          },
        ],
        contactHeading: "Contacto",
        contactBody:
          "¿Dudas sobre estos Términos? Escribe a legal@acadeller.com.",
      },
    },
  }
};

export const SOCIALS = [
  ["Instagram", "https://www.instagram.com/acadeller"],
  ["TikTok", "https://www.tiktok.com/@acadeller"],
  ["LinkedIn", "https://www.linkedin.com/company/acadeller"],
  ["GitHub", "https://www.github.com/acadeller"],
  ["X / Twitter", "https://x.com/acadeller"],
] as const;

export function getContent(lang: Lang): LandingContent {
  return content[lang];
}
