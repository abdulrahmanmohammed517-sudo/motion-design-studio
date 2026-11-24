import React from "react";
import { interpolate } from "remotion";
import { montserratFontFamily } from "../shared/fonts";
import { COLOR_GOLD, COLOR_GREEN } from "../shared/style";
import {
  DRAW_DURATION,
  LABEL_GAP,
  STEP_BASE_X,
  STEP_BASE_Y,
  STEP_HEIGHT,
  STEP_RADIUS,
  STEP_WIDTH,
  STEP_X_STEP,
  STEP_Y_STEP,
} from "./timing";

type StepBarProps = {
  index: number;
  drawStart: number;
  /** "dim" (default, white 25%), "green" (achieved) or "gold" (lit up). */
  state?: "dim" | "green" | "gold";
  /** 0 -> 1 fade-in strength of the gold glow (lets the light-up ease in). */
  glowOpacity?: number;
  label?: string;
  drawDuration?: number;
};

export const StepBar: React.FC<{ frame: number } & StepBarProps> = ({
  frame,
  index,
  drawStart,
  state = "dim",
  glowOpacity = 0,
  label,
  drawDuration = DRAW_DURATION,
}) => {
  const drawProgress = interpolate(frame, [drawStart, drawStart + drawDuration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const left = STEP_BASE_X + index * STEP_X_STEP;
  const top = STEP_BASE_Y - index * STEP_Y_STEP;

  const fill =
    state === "green" ? COLOR_GREEN : state === "gold" ? COLOR_GOLD : "rgba(255,255,255,0.25)";

  return (
    <div
      style={{
        position: "absolute",
        left,
        top,
        width: STEP_WIDTH,
        height: STEP_HEIGHT,
        borderRadius: STEP_RADIUS,
        backgroundColor: fill,
        opacity: drawProgress,
        scale: `${drawProgress} 1`,
        transformOrigin: "left center",
        boxShadow: glowOpacity > 0 ? `0 0 ${24 * glowOpacity}px ${4 * glowOpacity}px ${COLOR_GOLD}` : undefined,
      }}
    >
      {label ? (
        <span
          style={{
            position: "absolute",
            left: 0,
            bottom: STEP_HEIGHT + LABEL_GAP,
            fontFamily: montserratFontFamily,
            fontWeight: 600,
            fontSize: 22,
            color: state === "gold" ? COLOR_GOLD : "white",
            whiteSpace: "nowrap",
            opacity: drawProgress,
          }}
        >
          {label}
        </span>
      ) : null}
    </div>
  );
};
