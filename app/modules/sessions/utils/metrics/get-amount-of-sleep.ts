import { AmountOfSleep } from "../../types/amount-of-sleep.type";
import { SleepSession } from "../../types/sleep-session";

function getTotalSleepSeconds(sleepStages: SleepSession["stages"]): number {
  let totalLightSleep = 0;
  let totalDeepSleep = 0;

  for (let i = 0; i < sleepStages.length; i++) {
    if (sleepStages[i].stage === "light") {
      totalLightSleep += sleepStages[i].duration;
    } else if (sleepStages[i].stage === "deep") {
      totalDeepSleep += sleepStages[i].duration;
    }
  }

  return totalLightSleep + totalDeepSleep;
}

function formatAmountOfSleep(amountOfSleepInSecond: number): AmountOfSleep {
  const hours = Math.floor(amountOfSleepInSecond / 3600);
  const minutes = Math.floor((amountOfSleepInSecond % 3600) / 60);
  return { hours: hours, minutes: minutes };
}

export function getAmountOfSleep(
  sleepStages: SleepSession["stages"],
): AmountOfSleep {
  const totalSleep = getTotalSleepSeconds(sleepStages);

  return formatAmountOfSleep(totalSleep);
}

export function getAverageAmountOfSleep(
  sleepStagesArray: SleepSession["stages"][],
): AmountOfSleep {
  let totalSleep = 0;

  for (const sleepStages of sleepStagesArray) {
    const totalSessionSleep = getTotalSleepSeconds(sleepStages);
    totalSleep += totalSessionSleep;
  }

  const averageSleep = Math.floor(totalSleep / sleepStagesArray.length);
  return formatAmountOfSleep(averageSleep);
}
