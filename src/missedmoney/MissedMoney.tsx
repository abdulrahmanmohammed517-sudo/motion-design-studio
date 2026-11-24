import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { montserratFontFamily } from "../shared/fonts";
import { GlassCard } from "../shared/GlassCard";
import { COLOR_GREEN, COLOR_RED } from "../shared/style";
import { getOutProgress, getPopTransform } from "../shared/cardTransform";
import {
  CARD_FILL,
  CARD_HEIGHT,
  CARD_SHADOW,
  CARD_WIDTH,
  CASH_TEXT,
  NUMBERS,
  NUMBER_BUMP_DURATION,
  NUMBER_STARTS,
  OUT_END,
  OUT_START,
  POP_DURATION,
  POP_SPRING_CONFIG,
  POP_START,
  SIDE_MARGIN,
  STAMP_FRAME,
  STAMP_ROTATION,
  STAMP_SPRING_CONFIG,
  STAMP_SPRING_DURATION,
  STAMP_TEXT,
  SUBTEXT,
  SUBTEXT_FADE_DURATION,
  SUBTEXT_START,
  TOP_MARGIN,
} from "./timing";

const BankIcon: React.FC = () => (
  <svg viewBox="0 0 44 44" width={32} height={32} fill="none">
    <path d="M4 18L22 6L40 18" stroke="white" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 18V36M18 18V36M26 18V36M36 18V36" stroke="white" strokeWidth={2.5} strokeLinecap="round" />
    <path d="M4 36H40" stroke="white" strokeWidth={2.5} strokeLinecap="round" />
  </svg>
);

export const MissedMoney: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const { scale, opacity: popOpacity } = getPopTransform(frame, fps, POP_START, POP_DURATION, POP_SPRING_CONFIG);
  const outProgress = getOutProgress(frame, OUT_START, OUT_END);
  const opacity = popOpacity * (1 - outProgress);

  const subtextOpacity = interpolate(frame, [SUBTEXT_START, SUBTEXT_START + SUBTEXT_FADE_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const activeIndex = NUMBER_STARTS.reduce((acc, start, i) => (frame >= start ? i : acc), -1);
  const numberStart = activeIndex >= 0 ? NUMBER_STARTS[activeIndex] : 0;
  const numberOpacity = interpolate(frame, [numberStart, numberStart + 4], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const bumpProgress = interpolate(frame, [numberStart, numberStart + NUMBER_BUMP_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const numberScale = interpolate(bumpProgress, [0, 0.4, 1], [1, 1.15, 1]);

  const stampSpring = spring({
    frame: frame - STAMP_FRAME,
    fps,
    durationInFrames: STAMP_SPRING_DURATION,
    config: STAMP_SPRING_CONFIG,
  });
  const stampVisible = frame >= STAMP_FRAME;
  const stampScale = interpolate(stampSpring, [0, 1], [1.6, 1]);
  const shake = stampVisible ? Math.sin(frame * 3) * interpolate(frame, [STAMP_FRAME, STAMP_FRAME + 8], [4, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) : 0;
  const greyProgress = interpolate(frame, [STAMP_FRAME, STAMP_FRAME + 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <GlassCard
        width={CARD_WIDTH}
        height={CARD_HEIGHT}
        style={{
          position: "absolute",
          left: SIDE_MARGIN,
          top: TOP_MARGIN,
          backgroundColor: CARD_FILL,
          boxShadow: CARD_SHADOW,
          padding: 40,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: 16,
          scale,
          opacity,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <BankIcon />
          <span style={{ fontFamily: montserratFontFamily, fontWeight: 800, fontSize: 44, color: "white" }}>
            {CASH_TEXT}
          </span>
        </div>

        <span
          style={{
            fontFamily: montserratFontFamily,
            fontWeight: 500,
            fontSize: 26,
            color: "rgba(255,255,255,0.7)",
            opacity: subtextOpacity,
          }}
        >
          {SUBTEXT}
        </span>

        <div style={{ position: "relative", height: 100 }}>
          <span
            style={{
              position: "absolute",
              fontFamily: montserratFontFamily,
              fontWeight: 800,
              fontSize: 90,
              color: COLOR_GREEN,
              opacity: numberOpacity * (1 - greyProgress),
              scale: numberScale,
            }}
          >
            {activeIndex >= 0 ? NUMBERS[activeIndex] : ""}
          </span>
          <span
            style={{
              position: "absolute",
              fontFamily: montserratFontFamily,
              fontWeight: 800,
              fontSize: 90,
              color: "#8A8A8A",
              opacity: numberOpacity * greyProgress,
              scale: numberScale,
            }}
          >
            {activeIndex >= 0 ? NUMBERS[activeIndex] : ""}
          </span>

          {stampVisible ? (
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                rotate: `${STAMP_ROTATION}deg`,
                border: `5px solid ${COLOR_RED}`,
                borderRadius: 12,
                padding: "10px 28px",
                scale: stampScale,
                translate: `calc(-50% + ${shake}px) -50%`,
              }}
            >
              <span style={{ fontFamily: montserratFontFamily, fontWeight: 800, fontSize: 64, color: COLOR_RED }}>
                {STAMP_TEXT}
              </span>
            </div>
          ) : null}
        </div>
      </GlassCard>
    </AbsoluteFill>
  );
};
