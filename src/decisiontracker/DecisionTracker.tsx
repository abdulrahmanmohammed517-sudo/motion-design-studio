import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { montserratFontFamily } from "../shared/fonts";
import { GlassCard } from "../shared/GlassCard";
import { COLOR_GOLD, GLASS_FILL } from "../shared/style";
import { getOutProgress } from "../shared/cardTransform";
import { OUT_DURATION, PILL_HEIGHT, PILL_LEFT, PILL_RADIUS, PILL_TOP, PILL_WIDTH } from "./timing";

type DecisionTrackerProps = {
  decisionNumber?: number;
  totalDecisions?: number;
  label?: string;
  cardFill?: string;
  cardShadow?: string;
};

// The small top-left tracker pill, held still so it can be extended in
// Premiere, with a fade-out over the last OUT_DURATION frames of whatever
// duration this composition is registered with. Defaults match the
// original ThreeDecisions hand-off (decision 1/3, "WHERE YOUR MONEY LIVES").
export const DecisionTracker: React.FC<DecisionTrackerProps> = ({
  decisionNumber = 1,
  totalDecisions = 3,
  label = "WHERE YOUR MONEY LIVES",
  cardFill = GLASS_FILL,
  cardShadow,
}) => {
  const pillText = `DECISION ${decisionNumber}/${totalDecisions} · ${label}`;

  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const outStart = durationInFrames - OUT_DURATION;
  const outProgress = getOutProgress(frame, outStart, durationInFrames);
  const opacity = 1 - outProgress;

  return (
    <AbsoluteFill>
      <GlassCard
        width={PILL_WIDTH}
        height={PILL_HEIGHT}
        radius={PILL_RADIUS}
        border={`2px solid ${COLOR_GOLD}`}
        style={{
          position: "absolute",
          left: PILL_LEFT,
          top: PILL_TOP,
          backgroundColor: cardFill,
          boxShadow: cardShadow,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity,
        }}
      >
        <span
          style={{
            fontFamily: montserratFontFamily,
            fontWeight: 600,
            fontSize: 20,
            color: "white",
            whiteSpace: "nowrap",
          }}
        >
          {pillText}
        </span>
      </GlassCard>
    </AbsoluteFill>
  );
};
