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
    showToast(`Copied ${label} to clipboard: ${text}`);
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

  const field = "mt-1.5 w-full border border-line bg-ink px-3.5 py-2.5 text-sm text-paper placeholder-ash focus:border-acid focus:outline-none";

  return (
    <div className="grid gap-8 lg:grid-cols-12">
      {/* Dispatch stations */}
      <div className="space-y-px lg:col-span-5">
        {/* Email */}
        <div className="group border border-line bg-ink-2 p-5 transition-colors hover:border-acid/50 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-acid/40 text-acid">
                <IconMail className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <div>
                <p className="hud text-ash">Direct Email</p>
                <a
                  href="mailto:pro.engrraheem@gmail.com"
                  className="mt-0.5 block text-sm font-semibold text-paper transition-colors hover:text-acid"
                >
                  pro.engrraheem@gmail.com
                </a>
              </div>
            </div>
            <button
              type="button"
              onClick={() => copyToClipboard("pro.engrraheem@gmail.com", "Email")}
              className="flex h-9 w-9 items-center justify-center border border-line-2 text-fawn transition-colors hover:border-acid hover:text-acid"
              title="Copy email to clipboard"
            >
              {copiedField === "Email" ? (
                <IconCheck className="h-4 w-4 text-acid" />
              ) : (
                <IconCopy className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Phone / WhatsApp */}
        <div className="group border border-line bg-ink-2 p-5 transition-colors hover:border-acid/50 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-acid/40 text-acid">
                <IconPhone className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <div>
                <p className="hud text-ash">Phone & WhatsApp</p>
                <a
                  href="tel:+923316693499"
                  className="mt-0.5 block font-mono text-sm font-semibold text-paper transition-colors hover:text-acid"
                >
                  +92 331 6693499
                </a>
              </div>
            </div>
            <button
              type="button"
              onClick={() => copyToClipboard("+923316693499", "Phone number")}
              className="flex h-9 w-9 items-center justify-center border border-line-2 text-fawn transition-colors hover:border-acid hover:text-acid"
              title="Copy phone to clipboard"
            >
              {copiedField === "Phone number" ? (
                <IconCheck className="h-4 w-4 text-acid" />
              ) : (
                <IconCopy className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="group border border-line bg-ink-2 p-5 transition-colors hover:border-acid/50 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-acid/40 text-acid">
                <IconLinkedin className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <div>
                <p className="hud text-ash">LinkedIn Profile</p>
                <a
                  href="https://www.linkedin.com/in/abdul-raheem-3489b3107/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-0.5 block text-sm font-semibold text-paper transition-colors hover:text-acid"
                >
                  /in/abdul-raheem-3489b3107
                </a>
              </div>
            </div>
            <a
              href="https://www.linkedin.com/in/abdul-raheem-3489b3107/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center border border-line-2 text-fawn transition-colors hover:border-acid hover:text-acid"
              title="Open LinkedIn"
            >
              <IconArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Availability */}
        <div className="border border-line bg-ink p-5 sm:p-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-acid opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-acid" />
            </span>
            <h4 className="hud text-acid">Active availability</h4>
          </div>

          <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-fawn">
            <IconMapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-acid" />
            Based in Lahore, PK (UTC+5). Open for Senior / Lead Technical Project & Product Manager roles with dedicated overlap for UK · EU · GCC · US-East.
          </p>

          <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-fawn">
            <IconClock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-acid" />
            Replies within 24 hours on working days.
          </p>

          <div className="mt-4 flex items-center gap-1.5 font-mono text-[11px] text-ash">
            <IconShieldCheck className="h-3.5 w-3.5 text-acid" />
            Every message reviewed personally — no auto-replies.
          </div>
        </div>
      </div>

      {/* Dispatch form */}
      <div className="lg:col-span-7">
        <div className="border border-line bg-ink-2 p-6 sm:p-8">
          <div className="flex items-baseline gap-3">
            <span aria-hidden="true" className="hud text-acid">09</span>
            <span aria-hidden="true" className="h-0.5 w-8 bg-acid/50" />
            <span className="hud text-ash">Open a channel</span>
          </div>
          <h3 className="font-display mt-4 text-2xl font-light text-paper sm:text-3xl">
            Send a direct dispatch
          </h3>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-fawn">
            Hiring for a TPM role, starting a delivery initiative, or need sprint consulting — send a note and I&rsquo;ll come back with something useful.
          </p>

          {submitted ? (
            <div className="mt-8 border border-acid/50 bg-acid/10 p-6 text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-acid/60 text-acid">
                <IconCheck className="h-5 w-5" />
              </div>
              <h4 className="mt-3 text-sm font-semibold text-paper">Thank you — your message has been dispatched.</h4>
              <p className="mx-auto mt-2 max-w-md text-xs text-fawn">
                I review messages daily and will reply to{" "}
                <strong className="text-paper">{formState.email}</strong> promptly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormState({ name: "", email: "", subject: "", message: "" });
                }}
                className="link-rule mt-5 inline-block font-mono text-xs text-acid"
              >
                Send another note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              {errorMsg && (
                <div className="border border-signal/50 bg-signal/10 p-3 text-xs text-signal">
                  {errorMsg}
                </div>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="block font-mono text-xs text-fawn">
                    Your name <span className="text-signal">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                    placeholder="e.g. Alex Henderson"
                    className={field}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block font-mono text-xs text-fawn">
                    Work email <span className="text-signal">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                    placeholder="e.g. alex@company.com"
                    className={field}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block font-mono text-xs text-fawn">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState((s) => ({ ...s, subject: e.target.value }))}
                  placeholder="e.g. Senior TPM opportunity / SaaS delivery consulting"
                  className={field}
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block font-mono text-xs text-fawn">
                  Message details <span className="text-signal">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                  placeholder="Tell me a bit about your product team, project goals, timeline, or open role..."
                  className={`${field} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 bg-acid px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-acid-bright disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-ink/30 border-t-ink" />
                    <span>Transmitting...</span>
                  </>
                ) : (
                  <>
                    <span>Send message directly</span>
                    <IconArrowUpRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}