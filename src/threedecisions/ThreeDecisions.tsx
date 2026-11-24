import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { montserratFontFamily } from "../shared/fonts";
import { GlassCard } from "../shared/GlassCard";
import { COLOR_GOLD, GLASS_BORDER } from "../shared/style";
import { getPopTransform } from "../shared/cardTransform";
import { getCard01Box, getCard01BorderIsGold } from "./card01Box";
import {
  CARD_01_ROW_TOP,
  CARD_GAP,
  CARD_HEIGHT,
  CARD_LABELS,
  CARD_POP_DURATION,
  CARD_POP_SPRING_CONFIG,
  CARD_POP_STARTS,
  CARD_WIDTH,
  DIM_OPACITY,
  EXPAND_DURATION,
  EXPAND_FRAME,
  EXPANDED_TEXT,
  PILL_TEXT,
  ROW_LEFT,
  SHRINK_END,
  SHRINK_START,
  TITLE_CENTER_Y,
  TITLE_POP_DURATION,
  TITLE_POP_SPRING_CONFIG,
  TITLE_POP_START,
  TITLE_TEXT,
} from "./timing";

export const ThreeDecisions: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const { scale: titleScale, opacity: titlePopOpacity } = getPopTransform(
    frame,
    fps,
    TITLE_POP_START,
    TITLE_POP_DURATION,
    TITLE_POP_SPRING_CONFIG,
  );

  const shrinkProgress = interpolate(frame, [SHRINK_START, SHRINK_END], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fadeOutOthers = 1 - shrinkProgress; // title + cards 02/03 fade away here

  const expandProgress = interpolate(frame, [EXPAND_FRAME, EXPAND_FRAME + EXPAND_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const card01Box = getCard01Box(frame);
  const card01Gold = getCard01BorderIsGold(frame);

  return (
    <AbsoluteFill>
      <span
        style={{
          position: "absolute",
          left: "50%",
          top: TITLE_CENTER_Y,
          translate: "-50% -50%",
          fontFamily: montserratFontFamily,
          fontWeight: 800,
          fontSize: 90,
          color: "white",
          whiteSpace: "nowrap",
          scale: titleScale,
          opacity: titlePopOpacity * fadeOutOthers,
        }}
      >
        {TITLE_TEXT}
      </span>

      {/* Cards 02 and 03 */}
      {[1, 2].map((i) => {
        const left = ROW_LEFT + i * (CARD_WIDTH + CARD_GAP);
        const { scale, opacity: popOpacity } = getPopTransform(
          frame,
          fps,
          CARD_POP_STARTS[i],
          CARD_POP_DURATION,
          CARD_POP_SPRING_CONFIG,
        );
        const dimOpacity = interpolate(expandProgress, [0, 1], [1, DIM_OPACITY]);

        return (
          <GlassCard
            key={CARD_LABELS[i]}
            width={CARD_WIDTH}
            height={CARD_HEIGHT}
            style={{
              position: "absolute",
              left,
              top: CARD_01_ROW_TOP,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              scale,
              opacity: popOpacity * dimOpacity * fadeOutOthers,
            }}
          >
            <span
              style={{
                fontFamily: montserratFontFamily,
                fontWeight: 800,
                fontSize: 44,
                color: "white",
              }}
            >
              {CARD_LABELS[i]}
            </span>
          </GlassCard>
        );
      })}

      {/* Card 01: row -> expanded -> top-left tracker pill */}
      {(() => {
        const { scale: popScale, opacity: popOpacity } = getPopTransform(
          frame,
          fps,
          CARD_POP_STARTS[0],
          CARD_POP_DURATION,
          CARD_POP_SPRING_CONFIG,
        );

        const labelOpacity = (1 - expandProgress) * popOpacity;
        const expandedTextOpacity = expandProgress * (1 - shrinkProgress) * popOpacity;
        const pillTextOpacity = shrinkProgress * popOpacity;

        return (
          <GlassCard
            width={card01Box.width}
            height={card01Box.height}
            border={card01Gold ? `2px solid ${COLOR_GOLD}` : GLASS_BORDER}
            style={{
              position: "absolute",
              left: card01Box.left,
              top: card01Box.top,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              scale: popScale,
              opacity: popOpacity,
            }}
          >
            <span
              style={{
                position: "absolute",
                fontFamily: montserratFontFamily,
                fontWeight: 800,
                fontSize: 44,
                color: "white",
                opacity: labelOpacity,
              }}
            >
              {CARD_LABELS[0]}
            </span>
            <span
              style={{
                position: "absolute",
                fontFamily: montserratFontFamily,
                fontWeight: 800,
                fontSize: 30,
                color: "white",
                textAlign: "center",
                padding: "0 20px",
                opacity: expandedTextOpacity,
              }}
            >
              {EXPANDED_TEXT}
            </span>
            <span
              style={{
                position: "absolute",
                fontFamily: montserratFontFamily,
                fontWeight: 600,
                fontSize: 20,
                color: "white",
                whiteSpace: "nowrap",
                opacity: pillTextOpacity,
              }}
            >
              {PILL_TEXT}
            </span>
          </GlassCard>
        );
      })()}
    </AbsoluteFill>
  );
};
