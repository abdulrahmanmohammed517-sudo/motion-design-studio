import React from "react";
import { random } from "remotion";
import { COLOR_GREEN } from "../shared/style";

export const Sparkline: React.FC = () => {
  const points = Array.from({ length: 6 }, (_, i) => {
    const x = (i / 5) * 60;
    const y = 24 - i * 3.5 - random(`onesheet-spark-${i}`) * 4;
    return `${x},${y}`;
  });
  return (
    <svg viewBox="0 0 60 28" width={60} height={28} fill="none">
      <polyline points={points.join(" ")} stroke={COLOR_GREEN} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export const TwoArrowsIcon: React.FC = () => (
  <svg viewBox="0 0 48 28" width={48} height={28} fill="none">
    <path d="M4 20H30M30 20L22 12M30 20L22 28" stroke="white" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M44 8H18M18 8L26 0M18 8L26 16" stroke="white" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" transform="translate(0,6)" />
  </svg>
);

export const SheetIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none">
    <rect x={3} y={3} width={26} height={26} rx={3} stroke="white" strokeWidth={2} />
    <path d="M3 12H29M3 20H29M12 3V29M20 3V29" stroke="white" strokeWidth={1.5} opacity={0.7} />
  </svg>
);
