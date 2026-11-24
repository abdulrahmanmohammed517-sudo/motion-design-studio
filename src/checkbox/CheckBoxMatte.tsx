import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { GlassCard } from "../shared/GlassCard";
import { getOutProgress, getPopTransform } from "../shared/cardTransform";
import {
  CARD_HEIGHT,
  CARD_WIDTH,
  OUT_END,
  OUT_START,
  POP_DURATION,
  POP_SPRING_CONFIG,
  POP_START,
} from "./timing";

// Same size, position and pop-in/out animation as CheckBox's card, filled
// solid white with no content, for use as a Premiere Track Matte.
export const CheckBoxMatte: React.FC = () => {
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
      <GlassCard width={CARD_WIDTH} height={CARD_HEIGHT} matte style={{ scale, opacity }} />
    </AbsoluteFill>
  );
};
