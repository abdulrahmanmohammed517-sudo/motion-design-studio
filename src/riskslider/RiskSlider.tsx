import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { montserratFontFamily } from "../shared/fonts";
import { GlassCard } from "../shared/GlassCard";
import { COLOR_GOLD } from "../shared/style";
import { getOutProgress, getPopTransform } from "../shared/cardTransform";
import { getKnobPercent } from "./knobPosition";
import {
  CARD_BOTTOM_MARGIN,
  CARD_FILL,
  CARD_HEIGHT,
  CARD_SHADOW,
  CARD_WIDTH,
  KNOB_SIZE,
  LABEL_HIGH,
  LABEL_LOW,
  OUT_END,
  OUT_START,
  POP_DURATION,
  POP_SPRING_CONFIG,
  POP_START,
  TITLE_TEXT_AFTER,
  TITLE_TEXT_BEFORE,
  TITLE_TEXT_HIGHLIGHT,
  TRACK_GRADIENT,
  TRACK_HEIGHT,
  TRACK_WIDTH,
} from "./timing";

export const RiskSlider: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const { scale, opacity: popOpacity } = getPopTransform(frame, fps, POP_START, POP_DURATION, POP_SPRING_CONFIG);
  const outProgress = getOutProgress(frame, OUT_START, OUT_END);
  const opacity = popOpacity * (1 - outProgress);

  const knobPercent = getKnobPercent(frame, fps);
  const knobLeft = (knobPercent / 100) * TRACK_WIDTH - KNOB_SIZE / 2;

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "column",
        paddingBottom: CARD_BOTTOM_MARGIN,
      }}
    >
      <GlassCard
        width={CARD_WIDTH}
        height={CARD_HEIGHT}
        style={{
          backgroundColor: CARD_FILL,
          boxShadow: CARD_SHADOW,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 34,
          scale,
          opacity,
        }}
      >
        <span style={{ fontFamily: montserratFontFamily, fontWeight: 600, fontSize: 32, color: "white" }}>
          {TITLE_TEXT_BEFORE}
          <span style={{ fontWeight: 800, color: COLOR_GOLD }}>{TITLE_TEXT_HIGHLIGHT}</span>
          {TITLE_TEXT_AFTER}
        </span>

        <div style={{ position: "relative", width: TRACK_WIDTH }}>
          <div
            style={{
              width: TRACK_WIDTH,
              height: TRACK_HEIGHT,
              borderRadius: TRACK_HEIGHT / 2,
              background: TRACK_GRADIENT,
            }}
          />
          <div
            style={{
              position: "absolute",
              left: knobLeft,
              top: TRACK_HEIGHT / 2,
              translate: "0 -50%",
              width: KNOB_SIZE,
              height: KNOB_SIZE,
              borderRadius: KNOB_SIZE / 2,
              backgroundColor: "white",
              boxShadow: "0 4px 14px rgba(0,0,0,0.5)",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 16,
            }}
          >
            <span
              style={{
                fontFamily: montserratFontFamily,
                fontWeight: 600,
                fontSize: 20,
                color: "rgba(255,255,255,0.7)",
              }}
            >
              {LABEL_LOW}
            </span>
            <span
              style={{
                fontFamily: montserratFontFamily,
                fontWeight: 600,
                fontSize: 20,
                color: "rgba(255,255,255,0.7)",
              }}
            >
              {LABEL_HIGH}
            </span>
          </div>
        </div>
      </GlassCard>
    </AbsoluteFill>
  );
};
