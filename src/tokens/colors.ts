/**
 * Color Design Tokens
 * Generated from Figma Variables → Shadcn/ui collection
 * File: -shadcn_ui-components-not-token--Fluke---Copy-
 * Theme: Shadcn/ui "neutral"
 * Last synced: 2026-05-09
 */

/**
 * Semantic color tokens — exact values from Figma.
 * All colors expressed as hsl(var(--token)) for Tailwind/CSS compatibility.
 */
export const colors = {
  /** @figmaVariable Shadcn/ui/background → white (#ffffff) */
  background: "hsl(var(--background))",

  /** @figmaVariable Shadcn/ui/foreground → neutral/950 (#0a0a0a) */
  foreground: "hsl(var(--foreground))",

  /** @figmaVariable Shadcn/ui/card → white (#ffffff) */
  card: {
    DEFAULT: "hsl(var(--card))",
    foreground: "hsl(var(--card-foreground))",
  },

  /** @figmaVariable Shadcn/ui/popover → white (#ffffff) */
  popover: {
    DEFAULT: "hsl(var(--popover))",
    foreground: "hsl(var(--popover-foreground))",
  },

  /**
   * @figmaVariable Shadcn/ui/primary → neutral/900 (#171717)
   * @figmaVariable Shadcn/ui/primary-foreground → neutral/50 (#fafafa)
   * @wcag 14.7:1 AAA
   */
  primary: {
    DEFAULT: "hsl(var(--primary))",
    foreground: "hsl(var(--primary-foreground))",
    hover: "hsl(var(--primary-hover))",
    active: "hsl(var(--primary-active))",
    disabled: "hsl(var(--primary-disabled))",
  },

  /**
   * @figmaVariable Shadcn/ui/secondary → neutral/100 (#f5f5f5)
   * @figmaVariable Shadcn/ui/secondary-foreground → neutral/950 (#0a0a0a)
   */
  secondary: {
    DEFAULT: "hsl(var(--secondary))",
    foreground: "hsl(var(--secondary-foreground))",
    hover: "hsl(var(--secondary-hover))",
    active: "hsl(var(--secondary-active))",
    disabled: "hsl(var(--secondary-disabled))",
  },

  /**
   * @figmaVariable Shadcn/ui/muted → neutral/100 (#f5f5f5)
   * @figmaVariable Shadcn/ui/muted-foreground → neutral/500 (#737373)
   */
  muted: {
    DEFAULT: "hsl(var(--muted))",
    foreground: "hsl(var(--muted-foreground))",
  },

  /**
   * @figmaVariable Shadcn/ui/accent → neutral/100 (#f5f5f5)
   * @figmaVariable Shadcn/ui/accent-foreground → neutral/900 (#171717)
   */
  accent: {
    DEFAULT: "hsl(var(--accent))",
    foreground: "hsl(var(--accent-foreground))",
    hover: "hsl(var(--accent-hover))",
    active: "hsl(var(--accent-active))",
  },

  /**
   * @figmaVariable Shadcn/ui/destructive → red/600 (#dc2626)
   * @wcag 4.58:1 AA on white
   */
  destructive: {
    DEFAULT: "hsl(var(--destructive))",
    foreground: "hsl(var(--destructive-foreground))",
    hover: "hsl(var(--destructive-hover))",
    active: "hsl(var(--destructive-active))",
    disabled: "hsl(var(--destructive-disabled))",
  },

  /** @figmaVariable Shadcn/ui/border → neutral/200 (#e5e5e5) */
  border: "hsl(var(--border))",

  /** @figmaVariable Shadcn/ui/input → neutral/200 (#e5e5e5) */
  input: "hsl(var(--input))",

  /** @figmaVariable Shadcn/ui/ring → neutral/500 (#737373) */
  ring: "hsl(var(--ring))",

  /** Sidebar tokens — @figmaVariable Shadcn/ui/sidebar-* */
  sidebar: {
    DEFAULT: "hsl(var(--sidebar))",
    foreground: "hsl(var(--sidebar-foreground))",
    primary: "hsl(var(--sidebar-primary))",
    primaryForeground: "hsl(var(--sidebar-primary-foreground))",
    accent: "hsl(var(--sidebar-accent))",
    accentForeground: "hsl(var(--sidebar-accent-foreground))",
    border: "hsl(var(--sidebar-border))",
    ring: "hsl(var(--sidebar-ring))",
  },

  /** Chart colors — @figmaVariable Shadcn/ui/chart-* (Radix blue scale) */
  chart: {
    "1": "hsl(var(--chart-1))",  /* #5eb1ef — blue/8  */
    "2": "hsl(var(--chart-2))",  /* #0090ff — blue/9  */
    "3": "hsl(var(--chart-3))",  /* #0588f0 — blue/10 */
    "4": "hsl(var(--chart-4))",  /* #0d74ce — blue/11 */
    "5": "hsl(var(--chart-5))",  /* #113264 — blue/12 */
  },

  /**
   * Semantic custom tokens — @figmaVariable Shadcn/ui/semantic-*
   * warm gray tone (#696867 / #898887)
   */
  semantic: {
    background: "hsl(var(--semantic-background))",
    border: "hsl(var(--semantic-border))",
    foreground: "hsl(var(--semantic-foreground))",
  },

  /** Neutral raw scale — @figmaVariable tw/colors/neutral/* */
  neutral: {
    "50": "hsl(var(--neutral-50))",
    "100": "hsl(var(--neutral-100))",
    "200": "hsl(var(--neutral-200))",
    "300": "hsl(var(--neutral-300))",
    "400": "hsl(var(--neutral-400))",
    "500": "hsl(var(--neutral-500))",
    "600": "hsl(var(--neutral-600))",
    "700": "hsl(var(--neutral-700))",
    "800": "hsl(var(--neutral-800))",
    "900": "hsl(var(--neutral-900))",
    "950": "hsl(var(--neutral-950))",
  },
} as const;

export type ColorToken = typeof colors;
export type ColorKey = keyof ColorToken;

/** Raw HSL variable references (no hsl() wrapper) — for CSS-in-JS opacity modifiers */
export const colorVars = {
  background: "var(--background)",
  foreground: "var(--foreground)",
  card: "var(--card)",
  cardForeground: "var(--card-foreground)",
  popover: "var(--popover)",
  popoverForeground: "var(--popover-foreground)",
  primary: "var(--primary)",
  primaryForeground: "var(--primary-foreground)",
  secondary: "var(--secondary)",
  secondaryForeground: "var(--secondary-foreground)",
  muted: "var(--muted)",
  mutedForeground: "var(--muted-foreground)",
  accent: "var(--accent)",
  accentForeground: "var(--accent-foreground)",
  destructive: "var(--destructive)",
  destructiveForeground: "var(--destructive-foreground)",
  border: "var(--border)",
  input: "var(--input)",
  ring: "var(--ring)",
  sidebar: "var(--sidebar)",
  sidebarForeground: "var(--sidebar-foreground)",
  sidebarPrimary: "var(--sidebar-primary)",
  sidebarPrimaryForeground: "var(--sidebar-primary-foreground)",
  sidebarAccent: "var(--sidebar-accent)",
  sidebarAccentForeground: "var(--sidebar-accent-foreground)",
  sidebarBorder: "var(--sidebar-border)",
  sidebarRing: "var(--sidebar-ring)",
  chart1: "var(--chart-1)",
  chart2: "var(--chart-2)",
  chart3: "var(--chart-3)",
  chart4: "var(--chart-4)",
  chart5: "var(--chart-5)",
  semanticBackground: "var(--semantic-background)",
  semanticBorder: "var(--semantic-border)",
  semanticForeground: "var(--semantic-foreground)",
} as const;

/**
 * Hex values — direct Figma source values, zero transformation.
 * Use for documentation, accessibility checks, or non-CSS contexts.
 */
export const colorHex = {
  background: "#ffffff",
  foreground: "#0a0a0a",
  card: "#ffffff",
  cardForeground: "#0a0a0a",
  popover: "#ffffff",
  popoverForeground: "#0a0a0a",
  primary: "#171717",
  primaryForeground: "#fafafa",
  secondary: "#f5f5f5",
  secondaryForeground: "#0a0a0a",
  muted: "#f5f5f5",
  mutedForeground: "#737373",
  accent: "#f5f5f5",
  accentForeground: "#171717",
  destructive: "#dc2626",
  destructiveForeground: "#fafafa",
  border: "#e5e5e5",
  input: "#e5e5e5",
  ring: "#737373",
  sidebar: "#fafafa",
  sidebarForeground: "#0a0a0a",
  sidebarPrimary: "#171717",
  sidebarPrimaryForeground: "#fafafa",
  sidebarAccent: "#f5f5f5",
  sidebarAccentForeground: "#171717",
  sidebarBorder: "#e5e5e5",
  sidebarRing: "#737373",
  chart1: "#5eb1ef",
  chart2: "#0090ff",
  chart3: "#0588f0",
  chart4: "#0d74ce",
  chart5: "#113264",
  semanticBackground: "#696867",
  semanticBorder: "#898887",
  semanticForeground: "#ffffff",
  overlay: "rgba(0, 0, 0, 0.3)",
} as const;
