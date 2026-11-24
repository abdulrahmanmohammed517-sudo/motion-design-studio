import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { ChecklistCard } from "../shared/ChecklistCard";
import { getOutProgress } from "../shared/cardTransform";
import {
  APPEAR_STAGGER,
  APPEAR_START,
  CARD_WIDTH,
  ITEMS,
  OUT_DRIFT,
  OUT_END,
  OUT_START,
  ROW_FONT_SIZE,
  TITLE,
} from "./timing";

export const EverythingYouGet: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const outProgress = getOutProgress(frame, OUT_START, OUT_END);
  const opacity = 1 - outProgress;
  const translateY = outProgress * OUT_DRIFT;

  const appearFrames = ITEMS.map((_, i) => APPEAR_START + i * APPEAR_STAGGER);

  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", opacity, translate: `0 ${translateY}px` }}>
      <ChecklistCard
        frame={frame}
        fps={fps}
        title={TITLE}
        items={ITEMS}
        appearFrames={appearFrames}
        width={CARD_WIDTH}
        rowFontSize={ROW_FONT_SIZE}
      />
    </AbsoluteFill>
  );
};
