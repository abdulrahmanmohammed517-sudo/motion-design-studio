import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import {
  BOX_BORDER,
  BOX_FILL,
  BOX_HEIGHT,
  BOX_PLATE_OUT_END,
  BOX_PLATE_OUT_START,
  BOX_RADIUS,
  BOX_WIDTH,
  BOX_Y_OFFSET,
  OUT_DRIFT,
} from "./timing";
import { getBoxPopTransform } from "./boxTransform";

// Bare glass box plate — background + rounded corners + stroke, with the
// same pop-in and out-fade/drift as the box in UnlockOverlay, but no text,
// padlock or checkmark. Drop your own text animation on top of this (in
// Remotion or in Premiere) instead of baking copy into the box itself.
export const UnlockBoxPlate: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const { scale, opacity: popOpacity } = getBoxPopTransform(frame, fps);

  const outProgress = interpolate(frame, [BOX_PLATE_OUT_START, BOX_PLATE_OUT_END], [0, 1], {
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
          backgroundColor: BOX_FILL,
          border: BOX_BORDER,
          scale,
          opacity,
          translate: `0 ${translateY}px`,
        }}
      />
    </AbsoluteFill>
  );
};
