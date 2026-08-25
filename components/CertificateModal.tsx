"use client";

import { useState } from "react";
import Image from "next/image";
import { IconExternalLink, IconAward, IconCheckCircle, IconX } from "./Icons";

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

export default function CertificateGallery() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <div className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATES_DATA.map((cert, i) => (
          <div
            key={cert.id}
            data-reveal
            style={{ "--reveal-delay": `${(i % 3) * 100}ms` } as React.CSSProperties}
            className="group flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.12)]"
          >
            <div>
              {/* Thumbnail Container */}
              <div
                onClick={() => setSelectedCert(cert)}
                className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-xl border border-slate-800 bg-slate-950 p-2 transition-transform duration-300 group-hover:border-slate-700"
              >
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-1 transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 opacity-0 backdrop-blur-xs transition-opacity group-hover:opacity-100">
                  <span className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white shadow-lg">
                    Inspect Credential
                  </span>
                </div>
              </div>

              {/* Meta */}
              <div className="mt-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded bg-slate-800/80 px-2 py-0.5 text-[10px] font-mono text-indigo-400">
                    {cert.badgeType}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">{cert.date}</span>
                </div>

                <h3
                  onClick={() => setSelectedCert(cert)}
                  className="mt-2 text-sm font-semibold leading-snug tracking-tight text-slate-200 cursor-pointer group-hover:text-white transition-colors"
                >
                  {cert.name}
                </h3>
                <p className="mt-1 text-xs text-slate-400">{cert.issuer}</p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-5 flex items-center justify-between border-t border-slate-800/80 pt-3 text-xs">
              <button
                type="button"
                onClick={() => setSelectedCert(cert)}
                className="font-medium text-slate-400 hover:text-indigo-300 transition-colors"
              >
                View Details
              </button>

              {cert.href && (
                <a
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <span>Verify Online</span>
                  <IconExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Verified Professional Credentials Box */}
      <div data-reveal className="rounded-2xl border border-slate-800/80 bg-slate-900/80 p-6 sm:p-8 backdrop-blur-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Professional Scrum & Project Management Track
            </h3>
            <p className="mt-1 text-xs text-slate-400">
              Continuously adhering to PMI and Scrum.org industry benchmarks
            </p>
          </div>
          <span className="self-start sm:self-auto rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-mono text-emerald-400">
            Active Continuous Education
          </span>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-400">
              <IconAward className="h-4 w-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-xs font-semibold text-slate-200">Professional Scrum Master (PSM I)</h4>
                <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[9px] font-mono text-emerald-400">
                  Certified
                </span>
              </div>
              <p className="mt-1 text-[11px] text-slate-400">Scrum.org · Mastery of Agile Scrum framework, sprint governance, and team facilitation.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-400">
              <IconAward className="h-4 w-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-xs font-semibold text-slate-200">Project Management Professional (PMP)®</h4>
                <span className="rounded bg-indigo-500/20 px-1.5 py-0.5 text-[9px] font-mono text-indigo-400">
                  In Progress
                </span>
              </div>
              <p className="mt-1 text-[11px] text-slate-400">Project Management Institute (PMI) · Advanced predictive, agile, and hybrid project leadership.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Inspector */}
      {selectedCert && (
        <div className="fixed inset-0 z-[130] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
            onClick={() => setSelectedCert(null)}
          />

          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className="rounded bg-indigo-500/20 px-2 py-0.5 text-[10px] font-mono text-indigo-400">
                  {selectedCert.badgeType}
                </span>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">
                  {selectedCert.name}
                </h3>
                <p className="text-xs text-slate-400">{selectedCert.issuer} · {selectedCert.date}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <IconX className="h-5 w-5" />
              </button>
            </div>

            {/* Certificate Preview */}
            <div className="mt-5 relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-800 bg-white">
              <Image
                src={selectedCert.src}
                alt={selectedCert.alt}
                fill
                sizes="800px"
                className="object-contain p-4"
              />
            </div>

            {/* Credential ID & Verify Link */}
            <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <div>
                <p className="text-[11px] font-mono text-slate-400">Credential Verification</p>
                <p className="text-xs font-mono font-medium text-slate-200">{selectedCert.credentialId || "Verified Credential Record"}</p>
              </div>

              {selectedCert.href ? (
                <a
                  href={selectedCert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/20"
                >
                  <span>Open Official Record</span>
                  <IconExternalLink className="h-3.5 w-3.5" />
                </a>
              ) : (
                <span className="text-xs text-slate-500 font-mono">Original Document on File</span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
