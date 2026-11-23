import React from "react";
import { interpolate } from "remotion";
import {
  ROW1_DIM_DURATION,
  ROW1_DIM_OPACITY,
  ROW1_DIM_START,
  ROW1_DURATION,
  ROW1_ICON_SIZE,
  ROW1_START,
  ROW1_TEXT,
} from "./timing";
import { ClockIcon } from "./ClockIcon";

export const Row1: React.FC<{ frame: number }> = ({ frame }) => {
  const inProgress = interpolate(frame, [ROW1_START, ROW1_START + ROW1_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const dimProgress = interpolate(
    frame,
    [ROW1_DIM_START, ROW1_DIM_START + ROW1_DIM_DURATION],
    [1, ROW1_DIM_OPACITY],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const opacity = inProgress * dimProgress;
  const translateX = interpolate(inProgress, [0, 1], [-30, 0]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 20,
        opacity,
        translate: `${translateX}px 0`,
      }}
    >
      <ClockIcon size={ROW1_ICON_SIZE} />
      <span style={{ fontWeight: 500, fontSize: 40, color: "rgba(255,255,255,0.85)" }}>
        {ROW1_TEXT}
      </span>
    </div>
  );
};
