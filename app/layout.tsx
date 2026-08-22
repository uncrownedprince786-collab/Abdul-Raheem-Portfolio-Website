import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import ScrollEffects from "@/components/ScrollEffects";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://abdulraheem-pm.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Abdul Raheem | Technical Project Manager & Scrum Master | Remote Agile Delivery",
  description:
    "Technical Project Manager and Scrum Master with 7+ years delivering SaaS, web, and mobile products for UK, US, and Saudi clients through calm remote Agile delivery.",
  keywords: [
    "Technical Project Manager",
    "Scrum Master",
    "Agile Project Manager",
    "remote project management",
    "Agile delivery",
    "SaaS delivery",
    "Scrum Master portfolio",
    "Jira",
    "Azure DevOps",
    "Abdul Raheem",
  ],
  authors: [{ name: "Abdul Raheem" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Abdul Raheem | Technical Project Manager",
    title:
      "Abdul Raheem | Technical Project Manager & Scrum Master | Remote Agile Delivery",
    description:
      "7+ years leading remote Agile teams shipping SaaS, web, and mobile products across the UK, Saudi Arabia, and the USA. Clear plans, calm execution, software that ships.",
  },
  twitter: {
    card: "summary",
    title:
      "Abdul Raheem | Technical Project Manager & Scrum Master | Remote Agile Delivery",
    description:
      "7+ years leading remote Agile teams shipping SaaS, web, and mobile products across the UK, Saudi Arabia, and the USA.",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abdul Raheem",
  url: SITE_URL,
  jobTitle: "Technical Project Manager & Scrum Master",
  description:
    "Technical Project Manager with 7+ years delivering SaaS, web, mobile, CRM, LMS, and enterprise software projects for clients in the UK, Saudi Arabia, and USA through remote Agile delivery.",
  email: "mailto:pro.engrraheem@gmail.com",
  telephone: "+92 331 6693499",
  address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
  sameAs: [
    "https://linkedin.com/in/abdulraheemitmanager",
    SITE_URL,
  ],
  knowsAbout: [
    "Technical Project Management",
    "Agile Project Management",
    "Scrum Mastery",
    "Remote Agile Delivery",
    "SaaS Delivery",
    "Jira",
    "Azure DevOps",
    "Risk Management",
    "Stakeholder Management",
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
      name: "Six Sigma Yellow Belt",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:text-ivory"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Nav />
        <ScrollEffects />
        {children}
      </body>
    </html>
  );
}
