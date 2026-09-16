"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SKILL_GROUPS } from "@/app/data";
import { IconNodeGraph } from "./Icons";
import { Reveal } from "./motion";

export default function Toolkit() {
  const [active, setActive] = useState(0);
  const group = SKILL_GROUPS[active];
  const reduced = useReducedMotion();

  return (
    <section id="skills" className="relative border-t border-line py-16 md:py-24">
      <span aria-hidden="true" className="section-mark" />
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mb-10 md:mb-14">
          <div className="flex items-baseline gap-3">
            <span aria-hidden="true" className="hud text-acid">06</span>
            <span aria-hidden="true" className="h-0.5 w-8 bg-acid/50" />
            <span className="hud text-ash">Toolkit</span>
          </div>
          <h2 className="font-display mt-4 max-w-2xl text-4xl font-light leading-[1.05] text-paper text-balance sm:text-5xl">
            Capabilities, not checklists
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-fawn sm:text-base">
            Grouped by how they&rsquo;re actually used in delivery. Select a capability to see the
            tooling behind it.
          </p>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-12">
          {/* Capability index */}
          <div className="lg:col-span-4">
            <ul className="border-t border-line">
              {SKILL_GROUPS.map((g, i) => {
                const selected = active === i;
                return (
                  <li key={g.category}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-pressed={selected}
                      className={`group flex w-full items-baseline justify-between border-b border-line py-4 text-left transition-colors ${
                        selected ? "text-paper" : "text-ash hover:text-fawn"
                      }`}
                    >
                      <span className="flex items-baseline gap-4">
                        <span className={`font-mono text-xs ${selected ? "text-acid" : "text-smoke"}`}>
                          0{i + 1}
                        </span>
                        <span className="font-display text-2xl font-light tracking-tight">
                          {g.category}
                        </span>
                      </span>
                      <motion.span
                        aria-hidden="true"
                        animate={{ opacity: selected ? 1 : 0, x: selected ? 0 : -4 }}
                        transition={{ duration: 0.3 }}
                        className="h-1.5 w-6 bg-acid"
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Active capability */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={group.category}
                initial={reduced ? { opacity: 1 } : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? { opacity: 1 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="border border-line bg-ink-2 p-7 sm:p-9 md:p-10"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="hud text-acid">Capability 0{active + 1} / 05</p>
                    <h3 className="font-display mt-3 text-3xl font-light text-paper md:text-4xl">
                      {group.category}
                    </h3>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-fawn text-pretty">
                      {group.summary}
                    </p>
                  </div>
                  <IconNodeGraph className="hidden h-12 w-12 shrink-0 text-line-2 sm:block" aria-hidden="true" />
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {group.tools.map((tool, ti) => (
                    <motion.span
                      key={tool}
                      initial={reduced ? { opacity: 1 } : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.04 * ti, duration: 0.35 }}
                      className="border border-line bg-ink px-3.5 py-2 font-mono text-xs text-fawn transition-colors hover:border-acid/60 hover:text-paper"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}