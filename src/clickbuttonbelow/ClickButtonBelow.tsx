import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { montserratFontFamily } from "../shared/fonts";
import { GlassCard } from "../shared/GlassCard";
import { COLOR_GOLD } from "../shared/style";
import { getPopTransform } from "../shared/cardTransform";
import {
  ARROW_BOUNCE_DISTANCE,
  ARROW_BOUNCE_PERIOD,
  ARROW_GAP,
  ARROW_SIZE,
  BOTTOM_MARGIN,
  CARD_FILL,
  CARD_HEIGHT,
  CARD_SHADOW,
  CARD_WIDTH,
  GLOW_PERIOD,
  POP_DURATION,
  POP_SPRING_CONFIG,
  POP_START,
  TITLE_TEXT,
} from "./timing";

export const ClickButtonBelow: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const { scale, opacity } = getPopTransform(frame, fps, POP_START, POP_DURATION, POP_SPRING_CONFIG);

  const bouncePhase = (frame % ARROW_BOUNCE_PERIOD) / ARROW_BOUNCE_PERIOD;
  const arrowTranslateY = Math.sin(bouncePhase * Math.PI) * ARROW_BOUNCE_DISTANCE;

  const glowPhase = (frame % GLOW_PERIOD) / GLOW_PERIOD;
  const glowStrength = Math.sin(glowPhase * Math.PI * 2) * 0.5 + 0.5;

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "column",
        paddingBottom: BOTTOM_MARGIN,
        gap: ARROW_GAP,
      }}
    >
      <GlassCard
        width={CARD_WIDTH}
        height={CARD_HEIGHT}
        border={`2px solid ${COLOR_GOLD}`}
        style={{
          backgroundColor: CARD_FILL,
          boxShadow: `${CARD_SHADOW}, 0 0 ${20 * glowStrength}px ${4 * glowStrength}px rgba(212,175,55,${0.6 * glowStrength})`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          scale,
          opacity,
        }}
      >
        <span style={{ fontFamily: montserratFontFamily, fontWeight: 800, fontSize: 50, color: "white", textAlign: "center" }}>
          {TITLE_TEXT}
        </span>
      </GlassCard>

      <svg width={ARROW_SIZE} height={ARROW_SIZE} viewBox="0 0 80 80" style={{ translate: `0 ${arrowTranslateY}px`, opacity }}>
        <path d="M40 10V60M40 60L20 40M40 60L60 40" stroke={COLOR_GOLD} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    </AbsoluteFill>
  );
};
