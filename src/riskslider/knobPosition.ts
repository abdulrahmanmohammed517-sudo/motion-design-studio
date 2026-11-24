import { Easing, interpolate, spring } from "remotion";
import {
  KNOB_POS_CENTRE,
  KNOB_POS_FINAL,
  KNOB_POS_LEFT,
  KNOB_POS_RIGHT,
  KNOB_SETTLE_DURATION,
  KNOB_SETTLE_FRAME,
  KNOB_SETTLE_SPRING_CONFIG,
  KNOB_SWING_1_FRAME,
  KNOB_SWING_2_FRAME,
} from "./timing";

/** Knob position as a 0-100 percentage along the track. */
export const getKnobPercent = (frame: number, fps: number) => {
  if (frame < KNOB_SETTLE_FRAME) {
    return interpolate(
      frame,
      [0, KNOB_SWING_1_FRAME, KNOB_SWING_2_FRAME],
      [KNOB_POS_CENTRE, KNOB_POS_LEFT, KNOB_POS_RIGHT],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.inOut(Easing.ease) },
    );
  }

  const settle = spring({
    frame: frame - KNOB_SETTLE_FRAME,
    fps,
    durationInFrames: KNOB_SETTLE_DURATION,
    config: KNOB_SETTLE_SPRING_CONFIG,
  });
  return interpolate(settle, [0, 1], [KNOB_POS_RIGHT, KNOB_POS_FINAL]);
};
