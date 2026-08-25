import Image from "next/image";
import { existsSync } from "node:fs";
import path from "node:path";
import type { CSSProperties } from "react";
import ProjectGallery from "@/components/ProjectGallery";
import CertificateGallery from "@/components/CertificateModal";
import ContactDeck from "@/components/ContactDeck";
import SprintLifecycle from "@/components/SprintLifecycle";
import { SystemDiagram } from "@/components/SystemDiagrams";
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

const PROFILE_PHOTO_PATH = path.join(process.cwd(), "public", "images", "profile.jpg");
const hasProfilePhoto = existsSync(PROFILE_PHOTO_PATH);

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

type ExperienceRole = {
  title: string;
  company: string;
  location: string;
  duration: string;
  span: string;
  storyQuote: string;
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
    storyQuote:
      "Leading Agile delivery for a high-velocity UK mobility platform where dispatch latency is measured in seconds and milestones have to end with visible code in staging.",
    bullets: [
      "Drive sprint planning, daily blocker triage, and release milestones for distributed engineering and QA teams across the UK and Asia.",
      "Translate complex UK transport regulations and dispatch business rules into crisp, testable Jira user stories with zero ambiguity for developers.",
      "Manage release readiness, cross-team API dependency mapping, and risk mitigation so milestones stay predictable and on track.",
      "Use practical automation tools (meeting synthesis, PRD drafting, and test-case structuring) with mandatory manual review before anything touches the sprint board.",
    ],
    skills: ["Jira & Confluence", "Agile Scrum", "Mobility Platform", "REST APIs", "Stakeholder Alignment", "UAT"],
  },
  {
    title: "Project Manager / QA Lead",
    company: "BrainCell",
    location: "Saudi Arabia (Remote)",
    duration: "May 2024 – Jul 2025",
    span: "1 yr 2 mos",
    storyQuote:
      "Ran project delivery and quality assurance hand-in-hand, because a release is only ready when thorough testing proves it can survive production traffic.",
    bullets: [
      "Managed software development and quality engineering teams across 4 concurrent enterprise client platforms in Saudi Arabia using Agile Scrum.",
      "Orchestrated release readiness reviews, defect triage sessions, and client acceptance demos, ensuring software stability before production cutover.",
      "Standardized QA regression matrices and defect triage workflows, reducing post-release defect tickets by 35%.",
      "Delivered transparent sprint velocity reports, risk registers, and stakeholder roadmap presentations with clear milestone visibility.",
    ],
    skills: ["Dual PM/QA Leadership", "Agile Delivery", "Defect Triage", "Sprint Planning", "Regression Testing"],
  },
  {
    title: "Technical Project Manager",
    company: "App4orce",
    location: "Pakistan",
    duration: "Mar 2023 – Apr 2024",
    span: "1 yr 1 mo",
    storyQuote:
      "Owned the complete delivery lifecycle across web, mobile, and SaaS products, turning broad client requirements into structured, shipped releases.",
    bullets: [
      "Directed end-to-end SDLC delivery for multi-platform web, mobile (iOS/Android), and B2B SaaS solutions, managing squads of 12+ developers and designers.",
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
    storyQuote:
      "Where I mastered scale: delivered over 50 international client projects with a 20-person engineering team, establishing standardized Agile processes and predictable releases.",
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
    storyQuote:
      "Managed custom web and e-commerce builds for international clients, establishing clear scope boundaries and sprint demonstrations.",
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
    storyQuote:
      "The year I learned to see software the way users do—by trying to break it before they could. It formed the foundation for how I lead technical projects today.",
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
    category: "Agile & Product Delivery Governance",
    icon: IconKanban,
    accent: "border-indigo-500/30 bg-indigo-500/10 text-indigo-400",
    summary: "Shaping backlogs, protecting engineer focus, breaking down epics, and keeping releases predictable.",
    items: [
      "Agile Scrum",
      "Kanban",
      "SDLC Governance",
      "Sprint Planning",
      "Backlog Grooming",
      "Release Management",
      "Risk Mitigation",
      "Capacity Planning",
      "Stakeholder Alignment",
      "User Story Mapping",
    ],
  },
  {
    category: "Technical Fluency & Architecture",
    icon: IconTerminal,
    accent: "border-sky-500/30 bg-sky-500/10 text-sky-400",
    summary: "Deep technical fluency to challenge estimates, review API contracts, and unblock engineering discussions.",
    items: [
      "RESTful APIs",
      "Postman Collections",
      "SQL Data Queries",
      "System Architecture",
      "Git & GitHub Workflows",
      "CI/CD Pipelines",
      "JavaScript & Webhooks",
      "Basic Python Scripting",
      "HTML5 & CSS3",
    ],
  },
  {
    category: "Quality Assurance & Risk Control",
    icon: IconShieldCheck,
    accent: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
    summary: "Built from QA roots: embedding acceptance criteria upfront and enforcing strict release verification gates.",
    items: [
      "TestRail & QA Tooling",
      "Gherkin Acceptance Criteria",
      "Regression Planning",
      "Defect Triage & RCA",
      "User Acceptance Testing (UAT)",
      "Cross-Browser Matrices",
      "Release Gateways",
    ],
  },
  {
    category: "Product Toolchain & Collaboration",
    icon: IconCpu,
    accent: "border-violet-500/30 bg-violet-500/10 text-violet-400",
    summary: "Using modern industry platforms to maintain team clarity, document systems, and streamline asynchronous work.",
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

const FAQS = [
  {
    q: "What makes Abdul Raheem different from traditional Project Managers?",
    a: "I started in Software Engineering and QA, not theoretical management. I understand REST APIs, database schemas, and edge cases. This means I write user stories developers actually enjoy building, challenge unrealistic estimates constructively, and ensure zero regression debt reaches production.",
  },
  {
    q: "How do you manage distributed remote teams across UK, US, and Middle East time zones?",
    a: "Through asynchronous clarity. I establish written 'Definitions of Ready', clear acceptance criteria, and structured daily updates so engineers never sit blocked waiting for a meeting. Time zones become an advantage when handoffs are crystal clear.",
  },
  {
    q: "How do you prevent scope creep while keeping stakeholders happy?",
    a: "By using the RICE and MoSCoW prioritization frameworks. I never say an outright 'no' to valuable ideas—instead, I make trade-offs transparent: 'We can build this new feature, but here is what moves to next sprint to protect our release date.' This builds immense trust with executives.",
  },
  {
    q: "What is your approach to AI in product delivery?",
    a: "AI is a powerful productivity accelerator, not an autonomous author. I use ChatGPT, Claude, and Copilot for rapid PRD drafting, meeting synthesis, and test-case structuring, but every single output is manually verified and tailored before engineering touches it.",
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
        <div aria-hidden="true" className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-40" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-20 -translate-x-1/2 h-[500px] w-[800px] max-w-full rounded-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15),transparent_70%)] blur-3xl"
        />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left Hero Copy */}
            <div className="lg:col-span-8 space-y-6" data-reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/90 px-3.5 py-1.5 text-xs text-slate-300 backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-indigo-400" />
                <span className="font-mono font-medium">Technical Project & Product Manager · Scrum Master</span>
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl leading-[1.08]">
                Abdul Raheem
              </h1>

              <p className="text-xl font-medium text-slate-200 sm:text-2xl leading-snug">
                I turn complex technical roadmaps into calm, predictable software releases that ship on time.
              </p>

              <p className="max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
                Seven years leading remote Agile teams across the UK, Saudi Arabia, and the United States.
                With a background in Software Engineering and QA, I eliminate requirement ambiguity, protect developer focus,
                and give stakeholders reliable delivery dates without the drama.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="#projects"
                  className="rounded-xl bg-indigo-600 px-6 py-3 text-xs font-semibold text-white shadow-lg shadow-indigo-600/30 transition-all hover:bg-indigo-500 hover:shadow-indigo-600/40"
                >
                  Explore Case Studies & Stories
                </a>
                <a
                  href="#experience"
                  className="rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3 text-xs font-semibold text-slate-200 transition-all hover:border-slate-600 hover:bg-slate-800 hover:text-white"
                >
                  Career Track Record
                </a>
                <a
                  href="#contact"
                  className="rounded-xl border border-slate-800 bg-slate-950/60 px-5 py-3 text-xs font-medium text-slate-400 transition-all hover:border-slate-700 hover:text-slate-200"
                >
                  Send a Message
                </a>
              </div>

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
                <div
                  aria-hidden="true"
                  className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-indigo-600/20 via-sky-500/10 to-transparent blur-xl"
                />

                <div className="relative w-64 sm:w-72 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-3 shadow-2xl backdrop-blur-xl">
                  <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-slate-950">
                    {hasProfilePhoto ? (
                      <Image
                        src="/images/profile.jpg"
                        alt="Abdul Raheem - Technical Project & Product Manager"
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
              { num: "7+", label: "Years in the Trenches", detail: "Software SDLC & Agile" },
              { num: "50+", label: "Global Deployments", detail: "UK, Saudi Arabia & US" },
              { num: "95%", label: "On-Time Sprint Rate", detail: "Predictable shipping" },
              { num: "20+", label: "Engineers Led", detail: "Dev, QA, & UI/UX squads" },
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
          EXECUTIVE STORY & BACKGROUND
          ===================================================================== */}
      <section id="about" className="relative scroll-mt-24 border-t border-slate-850 py-24 md:py-32 bg-slate-950/60">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            num="01"
            eyebrow="My Story & Philosophy"
            title="From Breaking Code in QA to Steering 50+ Global Releases"
            subtitle="Why I believe most project delays are clarity problems, not effort problems."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <div
              data-reveal
              className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-8 backdrop-blur-xl transition-all hover:border-slate-700"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-5">
                <IconShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-white">
                The QA Instinct: Preventing Errors at the Source
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                I spent my first year in tech in Quality Assurance, deliberately trying to break web and mobile apps. That experience permanently changed how I view software delivery: <strong>90% of bugs and missed deadlines happen because someone gave developers vague requirements with missing edge cases</strong>. Today, I ensure acceptance criteria are airtight before a sprint starts.
              </p>
            </div>

            <div
              data-reveal
              style={delay(100)}
              className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-8 backdrop-blur-xl transition-all hover:border-slate-700"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-5">
                <IconKanban className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-white">
                Protecting Engineer Focus & Velocity
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                Engineers do their best work when they are in flow, not in endless meetings. As a Scrum Master and TPM, my role is to act as a shield: absorbing scope changes, removing blockers within hours, and breaking large epics into clean 2-day user stories so development moves fast and stays calm.
              </p>
            </div>

            <div
              data-reveal
              style={delay(150)}
              className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-8 backdrop-blur-xl transition-all hover:border-slate-700"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-5">
                <IconTerminal className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-white">
                Technical Literacy: Speaking Developer Language
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                With a Bachelor of Software Engineering, I don’t just move cards on a board. I read API documentation, review Postman collections, understand database relationships, and inspect Git pull requests. When a developer says an integration is complex, we talk architecture, not excuses.
              </p>
            </div>

            <div
              data-reveal
              style={delay(200)}
              className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-8 backdrop-blur-xl transition-all hover:border-slate-700"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-5">
                <IconUsers className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-white">
                Asynchronous Remote Mastery
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                Managing remote engineers across London, Riyadh, and New York taught me that great documentation replaces 80% of synchronous calls. Detailed Jira tickets, video walkthroughs, and clear staging environments keep teams productive around the clock.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          INTERACTIVE SPRINT LIFECYCLE (HOW I RUN SPRINTS)
          ===================================================================== */}
      <section id="how-i-work" className="relative scroll-mt-24 border-t border-slate-850 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            num="02"
            eyebrow="Delivery Methodology"
            title="The 4-Stage Sprint Engine"
            subtitle="An interactive breakdown of how I take feature ideas from vague concepts to tested, zero-downtime releases."
          />

          <SprintLifecycle />
        </div>
      </section>

      {/* =====================================================================
          CAREER EXPERIENCE & TRACK RECORD
          ===================================================================== */}
      <section id="experience" className="relative scroll-mt-24 border-t border-slate-850 py-24 md:py-32 bg-slate-950/60">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            num="03"
            eyebrow="Track Record"
            title="Seven Years in the Trenches"
            subtitle="A chronological journey through companies, teams directed, and technical milestones achieved."
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
                <span aria-hidden="true" className="absolute -left-2 top-1.5 grid place-items-center">
                  <span className="tl-ring block h-4 w-4 rounded-full border bg-slate-950" />
                  <span className="tl-dot absolute block h-[9px] w-[9px] rounded-full" />
                </span>

                <div className="mb-2 flex items-center gap-2">
                  <span className="rounded-full border border-slate-800 bg-slate-900 px-3 py-0.5 text-[11px] font-mono font-medium text-indigo-400">
                    {role.duration}
                  </span>
                  <span className="text-xs font-mono text-slate-500">· {role.location}</span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-white">{role.title}</h3>
                <p className="mt-0.5 text-sm font-medium text-slate-300">{role.company}</p>

                <p className="mt-3 max-w-3xl text-xs font-medium text-slate-300 leading-relaxed italic border-l-2 border-indigo-500/40 pl-3">
                  &ldquo;{role.storyQuote}&rdquo;
                </p>

                <ul className="mt-4 space-y-2.5">
                  {role.bullets.map((b) => (
                    <li key={b.slice(0, 30)} className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-400">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

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
          CASE STUDIES & VISUAL DELIVERIES
          ===================================================================== */}
      <section id="projects" className="relative scroll-mt-24 border-t border-slate-850 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            num="04"
            eyebrow="Case Studies & Deliveries"
            title="Featured Production Deliveries"
            subtitle="In-depth breakdowns of real technical challenges, interactive system flows, and measurable business results."
          />

          <ProjectGallery />
        </div>
      </section>

      {/* =====================================================================
          TECHNICAL STACK & PM TOOLCHAIN MATRIX
          ===================================================================== */}
      <section id="skills" className="relative scroll-mt-24 border-t border-slate-850 py-24 md:py-32 bg-slate-950/60">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            num="05"
            eyebrow="Technical Toolchain"
            title="Competencies & Governance Matrix"
            subtitle="The frameworks, developer tooling, and QA systems I use to steer high-velocity engineering squads."
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
      <section id="certificates" className="relative scroll-mt-24 border-t border-slate-850 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            num="06"
            eyebrow="Credentials"
            title="Verified Industry Accreditations"
            subtitle="Official certifications verified with issuing bodies (Google, Scrum.org, SCRUMstudy, and 6SIGMAstudy)."
          />

          <CertificateGallery />
        </div>
      </section>

      {/* =====================================================================
          HIRING & RECRUITER FAQS (HEAVY SEO INJECTION)
          ===================================================================== */}
      <section id="faq" className="relative scroll-mt-24 border-t border-slate-850 py-24 md:py-32 bg-slate-950/60">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            num="07"
            eyebrow="Recruiter & Hiring Guide"
            title="Frequently Asked Questions"
            subtitle="Straight answers on my technical management background, remote team coordination, and delivery philosophy."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {FAQS.map((faq, idx) => (
              <div
                key={faq.q}
                data-reveal
                style={delay(idx * 80)}
                className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-6 sm:p-7 backdrop-blur-xl"
              >
                <h3 className="text-sm font-bold text-white leading-snug">
                  {faq.q}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-300">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          ACADEMIC FOUNDATION
          ===================================================================== */}
      <section id="education" className="relative scroll-mt-24 border-t border-slate-850 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            num="08"
            eyebrow="Foundations"
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
              Four-year engineering curriculum providing deep foundations in software development lifecycles (SDLC), object-oriented design, relational database modeling, algorithms, and distributed systems thinking.
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
      <section id="contact" className="relative scroll-mt-24 border-t border-slate-850 py-24 md:py-32 bg-slate-950/60">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            num="09"
            eyebrow="Direct Reachout"
            title="Let&rsquo;s Build Something Steady"
            subtitle="Looking for a Technical Project Manager or TPM to lead your next release? Send a direct message below or copy my email."
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
            <span>Technical Project & Product Manager</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#overview" className="hover:text-white transition-colors">Overview</a>
            <a href="#how-i-work" className="hover:text-white transition-colors">Methodology</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Case Studies</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a href="#top" className="text-indigo-400 hover:text-indigo-300 transition-colors">Back to top ↑</a>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 mt-6 pt-6 border-t border-slate-900 text-center text-[11px] text-slate-400 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>© {new Date().getFullYear()} Abdul Raheem. All rights reserved.</p>
          <p className="font-mono">Built with Next.js 15, React 19 & Tailwind CSS</p>
        </div>
      </footer>
    </main>
  );
}
