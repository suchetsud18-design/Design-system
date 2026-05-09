/**
 * Design Tokens — Master Export
 * Re-exports all token categories from a single entry point.
 *
 * Usage:
 *   import { colors, spacing, typography } from "@/tokens";
 *   import type { ColorKey, SpacingKey } from "@/tokens";
 */

export { colors, colorVars } from "./colors";
export type { ColorToken, ColorKey } from "./colors";

export { typography, textStyles } from "./typography";
export type { TypographyToken, TextStyleKey } from "./typography";

export {
  spacing, spacingAlias, padding,
  p, px, py, pt, pr, pb, pl,
  m, mx, my, mt, mr, mb, ml,
  gap, gapX, gapY,
} from "./spacing";
export type { SpacingToken, SpacingKey, GapToken, DirectionalScale } from "./spacing";

export {
  shadows,
  borderRadius,
  borderRadiusS, borderRadiusE,
  borderRadiusT, borderRadiusR, borderRadiusB, borderRadiusL,
  borderRadiusSS, borderRadiusSE, borderRadiusEE, borderRadiusES,
  borderRadiusTL, borderRadiusTR, borderRadiusBR, borderRadiusBL,
  borderWidth,
  borderWidthX,
  borderWidthY,
  borderWidthS,
  borderWidthE,
  borderWidthT,
  borderWidthR,
  borderWidthB,
  borderWidthL,
  duration,
  easing,
  zIndex,
  transitions,
  strokeWidth,
  opacity,
} from "./effects";
export type {
  ShadowToken,
  BorderRadiusToken,
  DurationToken,
  EasingToken,
  StrokeWidthToken,
  OpacityToken,
} from "./effects";

export { height, maxHeight, maxWidth } from "./sizing";
export type { HeightToken, MaxHeightToken, MaxWidthToken } from "./sizing";

export { twColors, rdxColors } from "./palette";
export type { TwColorScale, RdxColorScale, TwColorName, RdxColorName } from "./palette";

export {
  button,
  input,
  badge,
  card,
  dialog,
  toast,
  nav,
  sidebar,
} from "./components";
export type {
  ButtonTokens,
  InputTokens,
  BadgeTokens,
  CardTokens,
  DialogTokens,
  ToastTokens,
  NavTokens,
  SidebarTokens,
} from "./components";

/** All tokens as a single flat object — useful for theme configuration */
export { tokens } from "./all";
