"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { services, processSteps } from "@/content/services";

export function Services() {
  const [activeServiceIndex, setActiveServiceIndex] = useState<number>(0);
  const activeService = services[activeServiceIndex] || services[0];

  return (
    <Section id="services" className="py-20 sm:py-28 bg-[var(--bg-elevated)] border-t border-[var(--border)] overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 max-w-3xl">
          <h2 className="mb-3 text-4xl sm:text-6xl font-serif italic font-bold tracking-tight text-[var(--fg)] drop-shadow-xs">
            Services{" "}
            <span className="text-[var(--accent)] dark:text-[#38BDF8]">
              We Offer
            </span>
          </h2>
          <p className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-[var(--fg-muted)]">
            Our Capabilities & Core Engineering
          </p>
        </div>

        {/* 2-Column Split Interactive Stage matching reference layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Left Column: Numbered Interactive Capabilities List */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {services.map((service, index) => {
              const isActive = activeServiceIndex === index;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveServiceIndex(index)}
                  onMouseEnter={() => setActiveServiceIndex(index)}
                  className={`transition-all duration-300 rounded-2xl p-5 sm:p-6 cursor-pointer border select-none ${
                    isActive
                      ? "bg-[var(--accent)]/10 dark:bg-[var(--accent)]/15 border-[var(--accent)]/40 shadow-sm"
                      : "bg-transparent border-transparent hover:bg-[var(--bg)]/70 hover:border-[var(--border)]/60"
                  }`}
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span
                      className={`text-sm sm:text-base font-mono font-bold tracking-widest transition-colors ${
                        isActive
                          ? "text-[var(--accent)] dark:text-[#38BDF8]"
                          : "text-[var(--fg-muted)]"
                      }`}
                    >
                      {service.number}
                    </span>
                    <h3
                      className={`text-2xl sm:text-3xl font-bold tracking-tight transition-colors ${
                        isActive
                          ? "text-[var(--fg)]"
                          : "text-[var(--fg-muted)] hover:text-[var(--fg)]"
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Expanded Active Details */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 pl-8 sm:pl-12 text-sm sm:text-base leading-relaxed text-[var(--fg-muted)] font-medium max-w-xl">
                          {service.description}
                        </p>

                        {/* Deliverables Checklist */}
                        <div className="mt-5 pl-8 sm:pl-12 grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-[var(--border)]/60">
                          {service.deliverables.map((deliv) => (
                            <div key={deliv} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--fg)]">
                              <Check className="w-4 h-4 text-[var(--accent)] dark:text-[#38BDF8] shrink-0 mt-0.5" />
                              <span>{deliv}</span>
                            </div>
                          ))}
                        </div>

                        {/* Inquire Link */}
                        <div className="mt-5 pl-8 sm:pl-12">
                          <a
                            href="#contact"
                            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[var(--accent)] dark:text-[#38BDF8] hover:underline"
                          >
                            <span>Discuss this requirement</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Stage with High-Detail Graphics Cross-Fading */}
          <div className="lg:col-span-5 relative h-[360px] sm:h-[450px] lg:h-[500px] flex items-center justify-center rounded-3xl bg-[var(--bg)] border border-[var(--border)] overflow-hidden shadow-xl p-8">
            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(45,74,62,0.12)_0%,_transparent_70%)] pointer-events-none" />

            {services.map((service, index) => {
              const isActive = activeServiceIndex === index;
              return (
                <div
                  key={service.id}
                  className={`absolute inset-0 p-6 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
                    isActive
                      ? "opacity-100 scale-100 z-10"
                      : "opacity-0 scale-95 pointer-events-none z-0"
                  }`}
                >
                  <div className="relative w-full h-full max-h-[380px] flex items-center justify-center">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain drop-shadow-2xl transition-transform duration-700"
                    />
                  </div>
                </div>
              );
            })}

            {/* Stage Footer Tag */}
            <div className="absolute bottom-4 inset-x-0 flex justify-center z-20">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--fg-muted)] px-3 py-1 rounded-full bg-[var(--bg-elevated)]/90 border border-[var(--border)] shadow-xs">
                Active: {activeService.title}
              </span>
            </div>
          </div>
        </div>

        {/* The Verified Sequential Collaboration Process */}
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg)] p-8 sm:p-12 shadow-sm">
          <div className="max-w-xl mb-10">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)] dark:text-[#38BDF8] mb-2 block">
              The Process
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[var(--fg)] mb-3">
              How we work together.
            </h3>
            <p className="text-sm sm:text-base text-[var(--fg-muted)] leading-relaxed">
              Transparent, milestone-based execution engineered to eliminate risk and launch on schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="relative p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] shadow-xs"
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-[#1A1A1A] text-white dark:bg-white dark:text-[#1A1A1A] flex items-center justify-center font-display font-bold text-sm shadow-xs">
                    0{step.step}
                  </div>
                  <span className="text-xs font-mono font-medium text-[var(--accent)] dark:text-[#38BDF8] px-2.5 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20">
                    {step.duration}
                  </span>
                </div>

                <h4 className="font-display font-bold text-lg text-[var(--fg)] mb-2">
                  {step.title}
                </h4>

                <p className="text-xs sm:text-sm text-[var(--fg-muted)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
