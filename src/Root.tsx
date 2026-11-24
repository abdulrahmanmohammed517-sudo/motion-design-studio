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
import { StaircaseStepOne } from "./staircase/StaircaseStepOne";
import { StaircaseBigLeagues } from "./staircase/StaircaseBigLeagues";
import { CheckBox } from "./checkbox/CheckBox";
import { CheckBoxMatte } from "./checkbox/CheckBoxMatte";
import { CrossBoxes } from "./crossboxes/CrossBoxes";
import { CrossBoxesMatte } from "./crossboxes/CrossBoxesMatte";
import { YearsLater } from "./yearslater/YearsLater";
import { ThreeDecisions } from "./threedecisions/ThreeDecisions";
import { ThreeDecisionsMatte } from "./threedecisions/ThreeDecisionsMatte";
import { DecisionTracker } from "./decisiontracker/DecisionTracker";
import { DecisionTrackerMatte } from "./decisiontracker/DecisionTrackerMatte";
import { Chips } from "./chips/Chips";
import { ChipsMatte } from "./chips/ChipsMatte";
import { DecisionTwo } from "./decisiontwo/DecisionTwo";
import { ScenarioCards } from "./scenariocards/ScenarioCards";
import { RiskSlider } from "./riskslider/RiskSlider";
import { MixDonut } from "./mixdonut/MixDonut";
import { ThreeDonuts } from "./threedonuts/ThreeDonuts";
import { ThreePillars } from "./threepillars/ThreePillars";
import { SteadyChart } from "./steadychart/SteadyChart";
import { FourWords } from "./fourwords/FourWords";
import { StrikeReplace } from "./strikereplace/StrikeReplace";
import { LowerThirdQuote } from "./lowerthirdquote/LowerThirdQuote";
import { MissedMoney } from "./missedmoney/MissedMoney";
import { IndecisionWord } from "./indecisionword/IndecisionWord";
import { StaircasePortfolio } from "./staircaseportfolio/StaircasePortfolio";
import { OneSheet } from "./onesheet/OneSheet";
import { OpenOpportunities } from "./openopportunities/OpenOpportunities";
import { YearsOfErrors } from "./yearsoferrors/YearsOfErrors";
import { LiveWithExpert } from "./livewithexpert/LiveWithExpert";
import { AcceleratorReveal } from "./acceleratorreveal/AcceleratorReveal";
import { AcceleratorRevealAlpha } from "./acceleratorreveal/AcceleratorRevealAlpha";
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
import { DURATION_IN_FRAMES as STAIRCASE_DURATION_IN_FRAMES } from "./staircase/timing";
import { DURATION_IN_FRAMES as CHECKBOX_DURATION_IN_FRAMES } from "./checkbox/timing";
import { DURATION_IN_FRAMES as CROSSBOXES_DURATION_IN_FRAMES } from "./crossboxes/timing";
import { DURATION_IN_FRAMES as YEARSLATER_DURATION_IN_FRAMES } from "./yearslater/timing";
import { DURATION_IN_FRAMES as THREEDECISIONS_DURATION_IN_FRAMES } from "./threedecisions/timing";
import {
  CARD_FILL_2 as DECISIONTRACKER2_CARD_FILL,
  CARD_SHADOW_2 as DECISIONTRACKER2_CARD_SHADOW,
  DURATION_IN_FRAMES as DECISIONTRACKER_DURATION_IN_FRAMES,
  DURATION_IN_FRAMES_2 as DECISIONTRACKER2_DURATION_IN_FRAMES,
} from "./decisiontracker/timing";
import { DURATION_IN_FRAMES as CHIPS_DURATION_IN_FRAMES } from "./chips/timing";
import { DURATION_IN_FRAMES as DECISIONTWO_DURATION_IN_FRAMES } from "./decisiontwo/timing";
import { DURATION_IN_FRAMES as SCENARIOCARDS_DURATION_IN_FRAMES } from "./scenariocards/timing";
import { DURATION_IN_FRAMES as RISKSLIDER_DURATION_IN_FRAMES } from "./riskslider/timing";
import { DURATION_IN_FRAMES as MIXDONUT_DURATION_IN_FRAMES } from "./mixdonut/timing";
import { DURATION_IN_FRAMES as THREEDONUTS_DURATION_IN_FRAMES } from "./threedonuts/timing";
import { DURATION_IN_FRAMES as THREEPILLARS_DURATION_IN_FRAMES } from "./threepillars/timing";
import { DURATION_IN_FRAMES as STEADYCHART_DURATION_IN_FRAMES } from "./steadychart/timing";
import { DURATION_IN_FRAMES as FOURWORDS_DURATION_IN_FRAMES } from "./fourwords/timing";
import { DURATION_IN_FRAMES as STRIKEREPLACE_DURATION_IN_FRAMES } from "./strikereplace/timing";
import { DURATION_IN_FRAMES as LOWERTHIRDQUOTE_DURATION_IN_FRAMES } from "./lowerthirdquote/timing";
import { DURATION_IN_FRAMES as MISSEDMONEY_DURATION_IN_FRAMES } from "./missedmoney/timing";
import { DURATION_IN_FRAMES as INDECISIONWORD_DURATION_IN_FRAMES } from "./indecisionword/timing";
import { DURATION_IN_FRAMES as STAIRCASEPORTFOLIO_DURATION_IN_FRAMES } from "./staircaseportfolio/timing";
import { DURATION_IN_FRAMES as ONESHEET_DURATION_IN_FRAMES } from "./onesheet/timing";
import { DURATION_IN_FRAMES as OPENOPPORTUNITIES_DURATION_IN_FRAMES } from "./openopportunities/timing";
import { DURATION_IN_FRAMES as YEARSOFERRORS_DURATION_IN_FRAMES } from "./yearsoferrors/timing";
import { DURATION_IN_FRAMES as LIVEWITHEXPERT_DURATION_IN_FRAMES } from "./livewithexpert/timing";
import { DURATION_IN_FRAMES as ACCELERATORREVEAL_DURATION_IN_FRAMES } from "./acceleratorreveal/timing";

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
      <Composition
        id="StaircaseStepOne"
        component={StaircaseStepOne}
        width={WIDTH}
        height={HEIGHT}
        fps={FPS}
        durationInFrames={STAIRCASE_DURATION_IN_FRAMES}
      />
      <Composition
        id="StaircaseBigLeagues"
        component={StaircaseBigLeagues}
        width={WIDTH}
        height={HEIGHT}
        fps={FPS}
        durationInFrames={STAIRCASE_DURATION_IN_FRAMES}
      />
      <Composition
        id="CheckBox"
        component={CheckBox}
        width={WIDTH}
        height={HEIGHT}
        fps={FPS}
        durationInFrames={CHECKBOX_DURATION_IN_FRAMES}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="CheckBoxMatte"
        component={CheckBoxMatte}
        width={WIDTH}
        height={HEIGHT}
        fps={FPS}
        durationInFrames={CHECKBOX_DURATION_IN_FRAMES}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="CrossBoxes"
        component={CrossBoxes}
        width={WIDTH}
        height={HEIGHT}
        fps={FPS}
        durationInFrames={CROSSBOXES_DURATION_IN_FRAMES}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="CrossBoxesMatte"
        component={CrossBoxesMatte}
        width={WIDTH}
        height={HEIGHT}
        fps={FPS}
        durationInFrames={CROSSBOXES_DURATION_IN_FRAMES}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="YearsLater"
        component={YearsLater}
        width={WIDTH}
        height={HEIGHT}
        fps={FPS}
        durationInFrames={YEARSLATER_DURATION_IN_FRAMES}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="ThreeDecisions"
        component={ThreeDecisions}
        width={WIDTH}
        height={HEIGHT}
        fps={FPS}
        durationInFrames={THREEDECISIONS_DURATION_IN_FRAMES}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="ThreeDecisionsMatte"
        component={ThreeDecisionsMatte}
        width={WIDTH}
        height={HEIGHT}
        fps={FPS}
        durationInFrames={THREEDECISIONS_DURATION_IN_FRAMES}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="DecisionTracker"
        component={DecisionTracker}
        width={WIDTH}
        height={HEIGHT}
        fps={FPS}
        durationInFrames={DECISIONTRACKER_DURATION_IN_FRAMES}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="DecisionTrackerMatte"
        component={DecisionTrackerMatte}
        width={WIDTH}
        height={HEIGHT}
        fps={FPS}
        durationInFrames={DECISIONTRACKER_DURATION_IN_FRAMES}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="Chips"
        component={Chips}
        width={WIDTH}
        height={HEIGHT}
        fps={FPS}
        durationInFrames={CHIPS_DURATION_IN_FRAMES}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="ChipsMatte"
        component={ChipsMatte}
        width={WIDTH}
        height={HEIGHT}
        fps={FPS}
        durationInFrames={CHIPS_DURATION_IN_FRAMES}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="DecisionTwo"
        component={DecisionTwo}
        width={WIDTH}
        height={HEIGHT}
        fps={FPS}
        durationInFrames={DECISIONTWO_DURATION_IN_FRAMES}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="DecisionTracker2"
        component={DecisionTracker}
        width={WIDTH}
        height={HEIGHT}
        fps={FPS}
        durationInFrames={DECISIONTRACKER2_DURATION_IN_FRAMES}
        defaultProps={{
          decisionNumber: 2,
          label: "YOUR MIX & YOUR NEEDS",
          cardFill: DECISIONTRACKER2_CARD_FILL,
          cardShadow: DECISIONTRACKER2_CARD_SHADOW,
        }}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="ScenarioCards"
        component={ScenarioCards}
        width={WIDTH}
        height={HEIGHT}
        fps={FPS}
        durationInFrames={SCENARIOCARDS_DURATION_IN_FRAMES}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="RiskSlider"
        component={RiskSlider}
        width={WIDTH}
        height={HEIGHT}
        fps={FPS}
        durationInFrames={RISKSLIDER_DURATION_IN_FRAMES}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="MixDonut"
        component={MixDonut}
        width={WIDTH}
        height={HEIGHT}
        fps={FPS}
        durationInFrames={MIXDONUT_DURATION_IN_FRAMES}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="ThreeDonuts"
        component={ThreeDonuts}
        width={WIDTH}
        height={HEIGHT}
        fps={FPS}
        durationInFrames={THREEDONUTS_DURATION_IN_FRAMES}
        calculateMetadata={calculateMetadata}
      />

      {/* --- section4 --- */}
      <Composition
        id="DecisionThree"
        component={DecisionTwo}
        width={WIDTH}
        height={HEIGHT}
        fps={FPS}
        durationInFrames={75}
        defaultProps={{
          numberText: "03",
          labelText: "THE AUTOPILOT",
          pillText: "DECISION 3/3 · THE AUTOPILOT",
          shrinkStart: 45,
          shrinkEnd: 75,
        }}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="DecisionTracker3"
        component={DecisionTracker}
        width={WIDTH}
        height={HEIGHT}
        fps={FPS}
        durationInFrames={625}
        defaultProps={{
          decisionNumber: 3,
          label: "THE AUTOPILOT",
          cardFill: "rgba(0,0,0,0.5)",
          cardShadow: "0 12px 36px rgba(0,0,0,0.3)",
        }}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="ThreePillars"
        component={ThreePillars}
        width={WIDTH}
        height={HEIGHT}
        fps={FPS}
        durationInFrames={THREEPILLARS_DURATION_IN_FRAMES}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="SteadyChart"
        component={SteadyChart}
        width={WIDTH}
        height={HEIGHT}
        fps={FPS}
        durationInFrames={STEADYCHART_DURATION_IN_FRAMES}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="FourWords"
        component={FourWords}
        width={WIDTH}
        height={HEIGHT}
        fps={FPS}
        durationInFrames={FOURWORDS_DURATION_IN_FRAMES}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="StrikeReplace"
        component={StrikeReplace}
        width={WIDTH}
        height={HEIGHT}
        fps={FPS}
        durationInFrames={STRIKEREPLACE_DURATION_IN_FRAMES}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="LowerThirdQuote"
        component={LowerThirdQuote}
        width={WIDTH}
        height={HEIGHT}
        fps={FPS}
        durationInFrames={LOWERTHIRDQUOTE_DURATION_IN_FRAMES}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="MissedMoney"
        component={MissedMoney}
        width={WIDTH}
        height={HEIGHT}
        fps={FPS}
        durationInFrames={MISSEDMONEY_DURATION_IN_FRAMES}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="IndecisionWord"
        component={IndecisionWord}
        width={WIDTH}
        height={HEIGHT}
        fps={FPS}
        durationInFrames={INDECISIONWORD_DURATION_IN_FRAMES}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="StaircasePortfolio"
        component={StaircasePortfolio}
        width={WIDTH}
        height={HEIGHT}
        fps={FPS}
        durationInFrames={STAIRCASEPORTFOLIO_DURATION_IN_FRAMES}
        calculateMetadata={calculateMetadata}
      />

      {/* --- section5 --- */}
      <Composition
        id="OneSheet"
        component={OneSheet}
        width={WIDTH}
        height={HEIGHT}
        fps={FPS}
        durationInFrames={ONESHEET_DURATION_IN_FRAMES}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="OpenOpportunities"
        component={OpenOpportunities}
        width={WIDTH}
        height={HEIGHT}
        fps={FPS}
        durationInFrames={OPENOPPORTUNITIES_DURATION_IN_FRAMES}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="YearsOfErrors"
        component={YearsOfErrors}
        width={WIDTH}
        height={HEIGHT}
        fps={FPS}
        durationInFrames={YEARSOFERRORS_DURATION_IN_FRAMES}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="LiveWithExpert"
        component={LiveWithExpert}
        width={WIDTH}
        height={HEIGHT}
        fps={FPS}
        durationInFrames={LIVEWITHEXPERT_DURATION_IN_FRAMES}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="AcceleratorReveal"
        component={AcceleratorReveal}
        width={WIDTH}
        height={HEIGHT}
        fps={FPS}
        durationInFrames={ACCELERATORREVEAL_DURATION_IN_FRAMES}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="AcceleratorRevealAlpha"
        component={AcceleratorRevealAlpha}
        width={WIDTH}
        height={HEIGHT}
        fps={FPS}
        durationInFrames={ACCELERATORREVEAL_DURATION_IN_FRAMES}
        calculateMetadata={calculateMetadata}
      />
    </>
  );
};
