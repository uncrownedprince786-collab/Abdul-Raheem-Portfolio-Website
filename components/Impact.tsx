"use client";

import { METRICS } from "@/app/data";
import { Reveal } from "./motion";

export default function Impact() {
  return (
    <section id="impact" className="relative border-t border-line py-16 md:py-24">
      <span aria-hidden="true" className="section-mark" />
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mb-10 md:mb-14">
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

        {/* Metric counters — static values, animated reveal only */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((m, i) => (
            <Reveal
              key={m.label}
              delay={i * 0.05}
              className={`border-t border-line py-6 pr-6 ${
                i % 2 === 1 ? "sm:border-l sm:border-t" : "sm:border-t"
              } ${i !== 0 ? "lg:border-l lg:border-t" : "lg:border-t"}`}
            >
              <p className="font-display text-5xl font-medium text-paper md:text-6xl">
                <span>{m.value}</span>
                {m.suffix}
              </p>
              <p className="mt-3 text-sm font-semibold text-paper">{m.label}</p>
              <p className="mt-1 text-xs text-ash">{m.detail}</p>
            </Reveal>
          ))}
        </div>

        {/* Field note band */}
        <Reveal delay={0.08} className="mt-10 md:mt-14">
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