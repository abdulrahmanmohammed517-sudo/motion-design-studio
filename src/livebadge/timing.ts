// Frame/position constants for LiveBadge and LiveBadgeGuide.
// Adjust these to retime, resize, or reposition the card.
//
// DATE SLOT TEXT COORDINATES (absolute pixels in the 1920x1080 canvas),
// computed from the layout constants below — DATE_TEXT_X / DATE_TEXT_Y at
// the bottom of this file. Re-print any time with:
//   node scripts/print-date-slot.ts
//   left edge x       = 1506
//   vertical centre y = 150

export const FPS = 25;
export const WIDTH = 1920;
export const HEIGHT = 1080;
export const DURATION_IN_FRAMES = 250; // 10s @ 25fps

// Set this to render real date text in the date slot. Leave empty to
// render nothing there (e.g. because you'll overlay your own text/clip
// in Premiere at DATE_TEXT_X / DATE_TEXT_Y below).
export const DATE_TEXT = "";

// --- Card ---
export const CARD_WIDTH = 420;
export const CARD_HEIGHT = 130;
export const CARD_RADIUS = 26;
export const CARD_RIGHT_MARGIN = 60;
export const CARD_TOP_MARGIN = 60;
export const CARD_FILL = "rgba(0,0,0,0.55)";
export const CARD_BORDER = "1px solid rgba(255,255,255,0.15)";
export const CARD_SHADOW = "0 12px 36px rgba(0,0,0,0.3)";

export const CARD_X = WIDTH - CARD_RIGHT_MARGIN - CARD_WIDTH;
export const CARD_Y = CARD_TOP_MARGIN;

// --- Internal layout (rows stack top -> bottom, sums to CARD_HEIGHT) ---
export const PADDING_TOP = 20;
export const PADDING_BOTTOM = 20;
export const PADDING_X = 24;

export const TOP_ROW_HEIGHT = 32;
export const GAP_AFTER_TOP_ROW = 8;
export const DIVIDER_HEIGHT = 1;
export const GAP_AFTER_DIVIDER = 9;
export const DATE_SLOT_HEIGHT = 40;

// --- In / out ---
export const SLIDE_IN_START = 0;
export const SLIDE_IN_DURATION = 12; // frames 0 -> 12
export const SLIDE_DISTANCE = 120; // px, from/to the right
export const SLIDE_IN_SPRING_CONFIG = { damping: 14, stiffness: 180, mass: 0.6 };

export const OUT_START = 235;
export const OUT_END = 250;

// --- Top row: pulse dot + "LIVE Q&A" ---
export const TOP_ROW_FADE_START = 6;
export const TOP_ROW_FADE_DURATION = 6; // frames 6 -> 12
export const DOT_SIZE = 16;
export const DOT_COLOR = "#FF3B30";
export const DOT_TEXT_GAP = 14;
export const PULSE_PERIOD = 25; // frames, loops for the whole duration
export const LIVE_TEXT = "LIVE Q&A";

// --- Divider ---
export const DIVIDER_DRAW_START = 10;
export const DIVIDER_DRAW_DURATION = 8; // frames 10 -> 18

// --- Date slot ---
export const DATE_SLOT_PADDING_X = 28; // "full card width minus 28px padding each side"
export const CALENDAR_ICON_SIZE = 26;
export const ICON_TEXT_GAP = 12;
export const ICON_FADE_START = 12;
export const ICON_FADE_DURATION = 6; // frames 12 -> 18
export const TEXT_FADE_START = 14;
export const TEXT_FADE_DURATION = 6; // frames 14 -> 20

export const DATE_SLOT_LEFT = CARD_X + DATE_SLOT_PADDING_X;
export const DATE_SLOT_RIGHT = CARD_X + CARD_WIDTH - DATE_SLOT_PADDING_X;
export const DATE_SLOT_TOP =
  CARD_Y + PADDING_TOP + TOP_ROW_HEIGHT + GAP_AFTER_TOP_ROW + DIVIDER_HEIGHT + GAP_AFTER_DIVIDER;
export const DATE_SLOT_WIDTH = DATE_SLOT_RIGHT - DATE_SLOT_LEFT;

// Absolute pixel coordinates of the date text area (left edge x, vertical centre y).
export const DATE_TEXT_X = DATE_SLOT_LEFT + CALENDAR_ICON_SIZE + ICON_TEXT_GAP;
export const DATE_TEXT_Y = DATE_SLOT_TOP + DATE_SLOT_HEIGHT / 2;
