import { CARD_FILL, CARD_SHADOW, FPS, HEIGHT, WIDTH } from "../shared/style";

export { CARD_FILL, CARD_SHADOW, FPS, HEIGHT, WIDTH };
export const DURATION_IN_FRAMES = 200; // 8s @ 25fps

export const CARD_WIDTH = 680;
export const CARD_HEIGHT = 260;
export const SIDE_MARGIN = 120;
export const TOP_MARGIN = 300;

export const POP_START = 0;
export const POP_DURATION = 10;
export const POP_SPRING_CONFIG = { damping: 12, stiffness: 180, mass: 0.6 };

export const ROW1_TEXT = "Angel investing";
export const ARROW_FRAME = 20;
export const ARROW_DRAW_DURATION = 10;
export const ARROW_TEXT = "open to new opportunities";

export const ROW2_START = 110;
export const ROW2_DURATION = 10;
export const ROW2_TEXT = "Confident in my net worth";

export const OUT_DURATION = 12;
export const OUT_START = DURATION_IN_FRAMES - OUT_DURATION;
export const OUT_END = DURATION_IN_FRAMES;
