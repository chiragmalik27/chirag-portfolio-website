"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Globe, Sparkles, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="relative pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden border-b border-[var(--border)]">
      {/* Massive Typographic Backdrop Word — layered behind foreground */}
      <div
        aria-hidden="true"
        className="absolute top-12 md:top-6 inset-x-0 flex justify-center pointer-events-none select-none z-0 overflow-hidden"
      >
        <span className="font-display font-black text-[15vw] leading-none tracking-tight text-[var(--accent)]/[0.06] uppercase whitespace-nowrap">
          WHITE OWL
        </span>
      </div>

      <Container className="relative z-10">
        {/* Top Meta Bar */}
        <div className="flex items-center justify-between py-2 mb-8 md:mb-12 border-b border-[var(--border)]/60 text-xs font-mono uppercase tracking-wider text-[var(--fg-muted)]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span className="font-semibold text-[var(--fg)]">White Owl Labs</span>
            <span className="hidden sm:inline">· Software & AI Engineering Studio</span>
          </div>

          <div className="flex items-center gap-2 text-[var(--accent)] font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Accepting New Engagements</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* 3-Column Editorial Hero Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Left Column: Studio Headline & Positioning */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex flex-col justify-center order-1 lg:order-1"
          >
            {/* Script Subheading */}
            <div className="font-serif italic text-2xl md:text-3xl text-[var(--accent)] mb-1 select-none">
              Welcome to
            </div>

            {/* Massive Bold Headline Name */}
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl xl:text-8xl tracking-tighter uppercase leading-[0.9] text-[var(--fg)] mb-4">
              WHITE OWL<br />LABS
            </h1>

            {/* Role Title in Accent */}
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--accent)] mb-5">
              Software & Autonomous AI Systems Studio
            </div>

            {/* Paragraph / Value Proposition */}
            <p className="text-sm sm:text-base text-[var(--fg-muted)] leading-relaxed max-w-md mb-8">
              We partner with visionary startups and global enterprises to engineer mission-critical web platforms, autonomous AI agents, and production RAG pipelines with sub-second performance.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Button href={siteConfig.primaryCta.href} size="lg">
                <span>{siteConfig.primaryCta.label}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button href={siteConfig.secondaryCta.href} variant="secondary" size="lg">
                {siteConfig.secondaryCta.label}
              </Button>
            </div>

            {/* Available Worldwide Badge */}
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--fg-muted)]">
              <Globe className="w-4 h-4 text-[var(--accent)]" />
              <span>India Headquarters · Global Remote Deployments</span>
            </div>
          </motion.div>

          {/* Center Column: Interactive Architecture Visualizer with Glowing White Owl Labs Emblem */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 flex justify-center order-2 lg:order-2"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-full aspect-[3/4] flex items-center justify-center group">
              {/* Radial spotlight backdrop glow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 m-auto w-3/4 h-3/4 rounded-full bg-[var(--accent)]/20 blur-3xl pointer-events-none group-hover:bg-[var(--accent)]/30 group-hover:scale-110 transition-all duration-700"
              />

              {/* High-tech Glass Container Card */}
              <div className="relative w-full h-full rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--bg-elevated)]/90 backdrop-blur-md p-6 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-500 hover:border-[var(--accent)]/60">
                {/* Visualizer Top Bar */}
                <div className="flex items-center justify-between border-b border-[var(--border)]/70 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-1 text-[11px] font-mono text-[var(--fg-muted)]">
                      whiteowllabs.core
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20">
                    LIVE ENGINE
                  </span>
                </div>

                {/* Central Studio Emblem with Radar Rings */}
                <div className="relative my-auto flex flex-col items-center justify-center py-6">
                  {/* Concentric pulse rings */}
                  <div className="absolute w-52 h-52 rounded-full border border-[var(--accent)]/15 animate-ping opacity-25 pointer-events-none" />
                  <div className="absolute w-44 h-44 rounded-full border border-dashed border-[var(--border)] pointer-events-none" />

                  {/* Logo Emblem Centerpiece */}
                  <div className="relative w-36 h-28 flex items-center justify-center drop-shadow-[0_15px_25px_rgba(255,85,0,0.2)] group-hover:scale-105 transition-transform duration-500">
                    <Image
                      src="/logo-dark.png"
                      alt="White Owl Labs"
                      fill
                      priority
                      className="hidden dark:block object-contain"
                    />
                    <Image
                      src="/logo-light.png"
                      alt="White Owl Labs"
                      fill
                      priority
                      className="block dark:hidden object-contain"
                    />
                  </div>

                  <div className="mt-4 text-center">
                    <div className="text-xs font-mono font-bold text-[var(--fg)] tracking-wider">
                      AUTONOMOUS ENGINE
                    </div>
                    <div className="text-[11px] text-[var(--fg-muted)]">
                      Sub-150ms Vector & Inference Pipeline
                    </div>
                  </div>
                </div>

                {/* Architecture Nodes Strip */}
                <div className="space-y-2 pt-2 border-t border-[var(--border)]/70 text-[11px]">
                  <div className="flex items-center justify-between p-2 rounded-[var(--radius-sm)] bg-[var(--bg)] border border-[var(--border)]/60">
                    <span className="text-[var(--fg-muted)] font-mono">Enterprise RAG</span>
                    <span className="font-semibold text-emerald-400">Zero Hallucination</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-[var(--radius-sm)] bg-[var(--bg)] border border-[var(--border)]/60">
                    <span className="text-[var(--fg-muted)] font-mono">Web Performance</span>
                    <span className="font-semibold text-[var(--accent)]">99+ Lighthouse</span>
                  </div>
                </div>

                {/* Floating frosted glass status pill */}
                <div className="mt-3 flex items-center justify-between px-3 py-1.5 rounded-full bg-[var(--bg)] border border-[var(--border)] text-[10px] font-mono">
                  <span className="text-[var(--fg)] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    White Owl Labs
                  </span>
                  <span className="text-[var(--accent)] font-semibold">Ready for Scale</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Studio Standard & Vertical Metric Stack */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-3 flex flex-col justify-between space-y-8 order-3"
          >
            {/* Feature Callout Card */}
            <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] relative overflow-hidden shadow-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-xs uppercase font-semibold text-[var(--accent)] tracking-wider">
                  Studio Standard
                </div>
              </div>
              <p className="text-sm font-medium text-[var(--fg)] leading-relaxed">
                Zero generic prototypes. We engineer resilient, battle-tested systems that grant our clients decisive market advantages.
              </p>
            </div>

            {/* Vertical Stat Stack */}
            <div className="space-y-6 pt-2">
              <div className="flex items-baseline justify-between border-b border-[var(--border)]/70 pb-4">
                <div className="font-display font-black text-4xl sm:text-5xl text-[var(--accent)]">
                  99.9%
                </div>
                <div className="text-right">
                  <div className="text-xs font-semibold uppercase text-[var(--fg)]">Uptime</div>
                  <div className="text-[11px] text-[var(--fg-muted)]">Enterprise SLA</div>
                </div>
              </div>

              <div className="flex items-baseline justify-between border-b border-[var(--border)]/70 pb-4">
                <div className="font-display font-black text-4xl sm:text-5xl text-[var(--accent)]">
                  &lt;150ms
                </div>
                <div className="text-right">
                  <div className="text-xs font-semibold uppercase text-[var(--fg)]">Latency</div>
                  <div className="text-[11px] text-[var(--fg-muted)]">Vector Search & AI</div>
                </div>
              </div>

              <div className="flex items-baseline justify-between border-b border-[var(--border)]/70 pb-4">
                <div className="font-display font-black text-4xl sm:text-5xl text-[var(--accent)]">
                  25+
                </div>
                <div className="text-right">
                  <div className="text-xs font-semibold uppercase text-[var(--fg)]">Systems</div>
                  <div className="text-[11px] text-[var(--fg-muted)]">Engineered & Live</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
