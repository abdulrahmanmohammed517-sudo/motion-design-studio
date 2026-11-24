import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { montserratFontFamily } from "../shared/fonts";
import { ChecklistCard } from "../shared/ChecklistCard";
import { COLOR_GOLD } from "../shared/style";
import { getOutProgress, getPopTransform } from "../shared/cardTransform";
import {
  APPEAR_FRAMES,
  BADGE_HEIGHT,
  BADGE_POP_DURATION,
  BADGE_POP_SPRING_CONFIG,
  BADGE_TEXT,
  BADGE_WIDTH,
  CARD_WIDTH,
  GAP_BELOW_BADGE,
  ITEMS,
  OUT_DRIFT,
  OUT_END,
  OUT_START,
  SHIMMER_PERIOD,
  SHIMMER_WIDTH,
  SIDE_MARGIN,
  TOP_MARGIN,
} from "./timing";

export const LifetimeAccess: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const outProgress = getOutProgress(frame, OUT_START, OUT_END);
  const opacity = 1 - outProgress;
  const translateY = outProgress * OUT_DRIFT;

  const { scale: badgeScale, opacity: badgeOpacity } = getPopTransform(
    frame,
    fps,
    0,
    BADGE_POP_DURATION,
    BADGE_POP_SPRING_CONFIG,
  );

  const shimmerX = ((frame % SHIMMER_PERIOD) / SHIMMER_PERIOD) * (BADGE_WIDTH + SHIMMER_WIDTH * 2) - SHIMMER_WIDTH;

  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          left: SIDE_MARGIN,
          top: TOP_MARGIN,
          display: "flex",
          flexDirection: "column",
          gap: GAP_BELOW_BADGE,
          opacity,
          translate: `0 ${translateY}px`,
        }}
      >
        <div
          style={{
            position: "relative",
            width: BADGE_WIDTH,
            height: BADGE_HEIGHT,
            borderRadius: 16,
            border: `3px solid ${COLOR_GOLD}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            scale: badgeScale,
            opacity: badgeOpacity,
          }}
        >
          <div
            style={{
              position: "absolute",
              left: shimmerX,
              top: -20,
              width: SHIMMER_WIDTH,
              height: BADGE_HEIGHT + 40,
              rotate: "20deg",
              background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)",
            }}
          />
          <span style={{ fontFamily: montserratFontFamily, fontWeight: 800, fontSize: 44, color: COLOR_GOLD, zIndex: 1 }}>
            {BADGE_TEXT}
          </span>
        </div>

        <ChecklistCard frame={frame} fps={fps} items={ITEMS} appearFrames={APPEAR_FRAMES} width={CARD_WIDTH} />
      </div>
    </AbsoluteFill>
  );
};
