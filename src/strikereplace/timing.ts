import { FPS, HEIGHT, WIDTH } from "../shared/style";

export { FPS, HEIGHT, WIDTH };
export const DURATION_IN_FRAMES = 175; // 7s @ 25fps

export const BOTTOM_MARGIN = 280; // centre-lower

export const LABEL_TEXT = "THE BIGGEST RISK ISN'T…";
export const LABEL_FADE_DURATION = 8;

export const MAIN_TEXT = "THE STOCK MARKET";
export const MAIN_START = 8;
export const MAIN_FADE_DURATION = 8;

export const STRIKE_START = 50;
export const STRIKE_DURATION = 8;
export const DIM_OPACITY = 0.35;
export const DIM_DURATION = 8;

export const REPLACE_TEXT = "NOT MAKING CHOICES";
export const REPLACE_START = 75;
export const REPLACE_DURATION = 10;
export const REPLACE_SPRING_CONFIG = { damping: 12, stiffness: 180, mass: 0.6 };

export const OUT_DURATION = 12;
export const OUT_START = DURATION_IN_FRAMES - OUT_DURATION;
export const OUT_END = DURATION_IN_FRAMES;
export const OUT_DRIFT = 20;
