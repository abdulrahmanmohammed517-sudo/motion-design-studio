import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { montserratFontFamily } from "../shared/fonts";
import { getOutProgress } from "../shared/cardTransform";
import {
  DURATION_IN_FRAMES,
  FADE_DURATION,
  LETTER_SPACING_FROM,
  LETTER_SPACING_TO,
  SCALE_FROM,
  SCALE_TO,
  TEXT,
} from "./timing";

const OUT_DURATION = 12;
const OUT_START = DURATION_IN_FRAMES - OUT_DURATION;
const OUT_DRIFT = 20;

export const IndecisionWord: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const fadeInOpacity = interpolate(frame, [0, FADE_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scale = interpolate(frame, [0, durationInFrames], [SCALE_FROM, SCALE_TO]);
  const letterSpacing = interpolate(frame, [0, durationInFrames], [LETTER_SPACING_FROM, LETTER_SPACING_TO]);

  const outProgress = getOutProgress(frame, OUT_START, durationInFrames);
  const outOpacity = 1 - outProgress;
  const translateY = outProgress * OUT_DRIFT;

  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <span
        style={{
          fontFamily: montserratFontFamily,
          fontWeight: 800,
          fontSize: 110,
          color: "white",
          letterSpacing,
          scale,
          opacity: fadeInOpacity * outOpacity,
          translate: `0 ${translateY}px`,
        }}
      >
        {TEXT}
      </span>
    </AbsoluteFill>
  );
};
