import React from "react";
import { interpolate } from "remotion";
import { COLOR_GOLD } from "./style";

type MiniStaircaseIconProps = {
  frame: number;
  startFrame: number;
  drawDuration: number;
  width: number;
  height: number;
  /** Indices (0-4) of steps rendered gold; others render white. */
  litIndices?: number[];
};

const STEP_COUNT = 5;

/** A small 5-step ascending staircase icon (bottom-left to top-right),
 * drawing in step by step. Used as a decorative accent, distinct from the
 * full Staircase composition component. */
export const MiniStaircaseIcon: React.FC<MiniStaircaseIconProps> = ({
  frame,
  startFrame,
  drawDuration,
  width,
  height,
  litIndices = [],
}) => {
  const stepWidth = width * 0.45;
  const stepHeight = height * 0.1;
  const xStep = (width - stepWidth) / (STEP_COUNT - 1);
  const yStep = (height - stepHeight) / (STEP_COUNT - 1);
  const stagger = drawDuration / STEP_COUNT / 2;
  const perStepDuration = drawDuration - stagger * (STEP_COUNT - 1);

  return (
    <div style={{ position: "relative", width, height }}>
      {Array.from({ length: STEP_COUNT }, (_, i) => {
        const stepStart = startFrame + i * stagger;
        const progress = interpolate(frame, [stepStart, stepStart + perStepDuration], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: i * xStep,
              bottom: i * yStep,
              width: stepWidth,
              height: stepHeight,
              borderRadius: stepHeight / 2,
              backgroundColor: litIndices.includes(i) ? COLOR_GOLD : "white",
              opacity: progress,
              scale: `${progress} 1`,
              transformOrigin: "left center",
            }}
          />
        );
      })}
    </div>
  );
};
