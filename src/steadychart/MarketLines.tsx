import React from "react";
import { interpolate, random } from "remotion";
import { COLOR_GOLD, COLOR_GREEN, COLOR_RED } from "../shared/style";
import {
  AREA_HEIGHT,
  AREA_WIDTH,
  DRAW_END,
  DRAW_START,
  JAGGED_OPACITY,
  JAGGED_POINT_COUNT,
  JAGGED_SEED_PREFIX,
  JAGGED_STROKE_WIDTH,
  SMOOTH_STROKE_WIDTH,
} from "./timing";

export const MarketLines: React.FC<{ frame: number }> = ({ frame }) => {
  const overallProgress = interpolate(frame, [DRAW_START, DRAW_END], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Deterministic jagged "market" points: a gentle rising trend plus
  // seeded random volatility.
  const jaggedPoints = Array.from({ length: JAGGED_POINT_COUNT }, (_, i) => {
    const x = (i / (JAGGED_POINT_COUNT - 1)) * AREA_WIDTH;
    const trendY = AREA_HEIGHT * 0.75 - (i / (JAGGED_POINT_COUNT - 1)) * AREA_HEIGHT * 0.3;
    const noise = (random(`${JAGGED_SEED_PREFIX}-${i}`) - 0.5) * AREA_HEIGHT * 0.3;
    return { x, y: trendY + noise };
  });

  const smoothEnd = { x: AREA_WIDTH, y: AREA_HEIGHT * 0.12 };
  const smoothStart = { x: 0, y: AREA_HEIGHT * 0.82 };
  const smoothControl1 = { x: AREA_WIDTH * 0.35, y: smoothStart.y };
  const smoothControl2 = { x: AREA_WIDTH * 0.65, y: smoothEnd.y };
  const smoothPath = `M${smoothStart.x},${smoothStart.y} C${smoothControl1.x},${smoothControl1.y} ${smoothControl2.x},${smoothControl2.y} ${smoothEnd.x},${smoothEnd.y}`;

  return (
    <svg width={AREA_WIDTH} height={AREA_HEIGHT} viewBox={`0 0 ${AREA_WIDTH} ${AREA_HEIGHT}`} style={{ overflow: "visible" }}>
      <defs>
        <filter id="steadyGlow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>

      {jaggedPoints.slice(0, -1).map((point, i) => {
        const segStart = i / (JAGGED_POINT_COUNT - 1);
        const segEnd = (i + 1) / (JAGGED_POINT_COUNT - 1);
        const segProgress = interpolate(overallProgress, [segStart, segEnd], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        const next = jaggedPoints[i + 1];
        const rising = next.y < point.y;

        return (
          <line
            key={point.x}
            x1={point.x}
            y1={point.y}
            x2={interpolate(segProgress, [0, 1], [point.x, next.x])}
            y2={interpolate(segProgress, [0, 1], [point.y, next.y])}
            stroke={rising ? COLOR_GREEN : COLOR_RED}
            strokeWidth={JAGGED_STROKE_WIDTH}
            strokeLinecap="round"
            opacity={JAGGED_OPACITY}
          />
        );
      })}

      <path
        d={smoothPath}
        fill="none"
        stroke={COLOR_GOLD}
        strokeWidth={SMOOTH_STROKE_WIDTH}
        strokeLinecap="round"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={1 - overallProgress}
      />
      {overallProgress >= 0.999 ? (
        <>
          <circle cx={smoothEnd.x} cy={smoothEnd.y} r={14} fill={COLOR_GOLD} filter="url(#steadyGlow)" opacity={0.7} />
          <circle cx={smoothEnd.x} cy={smoothEnd.y} r={7} fill="white" />
        </>
      ) : null}
    </svg>
  );
};
