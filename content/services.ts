export interface Service {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
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
    id: "enterprise-platforms",
    number: "01",
    title: "Enterprise Platforms",
    tagline: "Scalable web applications engineered for mission-critical operations and conversion.",
    description:
      "We architect scalable, high-performance web applications tailored to complex business requirements. Built with Next.js App Router, TypeScript, and modern design systems for sub-second load times.",
    image: "/service-1.png",
    deliverables: [
      "Next.js App Router & Serverless Edge architecture",
      "Sub-second page loads & 99+ Lighthouse performance",
      "Robust relational & document database modeling",
      "Enterprise security, RBAC & SOC-2 compliance readiness"
    ]
  },
  {
    id: "native-mobile-apps",
    number: "02",
    title: "Native Mobile Apps",
    tagline: "Fluid, high-performance iOS and Android experiences with native responsiveness.",
    description:
      "Delivering premium mobile experiences for iOS and Android with fluid UI animations, offline-first architectures, and robust cloud integrations tailored for enterprise reliability.",
    image: "/service-2.png",
    deliverables: [
      "Cross-platform React Native & Flutter engineering",
      "60fps fluid micro-interactions & gestures",
      "Secure biometric authentication & local cache storage",
      "App Store & Google Play automated CI/CD pipelines"
    ]
  },
  {
    id: "saas-engineering",
    number: "03",
    title: "SaaS Engineering & AI Agents",
    tagline: "Autonomous multi-agent workflows, vector retrieval, and scalable revenue platforms.",
    description:
      "End-to-end product development helping founders take scalable revenue models from zero to one. We integrate autonomous AI workflows, vector search pipelines, and seamless subscription billing.",
    image: "/service-3.png",
    deliverables: [
      "Custom RAG search across documents, databases & APIs",
      "Autonomous agent workflows with deterministic tool calling",
      "Stripe Billing, usage-based metering & customer portals",
      "Multi-tenant isolation & distributed cloud hosting"
    ]
  },
  {
    id: "cloud-ai-integration",
    number: "04",
    title: "Cloud & AI Integration",
    tagline: "Modernizing legacy systems and integrating cutting-edge AI workflows.",
    description:
      "Modernizing legacy systems and integrating cutting-edge AI workflows to future-proof your infrastructure. We construct low-latency inference pipelines, streaming APIs, and microservices.",
    image: "/service-4.png",
    deliverables: [
      "Sub-150ms hybrid vector search (Pinecone, Qdrant, pgvector)",
      "High-throughput RESTful & GraphQL microservices",
      "Real-time event streaming & WebSocket pub/sub infrastructure",
      "Zero-downtime CI/CD deployment pipelines (AWS, Vercel, GCP)"
    ]
  }
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Technical Discovery & Architecture",
    duration: "Week 1",
    description:
      "We analyze your product vision, system requirements, and scalability targets. We deliver an exact technical blueprint, database schema, and fixed-schedule milestone plan."
  },
  {
    step: 2,
    title: "Agile Sprints & Staging Previews",
    duration: "Weeks 2-4",
    description:
      "We build your software in transparent bi-weekly sprints. Your team receives working staging links, code reviews, and asynchronous updates at every step."
  },
  {
    step: 3,
    title: "Security Hardening & Production Launch",
    duration: "Week 5",
    description:
      "Rigorous end-to-end testing, Core Web Vitals audit, and seamless cloud deployment with comprehensive documentation and engineering handover."
  }
];
