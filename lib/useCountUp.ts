"use client";

import { useEffect, useRef, useState } from "react";

/* ── useCountUp ───────────────────────────────────────────────────────
   Counts from 0 up to `end` over `duration` ms when `trigger` is true.
   Pass the numeric portion only (e.g. 5000 for "5,000+").
   The suffix ("+", "x", etc.) is handled by the component.
───────────────────────────────────────────────────────────────────── */

export function useCountUp(end: number, duration = 1800, trigger = false) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!trigger) return;

    const startTime = performance.now();

    function step(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    }

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [trigger, end, duration]);

  return count;
}