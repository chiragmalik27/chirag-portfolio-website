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
    id: "ai-rag-solutions",
    title: "Enterprise AI & Autonomous RAG Systems",
    tagline: "Grounded semantic search, custom vector pipelines, and autonomous agent systems.",
    description:
      "We design and deploy production-grade AI systems connected directly to your enterprise knowledge base. From low-latency vector retrieval to autonomous multi-agent workflows, we eliminate hallucinations and streamline complex operations.",
    deliverables: [
      "Custom RAG search across structured databases, docs & APIs",
      "Sub-150ms hybrid vector search (Pinecone, Qdrant, pgvector)",
      "Multi-agent autonomous workflows with deterministic tool calling",
      "Enterprise security, RBAC permissions & data compliance"
    ]
  },
  {
    id: "custom-web-apps",
    title: "Full-Stack Web & Next.js Platforms",
    tagline: "Ultra-fast, responsive web applications engineered for scalability and conversion.",
    description:
      "We build mission-critical web applications with clean Next.js App Router architecture, TypeScript, and modern design systems. Every application is optimized for sub-second page loads, SEO dominance, and effortless user journeys.",
    deliverables: [
      "Sub-second load times & 99+ Google Lighthouse scores",
      "Fluid, responsive UI with accessible design system components",
      "Serverless Edge computing & global CDN caching",
      "Scalable database modeling (PostgreSQL, MongoDB, Redis)"
    ]
  },
  {
    id: "cloud-architecture",
    title: "High-Throughput Backends & Cloud APIs",
    tagline: "Resilient microservices, streaming endpoints, and high-concurrency infrastructure.",
    description:
      "Whether powering real-time chat, transactional fintech, or high-volume data streams, we build resilient backends that scale without downtime. Our systems handle high concurrency with predictable latency.",
    deliverables: [
      "High-throughput RESTful & GraphQL microservices",
      "Real-time event streaming & WebSocket pub/sub architecture",
      "Zero-downtime CI/CD deployment pipelines (AWS, Vercel, GCP)",
      "Comprehensive end-to-end telemetry, logging & monitoring"
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
