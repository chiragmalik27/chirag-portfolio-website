"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
        toggleBtnRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-200 border-b",
        isScrolled
          ? "bg-[var(--bg)]/90 backdrop-blur-md border-[var(--border)] shadow-xs"
          : "bg-transparent border-transparent"
      )}
    >
      <Container>
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-[var(--accent)] rounded-sm"
          >
            <div className="relative h-8 md:h-9 w-36 md:w-44 flex items-center">
              <Image
                src="/logo-horizontal-dark.png"
                alt="White Owl Labs"
                fill
                priority
                className="hidden dark:block object-contain object-left"
              />
              <Image
                src="/logo-horizontal-light.png"
                alt="White Owl Labs"
                fill
                priority
                className="block dark:hidden object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--fg-muted)]"
          >
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[var(--fg)] transition-colors py-2 focus-visible:outline-2 focus-visible:outline-[var(--accent)] rounded-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button href={siteConfig.primaryCta.href} size="sm">
              {siteConfig.primaryCta.label}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              ref={toggleBtnRef}
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--fg)] focus-visible:outline-2 focus-visible:outline-[var(--accent)] cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-x-0 top-16 md:hidden bg-[var(--bg)] border-b border-[var(--border)] px-6 py-8 shadow-xl transition-all"
        >
          <nav className="flex flex-col gap-5 text-lg font-medium text-[var(--fg)]">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[var(--border)]/50 hover:text-[var(--accent)] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <Button
                href={siteConfig.primaryCta.href}
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                {siteConfig.primaryCta.label}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
