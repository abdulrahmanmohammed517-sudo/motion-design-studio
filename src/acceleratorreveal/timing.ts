import { FPS, HEIGHT, WIDTH } from "../shared/style";

export { FPS, HEIGHT, WIDTH };
export const DURATION_IN_FRAMES = 125; // 5s @ 25fps — NO fade-out, holds to the end

export const BG_COLOR = "#0A0A0A";
export const BG_RADIAL_CENTER = "#1A1A1A";

export const PARTICLE_COUNT = 30;
export const PARTICLE_SEED_PREFIX = "accelerator-dust";

export const STEP_COUNT = 5;
export const STEP_WIDTH = 320;
export const STEP_HEIGHT = 24;
export const STEP_X_STEP = 180;
export const STEP_Y_STEP = 90;
export const STEP_BASE_Y = 750; // bottom-most step's y
export const STEP_DRAW_STAGGER = 5;
export const STEP_DRAW_DURATION = 10; // frames 0 -> 30 total

export const GOLD_SWITCH_FRAME = 32;

export const SWEEP_FRAME = 36;
export const SWEEP_DURATION = 20;

export const HEADLINE_TEXT = "THE MONEY LADDER";
export const HEADLINE_FRAME = 40;
export const HEADLINE_DURATION = 12;
export const HEADLINE_SPRING_CONFIG = { damping: 12, stiffness: 180, mass: 0.6 };
export const HEADLINE_Y = 870;

export const SUBTITLE_TEXT = "ACCELERATOR";
export const SUBTITLE_FRAME = 50;
export const SUBTITLE_FADE_DURATION = 14;
export const SUBTITLE_LETTER_SPACING_FROM = 4;
export const SUBTITLE_LETTER_SPACING_TO = 22;
export const SUBTITLE_Y = 980;
