import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({
  children,
  className,
  id,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-28 relative", className)}
      {...props}
    >
      {children}
    </section>
  );
}
