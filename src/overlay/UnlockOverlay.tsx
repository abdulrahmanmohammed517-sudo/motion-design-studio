import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { loadFont as loadAnton } from "@remotion/google-fonts/Anton";
import { loadFont as loadMontserrat } from "@remotion/google-fonts/Montserrat";
import {
  BOX_Y_OFFSET,
  HEADLINE_GAP,
  HEADLINE_RISE_DURATION,
  HEADLINE_START,
  OUT_DRIFT,
  OUT_END,
  OUT_START,
} from "./timing";
import { GlassBox } from "./GlassBox";
import { Confetti } from "./Confetti";

const { fontFamily: antonFontFamily } = loadAnton("normal", {
  weights: ["400"],
  subsets: ["latin"],
});
const { fontFamily: montserratFontFamily } = loadMontserrat("normal", {
  weights: ["600"],
  subsets: ["latin"],
});

export const UnlockOverlay: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // "Out": frames 110 -> 125, everything fades + drifts down together.
  const outProgress = interpolate(frame, [OUT_START, OUT_END], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.ease),
  });
  const groupOpacity = 1 - outProgress;
  const groupTranslateY = BOX_Y_OFFSET + outProgress * OUT_DRIFT;

  const headlineProgress = interpolate(
    frame,
    [HEADLINE_START, HEADLINE_START + HEADLINE_RISE_DURATION],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) },
  );

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          translate: `0 ${groupTranslateY}px`,
          opacity: groupOpacity,
        }}
      >
        <GlassBox frame={frame} fps={fps} fontFamily={montserratFontFamily} />

        <div style={{ position: "relative", marginTop: HEADLINE_GAP }}>
          <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
            <Confetti frame={frame} />
          </div>
          <h1
            style={{
              position: "relative",
              zIndex: 1,
              margin: 0,
              fontFamily: antonFontFamily,
              fontWeight: 400,
              fontSize: 150,
              color: "white",
              textTransform: "uppercase",
              letterSpacing: "-2px",
              textAlign: "center",
              whiteSpace: "nowrap",
              opacity: headlineProgress,
              translate: `0 ${interpolate(headlineProgress, [0, 1], [30, 0])}px`,
            }}
          >
            YOU DID IT.
          </h1>
        </div>
      </div>
    </AbsoluteFill>
  );
};
