/**
 * Typography Design Tokens
 * Generated from Figma Variables → font collection
 * File: -shadcn_ui-components-not-token--Fluke---Copy-
 * Last synced: 2026-05-09
 *
 * @figmaVariable font/family/sans → Inter
 * @figmaVariable font/family/mono → Geist Mono
 */

export const typography = {
  fontFamily: {
    /** @figmaVariable font/family/sans → "Inter" */
    sans: "var(--font-sans)",
    /** @figmaVariable font/family/mono → "Geist Mono" */
    mono: "var(--font-mono)",
    serif: "var(--font-serif)",
  },

  /**
   * Font size scale with paired line heights.
   * @figmaVariable font/size/* (px values from Figma, converted to rem)
   */
  fontSize: {
    xs:   ["var(--text-xs)",   { lineHeight: "var(--leading-4)" }],   /* 12px / 16px */
    sm:   ["var(--text-sm)",   { lineHeight: "var(--leading-5)" }],   /* 14px / 20px */
    base: ["var(--text-base)", { lineHeight: "var(--leading-6)" }],   /* 16px / 24px */
    lg:   ["var(--text-lg)",   { lineHeight: "var(--leading-7)" }],   /* 18px / 28px */
    xl:   ["var(--text-xl)",   { lineHeight: "var(--leading-7)" }],   /* 20px / 28px */
    "2xl":["var(--text-2xl)",  { lineHeight: "var(--leading-8)" }],   /* 24px / 32px */
    "3xl":["var(--text-3xl)",  { lineHeight: "var(--leading-9)" }],   /* 30px / 36px */
    "4xl":["var(--text-4xl)",  { lineHeight: "var(--leading-10)" }],  /* 36px / 40px */
    "5xl":["var(--text-5xl)",  { lineHeight: "var(--leading-none)" }],/* 48px */
    "6xl":["var(--text-6xl)",  { lineHeight: "var(--leading-none)" }],/* 60px */
    "7xl":["var(--text-7xl)",  { lineHeight: "var(--leading-none)" }],/* 72px */
    "8xl":["var(--text-8xl)",  { lineHeight: "var(--leading-none)" }],/* 96px */
    "9xl":["var(--text-9xl)",  { lineHeight: "var(--leading-none)" }],/* 128px */
  } as Record<string, [string, { lineHeight: string }]>,

  /** @figmaVariable font/weight/* */
  fontWeight: {
    thin:       "var(--font-thin)",
    extralight: "var(--font-extralight)",
    light:      "var(--font-light)",
    normal:     "var(--font-normal)",
    medium:     "var(--font-medium)",
    semibold:   "var(--font-semibold)",
    bold:       "var(--font-bold)",
    extrabold:  "var(--font-extrabold)",
    black:      "var(--font-black)",
  },

  /**
   * Line height scale (named + numeric).
   * @figmaVariable font/leading/* (px values from Figma)
   */
  lineHeight: {
    "3":      "var(--leading-3)",      /* 12px */
    "4":      "var(--leading-4)",      /* 16px */
    "5":      "var(--leading-5)",      /* 20px */
    "6":      "var(--leading-6)",      /* 24px */
    "7":      "var(--leading-7)",      /* 28px */
    "8":      "var(--leading-8)",      /* 32px */
    "9":      "var(--leading-9)",      /* 36px */
    "10":     "var(--leading-10)",     /* 40px */
    none:     "var(--leading-none)",
    tight:    "var(--leading-tight)",
    snug:     "var(--leading-snug)",
    normal:   "var(--leading-normal)",
    relaxed:  "var(--leading-relaxed)",
    loose:    "var(--leading-loose)",
  },

  /**
   * Letter spacing.
   * @figmaVariable font/tracking/* (px values from Figma, converted to em)
   * tighter: -0.8px, tight: -0.4px, normal: 0, wide: 0.4px, wider: 0.8px, widest: 1.6px
   */
  letterSpacing: {
    tighter: "var(--tracking-tighter)",
    tight:   "var(--tracking-tight)",
    normal:  "var(--tracking-normal)",
    wide:    "var(--tracking-wide)",
    wider:   "var(--tracking-wider)",
    widest:  "var(--tracking-widest)",
  },

  /** @figmaVariable font/style/italic, font/style/not-italic */
  fontStyle: {
    italic:    "italic",
    notItalic: "normal",
  },
} as const;

/** Pre-composed text style presets matching Figma text styles */
export const textStyles = {
  "heading-2xl": {
    fontSize: "var(--text-6xl)",
    fontWeight: "var(--font-bold)",
    lineHeight: "var(--leading-none)",
    letterSpacing: "var(--tracking-tight)",
    fontFamily: "var(--font-sans)",
  },
  "heading-xl": {
    fontSize: "var(--text-5xl)",
    fontWeight: "var(--font-bold)",
    lineHeight: "var(--leading-none)",
    letterSpacing: "var(--tracking-tight)",
    fontFamily: "var(--font-sans)",
  },
  "heading-lg": {
    fontSize: "var(--text-4xl)",
    fontWeight: "var(--font-semibold)",
    lineHeight: "var(--leading-10)",
    letterSpacing: "var(--tracking-tight)",
    fontFamily: "var(--font-sans)",
  },
  "heading-md": {
    fontSize: "var(--text-3xl)",
    fontWeight: "var(--font-semibold)",
    lineHeight: "var(--leading-9)",
    letterSpacing: "var(--tracking-tight)",
    fontFamily: "var(--font-sans)",
  },
  "heading-sm": {
    fontSize: "var(--text-2xl)",
    fontWeight: "var(--font-semibold)",
    lineHeight: "var(--leading-8)",
    letterSpacing: "var(--tracking-normal)",
    fontFamily: "var(--font-sans)",
  },
  "heading-xs": {
    fontSize: "var(--text-xl)",
    fontWeight: "var(--font-semibold)",
    lineHeight: "var(--leading-7)",
    letterSpacing: "var(--tracking-normal)",
    fontFamily: "var(--font-sans)",
  },
  "body-lg": {
    fontSize: "var(--text-lg)",
    fontWeight: "var(--font-normal)",
    lineHeight: "var(--leading-7)",
    letterSpacing: "var(--tracking-normal)",
    fontFamily: "var(--font-sans)",
  },
  "body-md": {
    fontSize: "var(--text-base)",
    fontWeight: "var(--font-normal)",
    lineHeight: "var(--leading-6)",
    letterSpacing: "var(--tracking-normal)",
    fontFamily: "var(--font-sans)",
  },
  "body-sm": {
    fontSize: "var(--text-sm)",
    fontWeight: "var(--font-normal)",
    lineHeight: "var(--leading-5)",
    letterSpacing: "var(--tracking-normal)",
    fontFamily: "var(--font-sans)",
  },
  "body-xs": {
    fontSize: "var(--text-xs)",
    fontWeight: "var(--font-normal)",
    lineHeight: "var(--leading-4)",
    letterSpacing: "var(--tracking-normal)",
    fontFamily: "var(--font-sans)",
  },
  "label-md": {
    fontSize: "var(--text-sm)",
    fontWeight: "var(--font-medium)",
    lineHeight: "var(--leading-none)",
    letterSpacing: "var(--tracking-wide)",
    fontFamily: "var(--font-sans)",
  },
  "label-sm": {
    fontSize: "var(--text-xs)",
    fontWeight: "var(--font-medium)",
    lineHeight: "var(--leading-none)",
    letterSpacing: "var(--tracking-wide)",
    fontFamily: "var(--font-sans)",
  },
  "code-md": {
    fontSize: "var(--text-sm)",
    fontWeight: "var(--font-normal)",
    lineHeight: "var(--leading-relaxed)",
    letterSpacing: "var(--tracking-normal)",
    fontFamily: "var(--font-mono)",
  },
  "code-sm": {
    fontSize: "var(--text-xs)",
    fontWeight: "var(--font-normal)",
    lineHeight: "var(--leading-relaxed)",
    letterSpacing: "var(--tracking-normal)",
    fontFamily: "var(--font-mono)",
  },
} as const;

export type TypographyToken = typeof typography;
export type TextStyleKey = keyof typeof textStyles;
