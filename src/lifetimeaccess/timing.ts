import { FPS, HEIGHT, WIDTH } from "../shared/style";

export { FPS, HEIGHT, WIDTH };
export const DURATION_IN_FRAMES = 525; // 21s @ 25fps

export const SIDE_MARGIN = 120;
export const TOP_MARGIN = 160;
export const CARD_WIDTH = 620;

export const BADGE_TEXT = "LIFETIME ACCESS";
export const BADGE_WIDTH = 460;
export const BADGE_HEIGHT = 90;
export const BADGE_POP_DURATION = 10;
export const BADGE_POP_SPRING_CONFIG = { damping: 12, stiffness: 180, mass: 0.6 };
export const SHIMMER_PERIOD = 60;
export const SHIMMER_WIDTH = 120;

export const ITEMS = ["Private community", "Women only", "All new products included"];
export const APPEAR_FRAMES = [120, 250, 380];
export const GAP_BELOW_BADGE = 30;

export const OUT_DURATION = 12;
export const OUT_START = DURATION_IN_FRAMES - OUT_DURATION;
export const OUT_END = DURATION_IN_FRAMES;
export const OUT_DRIFT = 20;
