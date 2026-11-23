import React from "react";

// Generic outline clock, built from primitives.
export const ClockIcon: React.FC<{ size: number }> = ({ size }) => {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} fill="none">
      <circle cx={20} cy={20} r={17} stroke="white" strokeWidth={2.5} />
      <path
        d="M20 10V20L27 25"
        stroke="white"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
