"use client";

import { useState } from "react";
import { IconArrowUpRight } from "./Icons";

type DiagramType = "shorex" | "lms" | "scraper" | "dgcars";

type Step = {
  title: string;
  badge: string;
  description: string;
  nodeTech: string;
};

const DIAGRAMS: Record<DiagramType, { label: string; steps: Step[] }> = {
  shorex: {
    label: "System flow: circular logistics",
    steps: [
      {
        title: "1. Customer Pickup Request",
        badge: "Customer Web Flow",
        description: "Industrial client submits recyclable materials with estimated weight and location coordinates.",
        nodeTech: "React · Form Validation",
      },
      {
        title: "2. Realtime Driver Dispatch",
        badge: "Field Logistics Engine",
        description: "System calculates optimal pickup route and assigns closest field driver with capacity check.",
        nodeTech: "Geo-Routing · Mobile UX",
      },
      {
        title: "3. Warehouse Scale Audit",
        badge: "Inventory Hub",
        description: "Intake manifest verified by depot weight scale. Stock state updated with zero manual paperwork.",
        nodeTech: "PostgreSQL · Audit Ledger",
      },
      {
        title: "4. Automated Euro-Point Reward",
        badge: "Loyalty State Machine",
        description: "Dynamic pricing engine calculates reward points credited to customer ledger with redemption rules.",
        nodeTech: "State Machine · RBAC",
      },
    ],
  },
  lms: {
    label: "System flow: guardrailed AI assistant",
    steps: [
      {
        title: "1. Student Query Intake",
        badge: "Learner Portal",
        description: "Student asks curriculum-specific questions during live coursework or assessment review.",
        nodeTech: "Next.js UI · Token Auth",
      },
      {
        title: "2. Prompt Guardrail Layer",
        badge: "Safety Filter",
        description: "Input sanitized against prompt injections and constrained strictly to course syllabus scope.",
        nodeTech: "Context Filter · Rate Limiter",
      },
      {
        title: "3. Vector RAG Search",
        badge: "Knowledge Engine",
        description: "Retrieves exact timestamped video transcripts and textbook chapters relevant to the query.",
        nodeTech: "Vector DB · Semantic Embeddings",
      },
      {
        title: "4. Verified Response & Analytics",
        badge: "Instructor Telemetry",
        description: "Answers delivered with source citations. Teacher dashboard flags frequent confusion topics.",
        nodeTech: "FastAPI · Analytics Webhook",
      },
    ],
  },
  scraper: {
    label: "System flow: high-throughput scraper",
    steps: [
      {
        title: "1. Scheduled Target Crawl",
        badge: "Ingestion Queue",
        description: "Automated cron triggers dynamic job distribution across multiple international e-commerce platforms.",
        nodeTech: "Redis Queues · Celery",
      },
      {
        title: "2. Distributed Proxy Rotator",
        badge: "Anti-Block Mesh",
        description: "Traffic routed through rotating IP pools with dynamic exponential backoff to ensure 100% crawl success.",
        nodeTech: "Proxy Pool · Rate Control",
      },
      {
        title: "3. Schema Normalizer",
        badge: "DOM Parser",
        description: "Extracts pricing, inventory state, and variants into standardized JSON schema regardless of target layout.",
        nodeTech: "Python · DOM Sanitizer",
      },
      {
        title: "4. Anomaly Filter & Lake",
        badge: "Data Lake Ingestion",
        description: "Validates price fluctuations (<0.5% defect tolerance) before committing to production analytics database.",
        nodeTech: "PostgreSQL · Anomaly Alerts",
      },
    ],
  },
  dgcars: {
    label: "System flow: mobility dispatch",
    steps: [
      {
        title: "1. Passenger Ride Request",
        badge: "Customer Flow",
        description: "Ride request enters the dispatch queue with pickup coordinates, fare estimate and SLA clock running.",
        nodeTech: "React · Geo APIs",
      },
      {
        title: "2. Latency-Limited Dispatch",
        badge: "Dispatch Engine",
        description: "Nearest-driver matching runs under strict latency budgets; fallback queues engage when thresholds breach.",
        nodeTech: "State Machine · Metrics",
      },
      {
        title: "3. Trip Execution & Tracking",
        badge: "Live Operations",
        description: "Trip state transitions tracked end-to-end with position streaming and driver status broadcasts.",
        nodeTech: "WebSockets · Telemetry",
      },
      {
        title: "4. Settlement & Retrospective",
        badge: "Back-office",
        description: "Completed trips settle to ledger. Blameless retrospective feeds the next sprint's backlog.",
        nodeTech: "Ledger · Retro Notes",
      },
    ],
  },
};

const ACCENTS = {
  acid: {
    dot: "bg-acid",
    text: "text-acid",
    border: "border-acid/60",
    activeBg: "bg-acid/10",
    label: "text-acid",
  },
} as const;

export function SystemDiagram({ type }: { type: DiagramType }) {
  const [activeStep, setActiveStep] = useState(0);
  const meta = DIAGRAMS[type];
  const a = ACCENTS.acid;
  const current = meta.steps[activeStep];

  return (
    <div className="border border-line bg-ink-3/70 p-4 sm:p-5" data-reveal>
      <div className="mb-4 flex items-center justify-between border-b border-line pb-3">
        <div className="flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${a.dot}`} />
          <span className="hud text-fawn">{meta.label}</span>
        </div>
        <span className="font-mono text-[10px] text-ash">Select a node</span>
      </div>

      {/* Node rail */}
      <div className="grid gap-2 sm:grid-cols-4">
        {meta.steps.map((step, idx) => (
          <button
            key={step.title}
            type="button"
            onClick={() => setActiveStep(idx)}
            aria-pressed={activeStep === idx}
            className={`border p-3 text-left transition-all ${
              activeStep === idx ? a.border + " " + a.activeBg : "border-line bg-ink-2/60 hover:border-line-2"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className={`font-mono text-[10px] font-bold ${a.text}`}>0{idx + 1}</span>
              <span className="font-mono text-[9px] text-ash">{step.nodeTech.split("·")[0]}</span>
            </div>
            <p className="mt-2 text-xs font-semibold leading-snug text-paper">{step.title}</p>
          </button>
        ))}
      </div>

      {/* Active node detail */}
      <div className="mt-4 flex items-start gap-3 border border-line bg-ink-2/80 p-3.5 text-xs">
        <IconArrowUpRight className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${a.text}`} />
        <div>
          <div className="mb-1 flex flex-wrap items-center gap-x-3 gap-y-0.5 font-mono text-[11px]">
            <span className={a.label}>{current.badge}</span>
            <span className="text-ash">Tech: {current.nodeTech}</span>
          </div>
          <p className="leading-relaxed text-fawn">{current.description}</p>
        </div>
      </div>
    </div>
  );
}