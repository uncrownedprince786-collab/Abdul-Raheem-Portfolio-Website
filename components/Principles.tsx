"use client";

import { PRINCIPLES } from "@/app/data";
import { IconTarget, IconLedger, IconHumanNode, IconPulse } from "./Icons";
import { Reveal, Stagger, StaggerItem } from "./motion";

const ICONS = [IconTarget, IconLedger, IconHumanNode, IconPulse];

export default function Principles() {
  return (
    <section id="principles" className="relative border-t border-line py-16 md:py-24">
      <span aria-hidden="true" className="section-mark" />
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mb-10 md:mb-14">
          <div className="flex items-baseline gap-3">
            <span aria-hidden="true" className="hud text-acid">04</span>
            <span aria-hidden="true" className="h-0.5 w-8 bg-acid/50" />
            <span className="hud text-ash">How I think</span>
          </div>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display max-w-2xl text-3xl font-light leading-[1.08] text-paper text-balance sm:text-4xl md:text-5xl">
              My operating <em className="em-serif text-acid">system</em> for product delivery
            </h2>
            <p className="hud text-ash">OS / v7.0 — built in QA, tuned in production</p>
          </div>
        </Reveal>

        <Stagger className="grid gap-px border border-line bg-line sm:grid-cols-2">
          {PRINCIPLES.map((p, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <StaggerItem key={p.title}>
                <article className="group relative h-full bg-ink p-8 transition-colors duration-300 hover:bg-ink-2 md:p-10">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-sm text-ash transition-colors group-hover:text-acid">
                      0{i + 1}
                    </span>
                    <Icon className="h-7 w-7 text-line-2 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-acid" aria-hidden="true" />
                  </div>

                  <h3 className="font-display mt-10 text-2xl font-light leading-tight text-paper md:text-3xl">
                    {p.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-fawn text-pretty">
                    {p.sentence}
                  </p>

                  <span
                    aria-hidden="true"
                    className="mt-8 block h-px w-10 bg-line-2 transition-all duration-500 group-hover:w-full group-hover:bg-acid"
                  />
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}