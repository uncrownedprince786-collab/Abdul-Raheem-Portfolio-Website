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

export const metadata: Metadata = {
  metadataBase: new URL("https://abdulraheem-pm.vercel.app"),
  title:
    "Abdul Raheem — Technical Project Manager | Agile Delivery | Scrum Master",
  description:
    "Technical Project Manager with 7+ years delivering SaaS, web, mobile, CRM, LMS, and enterprise software projects for clients in the UK, Saudi Arabia, and USA. Leads distributed Agile teams through the full SDLC.",
  keywords: [
    "Abdul Raheem",
    "Technical Project Manager",
    "Scrum Master",
    "Agile Delivery",
    "Project Manager Pakistan",
    "SaaS delivery",
    "Jira",
    "Azure DevOps",
  ],
  authors: [{ name: "Abdul Raheem" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Abdul Raheem — Portfolio",
    title:
      "Abdul Raheem — Technical Project Manager | Agile Delivery | Scrum Master",
    description:
      "7+ years delivering SaaS, web, mobile, CRM, LMS, and enterprise software across the UK, Saudi Arabia, and USA.",
  },
  twitter: {
    card: "summary",
    title:
      "Abdul Raheem — Technical Project Manager | Agile Delivery | Scrum Master",
    description:
      "7+ years delivering SaaS, web, mobile, CRM, LMS, and enterprise software across the UK, Saudi Arabia, and USA.",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abdul Raheem",
  jobTitle: "Technical Project Manager | Agile Delivery | Scrum Master",
  email: "mailto:pro.engrraheem@gmail.com",
  telephone: "+92 331 6693499",
  address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
  sameAs: ["https://linkedin.com/in/abdulraheemitmanager"],
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
