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

export type ProjectData = {
  id: string;
  title: string;
  category: "Enterprise SaaS" | "AI & Automation Systems" | "E-Commerce & Chrome Tools";
  client: string;
  location: string;
  role: string;
  timeline: string;
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
    client: "Shorex Environment Care & Recycling SL",
    location: "Spain (Remote)",
    role: "Lead Technical Project Manager · Full SDLC Ownership",
    timeline: "6 Months · Production Live",
    challenge:
      "Shorex operated with fragmented manual spreadsheets to coordinate industrial recycling requests, multi-warehouse inventory, fleet driver dispatch, and customer redemption points across Spanish municipalities.",
    approach:
      "Architected and delivered a unified multi-tenant platform: an administrative portal for dynamic Euro-point pricing and warehouse management, a mobile-optimized driver workflow for field pickups, and an automated customer ledger for point accumulation and redemption.",
    outcome:
      "Eliminated manual inventory reconciliation, reduced pickup coordination time by 40%, and deployed an automated customer rewards mechanism with 100% audit accuracy.",
    metrics: [
      "40% Reduction in pickup dispatch latency",
      "100% Automated inventory reconciliation",
      "Multi-tenant warehouse & driver workflows",
    ],
    stack: ["Jira & Scrum", "REST APIs", "React", "Node.js", "PostgreSQL", "Role-Based Access Control (RBAC)", "UAT"],
    deliverables: ["Admin Control Portal", "Driver Field App Flow", "Customer Points Ledger", "Warehouse Inventory Engine"],
    details: {
      problemAnalysis:
        "The client had operational friction reconciling pick-ups against warehouse intake. Paper manifests caused latency, lost items, and inaccurate customer loyalty calculations.",
      pmStrategy:
        "Formulated modular 2-week sprints with strict acceptance criteria for three core personas: Operations Admins, Field Drivers, and Commercial Customers. Created detailed user journeys and conducted weekly stakeholder demos in staging.",
      architectureAndQuality:
        "Enforced strict REST API contract validation between frontend forms and backend database state. Implemented automated regression checks for Euro-point financial calculations prior to production sign-off.",
      impactSummary:
        "Successfully deployed to production in Spain. Operations staff now handle 3x the pickup volume with zero increase in administrative headcount.",
    },
  },
  {
    id: "lms-ai-chatbot",
    title: "Enterprise Learning Management System & Contextual AI Assistant",
    category: "AI & Automation Systems",
    client: "EdTech Enterprise Client",
    location: "United Kingdom (Remote)",
    role: "Technical Project Manager · Sprint & Quality Lead",
    timeline: "8 Months · Enterprise Rollout",
    challenge:
      "An ed-tech provider required a scalable LMS with live virtual classrooms, interactive assessments, attendance tracking, and a contextual student-support AI chatbot without ballooning development scope or introducing hallucinations.",
    approach:
      "Established clear technical boundaries and prompt-guardrails for the AI assistant, ran disciplined Jira sprints with engineering and instructional designers, and created comprehensive QA matrices for live class synchronization.",
    outcome:
      "Delivered a production LMS serving thousands of active learners with 99.4% uptime and an AI study assistant that resolved 65% of repetitive student queries automatically.",
    metrics: [
      "65% Tier-1 student support queries resolved autonomously",
      "99.4% Platform uptime during concurrent live exams",
      "On-schedule delivery across 16 sequential sprints",
    ],
    stack: ["Agile Scrum", "RESTful Architecture", "Next.js", "Python / FastAPI", "Vector Search / LLM Guardrails", "Jira & Confluence"],
    deliverables: ["Live Classroom Engine", "Automated Assessment Portal", "RAG-Powered AI Study Assistant", "Instructor Analytics"],
    details: {
      problemAnalysis:
        "Integrating a conversational assistant with a dynamic curriculum risked student confusion if the assistant provided out-of-scope answers. Timelines were also tight due to academic term deadlines.",
      pmStrategy:
        "Separated core LMS delivery from AI assistant microservice to ensure asynchronous velocity. Held backlog refinement sessions twice weekly to refine edge cases in student grading and attendance states.",
      architectureAndQuality:
        "Implemented strict prompt validation pipelines, token quota limits, and end-to-end regression suites for student progress data.",
      impactSummary:
        "Platform launched on time for the academic term, achieving high student satisfaction ratings and reducing support ticket volume for instructors.",
    },
  },
  {
    id: "ai-marketplace-scraper",
    title: "High-Throughput Marketplace Intelligence & Extraction Engine",
    category: "AI & Automation Systems",
    client: "E-Commerce Intelligence Firm",
    location: "USA (Remote)",
    role: "Technical PM · Pipeline & Data Governance",
    timeline: "5 Months · Deployed to Production",
    challenge:
      "Stakeholders required real-time price monitoring and catalog extraction across multiple international e-commerce platforms with high anti-scraping defenses and dynamic rate limits.",
    approach:
      "Engineered resilient distributed scraping pipelines with intelligent proxy rotation, automated schema normalization, and an intuitive dashboard for stakeholders to configure scheduled data pipelines.",
    outcome:
      "Built a reliable continuous ingestion engine parsing over 500,000 daily SKU updates with under 0.5% failure rate and real-time anomaly alerting.",
    metrics: [
      "500K+ Daily SKU data points extracted and normalized",
      "<0.5% Pipeline extraction error rate",
      "Automated proxy rotation & schema validation",
    ],
    stack: ["Python", "Async Workflows", "PostgreSQL", "Redis Queues", "Jira", "CI/CD Pipelines", "Data Validation"],
    deliverables: ["Distributed Extractor Engine", "Schema Validation Worker", "Executive Analytics Dashboard", "Alerting Webhook System"],
    details: {
      problemAnalysis:
        "Competitor price tracking was previously done via spot-checks, causing missed promotional shifts. Existing scrapers broke frequently when target platforms modified their DOM structures.",
      pmStrategy:
        "Introduced adaptive selector fallbacks and strict sprint tracking for scraper maintenance. Managed dependencies between data engineering, infrastructure, and business analyst teams.",
      architectureAndQuality:
        "Implemented automated data anomaly triggers (e.g. sudden 80% price drops flagged for human review) to guarantee data integrity before feeding client pricing models.",
      impactSummary:
        "Enabled client to make algorithmic pricing decisions 4x faster than prior manual workflows, directly driving a 14% lift in client profit margins.",
    },
  },
  {
    id: "rental-saas-dashboard",
    title: "Commercial Rental Operations & Subscription SaaS Dashboard",
    category: "Enterprise SaaS",
    client: "Commercial Equipment Rental Firm",
    location: "Middle East (Remote)",
    role: "Project Manager · Release & Stakeholder Management",
    timeline: "6 Months · Enterprise Launch",
    challenge:
      "A fast-growing rental business struggled with disconnected billing, equipment return forecasting, and recurring subscription visibility across regional depots.",
    approach:
      "Led end-to-end requirement discovery, prioritized features using RICE framework, and coordinated 3-week release cycles with multi-currency payment gateway integrations and equipment tracking.",
    outcome:
      "Centralized fleet tracking, automated invoicing, and gave executives single-pane visibility over monthly recurring revenue (MRR) and fleet utilization rates.",
    metrics: [
      "98% On-time equipment turnaround tracking",
      "Zero billing discrepancies over 12 consecutive billing cycles",
      "Live multi-depot inventory visibility",
    ],
    stack: ["Agile Delivery", "Jira", "React", "TypeScript", "Node.js", "Stripe Multi-Currency", "Figma User Flows"],
    deliverables: ["Depot Management Console", "Subscription Billing Engine", "Fleet Utilization Tracker", "Executive Financial KPI Panel"],
    details: {
      problemAnalysis:
        "Late rental returns and manual invoice generation cost the company significant lost revenue and increased customer friction during renewals.",
      pmStrategy:
        "Built close stakeholder consensus on MVP features. Established clear acceptance criteria for billing webhooks, overdue equipment notifications, and automated late penalty logic.",
      architectureAndQuality:
        "Ran rigorous UAT across regional depots with depot managers before cutting over production data. Validated payment edge cases (expired cards, partial refunds).",
      impactSummary:
        "Replaced three siloed legacy software tools with one modern dashboard, saving 25 hours per depot weekly.",
    },
  },
  {
    id: "custom-wordpress-plugins",
    title: "High-Performance Custom WordPress & Enterprise Tooling Suite",
    category: "E-Commerce & Chrome Tools",
    client: "Multiple International Clients (Karigar)",
    location: "Global / UK / US",
    role: "Project Manager & Technical Contributor",
    timeline: "Multi-Year · 15+ Enterprise Plugins",
    challenge:
      "Off-the-shelf WordPress plugins introduced code bloat, security vulnerabilities, and incompatible database hooks for high-traffic enterprise publishing and service sites.",
    approach:
      "Led the technical scoping and development of tailor-made, lightweight plugins: secure custom form handlers, bespoke CRM synchronization bridges, and tailored admin control dashboards.",
    outcome:
      "Delivered robust custom extensions deployed across 30+ client installations with zero security incidents and sub-50ms query overhead.",
    metrics: [
      "30+ High-traffic client installations",
      "Sub-50ms database query overhead",
      "Zero plugin-conflict downtime recorded",
    ],
    stack: ["PHP", "JavaScript", "MySQL", "REST API Endpoints", "WordPress Core Architecture", "Git Version Control"],
    deliverables: ["Custom Form Pipelines", "CRM Sync Bridges", "Admin Dashboard Extensions", "Webhook Triggers"],
    details: {
      problemAnalysis:
        "Commercial plugins frequently loaded unnecessary scripts on every frontend page, degrading Core Web Vitals and Google search rankings.",
      pmStrategy:
        "Applied strict software engineering discipline to CMS plugin development: automated linting, modular architecture, and dedicated staging testbeds.",
      architectureAndQuality:
        "Validated database indexing and sanitized all input streams against SQL injection and XSS vulnerabilities before client handover.",
      impactSummary:
        "Significantly improved client site load times and reduced plugin-maintenance overhead by 70%.",
    },
  },
  {
    id: "ecommerce-order-platform",
    title: "Scalable E-Commerce Catalog & Multi-Vendor Order Management",
    category: "E-Commerce & Chrome Tools",
    client: "Retail & Wholesale Group",
    location: "UK & International Clients",
    role: "Project Manager · E-Commerce Delivery",
    timeline: "7 Months · High Volume Production",
    challenge:
      "Retail clients needed dependable catalog management, real-time inventory locking during flash sales, and automated courier tracking for growing shipment volumes.",
    approach:
      "Delivered bespoke e-commerce architectures, structured order lifecycle state machines (Pending, Paid, Packed, Shipped, Delivered), and integrated courier logistics APIs.",
    outcome:
      "Engineered order processing pipelines that scaled smoothly to hundreds of concurrent orders during peak holiday sales without double-selling or inventory lockups.",
    metrics: [
      "100% Elimination of inventory double-selling during peak traffic",
      "Automated multi-carrier shipping label generation",
      "Seamless checkout conversion rate increase by 18%",
    ],
    stack: ["WooCommerce & Shopify Customizations", "REST API Integrations", "Courier APIs", "MySQL", "Payment Gateways", "Jira"],
    deliverables: ["Real-Time Inventory Engine", "Multi-Carrier Dispatch Connector", "Order Lifecycle State Machine", "Customer Tracking Portal"],
    details: {
      problemAnalysis:
        "High concurrent traffic during seasonal campaigns caused database deadlocks on stock quantities, leading to unfulfillable customer orders.",
      pmStrategy:
        "Mapped every order state transition and error handling path. Coordinated load testing sprints to simulate 5x normal traffic volume prior to campaign launches.",
      architectureAndQuality:
        "Ensured transactional integrity on stock reservation queries and integrated webhook reconciliation for payment status callbacks.",
      impactSummary:
        "Client processed record Black Friday volume with zero order discrepancies or platform downtime.",
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
    challenge:
      "Operations teams were spending hours copying and formatting data between browser tabs, CRM systems, and internal reporting spreadsheets.",
    approach:
      "Spearheaded the design and delivery of lightweight Manifest V3 Chrome extensions that automatically extract contextual page data and inject it into CRM fields with one click.",
    outcome:
      "Reduced per-record entry time from 3 minutes to 15 seconds, eliminating manual copy-paste errors across thousands of weekly operations records.",
    metrics: [
      "90% Reduction in manual data-entry turnaround time",
      "Manifest V3 compliant with zero background battery drain",
      "Adopted by 150+ operational agents daily",
    ],
    stack: ["Chrome Extension API (Manifest V3)", "JavaScript", "REST APIs", "Secure LocalStorage", "Git"],
    deliverables: ["One-Click Data Capture Extension", "CRM Injection Script", "Popup Configuration Panel", "OAuth2 Authentication"],
    details: {
      problemAnalysis:
        "Repetitive human data transcription between web tabs led to transcription errors, fatigue, and substantial operational overhead.",
      pmStrategy:
        "Conducted rapid user research directly with operations personnel to map out exact click patterns and keystroke workflows. Iterated prototypes in 1-week cycles.",
      architectureAndQuality:
        "Complied with Google Chrome Web Store privacy security guidelines, ensuring all token authentication remained encrypted in memory.",
      impactSummary:
        "Operational efficiency improved dramatically, directly saving estimated 120 work-hours per month.",
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

              {/* Challenge / Summary */}
              <p className="mt-4 text-xs leading-relaxed text-slate-300/90 line-clamp-3">
                {project.challenge}
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
                <span>Read Full Case Study</span>
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
                  {selectedProject.role}
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

            {/* Modal Content Sections */}
            <div className="mt-6 space-y-6 text-sm text-slate-300">
              {/* Problem Analysis */}
              <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  1. Problem Context & Complexity
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  {selectedProject.details.problemAnalysis}
                </p>
              </div>

              {/* PM Strategy & SDLC Cadence */}
              <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  2. PM Execution Strategy & SDLC Cadence
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  {selectedProject.details.pmStrategy}
                </p>
              </div>

              {/* Architecture, Quality & Verification */}
              <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  3. Technical Governance & QA Verification
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  {selectedProject.details.architectureAndQuality}
                </p>
              </div>

              {/* Measurable Results */}
              <div className="rounded-xl border border-indigo-500/20 bg-indigo-950/20 p-5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-indigo-300">
                  4. Production Outcomes & Quantified Impact
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
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
