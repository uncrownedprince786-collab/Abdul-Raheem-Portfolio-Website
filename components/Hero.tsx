"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PROFILE } from "@/app/data";
import { LineReveal } from "./motion";
import {
  IconDownload,
  IconArrowUpRight,
  IconMapPin,
  IconClock,
  IconRelayMark,
  IconPipeline,
  IconModule,
  IconGateCheck,
} from "./Icons";

const EASE = [0.16, 1, 0.3, 1] as const;

const PIPELINE = [
  { label: "Intake", icon: IconPipeline },
  { label: "Refine", icon: IconModule },
  { label: "Verify", icon: IconGateCheck },
  { label: "Ship", icon: IconRelayMark },
];

export default function Hero({ hasPhoto }: { hasPhoto: boolean }) {
  return (
    <section id="overview" className="relative overflow-hidden pt-24 pb-12 md:pt-28 md:pb-16">
      {/* Field grid backdrop */}
      <div
        aria-hidden="true"
        className="field-grid pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_72%,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-[-18rem] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(163,230,53,0.06),transparent_60%)]"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* ------------------------------ Copy ------------------------------ */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
              className="flex flex-wrap items-center gap-3"
            >
              <span className="inline-flex items-center gap-2 border border-line bg-ink-2/80 px-3 py-1">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="blink-dot absolute inset-0 rounded-full bg-acid" />
                </span>
                <span className="text-xs font-medium text-fawn">Open to TPM / Scrum Master roles</span>
              </span>
              <span className="hidden h-4 w-px bg-line-2 sm:block" />
              <span className="hud text-ash">EST. 2019 — {new Date().getFullYear()} · Remote-first delivery</span>
            </motion.div>

            <div className="mt-8">
              <LineReveal
                delay={0.18}
                lines={[
                  <h1
                    key="h"
                    className="font-display text-hero text-paper text-balance"
                  >
                    I turn messy
                  </h1>,
                  <h1
                    key="h2"
                    className="font-display text-hero text-paper text-balance"
                  >
                    product work into
                  </h1>,
                  <h1
                    key="h3"
                    className="font-display text-hero text-paper text-balance"
                  >
                    systems that <em className="em-serif text-acid">ship.</em>
                  </h1>,
                ]}
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: EASE, delay: 0.55 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-fawn sm:text-lg"
            >
              {PROFILE.summary}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: EASE, delay: 0.68 }}
              className="mt-9 flex flex-wrap items-center gap-5"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-acid px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-acid-bright"
              >
                Book a 20-min intro call
                <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#work"
                className="link-rule inline-flex items-center gap-2 py-3 text-sm font-medium text-paper"
              >
                See selected work
              </a>
              <a
                href={PROFILE.resume}
                download="Abdul_Raheem_Resume.pdf"
                className="inline-flex items-center gap-2 border border-line-2 bg-ink-2/70 px-4 py-3 text-sm font-medium text-fawn transition-colors hover:border-acid/60 hover:text-paper"
              >
                <IconDownload className="h-4 w-4" />
                <span>CV</span>
              </a>
            </motion.div>

            {/* Metric rail */}
            <motion.dl
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: EASE, delay: 0.8 }}
              className="mt-10 grid max-w-xl grid-cols-2 gap-x-8 gap-y-4 border-t border-line pt-5 sm:grid-cols-4"
            >
              <div>
                <dd className="tabular text-lg font-medium text-paper">7+ yrs</dd>
                <dt className="mt-1 text-[11px] uppercase tracking-[0.14em] text-ash">Career</dt>
              </div>
              <div>
                <dd className="tabular text-lg font-medium text-paper">50+</dd>
                <dt className="mt-1 text-[11px] uppercase tracking-[0.14em] text-ash">Deliveries</dt>
              </div>
              <div>
                <dd className="tabular text-lg font-medium text-paper">95%</dd>
                <dt className="mt-1 text-[11px] uppercase tracking-[0.14em] text-ash">On-time sprints</dt>
              </div>
              <div>
                <dd className="tabular text-lg font-medium text-acid">20+</dd>
                <dt className="mt-1 text-[11px] uppercase tracking-[0.14em] text-ash">Engineers led</dt>
              </div>
            </motion.dl>
          </div>

          {/* --------------------------- System visual --------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: EASE, delay: 0.5 }}
            className="relative mx-auto w-full max-w-sm lg:col-span-5"
          >
            <div className="relative">
              {/* Schematic rails behind the portrait */}
              <svg
                aria-hidden="true"
                viewBox="0 0 320 400"
                fill="none"
                className="absolute -right-10 -top-8 h-[118%] w-[118%] text-paper/20"
              >
                <rect x="20" y="20" width="280" height="360" stroke="currentColor" strokeWidth="0.75" opacity="0.2" />
                <path d="M20 140h280 M20 260h280" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 6" opacity="0.4" />
                <path d="M120 140v120 M220 260V40" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                <g className="blink-dot" style={{ animationDelay: "0.8s" }}>
                  <circle cx="120" cy="140" r="2.4" fill="#a3e635" />
                </g>
                <circle cx="220" cy="260" r="2.4" fill="#a3e635" opacity="0.9" />
                <circle cx="60" cy="60" r="4" stroke="#a3e635" strokeWidth="0.75" opacity="0.65" />
                <circle cx="280" cy="320" r="4" stroke="#a3e635" strokeWidth="0.75" opacity="0.65" />
                {/* slow rotating sprint loop */}
                <g style={{ transformOrigin: "280px 52px", animation: "spin-slow 26s linear infinite" }}>
                  <path d="M252 52a28 28 0 1 1 56 0 28 28 0 1 1-56 0" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 7" opacity="0.55" />
                  <circle cx="280" cy="24" r="2.4" fill="#a3e635" />
                </g>
              </svg>

              <figure className="tick-frame relative">
                {hasPhoto ? (
                  <div className="overflow-hidden border border-line bg-ink-2">
                    <Image
                      src="/images/profile.jpg"
                      alt="Abdul Raheem — Technical Project Manager & Scrum Master"
                      width={640}
                      height={800}
                      priority
                      className="h-auto w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-[4/5] w-full items-center justify-center bg-ink-2 [background-image:radial-gradient(rgba(240,233,218,0.07)_1px,transparent_1px)] [background-size:20px_20px]">
                    <div className="text-center">
                      <IconRelayMark className="mx-auto h-14 w-14 text-acid" />
                      <p className="hud mt-4 text-ash">Abdul Raheem</p>
                    </div>
                  </div>
                )}

                <figcaption className="mt-4 grid grid-cols-2 gap-3 text-left">
                  <div className="border border-line bg-ink-3/90 px-3.5 py-2.5">
                    <p className="hud text-ash">Root</p>
                    <p className="mt-1 text-xs font-medium text-paper">Software Engineering + QA</p>
                  </div>
                  <div className="border border-line bg-ink-3/90 px-3.5 py-2.5">
                    <p className="hud text-ash">Accreditations</p>
                    <p className="mt-1 text-xs font-medium text-acid">PSM I · Google PM · Six Sigma</p>
                  </div>
                </figcaption>
              </figure>

              {/* Delivery pipeline unit */}
              <div className="relative mt-5 border border-line bg-ink-2/80 px-4 py-3">
                <div className="flex items-center justify-between">
                  {PIPELINE.map((step, i) => (
                    <div key={step.label} className="relative flex flex-1 items-center">
                      <div className="flex flex-col items-center gap-1.5">
                        <step.icon className="h-4 w-4 text-ash" />
                        <span className="text-[9px] uppercase tracking-[0.14em] text-fawn">{step.label}</span>
                      </div>
                      {i < PIPELINE.length - 1 && <span className="h-px flex-1 bg-line-2" />}
                    </div>
                  ))}
                  <span className="pulse-through -mt-2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-acid" />
                </div>
              </div>

              {/* Meta */}
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs tabular text-ash">
                <span className="inline-flex items-center gap-1.5">
                  <IconMapPin className="h-3.5 w-3.5" />
                  {PROFILE.location}
                </span>
                <span aria-hidden="true" className="text-smoke">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <IconClock className="h-3.5 w-3.5" />
                  Overlap: {PROFILE.overlap}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* -------------------- Delivery rail (plan→ship) -------------------- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.9 }}
          className="relative mt-12 border-t border-line pt-8 md:mt-16"
          aria-hidden="true"
        >
          <div className="relative">
            <div className="flex items-center justify-between">
              {["Plan", "Build", "Verify", "Ship"].map((s, i) => (
                <div key={s} className="flex flex-1 items-center gap-3">
                  <span className="tabular flex h-6 w-6 items-center justify-center border border-acid/60 text-[10px] text-acid">
                    {i + 1}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.16em] text-fawn">{s}</span>
                  {i < 3 && <span className="h-px flex-1 bg-line-2" />}
                </div>
              ))}
            </div>
            <span className="pulse-through -mt-1.5 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-acid" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}