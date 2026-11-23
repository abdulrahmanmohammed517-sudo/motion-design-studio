import React from "react";
import { interpolate } from "remotion";
import { DOT_COLOR, DOT_SIZE, PULSE_PERIOD } from "./timing";

export const PulseDot: React.FC<{ frame: number }> = ({ frame }) => {
  const cycleProgress = (frame % PULSE_PERIOD) / PULSE_PERIOD;
  const ringScale = interpolate(cycleProgress, [0, 1], [1, 2.2]);
  const ringOpacity = interpolate(cycleProgress, [0, 1], [0.6, 0]);

  return (
    <div style={{ position: "relative", width: DOT_SIZE, height: DOT_SIZE }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: DOT_SIZE / 2,
          backgroundColor: DOT_COLOR,
          scale: ringScale,
          opacity: ringOpacity,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: DOT_SIZE / 2,
          backgroundColor: DOT_COLOR,
        }}
      />
    </div>
  );
};
