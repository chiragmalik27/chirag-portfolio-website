import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  isExternal,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 cursor-pointer min-h-[44px] min-w-[44px] select-none text-center focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3.5 text-base font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-[var(--accent)] text-[var(--accent-fg)] hover:opacity-95 shadow-sm active:scale-[0.98]",
    secondary:
      "bg-[var(--bg-elevated)] text-[var(--fg)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] active:scale-[0.98]",
    outline:
      "bg-transparent text-[var(--fg)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] active:scale-[0.98]",
    ghost:
      "bg-transparent text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-[var(--bg-elevated)] active:scale-[0.98]",
  };

  const classes = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
