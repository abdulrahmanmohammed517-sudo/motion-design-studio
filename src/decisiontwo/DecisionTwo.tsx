import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { montserratFontFamily } from "../shared/fonts";
import { GlassCard } from "../shared/GlassCard";
import { COLOR_GOLD, GLASS_BORDER } from "../shared/style";
import { getPopTransform } from "../shared/cardTransform";
import { getCard02Box, getShrinkProgress } from "./card02Box";
import {
  CARD_FILL,
  CARD_SHADOW,
  LABEL_TEXT,
  NUMBER_TEXT,
  PILL_RADIUS,
  PILL_TEXT,
  POP_DURATION,
  POP_SPRING_CONFIG,
  POP_START,
} from "./timing";

// No fade-out: this composition hands off directly to DecisionTracker2.
export const DecisionTwo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const { scale, opacity } = getPopTransform(frame, fps, POP_START, POP_DURATION, POP_SPRING_CONFIG);
  const box = getCard02Box(frame);
  const shrinkProgress = getShrinkProgress(frame);
  const isPill = shrinkProgress > 0;

  const bigOpacity = 1 - shrinkProgress;
  const pillOpacity = shrinkProgress;

  return (
    <AbsoluteFill>
      <GlassCard
        width={box.width}
        height={box.height}
        radius={isPill ? PILL_RADIUS : undefined}
        border={isPill ? `2px solid ${COLOR_GOLD}` : GLASS_BORDER}
        style={{
          position: "absolute",
          left: box.left,
          top: box.top,
          backgroundColor: CARD_FILL,
          boxShadow: CARD_SHADOW,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          overflow: "hidden",
          scale,
          opacity,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
            opacity: bigOpacity,
          }}
        >
          <span style={{ fontFamily: montserratFontFamily, fontWeight: 800, fontSize: 70, color: COLOR_GOLD }}>
            {NUMBER_TEXT}
          </span>
          <span
            style={{
              fontFamily: montserratFontFamily,
              fontWeight: 800,
              fontSize: 44,
              color: "white",
              textAlign: "center",
            }}
          >
            {LABEL_TEXT}
          </span>
        </div>
        <span
          style={{
            position: "absolute",
            fontFamily: montserratFontFamily,
            fontWeight: 600,
            fontSize: 20,
            color: "white",
            whiteSpace: "nowrap",
            opacity: pillOpacity,
          }}
        >
          {PILL_TEXT}
        </span>
      </GlassCard>
    </AbsoluteFill>
  );
};
