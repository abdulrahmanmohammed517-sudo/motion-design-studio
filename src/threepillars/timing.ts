import { CARD_FILL, CARD_SHADOW, FPS, HEIGHT, WIDTH } from "../shared/style";

export { CARD_FILL, CARD_SHADOW, FPS, HEIGHT, WIDTH };
export const DURATION_IN_FRAMES = 175; // 7s @ 25fps

export const CARD_WIDTH = 400;
export const CARD_HEIGHT = 170;
export const CARD_GAP = 40;
export const ROW_BOTTOM_MARGIN = 140;

export const CARD_STARTS = [0, 30, 60];
export const POP_DURATION = 10;
export const POP_SPRING_CONFIG = { damping: 12, stiffness: 180, mass: 0.6 };

export const ICON_SIZE = 56;
export const ICON_TEXT_GAP = 18;
export const NODE_DRAW_DURATION = 16;

export const LABELS = ["Mindset", "Community", "Network"];

export const OUT_DURATION = 12;
export const OUT_START = DURATION_IN_FRAMES - OUT_DURATION;
export const OUT_END = DURATION_IN_FRAMES;
