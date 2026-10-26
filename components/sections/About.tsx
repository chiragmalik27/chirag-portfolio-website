import React from "react";
import Image from "next/image";
import { UserCheck, ShieldCheck, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { aboutData } from "@/content/about";

export function About() {
  return (
    <Section id="about" className="border-t border-[var(--border)]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Studio Brand & Operational Metrics */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--bg-elevated)] p-7 shadow-xs">
              {/* Studio Emblem Visual Card */}
              <div className="relative aspect-square w-full rounded-[var(--radius-sm)] overflow-hidden border border-[var(--border)] bg-[var(--bg)] flex flex-col items-center justify-center p-8 mb-6 group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--accent)_0%,_transparent_70%)] opacity-15 group-hover:opacity-25 transition-opacity duration-500" />
                
                <div className="relative w-44 h-36 flex items-center justify-center z-10">
                  <Image
                    src="/logo-dark.png"
                    alt="White Owl Labs"
                    fill
                    className="hidden dark:block object-contain"
                  />
                  <Image
                    src="/logo-light.png"
                    alt="White Owl Labs"
                    fill
                    className="block dark:hidden object-contain"
                  />
                </div>

                <div className="mt-4 px-3 py-1 rounded-full bg-[var(--bg-elevated)] border border-[var(--border)] text-[11px] font-mono text-[var(--accent)] flex items-center gap-1.5 z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Software & AI Engineering Studio</span>
                </div>
              </div>

              {/* Operational & SLA Badges */}
              <div className="space-y-3 pt-1">
                {aboutData.quickStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between text-xs py-2 border-b border-[var(--border)]/60 last:border-0"
                  >
                    <span className="text-[var(--fg-muted)]">{stat.label}</span>
                    <span className="font-semibold text-[var(--fg)]">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Studio Story & Engineering Principles */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mb-2 block">
                About White Owl Labs
              </span>
              <Heading as="h2" size="h2" className="mb-6">
                Engineering with technical rigor and business perspective.
              </Heading>

              <div className="space-y-4 text-[var(--fg-muted)] text-body leading-relaxed">
                {aboutData.bioParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Principles Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {aboutData.principles.map((p, idx) => (
                <div
                  key={p.title}
                  className="p-5 rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--bg-elevated)]"
                >
                  <div className="w-8 h-8 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center mb-3">
                    {idx === 0 && <Zap className="w-4 h-4" />}
                    {idx === 1 && <UserCheck className="w-4 h-4" />}
                    {idx === 2 && <ShieldCheck className="w-4 h-4" />}
                  </div>
                  <h3 className="font-display font-semibold text-sm text-[var(--fg)] mb-1">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[var(--fg-muted)] leading-relaxed">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
