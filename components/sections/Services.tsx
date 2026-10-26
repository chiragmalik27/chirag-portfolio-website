import React from "react";
import { Check, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { services, processSteps } from "@/content/services";

export function Services() {
  return (
    <Section id="services" className="border-t border-[var(--border)]">
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mb-2 block">
            Services & Expertise
          </span>
          <Heading as="h2" size="h2" className="mb-4">
            How we engineer, launch, and scale your systems.
          </Heading>
          <p className="text-[var(--fg-muted)] text-body-lg">
            Senior-level engineering focused on high-throughput architecture, sub-second latency, and intelligent automation.
          </p>
        </div>

        {/* 3 Core Services Bento Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--bg-elevated)] p-7 sm:p-8 flex flex-col justify-between hover:border-[var(--accent)]/50 transition-colors"
            >
              <div>
                <h3 className="font-display font-bold text-xl text-[var(--fg)] mb-2">
                  {service.title}
                </h3>
                <p className="text-xs font-medium text-[var(--accent)] mb-4">
                  {service.tagline}
                </p>
                <p className="text-sm text-[var(--fg-muted)] leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-[var(--border)]">
                  {service.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-[var(--fg)] leading-normal">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[var(--border)]">
                <Button href="#contact" variant="ghost" size="sm" className="w-full justify-between">
                  <span>Discuss this project</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* How I Work — Verified Sequential Process */}
        <div className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--bg-elevated)] p-8 md:p-12">
          <div className="max-w-xl mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mb-2 block">
              The Process
            </span>
            <Heading as="h3" size="h2" className="mb-3">
              How we work together.
            </Heading>
            <p className="text-sm sm:text-base text-[var(--fg-muted)]">
              No black boxes. A transparent 3-step collaboration designed to launch on schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {processSteps.map((step) => (
              <div key={step.step} className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[var(--accent)] text-[var(--accent-fg)] flex items-center justify-center font-display font-bold text-sm">
                    {step.step}
                  </div>
                  <span className="text-xs font-mono font-medium text-[var(--accent)] px-2 py-0.5 rounded bg-[var(--accent)]/10">
                    {step.duration}
                  </span>
                </div>

                <h4 className="font-display font-bold text-lg text-[var(--fg)] mb-2">
                  {step.title}
                </h4>

                <p className="text-sm text-[var(--fg-muted)] leading-relaxed">
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
