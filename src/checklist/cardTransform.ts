import { interpolate, spring } from "remotion";
import { CARD_POP_DURATION, CARD_POP_SPRING_CONFIG, CARD_POP_START } from "./timing";

/**
 * Pop-in transform (scale 0.85 -> 1 with overshoot, opacity 0 -> 1) for the
 * glass card. Shared by StartChecklist's card and StartChecklistMatte so
 * the two stay pixel-identical.
 */
export const getCardPopTransform = (frame: number, fps: number) => {
  const pop = spring({
    frame: frame - CARD_POP_START,
    fps,
    durationInFrames: CARD_POP_DURATION,
    config: CARD_POP_SPRING_CONFIG,
  });

  const scale = interpolate(pop, [0, 1], [0.85, 1]);

  const opacity = interpolate(
    frame,
    [CARD_POP_START, CARD_POP_START + CARD_POP_DURATION],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return { scale, opacity };
};
