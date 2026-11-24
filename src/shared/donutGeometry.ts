// Pure geometry helpers for stroke-dasharray donut charts (segments drawn
// clockwise from the top, 12 o'clock = start).

export type DonutSegment = { proportion: number; color: string };

export const getRingCircumference = (diameter: number, thickness: number) => {
  const radius = diameter / 2 - thickness / 2;
  return 2 * Math.PI * radius;
};

export const getRingRadius = (diameter: number, thickness: number) => diameter / 2 - thickness / 2;

/** Cumulative start angle (degrees, 0 = 12 o'clock, clockwise) for each segment. */
export const getSegmentStartAngles = (segments: DonutSegment[]) => {
  const total = segments.reduce((sum, s) => sum + s.proportion, 0);
  let cumulative = 0;
  return segments.map((s) => {
    const startAngle = (cumulative / total) * 360;
    cumulative += s.proportion;
    return startAngle;
  });
};

export const getSegmentMidAngle = (segments: DonutSegment[], index: number) => {
  const startAngles = getSegmentStartAngles(segments);
  const total = segments.reduce((sum, s) => sum + s.proportion, 0);
  const sweep = (segments[index].proportion / total) * 360;
  return startAngles[index] + sweep / 2;
};

/** Point on a circle of the given radius at `angleDeg` (0 = 12 o'clock, clockwise). */
export const pointOnCircle = (radius: number, angleDeg: number) => {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: radius * Math.cos(rad), y: radius * Math.sin(rad) };
};
