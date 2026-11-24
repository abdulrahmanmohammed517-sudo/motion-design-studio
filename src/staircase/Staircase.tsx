import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { CheckCrossIcon } from "../shared/CheckCrossIcon";
import { getOutProgress } from "../shared/cardTransform";
import { StepBar } from "./StepBar";
import { Callout } from "./Callout";
import {
  BIG_LEAGUES_LIGHT_DURATION,
  BIG_LEAGUES_LIGHT_FRAMES,
  DRAW_STAGGER,
  OUT_DRIFT,
  OUT_DURATION,
  PORTFOLIO_DRAW_DURATION,
  PORTFOLIO_DRAW_STAGGER,
  PORTFOLIO_LABELS,
  PORTFOLIO_LIGHT_DURATION,
  PORTFOLIO_LIGHT_FRAMES,
  STEP_BASE_X,
  STEP_BASE_Y,
  STEP_COUNT,
  STEP_LABELS,
  STEP_ONE_CHECK_FRAME,
  STEP_WIDTH,
} from "./timing";

export type StaircaseMode = "stepOne" | "bigLeagues" | "portfolio";

export const Staircase: React.FC<{ mode: StaircaseMode }> = ({ mode }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const outProgress = getOutProgress(frame, durationInFrames - OUT_DURATION, durationInFrames);
  const opacity = 1 - outProgress;
  const translateY = outProgress * OUT_DRIFT;

  // Step 1's check icon sits centred on the bar's top edge, matching the
  // unlock-box style (half overlapping, centred).
  const step1Left = STEP_BASE_X;
  const step1Top = STEP_BASE_Y;
  const checkStartFrame = mode === "stepOne" ? STEP_ONE_CHECK_FRAME : 0;
  const checkIsStatic = mode === "bigLeagues";

  return (
    <AbsoluteFill style={{ opacity, translate: `0 ${translateY}px` }}>
      {Array.from({ length: STEP_COUNT }, (_, i) => {
        if (mode === "portfolio") {
          const drawStart = i * PORTFOLIO_DRAW_STAGGER;
          const lightFrame = PORTFOLIO_LIGHT_FRAMES[i];
          const lightProgress = interpolate(
            frame,
            [lightFrame, lightFrame + PORTFOLIO_LIGHT_DURATION],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          );
          const isLit = lightProgress > 0;
          return (
            <StepBar
              key={i}
              frame={frame}
              index={i}
              drawStart={drawStart}
              drawDuration={PORTFOLIO_DRAW_DURATION}
              state={isLit ? "gold" : "dim"}
              glowOpacity={lightProgress}
              label={isLit ? PORTFOLIO_LABELS[i] : undefined}
            />
          );
        }

        const drawStart = i * DRAW_STAGGER;

        if (i === 0) {
          return <StepBar key={i} frame={frame} index={i} drawStart={drawStart} />;
        }

        if (mode === "stepOne") {
          return <StepBar key={i} frame={frame} index={i} drawStart={drawStart} />;
        }

        // bigLeagues: steps 2-5 light up gold one by one, glow easing in.
        const lightFrame = BIG_LEAGUES_LIGHT_FRAMES[i - 1];
        const lightProgress = interpolate(
          frame,
          [lightFrame, lightFrame + BIG_LEAGUES_LIGHT_DURATION],
          [0, 1],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
        );
        const isLit = lightProgress > 0;
        return (
          <StepBar
            key={i}
            frame={frame}
            index={i}
            drawStart={drawStart}
            state={isLit ? "gold" : "dim"}
            glowOpacity={lightProgress}
            label={isLit ? STEP_LABELS[i] : undefined}
          />
        );
      })}

      {mode !== "portfolio" ? (
        <div
          style={{
            position: "absolute",
            left: step1Left + STEP_WIDTH / 2,
            top: step1Top,
            translate: "-50% -50%",
          }}
        >
          <CheckCrossIcon
            frame={frame}
            fps={fps}
            startFrame={checkStartFrame}
            variant="check"
            static={checkIsStatic}
          />
        </div>
      ) : null}

      {mode === "stepOne" ? <Callout frame={frame} /> : null}
    </AbsoluteFill>
  );
};
