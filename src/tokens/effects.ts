/**
 * Effects Design Tokens — Shadows, Borders, Animations
 * Generated from Figma Variables → border-radius (150 vars), border-width collections
 * File: -shadcn_ui-components-not-token--Fluke---Copy-
 * Last synced: 2026-05-09
 */

/**
 * Border radius scale.
 * @figmaVariable border-radius/rounded-* (exact px from Figma)
 * none=0, xs=2px, sm=4px, md=6px, lg=8px, xl=12px, 2xl=16px, 3xl=24px, 4xl=32px, full=9999px
 */
export const borderRadius = {
  none:    "var(--radius-none)",   /* 0px */
  xs:      "var(--radius-xs)",     /* 2px */
  sm:      "var(--radius-sm)",     /* 4px */
  DEFAULT: "var(--radius)",        /* 8px — base radius */
  md:      "var(--radius-md)",     /* 6px */
  lg:      "var(--radius-lg)",     /* 8px */
  xl:      "var(--radius-xl)",     /* 12px */
  "2xl":   "var(--radius-2xl)",    /* 16px */
  "3xl":   "var(--radius-3xl)",    /* 24px */
  "4xl":   "var(--radius-4xl)",    /* 32px */
  full:    "var(--radius-full)",   /* 9999px */
} as const;

/**
 * Shared radius scale for directional variants — all 15 direction groups × 10 sizes = 150 vars.
 * All directionals resolve to the same values as the base borderRadius scale.
 * @figmaVariable border-radius/rounded-{direction}-*
 */
const radiusScale = borderRadius;

/** rounded-s-* — start side (top-left + bottom-left in LTR) */
export const borderRadiusS  = radiusScale;
/** rounded-e-* — end side (top-right + bottom-right in LTR) */
export const borderRadiusE  = radiusScale;
/** rounded-t-* — top side (top-left + top-right) */
export const borderRadiusT  = radiusScale;
/** rounded-r-* — right side (top-right + bottom-right) */
export const borderRadiusR  = radiusScale;
/** rounded-b-* — bottom side (bottom-left + bottom-right) */
export const borderRadiusB  = radiusScale;
/** rounded-l-* — left side (top-left + bottom-left) */
export const borderRadiusL  = radiusScale;
/** rounded-ss-* — start-start corner (top-left in LTR) */
export const borderRadiusSS = radiusScale;
/** rounded-se-* — start-end corner (top-right in LTR) */
export const borderRadiusSE = radiusScale;
/** rounded-ee-* — end-end corner (bottom-right in LTR) */
export const borderRadiusEE = radiusScale;
/** rounded-es-* — end-start corner (bottom-left in LTR) */
export const borderRadiusES = radiusScale;
/** rounded-tl-* — top-left corner (physical) */
export const borderRadiusTL = radiusScale;
/** rounded-tr-* — top-right corner (physical) */
export const borderRadiusTR = radiusScale;
/** rounded-br-* — bottom-right corner (physical) */
export const borderRadiusBR = radiusScale;
/** rounded-bl-* — bottom-left corner (physical) */
export const borderRadiusBL = radiusScale;

/** Border width scale */
export const borderWidth = {
  "0":     "var(--border-width-0)",
  DEFAULT: "var(--border-width-1)",
  "1":     "var(--border-width-1)",
  "2":     "var(--border-width-2)",
  "4":     "var(--border-width-4)",
  "8":     "var(--border-width-8)",
} as const;

/** Directional border-width — all 9 directions × 5 values */
export const borderWidthX  = { "0": "var(--border-x-0)",  "1": "var(--border-x-1)",  "2": "var(--border-x-2)",  "4": "var(--border-x-4)",  "8": "var(--border-x-8)"  } as const;
export const borderWidthY  = { "0": "var(--border-y-0)",  "1": "var(--border-y-1)",  "2": "var(--border-y-2)",  "4": "var(--border-y-4)",  "8": "var(--border-y-8)"  } as const;
export const borderWidthS  = { "0": "var(--border-s-0)",  "1": "var(--border-s-1)",  "2": "var(--border-s-2)",  "4": "var(--border-s-4)",  "8": "var(--border-s-8)"  } as const;
export const borderWidthE  = { "0": "var(--border-e-0)",  "1": "var(--border-e-1)",  "2": "var(--border-e-2)",  "4": "var(--border-e-4)",  "8": "var(--border-e-8)"  } as const;
export const borderWidthT  = { "0": "var(--border-t-0)",  "1": "var(--border-t-1)",  "2": "var(--border-t-2)",  "4": "var(--border-t-4)",  "8": "var(--border-t-8)"  } as const;
export const borderWidthR  = { "0": "var(--border-r-0)",  "1": "var(--border-r-1)",  "2": "var(--border-r-2)",  "4": "var(--border-r-4)",  "8": "var(--border-r-8)"  } as const;
export const borderWidthB  = { "0": "var(--border-b-0)",  "1": "var(--border-b-1)",  "2": "var(--border-b-2)",  "4": "var(--border-b-4)",  "8": "var(--border-b-8)"  } as const;
export const borderWidthL  = { "0": "var(--border-l-0)",  "1": "var(--border-l-1)",  "2": "var(--border-l-2)",  "4": "var(--border-l-4)",  "8": "var(--border-l-8)"  } as const;

/** Box shadow / elevation scale */
export const shadows = {
  none:    "var(--shadow-none)",
  xs:      "var(--shadow-xs)",
  sm:      "var(--shadow-sm)",
  md:      "var(--shadow-md)",
  lg:      "var(--shadow-lg)",
  xl:      "var(--shadow-xl)",
  "2xl":   "var(--shadow-2xl)",
  inner:   "var(--shadow-inner)",
} as const;

/** Transition duration scale */
export const duration = {
  "75":    "var(--duration-75)",
  "100":   "var(--duration-100)",
  "150":   "var(--duration-150)",
  "200":   "var(--duration-200)",
  "300":   "var(--duration-300)",
  "500":   "var(--duration-500)",
  "700":   "var(--duration-700)",
  "1000":  "var(--duration-1000)",
  DEFAULT: "var(--duration-150)",
} as const;

/** Transition timing / easing */
export const easing = {
  linear:  "var(--easing-linear)",
  in:      "var(--easing-in)",
  out:     "var(--easing-out)",
  inOut:   "var(--easing-in-out)",
  bounce:  "var(--easing-bounce)",
  DEFAULT: "var(--easing-in-out)",
} as const;

/** Z-index layer scale */
export const zIndex = {
  dropdown: "var(--z-dropdown)",   /* 100 */
  sticky:   "var(--z-sticky)",     /* 200 */
  overlay:  "var(--z-overlay)",    /* 300 */
  modal:    "var(--z-modal)",      /* 400 */
  popover:  "var(--z-popover)",    /* 500 */
  toast:    "var(--z-toast)",      /* 600 */
  tooltip:  "var(--z-tooltip)",    /* 700 */
} as const;

/** Pre-composed transition shorthands */
export const transitions = {
  all:       `all var(--duration-150) var(--easing-in-out)`,
  colors:    `color var(--duration-150) var(--easing-in-out), background-color var(--duration-150) var(--easing-in-out), border-color var(--duration-150) var(--easing-in-out)`,
  opacity:   `opacity var(--duration-150) var(--easing-in-out)`,
  shadow:    `box-shadow var(--duration-150) var(--easing-in-out)`,
  transform: `transform var(--duration-150) var(--easing-in-out)`,
} as const;

/**
 * Stroke-width scale.
 * @figmaVariable stroke-width/stroke-*
 * Values from Figma: 0.5px → 3px in 0.25px steps
 */
export const strokeWidth = {
  "0.5":  "0.5px",
  "0.75": "0.75px",
  "1":    "1px",
  "1.25": "1.25px",
  "1.5":  "1.5px",
  "1.75": "1.75px",
  "2":    "2px",
  "2.25": "2.25px",
  "2.5":  "2.5px",
  "2.75": "2.75px",
  "3":    "3px",
} as const;

/**
 * Opacity scale.
 * @figmaVariable opacity/opacity-*
 * 0 → 100 in steps of 5
 */
export const opacity = {
  "0":   "0",
  "5":   "0.05",
  "10":  "0.1",
  "15":  "0.15",
  "20":  "0.2",
  "25":  "0.25",
  "30":  "0.3",
  "35":  "0.35",
  "40":  "0.4",
  "45":  "0.45",
  "50":  "0.5",
  "55":  "0.55",
  "60":  "0.6",
  "65":  "0.65",
  "70":  "0.7",
  "75":  "0.75",
  "80":  "0.8",
  "85":  "0.85",
  "90":  "0.9",
  "95":  "0.95",
  "100": "1",
} as const;

export type ShadowToken = typeof shadows;
export type BorderRadiusToken = typeof borderRadius;
export type DurationToken = typeof duration;
export type EasingToken = typeof easing;
export type StrokeWidthToken = typeof strokeWidth;
export type OpacityToken = typeof opacity;
