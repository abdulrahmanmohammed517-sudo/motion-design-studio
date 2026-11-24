import { FPS, HEIGHT, WIDTH } from "../shared/style";

export { FPS, HEIGHT, WIDTH };
export const DURATION_IN_FRAMES = 175; // 7s @ 25fps

export const CARD_FILL = "rgba(0,0,0,0.5)";
export const CARD_SHADOW = "0 12px 36px rgba(0,0,0,0.3)";

export const CARD_WIDTH = 440;
export const CARD_HEIGHT = 150;
export const CARD_GAP = 40;
export const ROW_BOTTOM_MARGIN = 140; // lower third

export const CARD_STARTS = [0, 35, 70];
export const POP_DURATION = 10;
export const POP_SPRING_CONFIG = { damping: 12, stiffness: 180, mass: 0.6 };

export const ICON_SIZE = 56;
export const ICON_TEXT_GAP = 18;

export const TEXTS = ["Market goes shaky", "Portfolio unbalanced", "You need dividends"];

export const OUT_DURATION = 12;
export const OUT_START = DURATION_IN_FRAMES - OUT_DURATION;
export const OUT_END = DURATION_IN_FRAMES;

// --- Icon animation ---
export const JITTER_SEED_PREFIX = "scenario-jitter";
export const SCALE_WOBBLE_SEED = "scenario-scale-wobble";
export const COIN_DROP_SPRING_CONFIG = { damping: 7, stiffness: 180, mass: 0.8 }; // bouncy drop
export const COIN_DROP_DURATION = 20;
export const COIN_DROP_DISTANCE = 70; // px, falls from above
