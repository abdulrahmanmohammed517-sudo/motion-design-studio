import { interpolate, spring } from "remotion";
import { BOX_POP_DURATION, BOX_POP_SPRING_CONFIG, BOX_POP_START } from "./timing";

/**
 * Pop-in transform (scale 0.8 -> 1 with overshoot, opacity 0 -> 1) for the
 * glass box. Shared by UnlockOverlay's GlassBox and UnlockMatte's box so
 * the two stay pixel-identical.
 */
export const getBoxPopTransform = (frame: number, fps: number) => {
  const pop = spring({
    frame: frame - BOX_POP_START,
    fps,
    durationInFrames: BOX_POP_DURATION,
    config: BOX_POP_SPRING_CONFIG,
  });

  const scale = interpolate(pop, [0, 1], [0.8, 1]);

  const opacity = interpolate(
    frame,
    [BOX_POP_START, BOX_POP_START + BOX_POP_DURATION],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return { scale, opacity };
};
