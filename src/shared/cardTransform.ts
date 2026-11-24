import { Easing, interpolate, spring } from "remotion";

export type SpringConfig = { damping: number; stiffness: number; mass: number };

/** Spring pop-in: scale fromScale -> 1 with overshoot, opacity 0 -> 1. */
export const getPopTransform = (
  frame: number,
  fps: number,
  popStart: number,
  popDuration: number,
  springConfig: SpringConfig,
  fromScale = 0.85,
) => {
  const pop = spring({
    frame: frame - popStart,
    fps,
    durationInFrames: popDuration,
    config: springConfig,
  });
  const scale = interpolate(pop, [0, 1], [fromScale, 1]);
  const opacity = interpolate(frame, [popStart, popStart + popDuration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return { scale, opacity };
};

/** 0 -> 1 eased progress through an out-fade window. */
export const getOutProgress = (frame: number, outStart: number, outEnd: number) =>
  interpolate(frame, [outStart, outEnd], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.ease),
  });
