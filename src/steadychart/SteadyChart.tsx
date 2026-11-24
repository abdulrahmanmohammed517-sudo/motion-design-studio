import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { montserratFontFamily } from "../shared/fonts";
import { COLOR_GOLD } from "../shared/style";
import { getOutProgress } from "../shared/cardTransform";
import { MarketLines } from "./MarketLines";
import { AREA_HEIGHT, AREA_LEFT, AREA_TOP, AREA_WIDTH, LABEL_MARKET, LABEL_YOU, OUT_END, OUT_START } from "./timing";

export const SteadyChart: React.FC = () => {
  const frame = useCurrentFrame();

  const outProgress = getOutProgress(frame, OUT_START, OUT_END);
  const opacity = 1 - outProgress;

  const labelOpacity = interpolate(frame, [50, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ opacity }}>
      <div style={{ position: "absolute", left: AREA_LEFT, top: AREA_TOP, width: AREA_WIDTH, height: AREA_HEIGHT }}>
        <MarketLines frame={frame} />
        <span
          style={{
            position: "absolute",
            left: AREA_WIDTH + 16,
            top: AREA_HEIGHT * 0.82,
            translate: "0 -50%",
            fontFamily: montserratFontFamily,
            fontWeight: 600,
            fontSize: 22,
            color: "rgba(255,255,255,0.6)",
            whiteSpace: "nowrap",
            opacity: labelOpacity,
          }}
        >
          {LABEL_MARKET}
        </span>
        <span
          style={{
            position: "absolute",
            left: AREA_WIDTH + 16,
            top: AREA_HEIGHT * 0.12,
            translate: "0 -50%",
            fontFamily: montserratFontFamily,
            fontWeight: 800,
            fontSize: 30,
            color: COLOR_GOLD,
            whiteSpace: "nowrap",
            opacity: labelOpacity,
          }}
        >
          {LABEL_YOU}
        </span>
      </div>
    </AbsoluteFill>
  );
};
