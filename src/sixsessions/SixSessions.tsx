import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { montserratFontFamily } from "../shared/fonts";
import { GlassCard } from "../shared/GlassCard";
import { COLOR_GOLD } from "../shared/style";
import { getOutProgress, getPopTransform } from "../shared/cardTransform";
import {
  BOTTOM_MARGIN,
  CARD_FILL,
  CARD_HEIGHT,
  CARD_SHADOW,
  CARD_WIDTH,
  CIRCLE_POP_DURATION,
  CIRCLE_POP_SPRING_CONFIG,
  CIRCLE_SIZE,
  CIRCLE_STAGGER,
  CIRCLE_START,
  OUT_END,
  OUT_START,
  POP_DURATION,
  POP_SPRING_CONFIG,
  POP_START,
  ROW_LABELS,
  TITLE,
} from "./timing";

export const SixSessions: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const { scale, opacity: popOpacity } = getPopTransform(frame, fps, POP_START, POP_DURATION, POP_SPRING_CONFIG);
  const outProgress = getOutProgress(frame, OUT_START, OUT_END);
  const opacity = popOpacity * (1 - outProgress);

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
          alignItems: "center",
          justifyContent: "center",
          gap: 28,
          scale,
          opacity,
        }}
      >
        <span style={{ fontFamily: montserratFontFamily, fontWeight: 800, fontSize: 52, color: "white" }}>{TITLE}</span>

        {ROW_LABELS.map((label, row) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <span
              style={{
                fontFamily: montserratFontFamily,
                fontWeight: 600,
                fontSize: 22,
                color: "rgba(255,255,255,0.7)",
                width: 80,
              }}
            >
              {label}
            </span>
            {[0, 1, 2].map((col) => {
              const index = row * 3 + col;
              const start = CIRCLE_START + index * CIRCLE_STAGGER;
              const pop = spring({ frame: frame - start, fps, durationInFrames: CIRCLE_POP_DURATION, config: CIRCLE_POP_SPRING_CONFIG });
              const circleOpacity = interpolate(frame, [start, start + CIRCLE_POP_DURATION], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });
              return (
                <div
                  key={col}
                  style={{
                    width: CIRCLE_SIZE,
                    height: CIRCLE_SIZE,
                    borderRadius: CIRCLE_SIZE / 2,
                    backgroundColor: COLOR_GOLD,
                    scale: pop,
                    opacity: circleOpacity,
                  }}
                />
              );
            })}
          </div>
        ))}
      </GlassCard>
    </AbsoluteFill>
  );
};
