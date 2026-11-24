import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { DateBadge } from "../shared/DateBadge";
import { getOutProgress } from "../shared/cardTransform";
import { DATE_TEXT, DOT_COLOR, LABEL, OUT_DRIFT, OUT_END, OUT_START } from "./timing";

export const StartDate: React.FC = () => {
  const frame = useCurrentFrame();

  const outProgress = getOutProgress(frame, OUT_START, OUT_END);
  const opacity = 1 - outProgress;
  const translateY = outProgress * OUT_DRIFT;

  return (
    <AbsoluteFill style={{ opacity, translate: `0 ${translateY}px` }}>
      <DateBadge label={LABEL} dotColor={DOT_COLOR} dateText={DATE_TEXT} />
    </AbsoluteFill>
  );
};
