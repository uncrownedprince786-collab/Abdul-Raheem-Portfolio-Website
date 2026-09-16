export type ExperienceRole = {
  title: string;
  company: string;
  location: string;
  duration: string;
  span: string;
  year: string;
  storyQuote: string;
  bullets: string[];
  skills: string[];
  verdict: string;
};

export const PROFILE = {
  name: "Abdul Raheem",
  monogram: "AR",
  role: "Technical Project Manager · Scrum Master",
  positioning:
    "I turn messy product work into software that ships.",
  summary:
    "Seven years leading remote Agile teams across the UK, Saudi Arabia, and the US — with a Software Engineering and QA background that keeps requirements sharp and releases unsurprising.",
  location: "Lahore, PK (UTC+5)",
  overlap: "UK · EU · GCC · US-East",
  email: "pro.engrraheem@gmail.com",
  phone: "+92 331 6693499",
  phoneHref: "+923316693499",
  linkedin: "https://www.linkedin.com/in/abdul-raheem-3489b3107/",
  linkedinHandle: "/in/abdul-raheem-3489b3107",
  resume: "/abdul-raheem-resume.pdf",
};

export const METRICS = [
  { value: 7, suffix: "+", label: "Years in the trenches", detail: "Software SDLC & Agile" },
  { value: 50, suffix: "+", label: "Global deployments", detail: "UK, Saudi Arabia & US" },
  { value: 95, suffix: "%", label: "Sprint commitment rate", detail: "Predictable shipping" },
  { value: 20, suffix: "+", label: "Engineers directed", detail: "Dev, QA & UI/UX squads" },
];

export const CAREER_EXPERIENCE: ExperienceRole[] = [
  {
    title: "Technical Project Manager / Scrum Master",
    company: "DG Cars",
    location: "United Kingdom (Remote & Hybrid)",
    duration: "Aug 2025 – Present",
    span: "Current",
    year: "2025",
    storyQuote:
      "Leading Agile delivery for a high-velocity UK mobility platform where dispatch latency is measured in seconds and milestones must end with visible code in staging.",
    bullets: [
      "Drive sprint planning, daily blocker triage, and release milestones for distributed engineering and QA teams across the UK and Asia.",
      "Translate complex UK transport regulations and dispatch business rules into crisp, testable Jira user stories with zero ambiguity for developers.",
      "Manage release readiness, cross-team API dependency mapping, and risk mitigation so milestones stay predictable and on track.",
      "Use practical automation tools (meeting synthesis, PRD drafting, test-case structuring) with mandatory manual review before anything touches the sprint board.",
    ],
    skills: ["Jira & Confluence", "Agile Scrum", "Mobility Platform", "REST APIs", "Stakeholder Alignment", "UAT"],
    verdict: "High-velocity UK mobility delivery — latency measured in seconds, milestones that end in staging.",
  },
  {
    title: "Project Manager / QA Lead",
    company: "BrainCell",
    location: "Saudi Arabia (Remote)",
    duration: "May 2024 – Jul 2025",
    span: "1 yr 2 mos",
    year: "2024",
    storyQuote:
      "Ran project delivery and quality assurance hand-in-hand, because a release is only ready when thorough testing proves it can survive production traffic.",
    bullets: [
      "Managed software development and quality engineering teams across 4 concurrent enterprise client platforms in Saudi Arabia using Agile Scrum.",
      "Orchestrated release readiness reviews, defect triage sessions, and client acceptance demos, ensuring software stability before production cutover.",
      "Standardized QA regression matrices and defect triage workflows, reducing post-release defect tickets by 35%.",
      "Delivered transparent sprint velocity reports, risk registers, and stakeholder roadmap presentations with clear milestone visibility.",
    ],
    skills: ["Dual PM/QA Leadership", "Agile Delivery", "Defect Triage", "Sprint Planning", "Regression Testing"],
    verdict: "Delivery and QA run as one system — releases proven against production load before cutover.",
  },
  {
    title: "Technical Project Manager",
    company: "App4orce",
    location: "Pakistan",
    duration: "Mar 2023 – Apr 2024",
    span: "1 yr 1 mo",
    year: "2023",
    storyQuote:
      "Owned the complete delivery lifecycle across web, mobile, and SaaS products, turning broad client requirements into structured, shipped releases.",
    bullets: [
      "Directed end-to-end SDLC delivery for multi-platform web, mobile (iOS/Android), and B2B SaaS solutions, managing squads of 12+ developers and designers.",
      "Facilitated backlog prioritization using RICE and MoSCoW frameworks, balancing business value with engineering technical debt reduction.",
      "Worked closely with UI/UX designers and technical leads to build interactive workflow mockups and validate architectural constraints early.",
      "Maintained 95%+ sprint commitment reliability through proactive blocker removal and daily standup facilitation.",
    ],
    skills: ["SaaS Delivery", "Mobile & Web SDLC", "Scope Management", "Backlog Grooming", "Cross-Functional Leadership"],
    verdict: "Full lifecycle ownership across web, mobile and SaaS — squads of 12+, 95% sprint reliability.",
  },
  {
    title: "Project Manager",
    company: "Karigar Web Solutions",
    location: "Pakistan",
    duration: "Aug 2020 – Feb 2023",
    span: "2 yrs 7 mos",
    year: "2020",
    storyQuote:
      "Where I mastered scale: delivered over 50 international client projects with a 20-person engineering team, establishing standardized Agile processes and predictable releases.",
    bullets: [
      "Directed over 50 international client software deliverables spanning custom WordPress plugins, mobile applications, Chrome extensions, and e-commerce platforms.",
      "Led a 20-person cross-functional team of software engineers, UI/UX designers, and QA testers, maintaining a 95% on-schedule completion record.",
      "Replaced ad-hoc development habits with structured Agile Scrum ceremonies, sprint boards, and documented release criteria.",
      "Awarded the Best Performance Certificate for delivering complex client solutions under compressed deadlines.",
    ],
    skills: ["50+ Global Deliveries", "Team of 20 Engineers", "Scrum Implementation", "Chrome Extensions", "E-Commerce"],
    verdict: "Scale bootcamp — 50+ international deliveries, 20-person team, structured Agile from scratch.",
  },
  {
    title: "Project Manager",
    company: "TechnoSofts",
    location: "Pakistan",
    duration: "Jan 2020 – Jul 2020",
    span: "7 mos",
    year: "2020",
    storyQuote:
      "Managed custom web and e-commerce builds for international clients, establishing clear scope boundaries and sprint demonstrations.",
    bullets: [
      "Led requirement gathering sessions, technical scoping, and development coordination for international e-commerce and web platforms.",
      "Conducted weekly client product demonstrations, managed feedback loops, and maintained strict milestone schedule compliance.",
      "Successfully delivered 10+ custom web solutions on time with zero scope creep.",
    ],
    skills: ["Client Communication", "Web Scoping", "E-Commerce", "Milestone Tracking"],
    verdict: "International e-commerce and web builds — weekly demos, zero scope creep.",
  },
  {
    title: "QA Engineer",
    company: "HI Tech IT Company",
    location: "Pakistan",
    duration: "Jan 2019 – Dec 2019",
    span: "1 yr",
    year: "2019",
    storyQuote:
      "The year I learned to see software the way users do — by trying to break it before they could. It formed the foundation for how I lead technical projects today.",
    bullets: [
      "Executed functional, exploratory, and regression testing across web and mobile software before production releases.",
      "Documented detailed defect reports, reproduction steps, and collaborated closely with developers to verify fixes.",
      "Gained deep technical empathy for engineering teams and learned the critical importance of testable user stories.",
    ],
    skills: ["Manual & Functional QA", "Test Case Design", "Defect Lifecycle", "SDLC Fundamentals"],
    verdict: "Where it started — learning to see software the way users do, and to break it before they could.",
  },
];

export const PRINCIPLES = [
  {
    title: "Clarity before speed",
    sentence: "Most delays are clarity problems, not effort problems. Airtight acceptance criteria come before the sprint starts — never after.",
  },
  {
    title: "Boards tell the truth",
    sentence: "If it isn't on the board with a Definition of Ready, it isn't happening. WIP stays visible and scope stays quarantined to the backlog.",
  },
  {
    title: "AI as an assistant, never an author",
    sentence: "AI drafts PRDs, synthesizes meetings, structures test cases. A human verifies every item before it touches the sprint board.",
  },
  {
    title: "Calm is a strategy",
    sentence: "Predictable rhythms, honest risk registers and rollback plans — engineered so releases feel routine, not heart-pounding.",
  },
] as const;

export const SKILL_GROUPS = [
  {
    category: "Delivery",
    summary: "Shaping backlogs, protecting engineer focus, and keeping releases predictable.",
    tools: [
      "Agile Scrum", "Kanban", "Sprint Planning", "Backlog Grooming", "Release Management",
      "Risk Mitigation", "Capacity Planning", "RICE & MoSCoW", "User Story Mapping", "SDLC Governance",
    ],
  },
  {
    category: "Product",
    summary: "Turning roadmaps and stakeholder intent into testable product definitions.",
    tools: [
      "PRDs", "Gherkin Acceptance Criteria", "Roadmapping", "Stakeholder Alignment",
      "User Flows", "A/B Thinking", "MVP Scoping", "Feature Prioritization",
    ],
  },
  {
    category: "Technical fluency",
    summary: "Speaking developer language — reviewing contracts, schemas and PRs, not just moving cards.",
    tools: [
      "RESTful APIs", "Postman Collections", "SQL Data Queries", "System Architecture",
      "Git & GitHub Workflows", "CI/CD Pipelines", "JavaScript & Webhooks", "Basic Python",
    ],
  },
  {
    category: "Quality & risk",
    summary: "QA-rooted verification gates — acceptance criteria upfront, regression at the end.",
    tools: [
      "TestRail", "Gherkin", "Regression Planning", "Defect Triage & RCA",
      "UAT", "Cross-Browser Matrices", "Release Gateways",
    ],
  },
  {
    category: "Toolchain",
    summary: "Industry platforms that keep distributed teams clear and asynchronous work moving.",
    tools: [
      "Jira", "Azure DevOps", "Confluence", "Linear", "ClickUp", "Notion",
      "Slack & Teams", "Figma & Miro", "Prompt Engineering",
    ],
  },
] as const;

export const FAQS = [
  {
    q: "What distinguishes a Technical Project Manager from a traditional PM?",
    a: "The technical layer. I started in Software Engineering and QA — I read REST APIs, database schemas and edge cases. I write user stories developers actually enjoy building, challenge unrealistic estimates constructively, and ensure no regression debt reaches production.",
  },
  {
    q: "How do you keep remote teams across UK / US / Middle East zones productive?",
    a: "Asynchronous clarity. Written Definitions of Ready, crisp acceptance criteria and structured daily updates mean engineers never sit blocked waiting for a meeting. Time zones become an advantage when handoffs are crystal clear.",
  },
  {
    q: "How do you prevent scope creep without frustrating stakeholders?",
    a: "RICE and MoSCoW make trade-offs transparent: 'We can build this now, but here is what moves to next sprint to protect the release date.' That honesty builds executive trust faster than a cheerful yes.",
  },
  {
    q: "Where do you draw the line on AI in delivery?",
    a: "AI is an accelerator, not an author. I use it for rapid PRD drafting, meeting synthesis and test-case structuring — and every output is manually verified and tailored before engineering touches it.",
  },
] as const;