import React from "react";
import { interpolate } from "remotion";
import {
  ROW2_EMPHASIS_COLOR,
  ROW2_EMPHASIS_TEXT,
  ROW2_PREFIX_TEXT,
  ROW2_START,
  UNDERLINE_DURATION,
  UNDERLINE_START,
} from "./timing";
import { CheckIcon } from "./CheckIcon";

export const Row2: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const opacity = frame < ROW2_START ? 0 : 1;

  const underlineWidth = interpolate(
    frame,
    [UNDERLINE_START, UNDERLINE_START + UNDERLINE_DURATION],
    [0, 100],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 20, opacity }}>
      <CheckIcon frame={frame} fps={fps} />
      <div style={{ display: "flex", alignItems: "baseline" }}>
        <span style={{ fontWeight: 600, fontSize: 40, color: "white" }}>{ROW2_PREFIX_TEXT}</span>
        <span style={{ position: "relative", display: "inline-block" }}>
          <span
            style={{
              fontWeight: 800,
              fontSize: 50,
              textTransform: "uppercase",
              letterSpacing: 1,
              color: ROW2_EMPHASIS_COLOR,
            }}
          >
            {ROW2_EMPHASIS_TEXT}
          </span>
          <span
            style={{
              position: "absolute",
              left: 0,
              bottom: -4,
              height: 4,
              width: `${underlineWidth}%`,
              backgroundColor: ROW2_EMPHASIS_COLOR,
              borderRadius: 2,
            }}
          />
        </span>
      </div>
    </div>
  );
};
