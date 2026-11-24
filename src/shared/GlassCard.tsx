import React from "react";
import { GLASS_BORDER, GLASS_FILL, GLASS_RADIUS } from "./style";

type GlassCardProps = {
  width: number;
  height: number;
  radius?: number;
  matte?: boolean;
  /** Overrides the default 1px white-15% border (e.g. a gold highlight border). */
  border?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

/**
 * Shared glass card shape used by every section-2 overlay. When `matte` is
 * true it renders as a plain solid-white shape with no content — used by
 * the paired "<Name>Matte" composition for a Premiere Track Matte, so it
 * must always get the same `width`/`height`/`radius`/`style` (position,
 * transform, opacity) as the non-matte card for the two to line up
 * frame-for-frame.
 */
export const GlassCard: React.FC<GlassCardProps> = ({
  width,
  height,
  radius = GLASS_RADIUS,
  matte = false,
  border = GLASS_BORDER,
  style,
  children,
}) => {
  return (
    <div
      style={{
        position: "relative",
        width,
        height,
        borderRadius: radius,
        backgroundColor: matte ? "white" : GLASS_FILL,
        boxSizing: "border-box",
        ...style,
        border: matte ? undefined : border,
      }}
    >
      {matte ? null : children}
    </div>
  );
};
