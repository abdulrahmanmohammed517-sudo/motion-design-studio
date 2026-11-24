import { COLOR_GOLD, COLOR_GREEN, FPS, HEIGHT, WIDTH } from "../shared/style";
import { DonutSegment } from "../shared/donutGeometry";

export { FPS, HEIGHT, WIDTH };
export const DURATION_IN_FRAMES = 150; // 6s @ 25fps

export const DIAMETER = 220;
export const THICKNESS = 32;
export const GAP = 140; // between donut centres
export const ROW_CENTER_Y = 600;

export const TITLE_TEXT = "NO ONE-SIZE-FITS-ALL";
export const TITLE_Y = 280;
export const TITLE_POP_START = 0;
export const TITLE_POP_DURATION = 10;
export const TITLE_POP_SPRING_CONFIG = { damping: 12, stiffness: 180, mass: 0.6 };

export const DONUTS: { segments: DonutSegment[]; label: string; gold?: boolean; start: number }[] = [
  {
    segments: [
      { proportion: 40, color: "white" },
      { proportion: 10, color: "rgba(255,255,255,0.8)" },
      { proportion: 30, color: COLOR_GREEN },
      { proportion: 20, color: COLOR_GOLD },
    ],
    label: "Her life",
    start: 0,
  },
  {
    segments: [
      { proportion: 15, color: "white" },
      { proportion: 35, color: "rgba(255,255,255,0.8)" },
      { proportion: 20, color: COLOR_GREEN },
      { proportion: 30, color: COLOR_GOLD },
    ],
    label: "Her needs",
    start: 12,
  },
  {
    segments: [
      { proportion: 30, color: "white" },
      { proportion: 20, color: "rgba(255,255,255,0.8)" },
      { proportion: 25, color: COLOR_GREEN },
      { proportion: 25, color: COLOR_GOLD },
    ],
    label: "Your mix",
    gold: true,
    start: 24,
  },
];

export const DRAW_DURATION = 30;
export const LABEL_GAP = 28; // px below the donut

export const OUT_DURATION = 12;
export const OUT_START = DURATION_IN_FRAMES - OUT_DURATION;
export const OUT_END = DURATION_IN_FRAMES;
