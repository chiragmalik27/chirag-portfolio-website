"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { projects } from "@/content/projects";

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI & Autonomous Systems" },
  { id: "web", label: "Enterprise Web Apps" },
  { id: "commerce", label: "High-Speed Platforms" },
] as const;

export function SelectedWork() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [showAll, setShowAll] = useState<boolean>(false);

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "ai")
      return (
        project.category.toLowerCase().includes("ai") ||
        project.category.toLowerCase().includes("rag")
      );
    if (selectedCategory === "web")
      return project.category.toLowerCase().includes("web");
    if (selectedCategory === "commerce")
      return (
        project.category.toLowerCase().includes("commerce") ||
        project.category.toLowerCase().includes("speed")
      );
    return true;
  });

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 4);

  return (
    <Section id="portfolio" className="py-24 sm:py-32 bg-[var(--bg)] border-t border-[var(--border)] overflow-hidden">
      <Container>
        {/* Section Header matching reference */}
        <div className="mb-16 sm:mb-24 max-w-3xl">
          <p className="mb-3 text-xs font-mono font-bold uppercase tracking-[0.3em] text-[#8B7355] dark:text-[#D4B996]">
            Our Portfolio &amp; Services
          </p>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[var(--fg)] leading-[1.08]">
            Engineering{" "}
            <span className="font-serif italic font-semibold text-[var(--accent)] dark:text-[#38BDF8]">
              Digital Futures.
            </span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[var(--fg-muted)] leading-relaxed max-w-xl">
            Selected client applications engineered for enterprise scale, sub-second latency, and uncompromising design craft.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-16 sm:mb-20">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setShowAll(false);
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#1A1A1A] text-white dark:bg-white dark:text-[#1A1A1A] shadow-md -translate-y-0.5"
                    : "bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--fg-muted)] hover:text-[var(--fg)] hover:border-[#1A1A1A]/40 dark:hover:border-white/40"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Staggered 2-Column Editorial Grid matching reference layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-x-12 lg:gap-x-20 lg:gap-y-32">
          {displayedProjects.map((project, index) => {
            const isStaggered = index % 2 !== 0;
            return (
              <div
                key={project.slug}
                className={`group flex w-full flex-col cursor-pointer ${
                  isStaggered ? "md:mt-24 lg:mt-32" : ""
                }`}
              >
                {/* Media Image Container with Mockup Bar */}
                <div className="relative aspect-[5/4] w-full overflow-hidden rounded-3xl bg-[var(--bg-elevated)] border border-[var(--border)] shadow-xl transition-all duration-500 group-hover:border-[var(--accent)]/50 group-hover:shadow-2xl">
                  {/* Mockup Title Header */}
                  <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-4 py-2 bg-[var(--bg-elevated)]/90 backdrop-blur-md border-b border-[var(--border)]/60">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                      <span className="ml-2 text-[11px] font-mono text-[var(--fg-muted)] truncate max-w-[160px]">
                        {project.slug}.whiteowllabs
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-[11px] font-semibold text-[var(--accent)] hover:underline"
                        >
                          <span>Live</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Screenshot Visual */}
                  <div className="relative w-full h-full pt-8">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-mono text-sm text-[var(--fg-muted)]">
                        [Interactive Showcase]
                      </div>
                    )}
                    {/* Hover Tint Overlay */}
                    <div className="absolute inset-0 bg-[#1A1A1A]/0 transition-colors duration-500 group-hover:bg-[#1A1A1A]/10 pointer-events-none" />
                  </div>
                </div>

                {/* Editorial Metadata Block */}
                <div className="mt-8 flex flex-col">
                  {/* Category Pill */}
                  <p className="mb-2 text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#8B7355] dark:text-[#D4B996] transition-colors duration-300 group-hover:text-[var(--accent)]">
                    {project.category}
                  </p>

                  {/* Title & Arrow */}
                  <Link href={`/work/${project.slug}`}>
                    <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-[var(--fg)] transition-transform duration-500 group-hover:translate-x-2 flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-6 h-6 text-[var(--fg-muted)] group-hover:text-[var(--accent)] transition-colors shrink-0" />
                    </h3>
                  </Link>

                  {/* Tagline */}
                  <p className="mt-2 text-sm text-[var(--fg-muted)] leading-relaxed line-clamp-2">
                    {project.tagline}
                  </p>

                  {/* Metrics Row */}
                  <div className="mt-4 pt-3 border-t border-[var(--border)]/70 flex flex-wrap items-center gap-4 text-xs font-mono">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="flex items-center gap-1.5">
                        <span className="font-bold text-[var(--fg)]">{m.value}</span>
                        <span className="text-[var(--fg-muted)]">({m.label})</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Projects Button */}
        {filteredProjects.length > 4 && (
          <div className="mt-24 sm:mt-32 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="rounded-full border border-[var(--border)] bg-transparent px-10 py-4 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[var(--fg)] transition-all hover:border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-[#1A1A1A] active:scale-95 cursor-pointer shadow-xs"
            >
              {showAll ? "View Less Projects" : "View All Projects"}
            </button>
          </div>
        )}
      </Container>
    </Section>
  );
}
