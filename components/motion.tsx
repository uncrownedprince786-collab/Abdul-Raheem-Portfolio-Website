"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Shared motion primitives for "The Dispatch Room".
 * All entry animations: fade + rise, springy but calm.
 * Honors prefers-reduced-motion globally (framer-motion does this for
 * converted transform/opacity springs; we also guard durations manually).
 */

const EASE = [0.16, 1, 0.3, 1] as const;

export function useReduced() {
  return useReducedMotion();
}

export const rise: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export const fade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "li" | "article" | "span" | "header" | "footer";
  id?: string;
};

export function Reveal({ children, className, delay = 0, y = 26, as = "div", id }: RevealProps) {
  const reduced = useReduced();
  const Comp = motion[as];
  return (
    <Comp
      id={id}
      className={className}
      initial={reduced ? { opacity: 1 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px 0px -48px 0px" }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </Comp>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
};

export function Stagger({ children, className, staggerDelay = 0.08 }: StaggerProps) {
  const reduced = useReduced();
  return (
    <motion.div
      className={className}
      initial={reduced ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-64px 0px -48px 0px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay, delayChildren: 0.05 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  const reduced = useReduced();
  return (
    <motion.div
      className={className}
      variants={
        reduced
          ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
          : {
              hidden: { opacity: 0, y: 22 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.65, ease: EASE },
              },
            }
      }
    >
      {children}
    </motion.div>
  );
}