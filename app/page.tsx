import Image from "next/image";
import { existsSync } from "node:fs";
import path from "node:path";
import type { CSSProperties } from "react";
import ProjectGallery from "@/components/ProjectGallery";
import CertificateGallery from "@/components/CertificateModal";
import ContactDeck from "@/components/ContactDeck";
import {
  IconBriefcase,
  IconLayers,
  IconKanban,
  IconGitBranch,
  IconShieldCheck,
  IconChartBar,
  IconTerminal,
  IconCheckCircle,
  IconAward,
  IconCode,
  IconCpu,
  IconMapPin,
  IconClock,
  IconUsers,
  IconDownload,
  IconArrowUpRight,
} from "@/components/Icons";

/* -----------------------------------------------------------------------------
 * Profile Photo Checking
 * -------------------------------------------------------------------------- */
const PROFILE_PHOTO_PATH = path.join(process.cwd(), "public", "images", "profile.jpg");
const hasProfilePhoto = existsSync(PROFILE_PHOTO_PATH);

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

type ExperienceRole = {
  title: string;
  company: string;
  location: string;
  duration: string;
  span: string;
  summary: string;
  bullets: string[];
  skills: string[];
};

const CAREER_EXPERIENCE: ExperienceRole[] = [
  {
    title: "Technical Project Manager / Scrum Master",
    company: "DG Cars",
    location: "United Kingdom (Remote)",
    duration: "Aug 2025 – Present",
    span: "Current",
    summary:
      "Leading Agile delivery for a high-volume UK mobility and dispatch platform where sprint velocity, system stability, and real-time operational visibility are paramount.",
    bullets: [
      "Direct sprint planning, backlog refinement, stakeholder syncs, and delivery milestones for distributed engineering and QA teams across the UK and Asia.",
      "Translate complex business rules into unambiguous Jira user stories and testable acceptance criteria, eliminating mid-sprint requirement drift across the SDLC.",
      "Manage release readiness, cross-team dependency mapping, and blocker escalation to consistently achieve on-time sprint completions.",
      "Integrate practical automation workflows (meeting synthesis, PRD drafting, and test-case structuring) with mandatory manual validation before engineering handoff.",
    ],
    skills: ["Jira & Confluence", "Agile Scrum", "Mobility Platform", "REST APIs", "Stakeholder Alignment", "UAT"],
  },
  {
    title: "Project Manager / QA Lead",
    company: "BrainCell",
    location: "Saudi Arabia (Remote)",
    duration: "May 2024 – Jul 2025",
    span: "1 yr 2 mos",
    summary:
      "Held dual accountability for software project delivery and quality governance across multiple concurrent client platforms in the Middle East.",
    bullets: [
      "Managed cross-functional development and quality engineering teams across 4 enterprise client deliveries simultaneously using Agile Scrum.",
      "Orchestrated release readiness reviews, defect triage sessions, and client acceptance milestones, ensuring software stability before production cutover.",
      "Instituted standardized QA test matrices and regression protocols that reduced post-release defect tickets by 35%.",
      "Prepared comprehensive sprint velocity reports, risk registers, and stakeholder roadmap presentations with clear milestone visibility.",
    ],
    skills: ["Dual PM/QA Leadership", "Agile Delivery", "Defect Triage", "Sprint Planning", "Regression Testing"],
  },
  {
    title: "Technical Project Manager",
    company: "App4orce",
    location: "Pakistan",
    duration: "Mar 2023 – Apr 2024",
    span: "1 yr 1 mo",
    summary:
      "Owned the complete delivery lifecycle across web, mobile, and B2B SaaS products, from initial discovery workshops to production release.",
    bullets: [
      "Directed end-to-end SDLC delivery for multi-platform web, mobile (iOS/Android), and SaaS solutions, managing squads of 12+ developers and designers.",
      "Facilitated backlog prioritization using RICE and MoSCoW frameworks, balancing business value with engineering technical debt reduction.",
      "Worked closely with UI/UX designers and technical leads to build interactive workflow mockups and validate architectural constraints early.",
      "Maintained 95%+ sprint commitment reliability through proactive blocker removal and daily standup facilitation.",
    ],
    skills: ["SaaS Delivery", "Mobile & Web SDLC", "Scope Management", "Backlog Grooming", "Cross-Functional Leadership"],
  },
  {
    title: "Project Manager",
    company: "Karigar Web Solutions",
    location: "Pakistan",
    duration: "Aug 2020 – Feb 2023",
    span: "2 yrs 7 mos",
    summary:
      "Managed scale: led 50+ international client projects with a 20-person engineering team, establishing standardized Agile processes and predictable releases.",
    bullets: [
      "Directed over 50 international client software deliverables spanning custom WordPress plugins, mobile applications, Chrome extensions, and e-commerce platforms.",
      "Led a 20-person cross-functional team of software engineers, UI/UX designers, and QA testers, maintaining a 95% on-schedule completion record.",
      "Replaced ad-hoc development habits with structured Agile Scrum ceremonies, sprint boards, and documented release criteria.",
      "Awarded the Best Performance Certificate for exceptional project management and delivering complex client solutions under compressed deadlines.",
    ],
    skills: ["50+ Global Deliveries", "Team of 20 Engineers", "Scrum Implementation", "Chrome Extensions", "E-Commerce"],
  },
  {
    title: "Project Manager",
    company: "TechnoSofts",
    location: "Pakistan",
    duration: "Jan 2020 – Jul 2020",
    span: "7 mos",
    summary:
      "Managed custom web and e-commerce software developments for international clients from requirement scoping to live deployment.",
    bullets: [
      "Led requirement gathering sessions, technical scoping, and development coordination for international e-commerce and web platforms.",
      "Conducted weekly client product demonstrations, managed feedback loops, and maintained strict milestone schedule compliance.",
      "Successfully delivered 10+ custom web solutions on time with zero scope creep.",
    ],
    skills: ["Client Communication", "Web Scoping", "E-Commerce", "Milestone Tracking"],
  },
  {
    title: "QA Engineer",
    company: "HI Tech IT Company",
    location: "Pakistan",
    duration: "Jan 2019 – Dec 2019",
    span: "1 yr",
    summary:
      "Built the foundational engineering instinct of how software breaks in production, mastering test planning, edge-case analysis, and defect lifecycle tracking.",
    bullets: [
      "Executed functional, exploratory, and regression testing across web and mobile software before production releases.",
      "Documented detailed defect reports, reproduction steps, and collaborated closely with developers to verify fixes.",
      "Gained deep technical empathy for engineering teams and learned the critical importance of testable user stories.",
    ],
    skills: ["Manual & Functional QA", "Test Case Design", "Defect Lifecycle", "SDLC Fundamentals"],
  },
];

const SKILLS_BENTO = [
  {
    category: "Agile Governance & Delivery",
    icon: IconKanban,
    accent: "border-indigo-500/30 bg-indigo-500/10 text-indigo-400",
    summary: "Guiding distributed squads through predictable sprint cadences, protected scope, and continuous shipping.",
    items: [
      "Agile Scrum",
      "Kanban Framework",
      "SDLC Governance",
      "Sprint Planning",
      "Backlog Refinement",
      "Release Management",
      "Risk & Blocker Mitigation",
      "Capacity Planning",
      "Stakeholder Alignment",
      "User Story Mapping",
    ],
  },
  {
    category: "Technical Fluency & Architecture",
    icon: IconTerminal,
    accent: "border-sky-500/30 bg-sky-500/10 text-sky-400",
    summary: "Sufficient engineering depth to review API contracts, interrogate architectural estimates, and debug system constraints.",
    items: [
      "RESTful APIs",
      "Postman Collections",
      "SQL Data Queries",
      "System Design Fundamentals",
      "Git & GitHub Workflows",
      "CI/CD Pipelines",
      "JavaScript & Webhooks",
      "Basic Python Scripting",
      "HTML5 & CSS3",
    ],
  },
  {
    category: "Quality Assurance & SDLC Control",
    icon: IconShieldCheck,
    accent: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
    summary: "Rooted in QA fundamentals: preventing defects at the requirement stage and enforcing strict verification gates.",
    items: [
      "TestRail & QA Tooling",
      "Acceptance Criteria (Gherkin)",
      "Regression Planning",
      "Defect Triage & Root Cause",
      "User Acceptance Testing (UAT)",
      "End-to-End Test Matrices",
      "Production Cutover Checklists",
    ],
  },
  {
    category: "PM Tooling & Workflow Optimization",
    icon: IconCpu,
    accent: "border-violet-500/30 bg-violet-500/10 text-violet-400",
    summary: "Leveraging modern industry platforms to maintain team clarity, document systems, and streamline collaboration.",
    items: [
      "Jira Software",
      "Azure DevOps",
      "Confluence",
      "Linear",
      "ClickUp",
      "Notion",
      "Slack & Teams",
      "Figma & Miro User Flows",
      "Structured Prompt Engineering",
    ],
  },
];

const PRINCIPLES = [
  {
    num: "01",
    title: "Clarity Before Velocity",
    description:
      "Most failed software projects are not effort problems—they are ambiguity problems. Requirements must be structured, challenged, and agreed upon with crisp acceptance criteria before a single line of code is written.",
  },
  {
    num: "02",
    title: "Boards Reflect Reality",
    description:
      "Jira is the single source of truth. Blockers, technical dependencies, and risk factors live in plain sight. When reality shifts, the board reflects it immediately so stakeholders never face surprises two days before a release.",
  },
  {
    num: "03",
    title: "Calm Is a Deliberate Strategy",
    description:
      "High-performing software teams do not operate in continuous panic. Predictable sprint cadences, honest capacity estimation, and early escalation make delivery calm, reliable, and sustainable.",
  },
  {
    num: "04",
    title: "Engineered Quality Over Rework",
    description:
      "Quality is not an afterthought added in the final week of a release. Starting from my QA roots, verification criteria are embedded in every user story, ensuring zero regression debt.",
  },
];

function SectionTitle({
  id,
  num,
  eyebrow,
  title,
  subtitle,
}: {
  id?: string;
  num: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12 md:mb-16" data-reveal>
      <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-indigo-400 uppercase">
        <span className="rounded bg-indigo-500/10 px-2 py-0.5 border border-indigo-500/20">{num}</span>
        <span>·</span>
        <span>{eyebrow}</span>
      </div>
      <h2 id={id} className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main id="main" className="relative overflow-hidden">
      {/* =====================================================================
          HERO SECTION
          ===================================================================== */}
      <section id="overview" className="relative min-h-[90vh] overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Architectural grid & ambient radial lights */}
        <div aria-hidden="true" className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-40" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-20 -translate-x-1/2 h-[500px] w-[800px] max-w-full rounded-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15),transparent_70%)] blur-3xl"
        />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left Hero Copy */}
            <div className="lg:col-span-8 space-y-6" data-reveal>
              {/* Pill badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/90 px-3.5 py-1.5 text-xs text-slate-300 backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-indigo-400" />
                <span className="font-mono font-medium">Technical Project Manager & Scrum Master</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl leading-[1.08]">
                Abdul Raheem
              </h1>

              {/* Sub-headline */}
              <p className="text-xl font-medium text-slate-200 sm:text-2xl leading-snug">
                Delivering complex software roadmaps with predictable cadence and zero chaos.
              </p>

              {/* Narrative description */}
              <p className="max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
                Seven years directing distributed engineering teams across the United Kingdom,
                Saudi Arabia, and the United States. I combine an engineering foundation with rigorous
                Agile Scrum governance to ship SaaS, web, and mobile systems on time, within scope, and without fire drills.
              </p>

              {/* Action Buttons & Quick Copy */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="#projects"
                  className="rounded-xl bg-indigo-600 px-6 py-3 text-xs font-semibold text-white shadow-lg shadow-indigo-600/30 transition-all hover:bg-indigo-500 hover:shadow-indigo-600/40"
                >
                  Explore Case Studies
                </a>
                <a
                  href="#experience"
                  className="rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3 text-xs font-semibold text-slate-200 transition-all hover:border-slate-600 hover:bg-slate-800 hover:text-white"
                >
                  View Track Record
                </a>
                <a
                  href="#contact"
                  className="rounded-xl border border-slate-800 bg-slate-950/60 px-5 py-3 text-xs font-medium text-slate-400 transition-all hover:border-slate-700 hover:text-slate-200"
                >
                  Get in Touch
                </a>
              </div>

              {/* Timezone / Location Info */}
              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <IconMapPin className="h-3.5 w-3.5 text-slate-500" />
                  <span>Lahore, PK (UTC+5)</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1.5">
                  <IconClock className="h-3.5 w-3.5 text-slate-500" />
                  <span>Overlap: UK (GMT), Europe (CET), GCC (AST), & US East (EST)</span>
                </div>
              </div>
            </div>

            {/* Right Profile Portrait Card */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end" data-reveal style={delay(120)}>
              <div className="relative">
                {/* Glow ring */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-indigo-600/20 via-sky-500/10 to-transparent blur-xl"
                />

                <div className="relative w-64 sm:w-72 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-3 shadow-2xl backdrop-blur-xl">
                  <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-slate-950">
                    {hasProfilePhoto ? (
                      <Image
                        src="/images/profile.jpg"
                        alt="Abdul Raheem - Technical Project Manager & Scrum Master"
                        fill
                        priority
                        sizes="(max-width: 640px) 256px, 288px"
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center bg-slate-900 text-slate-400">
                        <span className="text-4xl font-bold tracking-tight text-white">AR</span>
                        <span className="mt-2 text-[10px] font-mono uppercase tracking-widest text-slate-500">
                          Abdul Raheem
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="mt-3 px-1 pb-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-white">Abdul Raheem</span>
                      <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono text-emerald-400 border border-emerald-500/20">
                        PSM I Certified
                      </span>
                    </div>
                    <p className="mt-1 text-[11px] text-slate-400 font-mono">Senior Technical PM · Remote Lead</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quantified Metrics Bento Row */}
          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4" data-reveal style={delay(200)}>
            {[
              { num: "7+", label: "Years Delivering SDLC", detail: "Remote Agile & SaaS" },
              { num: "50+", label: "Global Deployments", detail: "UK, Saudi Arabia & US" },
              { num: "95%", label: "On-Time Sprint Rate", detail: "Predictable velocity" },
              { num: "20+", label: "Engineers Coordinated", detail: "Dev, QA, & UI/UX squads" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 backdrop-blur-xl transition-all hover:border-slate-700"
              >
                <div className="text-3xl font-extrabold tracking-tight text-white font-mono">{stat.num}</div>
                <div className="mt-1 text-xs font-semibold text-slate-200">{stat.label}</div>
                <div className="mt-0.5 text-[11px] text-slate-400 font-mono">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          EXECUTIVE SUMMARY BENTO
          ===================================================================== */}
      <section id="about" className="relative scroll-mt-24 border-t border-slate-850 py-24 md:py-32 bg-slate-950/60">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            num="01"
            eyebrow="Executive Summary"
            title="Bridging Technical Depth & Delivery Leadership"
            subtitle="How my background in Software Engineering and QA shaped a calm, highly structured approach to product execution."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {/* Card 1: QA Roots */}
            <div
              data-reveal
              className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-8 backdrop-blur-xl transition-all hover:border-slate-700"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-5">
                <IconShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-white">
                QA Foundation to SDLC Leadership
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                I began my technology career in Quality Assurance, dissecting exactly how good software fails. That discipline taught me an enduring lesson: <strong>most engineering failures are requirement clarity failures before they are code failures</strong>. I bring that analytical rigor into every sprint and user story.
              </p>
            </div>

            {/* Card 2: Predictable Cadence */}
            <div
              data-reveal
              style={delay(100)}
              className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-8 backdrop-blur-xl transition-all hover:border-slate-700"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-5">
                <IconKanban className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-white">
                Predictable Agile Cadence
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                At Karigar Web Solutions and DG Cars, I scaled Agile workflows across dozens of simultaneous projects. My focus is eliminating chaos: disciplined backlog grooming, unambiguous acceptance criteria, transparent blocker removal, and a sustainable release rhythm that teams can trust.
              </p>
            </div>

            {/* Card 3: Technical Fluency */}
            <div
              data-reveal
              style={delay(150)}
              className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-8 backdrop-blur-xl transition-all hover:border-slate-700"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-5">
                <IconTerminal className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-white">
                Technical Depth & Architecture Empathy
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                Holding a Bachelor of Software Engineering, I understand REST APIs, database schemas, and Git branching workflows. This technical literacy enables me to challenge engineering estimates constructively, review API contracts, and ensure architectural decisions align with business deadlines.
              </p>
            </div>

            {/* Card 4: Global Remote Delivery */}
            <div
              data-reveal
              style={delay(200)}
              className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-8 backdrop-blur-xl transition-all hover:border-slate-700"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-5">
                <IconUsers className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-white">
                Global Remote Collaboration
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                Extensive experience managing asynchronous, distributed engineering squads across the United Kingdom, Europe, the Middle East, and North America. I ensure time-zone differences become a productivity advantage through clear documentation and structured handoffs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          EXPERIENCE & TRACK RECORD
          ===================================================================== */}
      <section id="experience" className="relative scroll-mt-24 border-t border-slate-850 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            num="02"
            eyebrow="Career Timeline"
            title="Seven Years, Six Teams, One Consistent Standard"
            subtitle="A chronological breakdown of leadership roles, teams directed, and production milestones delivered."
          />

          <ol className="relative ml-2 space-y-12 border-l border-slate-800 md:ml-6">
            <span aria-hidden="true" className="tl-line" />
            {CAREER_EXPERIENCE.map((role, i) => (
              <li
                key={`${role.company}-${role.duration}`}
                data-reveal
                style={delay(i === 0 ? 0 : 80)}
                className="relative pl-8 md:pl-12"
              >
                {/* Node indicator */}
                <span aria-hidden="true" className="absolute -left-2 top-1.5 grid place-items-center">
                  <span className="tl-ring block h-4 w-4 rounded-full border bg-slate-950" />
                  <span className="tl-dot absolute block h-[9px] w-[9px] rounded-full" />
                </span>

                {/* Duration Tag */}
                <div className="mb-2 flex items-center gap-2">
                  <span className="rounded-full border border-slate-800 bg-slate-900 px-3 py-0.5 text-[11px] font-mono font-medium text-indigo-400">
                    {role.duration}
                  </span>
                  <span className="text-xs font-mono text-slate-500">· {role.location}</span>
                </div>

                {/* Title & Company */}
                <h3 className="text-xl font-bold tracking-tight text-white">{role.title}</h3>
                <p className="mt-0.5 text-sm font-medium text-slate-300">{role.company}</p>

                {/* Narrative Summary */}
                <p className="mt-3 max-w-3xl text-xs font-medium text-slate-300 leading-relaxed">
                  {role.summary}
                </p>

                {/* Bullets */}
                <ul className="mt-4 space-y-2.5">
                  {role.bullets.map((b) => (
                    <li key={b.slice(0, 30)} className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-400">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills tags */}
                <div className="mt-4 flex flex-wrap gap-1.5 pt-2">
                  {role.skills.map((s) => (
                    <span key={s} className="rounded bg-slate-800/60 px-2 py-0.5 text-[10px] font-mono text-slate-400">
                      {s}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* =====================================================================
          CASE STUDIES & DELIVERIES
          ===================================================================== */}
      <section id="projects" className="relative scroll-mt-24 border-t border-slate-850 py-24 md:py-32 bg-slate-950/60">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            num="03"
            eyebrow="Case Studies & Deliveries"
            title="Selected Production Releases"
            subtitle="Granular breakdowns of technical challenges, SDLC management strategies, and measurable business outcomes."
          />

          <ProjectGallery />
        </div>
      </section>

      {/* =====================================================================
          TECHNICAL STACK & PM TOOLCHAIN MATRIX
          ===================================================================== */}
      <section id="skills" className="relative scroll-mt-24 border-t border-slate-850 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            num="04"
            eyebrow="Competencies Matrix"
            title="Technical Toolchain & PM Governance"
            subtitle="The frameworks, technical tooling, and QA systems I use to run high-velocity engineering teams."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {SKILLS_BENTO.map((bento, i) => {
              const Icon = bento.icon;
              return (
                <div
                  key={bento.category}
                  data-reveal
                  style={delay(i * 100)}
                  className="flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/70 p-7 backdrop-blur-xl transition-all hover:border-slate-700"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border ${bento.accent}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="text-base font-semibold tracking-tight text-white">
                        {bento.category}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed mb-5">
                      {bento.summary}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 border-t border-slate-800/80 pt-4">
                    {bento.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-1 text-xs text-slate-300 font-mono transition-colors hover:border-indigo-500/50 hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          VERIFIED CREDENTIALS & CERTIFICATIONS
          ===================================================================== */}
      <section id="certificates" className="relative scroll-mt-24 border-t border-slate-850 py-24 md:py-32 bg-slate-950/60">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            num="05"
            eyebrow="Verified Credentials"
            title="Certifications & Industry Accreditations"
            subtitle="Official certifications verified with issuing bodies (Google, Scrum.org, SCRUMstudy, and 6SIGMAstudy)."
          />

          <CertificateGallery />
        </div>
      </section>

      {/* =====================================================================
          OPERATING PRINCIPLES ("HOW I WORK")
          ===================================================================== */}
      <section id="how-i-work" className="relative scroll-mt-24 border-t border-slate-850 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            num="06"
            eyebrow="Operating Principles"
            title="Core Delivery Standards"
            subtitle="The foundational engineering and management principles that govern every sprint and release."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map((p, i) => (
              <div
                key={p.num}
                data-reveal
                style={delay(i * 100)}
                className="flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 backdrop-blur-xl transition-all hover:border-indigo-500/40"
              >
                <div>
                  <span className="text-3xl font-extrabold font-mono text-indigo-500/40">{p.num}</span>
                  <h3 className="mt-3 text-sm font-semibold tracking-tight text-white">{p.title}</h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-slate-400">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          EDUCATION & ACADEMIC FOUNDATION
          ===================================================================== */}
      <section id="education" className="relative scroll-mt-24 border-t border-slate-850 py-24 md:py-32 bg-slate-950/60">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            num="07"
            eyebrow="Academic Foundation"
            title="Education & Formal Engineering Roots"
          />

          <div data-reveal className="rounded-2xl border border-slate-800 bg-slate-900/80 p-8 md:p-10 backdrop-blur-xl max-w-3xl">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
                Superior University · Lahore, Pakistan
              </span>
              <span className="rounded-full border border-slate-800 bg-slate-950 px-3 py-0.5 text-xs font-mono text-slate-400">
                Graduated 2018
              </span>
            </div>

            <h3 className="mt-4 text-2xl font-bold tracking-tight text-white">
              Bachelor of Science in Software Engineering (BSSE)
            </h3>

            <p className="mt-3 text-xs leading-relaxed text-slate-300">
              Four-year rigorous engineering curriculum providing deep foundations in software development lifecycles (SDLC), object-oriented design, relational database modeling, algorithms, and distributed systems thinking.
            </p>

            <p className="mt-4 border-t border-slate-800 pt-4 text-[11px] font-mono text-slate-400">
              Verified degree certificate and university transcripts are available upon request.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================================
          CONTACT & CONNECT HUB
          ===================================================================== */}
      <section id="contact" className="relative scroll-mt-24 border-t border-slate-850 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            num="08"
            eyebrow="Direct Reachout"
            title="Let&rsquo;s Build Something Steady"
            subtitle="If your engineering team needs a Technical Project Manager who brings calm, structure, and honest timelines to remote Agile delivery, let's connect."
          />

          <ContactDeck />
        </div>
      </section>

      {/* =====================================================================
          FOOTER
          ===================================================================== */}
      <footer className="border-t border-slate-800 bg-slate-950 py-10 text-xs text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-indigo-600 text-[10px] font-bold text-white">
              AR
            </span>
            <span className="font-semibold text-slate-200">Abdul Raheem</span>
            <span className="text-slate-600">·</span>
            <span>Technical Project Manager & Scrum Master</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#overview" className="hover:text-white transition-colors">Overview</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a href="#top" className="text-indigo-400 hover:text-indigo-300 transition-colors">Back to top ↑</a>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 mt-6 pt-6 border-t border-slate-900 text-center text-[11px] text-slate-400 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>© {new Date().getFullYear()} Abdul Raheem. All rights reserved.</p>
          <p className="font-mono">Built with Next.js, React 19 & Tailwind CSS</p>
        </div>
      </footer>
    </main>
  );
}
