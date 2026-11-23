import React from "react";
import { interpolate } from "remotion";
import {
  CALENDAR_ICON_SIZE,
  DATE_SLOT_HEIGHT,
  DATE_TEXT,
  ICON_FADE_DURATION,
  ICON_FADE_START,
  ICON_TEXT_GAP,
  TEXT_FADE_DURATION,
  TEXT_FADE_START,
} from "./timing";
import { CalendarIcon } from "./CalendarIcon";

export const DateSlot: React.FC<{ frame: number; fontFamily: string }> = ({
  frame,
  fontFamily,
}) => {
  const iconOpacity = interpolate(frame, [ICON_FADE_START, ICON_FADE_START + ICON_FADE_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const textOpacity = interpolate(frame, [TEXT_FADE_START, TEXT_FADE_START + TEXT_FADE_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        height: DATE_SLOT_HEIGHT,
        display: "flex",
        alignItems: "center",
        gap: ICON_TEXT_GAP,
      }}
    >
      <div style={{ opacity: iconOpacity, flexShrink: 0 }}>
        <CalendarIcon size={CALENDAR_ICON_SIZE} />
      </div>
      {DATE_TEXT ? (
        <span
          style={{
            fontFamily,
            fontWeight: 600,
            fontSize: 26,
            color: "white",
            opacity: textOpacity,
          }}
        >
          {DATE_TEXT}
        </span>
      ) : null}
    </div>
  );
};
