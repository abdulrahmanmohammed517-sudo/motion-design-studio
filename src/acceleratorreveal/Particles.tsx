import React from "react";
import { random } from "remotion";
import { COLOR_GOLD } from "../shared/style";
import { HEIGHT, PARTICLE_COUNT, PARTICLE_SEED_PREFIX, WIDTH } from "./timing";

export const Particles: React.FC<{ frame: number }> = ({ frame }) => {
  const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => {
    const baseX = random(`${PARTICLE_SEED_PREFIX}-x-${i}`) * WIDTH;
    const baseY = random(`${PARTICLE_SEED_PREFIX}-y-${i}`) * HEIGHT;
    const speed = 0.01 + random(`${PARTICLE_SEED_PREFIX}-speed-${i}`) * 0.02;
    const phase = random(`${PARTICLE_SEED_PREFIX}-phase-${i}`) * Math.PI * 2;
    const driftX = Math.sin(frame * speed + phase) * 30;
    const driftY = ((frame * speed * 10) % 120) - 60;
    const size = 2 + random(`${PARTICLE_SEED_PREFIX}-size-${i}`) * 3;
    const opacity = 0.15 + random(`${PARTICLE_SEED_PREFIX}-op-${i}`) * 0.25;

    return { key: i, x: baseX + driftX, y: baseY + driftY, size, opacity };
  });

  return (
    <>
      {particles.map((p) => (
        <div
          key={p.key}
          style={{
            position: "absolute",
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            borderRadius: p.size / 2,
            backgroundColor: COLOR_GOLD,
            opacity: p.opacity,
          }}
        />
      ))}
    </>
  );
};
