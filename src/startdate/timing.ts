import { FPS, HEIGHT, WIDTH } from "../shared/style";

export { FPS, HEIGHT, WIDTH };
export const DURATION_IN_FRAMES = 250; // 10s @ 25fps

export const LABEL = "STARTS";
export const DOT_COLOR = "#D4AF37"; // gold pulsing dot for this one
// Set this to render real date text. Leave empty to render nothing — see
// the date-slot coordinates below for placing your own text/clip.
export const DATE_TEXT = "";

export const OUT_DURATION = 12;
export const OUT_START = DURATION_IN_FRAMES - OUT_DURATION;
export const OUT_END = DURATION_IN_FRAMES;
export const OUT_DRIFT = 20;
