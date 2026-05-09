/**
 * Token Utility Functions
 * Helpers for consuming design tokens in components and configs.
 */

import { colors, colorVars } from "../tokens/colors";
import { shadows, borderRadius, duration, easing } from "../tokens/effects";

/**
 * Returns a CSS variable reference for a given token path.
 * Resolves dot-notation paths like "primary.hover".
 *
 * @example
 * token("primary.hover") // => "var(--primary-hover)"
 * token("radius.lg")     // => "var(--radius-lg)"
 */
export function token(path: string): string {
  const cssVar = "--" + path.replace(/\./g, "-");
  return `var(${cssVar})`;
}

/**
 * Returns an hsl() value wrapping a CSS variable.
 * Use when you need to apply opacity modifiers.
 *
 * @example
 * hsl("primary")           // => "hsl(var(--primary))"
 * hsl("primary", 0.5)      // => "hsl(var(--primary) / 0.5)"
 */
export function hsl(varName: string, alpha?: number): string {
  const ref = `var(--${varName})`;
  return alpha !== undefined ? `hsl(${ref} / ${alpha})` : `hsl(${ref})`;
}

/**
 * Generates a CSS transition string from token values.
 *
 * @example
 * transition("color", "150", "in-out")
 * // => "color 150ms cubic-bezier(0.4, 0, 0.2, 1)"
 */
export function transition(
  properties: string | string[],
  durationKey: keyof typeof duration = "150",
  easingKey: keyof typeof easing = "inOut"
): string {
  const props = Array.isArray(properties) ? properties : [properties];
  const dur = duration[durationKey];
  const ease = easing[easingKey];
  return props.map((p) => `${p} ${dur} ${ease}`).join(", ");
}

/**
 * Returns a Tailwind-compatible class string for a given color variant.
 *
 * @example
 * colorClass("bg", "primary") // => "bg-primary"
 * colorClass("text", "muted-foreground") // => "text-muted-foreground"
 */
export function colorClass(prefix: "bg" | "text" | "border" | "ring", colorName: string): string {
  return `${prefix}-${colorName}`;
}

/**
 * Maps a semantic status to the correct color token group.
 */
type Status = "success" | "warning" | "error" | "info" | "default";

export function statusColor(status: Status): {
  bg: string;
  text: string;
  border: string;
} {
  const map: Record<Status, { bg: string; text: string; border: string }> = {
    success: {
      bg: hsl("success-muted"),
      text: hsl("success-muted-foreground"),
      border: hsl("success", 0.3),
    },
    warning: {
      bg: hsl("warning-muted"),
      text: hsl("warning-muted-foreground"),
      border: hsl("warning", 0.3),
    },
    error: {
      bg: hsl("destructive", 0.1),
      text: hsl("destructive"),
      border: hsl("destructive", 0.3),
    },
    info: {
      bg: hsl("info-muted"),
      text: hsl("info-muted-foreground"),
      border: hsl("info", 0.3),
    },
    default: {
      bg: hsl("muted"),
      text: hsl("muted-foreground"),
      border: hsl("border"),
    },
  };
  return map[status];
}

/**
 * Generates a Tailwind CSS config `theme.extend` object from the design tokens.
 * Reflects exact Figma values (neutral theme, Inter + Geist Mono, Radix-based charts).
 *
 * @example
 * // tailwind.config.ts
 * import { tailwindTheme } from "@/lib/token-utils";
 * export default { theme: { extend: tailwindTheme() } };
 */
export function tailwindTheme() {
  return {
    colors: {
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
        hover: "hsl(var(--primary-hover))",
        active: "hsl(var(--primary-active))",
        disabled: "hsl(var(--primary-disabled))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
        hover: "hsl(var(--secondary-hover))",
        active: "hsl(var(--secondary-active))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
        hover: "hsl(var(--accent-hover))",
        active: "hsl(var(--accent-active))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
      sidebar: {
        DEFAULT: "hsl(var(--sidebar))",
        foreground: "hsl(var(--sidebar-foreground))",
        primary: "hsl(var(--sidebar-primary))",
        "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
        accent: "hsl(var(--sidebar-accent))",
        "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
        border: "hsl(var(--sidebar-border))",
        ring: "hsl(var(--sidebar-ring))",
      },
      "chart-1": "hsl(var(--chart-1))",
      "chart-2": "hsl(var(--chart-2))",
      "chart-3": "hsl(var(--chart-3))",
      "chart-4": "hsl(var(--chart-4))",
      "chart-5": "hsl(var(--chart-5))",
    },
    borderRadius: {
      none: "var(--radius-none)",
      xs:   "var(--radius-xs)",
      sm:   "var(--radius-sm)",
      md:   "var(--radius-md)",
      DEFAULT: "var(--radius)",
      lg:   "var(--radius-lg)",
      xl:   "var(--radius-xl)",
      "2xl": "var(--radius-2xl)",
      "3xl": "var(--radius-3xl)",
      "4xl": "var(--radius-4xl)",
      full: "var(--radius-full)",
    },
    fontFamily: {
      sans: ["var(--font-sans)"],
      mono: ["var(--font-mono)"],
      serif: ["var(--font-serif)"],
    },
    boxShadow: {
      xs: "var(--shadow-xs)",
      sm: "var(--shadow-sm)",
      md: "var(--shadow-md)",
      lg: "var(--shadow-lg)",
      xl: "var(--shadow-xl)",
      "2xl": "var(--shadow-2xl)",
      inner: "var(--shadow-inner)",
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
      "fade-in": {
        from: { opacity: "0" },
        to: { opacity: "1" },
      },
      "fade-out": {
        from: { opacity: "1" },
        to: { opacity: "0" },
      },
    },
    animation: {
      "accordion-down": "accordion-down var(--duration-200) var(--easing-out)",
      "accordion-up": "accordion-up var(--duration-200) var(--easing-out)",
      "fade-in": "fade-in var(--duration-150) var(--easing-out)",
      "fade-out": "fade-out var(--duration-150) var(--easing-in)",
    },
  };
}

/**
 * Checks if a hex color meets WCAG AA contrast (≥ 4.5:1) against white.
 * Useful for validating token accessibility at build time.
 */
export function meetsWcagAA(hexColor: string, onWhite = true): boolean {
  const rgb = hexToRgb(hexColor);
  if (!rgb) return false;
  const L1 = relativeLuminance(rgb);
  const L2 = onWhite ? 1 : 0;
  const contrast = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
  return contrast >= 4.5;
}

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function relativeLuminance({ r, g, b }: { r: number; g: number; b: number }): number {
  const [R, G, B] = [r, g, b].map((c) => {
    const sRGB = c / 255;
    return sRGB <= 0.03928 ? sRGB / 12.92 : ((sRGB + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}
