import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import ScrollEffects from "@/components/ScrollEffects";
import CommandPalette from "@/components/CommandPalette";
import { ToastProvider } from "@/components/Toast";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://abdulraheem-pm.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Abdul Raheem | Technical Project & Product Manager | Scrum Master",
  description:
    "Technical Project Manager (TPM) & Certified Scrum Master with 7+ years directing remote and onsite Agile engineering teams across the UK, Saudi Arabia, and USA. Specialized in SaaS delivery, API architecture, and predictable sprint cadences.",
  keywords: [
    "Technical Project Manager",
    "Technical Product Manager",
    "TPM portfolio",
    "Scrum Master",
    "Agile Delivery Lead",
    "Senior Project Manager remote",
    "SaaS Project Manager",
    "Software Development Manager",
    "Jira Scrum Master",
    "Abdul Raheem",
    "Abdul Raheem Project Manager",
    "Remote and Onsite Agile Delivery",
  ],
  authors: [{ name: "Abdul Raheem" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Abdul Raheem | Technical Project & Product Manager",
    title: "Abdul Raheem | Technical Project & Product Manager | Scrum Master",
    description:
      "Seven years leading remote and onsite Agile teams across the UK, Saudi Arabia, and the United States. With a background in Software Engineering and QA, I eliminate requirement ambiguity, protect developer focus, and give stakeholders reliable delivery dates without the drama.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Raheem | Technical Project & Product Manager | Scrum Master",
    description:
      "Seven years leading remote and onsite Agile teams across the UK, Saudi Arabia, and the United States. Clear plans, calm execution, software that ships.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Abdul Raheem",
      url: SITE_URL,
      jobTitle: "Technical Project Manager & Scrum Master",
      description:
        "Technical Project Manager (TPM) with 7+ years directing distributed engineering teams across the UK, Saudi Arabia, and USA through remote and onsite Agile delivery and software architecture leadership.",
      email: "mailto:pro.engrraheem@gmail.com",
      telephone: "+92 331 6693499",
      address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
      sameAs: [
        "https://www.linkedin.com/in/abdul-raheem-3489b3107/",
        SITE_URL,
      ],
      knowsAbout: [
        "Technical Project Management",
        "Technical Product Management",
        "Agile Scrum Framework",
        "SDLC Governance",
        "SaaS Product Delivery",
        "REST APIs & System Architecture",
        "Jira & Confluence",
        "Quality Assurance & Test Automation",
        "Remote & Onsite Team Leadership",
      ],
      alumniOf: { "@type": "CollegeOrUniversity", name: "Superior University, Lahore" },
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: "Google Project Management Professional Certificate",
          url: "https://www.credly.com/badges/6433352a-e1ec-4f97-b006-db00d9ae8f64",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: "Professional Scrum Master (PSM I)",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: "Scrum Fundamentals Certified (SFC)",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: "Six Sigma Yellow Belt",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What distinguishes Abdul Raheem as a Technical Project & Product Manager?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Abdul Raheem started in Software Engineering and QA, understanding REST APIs, database schemas, and edge cases. He writes user stories developers actually enjoy building and ensures zero regression debt reaches production.",
          },
        },
        {
          "@type": "Question",
          name: "How does Abdul Raheem manage distributed remote and onsite teams across UK, US, and Middle East time zones?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Through asynchronous clarity, structured Definitions of Ready (DoR), and proactive blocker removal, turning time zone differences into a continuous delivery advantage.",
          },
        },
        {
          "@type": "Question",
          name: "What is Abdul Raheem's approach to preventing scope creep and meeting tight deadlines?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Using RICE and MoSCoW prioritization frameworks to make trade-offs transparent and protect sprint commitments without friction.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-slate-950 text-slate-100 selection:bg-indigo-600 selection:text-white">
        <a
          href="#overview"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-indigo-600 focus:px-4 focus:py-2 focus:text-xs font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ToastProvider>
          <Nav />
          <CommandPalette />
          <ScrollEffects />
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
