import React from "react";
import { interpolate } from "remotion";
import { COLOR_GOLD } from "../shared/style";
import {
  GOLD_SWITCH_FRAME,
  STEP_BASE_Y,
  STEP_COUNT,
  STEP_DRAW_DURATION,
  STEP_DRAW_STAGGER,
  STEP_HEIGHT,
  STEP_WIDTH,
  STEP_X_STEP,
  STEP_Y_STEP,
  WIDTH,
} from "./timing";

const groupWidth = (STEP_COUNT - 1) * STEP_X_STEP + STEP_WIDTH;
const groupLeft = WIDTH / 2 - groupWidth / 2;

export const MiniStaircase: React.FC<{ frame: number }> = ({ frame }) => {
  const isGold = frame >= GOLD_SWITCH_FRAME;

  return (
    <>
      {Array.from({ length: STEP_COUNT }, (_, i) => {
        const drawStart = i * STEP_DRAW_STAGGER;
        const drawProgress = interpolate(frame, [drawStart, drawStart + STEP_DRAW_DURATION], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        const left = groupLeft + i * STEP_X_STEP;
        const top = STEP_BASE_Y - i * STEP_Y_STEP;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left,
              top,
              width: STEP_WIDTH,
              height: STEP_HEIGHT,
              borderRadius: STEP_HEIGHT / 2,
              backgroundColor: isGold ? COLOR_GOLD : "white",
              opacity: drawProgress,
              scale: `${drawProgress} 1`,
              transformOrigin: "left center",
              boxShadow: isGold ? `0 0 28px 6px ${COLOR_GOLD}` : undefined,
            }}
          />
        );
      })}
    </>
  );
};
