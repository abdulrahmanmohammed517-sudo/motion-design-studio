import React from "react";
import { interpolate, spring } from "remotion";
import {
  CHECK_SIZE,
  CHECK_SPRING_CONFIG,
  CHECK_SPRING_DURATION,
  ROW2_START,
  TICK_DRAW_DURATION,
  TICK_DRAW_START,
} from "./timing";

export const CheckIcon: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  if (frame < ROW2_START) {
    return <div style={{ width: CHECK_SIZE, height: CHECK_SIZE }} />;
  }

  const scale = spring({
    frame: frame - ROW2_START,
    fps,
    durationInFrames: CHECK_SPRING_DURATION,
    config: CHECK_SPRING_CONFIG,
  });

  const tickDashoffset = interpolate(
    frame,
    [TICK_DRAW_START, TICK_DRAW_START + TICK_DRAW_DURATION],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <svg
      viewBox={`0 0 ${CHECK_SIZE} ${CHECK_SIZE}`}
      width={CHECK_SIZE}
      height={CHECK_SIZE}
      style={{ scale, transformBox: "fill-box", transformOrigin: "center" }}
    >
      <circle cx={CHECK_SIZE / 2} cy={CHECK_SIZE / 2} r={CHECK_SIZE / 2} fill="#22C55E" />
      <path
        d={`M${CHECK_SIZE * 0.27} ${CHECK_SIZE * 0.53} L${CHECK_SIZE * 0.44} ${CHECK_SIZE * 0.68} L${CHECK_SIZE * 0.74} ${CHECK_SIZE * 0.34}`}
        fill="none"
        stroke="white"
        strokeWidth={CHECK_SIZE * 0.08}
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={tickDashoffset}
      />
    </svg>
  );
};
