"use client";

import React, { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export function TechShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative flex min-h-[80vh] md:h-screen w-full items-center justify-center overflow-hidden bg-[var(--bg)] border-t border-[var(--border)] py-16">
      {/* 40px Blueprint Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Massive Watermark Stroke Typography */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none overflow-hidden whitespace-nowrap select-none font-bold tracking-tighter opacity-15 dark:opacity-10 text-[var(--fg)]">
        <h2 className="text-[18vw] leading-[0.85]">INNOVATION</h2>
        <h2 className="text-[18vw] leading-[0.85]">TECHNOLOGY</h2>
      </div>

      {/* Centered Rounded Video Container */}
      <div className="relative z-10 h-[45vh] w-[90vw] md:h-[60vh] md:w-[65vw] max-w-6xl overflow-hidden rounded-[32px] sm:rounded-[40px] shadow-2xl bg-black border border-[var(--border)] group">
        <video
          ref={videoRef}
          src="/business-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-85 transition-opacity group-hover:opacity-95"
        />

        {/* Video Overlay Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30 pointer-events-none" />

        {/* Floating Controls */}
        <div className="absolute bottom-5 right-5 z-30">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause video" : "Play video"}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20 hover:bg-black transition-all cursor-pointer shadow-lg"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4 ml-0.5" />
            )}
          </button>
        </div>
      </div>

      {/* Floating Center Statement */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-20">
        <h2 className="text-center text-3xl font-bold tracking-widest text-white drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] sm:text-6xl lg:text-8xl px-4 uppercase leading-[1.05]">
          DIGITAL <br /> EXCELLENCE.
        </h2>
      </div>
    </section>
  );
}
