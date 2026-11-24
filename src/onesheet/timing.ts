import { CARD_FILL, CARD_SHADOW, FPS, HEIGHT, WIDTH } from "../shared/style";

export { CARD_FILL, CARD_SHADOW, FPS, HEIGHT, WIDTH };
export const DURATION_IN_FRAMES = 300; // 12s @ 25fps

export const CARD_WIDTH = 760;
export const CARD_HEIGHT = 520;
export const SIDE_MARGIN = 120; // position constant — side of frame
export const TOP_MARGIN = 160;

export const POP_START = 0;
export const POP_DURATION = 10;
export const POP_SPRING_CONFIG = { damping: 12, stiffness: 180, mass: 0.6 };

export const HEADER_TEXT = "MY MONEY · ONE SHEET";
export const COLUMN_ITEM_LABEL = "ITEM";
export const COLUMN_VALUE_LABEL = "VALUE";

export const ROW_HEIGHT = 70;
export const ROW_APPEAR_FRAMES = [6, 12, 18, 24, 30];
export const ROW_DRAW_DURATION = 10;
export const DIM_OPACITY = 0.55;
export const FADED_OPACITY = 0.8;

export const ROW_LABELS = [
  "How it's going to grow",
  "Where I'm moving things",
  "Rental income",
  "Interest",
  "What I can spend",
];
export const RENTAL_VALUE = "£█,███";
export const INTEREST_VALUE = "£███";
export const SPEND_VALUE = "£█,███";
export const VALUE_BLUR = 8;

export const HIGHLIGHT_FRAMES = [75, 125, 175, 225, 265];
export const HIGHLIGHT_DURATION = 10;

export const OUT_DURATION = 12;
export const OUT_START = DURATION_IN_FRAMES - OUT_DURATION;
export const OUT_END = DURATION_IN_FRAMES;
