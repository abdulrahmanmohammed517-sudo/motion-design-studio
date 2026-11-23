import React from "react";
import { AbsoluteFill } from "remotion";
import {
  DATE_SLOT_HEIGHT,
  DATE_SLOT_RIGHT,
  DATE_SLOT_TOP,
  DATE_TEXT_X,
  DATE_TEXT_Y,
} from "./timing";
import { LiveBadge } from "./LiveBadge";

// Still-frame alignment reference: LiveBadge's visuals plus a red dashed
// rectangle and placeholder text marking exactly where date text should
// be placed in Premiere (DATE_TEXT_X / DATE_TEXT_Y in timing.ts).
export const LiveBadgeGuide: React.FC = () => {
  const rectWidth = DATE_SLOT_RIGHT - DATE_TEXT_X;

  return (
    <AbsoluteFill>
      <LiveBadge />
      <div
        style={{
          position: "absolute",
          left: DATE_TEXT_X,
          top: DATE_SLOT_TOP,
          width: rectWidth,
          height: DATE_SLOT_HEIGHT,
          border: "2px dashed #FF3B30",
          boxSizing: "border-box",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: DATE_TEXT_X,
          top: DATE_TEXT_Y,
          translate: "0 -50%",
          fontFamily: "sans-serif",
          fontWeight: 700,
          fontSize: 20,
          color: "#FF3B30",
          whiteSpace: "nowrap",
        }}
      >
        DATE GOES HERE
      </div>
    </AbsoluteFill>
  );
};
