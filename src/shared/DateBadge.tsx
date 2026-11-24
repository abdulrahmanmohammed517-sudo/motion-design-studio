import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { montserratFontFamily } from "./fonts";
import { CalendarIcon } from "../livebadge/CalendarIcon";
import { Divider } from "../livebadge/Divider";
import {
  CALENDAR_ICON_SIZE,
  CARD_BORDER,
  CARD_HEIGHT,
  CARD_RADIUS,
  CARD_RIGHT_MARGIN,
  CARD_SHADOW as BADGE_SHADOW,
  CARD_TOP_MARGIN,
  CARD_WIDTH,
  DATE_SLOT_HEIGHT,
  DIVIDER_HEIGHT,
  DOT_SIZE,
  PULSE_PERIOD as DOT_PULSE_PERIOD,
  DOT_TEXT_GAP,
  GAP_AFTER_DIVIDER,
  GAP_AFTER_TOP_ROW,
  ICON_FADE_DURATION,
  ICON_FADE_START,
  ICON_TEXT_GAP,
  PADDING_BOTTOM,
  PADDING_TOP,
  PADDING_X,
  SLIDE_DISTANCE,
  SLIDE_IN_DURATION,
  SLIDE_IN_SPRING_CONFIG,
  SLIDE_IN_START,
  TEXT_FADE_DURATION,
  TEXT_FADE_START,
  TOP_ROW_FADE_DURATION,
  TOP_ROW_FADE_START,
} from "../livebadge/timing";

export { DATE_SLOT_HEIGHT, DATE_SLOT_RIGHT, DATE_SLOT_TOP, DATE_TEXT_X, DATE_TEXT_Y } from "../livebadge/timing";

type DateBadgeProps = {
  label: string;
  dotColor: string;
  dateText?: string;
};

export const DateBadge: React.FC<DateBadgeProps> = ({ label, dotColor, dateText = "" }) => {
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

  const topRowOpacity = interpolate(frame, [TOP_ROW_FADE_START, TOP_ROW_FADE_START + TOP_ROW_FADE_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const pulseProgress = (frame % DOT_PULSE_PERIOD) / DOT_PULSE_PERIOD;
  const ringScale = interpolate(pulseProgress, [0, 1], [1, 2.2]);
  const ringOpacity = interpolate(pulseProgress, [0, 1], [0.6, 0]);

  const iconOpacity = interpolate(frame, [ICON_FADE_START, ICON_FADE_START + ICON_FADE_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const textOpacity = interpolate(frame, [TEXT_FADE_START, TEXT_FADE_START + TEXT_FADE_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          right: CARD_RIGHT_MARGIN,
          top: CARD_TOP_MARGIN,
          width: CARD_WIDTH,
          height: CARD_HEIGHT,
          borderRadius: CARD_RADIUS,
          backgroundColor: "rgba(0,0,0,0.55)",
          border: CARD_BORDER,
          boxShadow: BADGE_SHADOW,
          boxSizing: "border-box",
          padding: `${PADDING_TOP}px 0 ${PADDING_BOTTOM}px 0`,
          display: "flex",
          flexDirection: "column",
          fontFamily: montserratFontFamily,
          translate: `${translateXIn}px 0`,
          opacity: opacityIn,
        }}
      >
        <div
          style={{
            height: 32,
            margin: `0 ${PADDING_X}px`,
            display: "flex",
            alignItems: "center",
            gap: DOT_TEXT_GAP,
            opacity: topRowOpacity,
          }}
        >
          <div style={{ position: "relative", width: DOT_SIZE, height: DOT_SIZE }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: DOT_SIZE / 2,
                backgroundColor: dotColor,
                scale: ringScale,
                opacity: ringOpacity,
              }}
            />
            <div
              style={{ position: "absolute", inset: 0, borderRadius: DOT_SIZE / 2, backgroundColor: dotColor }}
            />
          </div>
          <span style={{ fontWeight: 800, fontSize: 30, color: "white", letterSpacing: 2 }}>{label}</span>
        </div>

        <div style={{ height: GAP_AFTER_TOP_ROW, flexShrink: 0 }} />
        <div style={{ height: DIVIDER_HEIGHT, margin: `0 ${PADDING_X}px` }}>
          <Divider frame={frame} />
        </div>
        <div style={{ height: GAP_AFTER_DIVIDER, flexShrink: 0 }} />

        <div style={{ margin: "0 28px" }}>
          <div style={{ height: DATE_SLOT_HEIGHT, display: "flex", alignItems: "center", gap: ICON_TEXT_GAP }}>
            <div style={{ opacity: iconOpacity, flexShrink: 0 }}>
              <CalendarIcon size={CALENDAR_ICON_SIZE} />
            </div>
            {dateText ? (
              <span style={{ fontWeight: 600, fontSize: 26, color: "white", opacity: textOpacity }}>{dateText}</span>
            ) : null}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
