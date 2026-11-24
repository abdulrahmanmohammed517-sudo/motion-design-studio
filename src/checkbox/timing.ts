import { FPS, HEIGHT, WIDTH } from "../shared/style";

export { FPS, HEIGHT, WIDTH };
export const DURATION_IN_FRAMES = 75; // 3s @ 25fps

export const CARD_WIDTH = 520;
export const CARD_HEIGHT = 120;

export const POP_START = 0;
export const POP_DURATION = 10;
export const POP_SPRING_CONFIG = { damping: 12, stiffness: 180, mass: 0.6 };

export const ICON_START = 4; // check icon starts popping shortly after the card

export const OUT_DURATION = 12; // last 12 frames
export const OUT_START = DURATION_IN_FRAMES - OUT_DURATION;
export const OUT_END = DURATION_IN_FRAMES;
export const OUT_DRIFT = 20;

export const TEXT = "Buy your first fund";
