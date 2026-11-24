import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { montserratFontFamily } from "../shared/fonts";
import { BOTTOM_MARGIN, FADE_DURATION, TEXT } from "./timing";

export const Disclaimer: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, FADE_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: BOTTOM_MARGIN,
      }}
    >
      <span style={{ fontFamily: montserratFontFamily, fontWeight: 500, fontSize: 20, color: "rgba(255,255,255,0.6)", opacity }}>
        {TEXT}
      </span>
    </AbsoluteFill>
  );
};
