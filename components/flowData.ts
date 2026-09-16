import type { GlyphName } from "./FlowGlyph";

export type FlowNode = { label: string; glyph: GlyphName };
export type FlowConfig = { id: string; name: string; ys: number[]; nodes: FlowNode[] };

/**
 * System plates for the six majors + DG Cars + WordPress.
 * Node sequences mirror the shipped system flows in PROJECTS_DATA —
 * nothing invented beyond what the project actually did.
 */

export const FLOWS: Record<string, FlowConfig> = {
  "shorex-recycling": {
    id: "shorex",
    name: "Circular logistics flow",
    ys: [58, 40, 58, 40],
    nodes: [
      { label: "Request", glyph: "ingress" },
      { label: "Inventory", glyph: "warehouse" },
      { label: "Dispatch", glyph: "truck" },
      { label: "Collection", glyph: "reward" },
    ],
  },
  "lms-ai-chatbot": {
    id: "lms",
    name: "Guardrailed AI flow",
    ys: [40, 58, 40, 58],
    nodes: [
      { label: "Student", glyph: "student" },
      { label: "Question", glyph: "question" },
      { label: "AI Guardrail", glyph: "gate" },
      { label: "Verified Answer", glyph: "check" },
    ],
  },
  "ai-marketplace-scraper": {
    id: "scraper",
    name: "Data intelligence flow",
    ys: [42, 60, 42, 60, 42],
    nodes: [
      { label: "Source", glyph: "source" },
      { label: "Extract", glyph: "funnel" },
      { label: "Normalize", glyph: "normalize" },
      { label: "Verify", glyph: "verify" },
      { label: "Data", glyph: "data" },
    ],
  },
  "rental-saas-dashboard": {
    id: "rental",
    name: "Rental operations flow",
    ys: [58, 40, 58, 40],
    nodes: [
      { label: "Equipment", glyph: "machine" },
      { label: "Rental", glyph: "contract" },
      { label: "Return", glyph: "return" },
      { label: "Billing", glyph: "card" },
    ],
  },
  "ecommerce-order-platform": {
    id: "ecommerce",
    name: "Order lifecycle flow",
    ys: [40, 58, 40, 58],
    nodes: [
      { label: "Order", glyph: "basket" },
      { label: "Inventory", glyph: "warehouse" },
      { label: "Payment", glyph: "card" },
      { label: "Shipping", glyph: "box" },
    ],
  },
  "chrome-extension-suite": {
    id: "chrome",
    name: "Browser workflow flow",
    ys: [58, 40, 58, 40],
    nodes: [
      { label: "Browser", glyph: "browser" },
      { label: "Extension", glyph: "plug" },
      { label: "Data", glyph: "data" },
      { label: "Workflow", glyph: "link" },
    ],
  },
  "dgcars": {
    id: "dgcars",
    name: "Mobility dispatch flow",
    ys: [40, 58, 40, 58],
    nodes: [
      { label: "Ride Request", glyph: "pin" },
      { label: "Dispatch", glyph: "radar" },
      { label: "Trip", glyph: "route" },
      { label: "Settlement", glyph: "card" },
    ],
  },
  "custom-wordpress-plugins": {
    id: "wordpress",
    name: "Plugin build flow",
    ys: [58, 40, 58, 40],
    nodes: [
      { label: "Scoping", glyph: "scope" },
      { label: "Module", glyph: "module" },
      { label: "Gate", glyph: "gate" },
      { label: "Shipment", glyph: "box" },
    ],
  },
};

export const FLOW_ORDER = [
  "shorex-recycling",
  "lms-ai-chatbot",
  "ai-marketplace-scraper",
  "rental-saas-dashboard",
  "ecommerce-order-platform",
  "chrome-extension-suite",
  "dgcars",
  "custom-wordpress-plugins",
] as const;