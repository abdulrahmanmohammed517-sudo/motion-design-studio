import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import {
  BOX_HEIGHT,
  BOX_RADIUS,
  BOX_WIDTH,
  BOX_Y_OFFSET,
  OUT_DRIFT,
  OUT_END,
  OUT_START,
} from "./timing";
import { getBoxPopTransform } from "./boxTransform";

// Same size, position, radius and pop-in animation as the glass box in
// UnlockOverlay (via the shared getBoxPopTransform + timing constants),
// plus the same out-fade/drift, so this lines up frame-for-frame with the
// box in UnlockOverlay when used as a Track Matte in Premiere.
export const UnlockMatte: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const { scale, opacity: popOpacity } = getBoxPopTransform(frame, fps);

  const outProgress = interpolate(frame, [OUT_START, OUT_END], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.ease),
  });

  const opacity = popOpacity * (1 - outProgress);
  const translateY = BOX_Y_OFFSET + outProgress * OUT_DRIFT;

  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          width: BOX_WIDTH,
          height: BOX_HEIGHT,
          borderRadius: BOX_RADIUS,
          backgroundColor: "white",
          scale,
          opacity,
          translate: `0 ${translateY}px`,
        }}
      />
    </AbsoluteFill>
  );
};
