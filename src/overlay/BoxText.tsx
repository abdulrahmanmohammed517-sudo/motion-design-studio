import React from "react";
import { interpolate } from "remotion";
import { TEXT_SWAP_DURATION, TEXT_SWAP_START } from "./timing";

const textStyle: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontSize: 64,
  fontWeight: 600,
  letterSpacing: 2,
  textAlign: "center",
  whiteSpace: "nowrap",
};

export const BoxText: React.FC<{ frame: number; fontFamily: string }> = ({
  frame,
  fontFamily,
}) => {
  const swapProgress = interpolate(
    frame,
    [TEXT_SWAP_START, TEXT_SWAP_START + TEXT_SWAP_DURATION],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <>
      <div
        style={{
          ...textStyle,
          fontFamily,
          opacity: interpolate(swapProgress, [0, 1], [1, 0]),
          translate: `0 ${interpolate(swapProgress, [0, 1], [0, -20])}px`,
        }}
      >
        ACCESS UNLOCKED
      </div>
      <div
        style={{
          ...textStyle,
          fontFamily,
          opacity: swapProgress,
          translate: `0 ${interpolate(swapProgress, [0, 1], [20, 0])}px`,
        }}
      >
        CONGRATULATIONS
      </div>
    </>
  );
};
