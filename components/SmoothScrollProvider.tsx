"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

/* ── SmoothScrollProvider ─────────────────────────────────────────────
   Initialises Lenis smooth scroll on mount and drives it via rAF.
   Wrap your layout with this so every page benefits automatically.
   GSAP ScrollTrigger is synced to Lenis's scroll position so both
   libraries work off the same tick.
───────────────────────────────────────────────────────────────────── */

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo ease-out
      orientation: "vertical",
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    // Sync GSAP ScrollTrigger if it's been imported elsewhere
    lenis.on("scroll", () => {
      if (typeof window !== "undefined" && (window as any).ScrollTrigger) {
        (window as any).ScrollTrigger.update();
      }
    });

    // rAF loop
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Expose on window so GSAP ScrollTrigger can hook in from any component
    (window as any).__lenis = lenis;

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}