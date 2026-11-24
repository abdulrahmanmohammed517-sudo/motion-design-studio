import { FPS, HEIGHT, WIDTH } from "../shared/style";

export { FPS, HEIGHT, WIDTH };
export const DURATION_IN_FRAMES = 175; // 7s @ 25fps

export const AREA_WIDTH = 800;
export const AREA_HEIGHT = 400;
export const AREA_LEFT = 140; // position constant — left side of frame
export const AREA_TOP = 340;

export const DRAW_START = 0;
export const DRAW_END = 60;

export const JAGGED_POINT_COUNT = 12;
export const JAGGED_SEED_PREFIX = "steady-jagged";
export const JAGGED_STROKE_WIDTH = 4;
export const JAGGED_OPACITY = 0.6;

export const SMOOTH_STROKE_WIDTH = 7;

export const LABEL_MARKET = "MARKET";
export const LABEL_YOU = "YOU";

export const OUT_DURATION = 12;
export const OUT_START = DURATION_IN_FRAMES - OUT_DURATION;
export const OUT_END = DURATION_IN_FRAMES;
