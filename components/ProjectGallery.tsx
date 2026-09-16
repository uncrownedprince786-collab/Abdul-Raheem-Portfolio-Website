"use client";

import { useState, useRef, useEffect } from "react";
import {
  IconArrowUpRight,
  IconX,
  IconCheckCircle,
  IconClock,
  IconMapPin,
} from "./Icons";
import { SystemDiagram } from "./SystemDiagrams";
import { Stagger, StaggerItem } from "./motion";

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

/* Abstract project plate — the systems pictogram placeholder artwork */
function ProjectPlate({ index }: { index: number }) {
  const seeds = [
    "M20 40 h260 M20 120 h260 M20 200 h260 M20 280 h260",
    "M30 60 h240 M30 140 h240 M30 220 h240",
    "M40 40 v240 M120 40 v240 M200 40 v240 M280 40 v240",
    "M20 40 C 260 40, 20 300, 260 300",
  ];
  const pattern = seeds[index % seeds.length];
  return (
    <svg aria-hidden="true" viewBox="0 0 300 320" fill="none" className="h-full w-full text-brass/25">
      <path d={pattern} stroke="currentColor" strokeWidth="1" />
      <circle cx="20" cy="40" r="3" fill="currentColor" />
      <circle cx="280" cy="40" r="3" fill="currentColor" />
      <circle cx="20" cy="280" r="3" fill="currentColor" />
      <circle cx="280" cy="280" r="3" fill="currentColor" />
      <text x="16" y="304" className="font-mono" fontSize="10" fill="currentColor" opacity="0.7">
        0{index + 1} / SYSTEM
      </text>
    </svg>
  );
}

/* ------------------------------- Case study ------------------------------- */
function CaseStudy({ project, onClose }: { project: ProjectData; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const sections = [
    { n: "01", label: "The real-world challenge", body: project.details.problemAnalysis, tone: "text-ash" },
    { n: "02", label: "PM strategy & sprint execution", body: project.details.pmStrategy, tone: "text-ash" },
    { n: "03", label: "Technical governance & QA gate", body: project.details.architectureAndQuality, tone: "text-ash" },
    { n: "04", label: "Business impact & outcome", body: project.details.impactSummary, tone: "text-brass" },
  ];

  return (
    <div className="fixed inset-0 z-[130] flex items-start justify-center overflow-y-auto p-4 pt-[6vh] sm:p-8">
      <div className="fixed inset-0 bg-ink/85 backdrop-blur-sm" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} — case study`}
        className="relative w-full max-w-3xl border border-line-2 bg-ink-2 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-5 sm:px-8">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="hud text-brass">{project.category}</span>
              <span aria-hidden="true" className="text-smoke">·</span>
              <span className="text-xs font-mono text-ash">{project.location}</span>
            </div>
            <h2 className="font-display mt-2 text-2xl font-light leading-tight text-paper sm:text-3xl">
              {project.title}
            </h2>
            <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-fawn">
              <span>{project.role}</span>
              <span className="inline-flex items-center gap-1.5 font-mono text-ash">
                <IconClock className="h-3.5 w-3.5" /> {project.timeline}
              </span>
            </div>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="rounded-sm border border-line-2 p-2 text-fawn transition-colors hover:border-brass hover:text-brass"
          >
            <IconX className="h-4 w-4" />
          </button>
        </div>

        {/* Client line */}
        <p className="border-b border-line px-6 py-3 text-xs text-ash sm:px-8">
          <span className="hud mr-2">For</span>
          {project.client}
        </p>

        {/* Diagram */}
        {project.diagramType && (
          <div className="px-6 pt-6 sm:px-8">
            <SystemDiagram type={project.diagramType} />
          </div>
        )}

        {/* Sections */}
        <div className="space-y-0 px-6 pt-6 sm:px-8">
          {sections.map((s) => (
            <div key={s.n} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-line py-5 sm:grid-cols-[4rem_1fr] sm:gap-6">
              <span className="hud pt-1 text-smoke">{s.n}</span>
              <div>
                <h3 className={`text-xs font-semibold uppercase tracking-wider ${s.tone}`}>{s.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fawn text-pretty">{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div className="px-6 py-2 sm:px-8">
          <div className="grid gap-2.5 sm:grid-cols-3">
            {project.metrics.map((m) => (
              <div key={m} className="border border-line bg-ink-3/70 px-4 py-3">
                <p className="flex items-start gap-2 text-xs leading-snug text-fawn">
                  <IconCheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-moss" />
                  <span className="text-pretty">{m}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stack + deliverables */}
        <div className="grid gap-6 border-t border-line px-6 py-6 sm:grid-cols-2 sm:px-8">
          <div>
            <h4 className="hud text-ash mb-3">Methodologies & stack</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((t) => (
                <span key={t} className="border border-line bg-ink-3 px-2.5 py-1 font-mono text-xs text-fawn">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="hud text-ash mb-3">Shipped deliverables</h4>
            <ul className="space-y-1.5">
              {project.deliverables.map((d) => (
                <li key={d} className="flex items-center gap-2.5 text-sm text-fawn">
                  <span className="h-1 w-4 bg-brass/70" aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-end border-t border-line px-6 py-4 sm:px-8">
          <button
            type="button"
            onClick={onClose}
            className="link-rule py-2 text-sm font-medium text-paper"
          >
            Close story
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ Main gallery ------------------------------ */
export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All Deliveries");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const all = PROJECTS_DATA;
  const filtered =
    activeCategory === "All Deliveries"
      ? all
      : all.filter((p) => p.category === activeCategory);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div>
      {/* Filter rail */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-5" aria-label="Filter projects">
        <div className="flex flex-wrap items-center gap-1.5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={`rounded-sm px-3.5 py-1.5 font-mono text-xs transition-colors ${
                activeCategory === cat
                  ? "bg-brass text-ink"
                  : "border border-line-2 text-ash hover:border-brass/50 hover:text-paper"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <span className="hud text-ash">
          {filtered.length} / {all.length}
        </span>
      </div>

      {/* Featured spread */}
      {featured && (
        <Stagger className="mt-10">
          <StaggerItem>
            <article className="group relative grid overflow-hidden border border-line bg-ink-2 lg:grid-cols-[2fr_3fr]">
              {/* Plate */}
              <div className="relative hidden min-h-[320px] overflow-hidden lg:block">
                <div className="absolute inset-0 note-dots opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center p-10">
                  <ProjectPlate index={0} />
                </div>
                <span aria-hidden="true" className="absolute left-0 top-0 h-full w-0.5 bg-brass/70" />
              </div>

              {/* Content */}
              <div className="p-7 sm:p-9 md:p-11">
                <div className="flex items-center gap-3 text-xs">
                  <span className="hud text-brass">Feat.</span>
                  <span className="h-0.5 w-6 bg-brass/50" aria-hidden="true" />
                  <span className="font-mono text-ash">{featured.category}</span>
                </div>

                <h3 className="font-display mt-4 text-3xl font-light leading-tight text-paper text-balance">
                  {featured.title}
                </h3>

                <p className="mt-2 text-sm text-fawn">{featured.role}</p>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-fawn text-pretty">
                  {featured.storyIntro || featured.challenge}
                </p>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {featured.metrics.slice(0, 2).map((m) => (
                    <span key={m} className="border border-moss/40 bg-moss/10 px-3 py-1.5 text-xs text-moss">
                      {m}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex items-center justify-between border-t border-line pt-5">
                  <span className="text-xs font-mono text-ash">
                    {featured.location} · {featured.timeline}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(featured)}
                    className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-brass"
                  >
                    <span className="link-rule">Read the case study</span>
                    <IconArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </article>
          </StaggerItem>
        </Stagger>
      )}

      {/* Editorial rows */}
      <Stagger className="mt-10 space-y-0 border-t border-line">
        {rest.map((project, i) => (
          <StaggerItem key={project.id}>
            <article className="group grid gap-4 border-b border-line py-8 transition-colors hover:bg-ink-2/40 md:grid-cols-[3rem_1fr] md:gap-8 md:py-10">
              <span className="hud pt-1 text-smoke transition-colors group-hover:text-brass">
                0{i + 2}
              </span>

              <div>
                <div className="grid gap-4 lg:grid-cols-12">
                  <div className="lg:col-span-8">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="hud text-brass/90">{project.category}</span>
                      <span aria-hidden="true" className="text-smoke">·</span>
                      <span className="font-mono text-ash">{project.location}</span>
                      <span aria-hidden="true" className="text-smoke">·</span>
                      <span className="font-mono text-ash">{project.timeline}</span>
                    </div>

                    <h3 className="font-display mt-2 text-2xl font-light leading-tight text-paper transition-colors group-hover:text-brass sm:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mt-1.5 text-sm text-fawn">{project.role}</p>

                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-fawn text-pretty">
                      {project.storyIntro || project.challenge}
                    </p>
                  </div>

                  <div className="flex flex-col justify-between gap-5 lg:col-span-4 lg:items-end">
                    <div className="w-full space-y-2 border-t border-line pt-4 lg:border-0 lg:pt-0">
                      {project.metrics.slice(0, 2).map((m) => (
                        <p key={m} className="flex items-start gap-2 text-xs leading-snug text-fawn">
                          <IconCheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-moss" />
                          <span className="text-pretty">{m}</span>
                        </p>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brass"
                    >
                      <span className="link-rule">Case study</span>
                      <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>

      {selectedProject && (
        <CaseStudy project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}