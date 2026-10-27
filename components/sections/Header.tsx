"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
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
    <>
      {/* Floating Island Pill Glass Navbar */}
      <header
        className={cn(
          "fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-7xl transition-all duration-300",
          "rounded-full px-4 sm:px-7 py-2.5 sm:py-3 flex items-center justify-between",
          // Frosted Glass Effect
          "bg-white/35 dark:bg-[#0a0d14]/40 backdrop-blur-xl backdrop-saturate-150",
          "border border-white/70 dark:border-white/15",
          "shadow-[0_8px_32px_0_rgba(0,0,0,0.08),inset_0_1px_1px_0_rgba(255,255,255,0.85),inset_0_-1px_1px_0_rgba(0,0,0,0.03)]",
          "dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.4),inset_0_1px_1px_0_rgba(255,255,255,0.12)]",
          isScrolled &&
            "bg-white/50 dark:bg-[#0a0d14]/65 border-white/90 dark:border-white/20 shadow-[0_12px_40px_0_rgba(0,0,0,0.12),inset_0_1px_1px_0_rgba(255,255,255,0.95)]"
        )}
      >
        {/* Logo / Brand */}
        <Link
          href="/"
          className="flex items-center group focus-visible:outline-2 focus-visible:outline-[var(--accent)] rounded-full"
        >
          <div className="relative h-8 sm:h-9 w-32 sm:w-40 flex items-center">
            <Image
              src="/logo-horizontal-dark.png"
              alt="White Owl Labs"
              fill
              priority
              className="hidden dark:block dark-logo object-contain object-left transition-transform group-hover:scale-102"
            />
            <Image
              src="/logo-horizontal-light.png"
              alt="White Owl Labs"
              fill
              priority
              className="block dark:hidden light-logo object-contain object-left transition-transform group-hover:scale-102"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-medium tracking-wide text-[var(--fg)]/80"
        >
          <a
            href="#home"
            className="hover:text-[var(--accent)] dark:hover:text-white transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[var(--accent)] rounded-sm"
          >
            Home
          </a>
          <a
            href="#services"
            className="hover:text-[var(--accent)] dark:hover:text-white transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[var(--accent)] rounded-sm"
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="hover:text-[var(--accent)] dark:hover:text-white transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[var(--accent)] rounded-sm"
          >
            Portfolio
          </a>
          <a
            href="#about"
            className="hover:text-[var(--accent)] dark:hover:text-white transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[var(--accent)] rounded-sm"
          >
            About
          </a>
        </nav>

        {/* Action CTAs & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 sm:px-7 py-2.5 text-xs sm:text-sm font-medium tracking-wide text-white dark:text-[#10141D] transition-all bg-[#1A1A1A] dark:bg-[#F3F4F6] rounded-full hover:bg-[var(--accent)] dark:hover:bg-white hover:shadow-lg hover:-translate-y-0.5 active:scale-95 cursor-pointer"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile Menu Toggle & Theme */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            ref={toggleBtnRef}
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)]/90 text-[var(--fg)] focus-visible:outline-2 focus-visible:outline-[var(--accent)] cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4" aria-hidden="true" />
            ) : (
              <Menu className="w-4 h-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown Panel */}
      {mobileMenuOpen && (
        <div
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-x-4 top-20 z-50 md:hidden rounded-2xl bg-white/95 dark:bg-[#121622]/95 backdrop-blur-2xl border border-[var(--border)] p-6 shadow-2xl transition-all"
        >
          <nav className="flex flex-col gap-4 text-base font-medium text-[var(--fg)]">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-[var(--border)]/60 hover:text-[var(--accent)] transition-colors"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-[var(--border)]/60 hover:text-[var(--accent)] transition-colors"
            >
              Services
            </a>
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-[var(--border)]/60 hover:text-[var(--accent)] transition-colors"
            >
              Portfolio & Work
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-[var(--border)]/60 hover:text-[var(--accent)] transition-colors"
            >
              About Studio
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 flex items-center justify-center w-full py-3 text-sm font-semibold rounded-full bg-[#1A1A1A] text-white dark:bg-white dark:text-[#1A1A1A]"
            >
              Let&apos;s Talk
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
