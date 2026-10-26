"use client";

import React, { useState } from "react";
import { Mail, MessageSquare, Phone, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";
import { contactFormSchema, type ContactFormData } from "@/lib/validators";

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    projectType: "High-Speed Website",
    budget: "",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setStatus("submitting");

    // Client-side validation with Zod
    const validationResult = contactFormSchema.safeParse(formData);
    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};
      validationResult.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0].toString()] = issue.message;
        }
      });
      setErrors(fieldErrors);
      setStatus("idle");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setServerMessage(data.message || "Message sent successfully.");
        setFormData({
          name: "",
          email: "",
          projectType: "High-Speed Website",
          budget: "",
          message: "",
          honeypot: "",
        });
      } else {
        setStatus("error");
        setServerMessage(data.message || "Failed to send message. Please reach out via WhatsApp or email directly.");
      }
    } catch {
      setStatus("error");
      setServerMessage("A network error occurred. Please use WhatsApp or email directly.");
    }
  };

  return (
    <Section id="contact" className="border-t border-[var(--border)]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Inbound Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mb-2 block">
                Get in Touch
              </span>
              <Heading as="h2" size="h2" className="mb-4">
                Partner with White Owl Labs.
              </Heading>
              <p className="text-[var(--fg-muted)] text-body leading-relaxed mb-8">
                Share details about your product vision, architecture requirements, or timeline. Our engineering leads review and respond to every inquiry within 24 hours.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-3">
              <a
                href={siteConfig.contact.phoneUrl}
                className="p-5 rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--bg-elevated)] flex items-center justify-between group hover:border-[var(--accent)] transition-colors min-h-[44px]"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--fg-muted)]">Direct Phone</div>
                    <div className="font-semibold text-sm text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
                      {siteConfig.contact.phone}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-medium text-[var(--accent)]">Call</span>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="p-5 rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--bg-elevated)] flex items-center justify-between group hover:border-[var(--accent)] transition-colors min-h-[44px]"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--fg-muted)]">Official Email</div>
                    <div className="font-semibold text-sm text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
                      {siteConfig.contact.email}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-medium text-[var(--accent)]">Write</span>
              </a>

              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--bg-elevated)] flex items-center justify-between group hover:border-[var(--accent)] transition-colors min-h-[44px]"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--fg-muted)]">Instant WhatsApp</div>
                    <div className="font-semibold text-sm text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
                      {siteConfig.contact.whatsapp}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-medium text-[var(--accent)]">Chat now</span>
              </a>

            </div>
          </div>

          {/* Right Column: Inbound Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--bg-elevated)] p-7 md:p-10">
              {status === "success" ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-[var(--fg)]">
                    Message sent
                  </h3>
                  <p className="text-[var(--fg-muted)] text-sm max-w-md mx-auto">
                    {serverMessage}
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setStatus("idle")}
                    className="mt-4"
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Honeypot field for bot protection */}
                  <div className="sr-only" aria-hidden="true">
                    <label htmlFor="hp_field">Do not fill this</label>
                    <input
                      id="hp_field"
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold uppercase tracking-wider text-[var(--fg-muted)] mb-2"
                      >
                        Your Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Vance"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--bg)] text-[var(--fg)] text-sm focus:border-[var(--accent)] focus-visible:outline-2 focus-visible:outline-[var(--accent)] transition-colors min-h-[44px]"
                      />
                      {errors.name && (
                        <p id="name-error" className="text-xs text-rose-500 mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold uppercase tracking-wider text-[var(--fg-muted)] mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--bg)] text-[var(--fg)] text-sm focus:border-[var(--accent)] focus-visible:outline-2 focus-visible:outline-[var(--accent)] transition-colors min-h-[44px]"
                      />
                      {errors.email && (
                        <p id="email-error" className="text-xs text-rose-500 mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-xs font-semibold uppercase tracking-wider text-[var(--fg-muted)] mb-2"
                      >
                        Area of Interest
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--bg)] text-[var(--fg)] text-sm focus:border-[var(--accent)] focus-visible:outline-2 focus-visible:outline-[var(--accent)] transition-colors min-h-[44px]"
                      >
                        <option value="High-Speed Website">High-Speed Website</option>
                        <option value="Enterprise AI / RAG Model">Enterprise AI / RAG Model</option>
                        <option value="Full-Stack Web App">Full-Stack Web App</option>
                        <option value="Performance & Core Web Vitals">Performance Optimization</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-xs font-semibold uppercase tracking-wider text-[var(--fg-muted)] mb-2"
                      >
                        Estimated Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--bg)] text-[var(--fg)] text-sm focus:border-[var(--accent)] focus-visible:outline-2 focus-visible:outline-[var(--accent)] transition-colors min-h-[44px]"
                      >
                        <option value="">Flexible / Discovery</option>
                        <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                        <option value="$3,000 - $7,000">$3,000 - $7,000</option>
                        <option value="$7,000+">$7,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-wider text-[var(--fg-muted)] mb-2"
                    >
                      Project Overview *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me briefly about what you want to build and your target timeline..."
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--bg)] text-[var(--fg)] text-sm focus:border-[var(--accent)] focus-visible:outline-2 focus-visible:outline-[var(--accent)] transition-colors resize-none"
                    />
                    {errors.message && (
                      <p id="message-error" className="text-xs text-rose-500 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {status === "error" && (
                    <div
                      role="alert"
                      aria-live="assertive"
                      className="p-3 rounded-[var(--radius-sm)] bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs"
                    >
                      {serverMessage}
                    </div>
                  )}

                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={status === "submitting"}
                      size="lg"
                      className="w-full"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      <span>{status === "submitting" ? "Sending message..." : "Send message"}</span>
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
