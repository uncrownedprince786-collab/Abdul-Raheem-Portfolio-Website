"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconSprintArc, IconNodeGraph, IconGateCheck, IconDispatchRail, IconBolt } from "./Icons";

const PHASES = [
  {
    id: "discovery",
    phaseNumber: "Phase 01",
    title: "Discovery & scope defense",
    tagline: "Before a single line of code is written",
    icon: IconSprintArc,
    keyArtifacts: ["PRD (Product Requirement Document)", "Gherkin Acceptance Criteria (Given/When/Then)", "User Story Map", "Technical API Contract"],
    narrative:
      "Most sprint delays happen before sprint planning ever starts. I work with business stakeholders and engineering leads to turn fuzzy ideas into testable user stories with rock-solid acceptance criteria. If edge cases aren't solved in the document, they will haunt the team in code.",
    pmRules: [
      "No story enters the sprint without explicit 'Definition of Ready' (DoR).",
      "Edge cases (network drops, empty states, auth timeouts) defined upfront.",
      "API payload structures agreed between frontend and backend leads.",
    ],
  },
  {
    id: "execution",
    phaseNumber: "Phase 02",
    title: "Sprint execution & velocity",
    tagline: "Protecting engineer focus and unblocking fast",
    icon: IconNodeGraph,
    keyArtifacts: ["Jira / Linear Sprint Board", "Daily Standup Notes", "Burndown & Velocity Telemetry", "Risk & Blocker Register"],
    narrative:
      "My daily goal during active sprints is simple: eliminate friction so developers can stay in deep work. Standups are sharp (15 mins max), blockers are cleared within 2 hours, and mid-sprint scope creep is strictly quarantined to future backlogs.",
    pmRules: [
      "Strict WIP limits prevent multitasking paralysis.",
      "Daily asynchronous updates for remote time zones with instant escalation paths.",
      "Zero scope additions mid-sprint unless explicitly swapped with equal story points.",
    ],
  },
  {
    id: "qa-gate",
    phaseNumber: "Phase 03",
    title: "Verification & QA gateway",
    tagline: "Because releases are only ready when testing says so",
    icon: IconGateCheck,
    keyArtifacts: ["TestRail Test Matrix", "Staging Demo Run", "UAT Sign-Off Document", "Defect Severity Triage"],
    narrative:
      "Coming from QA roots, I never treat testing as a last-minute scramble. Features move to Staging, run through regression suites, and are validated against real customer workflows before getting a production greenlight.",
    pmRules: [
      "Critical and High defects block release unconditionally.",
      "UAT conducted with real stakeholders on staging.",
      "Cross-browser and mobile responsive checks on physical devices.",
    ],
  },
  {
    id: "release",
    phaseNumber: "Phase 04",
    title: "Zero-downtime release & retrospective",
    tagline: "Calm deployments and continuous team evolution",
    icon: IconDispatchRail,
    keyArtifacts: ["Release Checklist", "Rollback Protocol", "Live Telemetry Dashboard", "Sprint Retrospective Notes"],
    narrative:
      "Deployments should be routine, not heart-pounding events. Releases are scheduled with rollback plans in place. After launch, we review telemetry and hold a blameless retrospective to find one process improvement for the next sprint.",
    pmRules: [
      "Documented rollback procedure verified before production deployment.",
      "Post-deployment smoke testing performed within 15 minutes of cutover.",
      "Bi-weekly retrospective turns team pain points into concrete backlog items.",
    ],
  },
];

export default function SprintLifecycle() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = PHASES[activeIdx];
  const ActiveIcon = current.icon;

  return (
    <div className="border border-line bg-ink-2 p-6 sm:p-8">
      {/* Node rail */}
      <div className="grid gap-px border border-line bg-line sm:grid-cols-4" role="tablist" aria-label="Phases">
        {PHASES.map((p, idx) => {
          const Icon = p.icon;
          const active = activeIdx === idx;
          return (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={active}
              aria-controls={`phase-panel-${p.id}`}
              onClick={() => setActiveIdx(idx)}
              className={`relative px-5 py-5 text-left transition-colors ${
                active ? "bg-acid text-ink" : "bg-ink-3 text-fawn hover:bg-ink-4"
              }`}
            >
              <span className={`font-mono text-[10px] ${active ? "text-ink/70" : "text-ash"}`}>
                0{idx + 1}
              </span>
              <span className="mt-2 flex items-center gap-2 text-sm font-semibold">
                <Icon className="h-4 w-4 shrink-0" />
                {p.title.split(" &")[0]}
              </span>
              <span className={`hud mt-1.5 block ${active ? "text-ink/70" : "text-ash"}`}>
                {p.tagline}
              </span>
              {active && (
                <motion.span
                  layoutId="phase-hairline"
                  className="absolute inset-x-0 bottom-0 h-0.5 bg-acid-bright"
                  aria-hidden="true"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Active panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          id={`phase-panel-${current.id}`}
          role="tabpanel"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 grid gap-8 lg:grid-cols-12"
        >
          {/* Narrative */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-acid/50 text-acid">
                <ActiveIcon className="h-5 w-5" />
              </div>
              <div>
                <span className="hud text-ash">{current.phaseNumber} · {current.tagline}</span>
                <h4 className="font-display mt-0.5 text-xl font-light text-paper">{current.title}</h4>
              </div>
            </div>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-fawn text-pretty">{current.narrative}</p>

            <div className="mt-7 border-l-2 border-acid/50 pl-5">
              <h5 className="font-mono text-[11px] uppercase tracking-[0.18em] text-acid">
                Core governance rules
              </h5>
              <ul className="mt-3 space-y-2.5">
                {current.pmRules.map((rule) => (
                  <li key={rule} className="flex items-start gap-2.5 text-sm text-fawn">
                    <IconBolt className="mt-0.5 h-3.5 w-3.5 shrink-0 text-acid/80" aria-hidden="true" />
                    <span className="text-pretty">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Artifacts */}
          <div className="lg:col-span-5">
            <div className="border border-line bg-ink-3/60 p-5">
              <h5 className="hud text-ash mb-3">Phase deliverables & artifacts</h5>
              <div className="space-y-2">
                {current.keyArtifacts.map((art) => (
                  <div
                    key={art}
                    className="flex items-center justify-between gap-3 border border-line bg-ink-2 px-3.5 py-2.5"
                  >
                    <span className="text-xs font-medium text-paper">{art}</span>
                    <span className="font-mono text-[10px] text-acid">signed off</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                <button
                  type="button"
                  onClick={() => setActiveIdx((prev) => (prev > 0 ? prev - 1 : PHASES.length - 1))}
                  className="font-mono text-xs text-ash transition-colors hover:text-paper"
                >
                  ← Previous
                </button>
                <span className="font-mono text-xs text-ash">{activeIdx + 1} / {PHASES.length}</span>
                <button
                  type="button"
                  onClick={() => setActiveIdx((prev) => (prev < PHASES.length - 1 ? prev + 1 : 0))}
                  className="font-mono text-xs text-acid transition-colors hover:text-acid-bright"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}