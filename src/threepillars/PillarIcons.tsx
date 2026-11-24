import React from "react";
import { interpolate } from "remotion";
import { NODE_DRAW_DURATION } from "./timing";

export const MindsetIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg viewBox="0 0 56 56" width={size} height={size} fill="none">
    <path
      d="M28 6C19 6 13 13 13 21C13 27 16 30 18 33V40H38V33C40 30 43 27 43 21C43 13 37 6 28 6Z"
      stroke="white"
      strokeWidth={2.2}
      strokeLinejoin="round"
    />
    <path d="M20 46H36" stroke="white" strokeWidth={2.2} strokeLinecap="round" />
    <path d="M23 50H33" stroke="white" strokeWidth={2.2} strokeLinecap="round" />
    <path
      d="M28 14C24 14 21 17 21 21"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);

export const CommunityIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg viewBox="0 0 56 56" width={size} height={size} fill="none">
    <circle cx={20} cy={18} r={7} stroke="white" strokeWidth={2.2} />
    <circle cx={38} cy={18} r={7} stroke="white" strokeWidth={2.2} />
    <path d="M8 44C8 35 13 30 20 30C27 30 32 35 32 44" stroke="white" strokeWidth={2.2} strokeLinecap="round" />
    <path d="M26 44C26 35 31 30 38 30C45 30 50 35 50 44" stroke="white" strokeWidth={2.2} strokeLinecap="round" />
  </svg>
);

export const NetworkIcon: React.FC<{ size: number; frame: number; startFrame: number }> = ({
  size,
  frame,
  startFrame,
}) => {
  const drawProgress = interpolate(frame, [startFrame, startFrame + NODE_DRAW_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const nodes: [number, number][] = [
    [28, 10],
    [10, 30],
    [46, 30],
    [18, 48],
    [38, 48],
  ];
  const edges: [number, number][] = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 4],
    [1, 2],
  ];

  return (
    <svg viewBox="0 0 56 56" width={size} height={size} fill="none">
      {edges.map(([a, b], i) => (
        <line
          key={`${a}-${b}`}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="white"
          strokeWidth={2}
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={interpolate(
            drawProgress,
            [i / edges.length, (i + 1) / edges.length],
            [1, 0],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          )}
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={4} fill="white" opacity={i === 0 ? 1 : drawProgress} />
      ))}
    </svg>
  );
};
