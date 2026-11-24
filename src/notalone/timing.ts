import { FPS, HEIGHT, WIDTH } from "../shared/style";

export { FPS, HEIGHT, WIDTH };
export const DURATION_IN_FRAMES = 350; // 14s @ 25fps

export const SIDE_MARGIN = 120;
export const TOP_MARGIN = 300;

export const TITLE = "YOU WON'T BE ALONE";
export const TITLE_FADE_DURATION = 10;

export const AVATAR_COUNT = 7;
export const AVATAR_SIZE = 80;
export const AVATAR_OVERLAP = 28; // px each avatar overlaps the previous
export const AVATAR_START = 15;
export const AVATAR_END = 50;
export const AVATAR_POP_DURATION = 10;
export const AVATAR_POP_SPRING_CONFIG = { damping: 10, stiffness: 200, mass: 0.6 };

export const CHIP_FRAME = 250;
export const CHIP_TEXT = "+ Guest expert sessions";

export const OUT_DURATION = 12;
export const OUT_START = DURATION_IN_FRAMES - OUT_DURATION;
export const OUT_END = DURATION_IN_FRAMES;
export const OUT_DRIFT = 20;
