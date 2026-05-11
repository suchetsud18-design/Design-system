/**
 * Component-Specific Design Tokens
 * Source: Figma Variables → components/*
 */

/** Button component tokens */
export const button = {
  height: {
    sm: "var(--button-height-sm)",
    md: "var(--button-height-md)",
    lg: "var(--button-height-lg)",
    icon: "var(--button-height-icon)",
  },
  paddingX: {
    sm: "var(--button-padding-x-sm)",
    md: "var(--button-padding-x-md)",
    lg: "var(--button-padding-x-lg)",
  },
  fontSize: {
    
    sm: "var(--button-font-size-sm)",
    md: "var(--button-font-size-md)",
    lg: "var(--button-font-size-lg)",
  },
  fontWeight: "var(--button-font-weight)",
  radius: "var(--button-radius)",
  transition: "var(--button-transition)",
} as const;

/** Input / form field component tokens */
export const input = {
  height: {
    sm: "var(--input-height-sm)",
    md: "var(--input-height-md)",
    lg: "var(--input-height-lg)",
  },
  paddingX: "var(--input-padding-x)",
  paddingY: "var(--input-padding-y)",
  fontSize: "var(--input-font-size)",
  radius: "var(--input-radius)",
  borderColor: {
    DEFAULT: "var(--input-border-color)",
    focus: "var(--input-border-color-focus)",
    error: "var(--input-border-color-error)",
  },
  background: {
    DEFAULT: "var(--input-bg)",
    disabled: "var(--input-bg-disabled)",
  },
  placeholderColor: "var(--input-text-placeholder)",
  transition: "var(--input-transition)",
} as const;

/** Badge component tokens */
export const badge = {
  fontSize: "var(--badge-font-size)",
  fontWeight: "var(--badge-font-weight)",
  paddingX: "var(--badge-padding-x)",
  paddingY: "var(--badge-padding-y)",
  radius: "var(--badge-radius)",
} as const;

/** Card component tokens */
export const card = {
  padding: "var(--card-padding)",
  radius: "var(--card-radius)",
  shadow: "var(--card-shadow)",
  borderColor: "var(--card-border-color)",
} as const;

/** Dialog / modal component tokens */
export const dialog = {
  radius: "var(--dialog-radius)",
  shadow: "var(--dialog-shadow)",
  maxWidth: "var(--dialog-max-width)",
  padding: "var(--dialog-padding)",
  overlayBackground: "var(--dialog-overlay-bg)",
} as const;

/** Toast / notification component tokens */
export const toast = {
  radius: "var(--toast-radius)",
  shadow: "var(--toast-shadow)",
  minWidth: "var(--toast-min-width)",
  maxWidth: "var(--toast-max-width)",
  padding: "var(--toast-padding)",
  gap: "var(--toast-gap)",
} as const;

/** Navigation component tokens */
export const nav = {
  height: "var(--nav-height)",
  background: "var(--nav-bg)",
  borderColor: "var(--nav-border-color)",
  item: {
    paddingX: "var(--nav-item-padding-x)",
    paddingY: "var(--nav-item-padding-y)",
    radius: "var(--nav-item-radius)",
    fontSize: "var(--nav-item-font-size)",
    fontWeight: "var(--nav-item-font-weight)",
  },
} as const;

/** Sidebar component tokens */
export const sidebar = {
  width: "var(--sidebar-width)",
  widthCollapsed: "var(--sidebar-width-collapsed)",
  background: "var(--sidebar-bg)",
  borderColor: "var(--sidebar-border-color)",
  item: {
    height: "var(--sidebar-item-height)",
    paddingX: "var(--sidebar-item-padding-x)",
    radius: "var(--sidebar-item-radius)",
  },
} as const;

export type ButtonTokens = typeof button;
export type InputTokens = typeof input;
export type BadgeTokens = typeof badge;
export type CardTokens = typeof card;
export type DialogTokens = typeof dialog;
export type ToastTokens = typeof toast;
export type NavTokens = typeof nav;
export type SidebarTokens = typeof sidebar;
