import { SleepSession } from "../../../types/sleep-session";
import { getAmountOfSleep } from "../get-amount-of-sleep";

describe("getAmountOfSleep", () => {
  it("Should return correct value: first case", () => {
    const sleepStagesMock: SleepSession["stages"] = [
      {
        stage: "out",
        duration: 3500,
      },
      {
        stage: "awake",
        duration: 500,
      },
      {
        stage: "light",
        duration: 2500,
      },
      {
        stage: "deep",
        duration: 1300,
      },
      {
        stage: "light",
        duration: 1800,
      },
      {
        stage: "out",
        duration: 500,
      },
    ];

    expect(getAmountOfSleep(sleepStagesMock)).toStrictEqual({
      hours: 1,
      minutes: 33,
    });
  });
  it("Should return correct value: second case", () => {
    const sleepStagesMock: SleepSession["stages"] = [
      {
        stage: "awake",
        duration: 1080,
      },
      {
        stage: "light",
        duration: 3600,
      },
      {
        stage: "deep",
        duration: 1980,
      },
      {
        stage: "light",
        duration: 3420,
      },
      {
        stage: "deep",
        duration: 540,
      },
      {
        stage: "out",
        duration: 420,
      },
      {
        stage: "awake",
        duration: 600,
      },
      {
        stage: "light",
        duration: 1680,
      },
      {
        stage: "awake",
        duration: 1200,
      },
      {
        stage: "light",
        duration: 6480,
      },
      {
        stage: "awake",
        duration: 1380,
      },
    ];

    expect(getAmountOfSleep(sleepStagesMock)).toStrictEqual({
      hours: 4,
      minutes: 55,
    });
  });
});
