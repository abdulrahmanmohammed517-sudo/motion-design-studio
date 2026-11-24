import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { montserratFontFamily, montserratItalicFontFamily } from "../shared/fonts";
import { getOutProgress } from "../shared/cardTransform";
import {
  LABEL_FADE_DURATION,
  LABEL_TEXT,
  OUT_END,
  OUT_START,
  QUOTE_START,
  QUOTE_TEXT,
  WORD_FADE_DURATION,
  WORD_STAGGER,
} from "./timing";

const words = QUOTE_TEXT.split(" ");

export const YearsLater: React.FC = () => {
  const frame = useCurrentFrame();

  const labelOpacity = interpolate(frame, [0, LABEL_FADE_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const outProgress = getOutProgress(frame, OUT_START, OUT_END);
  const outOpacity = 1 - outProgress;

  const textShadow = "0 2px 12px rgba(0,0,0,0.6)";

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 28,
        opacity: outOpacity,
      }}
    >
      <span
        style={{
          fontFamily: montserratFontFamily,
          fontWeight: 600,
          fontSize: 24,
          color: "rgba(255,255,255,0.7)",
          letterSpacing: 4,
          opacity: labelOpacity,
          textShadow,
        }}
      >
        {LABEL_TEXT}
      </span>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", maxWidth: 1400 }}>
        {words.map((word, i) => {
          const start = QUOTE_START + i * WORD_STAGGER;
          const opacity = interpolate(frame, [start, start + WORD_FADE_DURATION], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          return (
            <span
              key={`${word}-${i}`}
              style={{
                fontFamily: montserratItalicFontFamily,
                fontStyle: "italic",
                fontWeight: 500,
                fontSize: 48,
                color: "white",
                opacity,
                marginRight: 16,
                textShadow,
              }}
            >
              {word}
            </span>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
