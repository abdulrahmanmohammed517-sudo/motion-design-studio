import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { montserratFontFamily } from "../shared/fonts";
import { MiniStaircaseIcon } from "../shared/MiniStaircaseIcon";
import { COLOR_GOLD } from "../shared/style";
import { getOutProgress } from "../shared/cardTransform";
import {
  HEADLINE_DURATION,
  HEADLINE_FRAME,
  HEADLINE_SPRING_CONFIG,
  HEADLINE_TEXT,
  JUMP_ARC_HEIGHT,
  JUMP_DOT_SIZE,
  JUMP_DURATION,
  JUMP_FRAME,
  OUT_DRIFT,
  OUT_END,
  OUT_START,
  SIDE_MARGIN,
  STAIRCASE_DRAW_DURATION,
  STAIRCASE_HEIGHT,
  STAIRCASE_WIDTH,
  TITLE_FADE_DURATION,
  TITLE_TEXT,
  TOP_MARGIN,
} from "./timing";

export const ReadyToLeap: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const outProgress = getOutProgress(frame, OUT_START, OUT_END);
  const opacity = 1 - outProgress;
  const translateY = outProgress * OUT_DRIFT;

  const titleOpacity = interpolate(frame, [0, TITLE_FADE_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const hasLanded = frame >= JUMP_FRAME + JUMP_DURATION;
  const jumpProgress = interpolate(frame, [JUMP_FRAME, JUMP_FRAME + JUMP_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const jumpVisible = frame >= JUMP_FRAME && frame < JUMP_FRAME + JUMP_DURATION;

  // Mirrors MiniStaircaseIcon's internal layout to compute step 0 / step 4 centres.
  const stepWidth = STAIRCASE_WIDTH * 0.45;
  const stepHeight = STAIRCASE_HEIGHT * 0.1;
  const xStep = (STAIRCASE_WIDTH - stepWidth) / 4;
  const yStep = (STAIRCASE_HEIGHT - stepHeight) / 4;
  const start = { x: stepWidth / 2, y: STAIRCASE_HEIGHT - stepHeight / 2 };
  const end = { x: 4 * xStep + stepWidth / 2, y: STAIRCASE_HEIGHT - 4 * yStep - stepHeight / 2 };
  const dotX = interpolate(jumpProgress, [0, 1], [start.x, end.x]);
  const dotY = interpolate(jumpProgress, [0, 1], [start.y, end.y]) - Math.sin(jumpProgress * Math.PI) * JUMP_ARC_HEIGHT;

  const headlineSpring = spring({
    frame: frame - HEADLINE_FRAME,
    fps,
    durationInFrames: HEADLINE_DURATION,
    config: HEADLINE_SPRING_CONFIG,
  });
  const headlineTranslateY = interpolate(headlineSpring, [0, 1], [30, 0]);
  const headlineOpacity = interpolate(frame, [HEADLINE_FRAME, HEADLINE_FRAME + HEADLINE_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ opacity, translate: `0 ${translateY}px` }}>
      <div style={{ position: "absolute", left: SIDE_MARGIN, top: TOP_MARGIN, display: "flex", flexDirection: "column", gap: 50 }}>
        <span style={{ fontFamily: montserratFontFamily, fontWeight: 800, fontSize: 64, color: "white", opacity: titleOpacity }}>
          {TITLE_TEXT}
        </span>

        <div style={{ position: "relative", width: STAIRCASE_WIDTH, height: STAIRCASE_HEIGHT }}>
          <MiniStaircaseIcon
            frame={frame}
            startFrame={0}
            drawDuration={STAIRCASE_DRAW_DURATION}
            width={STAIRCASE_WIDTH}
            height={STAIRCASE_HEIGHT}
            litIndices={hasLanded ? [0, 4] : [0]}
          />
          {jumpVisible ? (
            <div
              style={{
                position: "absolute",
                left: dotX - JUMP_DOT_SIZE / 2,
                top: dotY - JUMP_DOT_SIZE / 2,
                width: JUMP_DOT_SIZE,
                height: JUMP_DOT_SIZE,
                borderRadius: JUMP_DOT_SIZE / 2,
                backgroundColor: COLOR_GOLD,
                boxShadow: `0 0 16px 4px ${COLOR_GOLD}`,
              }}
            />
          ) : null}
        </div>

        <span
          style={{
            fontFamily: montserratFontFamily,
            fontWeight: 800,
            fontSize: 72,
            color: COLOR_GOLD,
            opacity: headlineOpacity,
            translate: `0 ${headlineTranslateY}px`,
          }}
        >
          {HEADLINE_TEXT}
        </span>
      </div>
    </AbsoluteFill>
  );
};
