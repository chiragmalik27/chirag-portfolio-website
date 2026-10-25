import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Cpu, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import { projects } from "@/content/projects";
import { siteConfig } from "@/content/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study | ${siteConfig.name}`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.tagline,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <article className="py-12 md:py-20">
      <Container>
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent)] rounded-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to selected work
          </Link>
        </div>

        {/* 1. Header */}
        <header className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--bg-elevated)] p-8 md:p-12 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Tag variant="accent">{project.category}</Tag>
              <span className="text-xs text-[var(--fg-muted)]">
                {project.timeline}
              </span>
            </div>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-[var(--accent)] text-[var(--accent-fg)] hover:opacity-90 transition-opacity"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <Heading as="h1" size="h1" className="mb-4">
            {project.title}
          </Heading>

          <p className="text-[var(--fg-muted)] text-body-lg max-w-3xl leading-relaxed mb-8">
            {project.tagline}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-[var(--border)]">
            <div>
              <div className="text-xs uppercase font-semibold text-[var(--fg-muted)] mb-1">
                Client / Product
              </div>
              <div className="text-sm font-medium text-[var(--fg)]">
                {project.client}
              </div>
            </div>

            <div>
              <div className="text-xs uppercase font-semibold text-[var(--fg-muted)] mb-1">
                Role
              </div>
              <div className="text-sm font-medium text-[var(--fg)]">
                {project.role}
              </div>
            </div>

            <div>
              <div className="text-xs uppercase font-semibold text-[var(--fg-muted)] mb-1">
                Timeline
              </div>
              <div className="text-sm font-medium text-[var(--fg)]">
                {project.timeline}
              </div>
            </div>

            <div>
              <div className="text-xs uppercase font-semibold text-[var(--fg-muted)] mb-1">
                Live URL
              </div>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[var(--accent)] hover:underline inline-flex items-center gap-1"
                >
                  <span>{project.liveUrl.replace("https://", "")}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <span className="text-sm text-[var(--fg-muted)]">Internal / NDA</span>
              )}
            </div>
          </div>
        </header>

        {/* Project Metrics Summary Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="p-6 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--bg-elevated)] text-center"
            >
              <div className="text-display text-[var(--accent)] mb-1">
                {metric.value}
              </div>
              <div className="text-sm text-[var(--fg-muted)] font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Content Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Main narrative */}
          <div className="lg:col-span-8 space-y-12">
            {/* 2. The Problem */}
            <section>
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mb-2 block">
                01 / The Challenge
              </span>
              <Heading as="h2" size="h2" className="mb-4">
                The Problem
              </Heading>
              <p className="text-body-lg text-[var(--fg-muted)] leading-relaxed">
                {project.problem}
              </p>
            </section>

            {/* 3. My Approach */}
            <section>
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mb-2 block">
                02 / Architectural Decisions
              </span>
              <Heading as="h2" size="h2" className="mb-4">
                My Approach
              </Heading>
              <div className="space-y-4">
                {project.approach.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--bg-elevated)] flex items-start gap-4"
                  >
                    <div className="w-7 h-7 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-sm sm:text-base text-[var(--fg)] leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. The Solution with Visual Mockup */}
            <section>
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mb-2 block">
                03 / Execution & Interface
              </span>
              <Heading as="h2" size="h2" className="mb-4">
                The Solution
              </Heading>
              <p className="text-body-lg text-[var(--fg-muted)] leading-relaxed mb-6">
                {project.solution}
              </p>

              {/* Clean Mockup Interface */}
              <div className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--bg)] overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--bg-elevated)]/80">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                    <span className="ml-2 text-xs font-mono text-[var(--fg-muted)]">
                      {project.liveUrl ? project.liveUrl.replace("https://", "") : `${project.slug}.dev`}
                    </span>
                  </div>
                  <Tag variant="accent">Production Ready</Tag>
                </div>

                {project.image ? (
                  <div className="relative w-full h-72 sm:h-96">
                    <Image
                      src={project.image}
                      alt={`${project.title} Interface`}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 800px"
                      className="object-cover object-top"
                    />
                  </div>
                ) : (
                  <div className="p-6">
                    <div className="p-4 rounded bg-[var(--bg-elevated)] border border-[var(--border)] font-mono text-xs text-[var(--fg-muted)] space-y-2">
                      <p className="text-[var(--accent)] font-semibold"># Verification Summary</p>
                      <p>✓ Microservices latency: {project.metrics[0]?.value}</p>
                      <p>✓ Business outcome: {project.result}</p>
                      <p>✓ Zero security vulnerabilities detected</p>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* 5. The Result */}
            <section className="p-8 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--bg-elevated)]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mb-2 block">
                04 / Measurable Impact
              </span>
              <Heading as="h2" size="h2" className="mb-3">
                The Result
              </Heading>
              <p className="text-base sm:text-lg text-[var(--fg)] leading-relaxed font-medium">
                {project.result}
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--bg-elevated)] sticky top-28">
              <h3 className="font-display font-bold text-lg text-[var(--fg)] mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[var(--accent)]" />
                <span>Technologies Used</span>
              </h3>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2.5 py-1 rounded-[var(--radius-sm)] bg-[var(--bg)] text-[var(--fg)] border border-[var(--border)] font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {project.liveUrl && (
                <div className="mb-6">
                  <Button href={project.liveUrl} isExternal variant="secondary" className="w-full">
                    <span>Visit Live Platform</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              )}

              <div className="pt-6 border-t border-[var(--border)]">
                <h4 className="font-display font-semibold text-sm text-[var(--fg)] mb-2">
                  Have a similar project?
                </h4>
                <p className="text-xs text-[var(--fg-muted)] mb-4">
                  Let&apos;s evaluate your current architecture and outline an execution plan.
                </p>
                <Button href="/#contact" className="w-full">
                  Book a discovery call
                </Button>
              </div>
            </div>
          </aside>
        </div>

        {/* 6. Next Project Link */}
        <div className="p-8 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--bg-elevated)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase font-semibold text-[var(--fg-muted)] block mb-1">
              Next Case Study
            </span>
            <div className="font-display font-bold text-xl text-[var(--fg)]">
              {nextProject.title}
            </div>
          </div>

          <Button href={`/work/${nextProject.slug}`} variant="secondary">
            <span>Read next case study</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </Container>
    </article>
  );
}
