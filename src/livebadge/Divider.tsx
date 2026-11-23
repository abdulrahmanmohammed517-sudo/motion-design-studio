import React from "react";
import { interpolate } from "remotion";
import { DIVIDER_DRAW_DURATION, DIVIDER_DRAW_START, DIVIDER_HEIGHT } from "./timing";

export const Divider: React.FC<{ frame: number }> = ({ frame }) => {
  const width = interpolate(
    frame,
    [DIVIDER_DRAW_START, DIVIDER_DRAW_START + DIVIDER_DRAW_DURATION],
    [0, 100],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <div
      style={{
        height: DIVIDER_HEIGHT,
        width: `${width}%`,
        backgroundColor: "rgba(255,255,255,0.15)",
      }}
    />
  );
};
