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
      desc: "A B2B platform we designed and built from zero — onboarding, dashboards, billing, the works. Replaced three spreadsheets and a Notion doc.",
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
      ["Blog", "/blog"],
      ["Contact", "/contacto"],
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
      desc: "Una plataforma B2B que diseñamos y construimos desde cero — onboarding, dashboards, facturación, todo. Reemplazó tres hojas de cálculo y un Notion.",
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
      ["Blog", "/blog"],
      ["Contacto", "/contacto"],
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
