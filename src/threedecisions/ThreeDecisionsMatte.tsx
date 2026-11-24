import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { GlassCard } from "../shared/GlassCard";
import { getPopTransform } from "../shared/cardTransform";
import { getCard01Box } from "./card01Box";
import {
  CARD_01_ROW_TOP,
  CARD_GAP,
  CARD_HEIGHT,
  CARD_POP_DURATION,
  CARD_POP_SPRING_CONFIG,
  CARD_POP_STARTS,
  CARD_WIDTH,
  DIM_OPACITY,
  EXPAND_DURATION,
  EXPAND_FRAME,
  ROW_LEFT,
  SHRINK_END,
  SHRINK_START,
} from "./timing";

// Same three card shapes, positions and pop-in/expand/shrink animation as
// ThreeDecisions (via the shared getCard01Box + timing constants), filled
// solid white with no content, for a Premiere Track Matte.
export const ThreeDecisionsMatte: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const shrinkProgress = interpolate(frame, [SHRINK_START, SHRINK_END], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fadeOutOthers = 1 - shrinkProgress;

  const expandProgress = interpolate(frame, [EXPAND_FRAME, EXPAND_FRAME + EXPAND_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const card01Box = getCard01Box(frame);
  const { scale: card01Scale, opacity: card01Opacity } = getPopTransform(
    frame,
    fps,
    CARD_POP_STARTS[0],
    CARD_POP_DURATION,
    CARD_POP_SPRING_CONFIG,
  );

  return (
    <AbsoluteFill>
      {[1, 2].map((i) => {
        const left = ROW_LEFT + i * (CARD_WIDTH + CARD_GAP);
        const { scale, opacity: popOpacity } = getPopTransform(
          frame,
          fps,
          CARD_POP_STARTS[i],
          CARD_POP_DURATION,
          CARD_POP_SPRING_CONFIG,
        );
        const dimOpacity = interpolate(expandProgress, [0, 1], [1, DIM_OPACITY]);

        return (
          <GlassCard
            key={`matte-card-${i}`}
            width={CARD_WIDTH}
            height={CARD_HEIGHT}
            matte
            style={{
              position: "absolute",
              left,
              top: CARD_01_ROW_TOP,
              scale,
              opacity: popOpacity * dimOpacity * fadeOutOthers,
            }}
          />
        );
      })}

      <GlassCard
        width={card01Box.width}
        height={card01Box.height}
        matte
        style={{
          position: "absolute",
          left: card01Box.left,
          top: card01Box.top,
          scale: card01Scale,
          opacity: card01Opacity,
        }}
      />
    </AbsoluteFill>
  );
};
