// Shared frame constants — single source of truth for UnlockOverlay and
// UnlockMatte, so the box animation stays frame-accurate between the two
// (required for the matte to line up with the glass box in Premiere).
// Adjust these to retime the overlay.

export const FPS = 25;
export const WIDTH = 1920;
export const HEIGHT = 1080;
export const DURATION_IN_FRAMES = 125; // 5s @ 25fps

// --- Glass box ---
export const BOX_WIDTH = 900;
export const BOX_HEIGHT = 240;
export const BOX_RADIUS = 32;
export const BOX_Y_OFFSET = 70; // px below true vertical centre

export const BOX_POP_START = 0;
export const BOX_POP_DURATION = 10; // frames 0 -> 10
export const BOX_POP_SPRING_CONFIG = { damping: 12, stiffness: 180, mass: 0.6 };

// --- Padlock ---
export const PADLOCK_SIZE = 70;
export const PADLOCK_SHRINK_START = 30;
export const PADLOCK_SHRINK_DURATION = 4; // frames 30 -> 34

// --- Green check ---
export const CHECK_START = 30;
export const CHECK_SIZE = 110;
export const CHECK_SPRING_DURATION = 16; // physics settle window
export const CHECK_SPRING_CONFIG = { damping: 9, stiffness: 200, mass: 0.7 }; // tuned for ~1.2x overshoot peak

export const TICK_DRAW_START = 33;
export const TICK_DRAW_DURATION = 6; // frames 33 -> 39

export const FLASH_RING_START = 30;
export const FLASH_RING_DURATION = 8; // frames 30 -> 38

// --- Text swap inside the box ---
export const TEXT_SWAP_START = 30;
export const TEXT_SWAP_DURATION = 5; // frames 30 -> 35

// --- Headline ---
export const HEADLINE_START = 55;
export const HEADLINE_RISE_DURATION = 8; // frames 55 -> 63
export const HEADLINE_GAP = 40; // px between box bottom and headline

// --- Confetti ---
export const CONFETTI_START = 55;
export const CONFETTI_DURATION = 40; // frames 55 -> 95
export const CONFETTI_COUNT = 40;

// --- Out (shared by both compositions) ---
export const OUT_START = 110;
export const OUT_END = 125;
export const OUT_DRIFT = 20; // px, downward drift
