import React from "react";
import { BOX_HEIGHT, BOX_RADIUS, BOX_WIDTH } from "./timing";
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
        backgroundColor: "rgba(0,0,0,0.38)",
        border: "1px solid rgba(255,255,255,0.15)",
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
