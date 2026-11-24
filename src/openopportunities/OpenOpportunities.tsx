import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { montserratFontFamily } from "../shared/fonts";
import { GlassCard } from "../shared/GlassCard";
import { COLOR_GREEN } from "../shared/style";
import { CheckCrossIcon } from "../shared/CheckCrossIcon";
import { getOutProgress, getPopTransform } from "../shared/cardTransform";
import { RocketIcon } from "./RocketIcon";
import {
  ARROW_DRAW_DURATION,
  ARROW_FRAME,
  ARROW_TEXT,
  CARD_FILL,
  CARD_HEIGHT,
  CARD_SHADOW,
  CARD_WIDTH,
  OUT_END,
  OUT_START,
  POP_DURATION,
  POP_SPRING_CONFIG,
  POP_START,
  ROW1_TEXT,
  ROW2_DURATION,
  ROW2_START,
  ROW2_TEXT,
  SIDE_MARGIN,
  TOP_MARGIN,
} from "./timing";

export const OpenOpportunities: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const { scale, opacity: popOpacity } = getPopTransform(frame, fps, POP_START, POP_DURATION, POP_SPRING_CONFIG);
  const outProgress = getOutProgress(frame, OUT_START, OUT_END);
  const opacity = popOpacity * (1 - outProgress);

  const arrowWidth = interpolate(frame, [ARROW_FRAME, ARROW_FRAME + ARROW_DRAW_DURATION], [0, 60], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const arrowTextOpacity = interpolate(frame, [ARROW_FRAME, ARROW_FRAME + ARROW_DRAW_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const row2Opacity = interpolate(frame, [ROW2_START, ROW2_START + ROW2_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const row2TranslateY = interpolate(row2Opacity, [0, 1], [20, 0]);

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
          justifyContent: "center",
          gap: 20,
          scale,
          opacity,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <RocketIcon size={40} />
          <span style={{ fontFamily: montserratFontFamily, fontWeight: 800, fontSize: 38, color: "white" }}>
            {ROW1_TEXT}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg width={60} height={20} viewBox="0 0 60 20" style={{ opacity: arrowTextOpacity }}>
            <line x1={0} y1={10} x2={arrowWidth} y2={10} stroke="white" strokeWidth={2.5} strokeLinecap="round" />
            <path d={`M${arrowWidth - 8},4 L${arrowWidth},10 L${arrowWidth - 8},16`} stroke="white" strokeWidth={2.5} fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span
            style={{
              fontFamily: montserratFontFamily,
              fontWeight: 500,
              fontSize: 30,
              color: "rgba(255,255,255,0.8)",
              opacity: arrowTextOpacity,
            }}
          >
            {ARROW_TEXT}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            opacity: row2Opacity,
            translate: `0 ${row2TranslateY}px`,
          }}
        >
          <CheckCrossIcon frame={frame} fps={fps} startFrame={ROW2_START} variant="check" size={40} />
          <span style={{ fontFamily: montserratFontFamily, fontWeight: 600, fontSize: 32, color: COLOR_GREEN }}>
            {ROW2_TEXT}
          </span>
        </div>
      </GlassCard>
    </AbsoluteFill>
  );
};
