import { FPS, HEIGHT, WIDTH } from "../shared/style";

export { FPS, HEIGHT, WIDTH };
export const DURATION_IN_FRAMES = 250; // 10s @ 25fps

export const CHIP_WIDTH = 460;
export const CHIP_HEIGHT = 90;
export const CHIP_RADIUS = CHIP_HEIGHT / 2;
export const CHIP_RIGHT_MARGIN = 100;
export const CHIP_GAP = 24;
export const ICON_SIZE = 28;
export const ICON_TEXT_GAP = 20;

export const SLIDE_DISTANCE = 160; // px, from the right
export const SLIDE_DURATION = 12;
export const SLIDE_SPRING_CONFIG = { damping: 14, stiffness: 180, mass: 0.6 };

export type ChipIcon = "chart" | "umbrella" | "arrow";

export const CHIPS: { text: string; icon: ChipIcon; start: number; gold?: boolean }[] = [
  { text: "Stocks & Shares ISA", icon: "chart", start: 0 },
  { text: "Pensions", icon: "umbrella", start: 50 },
  { text: "Maximise your money", icon: "arrow", start: 120, gold: true },
];

export const OUT_DURATION = 12; // last 12 frames, all fade together
export const OUT_START = DURATION_IN_FRAMES - OUT_DURATION;
export const OUT_END = DURATION_IN_FRAMES;
