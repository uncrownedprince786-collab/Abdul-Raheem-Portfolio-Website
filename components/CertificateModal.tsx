"use client";

import { useState } from "react";
import Image from "next/image";
import { IconExternalLink, IconAward, IconX, IconAcademicCap, IconChevronDown } from "./Icons";
import { Reveal, Stagger, StaggerItem } from "./motion";

export type CertificateItem = {
  id: string;
  name: string;
  issuer: string;
  date: string;
  badgeType: "Professional Certificate" | "Scrum & Agile" | "Quality Management" | "Specialization Course";
  src: string;
  href?: string;
  credentialId?: string;
  alt: string;
};

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: "google-pm",
    name: "Google Project Management Professional Certificate",
    issuer: "Google Career Certificates",
    date: "2023",
    badgeType: "Professional Certificate",
    src: "/certificates/google-pm-cert.png",
    href: "https://www.credly.com/badges/6433352a-e1ec-4f97-b006-db00d9ae8f64",
    credentialId: "Credly Badge ID: 6433352a-e1ec-4f97-b006-db00d9ae8f64",
    alt: "Google Project Management Professional Certificate issued to Abdul Raheem",
  },
  {
    id: "scrum-fundamentals",
    name: "Scrum Fundamentals Certified (SFC™)",
    issuer: "SCRUMstudy - Accreditation Body for Scrum and Agile",
    date: "Certified",
    badgeType: "Scrum & Agile",
    src: "/certificates/scrum-fundamentals.jpg",
    credentialId: "License SCRUMstudy SFC",
    alt: "Scrum Fundamentals Certified credential awarded to Abdul Raheem Butt",
  },
  {
    id: "six-sigma",
    name: "Six Sigma Yellow Belt (SSYB)",
    issuer: "6SIGMAstudy / VMEdu",
    date: "Certificate No. 875264",
    badgeType: "Quality Management",
    src: "/certificates/six-sigma.png",
    href: "https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/SixSigmaYellowBelt-AbdulRaheemButt-875264.pdf",
    credentialId: "Cert # 875264",
    alt: "Six Sigma Yellow Belt certificate awarded to Abdul Raheem Butt",
  },
  {
    id: "agile-pm",
    name: "Agile Project Management",
    issuer: "Google · Coursera",
    date: "Jun 2023",
    badgeType: "Specialization Course",
    src: "/certificates/agile.jpg",
    href: "https://coursera.org/share/e467bfc7b4d26336d506ea1674f86edd",
    credentialId: "Coursera: e467bfc7b4d26336d506ea1674f86edd",
    alt: "Coursera Agile Project Management Certificate completed by Abdul Raheem Butt",
  },
  {
    id: "planning-pm",
    name: "Project Planning: Putting It All Together",
    issuer: "Google · Coursera",
    date: "Jun 2023",
    badgeType: "Specialization Course",
    src: "/certificates/planning.jpg",
    href: "https://coursera.org/share/71f2d3900ac8e95851d9077fbd16e0f3",
    credentialId: "Coursera: 71f2d3900ac8e95851d9077fbd16e0f3",
    alt: "Coursera Project Planning Certificate completed by Abdul Raheem Butt",
  },
  {
    id: "execution-pm",
    name: "Project Execution: Running the Project",
    issuer: "Google · Coursera",
    date: "Jun 2023",
    badgeType: "Specialization Course",
    src: "/certificates/execution.jpg",
    href: "https://coursera.org/share/e85c26ba8d4c08d02c25c79009495a14",
    credentialId: "Coursera: e85c26ba8d4c08d02c25c79009495a14",
    alt: "Coursera Project Execution Certificate completed by Abdul Raheem Butt",
  },
  {
    id: "initiation-pm",
    name: "Project Initiation: Starting a Successful Project",
    issuer: "Google · Coursera",
    date: "Jun 2023",
    badgeType: "Specialization Course",
    src: "/certificates/initiation.jpg",
    href: "https://coursera.org/share/afb45c0da6b66816f27ab3356aa5abe9",
    credentialId: "Coursera: afb45c0da6b66816f27ab3356aa5abe9",
    alt: "Coursera Project Initiation Certificate completed by Abdul Raheem Butt",
  },
  {
    id: "foundations-pm",
    name: "Foundations of Project Management",
    issuer: "Google · Coursera",
    date: "Jun 2023",
    badgeType: "Specialization Course",
    src: "/certificates/foundations.jpg",
    href: "https://coursera.org/share/5a5192df79d64d815412060bba985793",
    credentialId: "Coursera: 5a5192df79d64d815412060bba985793",
    alt: "Coursera Foundations of Project Management Certificate completed by Abdul Raheem Butt",
  },
  {
    id: "capstone-pm",
    name: "Capstone: Applying Project Management in the Real World",
    issuer: "Google · Coursera",
    date: "Jun 2023",
    badgeType: "Specialization Course",
    src: "/certificates/capstone.jpg",
    href: "https://coursera.org/share/2ebcdac133fa2cfad6137e056a5ade92",
    credentialId: "Coursera: 2ebcdac133fa2cfad6137e056a5ade92",
    alt: "Coursera PM Capstone Certificate completed by Abdul Raheem Butt",
  },
];

/* Key credentials (the headline four) */
const KEY_CREDENTIALS = [
  {
    name: "Google Project Management",
    issuer: "Google Career Certificates",
    meta: "2023 · Professional Certificate",
    href: "https://www.credly.com/badges/6433352a-e1ec-4f97-b006-db00d9ae8f64",
    certId: "google-pm",
  },
  {
    name: "Professional Scrum Master I",
    issuer: "Scrum.org",
    meta: "Certified · Sprint governance",
    href: undefined,
    certId: "psm",
  },
  {
    name: "Six Sigma Yellow Belt",
    issuer: "6SIGMAstudy / VMEdu",
    meta: "Cert # 875264 · Quality",
    href: "https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/SixSigmaYellowBelt-AbdulRaheemButt-875264.pdf",
    certId: "six-sigma",
  },
  {
    name: "BSc Software Engineering",
    issuer: "Superior University, Lahore",
    meta: "Graduated 2018",
    href: undefined,
    certId: "bsc",
  },
];

function CertModal({ cert, onClose }: { cert: CertificateItem; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[130] flex items-start justify-center overflow-y-auto p-4 pt-[6vh] sm:p-8">
      <div className="fixed inset-0 bg-ink/85 backdrop-blur-sm" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={cert.name}
        className="relative w-full max-w-2xl border border-line-2 bg-ink-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-5 sm:px-8">
          <div>
            <span className="hud text-brass">{cert.badgeType}</span>
            <h3 className="font-display mt-2 text-2xl font-light text-paper">{cert.name}</h3>
            <p className="mt-1 text-xs text-ash">{cert.issuer} · {cert.date}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close credential"
            className="rounded-sm border border-line-2 p-2 text-fawn transition-colors hover:border-brass hover:text-brass"
          >
            <IconX className="h-4 w-4" />
          </button>
        </div>

        <div className="relative aspect-[16/10] w-full bg-ink">
          <Image
            src={cert.src}
            alt={cert.alt}
            fill
            sizes="800px"
            className="object-contain p-4"
          />
        </div>

        <div className="flex flex-col gap-4 border-t border-line px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            <p className="hud text-ash">Credential verification</p>
            <p className="mt-1 font-mono text-xs text-paper">{cert.credentialId || "Verified credential record"}</p>
          </div>
          {cert.href ? (
            <a
              href={cert.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brass px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-brass-bright"
            >
              Open official record
              <IconExternalLink className="h-4 w-4" />
            </a>
          ) : (
            <span className="font-mono text-xs text-ash">Original document on file</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CertificateGallery() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [showAll, setShowAll] = useState(false);

  const secondary = CERTIFICATES_DATA.filter(
    (c) => c.id !== "google-pm" && c.id !== "six-sigma" && c.id !== "scrum-fundamentals"
  );

  const openBySrc = (id?: string) => {
    const c = CERTIFICATES_DATA.find((x) => x.id === id);
    if (c) setSelectedCert(c);
  };

  return (
    <div>
      {/* Key credentials */}
      <Stagger className="grid gap-px border border-line bg-line sm:grid-cols-2">
        {KEY_CREDENTIALS.map((k) => (
          <StaggerItem key={k.name}>
            <div className="group bg-ink p-6 transition-colors hover:bg-ink-2 md:p-7">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-10 w-10 items-center justify-center border border-line-2 text-brass">
                  <IconAward className="h-5 w-5" />
                </div>
                {k.href ? (
                  <a
                    href={k.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ash transition-colors hover:text-brass"
                    aria-label={`Verify ${k.name} online`}
                  >
                    <IconExternalLink className="h-4 w-4" />
                  </a>
                ) : (
                  <span aria-hidden="true" className="font-mono text-[10px] text-ash">verified</span>
                )}
              </div>

              <h3 className="font-display mt-6 text-xl font-light leading-snug text-paper">{k.name}</h3>
              <p className="mt-1 text-sm text-fawn">{k.issuer}</p>
              <p className="mt-0.5 font-mono text-xs text-ash">{k.meta}</p>

              <button
                type="button"
                onClick={() => openBySrc(k.certId)}
                className="link-rule mt-4 font-mono text-xs text-brass"
                disabled={k.certId === "bsc"}
              >
                {k.certId === "bsc" ? "Transcripts on request" : "Inspect credential"}
              </button>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      {/* Education note */}
      <Reveal delay={0.05} className="mt-4">
        <div className="flex flex-col gap-3 border border-line bg-ink-2 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-start gap-3">
            <IconAcademicCap className="mt-0.5 h-5 w-5 text-brass" aria-hidden="true" />
            <p className="max-w-2xl text-sm leading-relaxed text-fawn">
              <span className="font-semibold text-paper">Bachelor of Science in Software Engineering (BSSE)</span>{" "}
              — Superior University, Lahore. Firm grounding in SDLC, relational database modeling, algorithms
              and distributed-systems thinking.
            </p>
          </div>
          <span className="hud shrink-0 text-ash">2014 — 2018</span>
        </div>
      </Reveal>

      {/* Expanding course track */}
      <div className="mt-10 border-t border-line pt-6">
        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          aria-expanded={showAll}
          className="link-rule inline-flex items-center gap-2 font-mono text-xs text-brass"
        >
          {showAll ? "Hide" : "Reveal"} the Google PM specialization track · {secondary.length} course certificates
          <IconChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} aria-hidden="true" />
        </button>

        {showAll && (
          <div className="mt-6 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {secondary.map((cert) => (
              <button
                key={cert.id}
                type="button"
                onClick={() => setSelectedCert(cert)}
                className="group bg-ink p-4 text-left transition-colors hover:bg-ink-2"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden border border-line bg-ink">
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-2"
                  />
                </div>
                <h4 className="mt-3 text-sm font-medium leading-snug text-paper transition-colors group-hover:text-brass">
                  {cert.name}
                </h4>
                <p className="mt-1 text-xs text-ash">{cert.issuer}</p>
              </button>
            ))}
          </div>
        )}
      </div>

      {selectedCert && (
        <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
      )}
    </div>
  );
}