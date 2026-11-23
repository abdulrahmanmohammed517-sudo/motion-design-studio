// Frame/position constants for StartChecklist and StartChecklistMatte —
// single source of truth for both, so the matte lines up frame-for-frame
// with the glass card. Adjust these to retime or reposition.

export const FPS = 25;
export const WIDTH = 1920;
export const HEIGHT = 1080;
export const DURATION_IN_FRAMES = 250; // 10s @ 25fps

// --- Glass card ---
export const CARD_WIDTH = 860;
export const CARD_HEIGHT = 230;
export const CARD_RADIUS = 32;
export const CARD_FILL = "rgba(0,0,0,0.38)";
export const CARD_BORDER = "1px solid rgba(255,255,255,0.15)";
export const CARD_BOTTOM_MARGIN = 140;
export const CARD_PADDING = 48;
export const CARD_ROW_GAP = 22;

export const CARD_POP_START = 0;
export const CARD_POP_DURATION = 10; // frames 0 -> 10
export const CARD_POP_SPRING_CONFIG = { damping: 12, stiffness: 180, mass: 0.6 };

// --- Row 1: "Start in your own time" ---
export const ROW1_TEXT = "Start in your own time";
export const ROW1_ICON_SIZE = 40;
export const ROW1_START = 6;
export const ROW1_DURATION = 8; // frames 6 -> 14, slide-in from left

export const ROW1_DIM_START = 45; // dims as row 2 lands
export const ROW1_DIM_DURATION = 10; // frames 45 -> 55
export const ROW1_DIM_OPACITY = 0.55;

// --- Row 2: check + "Ideally: TODAY" ---
export const ROW2_PREFIX_TEXT = "Ideally: ";
export const ROW2_EMPHASIS_TEXT = "TODAY";
export const ROW2_EMPHASIS_COLOR = "#D4AF37";
export const ROW2_START = 45;

export const CHECK_SIZE = 44;
export const CHECK_SPRING_DURATION = 16; // physics settle window
export const CHECK_SPRING_CONFIG = { damping: 9, stiffness: 200, mass: 0.7 }; // ~1.2x overshoot

export const TICK_DRAW_START = 48;
export const TICK_DRAW_DURATION = 6; // frames 48 -> 54

export const UNDERLINE_START = 50;
export const UNDERLINE_DURATION = 8; // frames 50 -> 58

// --- Out (shared by StartChecklist and StartChecklistMatte) ---
export const OUT_START = 235;
export const OUT_END = 250;
export const OUT_DRIFT = 20; // px, downward drift
