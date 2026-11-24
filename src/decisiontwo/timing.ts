import { FPS, HEIGHT, WIDTH } from "../shared/style";
import { PILL_HEIGHT, PILL_LEFT, PILL_RADIUS, PILL_TOP, PILL_WIDTH } from "../threedecisions/timing";

export { FPS, HEIGHT, WIDTH };
export const DURATION_IN_FRAMES = 100; // 4s @ 25fps

// This batch's GlassCard look (darker fill + shadow) — see src/shared/style.ts
// for the original 0.38-fill/no-shadow look used by earlier compositions.
export const CARD_FILL = "rgba(0,0,0,0.5)";
export const CARD_SHADOW = "0 12px 36px rgba(0,0,0,0.3)";

export const CARD_WIDTH = 760;
export const CARD_HEIGHT = 200;
export const CARD_CENTER_X = WIDTH / 2;
export const CARD_CENTER_Y = HEIGHT / 2;
export const CARD_LEFT = CARD_CENTER_X - CARD_WIDTH / 2;
export const CARD_TOP = CARD_CENTER_Y - CARD_HEIGHT / 2;

export const POP_START = 0;
export const POP_DURATION = 10;
export const POP_SPRING_CONFIG = { damping: 12, stiffness: 180, mass: 0.6 };

export const NUMBER_TEXT = "02";
export const LABEL_TEXT = "YOUR MIX & YOUR NEEDS";

export const SHRINK_START = 65;
export const SHRINK_END = 100;

// Reused so the hand-off to DecisionTracker2 lines up exactly.
export { PILL_HEIGHT, PILL_LEFT, PILL_RADIUS, PILL_TOP, PILL_WIDTH };
export const PILL_TEXT = "DECISION 2/3 · YOUR MIX & YOUR NEEDS";
