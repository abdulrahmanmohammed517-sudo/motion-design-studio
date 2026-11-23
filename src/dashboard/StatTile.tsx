import React from "react";
import { interpolate } from "remotion";
import {
  TILE_ANIM_DURATION,
  TILE_FILL,
  TILE_HEIGHT,
  TILE_RADIUS,
  TILE_VALUE,
  TILE_VALUE_BLUR,
  TILE_WIDTH,
} from "./timing";

const UpArrow: React.FC = () => (
  <svg viewBox="0 0 16 16" width={16} height={16} fill="none">
    <path
      d="M8 13V3M8 3L3 8M8 3L13 8"
      stroke="#22C55E"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const StatTile: React.FC<{ frame: number; start: number; label: string }> = ({
  frame,
  start,
  label,
}) => {
  const progress = interpolate(frame, [start, start + TILE_ANIM_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const opacity = progress;
  const translateY = interpolate(progress, [0, 1], [20, 0]);

  return (
    <div
      style={{
        width: TILE_WIDTH,
        height: TILE_HEIGHT,
        borderRadius: TILE_RADIUS,
        backgroundColor: TILE_FILL,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 8,
        padding: "0 18px",
        opacity,
        translate: `0 ${translateY}px`,
      }}
    >
      <span style={{ fontWeight: 500, fontSize: 18, color: "rgba(255,255,255,0.65)" }}>
        {label}
      </span>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span
          style={{
            fontWeight: 800,
            fontSize: 32,
            color: "white",
            filter: `blur(${TILE_VALUE_BLUR}px)`,
          }}
        >
          {TILE_VALUE}
        </span>
        <UpArrow />
      </div>
    </div>
  );
};
