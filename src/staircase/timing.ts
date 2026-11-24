import { FPS, HEIGHT, WIDTH } from "../shared/style";

export { FPS, HEIGHT, WIDTH };
export const DURATION_IN_FRAMES = 200; // 8s @ 25fps

// --- Layout (5 ascending steps, bottom-left to top-right) ---
export const STEP_COUNT = 5;
export const STEP_WIDTH = 220;
export const STEP_HEIGHT = 18;
export const STEP_RADIUS = 9;
export const STEP_X_STEP = 140; // px shift right per step
export const STEP_Y_STEP = 130; // px shift up per step
export const STEP_BASE_X = 160; // left edge of step 1 — left-half placement
export const STEP_BASE_Y = 820; // top of step 1's bar, near the bottom
export const LABEL_GAP = 16; // px between label baseline and bar top

// --- Draw-in (frames 0 -> 20) ---
export const DRAW_STAGGER = 3; // frames between each step's draw-in start
export const DRAW_DURATION = 8;

// --- Step labels (bigLeagues mode; index 0 has none — it's already achieved) ---
export const STEP_LABELS = ["", "Add to it", "Diversify", "Property", "THE BIG LEAGUES"];

// --- mode: stepOne ---
export const STEP_ONE_CHECK_FRAME = 24;
export const STEP_ONE_CALLOUT_FRAME = 32;
export const STEP_ONE_CALLOUT_FADE_DURATION = 8;
export const STEP_ONE_CALLOUT_TEXT = "MOST PEOPLE STOP HERE";
// Arrow points from the callout text back at step 1's right edge.
export const CALLOUT_TEXT_X = STEP_BASE_X + STEP_WIDTH + 90;
export const CALLOUT_TEXT_Y = STEP_BASE_Y + STEP_HEIGHT / 2 - 40;
export const ARROW_START = { x: CALLOUT_TEXT_X - 10, y: CALLOUT_TEXT_Y + 20 };
export const ARROW_END = { x: STEP_BASE_X + STEP_WIDTH + 14, y: STEP_BASE_Y + STEP_HEIGHT / 2 };

// --- mode: bigLeagues ---
export const BIG_LEAGUES_LIGHT_FRAMES = [10, 22, 34, 46]; // steps 2-5
export const BIG_LEAGUES_LIGHT_DURATION = 8;

// --- Out ---
export const OUT_DURATION = 15; // last 15 frames
export const OUT_START = DURATION_IN_FRAMES - OUT_DURATION;
export const OUT_END = DURATION_IN_FRAMES;
export const OUT_DRIFT = 20;

// --- mode: portfolio (all 5 steps light up gold in sequence) ---
export const PORTFOLIO_DRAW_STAGGER = 2;
export const PORTFOLIO_DRAW_DURATION = 7; // all 5 draw in within frames 0 -> 15
export const PORTFOLIO_LIGHT_FRAMES = [20, 55, 90, 125, 160];
export const PORTFOLIO_LIGHT_DURATION = 8;
export const PORTFOLIO_LABELS = ["Property", "Stock market", "Pension", "Commercial property", "Angel investing"];
