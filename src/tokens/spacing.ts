/**
 * Spacing Design Tokens
 * Source: Figma Variables → spacing/*
 * Base unit: 4px (0.25rem)
 */

export const spacing = {
  px:    "var(--space-px)",
  "0":   "var(--space-0)",
  "0.5": "var(--space-0-5)",
  "1":   "var(--space-1)",
  "1.5": "var(--space-1-5)",
  "2":   "var(--space-2)",
  "2.5": "var(--space-2-5)",
  "3":   "var(--space-3)",
  "3.5": "var(--space-3-5)",
  "4":   "var(--space-4)",
  "5":   "var(--space-5)",
  "6":   "var(--space-6)",
  "7":   "var(--space-7)",
  "8":   "var(--space-8)",
  "9":   "var(--space-9)",
  "10":  "var(--space-10)",
  "11":  "var(--space-11)",
  "12":  "var(--space-12)",
  "14":  "var(--space-14)",
  "16":  "var(--space-16)",
  "20":  "var(--space-20)",
  "24":  "var(--space-24)",
  "28":  "var(--space-28)",
  "32":  "var(--space-32)",
  "36":  "var(--space-36)",
  "40":  "var(--space-40)",
  "44":  "var(--space-44)",
  "48":  "var(--space-48)",
  "52":  "var(--space-52)",
  "56":  "var(--space-56)",
  "60":  "var(--space-60)",
  "64":  "var(--space-64)",
  "72":  "var(--space-72)",
  "80":  "var(--space-80)",
  "96":  "var(--space-96)",
} as const;

/** Named spacing aliases for semantic use */
export const spacingAlias = {
  none: "var(--space-0)",
  xs: "var(--space-1)",       /* 4px  */
  sm: "var(--space-2)",       /* 8px  */
  md: "var(--space-4)",       /* 16px */
  lg: "var(--space-6)",       /* 24px */
  xl: "var(--space-8)",       /* 32px */
  "2xl": "var(--space-12)",   /* 48px */
  "3xl": "var(--space-16)",   /* 64px */
} as const;

/** Component padding presets */
export const padding = {
  button: {
    sm: { x: "var(--space-3)", y: "var(--space-1-5)" },
    md: { x: "var(--space-4)", y: "var(--space-2)" },
    lg: { x: "var(--space-6)", y: "var(--space-3)" },
  },
  input: {
    x: "var(--space-3)",
    y: "var(--space-2)",
  },
  card: "var(--space-6)",
  dialog: "var(--space-6)",
  toast: "var(--space-4)",
  badge: { x: "var(--space-2-5)", y: "var(--space-0-5)" },
  nav: { x: "var(--space-3)", y: "var(--space-2)" },
} as const;

/**
 * Shared directional spacing scale — 35 values aliasing to --space-* CSS vars.
 * Used by padding and margin collections (both alias the same space variables).
 * @figmaVariable padding/* and margin/* → space collection aliases
 */
const directionalScale = {
  px:    "var(--space-px)",   /* 1px   */
  "0":   "var(--space-0)",    /* 0px   */
  "0.5": "var(--space-0-5)",  /* 2px   */
  "1":   "var(--space-1)",    /* 4px   */
  "1.5": "var(--space-1-5)",  /* 6px   */
  "2":   "var(--space-2)",    /* 8px   */
  "2.5": "var(--space-2-5)",  /* 10px  */
  "3":   "var(--space-3)",    /* 12px  */
  "3.5": "var(--space-3-5)",  /* 14px  */
  "4":   "var(--space-4)",    /* 16px  */
  "5":   "var(--space-5)",    /* 20px  */
  "6":   "var(--space-6)",    /* 24px  */
  "7":   "var(--space-7)",    /* 28px  */
  "8":   "var(--space-8)",    /* 32px  */
  "9":   "var(--space-9)",    /* 36px  */
  "10":  "var(--space-10)",   /* 40px  */
  "11":  "var(--space-11)",   /* 44px  */
  "12":  "var(--space-12)",   /* 48px  */
  "14":  "var(--space-14)",   /* 56px  */
  "16":  "var(--space-16)",   /* 64px  */
  "20":  "var(--space-20)",   /* 80px  */
  "24":  "var(--space-24)",   /* 96px  */
  "28":  "var(--space-28)",   /* 112px */
  "32":  "var(--space-32)",   /* 128px */
  "36":  "var(--space-36)",   /* 144px */
  "40":  "var(--space-40)",   /* 160px */
  "44":  "var(--space-44)",   /* 176px */
  "48":  "var(--space-48)",   /* 192px */
  "52":  "var(--space-52)",   /* 208px */
  "56":  "var(--space-56)",   /* 224px */
  "60":  "var(--space-60)",   /* 240px */
  "64":  "var(--space-64)",   /* 256px */
  "72":  "var(--space-72)",   /* 288px */
  "80":  "var(--space-80)",   /* 320px */
  "96":  "var(--space-96)",   /* 384px */
} as const;

/** @figmaVariable padding/p-* — all sides */
export const p  = directionalScale;
/** @figmaVariable padding/px-* — horizontal */
export const px = directionalScale;
/** @figmaVariable padding/py-* — vertical */
export const py = directionalScale;
/** @figmaVariable padding/pt-* — top */
export const pt = directionalScale;
/** @figmaVariable padding/pr-* — right */
export const pr = directionalScale;
/** @figmaVariable padding/pb-* — bottom */
export const pb = directionalScale;
/** @figmaVariable padding/pl-* — left */
export const pl = directionalScale;

/** @figmaVariable margin/m-* — all sides */
export const m  = directionalScale;
/** @figmaVariable margin/mx-* — horizontal */
export const mx = directionalScale;
/** @figmaVariable margin/my-* — vertical */
export const my = directionalScale;
/** @figmaVariable margin/mt-* — top */
export const mt = directionalScale;
/** @figmaVariable margin/mr-* — right */
export const mr = directionalScale;
/** @figmaVariable margin/mb-* — bottom */
export const mb = directionalScale;
/** @figmaVariable margin/ml-* — left */
export const ml = directionalScale;

const gapScale = {
  px:    "var(--space-px)",
  "0":   "var(--space-0)",
  "0.5": "var(--space-0-5)",
  "1":   "var(--space-1)",
  "1.5": "var(--space-1-5)",
  "2":   "var(--space-2)",
  "2.5": "var(--space-2-5)",
  "3":   "var(--space-3)",
  "3.5": "var(--space-3-5)",
  "4":   "var(--space-4)",
  "5":   "var(--space-5)",
  "6":   "var(--space-6)",
  "7":   "var(--space-7)",
  "8":   "var(--space-8)",
  "9":   "var(--space-9)",
  "10":  "var(--space-10)",
  "11":  "var(--space-11)",
  "12":  "var(--space-12)",
  "14":  "var(--space-14)",
  "16":  "var(--space-16)",
  "20":  "var(--space-20)",
  "24":  "var(--space-24)",
  "28":  "var(--space-28)",
  "32":  "var(--space-32)",
  "36":  "var(--space-36)",
  "40":  "var(--space-40)",
  "44":  "var(--space-44)",
  "48":  "var(--space-48)",
  "52":  "var(--space-52)",
  "56":  "var(--space-56)",
  "60":  "var(--space-60)",
  "64":  "var(--space-64)",
  "72":  "var(--space-72)",
  "80":  "var(--space-80)",
  "96":  "var(--space-96)",
} as const;

/** Gap scale (gap-*) — @figmaVariable gap/gap-* */
export const gap = gapScale;

/** Gap X scale (gap-x-*) — @figmaVariable gap/gap-x-* */
export const gapX = gapScale;

/** Gap Y scale (gap-y-*) — @figmaVariable gap/gap-y-* */
export const gapY = gapScale;

export type SpacingToken = typeof spacing;
export type SpacingKey = keyof SpacingToken;
export type GapToken = typeof gap;
export type DirectionalScale = typeof directionalScale;
