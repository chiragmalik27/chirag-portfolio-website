"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export function PhilosophyBanner() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[60vh] md:h-[70vh] w-full flex-col items-center justify-center overflow-hidden bg-[#141820] dark:bg-[#07090D] text-[#F9F9F8] py-20">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(107,154,130,0.12)_0%,_transparent_75%)] pointer-events-none" />

      {/* Top Background Stroke Marquee Row */}
      <div className="absolute top-[12%] flex w-full overflow-hidden opacity-10 pointer-events-none select-none">
        <motion.div
          animate={shouldReduceMotion ? {} : { x: ["0%", "-50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          <span className="text-[12vw] font-bold uppercase tracking-tighter text-white/50 px-4">
            INNOVATE • DESIGN • ENGINEER • INNOVATE • DESIGN • ENGINEER •
          </span>
          <span className="text-[12vw] font-bold uppercase tracking-tighter text-white/50 px-4">
            INNOVATE • DESIGN • ENGINEER • INNOVATE • DESIGN • ENGINEER •
          </span>
        </motion.div>
      </div>

      {/* Bottom Background Outline Marquee Row */}
      <div className="absolute bottom-[10%] flex w-full overflow-hidden opacity-15 pointer-events-none select-none">
        <motion.div
          animate={shouldReduceMotion ? {} : { x: ["-50%", "0%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          <span className="text-[12vw] font-bold uppercase tracking-tighter text-transparent [-webkit-text-stroke:2px_#F9F9F8] px-4">
            SCALE • OPTIMIZE • DEPLOY • SCALE • OPTIMIZE • DEPLOY •
          </span>
          <span className="text-[12vw] font-bold uppercase tracking-tighter text-transparent [-webkit-text-stroke:2px_#F9F9F8] px-4">
            SCALE • OPTIMIZE • DEPLOY • SCALE • OPTIMIZE • DEPLOY •
          </span>
        </motion.div>
      </div>

      {/* Centered Spotlight Card Content */}
      <div className="relative z-10 max-w-3xl px-6 text-center">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#8B7355]/30 bg-[#8B7355]/10 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8B7355]" />
          <p className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-[#D4B996]">
            The White Owl Standard
          </p>
        </div>

        <h3 className="text-3xl font-light leading-relaxed sm:text-5xl text-[#F3F2EC] tracking-tight">
          Bridging the gap between{" "}
          <span className="font-serif italic text-[#A08E7D] dark:text-[#E8DCC4] font-normal">
            visionary design
          </span>{" "}
          and{" "}
          <span className="font-serif italic text-[#A08E7D] dark:text-[#E8DCC4] font-normal">
            robust engineering.
          </span>
        </h3>

        <p className="mt-6 text-sm sm:text-base text-neutral-400 max-w-xl mx-auto leading-relaxed">
          Every system we architect is built with senior precision. No shortcuts, no fragile hacks, just resilient code that drives tangible enterprise velocity.
        </p>
      </div>
    </section>
  );
}
