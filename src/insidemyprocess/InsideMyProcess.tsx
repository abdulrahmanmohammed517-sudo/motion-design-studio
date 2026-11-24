import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { ChecklistCard } from "../shared/ChecklistCard";
import { getOutProgress } from "../shared/cardTransform";
import { APPEAR_FRAMES, CARD_WIDTH, ITEMS, OUT_DRIFT, OUT_END, OUT_START, SIDE_MARGIN, TITLE, TOP_MARGIN } from "./timing";

export const InsideMyProcess: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const outProgress = getOutProgress(frame, OUT_START, OUT_END);
  const opacity = 1 - outProgress;
  const translateY = outProgress * OUT_DRIFT;

  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", left: SIDE_MARGIN, top: TOP_MARGIN, opacity, translate: `0 ${translateY}px` }}>
        <ChecklistCard frame={frame} fps={fps} title={TITLE} items={ITEMS} appearFrames={APPEAR_FRAMES} width={CARD_WIDTH} />
      </div>
    </AbsoluteFill>
  );
};
