import Image from "next/image";
import { existsSync } from "node:fs";
import path from "node:path";
import type { CSSProperties } from "react";

/* -----------------------------------------------------------------------------
 * PHOTO PLACEHOLDER
 * Drop the real photo at:  public/images/profile.jpg
 * The site picks it up automatically on the next build — no code changes needed.
 * -------------------------------------------------------------------------- */
const PROFILE_PHOTO_PATH = path.join(process.cwd(), "public", "images", "profile.jpg");
const hasProfilePhoto = existsSync(PROFILE_PHOTO_PATH);

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

type Role = {
  title: string;
  company: string;
  meta: string;
  bullets: string[];
};

const EXPERIENCE: Role[] = [
  {
    title: "Technical Project Manager / Scrum Master",
    company: "DG Cars",
    meta: "United Kingdom (Remote) · Aug 2025 – Present",
    bullets: [
      "Lead Agile delivery for distributed engineering teams, covering sprint planning, project timelines, stakeholder communication, and delivery priorities.",
      "Translate business requirements into user stories and acceptance criteria; coordinate backlog refinement with developers and QA throughout the SDLC.",
      "Manage Jira boards, project risks, dependencies, release planning, and delivery reporting to keep milestones on track.",
      "Apply ChatGPT, Claude, Microsoft Copilot, and Google Gemini for documentation, meeting summaries, requirement analysis, and lightweight workflow prototypes — all outputs verified before use.",
    ],
  },
  {
    title: "Project Manager / QA Lead",
    company: "BrainCell",
    meta: "Saudi Arabia (Remote) · May 2024 – Jul 2025",
    bullets: [
      "Managed software development and QA teams across multiple client projects using Agile delivery.",
      "Planned sprint activities, monitored progress, managed release readiness, and maintained clear communication with business stakeholders.",
      "Improved QA processes, supported backlog refinement, and coordinated testing to raise software quality.",
      "Prepared project documentation, sprint reports, and stakeholder updates with AI assistance while validating every output.",
    ],
  },
  {
    title: "Project Manager",
    company: "App4orce",
    meta: "Pakistan · Mar 2023 – Apr 2024",
    bullets: [
      "Managed web, mobile, and SaaS projects from requirement gathering through production deployment, coordinating developers, designers, QA, and clients.",
      "Led sprint planning, backlog refinement, release planning, risk management, and project reporting to maintain delivery schedules.",
      "Worked with stakeholders to define scope, prioritize features, and convert business needs into actionable development tasks.",
      "Created workflow mockups and lightweight functional prototypes with AI-assisted tools to support technical discussions and requirement validation.",
    ],
  },
  {
    title: "Project Manager",
    company: "Karigar Web Solutions",
    meta: "Pakistan · Aug 2020 – Feb 2023",
    bullets: [
      "Directed more than 50 international client projects — WordPress tools, mobile apps, Chrome extensions, and AI applications.",
      "Managed a 20-member cross-functional team of developers, designers, and QA engineers and achieved a 95% on-time project completion rate.",
      "Set up structured Agile Scrum workflows that shifted the team from legacy habits to a predictable shipping cycle.",
      "Supported project planning, client communication, requirement gathering, documentation, task tracking, and delivery monitoring.",
      "Received the Best Performance Certificate for delivering complex client solutions under compressed timelines.",
    ],
  },
  {
    title: "Project Manager",
    company: "TechnoSofts",
    meta: "Pakistan · Jan 2020 – Jul 2020",
    bullets: [
      "Managed WordPress and e-commerce projects for international clients from requirement gathering through deployment.",
      "Coordinated developers, designers, and QA while managing schedules, milestones, and client communication.",
      "Conducted client demonstrations, managed feedback, and ensured deliverables matched business requirements.",
      "Delivered 10+ custom web solutions on time while maintaining quality.",
    ],
  },
  {
    title: "QA Engineer",
    company: "HI Tech IT Company",
    meta: "Pakistan · Jan 2019 – Dec 2019",
    bullets: [
      "Executed manual testing, prepared test cases, documented defects, and validated fixes across the software development lifecycle.",
      "Collaborated with developers and project managers to improve software quality and support successful releases.",
    ],
  },
];

const PROJECTS = [
  {
    title: "Learning Management System (LMS) with AI Chatbot",
    description:
      "End-to-end delivery of an LMS platform with online courses, attendance, assessments, live classes, and an AI-powered chatbot — coordinating stakeholders, engineering teams, sprint execution, testing, and production releases while validating requirements before development.",
    role: "Project Manager · End-to-end delivery",
  },
  {
    title: "AI Marketplace Scraper Platform",
    description:
      "Planning and delivery of an automated platform that collects real-time product data from multiple e-commerce sites — managing stakeholder communication, sprint planning, engineering coordination, and workflow validation.",
    role: "Project Manager · Planning & coordination",
  },
  {
    title: "Rental SaaS Dashboard",
    description:
      "Development of a SaaS dashboard for customer retention, subscription management, and operational reporting — working with stakeholders on prioritization, releases, and user acceptance testing.",
    role: "Project Manager · Stakeholders & releases",
  },
];

const SKILL_GROUPS = [
  {
    label: "Project Management",
    items: [
      "Agile", "Scrum", "Kanban", "SDLC", "Sprint Planning", "Backlog Refinement",
      "Release Planning", "Risk Management", "Dependency Management",
      "Scope Management", "Stakeholder Management",
    ],
  },
  {
    label: "Tools",
    items: ["Jira", "Azure DevOps", "Confluence", "ClickUp", "YouTrack", "Slack", "Microsoft Teams", "Notion"],
  },
  {
    label: "Technical",
    items: ["REST APIs", "System Design Fundamentals", "Basic Python", "Basic SQL", "HTML/CSS", "JavaScript"],
  },
  {
    label: "AI Productivity",
    items: ["ChatGPT", "Claude", "Microsoft Copilot", "Google Gemini"],
  },
];

const CERTIFICATIONS = [
  { name: "Google Project Management Professional Certificate", status: "Completed" },
  { name: "Professional Scrum Master (PSM I)", status: "Completed" },
  { name: "Project Management Professional (PMP)", status: "In Progress" },
];

function SectionHeading({
  id,
  eyebrow,
  title,
}: {
  id?: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-12 md:mb-16">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-mist">{eyebrow}</p>
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
        {/* soft decorative accent — a single quiet horizontal line */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-40 hidden w-[min(72rem,90vw)] -translate-x-1/2 lg:block"
        >
          <div className="h-px w-full bg-gradient-to-r from-transparent via-hairline to-transparent" />
        </div>

        <div className="mx-auto max-w-6xl px-6 pb-24 pt-36 md:pb-32 md:pt-44">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_auto]">
            <div data-reveal>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-mist">
                Lahore, Pakistan · Working with teams worldwide
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
                Technical Project Manager with 7+ years delivering SaaS, web,
                mobile, CRM, LMS, and enterprise software for clients across the
                UK, Saudi Arabia, and the USA — leading distributed Agile teams
                through the full SDLC.
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
            </div>

            {/* Photo — placeholder until profile.jpg is added */}
            <div className="justify-self-center" data-reveal style={delay(150)}>
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-4 rounded-full border border-hairline"
                />
                <div className="relative h-60 w-60 overflow-hidden rounded-full bg-paper shadow-[0_24px_60px_-24px_rgba(27,54,93,0.35)] ring-1 ring-hairline md:h-72 md:w-72">
                  {hasProfilePhoto ? (
                    // eslint-disable-next-line @next/next/no-img-element -- local public asset, fixed dimensions
                    <Image
                      src="/images/profile.jpg"
                      alt="Professional portrait of Abdul Raheem"
                      width={288}
                      height={288}
                      priority
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-b from-paper to-ivory">
                      <span className="text-5xl font-semibold tracking-tight text-navy/85">
                        AR
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.18em] text-mist">
                        Photo coming soon
                      </span>
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
          <SectionHeading id="about-title" eyebrow="About" title="A steady hand on delivery" />
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]" data-reveal>
            <p className="max-w-2xl text-lg leading-relaxed text-ink/90">
              I&rsquo;m a Technical Project Manager who has spent the last seven
              years turning ambitious briefs into shipped software — SaaS
              platforms, web and mobile products, CRM systems, learning
              platforms, and enterprise tools — for clients in the UK, Saudi
              Arabia, and the USA.
            </p>
            <p className="max-w-xl leading-relaxed text-mist">
              My work sits at the intersection of process and technology: I run
              sprint planning, backlog refinement, risk and dependency
              management, and release schedules for distributed Agile teams.
              With a strong technical foundation in REST APIs and system design,
              I speak the language of engineers — and I use AI tools to sharpen
              documentation and analysis, verifying every output before it ships.
            </p>
          </div>
        </div>
      </section>

      {/* ============================ EXPERIENCE ============================ */}
      <section id="experience" aria-labelledby="experience-title" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <SectionHeading id="experience-title" eyebrow="Experience" title="Seven years, six teams, one standard" />

          <ol className="relative ml-2 space-y-14 border-l border-hairline pl-8 md:ml-6 md:pl-12">
            {EXPERIENCE.map((role, i) => (
              <li key={`${role.company}-${role.meta}`} data-reveal style={delay(i === 0 ? 0 : 60)}>
                {/* animated timeline dot */}
                <span aria-hidden="true" className="absolute -left-[9px] top-1.5 grid place-items-center">
                  <span className="tl-ring block h-4 w-4 rounded-full border border-navy/30 bg-ivory" />
                  <span className="tl-dot absolute block h-[9px] w-[9px] rounded-full bg-navy" />
                </span>

                <h3 className="text-xl font-semibold tracking-tight text-navy">{role.title}</h3>
                <p className="mt-2 text-sm text-mist">
                  <span className="font-medium text-ink">{role.company}</span>
                  <span className="mx-2 text-hairline">·</span>
                  {role.meta}
                </p>
                <ul className="mt-5 space-y-3">
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
          <SectionHeading id="projects-title" eyebrow="Selected Projects" title="Work that shipped" />

          <div className="grid gap-6 md:grid-cols-3">
            {PROJECTS.map((project, i) => (
              <article
                key={project.title}
                data-reveal
                style={delay(i * 120)}
                className="group flex flex-col rounded-2xl border border-hairline bg-ivory p-8 transition-all duration-300 hover:-translate-y-1 hover:border-navy/20 hover:shadow-[0_24px_48px_-20px_rgba(27,54,93,0.18)]"
              >
                <span className="text-xs font-medium tabular-nums text-mist/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight text-navy">
                  {project.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/75">
                  {project.description}
                </p>
                <p className="mt-6 border-t border-hairline pt-4 text-xs font-medium uppercase tracking-[0.14em] text-mist">
                  {project.role}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== SKILLS ============================== */}
      <section id="skills" aria-labelledby="skills-title" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <SectionHeading id="skills-title" eyebrow="Skills" title="Tools of the trade" />

          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
            {SKILL_GROUPS.map((group, i) => (
              <div key={group.label} data-reveal style={delay(i * 90)}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
                  {group.label}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-hairline bg-paper px-4 py-1.5 text-sm text-ink/80 transition-colors duration-200 hover:border-navy/30 hover:text-navy"
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

      {/* ====================== EDUCATION & CERTIFICATIONS ====================== */}
      <section id="education" aria-labelledby="education-title" className="scroll-mt-24 border-t border-hairline bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <SectionHeading id="education-title" eyebrow="Credentials" title="Education & Certifications" />

          <div className="grid gap-6 md:grid-cols-2">
            <div data-reveal className="rounded-2xl border border-hairline bg-ivory p-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
                Education
              </h3>
              <p className="mt-5 text-lg font-semibold tracking-tight text-ink">
                Bachelor of Software Engineering
              </p>
              <p className="mt-1.5 text-sm text-mist">
                Superior University, Lahore, Pakistan · Graduated 2018
              </p>
            </div>

            <div data-reveal style={delay(120)} className="rounded-2xl border border-hairline bg-ivory p-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
                Certifications
              </h3>
              <ul className="mt-5 divide-y divide-hairline">
                {CERTIFICATIONS.map((cert) => (
                  <li key={cert.name} className="flex items-baseline justify-between gap-4 py-3 first:pt-0 last:pb-0">
                    <span className="text-sm font-medium text-ink/90">{cert.name}</span>
                    <span className="shrink-0 text-xs text-mist">{cert.status}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== CONTACT ============================== */}
      <section id="contact" aria-labelledby="contact-title" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 pb-28 pt-24 md:pt-32">
          <div data-reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-mist">Contact</p>
            <h2 id="contact-title" className="mt-4 text-4xl font-semibold tracking-tight text-navy md:text-5xl">
              Let&rsquo;s work together.
            </h2>
            <p className="mt-6 leading-relaxed text-mist">
              If you&rsquo;re looking for someone to bring calm, structure, and
              momentum to your delivery team — I&rsquo;d love to hear from you.
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
                className="rounded-2xl border border-hairline bg-paper p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-navy/25 hover:shadow-[0_20px_40px_-20px_rgba(27,54,93,0.18)]"
              >
                <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-mist">
                  {label}
                </span>
                <span className="mt-2 block break-words text-sm font-medium text-navy">
                  {value}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =============================== FOOTER =============================== */}
      <footer className="border-t border-hairline">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-mist sm:flex-row">
          <p>© {new Date().getFullYear()} Abdul Raheem. All rights reserved.</p>
          <p>Lahore, Pakistan</p>
        </div>
      </footer>
    </main>
  );
}
