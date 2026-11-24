import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { WordStack } from "../shared/WordStack";
import { getOutProgress } from "../shared/cardTransform";
import { APPEAR_FRAMES, LEFT_MARGIN, OUT_DRIFT, OUT_END, OUT_START, WORDS } from "./timing";

export const PersonalStrategic: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const outProgress = getOutProgress(frame, OUT_START, OUT_END);
  const opacity = 1 - outProgress;
  const translateY = outProgress * OUT_DRIFT;

  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center" }}>
      <div style={{ marginLeft: LEFT_MARGIN, translate: `0 ${translateY}px`, opacity }}>
        <WordStack frame={frame} fps={fps} words={WORDS} appearFrames={APPEAR_FRAMES} />
      </div>
    </AbsoluteFill>
  );
};
