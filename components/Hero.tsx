"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { PROFILE } from "@/app/data";
import { IconDownload, IconArrowUpRight, IconMapPin, IconClock } from "./Icons";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero({ hasPhoto }: { hasPhoto: boolean }) {
  const reduced = useReducedMotion();

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: reduced ? 0 : 0.1, delayChildren: 0.05 } },
  };
  const item = {
    hidden: reduced ? { opacity: 1 } : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: EASE },
    },
  };

  return (
    <section id="overview" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Background systems */}
      <div aria-hidden="true" className="dispatch-rails dispatch-rails-fade pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-[-20rem] h-[46rem] w-[46rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(196,160,84,0.10),transparent_62%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-52 top-64 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(127,180,221,0.06),transparent_62%)] blur-2xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-14 lg:grid-cols-12"
        >
          {/* ------------------------------ Copy ------------------------------ */}
          <div className="lg:col-span-7">
            <motion.div variants={item} className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-ink-2/80 px-3 py-1">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-moss opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-moss" />
                </span>
                <span className="text-xs font-medium text-fawn">Open to TPM / Scrum Master roles</span>
              </span>
              <span className="hidden h-5 w-px bg-line-2 sm:block" />
              <span className="hud text-ash">EST. 2019 — {new Date().getFullYear()} · Remote-first delivery</span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display mt-8 text-[2.6rem] font-light leading-[1.02] tracking-tight text-paper text-balance sm:text-6xl md:text-7xl"
            >
              I turn messy product work into{" "}
              <em className="font-display italic text-brass">software that ships.</em>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base leading-relaxed text-fawn sm:text-lg"
            >
              {PROFILE.summary}
            </motion.p>

            {/* Signal strip */}
            <motion.dl
              variants={item}
              className="mt-8 flex max-w-xl flex-wrap items-baseline gap-x-8 gap-y-3 border-y border-line py-4"
            >
              <div>
                <dt className="hud text-ash">Role</dt>
                <dd className="mt-1 text-sm font-medium text-paper">Technical Project Manager · Scrum Master</dd>
              </div>
              <div>
                <dt className="hud text-ash">Track record</dt>
                <dd className="mt-1 text-sm font-mono text-brass">7+ yrs · 50+ deliveries · 95% on-time</dd>
              </div>
            </motion.dl>

            {/* CTAs */}
            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-sm bg-brass px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-brass-bright"
              >
                See selected work
                <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#method"
                className="link-rule inline-flex items-center gap-2 py-3 text-sm font-medium text-paper"
              >
                How I deliver
              </a>
              <a
                href={PROFILE.resume}
                download="Abdul_Raheem_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-sm border border-line-2 bg-ink-2/70 px-4 py-3 text-sm font-medium text-fawn transition-colors hover:border-brass/60 hover:text-paper"
              >
                <IconDownload className="h-4 w-4" />
                <span>CV</span>
              </a>
            </motion.div>

            {/* Meta */}
            <motion.div variants={item} className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-ash">
              <span className="inline-flex items-center gap-1.5">
                <IconMapPin className="h-3.5 w-3.5" />
                {PROFILE.location}
              </span>
              <span aria-hidden="true" className="text-smoke">·</span>
              <span className="inline-flex items-center gap-1.5">
                <IconClock className="h-3.5 w-3.5" />
                Overlap: {PROFILE.overlap}
              </span>
            </motion.div>
          </div>

          {/* ---------------------------- Portrait ---------------------------- */}
          <motion.div variants={item} className="relative mx-auto w-full max-w-sm lg:col-span-5">
            <div className="relative">
              {/* Node graph — abstract field note behind */}
              <svg
                aria-hidden="true"
                viewBox="0 0 320 380"
                fill="none"
                className="absolute -right-8 -top-10 h-[120%] w-[120%] text-ash/30"
              >
                <path d="M40 40 h240 M40 100 h240 M40 160 h240 M40 220 h240 M40 280 h240 M40 340 h120" stroke="currentColor" strokeWidth="1" opacity="0.28" />
                <circle cx="40" cy="40" r="3" fill="currentColor" />
                <circle cx="280" cy="40" r="3" fill="currentColor" />
                <circle cx="40" cy="340" r="3" fill="currentColor" />
                <circle cx="160" cy="340" r="3" fill="currentColor" />
                <path d="M120 70 C 160 40, 200 40, 240 70" stroke="currentColor" strokeWidth="1" strokeDasharray="3 5" opacity="0.5" />
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
                  <div className="flex aspect-[4/5] w-full items-center justify-center bg-ink-2 [background-image:radial-gradient(rgba(241,237,227,0.08)_1px,transparent_1px)] [background-size:20px_20px]">
                    <div className="text-center">
                      <span className="font-display text-6xl font-light text-brass">AR</span>
                      <p className="hud mt-3 text-ash">Abdul Raheem</p>
                    </div>
                  </div>
                )}

                {/* Dispatch ticket chips */}
                <figcaption className="mt-4 grid grid-cols-2 gap-3 text-left">
                  <div className="border border-line bg-ink-3/90 px-3.5 py-2.5">
                    <p className="hud text-ash">Root</p>
                    <p className="mt-1 text-xs font-medium text-paper">Software Engineering + QA</p>
                  </div>
                  <div className="border border-line bg-ink-3/90 px-3.5 py-2.5">
                    <p className="hud text-ash">Accreditations</p>
                    <p className="mt-1 text-xs font-medium text-brass">PSM I · Google PM · Six Sigma</p>
                  </div>
                </figcaption>
              </figure>
            </div>
          </motion.div>
        </motion.div>

        {/* ---------------------- Dispatch rail (plan→ship) ---------------------- */}
        <motion.div
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.55 }}
          className="mt-16 border-t border-line pt-8 md:mt-20"
          aria-hidden="true"
        >
          <div className="flex items-center justify-between text-[11px] font-mono text-ash">
            {["Plan", "Build", "Verify", "Ship"].map((s, i) => (
              <div key={s} className="flex flex-1 items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-brass/50 text-[9px] text-brass">
                  {i + 1}
                </span>
                <span className="hidden sm:inline">{s}</span>
                {i < 3 && <span className="h-px flex-1 bg-line-2" />}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}