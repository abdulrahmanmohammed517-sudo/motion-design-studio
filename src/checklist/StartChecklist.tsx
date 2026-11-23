import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { loadFont } from "@remotion/google-fonts/Montserrat";
import {
  CARD_BORDER,
  CARD_BOTTOM_MARGIN,
  CARD_FILL,
  CARD_HEIGHT,
  CARD_PADDING,
  CARD_RADIUS,
  CARD_ROW_GAP,
  CARD_WIDTH,
  OUT_DRIFT,
  OUT_END,
  OUT_START,
} from "./timing";
import { getCardPopTransform } from "./cardTransform";
import { Row1 } from "./Row1";
import { Row2 } from "./Row2";

const { fontFamily } = loadFont("normal", {
  weights: ["500", "600", "800"],
  subsets: ["latin"],
});

export const StartChecklist: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const { scale: popScale, opacity: popOpacity } = getCardPopTransform(frame, fps);

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
          fontFamily,
          width: CARD_WIDTH,
          height: CARD_HEIGHT,
          borderRadius: CARD_RADIUS,
          backgroundColor: CARD_FILL,
          border: CARD_BORDER,
          padding: CARD_PADDING,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: CARD_ROW_GAP,
          scale: popScale,
          opacity,
          translate: `0 ${translateY}px`,
        }}
      >
        <Row1 frame={frame} />
        <Row2 frame={frame} fps={fps} />
      </div>
    </AbsoluteFill>
  );
};
