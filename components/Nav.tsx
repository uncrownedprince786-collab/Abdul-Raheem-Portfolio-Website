"use client";

import { useEffect, useState } from "react";
import {
  IconSearch,
  IconDownload,
  IconMail,
  IconBriefcase,
  IconLayers,
  IconCode,
  IconAward,
  IconX,
} from "./Icons";
import { useToast } from "./Toast";

const NAV_LINKS = [
  { label: "Overview", href: "#overview" },
  { label: "Experience", href: "#experience" },
  { label: "Case Studies", href: "#projects" },
  { label: "Competencies", href: "#skills" },
  { label: "Credentials", href: "#certificates" },
  { label: "Principles", href: "#how-i-work" },
  { label: "Contact", href: "#contact" },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

export default function Nav() {
  const [elevated, setElevated] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("overview");
  const { showToast } = useToast();

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (!("IntersectionObserver" in window) || sections.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const triggerCommandPalette = () => {
    window.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "k",
        ctrlKey: true,
        metaKey: true,
        bubbles: true,
      })
    );
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/abdul-raheem-resume.pdf";
    link.download = "Abdul_Raheem_Resume.pdf";
    link.click();
    showToast("Downloading Abdul Raheem's Resume (PDF)");
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        elevated || open
          ? "border-b border-slate-800/80 bg-slate-950/85 shadow-[0_4px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary Navigation"
        className="mx-auto flex h-[70px] max-w-6xl items-center justify-between px-6"
      >
        {/* Logo & Availability Pill */}
        <div className="flex items-center gap-4">
          <a
            href="#top"
            className="flex items-center gap-2 text-sm font-semibold tracking-tight text-white transition-opacity hover:opacity-80"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-xs font-bold text-white shadow-md shadow-indigo-600/30">
              AR
            </span>
            <span className="font-semibold">Abdul Raheem</span>
          </a>

          <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-mono text-emerald-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            <span>Available for Roles</span>
          </div>
        </div>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-1 rounded-full border border-slate-800/90 bg-slate-900/70 p-1 backdrop-blur-md lg:flex">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = active === href.slice(1);
            return (
              <li key={href}>
                <a
                  href={href}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                    isActive
                      ? "bg-slate-800 text-white shadow-sm"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                  }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right Actions: Command Search + Resume Download */}
        <div className="flex items-center gap-2.5">
          {/* Quick Command Palette Button */}
          <button
            type="button"
            onClick={triggerCommandPalette}
            className="hidden sm:flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/90 px-3 py-1.5 text-xs text-slate-400 transition-colors hover:border-slate-700 hover:text-slate-200"
            title="Open Command Palette (Ctrl+K / Cmd+K)"
          >
            <IconSearch className="h-3.5 w-3.5" />
            <span className="text-[11px]">Quick Jump</span>
            <kbd className="rounded border border-slate-700 bg-slate-800 px-1 py-0.2 text-[9px] font-mono text-slate-300">
              ⌘K
            </kbd>
          </button>

          {/* Download Resume Button */}
          <button
            type="button"
            onClick={handleDownloadResume}
            className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-3.5 py-1.5 text-xs font-medium text-white shadow-md shadow-indigo-600/20 transition-all hover:bg-indigo-500"
          >
            <IconDownload className="h-3.5 w-3.5" />
            <span>CV</span>
          </button>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1 rounded-lg border border-slate-800 bg-slate-900 lg:hidden"
          >
            <span
              className={`h-0.5 w-4 bg-slate-200 transition-transform duration-300 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-4 bg-slate-200 transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-4 bg-slate-200 transition-transform duration-300 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden border-b border-slate-800/80 bg-slate-950/95 ${
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-1 px-6 pb-4 pt-2">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = active === href.slice(1);
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-sm transition-colors ${
                    isActive
                      ? "bg-indigo-600/20 text-indigo-300 font-semibold"
                      : "text-slate-300 hover:bg-slate-900 hover:text-white"
                  }`}
                >
                  <span>{label}</span>
                  <span className="text-xs font-mono text-slate-500">{href}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="grid grid-cols-2 gap-3 px-6 pb-6 pt-2 border-t border-slate-850">
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              triggerCommandPalette();
            }}
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900 py-2.5 text-xs font-medium text-slate-300"
          >
            <IconSearch className="h-3.5 w-3.5" />
            <span>Search (⌘K)</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setOpen(false);
              handleDownloadResume();
            }}
            className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 py-2.5 text-xs font-medium text-white shadow-md shadow-indigo-600/25"
          >
            <IconDownload className="h-3.5 w-3.5" />
            <span>Download CV</span>
          </button>
        </div>
      </div>
    </header>
  );
}
