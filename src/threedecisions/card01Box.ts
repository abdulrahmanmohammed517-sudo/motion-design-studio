import { interpolate } from "remotion";
import {
  CARD_01_CENTER_X,
  CARD_01_CENTER_Y,
  CARD_HEIGHT,
  CARD_WIDTH,
  EXPAND_DURATION,
  EXPAND_FRAME,
  EXPANDED_HEIGHT,
  EXPANDED_WIDTH,
  PILL_HEIGHT,
  PILL_LEFT,
  PILL_TOP,
  PILL_WIDTH,
  SHRINK_END,
  SHRINK_START,
} from "./timing";

/**
 * Card 01's box (left/top/width/height) through all three phases: the row,
 * the expand-in-place morph, and the shrink-and-move into the top-left
 * tracker pill. Shared by ThreeDecisions and ThreeDecisionsMatte so the two
 * stay pixel-identical.
 */
export const getCard01Box = (frame: number) => {
  const expandProgress = interpolate(frame, [EXPAND_FRAME, EXPAND_FRAME + EXPAND_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Expand in place: width/height grow, centre stays fixed.
  const expandedW = interpolate(expandProgress, [0, 1], [CARD_WIDTH, EXPANDED_WIDTH]);
  const expandedH = interpolate(expandProgress, [0, 1], [CARD_HEIGHT, EXPANDED_HEIGHT]);
  const expandedLeft = CARD_01_CENTER_X - expandedW / 2;
  const expandedTop = CARD_01_CENTER_Y - expandedH / 2;

  if (frame < SHRINK_START) {
    return { left: expandedLeft, top: expandedTop, width: expandedW, height: expandedH };
  }

  const shrinkProgress = interpolate(frame, [SHRINK_START, SHRINK_END], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Shrink and move: from the expanded box to the top-left pill.
  const width = interpolate(shrinkProgress, [0, 1], [EXPANDED_WIDTH, PILL_WIDTH]);
  const height = interpolate(shrinkProgress, [0, 1], [EXPANDED_HEIGHT, PILL_HEIGHT]);
  const left = interpolate(shrinkProgress, [0, 1], [expandedLeft, PILL_LEFT]);
  const top = interpolate(shrinkProgress, [0, 1], [expandedTop, PILL_TOP]);

  return { left, top, width, height };
};

export const getCard01BorderIsGold = (frame: number) => frame >= EXPAND_FRAME;
