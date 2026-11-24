// Shared visual constants for the section-2 VSL overlay compositions.

export const WIDTH = 1920;
export const HEIGHT = 1080;
export const FPS = 25;

export const GLASS_RADIUS = 28;
export const GLASS_FILL = "rgba(0,0,0,0.38)";
export const GLASS_BORDER = "1px solid rgba(255,255,255,0.15)";

export const COLOR_WHITE = "#FFFFFF";
export const COLOR_GREEN = "#22C55E";
export const COLOR_RED = "#FF3B30";
export const COLOR_GOLD = "#D4AF37";

// --- Shared check/cross icon (reused from the unlock box style) ---
export const ICON_SIZE = 44;
export const ICON_SPRING_DURATION = 16; // physics settle window
export const ICON_SPRING_CONFIG = { damping: 9, stiffness: 200, mass: 0.7 }; // ~1.2x overshoot peak
export const ICON_DRAW_DELAY = 3; // tick/cross starts this many frames after the icon spring starts
export const ICON_DRAW_DURATION = 6;
