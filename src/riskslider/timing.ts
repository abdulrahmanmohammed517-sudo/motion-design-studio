import { FPS, HEIGHT, WIDTH } from "../shared/style";

export { FPS, HEIGHT, WIDTH };
export const DURATION_IN_FRAMES = 175; // 7s @ 25fps

export const CARD_FILL = "rgba(0,0,0,0.5)";
export const CARD_SHADOW = "0 12px 36px rgba(0,0,0,0.3)";

export const CARD_WIDTH = 900;
export const CARD_HEIGHT = 200;
export const CARD_BOTTOM_MARGIN = 160; // centre-lower

export const POP_START = 0;
export const POP_DURATION = 10;
export const POP_SPRING_CONFIG = { damping: 12, stiffness: 180, mass: 0.6 };

export const TITLE_TEXT_BEFORE = "What are ";
export const TITLE_TEXT_HIGHLIGHT = "YOU";
export const TITLE_TEXT_AFTER = " willing to risk?";

export const TRACK_WIDTH = 760;
export const TRACK_HEIGHT = 10;
export const TRACK_GRADIENT = "linear-gradient(90deg, #22C55E 0%, #D4AF37 50%, #FF3B30 100%)";

export const LABEL_LOW = "LOW RISK";
export const LABEL_HIGH = "HIGH RISK";

export const KNOB_SIZE = 34;
// Knob position as a 0-100 percentage along the track.
export const KNOB_POS_CENTRE = 50;
export const KNOB_POS_LEFT = 12;
export const KNOB_POS_RIGHT = 88;
export const KNOB_POS_FINAL = 58; // slightly right of centre

export const KNOB_SWING_1_FRAME = 25; // swings to near-left
export const KNOB_SWING_2_FRAME = 50; // swings to near-right
export const KNOB_SETTLE_FRAME = 75; // settles with spring
export const KNOB_SETTLE_DURATION = 22;
export const KNOB_SETTLE_SPRING_CONFIG = { damping: 10, stiffness: 180, mass: 0.7 };

export const OUT_DURATION = 12;
export const OUT_START = DURATION_IN_FRAMES - OUT_DURATION;
export const OUT_END = DURATION_IN_FRAMES;
