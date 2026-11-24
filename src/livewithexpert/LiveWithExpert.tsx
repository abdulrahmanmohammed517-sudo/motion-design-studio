import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { montserratFontFamily } from "../shared/fonts";
import { GlassCard } from "../shared/GlassCard";
import { AvatarIcon } from "../shared/AvatarIcon";
import { COLOR_GOLD, COLOR_RED } from "../shared/style";
import { getOutProgress, getPopTransform } from "../shared/cardTransform";
import {
  AVATAR_EXPERT_FRAME,
  AVATAR_ME_FRAME,
  AVATAR_POP_DURATION,
  AVATAR_POP_SPRING_CONFIG,
  AVATAR_SIZE,
  BOTTOM_MARGIN,
  CARD_FILL,
  CARD_HEIGHT,
  CARD_SHADOW,
  CARD_WIDTH,
  DOT_PULSE_PERIOD,
  LABEL_EXPERT,
  LABEL_ME,
  LIVE_TEXT,
  OUT_END,
  OUT_START,
  POP_DURATION,
  POP_SPRING_CONFIG,
  POP_START,
  TITLE_FADE_DURATION,
  TITLE_START,
  TITLE_TEXT,
} from "./timing";

const Avatar: React.FC<{ frame: number; fps: number; startFrame: number; label: string }> = ({
  frame,
  fps,
  startFrame,
  label,
}) => {
  const pop = spring({ frame: frame - startFrame, fps, durationInFrames: AVATAR_POP_DURATION, config: AVATAR_POP_SPRING_CONFIG });
  const opacity = interpolate(frame, [startFrame, startFrame + AVATAR_POP_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, scale: pop, opacity }}>
      <AvatarIcon size={AVATAR_SIZE} />
      <span style={{ fontFamily: montserratFontFamily, fontWeight: 800, fontSize: 24, color: "white" }}>{label}</span>
    </div>
  );
};

export const LiveWithExpert: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const { scale, opacity: popOpacity } = getPopTransform(frame, fps, POP_START, POP_DURATION, POP_SPRING_CONFIG);
  const outProgress = getOutProgress(frame, OUT_START, OUT_END);
  const opacity = popOpacity * (1 - outProgress);

  const pulseProgress = (frame % DOT_PULSE_PERIOD) / DOT_PULSE_PERIOD;
  const ringScale = interpolate(pulseProgress, [0, 1], [1, 2.2]);
  const ringOpacity = interpolate(pulseProgress, [0, 1], [0.6, 0]);

  const titleOpacity = interpolate(frame, [TITLE_START, TITLE_START + TITLE_FADE_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "column",
        paddingBottom: BOTTOM_MARGIN,
      }}
    >
      <GlassCard
        width={CARD_WIDTH}
        height={CARD_HEIGHT}
        style={{
          backgroundColor: CARD_FILL,
          boxShadow: CARD_SHADOW,
          padding: 36,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          scale,
          opacity,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ position: "relative", width: 16, height: 16 }}>
            <div style={{ position: "absolute", inset: 0, borderRadius: 8, backgroundColor: COLOR_RED, scale: ringScale, opacity: ringOpacity }} />
            <div style={{ position: "absolute", inset: 0, borderRadius: 8, backgroundColor: COLOR_RED }} />
          </div>
          <span style={{ fontFamily: montserratFontFamily, fontWeight: 800, fontSize: 22, color: "white", letterSpacing: 2 }}>
            {LIVE_TEXT}
          </span>
        </div>

        <span
          style={{
            fontFamily: montserratFontFamily,
            fontWeight: 800,
            fontSize: 46,
            color: "white",
            opacity: titleOpacity,
          }}
        >
          {TITLE_TEXT}
        </span>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 36 }}>
          <Avatar frame={frame} fps={fps} startFrame={AVATAR_ME_FRAME} label={LABEL_ME} />
          <span style={{ fontFamily: montserratFontFamily, fontWeight: 800, fontSize: 48, color: COLOR_GOLD }}>+</span>
          <Avatar frame={frame} fps={fps} startFrame={AVATAR_EXPERT_FRAME} label={LABEL_EXPERT} />
        </div>
      </GlassCard>
    </AbsoluteFill>
  );
};
