import React from "react";
import { random } from "remotion";
import { JITTER_SEED_PREFIX } from "./timing";

const POINT_COUNT = 5;

export const JitterChartIcon: React.FC<{ frame: number; size: number }> = ({ frame, size }) => {
  const baseY = [36, 22, 30, 16, 26]; // a rough "shaky market" zigzag, in a 0-56 box
  const points = Array.from({ length: POINT_COUNT }, (_, i) => {
    const speed = 0.12 + random(`${JITTER_SEED_PREFIX}-speed-${i}`) * 0.18;
    const phase = random(`${JITTER_SEED_PREFIX}-phase-${i}`) * Math.PI * 2;
    const amplitude = 4 + random(`${JITTER_SEED_PREFIX}-amp-${i}`) * 5;
    const x = (i / (POINT_COUNT - 1)) * size;
    const y = baseY[i] + Math.sin(frame * speed + phase) * amplitude;
    return `${x},${y}`;
  });

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} fill="none">
      <polyline points={points.join(" ")} stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
