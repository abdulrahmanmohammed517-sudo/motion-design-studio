import { FPS, HEIGHT, WIDTH } from "../shared/style";

export { FPS, HEIGHT, WIDTH };
export const DURATION_IN_FRAMES = 125; // 5s @ 25fps

export const BOTTOM_MARGIN = 140; // lower third
export const CHIPS = [
  { text: "2 WEEKS" },
  { text: "LIVE", icon: "pulse" as const },
  { text: "SELECT FEW" },
];
export const APPEAR_FRAMES = [0, 18, 36];

export const OUT_DURATION = 12;
export const OUT_START = DURATION_IN_FRAMES - OUT_DURATION;
export const OUT_END = DURATION_IN_FRAMES;
export const OUT_DRIFT = 20;
