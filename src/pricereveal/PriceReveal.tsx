import React from "react";
import { AbsoluteFill, Easing, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { montserratFontFamily } from "../shared/fonts";
import { COLOR_GOLD } from "../shared/style";
import { getOutProgress } from "../shared/cardTransform";
import {
  DIM_OPACITY,
  GRID_COLUMNS,
  GRID_ROWS,
  MOVE_DURATION,
  MOVE_FRAME,
  MOVE_UP_DISTANCE,
  OUT_END,
  OUT_START,
  PRICE_SPRING_CONFIG,
  PRICE_TEXT,
  SQUARE_GAP,
  SQUARE_POP_DURATION,
  SQUARE_POP_END,
  SQUARE_POP_START,
  SQUARE_SIZE,
  SUBTITLE_FADE_DURATION,
  SUBTITLE_FRAME,
  SUBTITLE_TEXT,
  SWEEP_DURATION,
  TITLE_FADE_DURATION,
  TITLE_TEXT,
} from "./timing";

export const PriceReveal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const outProgress = getOutProgress(frame, OUT_START, OUT_END);
  const outOpacity = 1 - outProgress;

  const titleOpacity = interpolate(frame, [0, TITLE_FADE_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const moveProgress = interpolate(frame, [MOVE_FRAME, MOVE_FRAME + MOVE_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.ease),
  });
  const groupTranslateY = -moveProgress * MOVE_UP_DISTANCE;
  const groupOpacity = interpolate(moveProgress, [0, 1], [1, DIM_OPACITY]);

  const totalSquares = GRID_ROWS * GRID_COLUMNS;

  const priceSpring = spring({
    frame: frame - MOVE_FRAME,
    fps,
    durationInFrames: 16,
    config: PRICE_SPRING_CONFIG,
  });
  const priceScale = priceSpring;
  const priceOpacity = interpolate(frame, [MOVE_FRAME, MOVE_FRAME + 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const sweepProgress = interpolate(frame, [MOVE_FRAME, MOVE_FRAME + SWEEP_DURATION], [-0.3, 1.3], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const subtitleOpacity = interpolate(frame, [SUBTITLE_FRAME, SUBTITLE_FRAME + SUBTITLE_FADE_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", opacity: outOpacity }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 30,
          translate: `0 ${groupTranslateY}px`,
          opacity: groupOpacity * titleOpacity,
        }}
      >
        <span style={{ fontFamily: montserratFontFamily, fontWeight: 800, fontSize: 60, color: "white" }}>
          {TITLE_TEXT}
        </span>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${GRID_COLUMNS}, ${SQUARE_SIZE}px)`,
            gap: SQUARE_GAP,
          }}
        >
          {Array.from({ length: totalSquares }, (_, i) => {
            const start = interpolate(i, [0, totalSquares - 1], [SQUARE_POP_START, SQUARE_POP_END - SQUARE_POP_DURATION]);
            const squareOpacity = interpolate(frame, [start, start + SQUARE_POP_DURATION], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            const squareScale = interpolate(frame, [start, start + SQUARE_POP_DURATION], [0.5, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            return (
              <div
                key={i}
                style={{
                  width: SQUARE_SIZE,
                  height: SQUARE_SIZE,
                  borderRadius: 6,
                  border: `2px solid ${COLOR_GOLD}`,
                  backgroundColor: "rgba(212,175,55,0.25)",
                  opacity: squareOpacity,
                  scale: squareScale,
                }}
              />
            );
          })}
        </div>
      </div>

      <div style={{ position: "absolute", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <span
            style={{
              fontFamily: montserratFontFamily,
              fontWeight: 800,
              fontSize: 150,
              color: "white",
              opacity: priceOpacity,
              scale: priceScale,
              display: "inline-block",
            }}
          >
            {PRICE_TEXT}
          </span>
          <div
            style={{
              position: "absolute",
              left: `${sweepProgress * 140 - 20}%`,
              top: -20,
              width: "20%",
              height: "calc(100% + 40px)",
              rotate: "20deg",
              background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.6), transparent)",
              mixBlendMode: "screen",
            }}
          />
        </div>
        <span
          style={{
            fontFamily: montserratFontFamily,
            fontWeight: 500,
            fontSize: 32,
            color: "rgba(255,255,255,0.7)",
            opacity: subtitleOpacity,
          }}
        >
          {SUBTITLE_TEXT}
        </span>
      </div>
    </AbsoluteFill>
  );
};
