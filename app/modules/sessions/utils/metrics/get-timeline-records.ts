import { SleepSession } from "../../types/sleep-session";
import { TimelineRecord } from "../../types/timeline.type";

function addSeconds(date: Date, seconds: number): Date {
  return new Date(date.getTime() + seconds * 1000);
}

export function getTimelineRecords(
  startedAt: Date,
  sleepStages: SleepSession["stages"],
): TimelineRecord[] {
  let currentDate = startedAt;
  return sleepStages.map(stage => {
    const nextDate = addSeconds(currentDate, stage.duration);
    currentDate = nextDate;
    return {
      stage: stage.stage,
      date: nextDate,
    };
  });
}
