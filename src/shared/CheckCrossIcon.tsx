import React from "react";
import { interpolate, spring } from "remotion";
import {
  COLOR_GREEN,
  COLOR_RED,
  ICON_DRAW_DELAY,
  ICON_DRAW_DURATION,
  ICON_SIZE,
  ICON_SPRING_CONFIG,
  ICON_SPRING_DURATION,
} from "./style";

type CheckCrossIconProps = {
  frame: number;
  fps: number;
  startFrame: number;
  variant: "check" | "cross";
  size?: number;
  /** Render at its final, settled state with no animation (e.g. "already done"). */
  static?: boolean;
};

const TICK_PATH = "M0.27 0.53 L0.44 0.68 L0.74 0.34"; // normalized to a 0-1 box, scaled below
const CROSS_PATH = "M0.3 0.3 L0.7 0.7 M0.7 0.3 L0.3 0.7";

export const CheckCrossIcon: React.FC<CheckCrossIconProps> = ({
  frame,
  fps,
  startFrame,
  variant,
  size = ICON_SIZE,
  static: isStatic = false,
}) => {
  if (!isStatic && frame < startFrame) {
    return <div style={{ width: size, height: size }} />;
  }

  const scale = isStatic
    ? 1
    : spring({
        frame: frame - startFrame,
        fps,
        durationInFrames: ICON_SPRING_DURATION,
        config: ICON_SPRING_CONFIG,
      });

  const drawStart = startFrame + ICON_DRAW_DELAY;
  const drawOffset = isStatic
    ? 0
    : interpolate(frame, [drawStart, drawStart + ICON_DRAW_DURATION], [1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });

  const color = variant === "check" ? COLOR_GREEN : COLOR_RED;
  // Scale the 0-1 normalized path coordinates up to the icon's pixel size.
  const d = (variant === "check" ? TICK_PATH : CROSS_PATH).replace(
    /(-?\d*\.?\d+)/g,
    (n) => String(Number(n) * size),
  );

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      style={{ scale, transformBox: "fill-box", transformOrigin: "center" }}
    >
      <circle cx={size / 2} cy={size / 2} r={size / 2} fill={color} />
      <path
        d={d}
        fill="none"
        stroke="white"
        strokeWidth={size * 0.08}
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={drawOffset}
      />
    </svg>
  );
};
