import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { montserratFontFamily } from "../shared/fonts";
import { AvatarIcon } from "../shared/AvatarIcon";
import { GlassCard } from "../shared/GlassCard";
import { CARD_FILL, CARD_SHADOW, COLOR_GOLD } from "../shared/style";
import { getOutProgress } from "../shared/cardTransform";
import {
  AVATAR_COUNT,
  AVATAR_END,
  AVATAR_OVERLAP,
  AVATAR_POP_DURATION,
  AVATAR_POP_SPRING_CONFIG,
  AVATAR_SIZE,
  AVATAR_START,
  CHIP_FRAME,
  CHIP_TEXT,
  OUT_DRIFT,
  OUT_END,
  OUT_START,
  SIDE_MARGIN,
  TITLE,
  TITLE_FADE_DURATION,
  TOP_MARGIN,
} from "./timing";

export const NotAlone: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const outProgress = getOutProgress(frame, OUT_START, OUT_END);
  const opacity = 1 - outProgress;
  const translateY = outProgress * OUT_DRIFT;

  const titleOpacity = interpolate(frame, [0, TITLE_FADE_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const chipPop = spring({ frame: frame - CHIP_FRAME, fps, durationInFrames: 10, config: { damping: 12, stiffness: 180, mass: 0.6 } });
  const chipOpacity = interpolate(frame, [CHIP_FRAME, CHIP_FRAME + 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ opacity, translate: `0 ${translateY}px` }}>
      <div style={{ position: "absolute", left: SIDE_MARGIN, top: TOP_MARGIN, display: "flex", flexDirection: "column", gap: 30 }}>
        <span style={{ fontFamily: montserratFontFamily, fontWeight: 800, fontSize: 56, color: "white", opacity: titleOpacity }}>
          {TITLE}
        </span>

        <div style={{ display: "flex" }}>
          {Array.from({ length: AVATAR_COUNT }, (_, i) => {
            const start = interpolate(i, [0, AVATAR_COUNT - 1], [AVATAR_START, AVATAR_END]);
            const pop = spring({ frame: frame - start, fps, durationInFrames: AVATAR_POP_DURATION, config: AVATAR_POP_SPRING_CONFIG });
            const avatarOpacity = interpolate(frame, [start, start + AVATAR_POP_DURATION], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            return (
              <AvatarIcon
                key={i}
                size={AVATAR_SIZE}
                style={{
                  marginLeft: i === 0 ? 0 : -AVATAR_OVERLAP,
                  scale: pop,
                  opacity: avatarOpacity,
                  zIndex: AVATAR_COUNT - i,
                }}
              />
            );
          })}
        </div>

        <GlassCard
          width={0}
          height={0}
          radius={999}
          style={{
            backgroundColor: CARD_FILL,
            boxShadow: CARD_SHADOW,
            width: "max-content",
            height: "max-content",
            padding: "12px 24px",
            scale: chipPop,
            opacity: chipOpacity,
          }}
        >
          <span style={{ fontFamily: montserratFontFamily, fontWeight: 600, fontSize: 26, color: COLOR_GOLD, whiteSpace: "nowrap" }}>
            {CHIP_TEXT}
          </span>
        </GlassCard>
      </div>
    </AbsoluteFill>
  );
};
