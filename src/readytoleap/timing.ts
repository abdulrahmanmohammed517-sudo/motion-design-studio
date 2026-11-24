import { FPS, HEIGHT, WIDTH } from "../shared/style";

export { FPS, HEIGHT, WIDTH };
export const DURATION_IN_FRAMES = 300; // 12s @ 25fps

export const SIDE_MARGIN = 140;
export const TOP_MARGIN = 300;

export const TITLE_TEXT = "NOT JUST ONE STEP.";
export const TITLE_FADE_DURATION = 10;

export const STAIRCASE_WIDTH = 260;
export const STAIRCASE_HEIGHT = 160;
export const STAIRCASE_DRAW_DURATION = 16;

export const JUMP_FRAME = 120;
export const JUMP_DURATION = 20;
export const JUMP_ARC_HEIGHT = 120;
export const JUMP_DOT_SIZE = 20;

export const HEADLINE_TEXT = "READY TO LEAP.";
export const HEADLINE_FRAME = 140;
export const HEADLINE_DURATION = 12;
export const HEADLINE_SPRING_CONFIG = { damping: 12, stiffness: 180, mass: 0.6 };

export const OUT_DURATION = 12;
export const OUT_START = DURATION_IN_FRAMES - OUT_DURATION;
export const OUT_END = DURATION_IN_FRAMES;
export const OUT_DRIFT = 20;
