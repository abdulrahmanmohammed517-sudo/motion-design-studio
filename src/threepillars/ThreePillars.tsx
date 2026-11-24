import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { montserratFontFamily } from "../shared/fonts";
import { GlassCard } from "../shared/GlassCard";
import { getOutProgress, getPopTransform } from "../shared/cardTransform";
import { CommunityIcon, MindsetIcon, NetworkIcon } from "./PillarIcons";
import {
  CARD_FILL,
  CARD_GAP,
  CARD_HEIGHT,
  CARD_SHADOW,
  CARD_STARTS,
  CARD_WIDTH,
  ICON_SIZE,
  ICON_TEXT_GAP,
  LABELS,
  OUT_END,
  OUT_START,
  POP_DURATION,
  POP_SPRING_CONFIG,
  ROW_BOTTOM_MARGIN,
} from "./timing";

export const ThreePillars: React.FC = () => {
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
        {LABELS.map((label, i) => {
          const startFrame = CARD_STARTS[i];
          const { scale, opacity: popOpacity } = getPopTransform(
            frame,
            fps,
            startFrame,
            POP_DURATION,
            POP_SPRING_CONFIG,
          );

          return (
            <GlassCard
              key={label}
              width={CARD_WIDTH}
              height={CARD_HEIGHT}
              style={{
                backgroundColor: CARD_FILL,
                boxShadow: CARD_SHADOW,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: ICON_TEXT_GAP,
                scale,
                opacity: popOpacity * outOpacity,
              }}
            >
              {i === 0 ? <MindsetIcon size={ICON_SIZE} /> : null}
              {i === 1 ? <CommunityIcon size={ICON_SIZE} /> : null}
              {i === 2 ? <NetworkIcon size={ICON_SIZE} frame={frame} startFrame={startFrame} /> : null}
              <span style={{ fontFamily: montserratFontFamily, fontWeight: 600, fontSize: 32, color: "white" }}>
                {label}
              </span>
            </GlassCard>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
