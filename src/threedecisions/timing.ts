import { FPS, HEIGHT, WIDTH } from "../shared/style";

export { FPS, HEIGHT, WIDTH };
export const DURATION_IN_FRAMES = 125; // 5s @ 25fps

export const TITLE_TEXT = "3 DECISIONS";
export const TITLE_POP_START = 0;
export const TITLE_POP_DURATION = 12;
export const TITLE_POP_SPRING_CONFIG = { damping: 12, stiffness: 180, mass: 0.6 };
export const TITLE_CENTER_Y = 340;

// --- The 3 cards row ---
export const CARD_WIDTH = 300;
export const CARD_HEIGHT = 110;
export const CARD_GAP = 40;
export const CARDS_CENTER_Y = 560;
export const ROW_WIDTH = CARD_WIDTH * 3 + CARD_GAP * 2;
export const ROW_LEFT = (WIDTH - ROW_WIDTH) / 2;

export const CARD_LABELS = ["01", "02", "03"];
export const CARD_POP_STARTS = [10, 16, 22];
export const CARD_POP_DURATION = 10;
export const CARD_POP_SPRING_CONFIG = { damping: 12, stiffness: 180, mass: 0.6 };

// --- Card 01 left/top at its row position (derived, not hardcoded) ---
export const CARD_01_ROW_LEFT = ROW_LEFT;
export const CARD_01_ROW_TOP = CARDS_CENTER_Y - CARD_HEIGHT / 2;
export const CARD_01_CENTER_X = CARD_01_ROW_LEFT + CARD_WIDTH / 2;
export const CARD_01_CENTER_Y = CARD_01_ROW_TOP + CARD_HEIGHT / 2;

// --- Expand (frame 60), cards 2/3 dim to 40% ---
export const EXPAND_FRAME = 60;
export const EXPAND_DURATION = 10; // smooth morph rather than an instant snap
export const EXPANDED_WIDTH = 620;
export const EXPANDED_HEIGHT = 170;
export const DIM_OPACITY = 0.4;
export const EXPANDED_TEXT = "WHERE YOUR MONEY LIVES";

// --- Shrink into the top-left tracker pill (frames 100 -> 125) ---
export const SHRINK_START = 100;
export const SHRINK_END = 125;
export const PILL_LEFT = 60;
export const PILL_TOP = 60;
export const PILL_WIDTH = 480;
export const PILL_HEIGHT = 56;
export const PILL_RADIUS = PILL_HEIGHT / 2;
export const PILL_TEXT = "DECISION 1/3 · WHERE YOUR MONEY LIVES";

export const OUT_START = SHRINK_START;
export const OUT_END = DURATION_IN_FRAMES;
