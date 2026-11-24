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
  <svg viewBox="0 0 48 32" width={48} height={32} fill="none">
    <path d="M4 10H40" stroke="white" strokeWidth={2.2} strokeLinecap="round" />
    <path d="M32 4L40 10L32 16" stroke="white" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M44 22H8" stroke="white" strokeWidth={2.2} strokeLinecap="round" />
    <path d="M16 28L8 22L16 16" stroke="white" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const SheetIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none">
    <rect x={3} y={3} width={26} height={26} rx={3} stroke="white" strokeWidth={2} />
    <path d="M3 12H29M3 20H29M12 3V29M20 3V29" stroke="white" strokeWidth={1.5} opacity={0.7} />
  </svg>
);
