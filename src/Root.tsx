import React from "react";
import { CalculateMetadataFunction, Composition } from "remotion";
import { UnlockOverlay } from "./overlay/UnlockOverlay";
import { UnlockMatte } from "./overlay/UnlockMatte";
import { DURATION_IN_FRAMES, FPS, HEIGHT, WIDTH } from "./overlay/timing";

// Default export settings so both compositions render transparent
// (ProRes 4444 + alpha) out of the box in Studio, matching the CLI render
// commands used for the final export.
const calculateMetadata: CalculateMetadataFunction<Record<string, unknown>> = async () => {
  return {
    defaultCodec: "prores",
    defaultVideoImageFormat: "png",
    defaultPixelFormat: "yuva444p10le",
    defaultProResProfile: "4444",
  };
};

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="UnlockOverlay"
        component={UnlockOverlay}
        width={WIDTH}
        height={HEIGHT}
        fps={FPS}
        durationInFrames={DURATION_IN_FRAMES}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="UnlockMatte"
        component={UnlockMatte}
        width={WIDTH}
        height={HEIGHT}
        fps={FPS}
        durationInFrames={DURATION_IN_FRAMES}
        calculateMetadata={calculateMetadata}
      />
    </>
  );
};
