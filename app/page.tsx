import { existsSync } from "node:fs";
import path from "node:path";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import ProjectGallery from "@/components/ProjectGallery";
import SprintLifecycle from "@/components/SprintLifecycle";
import Principles from "@/components/Principles";
import CareerTimeline from "@/components/CareerTimeline";
import Toolkit from "@/components/Toolkit";
import CertificateGallery from "@/components/CertificateModal";
import ContactDeck from "@/components/ContactDeck";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/motion";
import { FAQS } from "@/app/data";
import { IconArrowUpRight, IconChevronDown } from "@/components/Icons";

const PROFILE_PHOTO_PATH = path.join(process.cwd(), "public", "images", "profile.jpg");
const hasProfilePhoto = existsSync(PROFILE_PHOTO_PATH);

function FaqAccordion() {
  return (
    <div className="grid gap-px border border-line bg-line">
      {FAQS.map((faq, i) => (
        <details
          key={faq.q}
          className="group bg-ink transition-colors open:bg-ink-2"
          {...(i === 0 ? { open: true } : {})}
        >
          <summary className="flex cursor-pointer items-center justify-between gap-6 px-6 py-5 text-left select-none [&::-webkit-details-marker]:hidden sm:px-8">
            <span className="flex items-center gap-5">
              <span className="hidden font-mono text-xs text-smoke sm:block">0{i + 1}</span>
              <h3 className="text-sm font-medium leading-snug text-paper sm:text-base">{faq.q}</h3>
            </span>
            <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-line-2 text-fawn transition-all duration-300 group-open:rotate-180 group-open:border-acid group-open:text-acid">
              <IconChevronDown className="h-3.5 w-3.5" />
            </span>
          </summary>
          <div className="border-t border-line px-6 pb-6 sm:px-8">
            <p className="max-w-3xl pt-5 text-sm leading-relaxed text-fawn text-pretty">
              <span className="mr-3 inline-block h-0.5 w-6 bg-acid/70 align-middle" aria-hidden="true" />
              {faq.a}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main id="main" className="relative">
      {/* Signal header strip */}
      <div className="overflow-hidden border-b border-line bg-ink-2">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ash sm:px-6">
          <span>Signal &amp; Systems / Abdul Raheem</span>
          <span className="hidden sm:inline-flex">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-acid align-middle" aria-hidden="true" />
            Accepting new engagements
          </span>
          <span>EST. 2019</span>
        </div>
      </div>

      {/* 00 — Hero */}
      <Hero hasPhoto={hasProfilePhoto} />

      {/* 01 — Impact & proof */}
      <Impact />

      {/* 02 — Selected work */}
      <Section
        id="work"
        index="02"
        eyebrow="Selected work"
        title={
          <>
            Systems I&rsquo;ve taken from whiteboard{<br className="hidden sm:block" />} to{" "}
            <em className="em-serif text-acid">production</em>
          </>
        }
        subtitle="Seven deliveries across logistics, AI education, data infrastructure, mobility and e-commerce. Filter by category, open a case study, and trace the system flows I owned."
      >
        <ProjectGallery />
      </Section>

      {/* 03 — Delivery method */}
      <Section
        id="method"
        index="03"
        eyebrow="Delivery method"
        title="The dispatch engine"
        subtitle="How a feature idea becomes a tested, zero-downtime release — four phases, each with hard governance rules I don't compromise on."
        className="bg-ink-2/40"
      >
        <SprintLifecycle />

        <div className="mt-6 border border-line bg-ink-2/60 p-6 sm:p-7">
          <h3 className="hud text-acid">How I work with teams</h3>
          <ul className="mt-4 grid gap-4 sm:grid-cols-3">
            {[
              "A 15-minute standup and a Definition of Done sharp enough that \u201calmost done\u201d isn\u2019t a status.",
              "Business intent becomes Gherkin-tested user stories before the sprint ever starts.",
              "WIP stays tight and blockers clear within 2 hours \u2014 engineers stay in deep work.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-sm leading-relaxed text-fawn">
                <span className="mt-2 h-px w-4 shrink-0 bg-acid/70" aria-hidden="true" />
                <span className="text-pretty">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 04 — How I think */}
      <Principles />

      {/* 05 — Career journey */}
      <CareerTimeline />

      {/* 06 — Toolkit */}
      <Toolkit />

      {/* 07 — Credentials */}
      <Section
        id="credentials"
        index="07"
        eyebrow="Credentials & proof"
        title="Verified, not decorative"
        subtitle="The headlines of the record hold up to the click. Key credentials verified with issuing bodies, plus the full Google PM specialization track behind the modal."
      >
        <CertificateGallery />
      </Section>

      {/* 08 — FAQ */}
      <Section
        id="faq"
        index="08"
        eyebrow="On record"
        title="Questions hiring managers ask"
        subtitle="Straight answers about the technical layer, remote delivery across time zones, scope control, and where AI fits in my process."
        className="bg-ink-2/40"
      >
        <FaqAccordion />
      </Section>

      {/* 09 — Contact */}
      <Section
        id="contact"
        index="09"
        eyebrow="Open a channel"
        title="Let&rsquo;s build something steady"
        subtitle="Hiring a TPM, starting a delivery initiative, or need sprint consulting — send a note and I&rsquo;ll come back with something useful."
      >
        <ContactDeck />
      </Section>

      {/* Footer */}
      <footer className="border-t border-line bg-ink-2">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
            <div>
              <p className="font-display text-2xl font-light text-paper">
                Abdul Raheem
              </p>
              <p className="hud mt-3 text-ash">Technical Project Manager · Scrum Master</p>
              <p className="mt-1 font-mono text-xs text-ash">Lahore, PK (UTC+5) · UK · EU · GCC · US-East</p>
            </div>

            <nav aria-label="Footer" className="grid grid-cols-2 gap-x-12 gap-y-2 sm:grid-cols-3">
              {[
                ["Work", "#work"],
                ["Method", "#method"],
                ["Experience", "#experience"],
                ["Principles", "#principles"],
                ["Skills", "#skills"],
                ["Credentials", "#credentials"],
                ["FAQ", "#faq"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a key={href} href={href} className="hud text-ash transition-colors hover:text-acid">
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 sm:flex-row sm:items-center">
            <p className="font-mono text-[11px] text-ash">
              © {new Date().getFullYear()} Abdul Raheem · All rights reserved
            </p>
            <a
              href="#top"
              className="link-rule inline-flex items-center gap-2 font-mono text-xs text-acid"
            >
              Back to top
              <IconArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}