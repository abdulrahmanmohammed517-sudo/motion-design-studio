import { FPS, HEIGHT, WIDTH } from "../shared/style";

export { FPS, HEIGHT, WIDTH };
export const DURATION_IN_FRAMES = 325; // 13s @ 25fps

export const SIDE_MARGIN = 120;
export const TOP_MARGIN = 220;
export const CARD_WIDTH = 760;

export const TITLE = "INSIDE MY PROCESS";
export const ITEMS = [
  "My real numbers",
  "How I built my net worth",
  "How I diversify my portfolio",
  "Stocks picked by a quant trader",
];
export const APPEAR_FRAMES = [10, 70, 140, 220];

export const OUT_DURATION = 12;
export const OUT_START = DURATION_IN_FRAMES - OUT_DURATION;
export const OUT_END = DURATION_IN_FRAMES;
export const OUT_DRIFT = 20;
