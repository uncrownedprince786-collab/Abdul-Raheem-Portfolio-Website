import type { ReactNode } from "react";

export type GlyphName =
  | "ingress"
  | "pin"
  | "warehouse"
  | "truck"
  | "reward"
  | "student"
  | "question"
  | "gate"
  | "check"
  | "verify"
  | "source"
  | "funnel"
  | "normalize"
  | "data"
  | "machine"
  | "contract"
  | "return"
  | "card"
  | "basket"
  | "box"
  | "browser"
  | "plug"
  | "link"
  | "scope"
  | "module"
  | "radar"
  | "route"
  | "gear";

/**
 * SIGNAL & SYSTEMS — sequence glyphs for system plates.
 * One geometry language: 20px grid, 1.3 stroke, round caps, hairline fills.
 * Each glyph is a miniature "element" of a process, not a generic icon set.
 */

const S = (props: Record<string, unknown> = {}): Record<string, unknown> => ({
  fill: "none" as const,
  stroke: "currentColor" as const,
  strokeWidth: 1.3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

const SHAPES: Record<GlyphName, ReactNode> = {
  /* ingress — request enters a module */
  ingress: (
    <g>
      <rect x="5.5" y="4.5" width="9" height="11" rx="1.5" {...S()} />
      <path d="M1 10h3.5" {...S()} />
      <circle cx="10" cy="10" r="1.1" fill="currentColor" stroke="none" />
    </g>
  ),
  /* pin — a physical location / pickup point */
  pin: (
    <g>
      <path d="M10 2.6c-2.6 0-4.6 2-4.6 4.3 0 3.1 4.6 7.9 4.6 7.9s4.6-4.8 4.6-7.9c0-2.3-2-4.3-4.6-4.3z" {...S()} />
      <circle cx="10" cy="7" r="1.2" fill="currentColor" stroke="none" />
    </g>
  ),
  /* warehouse — inventory hub */
  warehouse: (
    <g>
      <path d="M3 8.7 10 4.5l7 4.2" {...S()} />
      <path d="M3.5 8.7V15a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V8.7" {...S()} />
      <path d="M8.5 16v-4h3v4" {...S()} />
    </g>
  ),
  /* truck — physical movement */
  truck: (
    <g>
      <rect x="2.5" y="9" width="10.5" height="4.5" rx="1" {...S()} />
      <path d="M13 10.5h1.7l2.3 2.3v1.2h-2.4" {...S()} />
      <circle cx="5.6" cy="15" r="1.4" {...S()} />
      <circle cx="13.4" cy="15" r="1.4" {...S()} />
    </g>
  ),
  /* reward — payout / credit node */
  reward: (
    <g>
      <path d="M10 2.8c-2.6 0-4.5 2-4.5 4.3 0 3 4.5 7.6 4.5 7.6s4.5-4.6 4.5-7.6c0-2.3-1.9-4.3-4.5-4.3z" {...S()} />
      <path d="M8.3 7.2h3.4M10 5.4v3.6" {...S()} />
    </g>
  ),
  /* student — a learner (person node) */
  student: (
    <g>
      <circle cx="9.5" cy="6" r="2.3" {...S()} />
      <path d="M4.4 15.5c.2-3 1.3-4.5 5.1-4.5s4.9 1.5 5.1 4.5" {...S()} />
    </g>
  ),
  /* question — prompt / input bubble */
  question: (
    <g>
      <path d="M3.5 7a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v3.5a3 3 0 0 1-3 3h-4.4L6 17v-3a3 3 0 0 1-2.5-3z" {...S()} />
      <circle cx="8" cy="11" r="0.55" fill="currentColor" stroke="none" />
      <circle cx="10.5" cy="11" r="0.55" fill="currentColor" stroke="none" />
      <circle cx="13" cy="11" r="0.55" fill="currentColor" stroke="none" />
    </g>
  ),
  /* gate — diamond decision / guardrail */
  gate: (
    <g>
      <path d="M10 2.6 17.4 10 10 17.4 2.6 10z" {...S()} />
    </g>
  ),
  /* check — verified output */
  check: (
    <g>
      <rect x="3.5" y="3.5" width="13" height="13" rx="2" {...S()} />
      <path d="m6.8 10.2 2.1 2.1 4.3-4.6" {...S()} />
    </g>
  ),
  /* verify — scan / review */
  verify: (
    <g>
      <circle cx="10" cy="10" r="6" {...S()} />
      <path d="m7 10 2.1 2.1 4-4.3" {...S()} />
    </g>
  ),
  /* source — radiating origin */
  source: (
    <g>
      <circle cx="10" cy="10" r="5.4" {...S()} />
      <path d="M10 1.8v3M10 15.2v3M1.8 10h3M15.2 10h3" {...S()} />
    </g>
  ),
  /* funnel — extraction */
  funnel: (
    <g>
      <path d="M4.8 2.8h10.4l-4.6 5.6v6.8h-1.2V8.4z" {...S()} />
      <path d="M4.5 16.8h11" {...S()} />
    </g>
  ),
  /* normalize — table / schema transform */
  normalize: (
    <g>
      <rect x="2.5" y="4" width="15" height="12" rx="1.5" {...S()} />
      <path d="M6 8h8" {...S()} />
      <path d="M6 11h8" {...S()} />
      <path d="M6 14h4" {...S({})} opacity="0.6" />
    </g>
  ),
  /* data — store / lake */
  data: (
    <g>
      <path d="M3.5 6.6a6.5 2.3 0 0 1 13 0v7a6.5 2.3 0 0 1-13 0z" {...S()} />
      <path d="M3.5 6.6a6.5 2.3 0 0 0 13 0" {...S()} />
      <path d="M3.5 9a6.5 2.3 0 0 0 13 0" {...S({})} opacity="0.55" />
    </g>
  ),
  /* machine — physical equipment */
  machine: (
    <g>
      <rect x="2.5" y="5.5" width="15" height="9" rx="1.5" {...S()} />
      <circle cx="10" cy="10" r="1.8" {...S()} />
      <path d="M10 6.2v2M10 11.8v2M6.2 10h2M11.8 10h2" {...S()} />
    </g>
  ),
  /* contract — agreement / rental record */
  contract: (
    <g>
      <path d="M5 2.5h7l3 3v12H5z" {...S()} />
      <path d="M9 2.5v3h3" {...S({})} opacity="0.6" />
      <path d="M5 10.5h10" {...S()} />
      <path d="M8 14h5" {...S()} />
    </g>
  ),
  /* return — loop-back arrow */
  return: (
    <g>
      <path d="M4.5 8.5a6.5 6.5 0 1 1-.2 7.5" {...S()} />
      <path d="m3.4 15.8 1.9-1.1M5.3 14.7l1.2 1.8" {...S()} />
    </g>
  ),
  /* card — payment */
  card: (
    <g>
      <rect x="2.5" y="5.5" width="15" height="9.5" rx="1.5" {...S()} />
      <path d="M2.5 8.5h15" {...S()} />
      <circle cx="13.5" cy="11.8" r="0.7" fill="currentColor" stroke="none" />
    </g>
  ),
  /* basket — order intake */
  basket: (
    <g>
      <path d="M6.2 8.5V5.8a2 2 0 0 1 4 0v2.7" {...S()} />
      <path d="M4.2 8.5h11.6l-1.2 8.5H5.4z" {...S()} />
      <path d="M7 11v3.5M10 11v3.5M13 11v3.5" {...S({})} opacity="0.6" />
    </g>
  ),
  /* box — shipped unit */
  box: (
    <g>
      <rect x="3.5" y="9" width="13" height="7.5" rx="1" {...S()} />
      <path d="M3.5 9 6 4.5h8l2.5 4.5" {...S()} />
      <path d="M10 4.5V9" {...S()} />
    </g>
  ),
  /* browser — browser window */
  browser: (
    <g>
      <rect x="2.5" y="3.5" width="15" height="13.5" rx="1.5" {...S()} />
      <path d="M2.5 7h15" {...S()} />
      <circle cx="5.3" cy="5.2" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="7.8" cy="5.2" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="10.3" cy="5.2" r="0.8" fill="currentColor" stroke="none" />
    </g>
  ),
  /* plug — extension point */
  plug: (
    <g>
      <rect x="4.5" y="4.5" width="11" height="11" rx="1.5" {...S()} />
      <rect x="7" y="7" width="6" height="6" rx="1" {...S()} />
    </g>
  ),
  /* link — connected workflow */
  link: (
    <g>
      <rect x="2" y="7" width="5.5" height="6" rx="1" {...S()} />
      <rect x="12.5" y="7" width="5.5" height="6" rx="1" {...S()} />
      <path d="M7.5 10h5" {...S()} />
    </g>
  ),
  /* scope — discovery / crosshair */
  scope: (
    <g>
      <circle cx="8.5" cy="8.5" r="4.5" {...S()} />
      <path d="M11.8 11.8 16 16" {...S()} />
      <path d="M8.5 5.5v1.5M8.5 10v1.5M5.5 8.5H7M10 8.5h1.5" {...S({})} opacity="0.6" />
    </g>
  ),
  /* module — build unit */
  module: (
    <g>
      <rect x="3" y="6" width="14" height="8" rx="1.5" {...S()} />
      <circle cx="8.5" cy="10" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="12" cy="10" r="0.9" fill="currentColor" stroke="none" />
    </g>
  ),
  /* radar — dispatch matching sweep */
  radar: (
    <g>
      <circle cx="10" cy="10" r="5.6" {...S()} />
      <circle cx="10" cy="10" r="2.4" {...S({})} opacity="0.6" />
      <path d="M10 10 13.4 7.4" {...S()} />
      <circle cx="10" cy="10" r="0.9" fill="currentColor" stroke="none" />
    </g>
  ),
  /* route — journey line between points */
  route: (
    <g>
      <path d="M3 15.5c5-6 9-7.5 14-10" {...S()} />
      <circle cx="3" cy="15.5" r="1.3" {...S()} />
      <circle cx="17" cy="5.5" r="1.3" {...S()} />
    </g>
  ),
  /* gear — process / control */
  gear: (
    <g>
      <circle cx="10" cy="10" r="2.6" {...S()} />
      <path d="M10 4.6v1.8M10 13.6v1.8M4.6 10h1.8M13.6 10h1.8M6.2 6.2l1.3 1.3M12.5 12.5l1.3 1.3M13.8 6.2l-1.3 1.3M7.5 12.5l-1.3 1.3" {...S()} />
    </g>
  ),
};

export { SHAPES };

export function FlowGlyph({ name, className }: { name: GlyphName; className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {SHAPES[name]}
    </svg>
  );
}