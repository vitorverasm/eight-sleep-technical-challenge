import { SleepStage } from "./sleep-stage";

export type TimelineRecord = {
  stage: SleepStage["stage"];
  date: Date;
};
