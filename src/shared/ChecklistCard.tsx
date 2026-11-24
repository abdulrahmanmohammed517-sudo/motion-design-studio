import React from "react";
import { interpolate } from "remotion";
import { montserratFontFamily } from "./fonts";
import { GlassCard } from "./GlassCard";
import { CheckCrossIcon } from "./CheckCrossIcon";
import { CARD_FILL, CARD_SHADOW } from "./style";

const PADDING = 32;
const TITLE_HEIGHT = 50;
const TITLE_GAP = 14;
const ROW_HEIGHT = 56;
const ROW_GAP = 12;
const GROW_DURATION = 10;
const ROW_FONT_SIZE = 30;

type ChecklistCardProps = {
  frame: number;
  fps: number;
  title?: string;
  items: string[];
  appearFrames: number[];
  width: number;
  style?: React.CSSProperties;
  rowFontSize?: number;
  extra?: React.ReactNode; // rendered after the last row (e.g. a small icon)
};

export const ChecklistCard: React.FC<ChecklistCardProps> = ({
  frame,
  fps,
  title,
  items,
  appearFrames,
  width,
  style,
  rowFontSize = ROW_FONT_SIZE,
  extra,
}) => {
  const rowProgress = items.map((_, i) =>
    interpolate(frame, [appearFrames[i], appearFrames[i] + GROW_DURATION], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
  );

  const titleBlockHeight = title ? TITLE_HEIGHT + TITLE_GAP : 0;
  const rowsHeight = rowProgress.reduce((sum, p, i) => sum + p * (ROW_HEIGHT + (i > 0 ? ROW_GAP : 0)), 0);
  const height = PADDING * 2 + titleBlockHeight + rowsHeight;

  return (
    <GlassCard
      width={width}
      height={height}
      style={{
        backgroundColor: CARD_FILL,
        boxShadow: CARD_SHADOW,
        padding: PADDING,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        ...style,
      }}
    >
      {title ? (
        <span
          style={{
            fontFamily: montserratFontFamily,
            fontWeight: 800,
            fontSize: 32,
            color: "#D4AF37",
            letterSpacing: 2,
            marginBottom: TITLE_GAP,
          }}
        >
          {title}
        </span>
      ) : null}

      {items.map((text, i) => {
        const progress = rowProgress[i];
        const translateX = interpolate(progress, [0, 1], [-30, 0]);

        return (
          <div
            key={text}
            style={{
              height: ROW_HEIGHT * progress,
              marginTop: i > 0 ? ROW_GAP * progress : 0,
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                height: ROW_HEIGHT,
                display: "flex",
                alignItems: "center",
                gap: 18,
                opacity: progress,
                translate: `${translateX}px 0`,
              }}
            >
              <CheckCrossIcon frame={frame} fps={fps} startFrame={appearFrames[i]} variant="check" size={36} />
              <span style={{ fontFamily: montserratFontFamily, fontWeight: 600, fontSize: rowFontSize, color: "white" }}>
                {text}
              </span>
            </div>
          </div>
        );
      })}

      {extra}
    </GlassCard>
  );
};
