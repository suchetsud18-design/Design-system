/**
 * Sizing Design Tokens — height, max-height, max-width
 * Source collections: height (24 vars), max-height (35 vars), max-width (35 vars)
 * File: -shadcn_ui-components-not-token--Fluke---Copy-
 * Last synced: 2026-05-09
 */

/** @figmaVariable height/h-* */
export const height = {
  "0":    "0px",
  "px":   "1px",
  "0.5":  "0.125rem",   /* 2px  */
  "1":    "0.25rem",    /* 4px  */
  "2":    "0.5rem",     /* 8px  */
  "2.5":  "0.625rem",   /* 10px */
  "3":    "0.75rem",    /* 12px */
  "3.5":  "0.875rem",   /* 14px */
  "4":    "1rem",       /* 16px */
  "5":    "1.25rem",    /* 20px */
  "6":    "1.5rem",     /* 24px */
  "7":    "1.75rem",    /* 28px */
  "8":    "2rem",       /* 32px */
  "9":    "2.25rem",    /* 36px */
  "10":   "2.5rem",     /* 40px */
  "12":   "3rem",       /* 48px */
  "14":   "3.5rem",     /* 56px */
  "16":   "4rem",       /* 64px */
  "18":   "4.5rem",     /* 72px */
  "20":   "5rem",       /* 80px */
  "24":   "6rem",       /* 96px */
  "48":   "12rem",      /* 192px */
  "72":   "18rem",      /* 288px */
  "96":   "24rem",      /* 384px */
  auto:   "auto",
  full:   "100%",
  screen: "100vh",
  svh:    "100svh",
  lvh:    "100lvh",
  dvh:    "100dvh",
  min:    "min-content",
  max:    "max-content",
  fit:    "fit-content",
} as const;

/** @figmaVariable max-height/max-h-* */
export const maxHeight = {
  "0":    "0px",
  "px":   "1px",
  "0.5":  "0.125rem",   /* 2px  */
  "1":    "0.25rem",    /* 4px  */
  "1.5":  "0.375rem",   /* 6px  */
  "2":    "0.5rem",     /* 8px  */
  "2.5":  "0.625rem",   /* 10px */
  "3":    "0.75rem",    /* 12px */
  "3.5":  "0.875rem",   /* 14px */
  "4":    "1rem",       /* 16px */
  "5":    "1.25rem",    /* 20px */
  "6":    "1.5rem",     /* 24px */
  "7":    "1.75rem",    /* 28px */
  "8":    "2rem",       /* 32px */
  "9":    "2.25rem",    /* 36px */
  "10":   "2.5rem",     /* 40px */
  "11":   "2.75rem",    /* 44px */
  "12":   "3rem",       /* 48px */
  "14":   "3.5rem",     /* 56px */
  "16":   "4rem",       /* 64px */
  "20":   "5rem",       /* 80px */
  "24":   "6rem",       /* 96px */
  "28":   "7rem",       /* 112px */
  "32":   "8rem",       /* 128px */
  "36":   "9rem",       /* 144px */
  "40":   "10rem",      /* 160px */
  "44":   "11rem",      /* 176px */
  "48":   "12rem",      /* 192px */
  "52":   "13rem",      /* 208px */
  "56":   "14rem",      /* 224px */
  "60":   "15rem",      /* 240px */
  "64":   "16rem",      /* 256px */
  "72":   "18rem",      /* 288px */
  "80":   "20rem",      /* 320px */
  "96":   "24rem",      /* 384px */
  none:   "none",
  full:   "100%",
  screen: "100vh",
  svh:    "100svh",
  lvh:    "100lvh",
  dvh:    "100dvh",
  min:    "min-content",
  max:    "max-content",
  fit:    "fit-content",
} as const;

/** @figmaVariable max-width/max-w-* */
export const maxWidth = {
  "0":    "0px",
  "px":   "1px",
  "0.5":  "0.125rem",   /* 2px  */
  "1":    "0.25rem",    /* 4px  */
  "1.5":  "0.375rem",   /* 6px  */
  "2":    "0.5rem",     /* 8px  */
  "2.5":  "0.625rem",   /* 10px */
  "3":    "0.75rem",    /* 12px */
  "3.5":  "0.875rem",   /* 14px */
  "4":    "1rem",       /* 16px */
  "5":    "1.25rem",    /* 20px */
  "6":    "1.5rem",     /* 24px */
  "7":    "1.75rem",    /* 28px */
  "8":    "2rem",       /* 32px */
  "9":    "2.25rem",    /* 36px */
  "10":   "2.5rem",     /* 40px */
  "11":   "2.75rem",    /* 44px */
  "12":   "3rem",       /* 48px */
  "14":   "3.5rem",     /* 56px */
  "16":   "4rem",       /* 64px */
  "20":   "5rem",       /* 80px */
  "24":   "6rem",       /* 96px */
  "28":   "7rem",       /* 112px */
  "32":   "8rem",       /* 128px */
  "36":   "9rem",       /* 144px */
  "40":   "10rem",      /* 160px */
  "44":   "11rem",      /* 176px */
  "48":   "12rem",      /* 192px */
  "52":   "13rem",      /* 208px */
  "56":   "14rem",      /* 224px */
  "60":   "15rem",      /* 240px */
  "64":   "16rem",      /* 256px */
  "72":   "18rem",      /* 288px */
  "80":   "20rem",      /* 320px */
  "96":   "24rem",      /* 384px */
  none:   "none",
  full:   "100%",
  min:    "min-content",
  max:    "max-content",
  fit:    "fit-content",
  prose:  "65ch",
  "screen-sm":  "640px",
  "screen-md":  "768px",
  "screen-lg":  "1024px",
  "screen-xl":  "1280px",
  "screen-2xl": "1536px",
} as const;

export type HeightToken = typeof height;
export type MaxHeightToken = typeof maxHeight;
export type MaxWidthToken = typeof maxWidth;
