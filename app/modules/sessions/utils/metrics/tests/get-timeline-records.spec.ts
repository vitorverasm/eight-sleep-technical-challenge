import { SleepSession } from "../../../types/sleep-session.type";
import { getTimelineRecords } from "../get-timeline-records";

describe("getTimelineRecords", () => {
  it("Should return correct timeline records", () => {
    const startedAt = new Date("2022-01-01T00:00:00Z");
    const sleepStages: SleepSession["stages"] = [
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

    const expectedTimelineRecords = [
      {
        stage: "out",
        date: new Date("2022-01-01T00:58:20.000Z"),
      },
      {
        stage: "awake",
        date: new Date("2022-01-01T01:06:40.000Z"),
      },
      {
        stage: "light",
        date: new Date("2022-01-01T01:48:20.000Z"),
      },
      {
        stage: "deep",
        date: new Date("2022-01-01T02:10:00.000Z"),
      },
      {
        stage: "light",
        date: new Date("2022-01-01T02:40:00.000Z"),
      },
      {
        stage: "out",
        date: new Date("2022-01-01T02:48:20.000Z"),
      },
    ];

    const result = getTimelineRecords(startedAt, sleepStages);

    expect(result).toEqual(expectedTimelineRecords);
  });
});
