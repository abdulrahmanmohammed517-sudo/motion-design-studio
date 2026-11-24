import { interpolate } from "remotion";
import {
  CARD_HEIGHT,
  CARD_LEFT,
  CARD_TOP,
  CARD_WIDTH,
  PILL_HEIGHT,
  PILL_LEFT,
  PILL_TOP,
  PILL_WIDTH,
  SHRINK_END,
  SHRINK_START,
} from "./timing";

/** Card box (left/top/width/height): static at its centred size, then
 * shrinks and moves into the top-left tracker pill over SHRINK_START ->
 * SHRINK_END. */
export const getCard02Box = (frame: number) => {
  if (frame < SHRINK_START) {
    return { left: CARD_LEFT, top: CARD_TOP, width: CARD_WIDTH, height: CARD_HEIGHT };
  }

  const shrinkProgress = interpolate(frame, [SHRINK_START, SHRINK_END], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const width = interpolate(shrinkProgress, [0, 1], [CARD_WIDTH, PILL_WIDTH]);
  const height = interpolate(shrinkProgress, [0, 1], [CARD_HEIGHT, PILL_HEIGHT]);
  const left = interpolate(shrinkProgress, [0, 1], [CARD_LEFT, PILL_LEFT]);
  const top = interpolate(shrinkProgress, [0, 1], [CARD_TOP, PILL_TOP]);

  return { left, top, width, height };
};

export const getShrinkProgress = (frame: number) =>
  interpolate(frame, [SHRINK_START, SHRINK_END], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
