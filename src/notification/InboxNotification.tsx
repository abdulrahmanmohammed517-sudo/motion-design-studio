import React from "react";
import { AbsoluteFill, Easing, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { loadFont } from "@remotion/google-fonts/Inter";
import {
  CARD_BG,
  CARD_GAP,
  CARD_HEIGHT,
  CARD_PADDING,
  CARD_RADIUS,
  CARD_RIGHT_MARGIN,
  CARD_SHADOW,
  CARD_TOP_MARGIN,
  CARD_WIDTH,
  ICON_GRADIENT,
  ICON_RADIUS,
  ICON_SIZE,
  NUDGE_END,
  NUDGE_PEAK,
  NUDGE_SCALE_PEAK,
  NUDGE_START,
  SLIDE_IN_DISTANCE,
  SLIDE_IN_DURATION,
  SLIDE_IN_SPRING_CONFIG,
  SLIDE_IN_START,
  SLIDE_OUT_DISTANCE,
  SLIDE_OUT_END,
  SLIDE_OUT_START,
} from "./timing";
import { EnvelopeIcon } from "./EnvelopeIcon";
import { UnreadBadge } from "./UnreadBadge";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "500", "600"],
  subsets: ["latin"],
});

export const InboxNotification: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const slideInSpring = spring({
    frame: frame - SLIDE_IN_START,
    fps,
    durationInFrames: SLIDE_IN_DURATION,
    config: SLIDE_IN_SPRING_CONFIG,
  });
  const translateYIn = interpolate(slideInSpring, [0, 1], [-SLIDE_IN_DISTANCE, 0]);
  const opacityIn = interpolate(frame, [SLIDE_IN_START, SLIDE_IN_START + SLIDE_IN_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const nudgeScale = interpolate(
    frame,
    [NUDGE_START, NUDGE_PEAK, NUDGE_END],
    [1, NUDGE_SCALE_PEAK, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const outProgress = interpolate(frame, [SLIDE_OUT_START, SLIDE_OUT_END], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.ease),
  });
  const translateYOut = outProgress * -SLIDE_OUT_DISTANCE;
  const opacityOut = 1 - outProgress;

  const translateY = translateYIn + translateYOut;
  const opacity = opacityIn * opacityOut;

  return (
    <AbsoluteFill style={{ fontFamily }}>
      <div
        style={{
          position: "absolute",
          top: CARD_TOP_MARGIN,
          right: CARD_RIGHT_MARGIN,
          width: CARD_WIDTH,
          height: CARD_HEIGHT,
          borderRadius: CARD_RADIUS,
          backgroundColor: CARD_BG,
          boxShadow: CARD_SHADOW,
          display: "flex",
          alignItems: "center",
          gap: CARD_GAP,
          padding: `0 ${CARD_PADDING}px`,
          translate: `0 ${translateY}px`,
          scale: nudgeScale,
          opacity,
        }}
      >
        <div
          style={{
            position: "relative",
            flexShrink: 0,
            width: ICON_SIZE,
            height: ICON_SIZE,
            borderRadius: ICON_RADIUS,
            background: ICON_GRADIENT,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <EnvelopeIcon size={ICON_SIZE * 0.5} />
          <UnreadBadge frame={frame} fps={fps} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 6, minWidth: 0, flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span
              style={{
                fontWeight: 500,
                fontSize: 18,
                color: "#8E8E93",
                letterSpacing: 1,
              }}
            >
              INBOX
            </span>
            <span
              style={{
                fontWeight: 500,
                fontSize: 18,
                color: "#8E8E93",
                letterSpacing: 1,
              }}
            >
              now
            </span>
          </div>
          <div style={{ fontWeight: 600, fontSize: 28, color: "#111111" }}>
            Your login details are here 🎉
          </div>
          <div style={{ fontWeight: 400, fontSize: 22, color: "#3C3C43" }}>
            Welcome in! Tap to access your account.
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
