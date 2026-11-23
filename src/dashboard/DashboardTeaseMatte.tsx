import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import {
  OUT_DRIFT,
  OUT_END,
  OUT_START,
  PANEL_HEIGHT,
  PANEL_RADIUS,
  PANEL_RIGHT_MARGIN,
  PANEL_WIDTH,
} from "./timing";
import { getPanelPopTransform } from "./panelTransform";

// Same size, position, radius and pop-in animation as the glass panel in
// DashboardTease (via the shared getPanelPopTransform + timing constants),
// plus the same out-fade/drift, so this lines up frame-for-frame with the
// panel in DashboardTease when used as a Track Matte in Premiere.
export const DashboardTeaseMatte: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const { scale, opacity: popOpacity } = getPanelPopTransform(frame, fps);

  const outProgress = interpolate(frame, [OUT_START, OUT_END], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.ease),
  });

  const opacity = popOpacity * (1 - outProgress);
  const translateY = outProgress * OUT_DRIFT;

  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
      <div
        style={{
          marginRight: PANEL_RIGHT_MARGIN,
          width: PANEL_WIDTH,
          height: PANEL_HEIGHT,
          borderRadius: PANEL_RADIUS,
          backgroundColor: "white",
          scale,
          opacity,
          translate: `0 ${translateY}px`,
        }}
      />
    </AbsoluteFill>
  );
};
