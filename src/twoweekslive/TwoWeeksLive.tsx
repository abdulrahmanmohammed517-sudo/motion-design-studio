import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { ChipGrid } from "../shared/ChipGrid";
import { COLOR_RED } from "../shared/style";
import { getOutProgress } from "../shared/cardTransform";
import { APPEAR_FRAMES, BOTTOM_MARGIN, CHIPS, OUT_DRIFT, OUT_END, OUT_START } from "./timing";

const PulseDotIcon: React.FC<{ frame: number }> = ({ frame }) => {
  const pulseProgress = (frame % 25) / 25;
  const ringScale = interpolate(pulseProgress, [0, 1], [1, 2.2]);
  const ringOpacity = interpolate(pulseProgress, [0, 1], [0.6, 0]);
  return (
    <div style={{ position: "relative", width: 12, height: 12 }}>
      <div style={{ position: "absolute", inset: 0, borderRadius: 6, backgroundColor: COLOR_RED, scale: ringScale, opacity: ringOpacity }} />
      <div style={{ position: "absolute", inset: 0, borderRadius: 6, backgroundColor: COLOR_RED }} />
    </div>
  );
};

export const TwoWeeksLive: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const outProgress = getOutProgress(frame, OUT_START, OUT_END);
  const opacity = 1 - outProgress;
  const translateY = outProgress * OUT_DRIFT;

  const chips = CHIPS.map((c) => ({ text: c.text, icon: c.icon === "pulse" ? <PulseDotIcon frame={frame} /> : undefined }));

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
