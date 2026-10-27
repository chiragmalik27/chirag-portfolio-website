"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export function Preloader() {
  const shouldReduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // If reduced motion or already shown in this session, skip
    try {
      if (shouldReduceMotion || (typeof window !== "undefined" && sessionStorage.getItem("owl_preloader_seen"))) {
        const timer = setTimeout(() => {
          setIsComplete(true);
          setShouldRender(false);
        }, 0);
        return () => clearTimeout(timer);
      }
    } catch {
      // ignore storage exceptions
    }

    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 14) + 6;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);
        try {
          sessionStorage.setItem("owl_preloader_seen", "1");
        } catch {}

        setTimeout(() => {
          setIsComplete(true);
          setTimeout(() => {
            setShouldRender(false);
          }, 1200);
        }, 300);
      } else {
        setProgress(current);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  if (!shouldRender) return null;

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 1.1,
              ease: [0.77, 0, 0.175, 1],
            },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#07090D] text-[#F9F9F8] select-none"
        >
          {/* Subtle noise / ambient background aura */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(45,74,62,0.18)_0%,_transparent_70%)] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Wordmark */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-2xl sm:text-4xl md:text-5xl font-light tracking-[0.25em] uppercase text-[#F9F9F8] text-center"
            >
              WHITE OWL LABS
            </motion.h1>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-3 text-[11px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#8B7355] text-center"
            >
              Software &amp; Autonomous AI Systems
            </motion.p>

            {/* Monospace Counter */}
            <div className="mt-10 overflow-hidden">
              <span className="text-sm sm:text-base font-mono tracking-widest text-neutral-400">
                {progress.toString().padStart(3, "0")}%
              </span>
            </div>

            {/* Micro Progress Track */}
            <div className="w-36 h-[1.5px] bg-neutral-800 rounded-full mt-4 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#6B9A82] to-[#8B7355]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.1 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
