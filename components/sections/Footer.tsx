import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/content/site";
import { Mail, Phone } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full bg-[var(--bg)] border-t border-[var(--border)] pt-16 pb-12 px-6 sm:px-12 lg:px-24">
      <Container>
        {/* Subtle accent divider */}
        <div className="mb-14 h-[1px] w-full bg-[#8B7355]/20 dark:bg-white/10" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-14 border-b border-[var(--border)]/70">
          {/* Col 1 & 2: Brand Logo & Mission */}
          <div className="md:col-span-5 flex flex-col items-start lg:pr-10">
            <Link href="/" className="inline-block group mb-6">
              <div className="relative h-10 w-44 flex items-center">
                <Image
                  src="/logo-horizontal-dark.png"
                  alt="White Owl Labs"
                  fill
                  className="hidden dark:block dark-logo object-contain object-left transition-transform duration-300 group-hover:scale-102"
                />
                <Image
                  src="/logo-horizontal-light.png"
                  alt="White Owl Labs"
                  fill
                  className="block dark:hidden light-logo object-contain object-left transition-transform duration-300 group-hover:scale-102"
                />
              </div>
            </Link>

            <p className="text-sm font-medium leading-relaxed text-[var(--fg-muted)] max-w-sm mb-6">
              A premium digital engineering studio crafting high-end, scalable web platforms, autonomous AI systems, and cloud architectures for modern enterprises.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-elevated)] border border-[var(--border)] text-xs font-mono text-[var(--fg-muted)]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Accepting New Engagements</span>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="md:col-span-3">
            <h4 className="mb-6 text-xs font-mono font-bold uppercase tracking-[0.2em] text-[var(--fg)]">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3.5 text-sm font-medium text-[var(--fg-muted)]">
              <li>
                <a href="#home" className="hover:text-[var(--accent)] dark:hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[var(--accent)] dark:hover:text-white transition-colors">
                  Capabilities &amp; Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[var(--accent)] dark:hover:text-white transition-colors">
                  Portfolio Showcase
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[var(--accent)] dark:hover:text-white transition-colors">
                  About Studio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[var(--accent)] dark:hover:text-white transition-colors">
                  Inquire
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Contact Channels */}
          <div className="md:col-span-4">
            <h4 className="mb-6 text-xs font-mono font-bold uppercase tracking-[0.2em] text-[var(--fg)]">
              Direct Inquiries
            </h4>
            <ul className="flex flex-col gap-4 text-sm font-medium">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="group inline-flex items-center gap-3 text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--fg-muted)]">Email Studio</div>
                    <span className="font-semibold text-xs sm:text-sm text-[var(--fg)] group-hover:text-[var(--accent)] dark:group-hover:text-[#38BDF8]">
                      {siteConfig.contact.email}
                    </span>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--fg-muted)]">WhatsApp Direct</div>
                    <span className="font-semibold text-xs sm:text-sm text-[var(--fg)] group-hover:text-[var(--accent)] dark:group-hover:text-[#38BDF8]">
                      {siteConfig.contact.whatsapp}
                    </span>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={siteConfig.contact.phoneUrl}
                  className="group inline-flex items-center gap-3 text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] dark:text-[#38BDF8] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--fg-muted)]">Telephone</div>
                    <span className="font-semibold text-xs sm:text-sm text-[var(--fg)] group-hover:text-[var(--accent)] dark:group-hover:text-[#38BDF8]">
                      {siteConfig.contact.phone}
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Legal Links */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--fg-muted)]">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href={siteConfig.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--fg)] transition-colors"
            >
              GitHub
            </a>
            <a href="#about" className="hover:text-[var(--fg)] transition-colors">
              About Studio
            </a>
            <a href="#contact" className="hover:text-[var(--fg)] transition-colors">
              Contact Form
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
