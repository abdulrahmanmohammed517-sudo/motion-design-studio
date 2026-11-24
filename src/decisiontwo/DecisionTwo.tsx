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
  SHRINK_END,
  SHRINK_START,
} from "./timing";

type DecisionTwoProps = {
  numberText?: string;
  labelText?: string;
  pillText?: string;
  shrinkStart?: number;
  shrinkEnd?: number;
};

// No fade-out: this composition hands off directly to a DecisionTracker-
// style pill. Defaults match the original "02 · YOUR MIX & YOUR NEEDS".
export const DecisionTwo: React.FC<DecisionTwoProps> = ({
  numberText = NUMBER_TEXT,
  labelText = LABEL_TEXT,
  pillText = PILL_TEXT,
  shrinkStart = SHRINK_START,
  shrinkEnd = SHRINK_END,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const { scale, opacity } = getPopTransform(frame, fps, POP_START, POP_DURATION, POP_SPRING_CONFIG);
  const box = getCard02Box(frame, shrinkStart, shrinkEnd);
  const shrinkProgress = getShrinkProgress(frame, shrinkStart, shrinkEnd);
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
            {numberText}
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
            {labelText}
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
          {pillText}
        </span>
      </GlassCard>
    </AbsoluteFill>
  );
};
