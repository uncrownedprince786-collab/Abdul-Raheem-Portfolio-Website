"use client";

import { useEffect } from "react";

/**
 * 1. Adds .is-visible to [data-reveal] elements as they enter the viewport
 *    (drives fade/rise animations in globals.css).
 * 2. Drives the experience timeline: a progress line that fills with scroll
 *    and per-entry dots that "light up" once scrolled past.
 */
export default function ScrollEffects() {
  useEffect(() => {
    /* ------------------------------ reveals ------------------------------ */
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    let io: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
      );
      els.forEach((el) => io!.observe(el));
    } else {
      els.forEach((el) => el.classList.add("is-visible"));
    }

    /* ---------------------------- timeline ------------------------------- */
    const timeline = document.querySelector<HTMLElement>("#experience ol");
    const items = timeline
      ? Array.from(timeline.querySelectorAll<HTMLElement>(":scope > li"))
      : [];

    let ticking = false;

    const update = () => {
      ticking = false;
      const winH = window.innerHeight;

      if (timeline) {
        const rect = timeline.getBoundingClientRect();
        // Fill the rail up to a point ~55% down the viewport
        const raw = (winH * 0.55 - rect.top) / rect.height;
        const pct = Math.min(1, Math.max(0, raw));
        timeline.style.setProperty("--tl-progress", pct.toFixed(4));
      }

      items.forEach((li) => {
        const r = li.getBoundingClientRect();
        li.setAttribute(
          "data-passed",
          r.top + 12 < winH * 0.55 ? "true" : "false"
        );
      });
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      io?.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}
