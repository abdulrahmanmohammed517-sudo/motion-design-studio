import { FPS, HEIGHT, WIDTH } from "../shared/style";

export { FPS, HEIGHT, WIDTH };
export const DURATION_IN_FRAMES = 100; // 4s @ 25fps

export const LABEL_TEXT = "YEARS LATER…";
export const LABEL_FADE_DURATION = 8; // frames 0 -> 8

export const QUOTE_TEXT = "Why didn't investing work for me?";
export const QUOTE_START = 12;
export const WORD_STAGGER = 5; // frames between each word appearing
export const WORD_FADE_DURATION = 6;

export const OUT_DURATION = 12; // last 12 frames
export const OUT_START = DURATION_IN_FRAMES - OUT_DURATION;
export const OUT_END = DURATION_IN_FRAMES;
