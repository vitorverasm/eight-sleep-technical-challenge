import { AmountOfSleep } from "../../types/amount-of-sleep.type";
import { SleepSession } from "../../types/sleep-session";

export function getAmountOfSleep(
  sleepStages: SleepSession["stages"],
): AmountOfSleep {
  let totalLightSleep = 0;
  let totalDeepSleep = 0;

  for (let i = 0; i < sleepStages.length; i++) {
    if (sleepStages[i].stage === "light") {
      totalLightSleep += sleepStages[i].duration;
    } else if (sleepStages[i].stage === "deep") {
      totalDeepSleep += sleepStages[i].duration;
    }
  }

  let totalSleep = totalLightSleep + totalDeepSleep;
  let hours = Math.floor(totalSleep / 3600);
  let minutes = Math.floor((totalSleep % 3600) / 60);

  return { hours: hours, minutes: minutes };
}
