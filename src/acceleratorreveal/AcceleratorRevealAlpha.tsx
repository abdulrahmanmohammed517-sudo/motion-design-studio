import React from "react";
import { AcceleratorReveal } from "./AcceleratorReveal";

// Identical to AcceleratorReveal but transparent, with no particles or
// radial gradient, for compositing over her footage.
export const AcceleratorRevealAlpha: React.FC = () => <AcceleratorReveal transparent />;
