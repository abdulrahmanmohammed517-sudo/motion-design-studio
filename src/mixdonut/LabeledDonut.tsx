import React from "react";
import { interpolate } from "remotion";
import { montserratFontFamily } from "../shared/fonts";
import {
  getRingCircumference,
  getRingRadius,
  getSegmentMidAngle,
  getSegmentStartAngles,
  pointOnCircle,
} from "../shared/donutGeometry";
import {
  CENTER_X,
  CENTER_Y,
  DIAMETER,
  EMPTY_RING_OPACITY,
  LABEL_GAP,
  LEADER_INNER_GAP,
  LEADER_LENGTH,
  SEGMENTS,
  SEGMENT_DRAW_DURATION,
  SEGMENT_STARTS,
  THICKNESS,
} from "./timing";

export const LabeledDonut: React.FC<{ frame: number }> = ({ frame }) => {
  const radius = getRingRadius(DIAMETER, THICKNESS);
  const circumference = getRingCircumference(DIAMETER, THICKNESS);
  const startAngles = getSegmentStartAngles(SEGMENTS);
  const total = SEGMENTS.reduce((sum, s) => sum + s.proportion, 0);

  const half = DIAMETER / 2 + LEADER_LENGTH + 260; // generous svg bounds for labels
  const outerEdge = DIAMETER / 2;

  return (
    <svg
      style={{ position: "absolute", left: CENTER_X - half, top: CENTER_Y - half }}
      width={half * 2}
      height={half * 2}
      viewBox={`${-half} ${-half} ${half * 2} ${half * 2}`}
    >
      <circle
        r={radius}
        fill="none"
        stroke="white"
        strokeWidth={THICKNESS}
        opacity={EMPTY_RING_OPACITY}
      />

      {SEGMENTS.map((segment, i) => {
        const arcLength = (segment.proportion / total) * circumference;
        const start = SEGMENT_STARTS[i];
        const visibleLength = interpolate(frame, [start, start + SEGMENT_DRAW_DURATION], [0, arcLength], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        const labelOpacity = interpolate(frame, [start, start + SEGMENT_DRAW_DURATION], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });

        const midAngle = getSegmentMidAngle(SEGMENTS, i);
        const leaderStart = pointOnCircle(outerEdge + LEADER_INNER_GAP, midAngle);
        const leaderEnd = pointOnCircle(outerEdge + LEADER_INNER_GAP + LEADER_LENGTH, midAngle);
        const isRightSide = leaderEnd.x >= 0;

        return (
          <g key={segment.label}>
            <circle
              r={radius}
              fill="none"
              stroke={segment.color}
              strokeWidth={THICKNESS}
              strokeDasharray={`${visibleLength} ${circumference - visibleLength}`}
              strokeDashoffset={-((startAngles[i] / 360) * circumference)}
              transform="rotate(-90)"
            />
            <line
              x1={leaderStart.x}
              y1={leaderStart.y}
              x2={leaderEnd.x}
              y2={leaderEnd.y}
              stroke={segment.color}
              strokeWidth={2}
              opacity={labelOpacity}
            />
            <text
              x={leaderEnd.x + (isRightSide ? LABEL_GAP : -LABEL_GAP)}
              y={leaderEnd.y}
              textAnchor={isRightSide ? "start" : "end"}
              dominantBaseline="middle"
              fill={segment.color}
              fontFamily={montserratFontFamily}
              fontWeight={600}
              fontSize={26}
              opacity={labelOpacity}
            >
              {segment.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
};
