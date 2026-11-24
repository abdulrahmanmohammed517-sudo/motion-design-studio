import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { montserratFontFamily } from "../shared/fonts";
import { COLOR_GOLD, WIDTH } from "../shared/style";
import { getOutProgress, getPopTransform } from "../shared/cardTransform";
import { SimpleDonut } from "./SimpleDonut";
import {
  DIAMETER,
  DONUTS,
  GAP,
  LABEL_GAP,
  OUT_END,
  OUT_START,
  ROW_CENTER_Y,
  TITLE_POP_DURATION,
  TITLE_POP_SPRING_CONFIG,
  TITLE_POP_START,
  TITLE_TEXT,
  TITLE_Y,
} from "./timing";

export const ThreeDonuts: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const outProgress = getOutProgress(frame, OUT_START, OUT_END);
  const opacity = 1 - outProgress;

  const { scale: titleScale, opacity: titleOpacity } = getPopTransform(
    frame,
    fps,
    TITLE_POP_START,
    TITLE_POP_DURATION,
    TITLE_POP_SPRING_CONFIG,
  );

  const rowWidth = (DONUTS.length - 1) * GAP;
  const rowLeft = WIDTH / 2 - rowWidth / 2;

  return (
    <AbsoluteFill style={{ opacity }}>
      <span
        style={{
          position: "absolute",
          left: "50%",
          top: TITLE_Y,
          translate: "-50% -50%",
          fontFamily: montserratFontFamily,
          fontWeight: 800,
          fontSize: 56,
          color: "white",
          whiteSpace: "nowrap",
          scale: titleScale,
          opacity: titleOpacity,
        }}
      >
        {TITLE_TEXT}
      </span>

      {DONUTS.map((donut, i) => {
        const centerX = rowLeft + i * GAP;
        return (
          <div
            key={donut.label}
            style={{ position: "absolute", left: centerX, top: ROW_CENTER_Y }}
          >
            <SimpleDonut frame={frame} segments={donut.segments} start={donut.start} />
            <span
              style={{
                position: "absolute",
                left: 0,
                top: DIAMETER / 2 + LABEL_GAP,
                translate: "-50% 0",
                fontFamily: montserratFontFamily,
                fontWeight: 500,
                fontSize: 22,
                color: donut.gold ? COLOR_GOLD : "white",
                whiteSpace: "nowrap",
              }}
            >
              {donut.label}
            </span>
          </div>
        );
      })}
    </AbsoluteFill>
  );
};
