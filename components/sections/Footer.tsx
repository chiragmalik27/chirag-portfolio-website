import React from "react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/content/site";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full border-t border-[var(--border)] bg-[var(--bg-elevated)]/50 py-12">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[var(--fg-muted)]">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <span className="font-display font-semibold text-[var(--fg)]">
              {siteConfig.name}
            </span>
            <span>© {currentYear} All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={siteConfig.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center hover:text-[var(--accent)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent)] rounded-sm"
              aria-label="LinkedIn Profile"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center hover:text-[var(--accent)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent)] rounded-sm"
              aria-label="GitHub Profile"
            >
              GitHub
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center hover:text-[var(--accent)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent)] rounded-sm"
              aria-label="Send direct email"
            >
              Email
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
