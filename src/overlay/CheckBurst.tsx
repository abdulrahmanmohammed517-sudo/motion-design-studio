import React from "react";
import { interpolate, spring } from "remotion";
import {
  CHECK_SIZE,
  CHECK_SPRING_CONFIG,
  CHECK_SPRING_DURATION,
  CHECK_START,
  FLASH_RING_DURATION,
  FLASH_RING_START,
  TICK_DRAW_DURATION,
  TICK_DRAW_START,
} from "./timing";

export const CheckBurst: React.FC<{ frame: number; fps: number }> = ({
  frame,
  fps,
}) => {
  if (frame < CHECK_START) {
    return null;
  }

  const checkScale = spring({
    frame: frame - CHECK_START,
    fps,
    durationInFrames: CHECK_SPRING_DURATION,
    config: CHECK_SPRING_CONFIG,
  });

  const ringProgress = interpolate(
    frame,
    [FLASH_RING_START, FLASH_RING_START + FLASH_RING_DURATION],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const ringScale = interpolate(ringProgress, [0, 1], [1, 1.8]);
  const ringOpacity = interpolate(ringProgress, [0, 1], [0.8, 0]);

  const tickDashoffset = interpolate(
    frame,
    [TICK_DRAW_START, TICK_DRAW_START + TICK_DRAW_DURATION],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: "50%",
        translate: "-50% -50%",
        width: CHECK_SIZE,
        height: CHECK_SIZE,
      }}
    >
      <svg
        viewBox={`0 0 ${CHECK_SIZE} ${CHECK_SIZE}`}
        width={CHECK_SIZE}
        height={CHECK_SIZE}
        style={{ position: "absolute", inset: 0, scale: ringScale, opacity: ringOpacity }}
      >
        <circle
          cx={CHECK_SIZE / 2}
          cy={CHECK_SIZE / 2}
          r={CHECK_SIZE / 2 - 4}
          fill="none"
          stroke="white"
          strokeWidth={4}
        />
      </svg>

      <svg
        viewBox={`0 0 ${CHECK_SIZE} ${CHECK_SIZE}`}
        width={CHECK_SIZE}
        height={CHECK_SIZE}
        style={{
          position: "absolute",
          inset: 0,
          scale: checkScale,
          filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.35))",
        }}
      >
        <circle cx={CHECK_SIZE / 2} cy={CHECK_SIZE / 2} r={CHECK_SIZE / 2} fill="#22C55E" />
        <path
          d="M30 58 L48 75 L82 38"
          fill="none"
          stroke="white"
          strokeWidth={9}
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={tickDashoffset}
        />
      </svg>
    </div>
  );
};
