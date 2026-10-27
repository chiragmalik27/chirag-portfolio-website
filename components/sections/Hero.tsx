"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/content/site";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center px-6 sm:px-12 lg:px-24 overflow-hidden bg-[var(--bg)]"
    >
      {/* Background Hero Image */}
      <div className="absolute inset-0 h-full w-full z-0 select-none pointer-events-none">
        <Image
          src="/hero-bg.jpg"
          alt="White Owl Labs Engineering Workspace"
          fill
          priority
          className="object-cover object-center opacity-40 dark:opacity-20 transition-opacity duration-1000"
        />
        {/* Editorial Gradient Wash */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/90 sm:via-[var(--bg)]/75 to-transparent w-full sm:w-3/4" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-[var(--bg)]/40 h-full w-full" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-5xl pt-32 pb-20 md:pt-40 md:pb-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start"
        >
          {/* Eyebrow Label with Availability Status */}
          <motion.div
            variants={itemVariants}
            className="mb-6 flex flex-wrap items-center gap-3"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-elevated)]/90 border border-[var(--border)] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[var(--accent)] dark:text-emerald-400">
                {siteConfig.name}
              </span>
            </div>

            <div className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-[var(--fg-muted)] tracking-wider uppercase">
              <span>· Software & AI Engineering Studio</span>
            </div>
          </motion.div>

          {/* Signature Headline from Reference Design */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-[var(--fg)] leading-[1.05] mb-6"
          >
            We Build Software <br />
            <span className="font-serif italic font-semibold text-[var(--accent)] dark:text-[#38BDF8]">
              That Moves Business.
            </span>
          </motion.h1>

          {/* Subheading / Value Proposition */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-[var(--fg-muted)] font-normal mb-10"
          >
            We architect mission-critical software, autonomous AI systems, and high-performance web applications for ambitious companies. Built for sub-second latency, unmatched reliability, and enduring scale.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 mb-14"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide text-white dark:text-[#10141D] bg-[#1A1A1A] dark:bg-white rounded-full hover:bg-[var(--accent)] dark:hover:bg-neutral-200 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 group"
            >
              <span>{siteConfig.primaryCta.label}</span>
              <ArrowRight className="w-4 h-4 ml-2.5 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide text-[var(--fg)] bg-transparent border border-[var(--border)] rounded-full hover:border-[#1A1A1A] dark:hover:border-white transition-all hover:-translate-y-0.5 active:scale-95"
            >
              {siteConfig.secondaryCta.label}
            </a>
          </motion.div>

          {/* Proof / Standard Strip */}
          <motion.div
            variants={itemVariants}
            className="pt-8 border-t border-[var(--border)]/70 w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-left"
          >
            <div>
              <div className="font-display font-bold text-2xl sm:text-3xl text-[var(--fg)]">
                99.9%
              </div>
              <div className="text-xs text-[var(--fg-muted)] uppercase tracking-wider font-mono mt-0.5">
                Uptime SLA
              </div>
            </div>

            <div>
              <div className="font-display font-bold text-2xl sm:text-3xl text-[var(--accent)] dark:text-[#38BDF8]">
                &lt; 150ms
              </div>
              <div className="text-xs text-[var(--fg-muted)] uppercase tracking-wider font-mono mt-0.5">
                Vector Latency
              </div>
            </div>

            <div>
              <div className="font-display font-bold text-2xl sm:text-3xl text-[var(--fg)]">
                100%
              </div>
              <div className="text-xs text-[var(--fg-muted)] uppercase tracking-wider font-mono mt-0.5">
                TypeScript Strict
              </div>
            </div>

            <div>
              <div className="font-display font-bold text-2xl sm:text-3xl text-[var(--accent)] dark:text-[#38BDF8]">
                Global
              </div>
              <div className="text-xs text-[var(--fg-muted)] uppercase tracking-wider font-mono mt-0.5">
                Deployments
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
