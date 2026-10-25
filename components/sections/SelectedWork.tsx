"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Tag } from "@/components/ui/Tag";
import { projects } from "@/content/projects";

export function SelectedWork() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="work" className="border-t border-[var(--border)]">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mb-2 block">
              Selected Work & Live Products
            </span>
            <Heading as="h2" size="h2" className="mb-4">
              Real applications built for active users.
            </Heading>
            <p className="text-[var(--fg-muted)] text-body-lg">
              A curated selection of live production platforms, SaaS architectures, and AI solutions engineered for speed, privacy, and engagement.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-medium text-[var(--fg-muted)]">
              {projects.length} Verified Projects
            </span>
          </div>
        </div>

        {/* Bento Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {projects.map((project) => {
            const hasImage = !!project.image;

            return (
              <motion.div
                key={project.slug}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className={`rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--bg-elevated)] p-6 md:p-8 flex flex-col justify-between transition-colors hover:border-[var(--accent)] group relative overflow-hidden ${
                  project.bentoSpan || "md:col-span-12 lg:col-span-6"
                }`}
              >
                <div>
                  {/* Top Meta Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <Tag variant="accent">{project.category}</Tag>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[var(--fg-muted)]">
                        {project.timeline}
                      </span>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 rounded bg-[var(--bg)] border border-[var(--border)] text-[var(--fg-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
                          title="Open live site in new tab"
                          aria-label={`Open live site for ${project.title}`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title & Headline */}
                  <Link href={`/work/${project.slug}`} className="block mb-2 group-hover:text-[var(--accent)] transition-colors">
                    <h3 className="font-display font-bold text-xl md:text-2xl text-[var(--fg)] flex items-center justify-between gap-2">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-5 h-5 text-[var(--fg-muted)] group-hover:text-[var(--accent)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                    </h3>
                  </Link>

                  <p className="text-xs md:text-sm text-[var(--fg-muted)] leading-relaxed mb-5">
                    {project.tagline}
                  </p>

                  {/* Visual Image Preview / Clean Mockup Frame */}
                  <div className="rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--bg)] overflow-hidden mb-5">
                    {/* Mockup Titlebar */}
                    <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-[var(--border)] bg-[var(--bg-elevated)]/60">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                        <span className="ml-2 text-[11px] font-mono text-[var(--fg-muted)] truncate max-w-[200px]">
                          {project.liveUrl ? project.liveUrl.replace("https://", "") : `${project.slug}.dev`}
                        </span>
                      </div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-[var(--accent)] font-semibold">
                        Live Preview
                      </span>
                    </div>

                    {/* Image or Visual Representation */}
                    {hasImage ? (
                      <div className="relative w-full h-52 sm:h-64 overflow-hidden">
                        <Image
                          src={project.image!}
                          alt={`${project.title} screenshot`}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-elevated)]/70 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />
                      </div>
                    ) : (
                      <div className="p-5 space-y-3 font-mono text-xs">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                          <span className="text-[var(--fg)]">
                            <strong>Outcome:</strong> {project.result}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-[var(--fg-muted)] text-[11px]">
                          <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />
                          <span>Enterprise-grade architecture with zero latency leaks</span>
                        </div>
                      </div>
                    )}

                    {/* Metric Pills inside frame */}
                    <div className="grid grid-cols-3 gap-2 p-3 bg-[var(--bg-elevated)]/90 border-t border-[var(--border)]">
                      {project.metrics.map((m) => (
                        <div key={m.label} className="text-center p-1.5 rounded bg-[var(--bg)] border border-[var(--border)]/60">
                          <div className="font-display font-bold text-xs sm:text-sm text-[var(--accent)]">
                            {m.value}
                          </div>
                          <div className="text-[10px] text-[var(--fg-muted)] truncate">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer with stack tags and dual action buttons */}
                <div className="pt-4 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2 py-0.5 rounded bg-[var(--bg)] text-[var(--fg-muted)] border border-[var(--border)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--bg)] text-[var(--fg)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors min-h-[32px]"
                      >
                        <span>Visit Live</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full bg-[var(--accent)] text-[var(--accent-fg)] hover:opacity-90 transition-opacity min-h-[32px]"
                    >
                      <span>Read Story</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
