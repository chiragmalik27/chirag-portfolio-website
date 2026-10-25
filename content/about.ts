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
    "I am a full-stack engineer and AI developer who bridges the gap between ambitious business ideas and polished, revenue-generating software.",
    "Rather than treating code as an end in itself, I focus on the client's bottom line: how quickly does the page load, how clear is the value proposition, and how frictionless is the journey from visitor to customer.",
    "Whether you need an enterprise AI search assistant powered by custom RAG pipelines or a high-converting web storefront, I bring technical rigor and clear, jargon-free communication to every milestone."
  ],
  principles: [
    {
      title: "Speed as a Feature",
      description: "Fast applications retain attention, rank higher on Google, and convert more visitors. Sub-second loads are non-negotiable."
    },
    {
      title: "Transparent Collaboration",
      description: "Direct access, asynchronous updates, and working preview links. No disappearing acts or unexpected invoices."
    },
    {
      title: "Real Business Outcomes",
      description: "Code exists to solve problems. Every technical choice is measured against its business impact."
    }
  ],
  quickStats: [
    { label: "Core Focus", value: "Next.js & AI/RAG" },
    { label: "Primary Timezone", value: "IST (UTC+5:30) / Global Overlap" },
    { label: "Availability", value: "Open for Q1/Q2 Engagements" }
  ]
};
