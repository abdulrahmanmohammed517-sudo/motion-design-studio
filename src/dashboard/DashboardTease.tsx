import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { loadFont } from "@remotion/google-fonts/Montserrat";
import {
  OUT_DRIFT,
  OUT_END,
  OUT_START,
  PANEL_BORDER,
  PANEL_FILL,
  PANEL_HEIGHT,
  PANEL_PADDING,
  PANEL_RADIUS,
  PANEL_RIGHT_MARGIN,
  PANEL_WIDTH,
  TILE_LABELS,
  TILE_STARTS,
} from "./timing";
import { getPanelPopTransform } from "./panelTransform";
import { Header } from "./Header";
import { LineChart } from "./LineChart";
import { StatTile } from "./StatTile";

const { fontFamily } = loadFont("normal", {
  weights: ["500", "600", "800"],
  subsets: ["latin"],
});

export const DashboardTease: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const { scale: popScale, opacity: popOpacity } = getPanelPopTransform(frame, fps);

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
          fontFamily,
          marginRight: PANEL_RIGHT_MARGIN,
          width: PANEL_WIDTH,
          height: PANEL_HEIGHT,
          borderRadius: PANEL_RADIUS,
          backgroundColor: PANEL_FILL,
          border: PANEL_BORDER,
          padding: PANEL_PADDING,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: 24,
          scale: popScale,
          opacity,
          translate: `0 ${translateY}px`,
        }}
      >
        <Header frame={frame} />
        <LineChart frame={frame} fps={fps} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {TILE_LABELS.map((label, i) => (
            <StatTile key={label} frame={frame} start={TILE_STARTS[i]} label={label} />
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
