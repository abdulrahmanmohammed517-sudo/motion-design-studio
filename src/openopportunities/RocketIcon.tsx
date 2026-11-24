import React from "react";

export const RocketIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg viewBox="0 0 44 44" width={size} height={size} fill="none">
    <path
      d="M22 4C28 10 30 18 28 26L22 32L16 26C14 18 16 10 22 4Z"
      stroke="white"
      strokeWidth={2.2}
      strokeLinejoin="round"
    />
    <circle cx={22} cy={16} r={3.5} stroke="white" strokeWidth={2} />
    <path d="M16 26L10 32L12 24" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M28 26L34 32L32 24" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 32V40" stroke="white" strokeWidth={2} strokeLinecap="round" />
  </svg>
);
