"use client";

import { useState } from "react";
import {
  IconCpu,
  IconTerminal,
  IconShieldCheck,
  IconGitBranch,
  IconKanban,
  IconLayers,
  IconCheckCircle,
} from "./Icons";

type DiagramType = "shorex" | "lms" | "scraper" | "dgcars";

export function SystemDiagram({ type }: { type: DiagramType }) {
  const [activeStep, setActiveStep] = useState<number>(0);

  if (type === "shorex") {
    const steps = [
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
    ];

    return (
      <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5">
        <div className="flex items-center justify-between border-b border-slate-850 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-300">
              Interactive System Flow: Circular Logistics
            </span>
          </div>
          <span className="text-[10px] font-mono text-slate-500">Click steps to inspect</span>
        </div>

        {/* Step Nodes Grid */}
        <div className="grid gap-2 sm:grid-cols-4">
          {steps.map((step, idx) => (
            <button
              key={step.title}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`rounded-lg border p-3 text-left transition-all ${
                activeStep === idx
                  ? "border-emerald-500/60 bg-emerald-950/30 shadow-lg shadow-emerald-900/20"
                  : "border-slate-800 bg-slate-900/60 hover:border-slate-700"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-emerald-400 font-bold">0{idx + 1}</span>
                <span className="rounded bg-slate-800 px-1.5 py-0.5 text-[9px] font-mono text-slate-400">
                  {step.nodeTech.split("·")[0]}
                </span>
              </div>
              <p className="mt-2 text-xs font-semibold text-slate-200 leading-snug">{step.title}</p>
            </button>
          ))}
        </div>

        {/* Active Step Details */}
        <div className="mt-4 rounded-lg border border-slate-800/80 bg-slate-900/80 p-3.5 text-xs">
          <div className="flex items-center justify-between text-[11px] text-emerald-300 font-mono mb-1">
            <span>{steps[activeStep].badge}</span>
            <span>Tech: {steps[activeStep].nodeTech}</span>
          </div>
          <p className="text-slate-300 leading-relaxed">{steps[activeStep].description}</p>
        </div>
      </div>
    );
  }

  if (type === "lms") {
    const steps = [
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
    ];

    return (
      <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5">
        <div className="flex items-center justify-between border-b border-slate-850 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-indigo-400" />
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-300">
              Interactive System Flow: Guardrailed AI Assistant
            </span>
          </div>
          <span className="text-[10px] font-mono text-slate-500">Click steps to inspect</span>
        </div>

        <div className="grid gap-2 sm:grid-cols-4">
          {steps.map((step, idx) => (
            <button
              key={step.title}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`rounded-lg border p-3 text-left transition-all ${
                activeStep === idx
                  ? "border-indigo-500/60 bg-indigo-950/30 shadow-lg shadow-indigo-900/20"
                  : "border-slate-800 bg-slate-900/60 hover:border-slate-700"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-indigo-400 font-bold">0{idx + 1}</span>
                <span className="rounded bg-slate-800 px-1.5 py-0.5 text-[9px] font-mono text-slate-400">
                  {step.nodeTech.split("·")[0]}
                </span>
              </div>
              <p className="mt-2 text-xs font-semibold text-slate-200 leading-snug">{step.title}</p>
            </button>
          ))}
        </div>

        <div className="mt-4 rounded-lg border border-slate-800/80 bg-slate-900/80 p-3.5 text-xs">
          <div className="flex items-center justify-between text-[11px] text-indigo-300 font-mono mb-1">
            <span>{steps[activeStep].badge}</span>
            <span>Tech: {steps[activeStep].nodeTech}</span>
          </div>
          <p className="text-slate-300 leading-relaxed">{steps[activeStep].description}</p>
        </div>
      </div>
    );
  }

  // Default scraper pipeline
  const steps = [
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
  ];

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5">
      <div className="flex items-center justify-between border-b border-slate-850 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-sky-400" />
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-300">
            Interactive System Flow: High-Throughput Scraper
          </span>
        </div>
        <span className="text-[10px] font-mono text-slate-500">Click steps to inspect</span>
      </div>

      <div className="grid gap-2 sm:grid-cols-4">
        {steps.map((step, idx) => (
          <button
            key={step.title}
            type="button"
            onClick={() => setActiveStep(idx)}
            className={`rounded-lg border p-3 text-left transition-all ${
              activeStep === idx
                ? "border-sky-500/60 bg-sky-950/30 shadow-lg shadow-sky-900/20"
                : "border-slate-800 bg-slate-900/60 hover:border-slate-700"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-sky-400 font-bold">0{idx + 1}</span>
              <span className="rounded bg-slate-800 px-1.5 py-0.5 text-[9px] font-mono text-slate-400">
                {step.nodeTech.split("·")[0]}
              </span>
            </div>
            <p className="mt-2 text-xs font-semibold text-slate-200 leading-snug">{step.title}</p>
          </button>
        ))}
      </div>

      <div className="mt-4 rounded-lg border border-slate-800/80 bg-slate-900/80 p-3.5 text-xs">
        <div className="flex items-center justify-between text-[11px] text-sky-300 font-mono mb-1">
          <span>{steps[activeStep].badge}</span>
          <span>Tech: {steps[activeStep].nodeTech}</span>
        </div>
        <p className="text-slate-300 leading-relaxed">{steps[activeStep].description}</p>
      </div>
    </div>
  );
}
