import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { montserratFontFamily } from "../shared/fonts";
import { GlassCard } from "../shared/GlassCard";
import { COLOR_GOLD, COLOR_GREEN } from "../shared/style";
import { getOutProgress, getPopTransform } from "../shared/cardTransform";
import { Sparkline, SheetIcon, TwoArrowsIcon } from "./RowIcons";
import {
  CARD_FILL,
  CARD_HEIGHT,
  CARD_SHADOW,
  CARD_WIDTH,
  COLUMN_ITEM_LABEL,
  COLUMN_VALUE_LABEL,
  DIM_OPACITY,
  FADED_OPACITY,
  HEADER_TEXT,
  HIGHLIGHT_DURATION,
  HIGHLIGHT_FRAMES,
  INTEREST_VALUE,
  OUT_END,
  OUT_START,
  POP_DURATION,
  POP_SPRING_CONFIG,
  POP_START,
  RENTAL_VALUE,
  ROW_APPEAR_FRAMES,
  ROW_DRAW_DURATION,
  ROW_HEIGHT,
  ROW_LABELS,
  SIDE_MARGIN,
  SPEND_VALUE,
  TOP_MARGIN,
  VALUE_BLUR,
} from "./timing";

const buildKeyframes = (i: number, startValue: number) => {
  const frames = [ROW_APPEAR_FRAMES[i], ROW_APPEAR_FRAMES[i] + ROW_DRAW_DURATION];
  const values = [0, startValue];
  frames.push(HIGHLIGHT_FRAMES[i], HIGHLIGHT_FRAMES[i] + HIGHLIGHT_DURATION);
  values.push(startValue, 1);
  if (i + 1 < HIGHLIGHT_FRAMES.length) {
    frames.push(HIGHLIGHT_FRAMES[i + 1], HIGHLIGHT_FRAMES[i + 1] + HIGHLIGHT_DURATION);
    values.push(1, FADED_OPACITY);
  }
  return { frames, values };
};

export const OneSheet: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const { scale, opacity: popOpacity } = getPopTransform(frame, fps, POP_START, POP_DURATION, POP_SPRING_CONFIG);
  const outProgress = getOutProgress(frame, OUT_START, OUT_END);
  const opacity = popOpacity * (1 - outProgress);

  return (
    <AbsoluteFill>
      <GlassCard
        width={CARD_WIDTH}
        height={CARD_HEIGHT}
        style={{
          position: "absolute",
          left: SIDE_MARGIN,
          top: TOP_MARGIN,
          backgroundColor: CARD_FILL,
          boxShadow: CARD_SHADOW,
          padding: 36,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          scale,
          opacity,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <SheetIcon size={26} />
          <span style={{ fontFamily: montserratFontFamily, fontWeight: 800, fontSize: 28, color: "white" }}>
            {HEADER_TEXT}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 20,
            paddingBottom: 10,
            borderBottom: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <span
            style={{
              fontFamily: montserratFontFamily,
              fontWeight: 600,
              fontSize: 18,
              color: "rgba(255,255,255,0.5)",
              letterSpacing: 2,
            }}
          >
            {COLUMN_ITEM_LABEL}
          </span>
          <span
            style={{
              fontFamily: montserratFontFamily,
              fontWeight: 600,
              fontSize: 18,
              color: "rgba(255,255,255,0.5)",
              letterSpacing: 2,
            }}
          >
            {COLUMN_VALUE_LABEL}
          </span>
        </div>

        {ROW_LABELS.map((label, i) => {
          const { frames, values } = buildKeyframes(i, DIM_OPACITY);
          const rowOpacity = interpolate(frame, frames, values, {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });

          const { frames: activeFrames, values: activeValues } = buildKeyframes(i, 0);
          const activeStrength = interpolate(frame, activeFrames, activeValues, {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });

          return (
            <div
              key={label}
              style={{
                height: ROW_HEIGHT,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: i < ROW_LABELS.length - 1 ? "1px solid rgba(255,255,255,0.1)" : undefined,
                paddingLeft: 14,
                boxSizing: "border-box",
                opacity: rowOpacity,
                backgroundColor: `rgba(212,175,55,${0.12 * activeStrength})`,
                borderLeft: `4px solid rgba(212,175,55,${activeStrength})`,
              }}
            >
              <span style={{ fontFamily: montserratFontFamily, fontWeight: 600, fontSize: 24, color: "white" }}>
                {label}
              </span>
              {i === 0 ? <Sparkline /> : null}
              {i === 1 ? <TwoArrowsIcon /> : null}
              {i === 2 ? (
                <span style={{ fontFamily: montserratFontFamily, fontWeight: 700, fontSize: 26, color: "white", filter: `blur(${VALUE_BLUR}px)` }}>
                  {RENTAL_VALUE}
                </span>
              ) : null}
              {i === 3 ? (
                <span style={{ fontFamily: montserratFontFamily, fontWeight: 700, fontSize: 26, color: "white", filter: `blur(${VALUE_BLUR}px)` }}>
                  {INTEREST_VALUE}
                </span>
              ) : null}
              {i === 4 ? (
                <span style={{ fontFamily: montserratFontFamily, fontWeight: 700, fontSize: 26, color: COLOR_GREEN, filter: `blur(${VALUE_BLUR}px)` }}>
                  {SPEND_VALUE}
                </span>
              ) : null}
            </div>
          );
        })}
      </GlassCard>
    </AbsoluteFill>
  );
};
