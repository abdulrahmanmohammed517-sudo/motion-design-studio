import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { montserratFontFamily } from "../shared/fonts";
import { GlassCard } from "../shared/GlassCard";
import { getOutProgress, getPopTransform } from "../shared/cardTransform";
import { JitterChartIcon } from "./JitterChartIcon";
import { BalanceScaleIcon } from "./BalanceScaleIcon";
import { BouncingCoinIcon } from "./BouncingCoinIcon";
import {
  CARD_FILL,
  CARD_GAP,
  CARD_HEIGHT,
  CARD_SHADOW,
  CARD_STARTS,
  CARD_WIDTH,
  ICON_SIZE,
  ICON_TEXT_GAP,
  OUT_END,
  OUT_START,
  POP_DURATION,
  POP_SPRING_CONFIG,
  ROW_BOTTOM_MARGIN,
  TEXTS,
} from "./timing";

export const ScenarioCards: React.FC = () => {
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
              {i === 0 ? <JitterChartIcon frame={frame} size={ICON_SIZE} /> : null}
              {i === 1 ? <BalanceScaleIcon frame={frame} size={ICON_SIZE} /> : null}
              {i === 2 ? (
                <BouncingCoinIcon frame={frame} fps={fps} startFrame={startFrame} size={ICON_SIZE} />
              ) : null}
              <span
                style={{
                  fontFamily: montserratFontFamily,
                  fontWeight: 600,
                  fontSize: 30,
                  color: "white",
                  textAlign: "center",
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
