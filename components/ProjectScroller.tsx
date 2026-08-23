"use client";

import { useCallback, useEffect, useRef } from "react";
import type { ReactNode } from "react";

/**
 * Horizontal project carousel.
 * Auto-advances slowly, pauses on hover / focus / touch, rewinds smoothly at
 * the end, exposes prev/next controls, and stays fully static when the user
 * prefers reduced motion.
 */
export default function ProjectScroller({ children }: { children: ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const rewindingRef = useRef(false);
  const resumeTimer = useRef<number | null>(null);

  const pause = useCallback(() => {
    pausedRef.current = true;
    if (resumeTimer.current !== null) {
      window.clearTimeout(resumeTimer.current);
      resumeTimer.current = null;
    }
  }, []);

  const resumeSoon = useCallback(() => {
    if (resumeTimer.current !== null) window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => {
      pausedRef.current = false;
    }, 1500);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    let raf = 0;
    let last = performance.now();
    const SPEED = 22; // px per second, deliberately slow

    const step = (t: number) => {
      const dt = Math.min(t - last, 64);
      last = t;

      if (!pausedRef.current && !rewindingRef.current) {
        const max = el.scrollWidth - el.clientWidth;
        if (max > 4) {
          const next = el.scrollLeft + (dt / 1000) * SPEED;
          if (next >= max - 1) {
            rewindingRef.current = true;
            el.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            el.scrollLeft = next;
          }
        }
      }

      if (rewindingRef.current && el.scrollLeft < 2) {
        rewindingRef.current = false;
      }

      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);

    const onWheel = () => {
      if (!rewindingRef.current) pause();
    };

    el.addEventListener("wheel", onWheel, { passive: true });
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("touchend", resumeSoon, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", resumeSoon);
      if (resumeTimer.current !== null) window.clearTimeout(resumeTimer.current);
    };
  }, [pause, resumeSoon]);

  const nudge = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    pause();
    el.scrollBy({ left: dir * 412, behavior: "smooth" });
    resumeSoon();
  };

  return (
    <div
      className="group/scroller relative"
      onMouseEnter={pause}
      onMouseLeave={resumeSoon}
      onFocusCapture={pause}
      onBlurCapture={resumeSoon}
    >
      {/* edge fades */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-[1] hidden w-10 bg-gradient-to-r from-paper to-transparent sm:block" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-[1] hidden w-10 bg-gradient-to-l from-paper to-transparent sm:block" />

      {/* controls */}
      <button
        type="button"
        aria-label="Previous projects"
        onClick={() => nudge(-1)}
        className="absolute -left-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-hairline bg-paper/90 text-navy shadow-[0_10px_28px_-12px_rgba(27,54,93,0.35)] backdrop-blur transition-all duration-300 hover:border-navy/25 hover:bg-white md:grid"
      >
        <span aria-hidden="true">←</span>
      </button>
      <button
        type="button"
        aria-label="Next projects"
        onClick={() => nudge(1)}
        className="absolute -right-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-hairline bg-paper/90 text-navy shadow-[0_10px_28px_-12px_rgba(27,54,93,0.35)] backdrop-blur transition-all duration-300 hover:border-navy/25 hover:bg-white md:grid"
      >
        <span aria-hidden="true">→</span>
      </button>

      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2"
      >
        {children}
      </div>
    </div>
  );
}
