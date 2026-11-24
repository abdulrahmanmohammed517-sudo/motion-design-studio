import React from "react";
import { interpolate, spring } from "remotion";
import { COLOR_GOLD } from "../shared/style";
import { COIN_DROP_DISTANCE, COIN_DROP_DURATION, COIN_DROP_SPRING_CONFIG } from "./timing";

export const BouncingCoinIcon: React.FC<{ frame: number; fps: number; startFrame: number; size: number }> = ({
  frame,
  fps,
  startFrame,
  size,
}) => {
  const drop = spring({
    frame: frame - startFrame,
    fps,
    durationInFrames: COIN_DROP_DURATION,
    config: COIN_DROP_SPRING_CONFIG,
  });
  const translateY = interpolate(drop, [0, 1], [-COIN_DROP_DISTANCE, 0]);
  const opacity = interpolate(frame, [startFrame, startFrame + 6], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ translate: `0 ${translateY}px`, opacity }}>
      <svg viewBox="0 0 56 56" width={size} height={size} fill="none">
        <circle cx={28} cy={28} r={26} fill={COLOR_GOLD} />
        <circle cx={28} cy={28} r={20} fill="none" stroke="rgba(0,0,0,0.25)" strokeWidth={2} />
        <text x={28} y={37} textAnchor="middle" fontSize={26} fontWeight={800} fill="rgba(0,0,0,0.75)">
          £
        </text>
      </svg>
    </div>
  );
};
