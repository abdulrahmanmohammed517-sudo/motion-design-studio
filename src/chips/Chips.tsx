import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { montserratFontFamily } from "../shared/fonts";
import { GlassCard } from "../shared/GlassCard";
import { getOutProgress } from "../shared/cardTransform";
import { ChipIconGlyph } from "./ChipIcons";
import {
  CHIPS,
  CHIP_GAP,
  CHIP_HEIGHT,
  CHIP_RADIUS,
  CHIP_RIGHT_MARGIN,
  CHIP_WIDTH,
  ICON_SIZE,
  ICON_TEXT_GAP,
  OUT_END,
  OUT_START,
  SLIDE_DISTANCE,
  SLIDE_DURATION,
  SLIDE_SPRING_CONFIG,
} from "./timing";

export const Chips: React.FC = () => {
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
      {CHIPS.map(({ text, icon, start, gold }) => {
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
            style={{
              display: "flex",
              alignItems: "center",
              gap: ICON_TEXT_GAP,
              padding: "0 32px",
              boxSizing: "border-box",
              translate: `${translateX}px 0`,
              opacity: opacity * outOpacity,
            }}
          >
            <ChipIconGlyph icon={icon} size={ICON_SIZE} gold={gold} />
            <span
              style={{
                fontFamily: montserratFontFamily,
                fontWeight: 600,
                fontSize: 28,
                color: gold ? "#D4AF37" : "white",
              }}
            >
              {text}
            </span>
          </GlassCard>
        );
      })}
    </AbsoluteFill>
  );
};
