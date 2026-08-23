import Image from "next/image";
import { existsSync } from "node:fs";
import path from "node:path";
import type { CSSProperties } from "react";

/* -----------------------------------------------------------------------------
 * PHOTO
 * Replace public/images/profile.jpg with any square photo to swap it.
 * -------------------------------------------------------------------------- */
const PROFILE_PHOTO_PATH = path.join(process.cwd(), "public", "images", "profile.jpg");
const hasProfilePhoto = existsSync(PROFILE_PHOTO_PATH);

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

type Role = {
  title: string;
  company: string;
  meta: string;
  span: string;
  story: string;
  bullets: string[];
};

const EXPERIENCE: Role[] = [
  {
    title: "Technical Project Manager / Scrum Master",
    company: "DG Cars",
    meta: "United Kingdom (Remote) · Aug 2025 to Present",
    span: "Current",
    story:
      "Leading Agile delivery for a UK mobility platform where every sprint has to end with progress you can see.",
    bullets: [
      "Lead sprint planning, project timelines, stakeholder communication, and delivery priorities for distributed engineering teams.",
      "Translate business requirements into user stories and acceptance criteria, coordinating backlog refinement with developers and QA across the full SDLC.",
      "Own Jira boards, risks, dependencies, release planning, and delivery reporting so milestones stay visible and on track.",
      "Put ChatGPT, Claude, Microsoft Copilot, and Google Gemini to work on documentation, meeting summaries, requirement analysis, and workflow prototypes, reviewing every output before it ships.",
    ],
  },
  {
    title: "Project Manager / QA Lead",
    company: "BrainCell",
    meta: "Saudi Arabia (Remote) · May 2024 to Jul 2025",
    span: "1 yr 2 mos",
    story:
      "Ran delivery and quality side by side, because a release is only ready when testing says so.",
    bullets: [
      "Managed software development and QA teams across multiple client projects using Agile delivery.",
      "Planned sprints, tracked progress, managed release readiness, and kept business stakeholders informed at every step.",
      "Improved QA processes, supported backlog refinement, and coordinated testing that measurably raised software quality.",
      "Prepared documentation, sprint reports, and stakeholder updates with AI assistance while validating every output myself.",
    ],
  },
  {
    title: "Project Manager",
    company: "App4orce",
    meta: "Pakistan · Mar 2023 to Apr 2024",
    span: "1 yr 1 mo",
    story:
      "Owned the full delivery lifecycle across web, mobile, and SaaS products, from first requirement to production.",
    bullets: [
      "Managed web, mobile, and SaaS projects end to end, coordinating developers, designers, QA engineers, and clients.",
      "Led sprint planning, backlog refinement, release planning, risk management, and project reporting to hold delivery schedules.",
      "Worked with stakeholders to define scope, prioritize features, and turn business needs into actionable development tasks.",
      "Created workflow mockups and lightweight prototypes with AI assisted tools so technical discussions started from something real.",
    ],
  },
  {
    title: "Project Manager",
    company: "Karigar Web Solutions",
    meta: "Pakistan · Aug 2020 to Feb 2023",
    span: "2 yrs 7 mos",
    story:
      "Where I learned scale: more than fifty international projects and a team of twenty, moved onto a shipping rhythm they could trust.",
    bullets: [
      "Directed over 50 international client projects covering WordPress tools, mobile apps, Chrome extensions, and AI applications.",
      "Managed a cross functional team of 20 developers, designers, and QA engineers and finished 95% of projects on schedule.",
      "Introduced structured Agile Scrum workflows that replaced legacy habits with a predictable release cycle.",
      "Handled planning, client communication, requirement gathering, documentation, task tracking, and delivery monitoring.",
      "Earned the Best Performance Certificate for delivering complex client solutions under compressed timelines.",
    ],
  },
  {
    title: "Project Manager",
    company: "TechnoSofts",
    meta: "Pakistan · Jan 2020 to Jul 2020",
    span: "7 mos",
    story:
      "Cut my project management teeth on WordPress and e-commerce builds for clients abroad.",
    bullets: [
      "Managed WordPress and e-commerce projects for international clients from requirement gathering through deployment.",
      "Coordinated developers, designers, and QA while owning schedules, milestones, and client communication.",
      "Ran client demonstrations, managed feedback loops, and made sure deliverables matched business requirements.",
      "Delivered more than 10 custom web solutions on time without compromising quality.",
    ],
  },
  {
    title: "QA Engineer",
    company: "HI Tech IT Company",
    meta: "Pakistan · Jan 2019 to Dec 2019",
    span: "1 yr",
    story:
      "The year I learned to see software the way users do, by trying to break it before they could.",
    bullets: [
      "Executed manual testing, prepared test cases, documented defects, and validated fixes across the SDLC.",
      "Worked alongside developers and project managers to raise software quality and support clean releases.",
    ],
  },
];

type Project = {
  title: string;
  challenge: string;
  approach: string;
  outcome: string;
  role: string;
};

const PROJECTS: Project[] = [
  {
    title: "Learning Management System with AI Chatbot",
    challenge:
      "A full learning platform with courses, attendance, assessments, live classes, and an AI chatbot, where vague requirements risked rework across several teams.",
    approach:
      "Validated requirements before development began, then ran disciplined sprints coordinating stakeholders, engineering, testing, and production releases.",
    outcome:
      "A production LMS serving real learners, delivered with requirements everyone had already agreed on.",
    role: "Project Manager · End to end delivery",
  },
  {
    title: "AI Marketplace Scraper Platform",
    challenge:
      "Stakeholders needed live product data collected reliably from multiple e-commerce sites and wanted proof the workflows could be trusted.",
    approach:
      "Led planning and sprint execution, kept engineering and stakeholders aligned, and validated each collection workflow before it went live.",
    outcome:
      "An automated platform delivering dependable marketplace data the business can act on with confidence.",
    role: "Project Manager · Planning & coordination",
  },
  {
    title: "Rental SaaS Dashboard",
    challenge:
      "A rental software product lacked clear visibility into customer retention, subscriptions, and operational performance.",
    approach:
      "Prioritized features with stakeholders, coordinated development sprints, and steered each release through user acceptance testing.",
    outcome:
      "A dashboard giving operators one clear view of customers, subscriptions, and results.",
    role: "Project Manager · Stakeholders & releases",
  },
];

const HOW_I_WORK = [
  {
    title: "Clarity before speed",
    text: "Most failed projects are not effort problems, they are clarity problems. Requirements get written down, challenged, and agreed before a single sprint starts.",
  },
  {
    title: "Boards tell the truth",
    text: "Jira is my source of reality. Risks, dependencies, and blockers live in plain sight so nobody is surprised two days before a release.",
  },
  {
    title: "AI as an assistant, never an author",
    text: "ChatGPT, Claude, Copilot, and Gemini accelerate my documentation and analysis. Everything they produce gets verified by me before anyone else relies on it.",
  },
  {
    title: "Calm is a strategy",
    text: "Deadlines are met by teams that are not panicking. Steady communication, honest estimates, and early escalations keep delivery boring in the best way.",
  },
];

const SKILL_GROUPS = [
  {
    label: "Project Management",
    sentence:
      "The backbone of my day: shaping sprints, protecting scope, managing risks and dependencies, and keeping releases predictable.",
    items: [
      "Agile", "Scrum", "Kanban", "SDLC", "Sprint Planning", "Backlog Refinement",
      "Release Planning", "Risk Management", "Dependency Management",
      "Scope Management", "Stakeholder Management",
    ],
  },
  {
    label: "Tools",
    sentence:
      "Jira and Azure DevOps anchor my daily workflow; Slack, Teams, Confluence, Notion, ClickUp, and YouTrack keep distributed teams in sync.",
    items: ["Jira", "Azure DevOps", "Confluence", "ClickUp", "YouTrack", "Slack", "Microsoft Teams", "Notion"],
  },
  {
    label: "Technical",
    sentence:
      "Enough engineering fluency to challenge an estimate, review an API design conversation, or debug why a requirement will not survive contact with code.",
    items: ["REST APIs", "System Design Fundamentals", "Basic Python", "Basic SQL", "HTML/CSS", "JavaScript"],
  },
  {
    label: "AI Productivity",
    sentence:
      "I use ChatGPT, Claude, Copilot, and Gemini to draft documentation, analyze requirements, summarize meetings, and prototype workflows, always verifying outputs.",
    items: ["ChatGPT", "Claude", "Microsoft Copilot", "Google Gemini"],
  },
];

type Certificate = {
  src: string;
  name: string;
  issuer: string;
  detail?: string;
  href?: string;
  alt: string;
};

const CERTIFICATES: Certificate[] = [
  {
    src: "/certificates/google-pm-cert.png",
    name: "Google Project Management Professional Certificate",
    issuer: "Google",
    detail: "2023",
    href: "https://www.credly.com/badges/6433352a-e1ec-4f97-b006-db00d9ae8f64",
    alt: "Google Project Management Professional Certificate badge issued to Abdul Raheem",
  },
  {
    src: "/certificates/foundations.jpg",
    name: "Foundations of Project Management",
    issuer: "Google · Coursera",
    detail: "Jun 1, 2023",
    href: "https://coursera.org/share/5a5192df79d64d815412060bba985793",
    alt: "Coursera certificate for Foundations of Project Management, completed by Abdul Raheem Butt",
  },
  {
    src: "/certificates/initiation.jpg",
    name: "Project Initiation: Starting a Successful Project",
    issuer: "Google · Coursera",
    detail: "Jun 7, 2023",
    href: "https://coursera.org/share/afb45c0da6b66816f27ab3356aa5abe9",
    alt: "Coursera certificate for Project Initiation: Starting a Successful Project, completed by Abdul Raheem Butt",
  },
  {
    src: "/certificates/planning.jpg",
    name: "Project Planning: Putting It All Together",
    issuer: "Google · Coursera",
    detail: "Jun 13, 2023",
    href: "https://coursera.org/share/71f2d3900ac8e95851d9077fbd16e0f3",
    alt: "Coursera certificate for Project Planning: Putting It All Together, completed by Abdul Raheem Butt",
  },
  {
    src: "/certificates/execution.jpg",
    name: "Project Execution: Running the Project",
    issuer: "Google · Coursera",
    detail: "Jun 16, 2023",
    href: "https://coursera.org/share/e85c26ba8d4c08d02c25c79009495a14",
    alt: "Coursera certificate for Project Execution: Running the Project, completed by Abdul Raheem Butt",
  },
  {
    src: "/certificates/agile.jpg",
    name: "Agile Project Management",
    issuer: "Google · Coursera",
    detail: "Jun 20, 2023",
    href: "https://coursera.org/share/e467bfc7b4d26336d506ea1674f86edd",
    alt: "Coursera certificate for Agile Project Management, completed by Abdul Raheem Butt",
  },
  {
    src: "/certificates/capstone.jpg",
    name: "Capstone: Applying Project Management in the Real World",
    issuer: "Google · Coursera",
    detail: "Jun 21, 2023",
    href: "https://coursera.org/share/2ebcdac133fa2cfad6137e056a5ade92",
    alt: "Coursera capstone certificate for Applying Project Management in the Real World, completed by Abdul Raheem Butt",
  },
  {
    src: "/certificates/six-sigma.png",
    name: "Six Sigma Yellow Belt",
    issuer: "Certificate No. 875264",
    detail: "View PDF",
    href: "https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/SixSigmaYellowBelt-AbdulRaheemButt-875264.pdf",
    alt: "Six Sigma Yellow Belt certificate awarded to Abdul Raheem Butt",
  },
  {
    src: "/certificates/scrum-fundamentals.jpg",
    name: "Scrum Fundamentals Certified (SFC)",
    issuer: "SCRUMstudy",
    detail: "Certified",
    alt: "Scrum Fundamentals Certified certificate awarded to Abdul Raheem Butt",
  },
];

function SectionHeading({
  id,
  num,
  eyebrow,
  title,
}: {
  id?: string;
  num?: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-12 md:mb-16" data-reveal>
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-mist">
        {num ? (
          <>
            <span className="tabular-nums text-navy/60">{num}</span>
            <span className="mx-2 text-hairline">·</span>
          </>
        ) : null}
        {eyebrow}
      </p>
      <h2 id={id} className="mt-3 text-3xl font-semibold tracking-tight text-navy md:text-4xl">
        {title}
        <span className="title-rule" aria-hidden="true" />
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <main id="main">
      {/* ============================== HERO ============================== */}
      <section id="top" className="relative overflow-hidden">
        <div aria-hidden="true" className="dot-field pointer-events-none absolute inset-0 opacity-40" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-24 h-[460px] w-[460px] rounded-full bg-navy/[0.05] blur-3xl"
        />

        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-36 md:pb-28 md:pt-44">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_auto]">
            <div data-reveal>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-mist">
                Lahore, Pakistan · Remote Agile delivery worldwide
              </p>

              <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-navy md:text-7xl">
                Abdul Raheem
              </h1>

              <p className="mt-5 text-lg font-medium text-ink md:text-xl">
                Technical Project Manager{" "}
                <span className="mx-1 font-light text-mist">|</span> Agile Delivery{" "}
                <span className="mx-1 font-light text-mist">|</span> Scrum Master
              </p>

              <p className="mt-7 max-w-xl text-base leading-relaxed text-mist md:text-lg">
                I lead remote Agile teams that ship SaaS, web, and mobile products
                for clients across the UK, Saudi Arabia, and the USA. Seven years
                and more than fifty projects in, my measure of success has not
                changed: clear plans, calm execution, software that ships.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#experience"
                  className="rounded-full bg-navy px-7 py-3 text-sm font-medium text-ivory transition-all duration-300 hover:bg-navy-deep hover:shadow-lg hover:shadow-navy/20"
                >
                  View Experience
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-navy/25 px-7 py-3 text-sm font-medium text-navy transition-all duration-300 hover:border-navy hover:bg-white"
                >
                  Contact Me
                </a>
              </div>

              <dl className="mt-14 flex divide-x divide-hairline border-t border-hairline pt-8">
                {[
                  { n: "7+", t: "Years leading delivery" },
                  { n: "50+", t: "Projects shipped worldwide" },
                  { n: "95%", t: "Completed on schedule" },
                ].map((s, i) => (
                  <div key={s.t} className={i === 0 ? "pr-8 md:pr-10" : "px-8 md:px-10"}>
                    <dt className="text-3xl font-semibold tracking-tight text-navy">{s.n}</dt>
                    <dd className="mt-1.5 text-[11px] uppercase tracking-[0.16em] text-mist">{s.t}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Photo */}
            <div className="justify-self-center" data-reveal style={delay(150)}>
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(27,54,93,0.12),transparent_65%)] blur-2xl"
                />
                <div aria-hidden="true" className="absolute -inset-4 rounded-full border border-hairline" />
                <div
                  aria-hidden="true"
                  className="absolute -bottom-3 -right-3 h-16 w-16 rounded-2xl border border-hairline bg-paper/70 backdrop-blur-sm"
                />
                <div className="relative h-60 w-60 overflow-hidden rounded-full bg-paper shadow-[0_24px_60px_-24px_rgba(27,54,93,0.35)] ring-1 ring-hairline md:h-72 md:w-72">
                  {hasProfilePhoto ? (
                    <Image
                      src="/images/profile.jpg"
                      alt="Professional portrait of Abdul Raheem, Technical Project Manager and Scrum Master"
                      width={288}
                      height={288}
                      priority
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-b from-paper to-ivory">
                      <span className="text-5xl font-semibold tracking-tight text-navy/85">AR</span>
                      <span className="text-[11px] uppercase tracking-[0.18em] text-mist">Photo coming soon</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== ABOUT ============================== */}
      <section id="about" aria-labelledby="about-title" className="scroll-mt-24 border-t border-hairline bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <SectionHeading id="about-title" num="01" eyebrow="About" title="From QA to the delivery seat" />
          <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
            <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-ink/90" data-reveal>
              <p>
                I started in QA, testing software and learning exactly how good
                products fail. That year taught me a lesson I still carry into
                every sprint: most project failures are clarity failures before
                they are anything else.
              </p>
              <p>
                That instinct pulled me into project management. At Karigar Web
                Solutions I directed more than 50 international client projects,
                introduced structured Scrum to a team of 20, and kept delivery
                predictable enough to finish 95% of projects on schedule.
              </p>
              <p>
                Today I work as a Technical Project Manager and Scrum Master,
                leading remote teams for clients in Saudi Arabia and the United
                Kingdom. I understand REST APIs well enough to challenge an
                estimate, and I put AI tools to work on documentation and analysis
                while verifying every output myself.
              </p>
            </div>

            <aside data-reveal style={delay(150)} className="h-fit rounded-2xl border border-hairline bg-ivory p-7 lg:sticky lg:top-28">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">At a glance</h3>
              <dl className="mt-5 space-y-4">
                {[
                  { k: "Currently", v: "Technical PM · DG Cars (UK)" },
                  { k: "Based in", v: "Lahore, Pakistan" },
                  { k: "Focus", v: "Remote Agile & SaaS delivery" },
                  { k: "Status", v: "Open to opportunities", accent: true },
                ].map((row) => (
                  <div key={row.k} className="border-b border-hairline pb-4 last:border-0 last:pb-0">
                    <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-mist">{row.k}</dt>
                    <dd className={`mt-1 text-sm ${row.accent ? "font-medium text-navy" : "text-ink/85"}`}>{row.v}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* ============================ EXPERIENCE ============================ */}
      <section id="experience" aria-labelledby="experience-title" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <SectionHeading id="experience-title" num="02" eyebrow="Experience" title="Seven years, six teams, one standard" />

          <ol className="relative ml-2 space-y-14 border-l border-hairline md:ml-6">
            <span aria-hidden="true" className="tl-line" />
            {EXPERIENCE.map((role, i) => (
              <li key={`${role.company}-${role.meta}`} data-reveal style={delay(i === 0 ? 0 : 60)} className="relative pl-8 md:pl-12">
                <span aria-hidden="true" className="absolute -left-2 top-1.5 grid place-items-center">
                  <span className="tl-ring block h-4 w-4 rounded-full border bg-ivory" />
                  <span className="tl-dot absolute block h-[9px] w-[9px] rounded-full" />
                </span>

                <p className="mb-3 hidden md:block">
                  <span className="rounded-full border border-hairline bg-paper px-3 py-1 text-[11px] font-medium tabular-nums text-mist">
                    {role.span}
                  </span>
                </p>

                <h3 className="text-xl font-semibold tracking-tight text-navy">{role.title}</h3>
                <p className="mt-2 text-sm text-mist">
                  <span className="font-medium text-ink">{role.company}</span>
                  <span className="mx-2 text-hairline">·</span>
                  {role.meta}
                </p>
                <p className="mt-4 max-w-2xl font-medium text-navy/90">{role.story}</p>
                <ul className="mt-4 space-y-3">
                  {role.bullets.map((b) => (
                    <li key={b.slice(0, 40)} className="flex gap-3 text-[15px] leading-relaxed text-ink/80">
                      <span aria-hidden="true" className="mt-[11px] block h-px w-4 shrink-0 bg-navy/40" />
                      {b}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================= PROJECTS ============================= */}
      <section id="projects" aria-labelledby="projects-title" className="scroll-mt-24 border-t border-hairline bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <SectionHeading id="projects-title" num="03" eyebrow="Selected Projects" title="Problems taken seriously" />

          <div className="grid gap-6 md:grid-cols-3">
            {PROJECTS.map((project, i) => (
              <article
                key={project.title}
                data-reveal
                style={delay(i * 120)}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-hairline bg-ivory p-8 pt-9 transition-all duration-300 hover:-translate-y-1 hover:border-navy/20 hover:shadow-[0_24px_48px_-20px_rgba(27,54,93,0.18)]"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-navy to-navy/30 transition-transform duration-500 group-hover:scale-x-100"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-6 top-3 select-none text-6xl font-bold leading-none text-navy/[0.06]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="max-w-[85%] text-lg font-semibold leading-snug tracking-tight text-navy">
                  {project.title}
                </h3>

                <dl className="mt-5 flex-1 space-y-4">
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-mist">Challenge</dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-ink/75">{project.challenge}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-mist">Approach</dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-ink/75">{project.approach}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-mist">Outcome</dt>
                    <dd className="mt-1.5 text-sm font-medium leading-relaxed text-navy/90">{project.outcome}</dd>
                  </div>
                </dl>

                <p className="mt-6 border-t border-hairline pt-4 text-xs font-medium uppercase tracking-[0.14em] text-mist">
                  {project.role}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ HOW I WORK ============================ */}
      <section id="how-i-work" aria-labelledby="how-i-work-title" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <SectionHeading id="how-i-work-title" num="04" eyebrow="How I Work" title="My approach" />

          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_I_WORK.map((point, i) => (
              <div key={point.title} data-reveal style={delay(i * 100)} className="border-t-2 border-navy/15 pt-7">
                <span aria-hidden="true" className="block text-5xl font-semibold leading-none text-navy/10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-base font-semibold tracking-tight text-navy">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== SKILLS ============================== */}
      <section id="skills" aria-labelledby="skills-title" className="scroll-mt-24 border-t border-hairline bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <SectionHeading id="skills-title" num="05" eyebrow="Skills" title="Tools of the trade" />

          <div className="grid gap-x-12 gap-y-12 md:grid-cols-2">
            {SKILL_GROUPS.map((group, i) => (
              <div key={group.label} data-reveal style={delay(i * 90)}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">{group.label}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{group.sentence}</p>
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-hairline bg-ivory px-4 py-1.5 text-sm text-ink/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-navy hover:bg-navy hover:text-ivory"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================== CERTIFICATES =========================== */}
      <section id="certificates" aria-labelledby="certificates-title" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <SectionHeading id="certificates-title" num="06" eyebrow="Credentials" title="Certificates" />

          <p className="-mt-6 mb-12 max-w-2xl text-base leading-relaxed text-mist md:-mt-10 md:mb-16" data-reveal>
            Every certificate below links to its official record where one
            exists, so you can verify each credential yourself.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATES.map((cert, i) => {
              const frame = (
                <>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-hairline bg-white">
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-3 px-1 pb-1 pt-4">
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold leading-snug tracking-tight text-navy group-hover:text-navy-deep">
                        {cert.name}
                      </h3>
                      <p className="mt-1 text-xs text-mist">
                        {cert.issuer}
                        {cert.detail ? <span className="mx-1.5 text-hairline">·</span> : null}
                        {cert.detail}
                      </p>
                    </div>
                    {cert.href ? (
                      <span aria-hidden="true" className="shrink-0 text-sm text-mist transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-navy">
                        ↗
                      </span>
                    ) : null}
                  </div>
                </>
              );
              const cls =
                "group flex flex-col rounded-2xl border border-hairline bg-paper p-4 transition-all duration-300 hover:-translate-y-1 hover:border-navy/20 hover:shadow-[0_24px_48px_-20px_rgba(27,54,93,0.18)]";
              return (
                <div key={cert.src} data-reveal style={delay((i % 3) * 110)}>
                  {cert.href ? (
                    <a href={cert.href} target="_blank" rel="noopener noreferrer" className={`${cls} h-full`}>
                      {frame}
                    </a>
                  ) : (
                    <div className={`${cls} h-full`}>{frame}</div>
                  )}
                </div>
              );
            })}
          </div>

          <div data-reveal className="mt-8 rounded-2xl border border-hairline bg-paper p-7 md:p-8">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
              Professional credentials
            </h3>
            <ul className="mt-2 divide-y divide-hairline">
              {[
                {
                  name: "Professional Scrum Master (PSM I)",
                  issuer: "Scrum.org",
                  status: "Certified",
                  done: true,
                },
                {
                  name: "Project Management Professional (PMP)",
                  issuer: "Project Management Institute",
                  status: "In Progress",
                  done: false,
                },
              ].map((cred) => (
                <li key={cred.name} className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-3.5 first:pt-1 last:pb-0">
                  <span>
                    <span className="block text-sm font-medium text-ink/90">{cred.name}</span>
                    <span className="mt-0.5 block text-xs text-mist">{cred.issuer}</span>
                  </span>
                  <span
                    className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-medium ${
                      cred.done ? "bg-navy text-ivory" : "border border-hairline bg-ivory text-mist"
                    }`}
                  >
                    {cred.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============================= EDUCATION ============================= */}
      <section id="education" aria-labelledby="education-title" className="scroll-mt-24 border-t border-hairline bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <SectionHeading id="education-title" num="07" eyebrow="Foundations" title="Education" />

          <div data-reveal className="mx-auto max-w-3xl rounded-2xl border border-hairline bg-ivory p-9 text-center md:p-14">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
              Superior University · Lahore, Pakistan
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              Bachelor of Software Engineering
            </h3>
            <p className="mt-5 inline-block rounded-full border border-hairline bg-paper px-4 py-1.5 text-xs font-medium tabular-nums text-mist">
              Graduated 2018
            </p>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-mist">
              The engineering foundation behind the delivery work: software
              lifecycles, system thinking, and how technical decisions shape
              timelines.
            </p>
          </div>
        </div>
      </section>

      {/* ============================== CONTACT ============================== */}
      <section id="contact" aria-labelledby="contact-title" className="relative scroll-mt-24 overflow-hidden bg-navy text-ivory">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: "radial-gradient(rgba(248,247,244,0.9) 0.65px, transparent 0.65px)",
            backgroundSize: "22px 22px",
            WebkitMaskImage: "radial-gradient(ellipse 60% 70% at 80% 20%, black 20%, transparent 72%)",
            maskImage: "radial-gradient(ellipse 60% 70% at 80% 20%, black 20%, transparent 72%)",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6 pb-28 pt-24 md:pt-32">
          <div data-reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/50">08 · Contact</p>
            <h2 id="contact-title" className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Let&rsquo;s build something steady.
            </h2>
            <p className="mt-6 leading-relaxed text-white/70">
              If your product needs a Technical Project Manager who brings calm,
              structure, and honest timelines to remote Agile delivery, I would
              genuinely enjoy hearing about it.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-3">
            {[
              { label: "Email", value: "pro.engrraheem@gmail.com", href: "mailto:pro.engrraheem@gmail.com" },
              { label: "Phone", value: "+92 331 6693499", href: "tel:+923316693499" },
              { label: "LinkedIn", value: "abdulraheemitmanager", href: "https://linkedin.com/in/abdulraheemitmanager" },
            ].map(({ label, value, href }, i) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                data-reveal
                style={delay(i * 100)}
                className="rounded-2xl border border-white/15 bg-white/[0.05] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-white/35 hover:bg-white/[0.09]"
              >
                <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-white/50">{label}</span>
                <span className="mt-2 block break-words text-sm font-medium text-white">{value}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =============================== FOOTER =============================== */}
      <footer className="border-t border-white/10 bg-navy">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-white/55 sm:flex-row">
          <p>© {new Date().getFullYear()} Abdul Raheem. All rights reserved.</p>
          <p>Lahore, Pakistan</p>
        </div>
      </footer>
    </main>
  );
}
