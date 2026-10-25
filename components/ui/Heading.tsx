import React from "react";
import { cn } from "@/lib/utils";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4";
  size?: "display" | "h1" | "h2" | "h3";
  children: React.ReactNode;
  className?: string;
}

export function Heading({
  as: Component = "h2",
  size = "h2",
  children,
  className,
  ...props
}: HeadingProps) {
  const sizeMap = {
    display: "text-display",
    h1: "text-h1",
    h2: "text-h2",
    h3: "text-h3",
  };

  return (
    <Component className={cn(sizeMap[size], className)} {...props}>
      {children}
    </Component>
  );
}
