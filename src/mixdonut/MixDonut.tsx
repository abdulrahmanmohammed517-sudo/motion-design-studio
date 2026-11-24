import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { montserratFontFamily } from "../shared/fonts";
import { COLOR_GOLD } from "../shared/style";
import { getOutProgress } from "../shared/cardTransform";
import { LabeledDonut } from "./LabeledDonut";
import {
  CENTER_X,
  CENTER_Y,
  DIAMETER,
  FOOTER_FADE_DURATION,
  FOOTER_FRAME,
  FOOTER_TEXT_AFTER,
  FOOTER_TEXT_BEFORE,
  FOOTER_TEXT_HIGHLIGHT,
  OUT_END,
  OUT_START,
} from "./timing";

export const MixDonut: React.FC = () => {
  const frame = useCurrentFrame();

  const outProgress = getOutProgress(frame, OUT_START, OUT_END);
  const opacity = 1 - outProgress;

  const footerOpacity = interpolate(frame, [FOOTER_FRAME, FOOTER_FRAME + FOOTER_FADE_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ opacity }}>
      <LabeledDonut frame={frame} />
      <span
        style={{
          position: "absolute",
          left: CENTER_X,
          top: CENTER_Y + DIAMETER / 2 + 70,
          translate: "-50% 0",
          fontFamily: montserratFontFamily,
          fontWeight: 800,
          fontSize: 48,
          color: "white",
          whiteSpace: "nowrap",
          opacity: footerOpacity,
        }}
      >
        {FOOTER_TEXT_BEFORE}
        <span style={{ color: COLOR_GOLD }}>{FOOTER_TEXT_HIGHLIGHT}</span>
        {FOOTER_TEXT_AFTER}
      </span>
    </AbsoluteFill>
  );
};
