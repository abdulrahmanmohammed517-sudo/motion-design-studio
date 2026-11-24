import React from "react";
import { COLOR_GOLD } from "./style";

/** A circular gold-outlined avatar with a white person silhouette inside. */
export const AvatarIcon: React.FC<{ size: number; style?: React.CSSProperties }> = ({ size, style }) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: size / 2,
      border: `3px solid ${COLOR_GOLD}`,
      backgroundColor: "rgba(0,0,0,0.3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxSizing: "border-box",
      ...style,
    }}
  >
    <svg viewBox="0 0 40 40" width={size * 0.55} height={size * 0.55} fill="none">
      <circle cx={20} cy={14} r={8} fill="white" />
      <path d="M4 38C4 27 11 22 20 22C29 22 36 27 36 38" fill="white" />
    </svg>
  </div>
);
