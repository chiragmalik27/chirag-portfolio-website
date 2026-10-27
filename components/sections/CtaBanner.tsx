"use client";

import React from "react";
import { Container } from "@/components/ui/Container";

export function CtaBanner() {
  return (
    <section className="w-full bg-[var(--bg)] border-t border-[var(--border)] pt-24 sm:pt-32 pb-16 px-6 sm:px-12 lg:px-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-end">
          {/* Editorial Headline */}
          <div className="max-w-3xl overflow-hidden">
            <h2 className="text-[3rem] sm:text-[4.75rem] lg:text-[6rem] font-light leading-[1.05] tracking-tight text-[var(--fg)]">
              Let&apos;s build <br />
              <span className="font-serif italic text-[var(--accent)] dark:text-[#38BDF8] transition-colors duration-700">
                something great.
              </span>
            </h2>
            <p className="mt-8 max-w-lg text-base sm:text-lg font-normal leading-relaxed text-[var(--fg-muted)]">
              Have a project in mind? We are currently accepting new client engagements for enterprise web applications, autonomous AI agents, and high-performance systems.
            </p>
          </div>

          {/* Large Magnetic Circular Button */}
          <div className="shrink-0">
            <a
              href="#contact"
              className="group relative flex h-36 w-36 sm:h-48 sm:w-48 items-center justify-center overflow-hidden rounded-full border border-[var(--border)] bg-transparent transition-all duration-500 hover:border-[#1A1A1A] dark:hover:border-white shadow-md hover:shadow-2xl cursor-pointer"
            >
              {/* Fill Curtain Animation */}
              <div className="absolute inset-0 bg-[#1A1A1A] dark:bg-white translate-y-[100%] rounded-full transition-transform duration-500 ease-out group-hover:translate-y-0" />
              <span className="relative z-10 text-base sm:text-lg font-semibold tracking-wide text-[var(--fg)] transition-colors duration-500 group-hover:text-white dark:group-hover:text-[#1A1A1A]">
                Let&apos;s Talk
              </span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
