import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { montserratFontFamily } from "../shared/fonts";
import { COLOR_GOLD } from "../shared/style";
import { MiniStaircase } from "./MiniStaircase";
import { Particles } from "./Particles";
import {
  BG_COLOR,
  BG_RADIAL_CENTER,
  HEADLINE_DURATION,
  HEADLINE_FRAME,
  HEADLINE_SPRING_CONFIG,
  HEADLINE_TEXT,
  HEADLINE_Y,
  SUBTITLE_FADE_DURATION,
  SUBTITLE_FRAME,
  SUBTITLE_LETTER_SPACING_FROM,
  SUBTITLE_LETTER_SPACING_TO,
  SUBTITLE_TEXT,
  SUBTITLE_Y,
  SWEEP_DURATION,
  SWEEP_FRAME,
} from "./timing";

type AcceleratorRevealProps = { transparent?: boolean };

export const AcceleratorReveal: React.FC<AcceleratorRevealProps> = ({ transparent = false }) => {
  const frame = useCurrentFrame();
  const { fps, width } = useVideoConfig();

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

  const subtitleOpacity = interpolate(frame, [SUBTITLE_FRAME, SUBTITLE_FRAME + SUBTITLE_FADE_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const subtitleLetterSpacing = interpolate(
    frame,
    [SUBTITLE_FRAME, SUBTITLE_FRAME + SUBTITLE_FADE_DURATION],
    [SUBTITLE_LETTER_SPACING_FROM, SUBTITLE_LETTER_SPACING_TO],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const sweepProgress = interpolate(frame, [SWEEP_FRAME, SWEEP_FRAME + SWEEP_DURATION], [-0.4, 1.4], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const sweepOpacity = interpolate(
    frame,
    [SWEEP_FRAME, SWEEP_FRAME + SWEEP_DURATION * 0.3, SWEEP_FRAME + SWEEP_DURATION * 0.7, SWEEP_FRAME + SWEEP_DURATION],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: transparent ? undefined : BG_COLOR,
        backgroundImage: transparent ? undefined : `radial-gradient(circle at 50% 45%, ${BG_RADIAL_CENTER}, ${BG_COLOR})`,
        overflow: "hidden",
      }}
    >
      {transparent ? null : <Particles frame={frame} />}

      <MiniStaircase frame={frame} />

      <div
        style={{
          position: "absolute",
          left: width * sweepProgress - 220,
          top: -200,
          width: 300,
          height: 1500,
          rotate: "18deg",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.35) 45%, rgba(212,175,55,0.5) 55%, transparent)",
          mixBlendMode: "screen",
          opacity: sweepOpacity,
        }}
      />

      <span
        style={{
          position: "absolute",
          left: "50%",
          top: HEADLINE_Y,
          translate: `-50% ${headlineTranslateY}px`,
          fontFamily: montserratFontFamily,
          fontWeight: 800,
          fontSize: 96,
          color: "white",
          whiteSpace: "nowrap",
          opacity: headlineOpacity,
        }}
      >
        {HEADLINE_TEXT}
      </span>

      <span
        style={{
          position: "absolute",
          left: "50%",
          top: SUBTITLE_Y,
          translate: "-50% 0",
          fontFamily: montserratFontFamily,
          fontWeight: 800,
          fontSize: 72,
          color: COLOR_GOLD,
          whiteSpace: "nowrap",
          letterSpacing: subtitleLetterSpacing,
          opacity: subtitleOpacity,
        }}
      >
        {SUBTITLE_TEXT}
      </span>
    </AbsoluteFill>
  );
};
