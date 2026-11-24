import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { ChipGrid } from "../shared/ChipGrid";
import { getOutProgress } from "../shared/cardTransform";
import { APPEAR_FRAMES, BOTTOM_MARGIN, CHIPS, COLUMNS, OUT_DRIFT, OUT_END, OUT_START } from "./timing";

export const WhatWeCover: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const outProgress = getOutProgress(frame, OUT_START, OUT_END);
  const opacity = 1 - outProgress;
  const translateY = outProgress * OUT_DRIFT;

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
      <ChipGrid frame={frame} fps={fps} chips={CHIPS} appearFrames={APPEAR_FRAMES} columns={COLUMNS} style={{ maxWidth: 1500 }} />
    </AbsoluteFill>
  );
};
