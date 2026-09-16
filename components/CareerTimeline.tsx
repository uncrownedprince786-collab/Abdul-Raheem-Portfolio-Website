"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { CAREER_EXPERIENCE } from "@/app/data";
import { IconChevronDown, IconMapPin } from "./Icons";

function RoleEntry({ role, index }: { role: (typeof CAREER_EXPERIENCE)[number]; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div className="relative pl-10 sm:pl-14">
      {/* Node */}
      <span aria-hidden="true" className="absolute -left-[5px] top-1.5">
        <span className="block h-2.5 w-2.5 rounded-full border border-brass bg-ink" />
      </span>

      {/* Meta line */}
      <p className="font-mono text-xs text-brass">
        {role.duration}
        <span className="text-smoke"> · </span>
        <span className="text-ash">{role.year}</span>
      </p>

      <h3 className="font-display mt-2 text-2xl font-light leading-tight text-paper sm:text-3xl">
        {role.title}
      </h3>

      <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-fawn">
        <span className="font-medium text-paper">{role.company}</span>
        <span className="inline-flex items-center gap-1.5 font-mono text-xs text-ash">
          <IconMapPin className="h-3.5 w-3.5" />
          {role.location}
        </span>
      </div>

      <p className="mt-4 max-w-2xl border-l-2 border-brass/50 pl-4 text-sm italic leading-relaxed text-fawn text-pretty">
        &ldquo;{role.storyQuote}&rdquo;
      </p>

      {/* Expandable detail */}
      <div className="mt-4 max-w-2xl">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="link-rule inline-flex items-center gap-2 py-1 font-mono text-xs text-brass"
        >
          {open ? "Collapse" : "Expand"} delivery detail
          <IconChevronDown
            className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>

        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <ul className="mt-4 space-y-2.5">
            {role.bullets.map((b) => (
              <li key={b.slice(0, 40)} className="flex items-start gap-2.5 text-sm leading-relaxed text-fawn">
                <span aria-hidden="true" className="mt-2 h-px w-4 shrink-0 bg-brass/70" />
                <span className="text-pretty">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {role.skills.map((s) => (
              <span key={s} className="border border-line bg-ink-3 px-2.5 py-1 font-mono text-xs text-fawn">
                {s}
              </span>
            ))}
          </div>

          <p className="mt-5 border-t border-line pt-4 text-xs text-ash">
            <span className="hud mr-2">Verdict</span>
            {role.verdict}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default function CareerTimeline() {
  const listRef = useRef<HTMLOListElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.75", "end 0.55"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.06], [0, 1]);

  return (
    <section id="experience" className="relative border-t border-line py-24 bg-ink-2/40 md:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <motion.div
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 md:mb-20"
        >
          <div className="flex items-baseline gap-3">
            <span aria-hidden="true" className="hud text-brass">05</span>
            <span aria-hidden="true" className="h-0.5 w-8 bg-brass/50" />
            <span className="hud text-ash">Career journey</span>
          </div>
          <h2 className="font-display mt-4 max-w-3xl text-4xl font-light leading-[1.05] text-paper text-balance sm:text-5xl">
            From breaking code in QA to steering 50+ releases
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-fawn sm:text-base">
            A progression, not a CV. Each role shaped how I run delivery today — starting with the year
            I learned to see software the way users do.
          </p>
        </motion.div>

        <div className="relative max-w-3xl">
          {/* Rail */}
          <span aria-hidden="true" className="absolute top-0 bottom-0 left-0 w-px bg-line" />
          <motion.span
            aria-hidden="true"
            style={{ scaleY, opacity }}
            className="absolute top-0 bottom-0 left-0 w-px origin-top bg-gradient-to-b from-brass via-brass/70 to-brass/30"
          />

          <ol ref={listRef} className="space-y-14">
            {CAREER_EXPERIENCE.map((role, i) => (
              <motion.li
                key={`${role.company}-${role.duration}`}
                initial={reduced ? { opacity: 1 } : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px 0px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
              >
                <RoleEntry role={role} index={i} />
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}