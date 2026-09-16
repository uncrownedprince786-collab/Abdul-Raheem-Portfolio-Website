"use client";

import { useId, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FlowGlyph } from "./FlowGlyph";
import type { FlowConfig } from "./flowData";

const VIEW_W = 1000;
const VIEW_H = 380;

/** x position (%) of node i across the plate */
function xFor(i: number, n: number) {
  return 8 + ((92 - 8) * i) / Math.max(1, n - 1);
}

/** smooth constraint-free route between two node centres */
function routePath(x1: number, y1: number, x2: number, y2: number) {
  const dx = x2 - x1;
  const mx = x1 + dx * 0.5;
  return `M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`;
}

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function FlowPlate({
  config,
  className = "",
}: {
  config: FlowConfig;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const gridId = useId();
  const [hover, setHover] = useState<number | null>(null);

  const n = config.nodes.length;
  const last = n - 1;

  const positions = config.nodes.map((_, i) => ({
    x: xFor(i, n),
    y: config.ys[i],
  }));

  const edges = positions.slice(1).map((p, i) => ({
    from: positions[i],
    to: p,
    d: routePath(
      (positions[i].x / 100) * VIEW_W,
      (positions[i].y / 100) * VIEW_H,
      (p.x / 100) * VIEW_W,
      (p.y / 100) * VIEW_H
    ),
    tokenDurations: [3.2, 2.4],
  }));

  return (
    <motion.div
      initial={reduced ? { opacity: 1 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px 0px" }}
      transition={{ duration: 0.7, ease: EASE }}
      className={`relative aspect-[1000/420] w-full overflow-hidden border border-line bg-plate lg:aspect-[1000/380] ${className}`}
    >
      {/* Drafting field */}
      <div aria-hidden="true" className="plate-grid pointer-events-none absolute inset-0" />

      {/* SVG layer — routes + tokens */}
      <svg
        aria-hidden="true"
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <pattern id={gridId} width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="rgba(240,233,218,0.045)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width={VIEW_W} height={VIEW_H} fill={`url(#${gridId})`} />

        {/* Routes */}
        {edges.map((e, i) => {
          const dimmed = hover !== null && (hover === i || hover === i + 1) ? false : hover === null ? false : true;
          return (
            <g key={i} opacity={dimmed ? 0.35 : 1} style={{ transition: "opacity 0.3s" }}>
              {/* track */}
              <motion.path
                d={e.d}
                fill="none"
                stroke="rgba(240,233,218,0.16)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
                initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-40px 0px" }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.25 + i * 0.15 }}
              />
              {/* dashed pass line */}
              <path
                d={e.d}
                fill="none"
                stroke="rgba(240,233,218,0.5)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
                strokeDasharray="2 10"
                style={{ animation: "dash-march 1.4s linear infinite", animationDelay: `${i * 0.35}s` }}
              />
              {!reduced &&
                e.tokenDurations.map((dur, t) => (
                  <motion.circle
                    key={t}
                    r="3.4"
                    fill="#b9ef5f"
                    initial={{ offsetPath: `path('${e.d}')`, offsetDistance: "0%", opacity: 0 }}
                    animate={
                      hover !== null && (hover === i || hover === i + 1)
                        ? { offsetDistance: ["0%", "100%"], opacity: [0, 1, 1, 0] }
                        : { offsetDistance: ["0%", "100%"], opacity: [0, 1, 1, 0] }
                    }
                    transition={{
                      offsetDistance: { duration: dur, ease: "linear", repeat: Infinity, delay: t * dur * 0.5 },
                      opacity: { duration: dur, ease: "linear", repeat: Infinity, delay: t * dur * 0.5 },
                    }}
                    style={{ offsetPath: `path('${e.d}')` }}
                  />
                ))}
            </g>
          );
        })}

        {/* end port */}
        <motion.circle
          cx={(positions[last].x / 100) * VIEW_W}
          cy={(positions[last].y / 100) * VIEW_H}
          r="4"
          fill="none"
          stroke="#b9ef5f"
          strokeWidth="1.2"
          strokeDasharray="3 5"
          style={{ animation: "spin-slow 8s linear infinite" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
        />
      </svg>

      {/* Node chips */}
      {config.nodes.map((node, i) => {
        const isResult = i === last;
        const pos = positions[i];
        const active = hover === i;
        const dimmed = hover !== null && !active;
        return (
          <motion.div
            key={i}
            initial={reduced ? { opacity: 1 } : { opacity: 0.96, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px 0px" }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.28 + i * 0.08 }}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            className={`flow-chip absolute z-10 flex -translate-x-1/2 -translate-y-1/2 cursor-default flex-col items-center gap-1.5 border bg-ink px-3 py-2 transition-all duration-300 hover:scale-[1.04] sm:px-3.5 sm:py-2.5 ${
              isResult
                ? active
                  ? "border-acid bg-ink-2"
                  : dimmed
                    ? "border-acid/30 bg-ink opacity-40"
                    : "border-acid/70 bg-ink-2"
                : active
                  ? "border-acid bg-ink-2"
                  : dimmed
                    ? "border-line bg-ink opacity-40"
                    : "border-line bg-ink/80"
            }`}
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
          >
            <span className="pointer-events-none flex items-center gap-2">
              <FlowGlyph
                name={node.glyph}
                className={`h-4 w-4 shrink-0 transition-colors duration-300 sm:h-[18px] sm:w-[18px] ${
                  active || isResult ? "text-acid" : "text-ash"
                }`}
              />
            </span>
            <span
              className={`pointer-events-none text-center text-[8px] font-medium uppercase tracking-[0.12em] sm:text-[9px] ${
                active ? "text-paper" : "text-fawn/90"
              }`}
            >
              {node.label}
            </span>
            {isResult && (
              <span
                aria-hidden="true"
                className={`blink-dot absolute -right-1 -top-1 h-1.5 w-1.5 rounded-full bg-acid ${
                  reduced ? "" : ""
                }`}
                style={reduced ? { animation: "none" } : undefined}
              />
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
}