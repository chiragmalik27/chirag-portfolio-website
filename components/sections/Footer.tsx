import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/content/site";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full border-t border-[var(--border)] bg-[var(--bg-elevated)]/60 pt-16 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[var(--border)]/60">
          {/* Brand & Vision */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block group">
              <div className="relative h-10 w-44 flex items-center">
                <Image
                  src="/logo-horizontal-dark.png"
                  alt="White Owl Labs"
                  fill
                  className="hidden dark:block object-contain object-left"
                />
                <Image
                  src="/logo-horizontal-light.png"
                  alt="White Owl Labs"
                  fill
                  className="block dark:hidden object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-sm text-[var(--fg-muted)] leading-relaxed max-w-sm">
              White Owl Labs is a software and AI engineering studio. We architect high-performance web platforms, autonomous agents, and enterprise RAG systems for visionary companies.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono text-[var(--fg-muted)]">
                Accepting new client engagements for Q1/Q2
              </span>
            </div>
          </div>

          {/* Core Services */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--fg)]">
              Core Capabilities
            </div>
            <ul className="space-y-2 text-sm text-[var(--fg-muted)]">
              <li>
                <a href="#services" className="hover:text-[var(--accent)] transition-colors">
                  Enterprise AI & RAG Architectures
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[var(--accent)] transition-colors">
                  Full-Stack Web & Next.js Platforms
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[var(--accent)] transition-colors">
                  High-Throughput Cloud Backends
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[var(--accent)] transition-colors">
                  Autonomous Agent Systems & LLM Fine-Tuning
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Communication */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--fg)]">
              Direct Contact
            </div>
            <div className="space-y-2.5 text-sm text-[var(--fg-muted)]">
              <div>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-2 hover:text-[var(--accent)] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[var(--accent)]" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </div>
              <div>
                <a
                  href={siteConfig.contact.phoneUrl}
                  className="inline-flex items-center gap-2 hover:text-[var(--accent)] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[var(--accent)]" />
                  <span>{siteConfig.contact.phone}</span>
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--bg)] text-[var(--fg)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                >
                  <span>WhatsApp Business Chat</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-[var(--fg-muted)]">
          <div>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a
              href={siteConfig.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)] transition-colors"
            >
              GitHub
            </a>
            <a href="#about" className="hover:text-[var(--accent)] transition-colors">
              About Studio
            </a>
            <a href="#contact" className="hover:text-[var(--accent)] transition-colors">
              Inquire
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
