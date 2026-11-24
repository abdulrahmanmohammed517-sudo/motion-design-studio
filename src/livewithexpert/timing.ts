import { CARD_FILL, CARD_SHADOW, FPS, HEIGHT, WIDTH } from "../shared/style";

export { CARD_FILL, CARD_SHADOW, FPS, HEIGHT, WIDTH };
export const DURATION_IN_FRAMES = 175; // 7s @ 25fps

export const CARD_WIDTH = 820;
export const CARD_HEIGHT = 260;
export const BOTTOM_MARGIN = 160; // lower-centre

export const POP_START = 0;
export const POP_DURATION = 10;
export const POP_SPRING_CONFIG = { damping: 12, stiffness: 180, mass: 0.6 };

export const LIVE_TEXT = "LIVE";
export const DOT_PULSE_PERIOD = 25;

export const TITLE_TEXT = "Build your wealth plan";
export const TITLE_START = 6;
export const TITLE_FADE_DURATION = 8;

export const AVATAR_SIZE = 110;
export const AVATAR_ME_FRAME = 40;
export const AVATAR_EXPERT_FRAME = 55;
export const AVATAR_POP_DURATION = 10;
export const AVATAR_POP_SPRING_CONFIG = { damping: 10, stiffness: 200, mass: 0.6 };
export const LABEL_ME = "ME";
export const LABEL_EXPERT = "EXPERT";

export const OUT_DURATION = 12;
export const OUT_START = DURATION_IN_FRAMES - OUT_DURATION;
export const OUT_END = DURATION_IN_FRAMES;
