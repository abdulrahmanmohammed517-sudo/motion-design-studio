import { FPS, HEIGHT, WIDTH } from "../shared/style";

export { FPS, HEIGHT, WIDTH };
export const DURATION_IN_FRAMES = 150; // 6s @ 25fps

export const CARD_WIDTH = 440;
export const CARD_HEIGHT = 120;
export const CARD_GAP = 40;
export const ROW_BOTTOM_MARGIN = 140; // lower third of frame

export const CARD_STARTS = [0, 40, 80]; // frame each card starts popping in
export const POP_DURATION = 10;
export const POP_SPRING_CONFIG = { damping: 12, stiffness: 180, mass: 0.6 };
export const ICON_DELAY = 4; // icon starts this many frames after its card

export const OUT_DURATION = 12; // last 12 frames, all three fade together
export const OUT_START = DURATION_IN_FRAMES - OUT_DURATION;
export const OUT_END = DURATION_IN_FRAMES;

export const TEXTS = ["Don't add to it", "Don't grow it", "Don't diversify"];
