import React from "react";

// Generic envelope glyph (not a brand logo), built from primitives.
export const EnvelopeIcon: React.FC<{ size: number }> = ({ size }) => {
  return (
    <svg viewBox="0 0 48 36" width={size} height={(size * 36) / 48} fill="none">
      <rect x={1} y={1} width={46} height={34} rx={6} stroke="white" strokeWidth={3} />
      <path
        d="M3 4 L24 22 L45 4"
        stroke="white"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};
