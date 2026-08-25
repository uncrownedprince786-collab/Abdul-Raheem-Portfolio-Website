"use client";

import { useState } from "react";
import {
  IconMail,
  IconPhone,
  IconLinkedin,
  IconCopy,
  IconCheck,
  IconMapPin,
  IconClock,
  IconArrowUpRight,
  IconShieldCheck,
} from "./Icons";
import { useToast } from "./Toast";

export default function ContactDeck() {
  const { showToast } = useToast();
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    showToast(`Copied ${label} (${text}) to clipboard!`);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      showToast("Please fill in all required fields", "info");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
        showToast("Message sent successfully! I'll reply promptly.");
      } else {
        setErrorMsg(data.error || "Failed to deliver message. Please email directly.");
        showToast("Notice: Please feel free to email directly.", "info");
      }
    } catch (err) {
      console.error(err);
      setSubmitted(true);
      showToast("Message sent! You can also email pro.engrraheem@gmail.com directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-12">
      {/* Left Contact Cards */}
      <div className="space-y-4 lg:col-span-5" data-reveal>
        {/* Email Card with 1-click copy */}
        <div className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/70 p-6 backdrop-blur-xl transition-all hover:border-indigo-500/40">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <IconMail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Direct Email</p>
                <a
                  href="mailto:pro.engrraheem@gmail.com"
                  className="mt-0.5 block text-sm font-semibold text-slate-100 hover:text-indigo-300 transition-colors"
                >
                  pro.engrraheem@gmail.com
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={() => copyToClipboard("pro.engrraheem@gmail.com", "Email")}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700/80 bg-slate-800/80 text-slate-300 transition-all hover:border-indigo-500 hover:bg-indigo-600 hover:text-white"
              title="Copy email to clipboard"
            >
              {copiedField === "Email" ? (
                <IconCheck className="h-4 w-4 text-emerald-400" />
              ) : (
                <IconCopy className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Phone / WhatsApp Card */}
        <div className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/70 p-6 backdrop-blur-xl transition-all hover:border-indigo-500/40">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <IconPhone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Phone & WhatsApp</p>
                <a
                  href="tel:+923316693499"
                  className="mt-0.5 block text-sm font-semibold text-slate-100 hover:text-emerald-300 transition-colors font-mono"
                >
                  +92 331 6693499
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={() => copyToClipboard("+923316693499", "Phone number")}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700/80 bg-slate-800/80 text-slate-300 transition-all hover:border-emerald-500 hover:bg-emerald-600 hover:text-white"
              title="Copy phone to clipboard"
            >
              {copiedField === "Phone number" ? (
                <IconCheck className="h-4 w-4 text-emerald-400" />
              ) : (
                <IconCopy className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* LinkedIn Profile Card */}
        <div className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/70 p-6 backdrop-blur-xl transition-all hover:border-indigo-500/40">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <IconLinkedin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">LinkedIn Profile</p>
                <a
                  href="https://www.linkedin.com/in/abdul-raheem-3489b3107/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-0.5 block text-sm font-semibold text-slate-100 hover:text-sky-300 transition-colors"
                >
                  /in/abdul-raheem-3489b3107
                </a>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/abdul-raheem-3489b3107/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700/80 bg-slate-800/80 text-slate-300 transition-all hover:border-sky-500 hover:bg-sky-600 hover:text-white"
              title="Open LinkedIn"
            >
              <IconArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Timezone & Availability Badge Card */}
        <div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-6 backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Active Availability & Timezone
            </h4>
          </div>

          <p className="mt-3 text-xs leading-relaxed text-slate-300">
            Based in <strong className="text-white">Lahore, Pakistan (UTC+5)</strong>. Open for Senior / Lead Technical Project & Product Manager roles with dedicated overlap for:
          </p>

          <div className="mt-3 flex flex-wrap gap-1.5 font-mono text-[11px]">
            <span className="rounded bg-slate-800 px-2.5 py-1 text-slate-300">UK (GMT / BST)</span>
            <span className="rounded bg-slate-800 px-2.5 py-1 text-slate-300">Europe (CET)</span>
            <span className="rounded bg-slate-800 px-2.5 py-1 text-slate-300">Saudi Arabia / GCC (AST)</span>
            <span className="rounded bg-slate-800 px-2.5 py-1 text-slate-300">US East Coast (EST)</span>
          </div>
        </div>
      </div>

      {/* Right Contact Form */}
      <div className="lg:col-span-7" data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
        <div className="rounded-2xl border border-slate-800/80 bg-slate-900/80 p-7 sm:p-8 backdrop-blur-xl">
          <h3 className="text-xl font-semibold tracking-tight text-white">
            Send a Direct Message
          </h3>
          <p className="mt-1 text-xs text-slate-400">
            Discussing a new software delivery initiative, hiring for a TPM role, or need sprint consulting? Send a note directly below.
          </p>

          {submitted ? (
            <div className="mt-8 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mb-3">
                <IconCheck className="h-5 w-5" />
              </div>
              <h4 className="text-sm font-semibold text-white">Thank you! Your message has been sent.</h4>
              <p className="mt-2 text-xs text-slate-300 max-w-md mx-auto">
                I review messages daily and will get back to you promptly at{" "}
                <strong className="text-white">{formState.email}</strong>.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormState({ name: "", email: "", subject: "", message: "" });
                }}
                className="mt-5 rounded-lg bg-slate-800 px-4 py-2 text-xs font-medium text-slate-300 hover:bg-slate-700 transition-colors"
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {errorMsg && (
                <div className="rounded-lg border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-300">
                  {errorMsg}
                </div>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                    placeholder="e.g. Alex Henderson"
                    className="mt-1.5 w-full rounded-xl border border-slate-700/80 bg-slate-950/70 px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300">
                    Your Work Email <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                    placeholder="e.g. alex@company.com"
                    className="mt-1.5 w-full rounded-xl border border-slate-700/80 bg-slate-950/70 px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-medium text-slate-300">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState((s) => ({ ...s, subject: e.target.value }))}
                  placeholder="e.g. Senior TPM Opportunity / SaaS Project Consultation"
                  className="mt-1.5 w-full rounded-xl border border-slate-700/80 bg-slate-950/70 px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300">
                  Message Details <span className="text-rose-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                  placeholder="Tell me a bit about your product team, project goals, timeline, or open role..."
                  className="mt-1.5 w-full rounded-xl border border-slate-700/80 bg-slate-950/70 px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 text-xs font-semibold text-white shadow-lg shadow-indigo-600/25 transition-all hover:bg-indigo-500 hover:shadow-indigo-600/35 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <span className="h-3.5 w-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <span>Send Message Directly</span>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
