import React from "react";
import { random } from "remotion";
import { SCALE_WOBBLE_SEED } from "./timing";

export const BalanceScaleIcon: React.FC<{ frame: number; size: number }> = ({ frame, size }) => {
  const speed = 0.08 + random(`${SCALE_WOBBLE_SEED}-speed`) * 0.04;
  const phase = random(`${SCALE_WOBBLE_SEED}-phase`) * Math.PI * 2;
  // Tilts to one side and wobbles around that tilt, rather than levelling out.
  const tiltAngle = 14 + Math.sin(frame * speed + phase) * 6;

  return (
    <svg viewBox="0 0 56 56" width={size} height={size} fill="none">
      <path d="M28 6V50" stroke="white" strokeWidth={2.5} strokeLinecap="round" />
      <path d="M12 50H44" stroke="white" strokeWidth={2.5} strokeLinecap="round" />
      <g style={{ rotate: `${tiltAngle}deg`, transformOrigin: "28px 10px" }}>
        <path d="M6 10H50" stroke="white" strokeWidth={2.5} strokeLinecap="round" />
        <path d="M6 10L2 20H10Z" fill="none" stroke="white" strokeWidth={2} strokeLinejoin="round" />
        <path d="M50 10L46 20H54Z" fill="none" stroke="white" strokeWidth={2} strokeLinejoin="round" />
      </g>
      <path d="M22 6H34" stroke="white" strokeWidth={2.5} strokeLinecap="round" />
    </svg>
  );
};
