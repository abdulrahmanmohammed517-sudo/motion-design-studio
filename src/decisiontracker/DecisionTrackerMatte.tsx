import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { GlassCard } from "../shared/GlassCard";
import { getOutProgress } from "../shared/cardTransform";
import { OUT_END, OUT_START, PILL_HEIGHT, PILL_LEFT, PILL_RADIUS, PILL_TOP, PILL_WIDTH } from "./timing";

export const DecisionTrackerMatte: React.FC = () => {
  const frame = useCurrentFrame();
  const outProgress = getOutProgress(frame, OUT_START, OUT_END);
  const opacity = 1 - outProgress;

  return (
    <AbsoluteFill>
      <GlassCard
        width={PILL_WIDTH}
        height={PILL_HEIGHT}
        radius={PILL_RADIUS}
        matte
        style={{ position: "absolute", left: PILL_LEFT, top: PILL_TOP, opacity }}
      />
    </AbsoluteFill>
  );
};
