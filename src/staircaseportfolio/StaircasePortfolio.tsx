import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { montserratFontFamily } from "../shared/fonts";
import { COLOR_GOLD } from "../shared/style";
import { Staircase } from "../staircase/Staircase";
import { HEADLINE_DURATION, HEADLINE_FRAME, HEADLINE_SPRING_CONFIG, HEADLINE_TEXT, HEADLINE_Y } from "./timing";

export const StaircasePortfolio: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headlineSpring = spring({
    frame: frame - HEADLINE_FRAME,
    fps,
    durationInFrames: HEADLINE_DURATION,
    config: HEADLINE_SPRING_CONFIG,
  });
  const headlineTranslateY = interpolate(headlineSpring, [0, 1], [30, 0]);
  const headlineOpacity = interpolate(frame, [HEADLINE_FRAME, HEADLINE_FRAME + HEADLINE_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <Staircase mode="portfolio" />
      <span
        style={{
          position: "absolute",
          left: "50%",
          top: HEADLINE_Y,
          translate: `-50% ${headlineTranslateY}px`,
          fontFamily: montserratFontFamily,
          fontWeight: 800,
          fontSize: 72,
          color: COLOR_GOLD,
          whiteSpace: "nowrap",
          opacity: headlineOpacity,
        }}
      >
        {HEADLINE_TEXT}
      </span>
    </AbsoluteFill>
  );
};
