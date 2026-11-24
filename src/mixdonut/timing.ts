import { COLOR_GOLD, COLOR_GREEN, FPS, HEIGHT, WIDTH } from "../shared/style";
import { DonutSegment } from "../shared/donutGeometry";

export { FPS, HEIGHT, WIDTH };
export const DURATION_IN_FRAMES = 325; // 13s @ 25fps

export const DIAMETER = 420;
export const THICKNESS = 60;
export const RIGHT_MARGIN = 180;
export const CENTER_X = WIDTH - RIGHT_MARGIN - DIAMETER / 2;
export const CENTER_Y = 470;

export const EMPTY_RING_OPACITY = 0.08;

export const SEGMENTS: (DonutSegment & { label: string })[] = [
  { proportion: 30, color: "white", label: "Country mix" },
  { proportion: 20, color: "rgba(255,255,255,0.8)", label: "Currency mix" },
  { proportion: 25, color: COLOR_GREEN, label: "Tech stocks" },
  { proportion: 25, color: COLOR_GOLD, label: "Blue chip stocks" },
];

export const SEGMENT_STARTS = [0, 50, 100, 150];
export const SEGMENT_DRAW_DURATION = 25;

export const LEADER_INNER_GAP = 10; // px beyond the outer ring edge
export const LEADER_LENGTH = 50;
export const LABEL_GAP = 12; // px beyond the leader line's end

export const FOOTER_TEXT_BEFORE = "…for ";
export const FOOTER_TEXT_HIGHLIGHT = "YOU";
export const FOOTER_TEXT_AFTER = "?";
export const FOOTER_FRAME = 270;
export const FOOTER_FADE_DURATION = 10;

export const OUT_DURATION = 12;
export const OUT_START = DURATION_IN_FRAMES - OUT_DURATION;
export const OUT_END = DURATION_IN_FRAMES;
