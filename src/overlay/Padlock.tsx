import React from "react";
import { interpolate } from "remotion";
import {
  PADLOCK_SHRINK_DURATION,
  PADLOCK_SHRINK_START,
  PADLOCK_SIZE,
} from "./timing";

const VIEWBOX_W = 70;
const VIEWBOX_H = 86;

export const Padlock: React.FC<{ frame: number }> = ({ frame }) => {
  const shrinkEnd = PADLOCK_SHRINK_START + PADLOCK_SHRINK_DURATION;

  if (frame >= shrinkEnd) {
    return null;
  }

  const scale = interpolate(frame, [PADLOCK_SHRINK_START, shrinkEnd], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: "50%",
        translate: "-50% -50%",
        scale,
        width: PADLOCK_SIZE,
        height: (PADLOCK_SIZE * VIEWBOX_H) / VIEWBOX_W,
      }}
    >
      <svg
        viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
        width="100%"
        height="100%"
        fill="none"
      >
        <path
          d="M19 36V24C19 13.5066 27.5066 5 38 5C48.4934 5 57 13.5066 57 24V36"
          stroke="white"
          strokeWidth={9}
          strokeLinecap="round"
        />
        <rect x={8} y={34} width={60} height={48} rx={10} fill="white" />
        <circle cx={38} cy={54} r={7} fill="rgba(20,20,20,0.55)" />
        <rect x={34} y={58} width={8} height={14} rx={3} fill="rgba(20,20,20,0.55)" />
      </svg>
    </div>
  );
};
