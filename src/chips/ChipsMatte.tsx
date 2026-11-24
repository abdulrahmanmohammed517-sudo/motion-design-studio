import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { GlassCard } from "../shared/GlassCard";
import { getOutProgress } from "../shared/cardTransform";
import {
  CHIPS,
  CHIP_GAP,
  CHIP_HEIGHT,
  CHIP_RADIUS,
  CHIP_RIGHT_MARGIN,
  CHIP_WIDTH,
  OUT_END,
  OUT_START,
  SLIDE_DISTANCE,
  SLIDE_DURATION,
  SLIDE_SPRING_CONFIG,
} from "./timing";

// Same three pill sizes, positions and per-chip slide-in animation as
// Chips, filled solid white with no content, for a Premiere Track Matte.
export const ChipsMatte: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const outProgress = getOutProgress(frame, OUT_START, OUT_END);
  const outOpacity = 1 - outProgress;

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        flexDirection: "column",
        gap: CHIP_GAP,
        paddingRight: CHIP_RIGHT_MARGIN,
      }}
    >
      {CHIPS.map(({ text, start }) => {
        const slideSpring = spring({
          frame: frame - start,
          fps,
          durationInFrames: SLIDE_DURATION,
          config: SLIDE_SPRING_CONFIG,
        });
        const translateX = interpolate(slideSpring, [0, 1], [SLIDE_DISTANCE, 0]);
        const opacity = interpolate(frame, [start, start + SLIDE_DURATION], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });

        return (
          <GlassCard
            key={text}
            width={CHIP_WIDTH}
            height={CHIP_HEIGHT}
            radius={CHIP_RADIUS}
            matte
            style={{ translate: `${translateX}px 0`, opacity: opacity * outOpacity }}
          />
        );
      })}
    </AbsoluteFill>
  );
};
