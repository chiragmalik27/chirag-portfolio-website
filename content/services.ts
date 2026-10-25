export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface ProcessStep {
  step: number;
  title: string;
  duration: string;
  description: string;
}

export const services: Service[] = [
  {
    id: "custom-web-apps",
    title: "High-Speed Websites & Web Apps",
    tagline: "Websites that load under 1 second and convert visitors into paying clients.",
    description:
      "I design and build tailored web applications with clean code, responsive layouts, and zero bloat. Every page is built to look incredible and turn casual visitors into inbound leads.",
    deliverables: [
      "Sub-second load times & 95+ Google Lighthouse scores",
      "Seamless mobile responsiveness across all devices",
      "Clean content architecture your team can maintain"
    ]
  },
  {
    id: "ai-rag-solutions",
    title: "AI Solutions & Custom RAG Systems",
    tagline: "Grounded AI search assistants connected directly to your company's data.",
    description:
      "Cut down repetitive internal research and customer support workloads. I build custom Retrieval-Augmented Generation (RAG) assistants that answer questions accurately with exact document citations.",
    deliverables: [
      "Custom knowledge search across PDFs, docs & databases",
      "Zero-hallucination pipelines with source citations",
      "Secure, private enterprise-grade integrations"
    ]
  },
  {
    id: "revamp-optimization",
    title: "Performance & Conversion Optimization",
    tagline: "Revitalize outdated, slow, or low-converting digital touchpoints.",
    description:
      "Is your current website clunky or leaking sales? I audit, refactor, and modernize your digital presence to dramatically elevate speed, aesthetic trust, and conversion rates.",
    deliverables: [
      "Full performance & accessibility audit",
      "Core Web Vitals & mobile UX overhaul",
      "Modern design upgrade with seamless brand alignment"
    ]
  }
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery & Scope",
    duration: "Week 1",
    description:
      "We clarify your business goals, target clients, and key metrics. No jargon — just clear deliverables, exact timelines, and fixed scope."
  },
  {
    step: 2,
    title: "Architecture & Iterative Build",
    duration: "Weeks 2-4",
    description:
      "I build your application in transparent, bite-sized stages with live staging links, incorporating your direct feedback at each checkpoint."
  },
  {
    step: 3,
    title: "Testing, Launch & Handover",
    duration: "Week 5",
    description:
      "Rigorous cross-device testing, SEO optimization, and live deployment with a walkthrough video and complete documentation."
  }
];
