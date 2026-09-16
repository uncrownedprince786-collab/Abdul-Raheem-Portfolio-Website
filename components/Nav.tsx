"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { PROFILE } from "@/app/data";
import { IconArrowUpRight, IconDownload, IconMenu, IconX } from "./Icons";

const LINKS = [
  { id: "work", label: "Work" },
  { id: "method", label: "Method" },
  { id: "experience", label: "Experience" },
  { id: "principles", label: "Principles" },
  { id: "skills", label: "Skills" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      setHidden(window.scrollY > 600 && window.scrollY < window.innerHeight);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    for (const link of LINKS) {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        animate={reduced ? {} : { y: hidden ? "-110%" : "0%" }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-[100] border-b transition-colors duration-300 ${
          scrolled ? "border-line bg-ink/85 backdrop-blur-xl" : "border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6" aria-label="Primary">
          {/* Wordmark */}
          <a href="#top" className="group flex items-baseline gap-2" onClick={() => setOpen(false)}>
            <span className="font-mono text-xs text-acid transition-colors group-hover:text-acid-bright">
              AR.
            </span>
            <span className="font-display text-lg font-light tracking-tight text-paper">
              Abdul Raheem
            </span>
          </a>

          {/* Desktop links — optically centered */}
          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 lg:flex">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`hud relative py-2 transition-colors ${
                    active === link.id ? "text-paper" : "text-ash hover:text-fawn"
                  }`}
                >
                  {link.label}
                  {active === link.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-0 -bottom-0.5 h-px bg-acid"
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <span className="hidden items-center gap-2 border border-line bg-ink-2/70 px-3 py-2 lg:inline-flex">
              <span className="relative flex h-1.5 w-1.5">
                <span className="blink-dot absolute inset-0 rounded-full bg-acid" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-fawn">
                Accepting new engagements
              </span>
            </span>
            <a
              href="/abdul-raheem-resume.pdf"
              download="Abdul_Raheem_Technical_Project_Manager_Resume.pdf"
              className="hidden items-center gap-2 border border-line-2 px-4 py-2 font-mono text-xs text-fawn transition-colors hover:border-acid hover:text-paper sm:inline-flex"
            >
              <IconDownload className="h-3.5 w-3.5" strokeWidth={1.75} />
              Résumé
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-acid px-4 py-2 font-mono text-xs font-semibold text-ink transition-colors hover:bg-acid-bright"
            >
              Let&rsquo;s talk
              <IconArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="border border-line-2 p-2.5 text-fawn transition-colors hover:border-acid hover:text-acid lg:hidden"
            >
              {open ? <IconX className="h-4 w-4" /> : <IconMenu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[99] bg-ink/97 backdrop-blur-xl lg:hidden"
          >
            <div className="flex h-full flex-col px-6 pt-24 pb-10">
              <ul className="space-y-1">
                {LINKS.map((link, i) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <a
                      href={`#${link.id}`}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline justify-between border-b border-line py-4"
                    >
                      <span className="font-display text-3xl font-light text-paper transition-colors group-hover:text-acid">
                        {link.label}
                      </span>
                      <span className="hud text-ash">
                        0{i + 1}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.4 }}
                className="mt-auto space-y-4"
              >
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 bg-acid px-6 py-4 font-mono text-sm font-semibold text-ink"
                >
                  Let&rsquo;s talk
                  <IconArrowUpRight className="h-4 w-4" />
                </a>
                <p className="hud text-center text-ash">
                  {PROFILE.location} · {PROFILE.overlap}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}