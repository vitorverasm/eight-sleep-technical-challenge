import { SleepStage } from "./sleep-stage.type";

export type TimelineRecord = {
  stage: SleepStage["stage"];
  date: Date;
};
