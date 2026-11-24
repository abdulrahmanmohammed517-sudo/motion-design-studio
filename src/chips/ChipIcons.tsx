import React from "react";
import { COLOR_GOLD } from "../shared/style";
import { ChipIcon } from "./timing";

const ChartIcon: React.FC<{ size: number; color: string }> = ({ size, color }) => (
  <svg viewBox="0 0 28 28" width={size} height={size} fill="none">
    <path d="M4 24V16M14 24V7M24 24V13" stroke={color} strokeWidth={2.5} strokeLinecap="round" />
  </svg>
);

const UmbrellaIcon: React.FC<{ size: number; color: string }> = ({ size, color }) => (
  <svg viewBox="0 0 28 28" width={size} height={size} fill="none">
    <path
      d="M3 13C3 7.5 7.9 3 14 3C20.1 3 25 7.5 25 13H3Z"
      stroke={color}
      strokeWidth={2.2}
      strokeLinejoin="round"
    />
    <path d="M14 13V22C14 24 11.5 24 11 22" stroke={color} strokeWidth={2.2} strokeLinecap="round" />
  </svg>
);

const ArrowIcon: React.FC<{ size: number; color: string }> = ({ size, color }) => (
  <svg viewBox="0 0 28 28" width={size} height={size} fill="none">
    <path
      d="M5 23L23 5M23 5H10M23 5V18"
      stroke={color}
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChipIconGlyph: React.FC<{ icon: ChipIcon; size: number; gold?: boolean }> = ({
  icon,
  size,
  gold,
}) => {
  const color = gold ? COLOR_GOLD : "white";
  if (icon === "chart") return <ChartIcon size={size} color={color} />;
  if (icon === "umbrella") return <UmbrellaIcon size={size} color={color} />;
  return <ArrowIcon size={size} color={color} />;
};
