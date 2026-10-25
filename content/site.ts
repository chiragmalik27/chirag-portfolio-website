export interface SiteConfig {
  name: string;
  role: string;
  positioning: string;
  targetClients: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  contact: {
    email: string;
    whatsapp: string;
    whatsappUrl: string;
    linkedin: string;
    github: string;
  };
  navLinks: Array<{
    label: string;
    href: string;
  }>;
}

export const siteConfig: SiteConfig = {
  name: "Chirag Malik",
  role: "Full-stack developer / AI Solutions Engineer / RAG Models",
  positioning: "I build fast, clean websites for Business owners.",
  targetClients: "Startups, agencies, local businesses, international freelance clients",
  primaryCta: {
    label: "Book a call",
    href: "#contact",
  },
  secondaryCta: {
    label: "View work",
    href: "#work",
  },
  contact: {
    email: "chiragmalik0505@gmail.com",
    whatsapp: "+919501480672",
    whatsappUrl: "https://wa.me/919501480672",
    linkedin: "https://www.linkedin.com/in/chirag-malik-a9a859265/",
    github: "https://github.com/chiragmalik27",
  },
  navLinks: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};
