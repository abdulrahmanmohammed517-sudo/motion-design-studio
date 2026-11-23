// Frame/position constants for DashboardTease and DashboardTeaseMatte —
// single source of truth for both, so the matte lines up frame-for-frame
// with the glass panel. Adjust these to retime or reposition.

export const FPS = 25;
export const WIDTH = 1920;
export const HEIGHT = 1080;
export const DURATION_IN_FRAMES = 250; // 10s @ 25fps

// --- Glass panel ---
export const PANEL_WIDTH = 760;
export const PANEL_HEIGHT = 460;
export const PANEL_RADIUS = 32;
export const PANEL_FILL = "rgba(0,0,0,0.38)";
export const PANEL_BORDER = "1px solid rgba(255,255,255,0.15)";
export const PANEL_RIGHT_MARGIN = 100;
export const PANEL_PADDING = 36;

export const PANEL_POP_START = 0;
export const PANEL_POP_DURATION = 10; // frames 0 -> 10
export const PANEL_POP_SPRING_CONFIG = { damping: 12, stiffness: 180, mass: 0.6 };

// --- Header ---
export const HEADER_START = 4;
export const HEADER_FADE_DURATION = 6; // frames 4 -> 10
export const HEADER_TITLE = "MY DASHBOARD";
export const BADGE_LABEL = "REVEALED LIVE";
export const BADGE_BG = "rgba(255,59,48,0.18)";
export const DOT_COLOR = "#FF3B30";
export const DOT_PULSE_PERIOD = 20; // frames per pulse cycle

// --- Line chart ---
export const CHART_WIDTH = 680;
export const CHART_HEIGHT = 200;
export const CHART_DRAW_START = 8;
export const CHART_DRAW_END = 40; // frames 8 -> 40
export const CHART_STROKE = "#22C55E";
export const CHART_STROKE_WIDTH = 5;
export const CHART_FILL_TOP = "rgba(34,197,94,0.25)";
export const CHART_FILL_BOTTOM = "rgba(34,197,94,0)";
// Generic upward-trending path with gentle dips, viewBox 0 0 680 200 (y=0 is top).
export const CHART_PATH =
  "M0,160 C60,150 100,172 160,140 C220,110 260,132 320,92 " +
  "C380,60 420,82 480,50 C540,30 580,46 620,20 C650,10 665,14 680,6";
export const CHART_END_POINT = { x: 680, y: 6 };
export const CHART_DOT_SPRING_DURATION = 10;
export const CHART_DOT_SPRING_CONFIG = { damping: 9, stiffness: 220, mass: 0.6 }; // bouncy pop

// --- Stat tiles ---
export const TILE_WIDTH = 220;
export const TILE_HEIGHT = 100;
export const TILE_RADIUS = 18;
export const TILE_FILL = "rgba(255,255,255,0.06)";
export const TILE_VALUE_BLUR = 9; // px
export const TILE_ANIM_DURATION = 8;
export const TILE_STARTS = [30, 36, 42];
export const TILE_LABELS = ["Net worth", "Portfolio", "Rental income"];
export const TILE_VALUE = "£███,███";

// --- Out (shared by DashboardTease and DashboardTeaseMatte) ---
export const OUT_START = 236;
export const OUT_END = 250;
export const OUT_DRIFT = 20; // px, downward drift
