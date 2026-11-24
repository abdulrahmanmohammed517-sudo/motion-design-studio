import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { montserratFontFamily } from "../shared/fonts";
import { GlassCard } from "../shared/GlassCard";
import { CheckCrossIcon } from "../shared/CheckCrossIcon";
import { getOutProgress, getPopTransform } from "../shared/cardTransform";
import {
  CARD_HEIGHT,
  CARD_WIDTH,
  ICON_START,
  OUT_END,
  OUT_START,
  POP_DURATION,
  POP_SPRING_CONFIG,
  POP_START,
  TEXT,
} from "./timing";

export const CheckBox: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const { scale, opacity: popOpacity } = getPopTransform(
    frame,
    fps,
    POP_START,
    POP_DURATION,
    POP_SPRING_CONFIG,
  );
  const outProgress = getOutProgress(frame, OUT_START, OUT_END);
  const opacity = popOpacity * (1 - outProgress);

  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <GlassCard
        width={CARD_WIDTH}
        height={CARD_HEIGHT}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          scale,
          opacity,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            translate: "-50% -50%",
          }}
        >
          <CheckCrossIcon frame={frame} fps={fps} startFrame={ICON_START} variant="check" />
        </div>
        <span
          style={{
            fontFamily: montserratFontFamily,
            fontWeight: 600,
            fontSize: 34,
            color: "white",
            textAlign: "center",
          }}
        >
          {TEXT}
        </span>
      </GlassCard>
    </AbsoluteFill>
  );
};
