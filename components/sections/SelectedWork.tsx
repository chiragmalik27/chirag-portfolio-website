"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ArrowUpRight,
  Layers,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Tag } from "@/components/ui/Tag";
import { projects } from "@/content/projects";

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI & RAG Solutions" },
  { id: "web", label: "Full-Stack Web Apps" },
  { id: "commerce", label: "E-Commerce & High-Speed" },
] as const;

export function SelectedWork() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Filter projects by category
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

  // Reset active index when category changes
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setActiveIndex(0);
  };

  const currentProject = filteredProjects[activeIndex] || filteredProjects[0];

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    );
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev === 0 ? filteredProjects.length - 1 : prev - 1
        );
      } else if (e.key === "ArrowRight") {
        setActiveIndex((prev) =>
          prev === filteredProjects.length - 1 ? 0 : prev + 1
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [filteredProjects.length]);

  return (
    <Section id="work" className="py-12 md:py-16 border-t border-[var(--border)] overflow-hidden">
      <Container>
        {/* Header with Title and Category Goals */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] font-semibold">
                Interactive Showcase
              </span>
            </div>
            <Heading as="h2" size="h2" className="text-2xl sm:text-3xl mb-1.5">
              Selected Work & Live Platforms
            </Heading>
            <p className="text-[var(--fg-muted)] text-sm sm:text-base max-w-xl">
              Filter by engineering domain and cycle through production apps with live metrics.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[var(--fg-muted)]">
            <Layers className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>
              {String(activeIndex + 1).padStart(2, "0")} / {String(filteredProjects.length).padStart(2, "0")} Featured
            </span>
          </div>
        </div>

        {/* 1. Category / Goal Selection Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] w-fit mb-6 shadow-xs">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryChange(cat.id)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer min-h-[32px] select-none ${
                  isActive
                    ? "text-[var(--accent-fg)]"
                    : "text-[var(--fg-muted)] hover:text-[var(--fg)]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-[var(--accent)] shadow-sm -z-10"
                  />
                )}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* 2. Centered Card Carousel Area */}
        <div
          ref={containerRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Projects Carousel"
          className="relative w-full max-w-4xl mx-auto py-2"
        >
          {/* Main Card Viewport */}
          <div className="relative min-h-[460px] sm:min-h-[490px] flex items-center justify-center">
            {/* Adjacent Left Card Peek (Desktop) */}
            {filteredProjects.length > 1 && (
              <div
                onClick={handlePrev}
                className="hidden lg:block absolute left-0 w-[300px] h-[400px] rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--bg-elevated)]/40 backdrop-blur-xs p-4 cursor-pointer -translate-x-10 scale-[0.86] opacity-35 hover:opacity-75 transition-all duration-300 pointer-events-auto select-none overflow-hidden z-0"
              >
                <div className="relative w-full h-36 rounded-[var(--radius-sm)] overflow-hidden mb-3 opacity-70">
                  {filteredProjects[
                    (activeIndex - 1 + filteredProjects.length) %
                      filteredProjects.length
                  ]?.image && (
                    <Image
                      src={
                        filteredProjects[
                          (activeIndex - 1 + filteredProjects.length) %
                            filteredProjects.length
                        ].image!
                      }
                      alt="Previous"
                      fill
                      className="object-cover object-top"
                    />
                  )}
                </div>
                <div className="font-display font-bold text-base text-[var(--fg)] truncate">
                  {
                    filteredProjects[
                      (activeIndex - 1 + filteredProjects.length) %
                        filteredProjects.length
                    ]?.title
                  }
                </div>
              </div>
            )}

            {/* Active Centered Card with AnimatePresence */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.slug}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: -12 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-2xl rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--bg-elevated)] shadow-xl p-5 sm:p-6 relative z-10 transition-colors hover:border-[var(--accent)]/60 flex flex-col justify-between"
              >
                <div>
                  {/* Top Header inside Card */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <Tag variant="accent" className="text-[11px] py-0.5 px-2">
                        {currentProject.category}
                      </Tag>
                      <span className="text-xs text-[var(--fg-muted)]">
                        {currentProject.timeline}
                      </span>
                    </div>

                    {currentProject.liveUrl && (
                      <a
                        href={currentProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--bg)] border border-[var(--border)] text-[var(--fg)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors min-h-[28px]"
                      >
                        <span>Visit Live Site</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  {/* Title and Tagline */}
                  <div className="mb-3.5">
                    <Link
                      href={`/work/${currentProject.slug}`}
                      className="group inline-block"
                    >
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors flex items-center gap-1.5">
                        <span>{currentProject.title}</span>
                        <ArrowUpRight className="w-5 h-5 text-[var(--fg-muted)] group-hover:text-[var(--accent)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </h3>
                    </Link>
                    <p className="text-xs sm:text-sm text-[var(--fg-muted)] leading-relaxed mt-1 line-clamp-2">
                      {currentProject.tagline}
                    </p>
                  </div>

                  {/* High-Resolution Screenshot Photo Frame */}
                  <div className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--bg)] overflow-hidden mb-4 shadow-xs group/photo">
                    {/* Mockup Titlebar */}
                    <div className="flex items-center justify-between px-3 py-1.5 border-b border-[var(--border)] bg-[var(--bg-elevated)]/90 backdrop-blur-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-rose-400/80" />
                        <span className="w-2 h-2 rounded-full bg-amber-400/80" />
                        <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
                        <span className="ml-1.5 text-[11px] font-mono text-[var(--fg-muted)] truncate max-w-[200px]">
                          {currentProject.liveUrl
                            ? currentProject.liveUrl.replace("https://", "")
                            : `${currentProject.slug}.dev`}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-semibold text-[var(--accent)] uppercase tracking-wider">
                        Production
                      </span>
                    </div>

                    {/* Screenshot Photo - Compact balanced height */}
                    <div className="relative w-full h-44 sm:h-52 overflow-hidden">
                      {currentProject.image ? (
                        <Image
                          src={currentProject.image}
                          alt={currentProject.title}
                          fill
                          priority
                          sizes="(max-width: 1024px) 100vw, 680px"
                          className="object-cover object-top group-hover/photo:scale-103 transition-transform duration-500 ease-out"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-xs font-mono text-[var(--fg-muted)]">
                          [Mockup Preview]
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-elevated)]/60 via-transparent to-transparent opacity-20 pointer-events-none" />
                    </div>

                    {/* Metrics Bar inside card */}
                    <div className="grid grid-cols-3 gap-1.5 p-2 bg-[var(--bg-elevated)] border-t border-[var(--border)]">
                      {currentProject.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="text-center py-1.5 px-2 rounded-[var(--radius-sm)] bg-[var(--bg)] border border-[var(--border)]/60"
                        >
                          <div className="font-display font-bold text-xs sm:text-sm text-[var(--accent)]">
                            {m.value}
                          </div>
                          <div className="text-[10px] text-[var(--fg-muted)] truncate mt-0.5">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Bottom: Tech Stack & Actions */}
                <div className="pt-3 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-2.5">
                  <div className="flex flex-wrap gap-1">
                    {currentProject.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2 py-0.5 rounded-[var(--radius-sm)] bg-[var(--bg)] text-[var(--fg-muted)] border border-[var(--border)] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      href={`/work/${currentProject.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full bg-[var(--accent)] text-[var(--accent-fg)] hover:opacity-95 transition-all shadow-xs"
                    >
                      <span>Read Deep-Dive</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Adjacent Right Card Peek (Desktop) */}
            {filteredProjects.length > 1 && (
              <div
                onClick={handleNext}
                className="hidden lg:block absolute right-0 w-[300px] h-[400px] rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--bg-elevated)]/40 backdrop-blur-xs p-4 cursor-pointer translate-x-10 scale-[0.86] opacity-35 hover:opacity-75 transition-all duration-300 pointer-events-auto select-none overflow-hidden z-0"
              >
                <div className="relative w-full h-36 rounded-[var(--radius-sm)] overflow-hidden mb-3 opacity-70">
                  {filteredProjects[
                    (activeIndex + 1) % filteredProjects.length
                  ]?.image && (
                    <Image
                      src={
                        filteredProjects[
                          (activeIndex + 1) % filteredProjects.length
                        ].image!
                      }
                      alt="Next"
                      fill
                      className="object-cover object-top"
                    />
                  )}
                </div>
                <div className="font-display font-bold text-base text-[var(--fg)] truncate">
                  {
                    filteredProjects[
                      (activeIndex + 1) % filteredProjects.length
                    ]?.title
                  }
                </div>
              </div>
            )}
          </div>

          {/* 3. Navigation Controls & Pagination Dots */}
          <div className="flex items-center justify-between pt-5 max-w-md mx-auto">
            {/* Prev Arrow */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous project"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--fg)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all cursor-pointer shadow-xs active:scale-95 focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-1.5">
              {filteredProjects.map((p, idx) => (
                <button
                  key={p.slug}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Jump to ${p.title}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    activeIndex === idx
                      ? "w-6 h-2 bg-[var(--accent)]"
                      : "w-2 h-2 bg-[var(--border)] hover:bg-[var(--fg-muted)]"
                  }`}
                />
              ))}
            </div>

            {/* Next Arrow */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next project"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--fg)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all cursor-pointer shadow-xs active:scale-95 focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
