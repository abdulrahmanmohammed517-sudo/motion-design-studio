import React from "react";
import { DOT_COLOR, DOT_PULSE_PERIOD } from "./timing";

export const PulsingDot: React.FC<{ frame: number }> = ({ frame }) => {
  const opacity = 0.65 + 0.35 * Math.cos((2 * Math.PI * frame) / DOT_PULSE_PERIOD);

  return (
    <div
      style={{
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: DOT_COLOR,
        opacity,
      }}
    />
  );
};
