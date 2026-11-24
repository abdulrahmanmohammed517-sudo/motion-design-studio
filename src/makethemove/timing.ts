import { FPS, HEIGHT, WIDTH } from "../shared/style";

export { FPS, HEIGHT, WIDTH };
export const DURATION_IN_FRAMES = 175; // 7s @ 25fps

export const BOTTOM_MARGIN = 220; // lower-centre

export const QUESTION_TEXT = "WANT TO MAKE A MOVE?";
export const QUESTION_FADE_DURATION = 10;

export const ARROW_FRAME = 30;
export const ARROW_DRAW_DURATION = 10;
export const ANSWER_TEXT = "GET IT DONE HERE.";

export const OUT_DURATION = 12;
export const OUT_START = DURATION_IN_FRAMES - OUT_DURATION;
export const OUT_END = DURATION_IN_FRAMES;
export const OUT_DRIFT = 20;
