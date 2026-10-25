import React from "react";
import { cn } from "@/lib/utils";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "default" | "accent";
  className?: string;
}

export function Tag({
  children,
  variant = "default",
  className,
  ...props
}: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-[var(--radius-sm)] border",
        variant === "default" &&
          "bg-[var(--bg)] text-[var(--fg-muted)] border-[var(--border)]",
        variant === "accent" &&
          "bg-[var(--accent)]/10 text-[var(--accent)] border-[var(--accent)]/30",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
