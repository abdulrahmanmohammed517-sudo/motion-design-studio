import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { montserratItalicFontFamily } from "../shared/fonts";
import { COLOR_GOLD } from "../shared/style";
import { getOutProgress } from "../shared/cardTransform";
import {
  BAR_GAP,
  BAR_HEIGHT,
  BAR_WIDTH,
  BOTTOM_MARGIN,
  LEFT_MARGIN,
  OUT_DRIFT,
  OUT_END,
  OUT_START,
  QUOTE_START,
  QUOTE_TEXT,
  WORD_FADE_DURATION,
  WORD_STAGGER,
} from "./timing";

const words = QUOTE_TEXT.split(" ");

export const LowerThirdQuote: React.FC = () => {
  const frame = useCurrentFrame();

  const outProgress = getOutProgress(frame, OUT_START, OUT_END);
  const opacity = 1 - outProgress;
  const translateY = outProgress * OUT_DRIFT;

  const textShadow = "0 2px 10px rgba(0,0,0,0.6)";

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: LEFT_MARGIN,
        paddingBottom: BOTTOM_MARGIN,
        opacity,
        translate: `0 ${translateY}px`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: BAR_GAP }}>
        <div style={{ width: BAR_WIDTH, height: BAR_HEIGHT, backgroundColor: COLOR_GOLD, borderRadius: 2 }} />
        <div style={{ display: "flex", flexWrap: "wrap", maxWidth: 1200 }}>
          {words.map((word, i) => {
            const start = QUOTE_START + i * WORD_STAGGER;
            const wordOpacity = interpolate(frame, [start, start + WORD_FADE_DURATION], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            return (
              <span
                key={`${word}-${i}`}
                style={{
                  fontFamily: montserratItalicFontFamily,
                  fontStyle: "italic",
                  fontWeight: 600,
                  fontSize: 40,
                  color: "white",
                  opacity: wordOpacity,
                  marginRight: 12,
                  textShadow,
                }}
              >
                {word}
              </span>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
