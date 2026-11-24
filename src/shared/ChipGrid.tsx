import React from "react";
import { interpolate, spring } from "remotion";
import { montserratFontFamily } from "./fonts";
import { GlassCard } from "./GlassCard";
import { CARD_FILL, CARD_SHADOW, COLOR_GOLD } from "./style";

const POP_DURATION = 10;
const POP_SPRING_CONFIG = { damping: 12, stiffness: 180, mass: 0.6 };

export type Chip = { text: string; gold?: boolean; icon?: React.ReactNode };

type ChipGridProps = {
  frame: number;
  fps: number;
  chips: Chip[];
  appearFrames: number[];
  columns?: number;
  gap?: number;
  style?: React.CSSProperties;
};

export const ChipGrid: React.FC<ChipGridProps> = ({
  frame,
  fps,
  chips,
  appearFrames,
  columns = chips.length,
  gap = 20,
  style,
}) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, auto)`,
        gap,
        ...style,
      }}
    >
      {chips.map((chip, i) => {
        const start = appearFrames[i];
        const pop = spring({
          frame: frame - start,
          fps,
          durationInFrames: POP_DURATION,
          config: POP_SPRING_CONFIG,
        });
        const opacity = interpolate(frame, [start, start + POP_DURATION], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });

        return (
          <GlassCard
            key={chip.text}
            width={0}
            height={0}
            radius={999}
            style={{
              backgroundColor: CARD_FILL,
              boxShadow: CARD_SHADOW,
              width: "max-content",
              height: "max-content",
              padding: "14px 26px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              scale: pop,
              opacity,
            }}
          >
            {chip.icon}
            <span
              style={{
                fontFamily: montserratFontFamily,
                fontWeight: 600,
                fontSize: 28,
                color: chip.gold ? COLOR_GOLD : "white",
                whiteSpace: "nowrap",
              }}
            >
              {chip.text}
            </span>
          </GlassCard>
        );
      })}
    </div>
  );
};
