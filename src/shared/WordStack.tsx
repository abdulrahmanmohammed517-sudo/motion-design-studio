import React from "react";
import { interpolate, spring } from "remotion";
import { montserratFontFamily } from "./fonts";
import { COLOR_GOLD } from "./style";

const POP_DURATION = 10;
const POP_SPRING_CONFIG = { damping: 10, stiffness: 200, mass: 0.6 }; // "slams in"
const DIM_OPACITY = 0.5;

type WordStackProps = {
  frame: number;
  fps: number;
  words: string[];
  appearFrames: number[];
  fontSize?: number;
  style?: React.CSSProperties;
};

/** Words stacked vertically, each slamming in (scale 1.3 -> 1 with spring);
 * earlier words dim once a newer one lands; the last word is gold. */
export const WordStack: React.FC<WordStackProps> = ({
  frame,
  fps,
  words,
  appearFrames,
  fontSize = 72,
  style,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", ...style }}>
      {words.map((word, i) => {
        const start = appearFrames[i];
        const nextStart = appearFrames[i + 1];
        const isLast = i === words.length - 1;

        const pop = spring({
          frame: frame - start,
          fps,
          durationInFrames: POP_DURATION,
          config: POP_SPRING_CONFIG,
        });
        const scale = interpolate(pop, [0, 1], [1.3, 1]);
        const opacity = interpolate(frame, [start, start + POP_DURATION], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });

        const dimOpacity =
          !isLast && nextStart !== undefined
            ? interpolate(frame, [nextStart, nextStart + POP_DURATION], [1, DIM_OPACITY], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              })
            : 1;

        return (
          <span
            key={word}
            style={{
              fontFamily: montserratFontFamily,
              fontWeight: 800,
              fontSize,
              color: isLast ? COLOR_GOLD : "white",
              scale,
              opacity: opacity * dimOpacity,
              transformOrigin: "left center",
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};
