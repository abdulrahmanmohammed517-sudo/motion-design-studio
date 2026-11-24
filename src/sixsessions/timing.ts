import { CARD_FILL, CARD_SHADOW, FPS, HEIGHT, WIDTH } from "../shared/style";

export { CARD_FILL, CARD_SHADOW, FPS, HEIGHT, WIDTH };
export const DURATION_IN_FRAMES = 150; // 6s @ 25fps

export const CARD_WIDTH = 760;
export const CARD_HEIGHT = 280;
export const BOTTOM_MARGIN = 160; // centre-lower

export const POP_START = 0;
export const POP_DURATION = 10;
export const POP_SPRING_CONFIG = { damping: 12, stiffness: 180, mass: 0.6 };

export const TITLE = "6 LIVE SESSIONS";
export const ROW_LABELS = ["WEEK 1", "WEEK 2"];
export const CIRCLE_SIZE = 36;
export const CIRCLE_START = 15;
export const CIRCLE_STAGGER = 6;
export const CIRCLE_POP_DURATION = 8;
export const CIRCLE_POP_SPRING_CONFIG = { damping: 10, stiffness: 200, mass: 0.6 };

export const OUT_DURATION = 12;
export const OUT_START = DURATION_IN_FRAMES - OUT_DURATION;
export const OUT_END = DURATION_IN_FRAMES;
