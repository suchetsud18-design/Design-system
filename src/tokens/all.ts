/**
 * Aggregate token export — all design tokens in a single object.
 * Useful for Tailwind config, Storybook, or programmatic access.
 */

import { colors } from "./colors";
import { typography, textStyles } from "./typography";
import { spacing, spacingAlias, padding, spaceX, spaceY, p, px, py, pt, pr, pb, pl, m, mx, my, mt, mr, mb, ml, gap, gapX, gapY } from "./spacing";
import {
  shadows,
  borderRadius,
  borderRadiusS, borderRadiusE,
  borderRadiusT, borderRadiusR, borderRadiusB, borderRadiusL,
  borderRadiusSS, borderRadiusSE, borderRadiusEE, borderRadiusES,
  borderRadiusTL, borderRadiusTR, borderRadiusBR, borderRadiusBL,
  borderWidth,
  borderWidthX, borderWidthY, borderWidthS, borderWidthE,
  borderWidthT, borderWidthR, borderWidthB, borderWidthL,
  duration, easing, zIndex, transitions,
  strokeWidth, opacity,
} from "./effects";
import { button, input, badge, card, dialog, toast, nav, sidebar } from "./components";
import { height, maxHeight, maxWidth } from "./sizing";
import { twColors, rdxColors } from "./palette";

export const tokens = {
  colors,
  typography,
  textStyles,
  spacing,
  spacingAlias,
  componentPadding: padding,
  padding: { p, px, py, pt, pr, pb, pl },
  margin:  { m, mx, my, mt, mr, mb, ml },
  space:   { x: spaceX, y: spaceY },
  gap,
  gapX,
  gapY,
  shadows,
  borderRadius,
  borderRadiusDirectional: {
    s: borderRadiusS,   e: borderRadiusE,
    t: borderRadiusT,   r: borderRadiusR,   b: borderRadiusB,   l: borderRadiusL,
    ss: borderRadiusSS, se: borderRadiusSE, ee: borderRadiusEE, es: borderRadiusES,
    tl: borderRadiusTL, tr: borderRadiusTR, br: borderRadiusBR, bl: borderRadiusBL,
  },
  borderWidth,
  borderWidthDirectional: { x: borderWidthX, y: borderWidthY, s: borderWidthS, e: borderWidthE, t: borderWidthT, r: borderWidthR, b: borderWidthB, l: borderWidthL },
  duration,
  easing,
  zIndex,
  transitions,
  strokeWidth,
  opacity,
  sizing: { height, maxHeight, maxWidth },
  palette: { tw: twColors, rdx: rdxColors },
  components: {
    button,
    input,
    badge,
    card,
    dialog,
    toast,
    nav,
    sidebar,
  },
} as const;

export type Tokens = typeof tokens;
