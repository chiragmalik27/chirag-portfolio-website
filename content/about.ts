export interface AboutData {
  bioParagraphs: string[];
  principles: {
    title: string;
    description: string;
  }[];
  quickStats: {
    label: string;
    value: string;
  }[];
}

export const aboutData: AboutData = {
  bioParagraphs: [
    "White Owl Labs is a multidisciplinary software and AI engineering studio. We partner with visionary founders, venture-backed startups, and enterprise teams to turn complex technical challenges into robust, production-ready software.",
    "Our studio combines deep expertise across distributed cloud architecture, autonomous AI agents, enterprise Retrieval-Augmented Generation (RAG), and high-conversion web engineering. We reject bureaucratic agency overhead in favor of agile, transparent, and battle-tested execution.",
    "From initial system design to live global deployment, we build high-speed systems engineered for resilience, sub-second latency, and measurable business impact."
  ],
  principles: [
    {
      title: "Sub-Second Performance",
      description: "Fast software drives revenue and conversion. We architect every system with sub-second response times, zero unnecessary bloat, and 99+ Core Web Vitals."
    },
    {
      title: "Production-Grade AI",
      description: "We don't build brittle prototypes. We design grounded, citation-verified AI systems and autonomous agent pipelines ready for mission-critical production."
    },
    {
      title: "Direct Engineering Access",
      description: "Direct collaboration with senior engineers, rapid milestone cycles, and live staging previews. Total transparency from kickoff to handover."
    }
  ],
  quickStats: [
    { label: "Studio Focus", value: "Enterprise AI & Scalable Web" },
    { label: "Headquarters", value: "India · Serving Global Clients" },
    { label: "Delivery Model", value: "Fixed-Scope & Dedicated Sprints" },
    { label: "Engineering SLA", value: "99.9% Uptime Guarantee" }
  ]
};
