import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import {
  CARD_BOTTOM_MARGIN,
  CARD_HEIGHT,
  CARD_RADIUS,
  CARD_WIDTH,
  OUT_DRIFT,
  OUT_END,
  OUT_START,
} from "./timing";
import { getCardPopTransform } from "./cardTransform";

// Same size, position, radius and pop-in animation as the glass card in
// StartChecklist (via the shared getCardPopTransform + timing constants),
// plus the same out-fade/drift, so this lines up frame-for-frame with the
// card in StartChecklist when used as a Track Matte in Premiere.
export const StartChecklistMatte: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const { scale, opacity: popOpacity } = getCardPopTransform(frame, fps);

  const outProgress = interpolate(frame, [OUT_START, OUT_END], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.ease),
  });

  const opacity = popOpacity * (1 - outProgress);
  const translateY = outProgress * OUT_DRIFT;

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
      <div
        style={{
          width: CARD_WIDTH,
          height: CARD_HEIGHT,
          borderRadius: CARD_RADIUS,
          backgroundColor: "white",
          scale,
          opacity,
          translate: `0 ${translateY}px`,
        }}
      />
    </AbsoluteFill>
  );
};
