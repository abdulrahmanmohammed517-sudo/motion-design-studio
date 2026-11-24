import { FPS, HEIGHT, WIDTH } from "../shared/style";

export { FPS, HEIGHT, WIDTH };
export const DURATION_IN_FRAMES = 575; // 23s @ 25fps

export const COLUMNS = 4;
export const BOTTOM_MARGIN = 100; // lower half

export const CHIPS = [
  { text: "Your account" },
  { text: "My account" },
  { text: "Your mix" },
  { text: "Property" },
  { text: "Stock picking" },
  { text: "Angel investing" },
  { text: "Long-term wealth strategy", gold: true },
  { text: "Accelerate your revenue", gold: true },
];
export const APPEAR_FRAMES = [0, 25, 50, 100, 140, 180, 280, 420];

export const OUT_DURATION = 12;
export const OUT_START = DURATION_IN_FRAMES - OUT_DURATION;
export const OUT_END = DURATION_IN_FRAMES;
export const OUT_DRIFT = 20;
