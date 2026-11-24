import React from "react";
import { interpolate } from "remotion";
import { DonutSegment, getRingCircumference, getRingRadius, getSegmentStartAngles } from "../shared/donutGeometry";
import { DIAMETER, DRAW_DURATION, THICKNESS } from "./timing";

/** A single combined clockwise sweep reveal (no labels/leader lines) —
 * used for the small multiples in ThreeDonuts. */
export const SimpleDonut: React.FC<{ frame: number; segments: DonutSegment[]; start: number }> = ({
  frame,
  segments,
  start,
}) => {
  const radius = getRingRadius(DIAMETER, THICKNESS);
  const circumference = getRingCircumference(DIAMETER, THICKNESS);
  const startAngles = getSegmentStartAngles(segments);
  const total = segments.reduce((sum, s) => sum + s.proportion, 0);

  const progress = interpolate(frame, [start, start + DRAW_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const revealedLength = progress * circumference;

  let cumulativeLength = 0;

  return (
    <svg
      style={{ position: "absolute", left: -DIAMETER / 2, top: -DIAMETER / 2 }}
      width={DIAMETER}
      height={DIAMETER}
      viewBox={`${-DIAMETER / 2} ${-DIAMETER / 2} ${DIAMETER} ${DIAMETER}`}
    >
      <circle r={radius} fill="none" stroke="white" strokeWidth={THICKNESS} opacity={0.08} />
      {segments.map((segment, i) => {
        const arcLength = (segment.proportion / total) * circumference;
        const visibleLength = Math.min(Math.max(revealedLength - cumulativeLength, 0), arcLength);
        cumulativeLength += arcLength;

        return (
          <circle
            key={`${segment.color}-${i}`}
            r={radius}
            fill="none"
            stroke={segment.color}
            strokeWidth={THICKNESS}
            strokeDasharray={`${visibleLength} ${circumference - visibleLength}`}
            strokeDashoffset={-((startAngles[i] / 360) * circumference)}
            transform="rotate(-90)"
          />
        );
      })}
    </svg>
  );
};
