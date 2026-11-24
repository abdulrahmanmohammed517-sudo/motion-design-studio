import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { GlassCard } from "../shared/GlassCard";
import { getOutProgress, getPopTransform } from "../shared/cardTransform";
import {
  CARD_GAP,
  CARD_HEIGHT,
  CARD_STARTS,
  CARD_WIDTH,
  OUT_END,
  OUT_START,
  POP_DURATION,
  POP_SPRING_CONFIG,
  ROW_BOTTOM_MARGIN,
} from "./timing";

// Same three card sizes, positions and per-card pop-in timing as
// CrossBoxes, filled solid white with no content, for a Premiere Track
// Matte.
export const CrossBoxesMatte: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const outProgress = getOutProgress(frame, OUT_START, OUT_END);
  const outOpacity = 1 - outProgress;

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "column",
        paddingBottom: ROW_BOTTOM_MARGIN,
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", gap: CARD_GAP }}>
        {CARD_STARTS.map((startFrame, i) => {
          const { scale, opacity: popOpacity } = getPopTransform(
            frame,
            fps,
            startFrame,
            POP_DURATION,
            POP_SPRING_CONFIG,
          );

          return (
            <GlassCard
              key={`matte-card-${i}`}
              width={CARD_WIDTH}
              height={CARD_HEIGHT}
              matte
              style={{ scale, opacity: popOpacity * outOpacity }}
            />
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
