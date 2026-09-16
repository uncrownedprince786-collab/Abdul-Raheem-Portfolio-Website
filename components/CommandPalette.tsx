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
  IconGateCheck,
  IconNodeGraph,
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
      id: "work",
      title: "Jump to Selected Work",
      category: "Navigation",
      icon: IconNodeGraph,
      onSelect: () => {
        document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
      },
    },
    {
      id: "method",
      title: "Jump to Delivery Method",
      category: "Navigation",
      icon: IconGateCheck,
      onSelect: () => {
        document.getElementById("method")?.scrollIntoView({ behavior: "smooth" });
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
      id: "skills",
      title: "Jump to Toolkit & Capabilities",
      category: "Navigation",
      icon: IconLayers,
      onSelect: () => {
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
      },
    },
    {
      id: "credentials",
      title: "Jump to Credentials & Certifications",
      category: "Navigation",
      icon: IconAward,
      onSelect: () => {
        document.getElementById("credentials")?.scrollIntoView({ behavior: "smooth" });
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
      {open && (
        <div className="fixed inset-0 z-[120] flex items-start justify-center px-4 pt-20 sm:pt-28">
          <div
            className="fixed inset-0 bg-ink/85 backdrop-blur-md"
            onClick={() => setOpen(false)}
          />

          <div
            className="relative w-full max-w-xl border border-line-2 bg-ink-2 shadow-[0_0_60px_-15px_rgba(0,0,0,0.9)]"
            onKeyDown={handleKeyNav}
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-line px-4 py-3.5">
              <IconSearch className="h-4 w-4 text-ash" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActiveIndex(0);
                }}
                placeholder="Type a command or jump to section..."
                className="w-full bg-transparent text-sm text-paper placeholder-ash focus:outline-none"
              />
              <kbd className="rounded-sm border border-line-2 bg-ink px-1.5 py-0.5 font-mono text-[10px] text-ash">ESC</kbd>
            </div>

            {/* List */}
            <div className="max-h-80 overflow-y-auto p-2">
              {filteredCommands.length === 0 ? (
                <div className="p-6 text-center font-mono text-xs text-ash">
                  No matching commands for &ldquo;{query}&rdquo;
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
                      className={`flex w-full items-center justify-between gap-3 px-3.5 py-2.5 text-left transition-colors ${
                        isActive ? "border border-acid/60 bg-acid/10"
                          : "border border-transparent hover:bg-ink"
                      }`}
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <div
                          className={`flex h-7 w-7 shrink-0 items-center justify-center border ${
                            isActive ? "border-acid text-acid" : "border-line-2 text-ash"
                          }`}
                        >
                          <Icon className="h-3.5 w-3.5" />
                        </div>
                        <span className={`truncate text-xs font-medium ${isActive ? "text-paper" : "text-fawn"}`}>
                          {cmd.title}
                        </span>
                      </div>
                      <div className="flex shrink-0 items-center gap-2">
                        <span className="hud text-ash">{cmd.category}</span>
                        <IconChevronRight className={`h-3.5 w-3.5 ${isActive ? "text-acid" : "text-smoke"}`} />
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-line bg-ink px-4 py-2.5 font-mono text-[11px] text-ash">
              <div className="flex items-center gap-3">
                <span className="hud text-smoke">Navigate</span>
                <kbd className="rounded-sm border border-line-2 bg-ink px-1.5 py-0.5 text-[10px] text-fawn">↑</kbd>
                <kbd className="rounded-sm border border-line-2 bg-ink px-1.5 py-0.5 text-[10px] text-fawn">↓</kbd>
                <span className="hud text-smoke">Select</span>
                <kbd className="rounded-sm border border-line-2 bg-ink px-1.5 py-0.5 text-[10px] text-fawn">↵ Enter</kbd>
              </div>
              <span className="hud text-acid">⌘K to toggle</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}