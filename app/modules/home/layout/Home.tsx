import { Box, Text } from "@gluestack-ui/themed";
import React, { useEffect, useMemo, useState } from "react";
import { DatePicker } from "../../../shared/layout/components/DatePicker/DatePicker";
import Header from "../../../shared/layout/components/Header";
import Screen from "../../../shared/layout/components/Screen";
import Title from "../../../shared/layout/components/Title";
import { useProfile } from "../../profile-switcher/hooks/useProfile";
import { useSelectedSession } from "../../sessions/hooks/useSelectedSession";
import { useSessions } from "../../sessions/hooks/useSessions";
import { EmptyData } from "../../sessions/layout/components/EmptyData";
import Metrics from "../../sessions/layout/components/Metrics/Metrics";
import { SessionTabs } from "../../sessions/layout/components/SessionTabs";
import { SessionTab } from "../../sessions/types/session-tab.enum";
import {
  getAmountOfSleep,
  getAverageAmountOfSleep,
} from "../../sessions/utils/metrics/get-amount-of-sleep";
import { getTimelineRecords } from "../../sessions/utils/metrics/get-timeline-records";

function Home() {
  const { currentUser, signOutUser } = useProfile();
  const { latestSessionDate, sessions } = useSessions(currentUser?.id);
  const { sessionData, syncSessionDataByDate } = useSelectedSession();

  const [sessionTab, setSessionTab] = useState<SessionTab>(SessionTab.Sleep);

  useEffect(() => {
    syncSessionDataByDate(new Date());
    return () => {};
  }, [syncSessionDataByDate]);

  const amountOfSleep = useMemo(() => {
    if (sessionData?.stages) {
      return getAmountOfSleep(sessionData?.stages);
    }
  }, [sessionData?.stages]);

  const averageAmountOfSleep = useMemo(() => {
    if (sessions) {
      return getAverageAmountOfSleep(sessions.map(session => session.stages));
    }
  }, [sessions]);

  const timelineRecords = useMemo(() => {
    if (sessionData?.ts && sessionData?.stages) {
      const startedAt = new Date(sessionData.ts);
      return getTimelineRecords(startedAt, sessionData?.stages);
    }
  }, [sessionData?.stages, sessionData?.ts]);

  return (
    <Screen>
      <Header.Container>
        <Header.LeftIcon onPress={signOutUser} />
        <Header.LogoContainer>
          <Header.Title>My Sleep</Header.Title>
        </Header.LogoContainer>
      </Header.Container>
      <Box px={"$5"} py={"$8"}>
        <Text testID="home-greetings">Hello {currentUser?.name},</Text>
        <Title>Sleep report</Title>
        <Box pt="$5">
          <DatePicker
            currentDate={new Date()}
            latestSessionDate={latestSessionDate}
            onDateChange={date => {
              syncSessionDataByDate(date);
              setSessionTab(SessionTab.Sleep);
            }}
          />
        </Box>
        <Box pt="$5">
          {sessionData ? (
            <Metrics.Wrapper>
              {sessionTab === SessionTab.Sleep ? (
                <>
                  <Metrics.SleepFitness score={sessionData.score} />
                  <Metrics.TimeSlept
                    amountOfSleep={amountOfSleep}
                    averageAmountOfSleep={averageAmountOfSleep}
                  />
                  <Metrics.Timeline timelineRecords={timelineRecords} />
                </>
              ) : null}

              {sessionTab === SessionTab.Health ? (
                <>
                  <Metrics.SleepHeartRate
                    heartRateSeries={sessionData.timeseries.heartRate}
                  />
                  <Metrics.RespiratoryRate
                    respiratoryRateSeries={
                      sessionData.timeseries.respiratoryRate
                    }
                  />
                </>
              ) : null}

              {sessionTab === SessionTab.Temperature ? (
                <>
                  <Metrics.TemperatureInRoom
                    temperatureInRoomSeries={sessionData.timeseries.tempRoomC}
                  />
                  <Metrics.TemperatureInBed
                    temperatureInBedSeries={sessionData.timeseries.tempBedC}
                  />
                </>
              ) : null}
            </Metrics.Wrapper>
          ) : (
            <EmptyData />
          )}
        </Box>
      </Box>
      <SessionTabs
        isVisible={!!sessionData}
        currentTab={sessionTab}
        onTabPress={tab => setSessionTab(tab)}
      />
    </Screen>
  );
}

export default Home;
