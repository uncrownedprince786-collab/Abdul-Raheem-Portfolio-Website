"use client";

import { useEffect, useState, useRef } from "react";
import {
  IconSearch,
  IconBriefcase,
  IconLayers,
  IconAward,
  IconMail,
  IconPhone,
  IconLinkedin,
  IconDownload,
  IconX,
  IconChevronRight,
  IconCode,
} from "./Icons";
import { useToast } from "./Toast";

type CommandItem = {
  id: string;
  title: string;
  category: "Navigation" | "Actions" | "Contact";
  icon: React.ComponentType<{ className?: string }>;
  shortcut?: string;
  onSelect: () => void;
};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { showToast } = useToast();

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`Copied ${label} to clipboard: ${text}`);
    setOpen(false);
  };

  const commands: CommandItem[] = [
    {
      id: "about",
      title: "Jump to About & Background",
      category: "Navigation",
      icon: IconLayers,
      onSelect: () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
      },
    },
    {
      id: "experience",
      title: "Jump to Experience & Track Record",
      category: "Navigation",
      icon: IconBriefcase,
      onSelect: () => {
        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
      },
    },
    {
      id: "projects",
      title: "Jump to Case Studies & Deliveries",
      category: "Navigation",
      icon: IconCode,
      onSelect: () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
      },
    },
    {
      id: "skills",
      title: "Jump to Technical Stack & PM Tooling",
      category: "Navigation",
      icon: IconLayers,
      onSelect: () => {
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
      },
    },
    {
      id: "certificates",
      title: "Jump to Verified Credentials & Certifications",
      category: "Navigation",
      icon: IconAward,
      onSelect: () => {
        document.getElementById("certificates")?.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
      },
    },
    {
      id: "contact",
      title: "Jump to Contact & Connect",
      category: "Navigation",
      icon: IconMail,
      onSelect: () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
      },
    },
    {
      id: "copy-email",
      title: "Copy Email Address (pro.engrraheem@gmail.com)",
      category: "Actions",
      icon: IconMail,
      onSelect: () => handleCopy("pro.engrraheem@gmail.com", "Email"),
    },
    {
      id: "copy-phone",
      title: "Copy Phone Number (+92 331 6693499)",
      category: "Actions",
      icon: IconPhone,
      onSelect: () => handleCopy("+92 331 6693499", "Phone"),
    },
    {
      id: "download-resume",
      title: "Download Resume (Abdul_Raheem_Resume.pdf)",
      category: "Actions",
      icon: IconDownload,
      onSelect: () => {
        const link = document.createElement("a");
        link.href = "/abdul-raheem-resume.pdf";
        link.download = "Abdul_Raheem_Resume.pdf";
        link.click();
        showToast("Downloading Abdul Raheem's Resume (PDF)");
        setOpen(false);
      },
    },
    {
      id: "open-linkedin",
      title: "Open LinkedIn Profile (/in/abdul-raheem-3489b3107)",
      category: "Contact",
      icon: IconLinkedin,
      onSelect: () => {
        window.open("https://www.linkedin.com/in/abdul-raheem-3489b3107/", "_blank", "noopener,noreferrer");
        setOpen(false);
      },
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      } else if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setActiveIndex(0);
    } else {
      setQuery("");
    }
  }, [open]);

  const handleKeyNav = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
    } else if (e.key === "Enter" && filteredCommands[activeIndex]) {
      e.preventDefault();
      filteredCommands[activeIndex].onSelect();
    }
  };

  return (
    <>
      {/* Floating or header trigger button is in Nav, but this allows custom events */}
      {open && (
        <div className="fixed inset-0 z-[120] flex items-start justify-center pt-20 px-4 sm:pt-28">
          <div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
            onClick={() => setOpen(false)}
          />

          <div
            className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900 shadow-2xl transition-all"
            onKeyDown={handleKeyNav}
          >
            {/* Search header */}
            <div className="flex items-center gap-3 border-b border-slate-800 px-4 py-3.5">
              <IconSearch className="h-4 w-4 text-slate-400" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActiveIndex(0);
                }}
                placeholder="Type a command or jump to section..."
                className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded p-1 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
              >
                <IconX className="h-4 w-4" />
              </button>
            </div>

            {/* Command items list */}
            <div className="max-h-80 overflow-y-auto p-2">
              {filteredCommands.length === 0 ? (
                <div className="p-6 text-center text-xs text-slate-500">
                  No matching commands found for &ldquo;{query}&rdquo;
                </div>
              ) : (
                filteredCommands.map((cmd, idx) => {
                  const Icon = cmd.icon;
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={cmd.id}
                      type="button"
                      onClick={cmd.onSelect}
                      onMouseEnter={() => setActiveIndex(idx)}
                      className={`flex w-full items-center justify-between gap-3 rounded-xl px-3.5 py-2.5 text-left text-sm transition-colors ${
                        isActive
                          ? "bg-indigo-600/20 text-indigo-200 border border-indigo-500/30"
                          : "text-slate-300 hover:bg-slate-800/60 border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${
                            isActive
                              ? "bg-indigo-500 text-white"
                              : "bg-slate-800 text-slate-400"
                          }`}
                        >
                          <Icon className="h-3.5 w-3.5" />
                        </div>
                        <span className="truncate text-xs font-medium text-slate-200">
                          {cmd.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="rounded bg-slate-800/80 px-2 py-0.5 text-[10px] uppercase tracking-wider text-slate-400 font-mono">
                          {cmd.category}
                        </span>
                        <IconChevronRight className="h-3.5 w-3.5 text-slate-500" />
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer tips */}
            <div className="flex items-center justify-between border-t border-slate-800/90 bg-slate-950/60 px-4 py-2 text-[11px] text-slate-400">
              <div className="flex items-center gap-2">
                <span>Navigation:</span>
                <kbd className="rounded border border-slate-700 bg-slate-800 px-1.5 py-0.5 text-[10px] text-slate-300">↑</kbd>
                <kbd className="rounded border border-slate-700 bg-slate-800 px-1.5 py-0.5 text-[10px] text-slate-300">↓</kbd>
                <span className="ml-1">Select:</span>
                <kbd className="rounded border border-slate-700 bg-slate-800 px-1.5 py-0.5 text-[10px] text-slate-300">↵</kbd>
              </div>
              <div className="flex items-center gap-1">
                <span>Close:</span>
                <kbd className="rounded border border-slate-700 bg-slate-800 px-1.5 py-0.5 text-[10px] text-slate-300">ESC</kbd>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
