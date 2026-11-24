import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { ChipGrid } from "../shared/ChipGrid";
import { getOutProgress } from "../shared/cardTransform";
import { APPEAR_FRAMES, BOTTOM_MARGIN, CHIP_TEXTS, OUT_DRIFT, OUT_END, OUT_START } from "./timing";
import { ReceiptIcon, UmbrellaIcon } from "./TopicIcons";

export const ExpertTopics: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const outProgress = getOutProgress(frame, OUT_START, OUT_END);
  const opacity = 1 - outProgress;
  const translateY = outProgress * OUT_DRIFT;

  const chips = [
    { text: CHIP_TEXTS[0], icon: <UmbrellaIcon /> },
    { text: CHIP_TEXTS[1], icon: <ReceiptIcon /> },
  ];

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "column",
        paddingBottom: BOTTOM_MARGIN,
        opacity,
        translate: `0 ${translateY}px`,
      }}
    >
      <ChipGrid frame={frame} fps={fps} chips={chips} appearFrames={APPEAR_FRAMES} />
    </AbsoluteFill>
  );
};
