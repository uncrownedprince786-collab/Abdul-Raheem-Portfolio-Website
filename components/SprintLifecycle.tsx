"use client";

import { useState } from "react";
import {
  IconKanban,
  IconShieldCheck,
  IconGitBranch,
  IconTerminal,
  IconCheckCircle,
  IconArrowUpRight,
  IconClock,
  IconUsers,
  IconLayers,
} from "./Icons";

const PHASES = [
  {
    id: "discovery",
    phaseNumber: "Phase 01",
    title: "Discovery & Scope Defense",
    tagline: "Before a single line of code is written",
    icon: IconLayers,
    color: "from-indigo-500/20 to-indigo-600/5 text-indigo-400 border-indigo-500/30",
    activePill: "bg-indigo-600 text-white",
    keyArtifacts: ["PRD (Product Requirement Document)", "Gherkin Acceptance Criteria (Given/When/Then)", "User Story Map", "Technical API Contract"],
    narrative:
      "Most sprint delays happen before sprint planning ever starts. I work with business stakeholders and engineering leads to turn fuzzy ideas into testable user stories with rock-solid acceptance criteria. If edge cases aren't solved in the document, they will haunt the team in code.",
    pmRules: [
      "No story enters the sprint without explicit 'Definition of Ready' (DoR).",
      "Edge cases (network drops, empty states, auth timeouts) defined upfront.",
      "API payload structures agreed upon between frontend and backend leads.",
    ],
  },
  {
    id: "execution",
    phaseNumber: "Phase 02",
    title: "Sprint Execution & Velocity",
    tagline: "Protecting engineer focus and unblocking fast",
    icon: IconKanban,
    color: "from-sky-500/20 to-sky-600/5 text-sky-400 border-sky-500/30",
    activePill: "bg-sky-600 text-white",
    keyArtifacts: ["Jira / Linear Sprint Board", "Daily Standup Notes", "Burndown & Velocity Telemetry", "Risk & Blocker Register"],
    narrative:
      "My daily goal during active sprints is simple: eliminate friction so developers can stay in deep work. Standups are sharp (15 mins max), blockers are cleared within 2 hours, and mid-sprint scope creep is strictly quarantined to future backlogs.",
    pmRules: [
      "Strict WIP (Work-In-Progress) limits prevent multitasking paralysis.",
      "Daily asynchronous updates for remote time zones with instant escalation paths.",
      "Zero scope additions mid-sprint unless explicitly swapped with equal story points.",
    ],
  },
  {
    id: "qa-gate",
    phaseNumber: "Phase 03",
    title: "Verification & QA Gateway",
    tagline: "Because releases are only ready when testing says so",
    icon: IconShieldCheck,
    color: "from-emerald-500/20 to-emerald-600/5 text-emerald-400 border-emerald-500/30",
    activePill: "bg-emerald-600 text-white",
    keyArtifacts: ["TestRail Test Matrix", "Staging Demo Run", "UAT Sign-Off Document", "Defect Severity Triage"],
    narrative:
      "Coming from QA roots, I never treat testing as a last-minute scramble. Features move to Staging, run through regression suites, and are validated against real customer workflows before getting a production greenlight.",
    pmRules: [
      "Critical and High defects block release unconditionally.",
      "User Acceptance Testing (UAT) conducted with real stakeholders on staging.",
      "Cross-browser and mobile responsive checks verified on physical test devices.",
    ],
  },
  {
    id: "release",
    phaseNumber: "Phase 04",
    title: "Zero-Downtime Release & Retrospective",
    tagline: "Calm deployments and continuous team evolution",
    icon: IconGitBranch,
    color: "from-violet-500/20 to-violet-600/5 text-violet-400 border-violet-500/30",
    activePill: "bg-violet-600 text-white",
    keyArtifacts: ["Release Checklist", "Rollback Protocol", "Live Telemetry Dashboard", "Sprint Retrospective Notes"],
    narrative:
      "Deployments should be routine, not heart-pounding events. Releases are scheduled with rollback plans in place. After launch, we review telemetry and hold a blameless retrospective to find one process improvement for the next sprint.",
    pmRules: [
      "Documented rollback procedure verified before production deployment.",
      "Post-deployment smoke testing performed within 15 minutes of cutover.",
      "Bi-weekly retrospective turns team pain points into concrete Jira backlog items.",
    ],
  },
];

export default function SprintLifecycle() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = PHASES[activeIdx];
  const Icon = current.icon;

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 backdrop-blur-xl shadow-2xl" data-reveal>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-wider mb-1">
            <span className="h-2 w-2 rounded-full bg-indigo-400" />
            <span>Interactive Delivery Methodology</span>
          </div>
          <h3 className="text-xl font-bold tracking-tight text-white">
            How I Run Sprints: From Requirement to Zero-Downtime Release
          </h3>
        </div>

        {/* Phase Selector Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-950 p-1">
          {PHASES.map((p, idx) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActiveIdx(idx)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                activeIdx === idx
                  ? p.activePill
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
              }`}
            >
              {p.phaseNumber.replace("Phase ", "P")}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="mt-8 grid gap-8 lg:grid-cols-12 items-start">
        {/* Left Phase Overview */}
        <div className="lg:col-span-7 space-y-5">
          <div className="flex items-center gap-3">
            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-gradient-to-br ${current.color}`}>
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                {current.phaseNumber} · {current.tagline}
              </span>
              <h4 className="text-lg font-bold text-white leading-snug">{current.title}</h4>
            </div>
          </div>

          <p className="text-xs leading-relaxed text-slate-300">
            {current.narrative}
          </p>

          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
              Core PM Governance Rules
            </h5>
            <ul className="space-y-2">
              {current.pmRules.map((rule) => (
                <li key={rule} className="flex items-start gap-2 text-xs text-slate-300">
                  <IconCheckCircle className="h-3.5 w-3.5 mt-0.5 shrink-0 text-emerald-400" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Artifacts & Tooling Deck */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-xl border border-slate-800 bg-slate-950/90 p-5">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Phase Deliverables & Artifacts
            </h5>
            <div className="space-y-2">
              {current.keyArtifacts.map((art) => (
                <div
                  key={art}
                  className="flex items-center justify-between rounded-lg border border-slate-850 bg-slate-900/80 px-3 py-2 text-xs text-slate-200"
                >
                  <span className="font-medium">{art}</span>
                  <span className="text-[10px] font-mono text-indigo-400">Signed Off</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Navigation Footer */}
          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={() => setActiveIdx((prev) => (prev > 0 ? prev - 1 : PHASES.length - 1))}
              className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
            >
              ← Previous Phase
            </button>
            <span className="text-xs font-mono text-slate-500">{activeIdx + 1} / {PHASES.length}</span>
            <button
              type="button"
              onClick={() => setActiveIdx((prev) => (prev < PHASES.length - 1 ? prev + 1 : 0))}
              className="text-xs font-mono text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Next Phase →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
