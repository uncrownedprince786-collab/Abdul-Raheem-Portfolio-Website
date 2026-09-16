"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { METRICS } from "@/app/data";
import { Reveal } from "./motion";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(reduced ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setDisplay(value);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const DURATION = 1500;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / DURATION);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduced]);

  return (
    <span ref={ref} aria-label={`${value}${suffix}`}>
      <span aria-hidden="true">{display}</span>
      {suffix}
    </span>
  );
}

export default function Impact() {
  return (
    <section id="impact" className="relative border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mb-14 md:mb-16">
          <div className="flex items-baseline gap-3">
            <span aria-hidden="true" className="hud text-acid">01</span>
            <span aria-hidden="true" className="h-0.5 w-8 bg-acid/50" />
            <span className="hud text-ash">Impact & proof</span>
          </div>
          <h2 className="font-display mt-4 max-w-3xl text-3xl font-light leading-[1.08] text-paper text-balance sm:text-4xl md:text-5xl">
            A release is only ready when testing proves it can survive{" "}
            <em className="em-serif text-acid">production traffic.</em>
          </h2>
        </Reveal>

        {/* Metric counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((m, i) => (
            <Reveal
              key={m.label}
              delay={i * 0.06}
              className={`border-t border-line py-7 pr-6 ${i !== 0 ? "lg:border-l lg:border-t" : ""} ${i === 2 ? "sm:border-t" : "sm:border-t"} sm:border-line`}
            >
              <p className="font-display text-5xl font-medium text-paper md:text-6xl">
                <Counter value={m.value} suffix={m.suffix} />
              </p>
              <p className="mt-3 text-sm font-semibold text-paper">{m.label}</p>
              <p className="mt-1 text-xs text-ash">{m.detail}</p>
            </Reveal>
          ))}
        </div>

        {/* Field note band */}
        <Reveal delay={0.1} className="mt-14 md:mt-20">
          <div className="field-grid border border-line bg-ink-2 px-6 py-8 md:px-10 md:py-10">
            <p className="hud text-acid mb-4">Field note · 2019</p>
            <blockquote className="font-display max-w-3xl text-2xl font-light leading-snug text-paper text-pretty md:text-3xl">
              &ldquo;I spent my first year in tech deliberately breaking software — and learned that{" "}
              <em className="text-acid italic">90% of bugs and missed deadlines come from vague requirements.</em>{" "}
              Today, that&rsquo;s the first thing I fix.&rdquo;
            </blockquote>
          </div>
        </Reveal>
      </div>
    </section>
  );
}