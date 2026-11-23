import React from "react";
import { CalculateMetadataFunction, Composition } from "remotion";
import { UnlockOverlay } from "./overlay/UnlockOverlay";
import { UnlockMatte } from "./overlay/UnlockMatte";
import { UnlockBoxPlate } from "./overlay/UnlockBoxPlate";
import { InboxNotification } from "./notification/InboxNotification";
import { DashboardTease } from "./dashboard/DashboardTease";
import { DashboardTeaseMatte } from "./dashboard/DashboardTeaseMatte";
import { StartChecklist } from "./checklist/StartChecklist";
import { StartChecklistMatte } from "./checklist/StartChecklistMatte";
import { LiveBadge } from "./livebadge/LiveBadge";
import { LiveBadgeGuide } from "./livebadge/LiveBadgeGuide";
import {
  BOX_PLATE_DURATION_IN_FRAMES,
  DURATION_IN_FRAMES,
  FPS,
  HEIGHT,
  WIDTH,
} from "./overlay/timing";
import {
  DURATION_IN_FRAMES as NOTIFICATION_DURATION_IN_FRAMES,
  FPS as NOTIFICATION_FPS,
  HEIGHT as NOTIFICATION_HEIGHT,
  WIDTH as NOTIFICATION_WIDTH,
} from "./notification/timing";
import {
  DURATION_IN_FRAMES as DASHBOARD_DURATION_IN_FRAMES,
  FPS as DASHBOARD_FPS,
  HEIGHT as DASHBOARD_HEIGHT,
  WIDTH as DASHBOARD_WIDTH,
} from "./dashboard/timing";
import {
  DURATION_IN_FRAMES as CHECKLIST_DURATION_IN_FRAMES,
  FPS as CHECKLIST_FPS,
  HEIGHT as CHECKLIST_HEIGHT,
  WIDTH as CHECKLIST_WIDTH,
} from "./checklist/timing";
import {
  DURATION_IN_FRAMES as LIVEBADGE_DURATION_IN_FRAMES,
  FPS as LIVEBADGE_FPS,
  HEIGHT as LIVEBADGE_HEIGHT,
  WIDTH as LIVEBADGE_WIDTH,
} from "./livebadge/timing";

// Default export settings so both compositions render transparent
// (ProRes 4444 + alpha) out of the box in Studio, matching the CLI render
// commands used for the final export.
const calculateMetadata: CalculateMetadataFunction<Record<string, unknown>> = async () => {
  return {
    defaultCodec: "prores",
    defaultVideoImageFormat: "png",
    defaultPixelFormat: "yuva444p10le",
    defaultProResProfile: "4444",
  };
};

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="UnlockOverlay"
        component={UnlockOverlay}
        width={WIDTH}
        height={HEIGHT}
        fps={FPS}
        durationInFrames={DURATION_IN_FRAMES}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="UnlockMatte"
        component={UnlockMatte}
        width={WIDTH}
        height={HEIGHT}
        fps={FPS}
        durationInFrames={DURATION_IN_FRAMES}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="UnlockBoxPlate"
        component={UnlockBoxPlate}
        width={WIDTH}
        height={HEIGHT}
        fps={FPS}
        durationInFrames={BOX_PLATE_DURATION_IN_FRAMES}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="InboxNotification"
        component={InboxNotification}
        width={NOTIFICATION_WIDTH}
        height={NOTIFICATION_HEIGHT}
        fps={NOTIFICATION_FPS}
        durationInFrames={NOTIFICATION_DURATION_IN_FRAMES}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="DashboardTease"
        component={DashboardTease}
        width={DASHBOARD_WIDTH}
        height={DASHBOARD_HEIGHT}
        fps={DASHBOARD_FPS}
        durationInFrames={DASHBOARD_DURATION_IN_FRAMES}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="DashboardTeaseMatte"
        component={DashboardTeaseMatte}
        width={DASHBOARD_WIDTH}
        height={DASHBOARD_HEIGHT}
        fps={DASHBOARD_FPS}
        durationInFrames={DASHBOARD_DURATION_IN_FRAMES}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="StartChecklist"
        component={StartChecklist}
        width={CHECKLIST_WIDTH}
        height={CHECKLIST_HEIGHT}
        fps={CHECKLIST_FPS}
        durationInFrames={CHECKLIST_DURATION_IN_FRAMES}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="StartChecklistMatte"
        component={StartChecklistMatte}
        width={CHECKLIST_WIDTH}
        height={CHECKLIST_HEIGHT}
        fps={CHECKLIST_FPS}
        durationInFrames={CHECKLIST_DURATION_IN_FRAMES}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="LiveBadge"
        component={LiveBadge}
        width={LIVEBADGE_WIDTH}
        height={LIVEBADGE_HEIGHT}
        fps={LIVEBADGE_FPS}
        durationInFrames={LIVEBADGE_DURATION_IN_FRAMES}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="LiveBadgeGuide"
        component={LiveBadgeGuide}
        width={LIVEBADGE_WIDTH}
        height={LIVEBADGE_HEIGHT}
        fps={LIVEBADGE_FPS}
        durationInFrames={LIVEBADGE_DURATION_IN_FRAMES}
      />
    </>
  );
};
