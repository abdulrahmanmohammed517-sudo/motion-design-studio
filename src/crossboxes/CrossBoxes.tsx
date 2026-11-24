import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { montserratFontFamily } from "../shared/fonts";
import { GlassCard } from "../shared/GlassCard";
import { CheckCrossIcon } from "../shared/CheckCrossIcon";
import { getOutProgress, getPopTransform } from "../shared/cardTransform";
import {
  CARD_GAP,
  CARD_HEIGHT,
  CARD_STARTS,
  CARD_WIDTH,
  ICON_DELAY,
  OUT_END,
  OUT_START,
  POP_DURATION,
  POP_SPRING_CONFIG,
  ROW_BOTTOM_MARGIN,
  TEXTS,
} from "./timing";

export const CrossBoxes: React.FC = () => {
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
        {TEXTS.map((text, i) => {
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
              key={text}
              width={CARD_WIDTH}
              height={CARD_HEIGHT}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                scale,
                opacity: popOpacity * outOpacity,
              }}
            >
              <div style={{ position: "absolute", top: 0, left: "50%", translate: "-50% -50%" }}>
                <CheckCrossIcon
                  frame={frame}
                  fps={fps}
                  startFrame={startFrame + ICON_DELAY}
                  variant="cross"
                />
              </div>
              <span
                style={{
                  fontFamily: montserratFontFamily,
                  fontWeight: 600,
                  fontSize: 32,
                  color: "white",
                  textAlign: "center",
                  padding: "0 20px",
                }}
              >
                {text}
              </span>
            </GlassCard>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
