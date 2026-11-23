import React from "react";
import { spring } from "remotion";
import { BADGE_SIZE, BADGE_SPRING_CONFIG, BADGE_SPRING_DURATION, BADGE_START } from "./timing";

export const UnreadBadge: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  if (frame < BADGE_START) {
    return null;
  }

  const scale = spring({
    frame: frame - BADGE_START,
    fps,
    durationInFrames: BADGE_SPRING_DURATION,
    config: BADGE_SPRING_CONFIG,
  });

  return (
    <div
      style={{
        position: "absolute",
        top: -6,
        right: -6,
        width: BADGE_SIZE,
        height: BADGE_SIZE,
        borderRadius: BADGE_SIZE / 2,
        backgroundColor: "#FF3B30",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        scale,
        boxShadow: "0 2px 6px rgba(0,0,0,0.35)",
      }}
    >
      <span style={{ color: "white", fontSize: 18, fontWeight: 600, lineHeight: 1 }}>1</span>
    </div>
  );
};
