import { interpolate, spring } from "remotion";
import { PANEL_POP_DURATION, PANEL_POP_SPRING_CONFIG, PANEL_POP_START } from "./timing";

/**
 * Pop-in transform (scale 0.85 -> 1 with overshoot, opacity 0 -> 1) for the
 * glass panel. Shared by DashboardTease's panel and DashboardTeaseMatte so
 * the two stay pixel-identical.
 */
export const getPanelPopTransform = (frame: number, fps: number) => {
  const pop = spring({
    frame: frame - PANEL_POP_START,
    fps,
    durationInFrames: PANEL_POP_DURATION,
    config: PANEL_POP_SPRING_CONFIG,
  });

  const scale = interpolate(pop, [0, 1], [0.85, 1]);

  const opacity = interpolate(
    frame,
    [PANEL_POP_START, PANEL_POP_START + PANEL_POP_DURATION],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return { scale, opacity };
};
