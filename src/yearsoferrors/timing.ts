import { CARD_FILL, CARD_SHADOW, FPS, HEIGHT, WIDTH } from "../shared/style";

export { CARD_FILL, CARD_SHADOW, FPS, HEIGHT, WIDTH };
export const DURATION_IN_FRAMES = 175; // 7s @ 25fps

export const CARD_WIDTH = 760;
export const CARD_HEIGHT = 260;
export const BOTTOM_MARGIN = 160; // centre-lower

export const POP_START = 0;
export const POP_DURATION = 10;
export const POP_SPRING_CONFIG = { damping: 12, stiffness: 180, mass: 0.6 };

export const COUNTER_VALUES = [1, 2, 3, 4, 5];
export const COUNTER_START = 6;
export const COUNTER_STEP = 12; // frames between each tick
export const YEARS_LABEL = "YEARS";

export const X_COUNT = 8;
export const X_START = 10;
export const X_STAGGER = 6;
export const X_SIZE = 40;
export const X_COLUMNS = 4;
export const X_GAP = 16;
export const X_SUBLABEL = "-£";

export const HEADLINE_TEXT = "ERRORS COST MONEY";
export const HEADLINE_FRAME = 90;
export const HEADLINE_DURATION = 10;

export const OUT_DURATION = 12;
export const OUT_START = DURATION_IN_FRAMES - OUT_DURATION;
export const OUT_END = DURATION_IN_FRAMES;
