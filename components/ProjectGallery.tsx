"use client";

import { useState } from "react";
import {
  IconExternalLink,
  IconCheckCircle,
  IconLayers,
  IconGitBranch,
  IconShieldCheck,
  IconChartBar,
  IconX,
  IconArrowUpRight,
} from "./Icons";
import { SystemDiagram } from "./SystemDiagrams";

export type ProjectData = {
  id: string;
  title: string;
  category: "Enterprise SaaS" | "AI & Automation Systems" | "E-Commerce & Chrome Tools";
  diagramType?: "shorex" | "lms" | "scraper" | "dgcars";
  client: string;
  location: string;
  role: string;
  timeline: string;
  storyIntro: string;
  challenge: string;
  approach: string;
  outcome: string;
  metrics: string[];
  stack: string[];
  deliverables: string[];
  details: {
    problemAnalysis: string;
    pmStrategy: string;
    architectureAndQuality: string;
    impactSummary: string;
  };
};

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: "shorex-recycling",
    title: "Shorex Circular Recycling & Logistics Platform",
    category: "Enterprise SaaS",
    diagramType: "shorex",
    client: "Shorex Environment Care & Recycling SL",
    location: "Spain (Remote)",
    role: "Lead Technical Project Manager · Full Delivery Ownership",
    timeline: "6 Months · Production Live",
    storyIntro:
      "When Shorex reached out, their operations team was drowning in fragmented spreadsheets trying to track industrial recycling requests across Spain.",
    challenge:
      "Shorex operated with disjointed tools: dispatchers phoned drivers manually, warehouse intakes were scribbled on paper, and calculating client reward points in Euros took hours of manual cross-referencing.",
    approach:
      "I worked directly with the founding team in Spain to map the entire physical lifecycle. We built a unified platform: a dynamic admin portal for Euro-point pricing, a mobile driver flow for instant pickup status, an inventory weighing engine, and an automated customer rewards ledger.",
    outcome:
      "Cut dispatch coordination time by 40%, completely eliminated lost inventory manifests, and automated rewards payout across multiple Spanish municipalities.",
    metrics: [
      "40% Reduction in pickup dispatch latency",
      "100% Automated inventory reconciliation",
      "Multi-tenant warehouse & driver workflows",
    ],
    stack: ["Jira & Scrum", "REST APIs", "React", "Node.js", "PostgreSQL", "RBAC Security", "UAT"],
    deliverables: ["Admin Control Portal", "Driver Field App Flow", "Customer Points Ledger", "Warehouse Inventory Engine"],
    details: {
      problemAnalysis:
        "The fundamental issue was latency between pickup and warehouse weighing. Paper manifests led to lost items, disputes over item weight, and delayed customer payouts.",
      pmStrategy:
        "Formulated modular 2-week sprints. Prioritized core workflows first (Driver Pickup ➔ Scale Weight ➔ Points Credit) before building nice-to-have analytics. Held weekly live demos in Spanish-configured staging environments.",
      architectureAndQuality:
        "Enforced strict REST API contract validation between frontend forms and database records. Embedded automated regression tests for financial reward calculations to ensure zero double-crediting.",
      impactSummary:
        "Now live in production. The operations team handles 3x the daily pickup volume without needing additional administrative staff.",
    },
  },
  {
    id: "lms-ai-chatbot",
    title: "Enterprise Learning Platform with Guardrailed AI Assistant",
    category: "AI & Automation Systems",
    diagramType: "lms",
    client: "EdTech Enterprise Client",
    location: "United Kingdom (Remote)",
    role: "Technical Project Manager & Scrum Master",
    timeline: "8 Months · Enterprise Rollout",
    storyIntro:
      "The client needed an enterprise-grade LMS with live classes and an AI tutor—but without hallucinations confusing students during exam preparation.",
    challenge:
      "Building courses, live classrooms, and automated grading is hard enough; adding a conversational AI assistant created huge risk of student distraction and hallucinated answers on technical subjects.",
    approach:
      "I decoupled the AI service into a sandboxed RAG architecture with strict syllabus-bound prompt guardrails. Ran 16 focused sprints coordinating instructional designers, frontend developers, and backend engineers.",
    outcome:
      "Delivered on time for the academic term, serving thousands of active learners with 99.4% platform uptime and resolving 65% of repetitive student queries automatically.",
    metrics: [
      "65% Tier-1 student questions resolved autonomously",
      "99.4% Platform uptime during concurrent live exams",
      "On-schedule delivery across 16 sequential sprints",
    ],
    stack: ["Agile Scrum", "RESTful Architecture", "Next.js", "Python / FastAPI", "Vector Search / LLM Guardrails", "Jira"],
    deliverables: ["Live Classroom Engine", "Automated Assessment Portal", "RAG-Powered AI Study Assistant", "Instructor Analytics"],
    details: {
      problemAnalysis:
        "Students asking out-of-syllabus questions could receive misleading answers from standard AI models, hurting credibility. Delivery was also on a non-negotiable semester deadline.",
      pmStrategy:
        "Separated core LMS delivery from the AI microservice so delayed AI testing wouldn't block LMS core releases. Ran backlog grooming twice weekly with explicit Gherkin acceptance criteria.",
      architectureAndQuality:
        "Implemented strict token rate limits, prompt validation pipelines, and automated regression suites for student grading records.",
      impactSummary:
        "The platform launched smoothly on day one of the academic term, receiving top marks from students and saving teaching assistants dozens of hours weekly.",
    },
  },
  {
    id: "ai-marketplace-scraper",
    title: "High-Throughput Marketplace Intelligence Engine",
    category: "AI & Automation Systems",
    diagramType: "scraper",
    client: "E-Commerce Intelligence Firm",
    location: "USA (Remote)",
    role: "Technical PM · Pipeline & Data Governance",
    timeline: "5 Months · Deployed to Production",
    storyIntro:
      "Clients needed real-time pricing intelligence across competitive marketplaces, but existing scrapers constantly broke whenever websites updated their layout.",
    challenge:
      "Extracting 500,000+ daily product variations from hostile anti-bot websites while ensuring pricing data was 100% accurate before feeding executive repricing algorithms.",
    approach:
      "Engineered resilient distributed extraction pipelines with rotating proxy meshes, DOM schema sanitizers, and an anomaly filter that flags erratic price swings for human review.",
    outcome:
      "Maintained a continuous 500k+ daily ingestion stream with under 0.5% failure rate, giving the client an unmatched market pricing advantage.",
    metrics: [
      "500K+ Daily SKU data points extracted and normalized",
      "<0.5% Pipeline extraction error rate",
      "Automated proxy rotation & schema validation",
    ],
    stack: ["Python", "Async Workflows", "PostgreSQL", "Redis Queues", "Jira", "CI/CD Pipelines", "Data Validation"],
    deliverables: ["Distributed Extractor Engine", "Schema Validation Worker", "Executive Analytics Dashboard", "Alerting Webhook System"],
    details: {
      problemAnalysis:
        "Manual price spot-checks were costing the client missed sales. Previous automated tools failed on slight DOM changes, creating silent data corruption.",
      pmStrategy:
        "Established strict sprint velocity tracking and automated alert webhooks into Slack so scraper breaks were resolved within 4 hours.",
      architectureAndQuality:
        "Enforced automated validation rules (e.g. flagging sudden 80% price drops) before data enters the production database.",
      impactSummary:
        "Enabled the client to make dynamic algorithmic repricing decisions 4x faster, directly driving a 14% lift in client profit margins.",
    },
  },
  {
    id: "rental-saas-dashboard",
    title: "Commercial Equipment Rental & Subscription SaaS",
    category: "Enterprise SaaS",
    client: "Commercial Equipment Rental Firm",
    location: "Middle East (Remote)",
    role: "Project Manager · Release & Stakeholder Lead",
    timeline: "6 Months · Enterprise Launch",
    storyIntro:
      "A fast-growing rental company was losing revenue because returned equipment wasn't being tracked and subscription billing was disconnected.",
    challenge:
      "Regional depots used different systems to track heavy machinery, resulting in late returns going unbilled and lost customer renewals.",
    approach:
      "Led requirement workshops with depot managers, prioritized features using the RICE framework, and delivered a centralized SaaS dashboard with multi-currency Stripe billing.",
    outcome:
      "Centralized depot visibility, eliminated billing discrepancies across 12 consecutive billing cycles, and saved 25 administrative hours per depot every week.",
    metrics: [
      "98% On-time equipment turnaround tracking",
      "Zero billing discrepancies over 12 consecutive billing cycles",
      "Live multi-depot inventory visibility",
    ],
    stack: ["Agile Delivery", "Jira", "React", "TypeScript", "Node.js", "Stripe Multi-Currency", "Figma User Flows"],
    deliverables: ["Depot Management Console", "Subscription Billing Engine", "Fleet Utilization Tracker", "Executive KPI Panel"],
    details: {
      problemAnalysis:
        "Late rental returns and manual invoice generation cost the company significant lost revenue and customer friction.",
      pmStrategy:
        "Built close stakeholder consensus on MVP features. Established clear acceptance criteria for billing webhooks, overdue notifications, and late penalties.",
      architectureAndQuality:
        "Ran rigorous UAT across regional depots with depot managers before cutting over production data.",
      impactSummary:
        "Replaced three disconnected legacy tools with one modern dashboard, saving 25 hours per depot weekly.",
    },
  },
  {
    id: "custom-wordpress-plugins",
    title: "Tailored WordPress Plugins & Enterprise Tooling",
    category: "E-Commerce & Chrome Tools",
    client: "Multiple International Clients (Karigar)",
    location: "Global / UK / US",
    role: "Project Manager & Technical Contributor",
    timeline: "Multi-Year · 15+ Enterprise Plugins",
    storyIntro:
      "Commercial off-the-shelf plugins were bloating client websites and causing security headaches. We needed clean, custom engineering.",
    challenge:
      "Enterprise clients needed custom CRM syncs, tailored form handlers, and admin tooling without the bloat, slow queries, and security vulnerabilities of third-party plugins.",
    approach:
      "Led the technical scoping and development of lightweight, bespoke plugins built to sit cleanly alongside WordPress core with sub-50ms database overhead.",
    outcome:
      "Delivered 15+ custom plugins deployed across 30+ client installations with zero security incidents and dramatic speed improvements.",
    metrics: [
      "30+ High-traffic client installations",
      "Sub-50ms database query overhead",
      "Zero plugin-conflict downtime recorded",
    ],
    stack: ["PHP", "JavaScript", "MySQL", "REST API Endpoints", "WordPress Core Architecture", "Git"],
    deliverables: ["Custom Form Pipelines", "CRM Sync Bridges", "Admin Dashboard Extensions", "Webhook Triggers"],
    details: {
      problemAnalysis:
        "Commercial plugins loaded unused scripts on every page, hurting Core Web Vitals and Google rankings.",
      pmStrategy:
        "Applied strict software engineering discipline to plugin development: linting, modular architecture, and dedicated staging testbeds.",
      architectureAndQuality:
        "Validated database indexing and sanitized all input streams against SQL injection and XSS before client handover.",
      impactSummary:
        "Improved client load times significantly and reduced maintenance overhead by 70%.",
    },
  },
  {
    id: "ecommerce-order-platform",
    title: "High-Volume E-Commerce Order & Fulfillment Engine",
    category: "E-Commerce & Chrome Tools",
    client: "Retail & Wholesale Group",
    location: "UK & International Clients",
    role: "Project Manager · E-Commerce Delivery",
    timeline: "7 Months · High Volume Production",
    storyIntro:
      "Flash sales were causing database lockups and inventory double-selling during seasonal campaigns.",
    challenge:
      "High concurrent checkout volume caused race conditions on stock quantities, leading to unfulfillable orders and customer dissatisfaction.",
    approach:
      "Architected a strict order lifecycle state machine with transactional stock reservation locks and automated courier dispatch API integrations.",
    outcome:
      "Client processed record Black Friday order volume with 100% stock accuracy, zero double-selling, and automated multi-carrier label generation.",
    metrics: [
      "100% Elimination of inventory double-selling during peak traffic",
      "Automated multi-carrier shipping label generation",
      "Seamless checkout conversion rate increase by 18%",
    ],
    stack: ["WooCommerce & Shopify Customizations", "REST API Integrations", "Courier APIs", "MySQL", "Jira"],
    deliverables: ["Real-Time Inventory Engine", "Multi-Carrier Dispatch Connector", "Order Lifecycle State Machine", "Customer Tracking Portal"],
    details: {
      problemAnalysis:
        "Simultaneous checkout requests locked database tables, causing crashed carts and frustrated buyers.",
      pmStrategy:
        "Mapped every order state transition and simulated 5x normal traffic volume in staging prior to holiday campaign launches.",
      architectureAndQuality:
        "Ensured transactional integrity on stock queries and integrated webhook reconciliation for payment status callbacks.",
      impactSummary:
        "Client processed record holiday sales with zero downtime and zero order discrepancies.",
    },
  },
  {
    id: "chrome-extension-suite",
    title: "Enterprise Workflow Automation Chrome Extensions",
    category: "E-Commerce & Chrome Tools",
    client: "Productivity & Operations Teams (Karigar)",
    location: "International Clients",
    role: "Technical PM & Product Lead",
    timeline: "4 Months · Browser Utility Suite",
    storyIntro:
      "Operations teams were losing hours every day copying and pasting data between browser tabs, CRMs, and spreadsheets.",
    challenge:
      "Manual data transcription between web applications caused frequent human errors, employee fatigue, and slow turnaround times.",
    approach:
      "Spearheaded Manifest V3 Chrome extensions that automatically extract contextual page data and inject it into CRM fields with a single keystroke.",
    outcome:
      "Cut data entry time by 90% (from 3 minutes to 15 seconds per record), saving over 120 operational work hours every month.",
    metrics: [
      "90% Reduction in manual data-entry turnaround time",
      "Manifest V3 compliant with zero background battery drain",
      "Adopted by 150+ operational agents daily",
    ],
    stack: ["Chrome Extension API (Manifest V3)", "JavaScript", "REST APIs", "Secure LocalStorage", "Git"],
    deliverables: ["One-Click Data Capture Extension", "CRM Injection Script", "Popup Configuration Panel", "OAuth2 Auth"],
    details: {
      problemAnalysis:
        "Repetitive human transcription was causing a 4% error rate across client records.",
      pmStrategy:
        "Mapped out exact click patterns with agents and iterated functional prototypes in 1-week rapid cycles.",
      architectureAndQuality:
        "Complied with Google Chrome Web Store privacy security guidelines, ensuring all token auth stayed encrypted.",
      impactSummary:
        "Directly saved an estimated 120 work-hours per month and eliminated data-entry mistakes.",
    },
  },
];

const CATEGORIES = ["All Deliveries", "Enterprise SaaS", "AI & Automation Systems", "E-Commerce & Chrome Tools"] as const;

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All Deliveries");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const filteredProjects =
    activeCategory === "All Deliveries"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-10">
      {/* Category Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5" data-reveal>
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/25 border border-indigo-500"
                  : "border border-slate-800 bg-slate-900/80 text-slate-400 hover:border-slate-700 hover:text-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <span className="text-xs font-mono text-slate-500">
          Showing {filteredProjects.length} of {PROJECTS_DATA.length} case studies
        </span>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, i) => (
          <article
            key={project.id}
            data-reveal
            style={{ "--reveal-delay": `${(i % 3) * 100}ms` } as React.CSSProperties}
            className="group relative flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/60 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.15)]"
          >
            {/* Top Tag Bar */}
            <div>
              <div className="flex items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                <span className="rounded-md border border-slate-800 bg-slate-950/80 px-2.5 py-1 text-[11px] font-mono text-indigo-400">
                  {project.category}
                </span>
                <span className="text-[11px] font-mono text-slate-500">{project.location}</span>
              </div>

              {/* Title & Client */}
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-100 group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="mt-1 text-xs text-slate-400 font-medium">{project.role}</p>

              {/* Human Story Intro */}
              <p className="mt-4 text-xs leading-relaxed text-slate-300/90 line-clamp-3">
                {project.storyIntro || project.challenge}
              </p>

              {/* Highlight Metrics */}
              <div className="mt-5 space-y-2 border-t border-slate-800/60 pt-4">
                {project.metrics.slice(0, 2).map((metric) => (
                  <div key={metric} className="flex items-start gap-2 text-xs text-emerald-400/90">
                    <IconCheckCircle className="h-3.5 w-3.5 mt-0.5 shrink-0 text-emerald-400" />
                    <span className="font-medium leading-tight text-slate-300">{metric}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions & Stack */}
            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.stack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-slate-800/60 px-2 py-0.5 text-[10px] font-medium text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
                {project.stack.length > 4 && (
                  <span className="rounded bg-slate-800/30 px-1.5 py-0.5 text-[10px] text-slate-500 font-mono">
                    +{project.stack.length - 4}
                  </span>
                )}
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700/80 bg-slate-800/60 py-2.5 text-xs font-medium text-slate-200 transition-all hover:border-indigo-500/50 hover:bg-indigo-600/20 hover:text-white"
              >
                <span>Read Story & System Flow</span>
                <IconArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Case Study Deep Dive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[130] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
            onClick={() => setSelectedProject(null)}
          />

          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 p-6 sm:p-8 shadow-2xl transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-5">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="rounded-md border border-indigo-500/30 bg-indigo-500/10 px-2.5 py-0.5 text-[11px] font-mono text-indigo-400">
                    {selectedProject.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">· {selectedProject.location}</span>
                </div>
                <h2 className="text-2xl font-semibold tracking-tight text-white">
                  {selectedProject.title}
                </h2>
                <p className="mt-1 text-sm font-medium text-indigo-300">
                  {selectedProject.role} · {selectedProject.timeline}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <IconX className="h-5 w-5" />
              </button>
            </div>

            {/* Interactive System Flow Diagram in Modal */}
            {selectedProject.diagramType && (
              <div className="mt-6">
                <SystemDiagram type={selectedProject.diagramType} />
              </div>
            )}

            {/* Modal Story & Content Sections */}
            <div className="mt-6 space-y-5 text-sm text-slate-300">
              {/* Problem Analysis */}
              <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  1. The Real-World Challenge
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  {selectedProject.details.problemAnalysis}
                </p>
              </div>

              {/* PM Strategy & SDLC Cadence */}
              <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  2. PM Strategy & Sprint Execution
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  {selectedProject.details.pmStrategy}
                </p>
              </div>

              {/* Architecture, Quality & Verification */}
              <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  3. Technical Governance & QA Gate
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  {selectedProject.details.architectureAndQuality}
                </p>
              </div>

              {/* Measurable Results */}
              <div className="rounded-xl border border-indigo-500/20 bg-indigo-950/20 p-5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-indigo-300">
                  4. Business Impact & Measurable Outcome
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-200">
                  {selectedProject.details.impactSummary}
                </p>
                <div className="mt-4 grid gap-2 sm:grid-cols-3">
                  {selectedProject.metrics.map((m) => (
                    <div key={m} className="rounded-lg border border-indigo-500/30 bg-slate-900/90 p-3">
                      <p className="text-xs font-medium text-emerald-400">{m}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stack & Deliverables */}
              <div className="grid gap-4 sm:grid-cols-2 pt-2">
                <div>
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Methodologies & Stack
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.stack.map((t) => (
                      <span key={t} className="rounded bg-slate-800 px-2.5 py-1 text-xs text-slate-300 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Shipped Deliverables
                  </h5>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {selectedProject.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-8 flex justify-end border-t border-slate-800 pt-5">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="rounded-xl bg-slate-800 px-5 py-2.5 text-xs font-medium text-slate-200 hover:bg-slate-700 transition-colors"
              >
                Close Story
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
