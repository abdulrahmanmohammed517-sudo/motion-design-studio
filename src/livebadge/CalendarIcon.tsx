import React from "react";

// Generic outline calendar glyph, built from primitives.
export const CalendarIcon: React.FC<{ size: number }> = ({ size }) => {
  return (
    <svg viewBox="0 0 26 26" width={size} height={size} fill="none">
      <rect x={2} y={4} width={22} height={19} rx={3} stroke="white" strokeWidth={2} />
      <path d="M2 10H24" stroke="white" strokeWidth={2} />
      <path d="M8 1.5V5.5" stroke="white" strokeWidth={2} strokeLinecap="round" />
      <path d="M18 1.5V5.5" stroke="white" strokeWidth={2} strokeLinecap="round" />
    </svg>
  );
};
