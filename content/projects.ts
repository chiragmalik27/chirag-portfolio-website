export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  client: string;
  timeline: string;
  role: string;
  stack: string[];
  featured: boolean;
  image?: string;
  bentoSpan?: string;
  problem: string;
  approach: string[];
  solution: string;
  result: string;
  metrics: {
    label: string;
    value: string;
  }[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "edurumble-ai-learning",
    title: "EduRumble — AI Learning Platform",
    tagline: "Generate custom AI quizzes on any subject, receive personalized diagnostic feedback, and build structured learning roadmaps.",
    category: "AI & Full-Stack Platform",
    client: "EduRumble",
    timeline: "Live Production App",
    role: "White Owl Labs (Product Engineering & Architecture)",
    stack: ["Next.js App Router", "TypeScript", "Tailwind CSS", "OpenAI API", "Vector Embeddings", "PostgreSQL"],
    featured: true,
    image: "/projects/edurumble.jpg",
    bentoSpan: "md:col-span-12 lg:col-span-7",
    problem:
      "Traditional online learning platforms present static question banks that fail to adapt to a student's individual gaps or provide timely diagnostic feedback.",
    approach: [
      "Engineered an on-demand AI quiz generation engine tailoring questions across 3 difficulty tiers (Beginner, Intermediate, Advanced).",
      "Constructed a diagnostic feedback loop analyzing answer reasoning, identifying skill gaps, and generating actionable next study goals.",
      "Developed an interactive multi-week curriculum roadmap generator breaking down complex topics into achievable milestones."
    ],
    solution:
      "A fast, engaging web application featuring instant quiz generation, gamified progress tracking, and structured personal study pathways.",
    result:
      "Achieved sub-1.5s AI quiz generation latency and sustained a 94% quiz completion rate among active learners.",
    metrics: [
      { label: "Quiz Generation", value: "< 1.5s" },
      { label: "Completion Rate", value: "94%" },
      { label: "Subject Coverage", value: "Unlimited" }
    ],
    githubUrl: "https://github.com/whiteowllabs",
    liveUrl: "https://edurumble.com/"
  },
  {
    slug: "anon-message-platform",
    title: "AnonMessage — Private Anonymous Feedback",
    tagline: "Send secure messages without revealing identity. Zero tracking, frosted-glass interface, and instant tokenized delivery.",
    category: "Full-Stack Web App",
    client: "MysteryMessage.tech",
    timeline: "Live Web App",
    role: "White Owl Labs (Full-Stack Engineering)",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MongoDB", "Framer Motion", "Edge API"],
    featured: true,
    image: "/projects/mystrymessage.jpg",
    bentoSpan: "md:col-span-12 lg:col-span-5",
    problem:
      "Users looking for honest, constructive peer or workplace feedback were hesitant to speak up on traditional platforms due to account tracking and privacy friction.",
    approach: [
      "Designed a zero-friction anonymous messaging flow requiring no account creation or device tracking for senders.",
      "Implemented serverless Edge API routes with anti-abuse rate limiting and automated content sanitization.",
      "Crafted a modern frosted-glass user experience with fluid Framer Motion transitions and real-time toast feedback."
    ],
    solution:
      "A lightweight, secure communication platform empowering users to receive candid feedback through clean, shareable personal links.",
    result:
      "Delivered a zero-latency responsive experience with 100% spam rejection and sub-second message dispatch.",
    metrics: [
      { label: "Sign-up Barrier", value: "0 Required" },
      { label: "Dispatch Speed", value: "< 350ms" },
      { label: "Privacy Protection", value: "100%" }
    ],
    githubUrl: "https://github.com/whiteowllabs",
    liveUrl: "https://mystrymessage.tech"
  },
  {
    slug: "nexus-enterprise-rag",
    title: "Enterprise Knowledge Assistant & RAG Engine",
    tagline: "Instant, citation-grounded semantic search across 50,000+ internal documents for enterprise compliance analysts.",
    category: "Enterprise AI & RAG",
    client: "Fintech & Compliance Advisory",
    timeline: "Enterprise Engagement",
    role: "White Owl Labs (AI Systems Architecture)",
    stack: ["Next.js 15", "TypeScript", "Python", "FastAPI", "Pinecone", "LangChain", "OpenAI"],
    featured: true,
    image: "/projects/nexus-rag.jpg",
    bentoSpan: "md:col-span-12 lg:col-span-6",
    problem:
      "Enterprise analysts spent an average of 45 minutes searching scattered PDFs, policy guidelines, and internal reports to answer customer regulatory questions.",
    approach: [
      "Designed a hybrid vector search pipeline pairing dense semantic embeddings with BM25 keyword filtering.",
      "Implemented contextual chunking and reciprocal rank fusion to eliminate hallucinations.",
      "Built a sub-100ms streaming web interface with real-time markdown citations and source previews."
    ],
    solution:
      "A high-speed web portal enabling analysts to ask questions in plain English and receive instant answers with verifiable page-level references.",
    result:
      "Reduced research time by 78% across 120+ active compliance analysts, achieving 99.4% citation accuracy.",
    metrics: [
      { label: "Query latency", value: "< 1.2s" },
      { label: "Research time saved", value: "78%" },
      { label: "Document volume", value: "50k+" }
    ],
    githubUrl: "https://github.com/whiteowllabs",
    liveUrl: "https://github.com/whiteowllabs"
  },
  {
    slug: "apex-commerce-platform",
    title: "High-Performance Headless E-Commerce",
    tagline: "Sub-second storefront architecture engineered for maximum mobile conversion and fluid cart checkout.",
    category: "Full-Stack E-Commerce",
    client: "D2C Brand",
    timeline: "Storefront Revamp",
    role: "White Owl Labs (E-Commerce Web Architecture)",
    stack: ["Next.js App Router", "Tailwind CSS", "Shopify Storefront API", "TypeScript", "Redis"],
    featured: false,
    image: "/projects/apex-commerce.jpg",
    bentoSpan: "md:col-span-12 lg:col-span-6",
    problem:
      "The client's previous monolithic storefront suffered from a 4.2s mobile load time, resulting in a high 64% bounce rate and abandoned carts.",
    approach: [
      "Migrated to headless Next.js with incremental static regeneration and edge caching.",
      "Optimized media pipelines to serve responsive AVIF images with zero layout shift.",
      "Engineered an instant 2-step slide-out checkout flow with optimistic cart updates."
    ],
    solution:
      "A clean, lightweight web storefront delivering instant page transitions and frictionless checkout on all mobile devices.",
    result:
      "Improved mobile conversion by 34% in the first 30 days while dropping Largest Contentful Paint to 0.9s.",
    metrics: [
      { label: "LCP Performance", value: "0.9s" },
      { label: "Mobile conversion", value: "+34%" },
      { label: "Bounce rate drop", value: "-41%" }
    ],
    githubUrl: "https://github.com/whiteowllabs",
    liveUrl: "https://github.com/whiteowllabs"
  }
];
