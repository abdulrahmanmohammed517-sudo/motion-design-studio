import React from "react";
import { interpolate } from "remotion";
import { montserratFontFamily } from "../shared/fonts";
import {
  ARROW_END,
  ARROW_START,
  CALLOUT_TEXT_X,
  CALLOUT_TEXT_Y,
  STEP_ONE_CALLOUT_FADE_DURATION,
  STEP_ONE_CALLOUT_FRAME,
  STEP_ONE_CALLOUT_TEXT,
} from "./timing";

export const Callout: React.FC<{ frame: number }> = ({ frame }) => {
  if (frame < STEP_ONE_CALLOUT_FRAME) {
    return null;
  }

  const opacity = interpolate(
    frame,
    [STEP_ONE_CALLOUT_FRAME, STEP_ONE_CALLOUT_FRAME + STEP_ONE_CALLOUT_FADE_DURATION],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const minX = Math.min(ARROW_START.x, ARROW_END.x) - 20;
  const minY = Math.min(ARROW_START.y, ARROW_END.y) - 20;
  const maxX = Math.max(ARROW_START.x, ARROW_END.x) + 20;
  const maxY = Math.max(ARROW_START.y, ARROW_END.y) + 20;

  return (
    <>
      <span
        style={{
          position: "absolute",
          left: CALLOUT_TEXT_X,
          top: CALLOUT_TEXT_Y,
          fontFamily: montserratFontFamily,
          fontWeight: 800,
          fontSize: 30,
          color: "white",
          whiteSpace: "nowrap",
          opacity,
        }}
      >
        {STEP_ONE_CALLOUT_TEXT}
      </span>
      <svg
        style={{ position: "absolute", left: minX, top: minY, opacity }}
        width={maxX - minX}
        height={maxY - minY}
        viewBox={`${minX} ${minY} ${maxX - minX} ${maxY - minY}`}
      >
        <defs>
          <marker
            id="staircaseArrowhead"
            markerWidth={8}
            markerHeight={8}
            refX={4}
            refY={4}
            orient="auto"
          >
            <path d="M0,0 L8,4 L0,8 Z" fill="white" />
          </marker>
        </defs>
        <line
          x1={ARROW_START.x}
          y1={ARROW_START.y}
          x2={ARROW_END.x}
          y2={ARROW_END.y}
          stroke="white"
          strokeWidth={3}
          markerEnd="url(#staircaseArrowhead)"
        />
      </svg>
    </>
  );
};
