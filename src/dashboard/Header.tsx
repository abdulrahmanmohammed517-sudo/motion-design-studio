import React from "react";
import { interpolate } from "remotion";
import { BADGE_BG, BADGE_LABEL, HEADER_FADE_DURATION, HEADER_START, HEADER_TITLE } from "./timing";
import { PulsingDot } from "./PulsingDot";

export const Header: React.FC<{ frame: number }> = ({ frame }) => {
  const opacity = interpolate(frame, [HEADER_START, HEADER_START + HEADER_FADE_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        opacity,
      }}
    >
      <span
        style={{
          fontWeight: 600,
          fontSize: 22,
          color: "rgba(255,255,255,0.7)",
          letterSpacing: 3,
        }}
      >
        {HEADER_TITLE}
      </span>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          backgroundColor: BADGE_BG,
          borderRadius: 999,
          padding: "8px 16px",
        }}
      >
        <PulsingDot frame={frame} />
        <span style={{ fontWeight: 800, fontSize: 18, color: "white" }}>{BADGE_LABEL}</span>
      </div>
    </div>
  );
};
