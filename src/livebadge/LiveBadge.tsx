import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { loadFont } from "@remotion/google-fonts/Montserrat";
import {
  CARD_BORDER,
  CARD_FILL,
  CARD_HEIGHT,
  CARD_RADIUS,
  CARD_SHADOW,
  CARD_WIDTH,
  CARD_X,
  CARD_Y,
  DATE_SLOT_PADDING_X,
  DIVIDER_HEIGHT,
  DOT_TEXT_GAP,
  GAP_AFTER_DIVIDER,
  GAP_AFTER_TOP_ROW,
  LIVE_TEXT,
  OUT_END,
  OUT_START,
  PADDING_BOTTOM,
  PADDING_TOP,
  PADDING_X,
  SLIDE_DISTANCE,
  SLIDE_IN_DURATION,
  SLIDE_IN_SPRING_CONFIG,
  SLIDE_IN_START,
  TOP_ROW_FADE_DURATION,
  TOP_ROW_FADE_START,
  TOP_ROW_HEIGHT,
} from "./timing";
import { PulseDot } from "./PulseDot";
import { Divider } from "./Divider";
import { DateSlot } from "./DateSlot";

const { fontFamily } = loadFont("normal", {
  weights: ["500", "600", "800"],
  subsets: ["latin"],
});

export const LiveBadge: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const slideInSpring = spring({
    frame: frame - SLIDE_IN_START,
    fps,
    durationInFrames: SLIDE_IN_DURATION,
    config: SLIDE_IN_SPRING_CONFIG,
  });
  const translateXIn = interpolate(slideInSpring, [0, 1], [SLIDE_DISTANCE, 0]);
  const opacityIn = interpolate(frame, [SLIDE_IN_START, SLIDE_IN_START + SLIDE_IN_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const outProgress = interpolate(frame, [OUT_START, OUT_END], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.ease),
  });
  const translateXOut = outProgress * SLIDE_DISTANCE;
  const opacityOut = 1 - outProgress;

  const translateX = translateXIn + translateXOut;
  const opacity = opacityIn * opacityOut;

  const topRowOpacity = interpolate(
    frame,
    [TOP_ROW_FADE_START, TOP_ROW_FADE_START + TOP_ROW_FADE_DURATION],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          left: CARD_X,
          top: CARD_Y,
          width: CARD_WIDTH,
          height: CARD_HEIGHT,
          borderRadius: CARD_RADIUS,
          backgroundColor: CARD_FILL,
          border: CARD_BORDER,
          boxShadow: CARD_SHADOW,
          boxSizing: "border-box",
          padding: `${PADDING_TOP}px 0 ${PADDING_BOTTOM}px 0`,
          display: "flex",
          flexDirection: "column",
          fontFamily,
          translate: `${translateX}px 0`,
          opacity,
        }}
      >
        <div
          style={{
            height: TOP_ROW_HEIGHT,
            margin: `0 ${PADDING_X}px`,
            display: "flex",
            alignItems: "center",
            gap: DOT_TEXT_GAP,
            opacity: topRowOpacity,
          }}
        >
          <PulseDot frame={frame} />
          <span style={{ fontWeight: 800, fontSize: 30, color: "white", letterSpacing: 2 }}>
            {LIVE_TEXT}
          </span>
        </div>

        <div style={{ height: GAP_AFTER_TOP_ROW, flexShrink: 0 }} />

        <div style={{ height: DIVIDER_HEIGHT, margin: `0 ${PADDING_X}px` }}>
          <Divider frame={frame} />
        </div>

        <div style={{ height: GAP_AFTER_DIVIDER, flexShrink: 0 }} />

        <div style={{ margin: `0 ${DATE_SLOT_PADDING_X}px` }}>
          <DateSlot frame={frame} fontFamily={fontFamily} />
        </div>
      </div>
    </AbsoluteFill>
  );
};
