"use client";

import React from "react";
import Image from "next/image";
import { UserCheck, ShieldCheck, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { aboutData } from "@/content/about";

export function About() {
  return (
    <Section id="about" className="py-24 sm:py-32 bg-[var(--bg)] border-t border-[var(--border)] overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Studio Brand Card & Operational SLA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg-elevated)] p-7 sm:p-8 shadow-md">
              {/* Studio Emblem Visual Stage */}
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--bg)] flex flex-col items-center justify-center p-8 mb-6 group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(45,74,62,0.15)_0%,_transparent_70%)] opacity-25 group-hover:opacity-40 transition-opacity duration-500" />

                <div className="relative w-44 h-36 flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src="/logo-dark.png"
                    alt="White Owl Labs"
                    fill
                    className="hidden dark:block dark-logo object-contain"
                  />
                  <Image
                    src="/logo-light.png"
                    alt="White Owl Labs"
                    fill
                    className="block dark:hidden light-logo object-contain"
                  />
                </div>

                <div className="mt-4 px-3.5 py-1.5 rounded-full bg-[var(--bg-elevated)] border border-[var(--border)] text-[11px] font-mono text-[var(--accent)] dark:text-[#38BDF8] flex items-center gap-2 z-10 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Software &amp; AI Engineering Studio</span>
                </div>
              </div>

              {/* Operational & SLA Badges */}
              <div className="space-y-3 pt-2">
                {aboutData.quickStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between text-xs py-2.5 border-b border-[var(--border)]/70 last:border-0"
                  >
                    <span className="text-[var(--fg-muted)] font-mono">{stat.label}</span>
                    <span className="font-semibold text-[var(--fg)]">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Studio Story & Engineering Principles */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-[#8B7355] dark:text-[#D4B996] mb-3 block">
                About White Owl Labs
              </p>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[var(--fg)] leading-[1.15] mb-6">
                Engineering with{" "}
                <span className="font-serif italic font-semibold text-[var(--accent)] dark:text-[#38BDF8]">
                  technical rigor
                </span>{" "}
                and business perspective.
              </h2>

              <div className="space-y-4 text-[var(--fg-muted)] text-base sm:text-lg leading-relaxed font-normal">
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
                  className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] shadow-xs transition-colors hover:border-[var(--accent)]/50"
                >
                  <div className="w-9 h-9 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] dark:text-[#38BDF8] flex items-center justify-center mb-3.5">
                    {idx === 0 && <Zap className="w-4 h-4" />}
                    {idx === 1 && <UserCheck className="w-4 h-4" />}
                    {idx === 2 && <ShieldCheck className="w-4 h-4" />}
                  </div>
                  <h3 className="font-display font-semibold text-sm text-[var(--fg)] mb-1.5">
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
