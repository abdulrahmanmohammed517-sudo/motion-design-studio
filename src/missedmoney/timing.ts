import { CARD_FILL, CARD_SHADOW, FPS, HEIGHT, WIDTH } from "../shared/style";

export { CARD_FILL, CARD_SHADOW, FPS, HEIGHT, WIDTH };
export const DURATION_IN_FRAMES = 275; // 11s @ 25fps

export const CARD_WIDTH = 620;
export const CARD_HEIGHT = 340;
export const SIDE_MARGIN = 120; // position constant — side of frame
export const TOP_MARGIN = 260;

export const POP_START = 0;
export const POP_DURATION = 10;
export const POP_SPRING_CONFIG = { damping: 12, stiffness: 180, mass: 0.6 };

export const CASH_TEXT = "£200K SITTING IN CASH";

export const SUBTEXT = "Could have made";
export const SUBTEXT_START = 30;
export const SUBTEXT_FADE_DURATION = 8;

export const NUMBERS = ["£30K", "£40K", "£50K"];
export const NUMBER_STARTS = [45, 70, 95];
export const NUMBER_BUMP_DURATION = 8;

export const STAMP_FRAME = 140;
export const STAMP_SPRING_DURATION = 14;
export const STAMP_SPRING_CONFIG = { damping: 7, stiffness: 180, mass: 0.8 };
export const STAMP_TEXT = "MISSED";
export const STAMP_ROTATION = -10;

export const OUT_DURATION = 12;
export const OUT_START = DURATION_IN_FRAMES - OUT_DURATION;
export const OUT_END = DURATION_IN_FRAMES;
