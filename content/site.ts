export interface SiteConfig {
  name: string;
  tagline: string;
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
    phone: string;
    phoneUrl: string;
    whatsapp: string;
    whatsappUrl: string;
    github: string;
  };
  navLinks: Array<{
    label: string;
    href: string;
  }>;
}

export const siteConfig: SiteConfig = {
  name: "White Owl Labs",
  tagline: "Software & AI Engineering Studio",
  role: "Software & AI Engineering Studio",
  positioning:
    "We architect mission-critical software, autonomous AI systems, and high-performance web applications for ambitious companies.",
  targetClients:
    "High-growth startups, scaleups, enterprise teams, and digital-first businesses",
  primaryCta: {
    label: "Start a Project",
    href: "#contact",
  },
  secondaryCta: {
    label: "Explore Work",
    href: "#work",
  },
  contact: {
    email: "hey@whiteowllabs.in",
    phone: "+91 7877832579",
    phoneUrl: "tel:+917877832579",
    whatsapp: "+917877832579",
    whatsappUrl: "https://wa.me/917877832579",
    github: "https://github.com/whiteowllabs",
  },
  navLinks: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};
