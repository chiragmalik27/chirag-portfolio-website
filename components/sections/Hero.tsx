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
        <span className="font-display font-black text-[18vw] leading-none tracking-tight text-[var(--accent)]/[0.07] uppercase whitespace-nowrap">
          DEVELOPER
        </span>
      </div>

      <Container className="relative z-10">
        {/* Top Meta Bar */}
        <div className="flex items-center justify-between py-2 mb-8 md:mb-12 border-b border-[var(--border)]/60 text-xs font-mono uppercase tracking-wider text-[var(--fg-muted)]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span className="font-semibold text-[var(--fg)]">Full-Stack Developer</span>
            <span className="hidden sm:inline">· AI Solutions Engineer</span>
          </div>

          <div className="flex items-center gap-2 text-[var(--accent)] font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Freelance</span>
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
          {/* Left Column: Name & Positioning */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex flex-col justify-center order-1 lg:order-1"
          >
            {/* Script Subheading */}
            <div className="font-serif italic text-2xl md:text-3xl text-[var(--accent)] mb-1 select-none">
              Hello, I&apos;m
            </div>

            {/* Massive Bold Headline Name */}
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl xl:text-8xl tracking-tighter uppercase leading-[0.9] text-[var(--fg)] mb-4">
              CHIRAG<br />MALIK
            </h1>

            {/* Role Title in Accent */}
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--accent)] mb-5">
              Full-Stack Developer & AI Systems Engineer
            </div>

            {/* Paragraph / Value Proposition */}
            <p className="text-sm sm:text-base text-[var(--fg-muted)] leading-relaxed max-w-md mb-8">
              {siteConfig.positioning} Specializing in high-performance web applications, custom RAG search models, and digital experiences that turn visitors into clients.
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
              <span>Available Worldwide · Remote Friendly</span>
            </div>
          </motion.div>

          {/* Center Column: Transparent Cutout Portrait with Ambient Depth Glow */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 flex justify-center order-2 lg:order-2"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-full aspect-[3/4] flex items-end justify-center group">
              {/* Radial spotlight backdrop glow behind the transparent cutout */}
              <div
                aria-hidden="true"
                className="absolute inset-0 m-auto w-3/4 h-3/4 rounded-full bg-[var(--accent)]/20 blur-3xl pointer-events-none group-hover:bg-[var(--accent)]/30 group-hover:scale-110 transition-all duration-700"
              />

              <div className="relative w-full h-full">
                <Image
                  src="/chirag-portrait.png"
                  alt="Chirag Malik - Full-Stack Developer & AI Engineer"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-contain object-bottom relative z-10 drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />

                {/* Subtle bottom fade to blend with page background */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/50 to-transparent z-20 pointer-events-none" />
              </div>

              {/* Floating frosted glass status pill */}
              <div className="absolute bottom-2 inset-x-6 z-30 flex items-center justify-between px-3.5 py-2 rounded-full bg-[var(--bg-elevated)]/85 backdrop-blur-md border border-[var(--border)] shadow-lg text-xs">
                <span className="font-semibold text-[var(--fg)] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Chirag Malik
                </span>
                <span className="text-[11px] font-mono text-[var(--accent)]">Next.js · AI · RAG</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Mini Feature Badge & Vertical Metric Stack */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-3 flex flex-col justify-between space-y-8 order-3"
          >
            {/* Feature Callout Card */}
            <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] relative overflow-hidden">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-xs uppercase font-semibold text-[var(--accent)] tracking-wider">
                  Philosophy
                </div>
              </div>
              <p className="text-sm font-medium text-[var(--fg)] leading-relaxed">
                Turning ideas into fast, high-converting digital experiences.
              </p>
            </div>

            {/* Vertical Stat Stack */}
            <div className="space-y-6 pt-2">
              <div className="flex items-baseline justify-between border-b border-[var(--border)]/70 pb-4">
                <div className="font-display font-black text-4xl sm:text-5xl text-[var(--accent)]">
                  3+
                </div>
                <div className="text-right">
                  <div className="text-xs font-semibold uppercase text-[var(--fg)]">Years</div>
                  <div className="text-[11px] text-[var(--fg-muted)]">Experience</div>
                </div>
              </div>

              <div className="flex items-baseline justify-between border-b border-[var(--border)]/70 pb-4">
                <div className="font-display font-black text-4xl sm:text-5xl text-[var(--accent)]">
                  15+
                </div>
                <div className="text-right">
                  <div className="text-xs font-semibold uppercase text-[var(--fg)]">Projects</div>
                  <div className="text-[11px] text-[var(--fg-muted)]">Completed & Live</div>
                </div>
              </div>

              <div className="flex items-baseline justify-between border-b border-[var(--border)]/70 pb-4">
                <div className="font-display font-black text-4xl sm:text-5xl text-[var(--accent)]">
                  100%
                </div>
                <div className="text-right">
                  <div className="text-xs font-semibold uppercase text-[var(--fg)]">Commitment</div>
                  <div className="text-[11px] text-[var(--fg-muted)]">Sub-Second Loads</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
