import { loadFont } from "@remotion/google-fonts/Montserrat";

// Loaded once, reused by every section-2 composition.
export const { fontFamily: montserratFontFamily } = loadFont("normal", {
  weights: ["500", "600", "800"],
  subsets: ["latin"],
});

export const { fontFamily: montserratItalicFontFamily } = loadFont("italic", {
  weights: ["500"],
  subsets: ["latin"],
});
