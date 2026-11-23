// Frame/position constants for InboxNotification — adjust these to retime
// or reposition the card.

export const FPS = 25;
export const WIDTH = 1920;
export const HEIGHT = 1080;
export const DURATION_IN_FRAMES = 250; // 10s @ 25fps

// --- Card ---
export const CARD_WIDTH = 620;
export const CARD_HEIGHT = 150;
export const CARD_RADIUS = 28;
export const CARD_RIGHT_MARGIN = 80;
export const CARD_TOP_MARGIN = 70;
export const CARD_BG = "rgba(255,255,255,0.94)";
export const CARD_SHADOW = "0 18px 50px rgba(0,0,0,0.35)";
export const CARD_PADDING = 18;
export const CARD_GAP = 18;

// --- App icon ---
export const ICON_SIZE = 84;
export const ICON_RADIUS = 20;
export const ICON_GRADIENT = "linear-gradient(135deg, #2F80ED, #56CCF2)";

// --- Unread badge ---
export const BADGE_SIZE = 30;
export const BADGE_START = 16;
export const BADGE_SPRING_DURATION = 10;
export const BADGE_SPRING_CONFIG = { damping: 8, stiffness: 260, mass: 0.6 }; // bouncy

// --- Slide in ---
export const SLIDE_IN_START = 0;
export const SLIDE_IN_DURATION = 12; // frames 0 -> 12
export const SLIDE_IN_DISTANCE = 180; // px, from above
export const SLIDE_IN_SPRING_CONFIG = { damping: 14, stiffness: 180, mass: 0.6 }; // slight overshoot

// --- Attention nudge ---
export const NUDGE_START = 14;
export const NUDGE_PEAK = 19;
export const NUDGE_END = 24;
export const NUDGE_SCALE_PEAK = 1.03;

// --- Slide out --- (hold runs 24 -> SLIDE_OUT_START)
export const SLIDE_OUT_START = 234;
export const SLIDE_OUT_END = 250;
export const SLIDE_OUT_DISTANCE = 180; // px, back up
