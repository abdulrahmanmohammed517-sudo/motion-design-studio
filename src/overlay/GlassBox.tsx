import React from "react";
import { BOX_BORDER, BOX_FILL, BOX_HEIGHT, BOX_RADIUS, BOX_WIDTH } from "./timing";
import { getBoxPopTransform } from "./boxTransform";
import { Padlock } from "./Padlock";
import { CheckBurst } from "./CheckBurst";
import { BoxText } from "./BoxText";

export const GlassBox: React.FC<{
  frame: number;
  fps: number;
  fontFamily: string;
}> = ({ frame, fps, fontFamily }) => {
  const { scale, opacity } = getBoxPopTransform(frame, fps);

  return (
    <div
      style={{
        position: "relative",
        width: BOX_WIDTH,
        height: BOX_HEIGHT,
        borderRadius: BOX_RADIUS,
        backgroundColor: BOX_FILL,
        border: BOX_BORDER,
        scale,
        opacity,
      }}
    >
      <BoxText frame={frame} fontFamily={fontFamily} />
      <Padlock frame={frame} />
      <CheckBurst frame={frame} fps={fps} />
    </div>
  );
};
