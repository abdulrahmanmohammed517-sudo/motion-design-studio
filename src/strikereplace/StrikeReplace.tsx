import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { montserratFontFamily } from "../shared/fonts";
import { COLOR_GOLD, COLOR_RED } from "../shared/style";
import { getOutProgress } from "../shared/cardTransform";
import {
  BOTTOM_MARGIN,
  DIM_DURATION,
  DIM_OPACITY,
  LABEL_FADE_DURATION,
  LABEL_TEXT,
  MAIN_FADE_DURATION,
  MAIN_START,
  MAIN_TEXT,
  OUT_DRIFT,
  OUT_END,
  OUT_START,
  REPLACE_DURATION,
  REPLACE_SPRING_CONFIG,
  REPLACE_START,
  REPLACE_TEXT,
  STRIKE_DURATION,
  STRIKE_START,
} from "./timing";

export const StrikeReplace: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const outProgress = getOutProgress(frame, OUT_START, OUT_END);
  const opacity = 1 - outProgress;
  const translateY = outProgress * OUT_DRIFT;

  const labelOpacity = interpolate(frame, [0, LABEL_FADE_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const mainFadeOpacity = interpolate(frame, [MAIN_START, MAIN_START + MAIN_FADE_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const strikeWidth = interpolate(frame, [STRIKE_START, STRIKE_START + STRIKE_DURATION], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const dimStart = STRIKE_START + STRIKE_DURATION;
  const mainDimOpacity = interpolate(frame, [dimStart, dimStart + DIM_DURATION], [1, DIM_OPACITY], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const replaceSpring = spring({
    frame: frame - REPLACE_START,
    fps,
    durationInFrames: REPLACE_DURATION,
    config: REPLACE_SPRING_CONFIG,
  });
  const replaceTranslateY = interpolate(replaceSpring, [0, 1], [30, 0]);
  const replaceOpacity = interpolate(frame, [REPLACE_START, REPLACE_START + REPLACE_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: BOTTOM_MARGIN,
        gap: 20,
        opacity,
        translate: `0 ${translateY}px`,
      }}
    >
      <span
        style={{
          fontFamily: montserratFontFamily,
          fontWeight: 600,
          fontSize: 26,
          color: "rgba(255,255,255,0.7)",
          letterSpacing: 3,
          opacity: labelOpacity,
        }}
      >
        {LABEL_TEXT}
      </span>
      <div style={{ position: "relative" }}>
        <span
          style={{
            fontFamily: montserratFontFamily,
            fontWeight: 800,
            fontSize: 70,
            color: "white",
            opacity: mainFadeOpacity * mainDimOpacity,
          }}
        >
          {MAIN_TEXT}
        </span>
        <div
          style={{
            position: "absolute",
            left: 0,
            top: "50%",
            translate: "0 -50%",
            width: `${strikeWidth}%`,
            height: 6,
            backgroundColor: COLOR_RED,
            borderRadius: 3,
          }}
        />
      </div>
      <span
        style={{
          fontFamily: montserratFontFamily,
          fontWeight: 800,
          fontSize: 70,
          color: COLOR_GOLD,
          opacity: replaceOpacity,
          translate: `0 ${replaceTranslateY}px`,
        }}
      >
        {REPLACE_TEXT}
      </span>
    </AbsoluteFill>
  );
};
