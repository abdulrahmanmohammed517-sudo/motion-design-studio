import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { montserratFontFamily } from "../shared/fonts";
import { GlassCard } from "../shared/GlassCard";
import { COLOR_GOLD } from "../shared/style";
import { getOutProgress } from "../shared/cardTransform";
import { OUT_END, OUT_START, PILL_HEIGHT, PILL_LEFT, PILL_RADIUS, PILL_TEXT, PILL_TOP, PILL_WIDTH } from "./timing";

// Just the small top-left tracker pill from the end of ThreeDecisions,
// held still so it can be extended in Premiere, with a fade-out at the end.
export const DecisionTracker: React.FC = () => {
  const frame = useCurrentFrame();
  const outProgress = getOutProgress(frame, OUT_START, OUT_END);
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
          {PILL_TEXT}
        </span>
      </GlassCard>
    </AbsoluteFill>
  );
};
