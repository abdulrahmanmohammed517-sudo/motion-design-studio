import React from "react";
import { interpolate, random } from "remotion";
import { CONFETTI_COUNT, CONFETTI_DURATION, CONFETTI_START } from "./timing";

const COLORS = ["#D4AF37", "#FFFFFF"];

export const Confetti: React.FC<{ frame: number }> = ({ frame }) => {
  const particles = Array.from({ length: CONFETTI_COUNT }, (_, i) => {
    const seed = `confetti-${i}`;
    const xOffset = interpolate(random(`${seed}-x`), [0, 1], [-340, 340]);
    const fallDistance = interpolate(random(`${seed}-fall`), [0, 1], [160, 420]);
    const size = interpolate(random(`${seed}-size`), [0, 1], [6, 15]);
    const rotation = interpolate(random(`${seed}-rot`), [0, 1], [0, 360]);
    const rotationSpeed = interpolate(random(`${seed}-rotspeed`), [0, 1], [120, 420]);
    const delay = Math.round(interpolate(random(`${seed}-delay`), [0, 1], [0, 10]));
    const color = random(`${seed}-color`) > 0.5 ? COLORS[0] : COLORS[1];

    const localFrame = frame - CONFETTI_START - delay;
    const progress = interpolate(localFrame, [0, CONFETTI_DURATION], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });

    const opacity = interpolate(progress, [0, 0.12, 0.75, 1], [0, 1, 1, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });

    const translateY = progress ** 1.6 * fallDistance;
    const currentRotation = rotation + progress * rotationSpeed;

    return { key: seed, xOffset, translateY, size, color, currentRotation, opacity };
  });

  return (
    <>
      {particles.map((p) => (
        <div
          key={p.key}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            translate: `calc(-50% + ${p.xOffset}px) calc(-50% + ${p.translateY}px)`,
            rotate: `${p.currentRotation}deg`,
            width: p.size,
            height: p.size * 0.4,
            backgroundColor: p.color,
            opacity: p.opacity,
            borderRadius: 2,
          }}
        />
      ))}
    </>
  );
};
