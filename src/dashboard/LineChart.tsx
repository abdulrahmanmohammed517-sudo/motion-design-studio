import React from "react";
import { interpolate, spring } from "remotion";
import {
  CHART_DOT_SPRING_CONFIG,
  CHART_DOT_SPRING_DURATION,
  CHART_DRAW_END,
  CHART_DRAW_START,
  CHART_END_POINT,
  CHART_FILL_BOTTOM,
  CHART_FILL_TOP,
  CHART_HEIGHT,
  CHART_PATH,
  CHART_STROKE,
  CHART_STROKE_WIDTH,
  CHART_WIDTH,
} from "./timing";

const AREA_PATH = `${CHART_PATH} L${CHART_WIDTH},${CHART_HEIGHT} L0,${CHART_HEIGHT} Z`;

export const LineChart: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const drawProgress = interpolate(frame, [CHART_DRAW_START, CHART_DRAW_END], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const areaOpacity = drawProgress;

  const dotScale =
    frame < CHART_DRAW_END
      ? 0
      : spring({
          frame: frame - CHART_DRAW_END,
          fps,
          durationInFrames: CHART_DOT_SPRING_DURATION,
          config: CHART_DOT_SPRING_CONFIG,
        });

  return (
    <svg
      viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
      width={CHART_WIDTH}
      height={CHART_HEIGHT}
      style={{ overflow: "visible" }}
    >
      <defs>
        <linearGradient id="chartFillGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={CHART_FILL_TOP} />
          <stop offset="100%" stopColor={CHART_FILL_BOTTOM} />
        </linearGradient>
        <filter id="chartDotGlow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>

      <path d={AREA_PATH} fill="url(#chartFillGradient)" opacity={areaOpacity} />

      <path
        d={CHART_PATH}
        fill="none"
        stroke={CHART_STROKE}
        strokeWidth={CHART_STROKE_WIDTH}
        strokeLinecap="round"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={1 - drawProgress}
      />

      <circle
        cx={CHART_END_POINT.x}
        cy={CHART_END_POINT.y}
        r={14}
        fill={CHART_STROKE}
        filter="url(#chartDotGlow)"
        opacity={0.7}
        style={{ scale: dotScale, transformBox: "fill-box", transformOrigin: "center" }}
      />
      <circle
        cx={CHART_END_POINT.x}
        cy={CHART_END_POINT.y}
        r={7}
        fill="white"
        style={{ scale: dotScale, transformBox: "fill-box", transformOrigin: "center" }}
      />
    </svg>
  );
};
