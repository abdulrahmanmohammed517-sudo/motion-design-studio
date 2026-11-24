import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { montserratFontFamily } from "../shared/fonts";
import { COLOR_GOLD } from "../shared/style";
import { getOutProgress } from "../shared/cardTransform";
import {
  ANSWER_TEXT,
  ARROW_DRAW_DURATION,
  ARROW_FRAME,
  BOTTOM_MARGIN,
  OUT_DRIFT,
  OUT_END,
  OUT_START,
  QUESTION_FADE_DURATION,
  QUESTION_TEXT,
} from "./timing";

export const MakeTheMove: React.FC = () => {
  const frame = useCurrentFrame();

  const outProgress = getOutProgress(frame, OUT_START, OUT_END);
  const opacity = 1 - outProgress;
  const translateY = outProgress * OUT_DRIFT;

  const questionOpacity = interpolate(frame, [0, QUESTION_FADE_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const arrowLength = interpolate(frame, [ARROW_FRAME, ARROW_FRAME + ARROW_DRAW_DURATION], [0, 60], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const answerOpacity = interpolate(frame, [ARROW_FRAME, ARROW_FRAME + ARROW_DRAW_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: BOTTOM_MARGIN,
        gap: 24,
        opacity,
        translate: `0 ${translateY}px`,
      }}
    >
      <span style={{ fontFamily: montserratFontFamily, fontWeight: 600, fontSize: 40, color: "rgba(255,255,255,0.8)", opacity: questionOpacity }}>
        {QUESTION_TEXT}
      </span>
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <svg width={60} height={24} viewBox="0 0 60 24" style={{ opacity: answerOpacity }}>
          <line x1={0} y1={12} x2={arrowLength} y2={12} stroke={COLOR_GOLD} strokeWidth={3} strokeLinecap="round" />
          <path d={`M${arrowLength - 10},4 L${arrowLength},12 L${arrowLength - 10},20`} stroke={COLOR_GOLD} strokeWidth={3} fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{ fontFamily: montserratFontFamily, fontWeight: 800, fontSize: 60, color: COLOR_GOLD, opacity: answerOpacity }}>
          {ANSWER_TEXT}
        </span>
      </div>
    </AbsoluteFill>
  );
};
