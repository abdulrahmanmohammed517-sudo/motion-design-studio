import { FPS, HEIGHT, WIDTH } from "../shared/style";

export { FPS, HEIGHT, WIDTH };
export const DURATION_IN_FRAMES = 225; // 9s @ 25fps

export const TITLE_TEXT = "ONLY 30 SPOTS";
export const TITLE_FADE_DURATION = 10;

export const GRID_ROWS = 3;
export const GRID_COLUMNS = 10;
export const SQUARE_SIZE = 26;
export const SQUARE_GAP = 10;
export const SQUARE_POP_START = 0;
export const SQUARE_POP_END = 30; // all 30 popped in by this frame
export const SQUARE_POP_DURATION = 8;

export const MOVE_FRAME = 110;
export const MOVE_DURATION = 12;
export const MOVE_UP_DISTANCE = 200;
export const DIM_OPACITY = 0.4;

export const PRICE_TEXT = "£1,200";
export const PRICE_SPRING_CONFIG = { damping: 9, stiffness: 180, mass: 0.8 };
export const SWEEP_DURATION = 16;

export const SUBTITLE_TEXT = "(just under $2,000)";
export const SUBTITLE_FRAME = 135;
export const SUBTITLE_FADE_DURATION = 10;

export const OUT_DURATION = 12;
export const OUT_START = DURATION_IN_FRAMES - OUT_DURATION;
export const OUT_END = DURATION_IN_FRAMES;
export const OUT_DRIFT = 20;
