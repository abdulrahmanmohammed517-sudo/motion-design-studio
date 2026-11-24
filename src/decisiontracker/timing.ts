import { FPS, HEIGHT, WIDTH } from "../shared/style";
import {
  PILL_HEIGHT,
  PILL_LEFT,
  PILL_RADIUS,
  PILL_TEXT,
  PILL_TOP,
  PILL_WIDTH,
} from "../threedecisions/timing";

export { FPS, HEIGHT, WIDTH };
export const DURATION_IN_FRAMES = 375; // 15s @ 25fps

// Reused directly from ThreeDecisions so this picks up exactly where its
// tracker pill ends — same size, position, text and gold border.
export { PILL_HEIGHT, PILL_LEFT, PILL_RADIUS, PILL_TEXT, PILL_TOP, PILL_WIDTH };

export const OUT_DURATION = 12; // last 12 frames
export const OUT_START = DURATION_IN_FRAMES - OUT_DURATION;
export const OUT_END = DURATION_IN_FRAMES;

// DecisionTracker2 (same component, new props + duration + card look)
export const DURATION_IN_FRAMES_2 = 500; // 20s @ 25fps
export const CARD_FILL_2 = "rgba(0,0,0,0.5)";
export const CARD_SHADOW_2 = "0 12px 36px rgba(0,0,0,0.3)";
