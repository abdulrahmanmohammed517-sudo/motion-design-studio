import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { montserratFontFamily } from "../shared/fonts";
import { GlassCard } from "../shared/GlassCard";
import { COLOR_RED } from "../shared/style";
import { CheckCrossIcon } from "../shared/CheckCrossIcon";
import { getOutProgress, getPopTransform } from "../shared/cardTransform";
import {
  BOTTOM_MARGIN,
  CARD_FILL,
  CARD_HEIGHT,
  CARD_SHADOW,
  CARD_WIDTH,
  COUNTER_START,
  COUNTER_STEP,
  COUNTER_VALUES,
  HEADLINE_DURATION,
  HEADLINE_FRAME,
  HEADLINE_TEXT,
  OUT_END,
  OUT_START,
  POP_DURATION,
  POP_SPRING_CONFIG,
  POP_START,
  X_COLUMNS,
  X_COUNT,
  X_GAP,
  X_SIZE,
  X_STAGGER,
  X_START,
  X_SUBLABEL,
  YEARS_LABEL,
} from "./timing";

export const YearsOfErrors: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const { scale, opacity: popOpacity } = getPopTransform(frame, fps, POP_START, POP_DURATION, POP_SPRING_CONFIG);
  const outProgress = getOutProgress(frame, OUT_START, OUT_END);
  const opacity = popOpacity * (1 - outProgress);

  const counterIndex = COUNTER_VALUES.reduce(
    (acc, _, i) => (frame >= COUNTER_START + i * COUNTER_STEP ? i : acc),
    0,
  );

  const headlineProgress = interpolate(frame, [HEADLINE_FRAME, HEADLINE_FRAME + HEADLINE_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "column",
        paddingBottom: BOTTOM_MARGIN,
      }}
    >
      <GlassCard
        width={CARD_WIDTH}
        height={CARD_HEIGHT}
        style={{
          backgroundColor: CARD_FILL,
          boxShadow: CARD_SHADOW,
          padding: 40,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          scale,
          opacity,
        }}
      >
        <div style={{ display: "flex", flex: 1, alignItems: "center", gap: 40 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ fontFamily: montserratFontFamily, fontWeight: 800, fontSize: 110, color: "white" }}>
              {COUNTER_VALUES[counterIndex]}
            </span>
            <span style={{ fontFamily: montserratFontFamily, fontWeight: 600, fontSize: 24, color: "rgba(255,255,255,0.7)" }}>
              {YEARS_LABEL}
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${X_COLUMNS}, auto)`,
              gap: X_GAP,
              flex: 1,
              justifyItems: "center",
            }}
          >
            {Array.from({ length: X_COUNT }, (_, i) => {
              const start = X_START + i * X_STAGGER;
              return (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                  <CheckCrossIcon frame={frame} fps={fps} startFrame={start} variant="cross" size={X_SIZE} />
                  <span style={{ fontFamily: montserratFontFamily, fontWeight: 600, fontSize: 16, color: COLOR_RED, opacity: frame >= start ? 1 : 0 }}>
                    {X_SUBLABEL}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <span
          style={{
            fontFamily: montserratFontFamily,
            fontWeight: 800,
            fontSize: 44,
            color: COLOR_RED,
            opacity: headlineProgress,
            translate: `0 ${interpolate(headlineProgress, [0, 1], [20, 0])}px`,
            textAlign: "center",
          }}
        >
          {HEADLINE_TEXT}
        </span>
      </GlassCard>
    </AbsoluteFill>
  );
};
