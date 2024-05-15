import { Box, Text } from "@gluestack-ui/themed";
import React, { useEffect, useMemo } from "react";
import { DatePicker } from "../../../shared/layout/components/DatePicker/DatePicker";
import Header from "../../../shared/layout/components/Header";
import { Logo } from "../../../shared/layout/components/Logo";
import Screen from "../../../shared/layout/components/Screen";
import Title from "../../../shared/layout/components/Title";
import { useProfile } from "../../profile-switcher/hooks/useProfile";
import { useSelectedSession } from "../../sessions/hooks/useSelectedSession";
import { useSessions } from "../../sessions/hooks/useSessions";
import { EmptyData } from "../../sessions/layout/components/EmptyData";
import Metrics from "../../sessions/layout/components/Metrics/Metrics";
import {
  getAmountOfSleep,
  getAverageAmountOfSleep,
} from "../../sessions/utils/metrics/get-amount-of-sleep";
import { getTimelineRecords } from "../../sessions/utils/metrics/get-timeline-records";

function Home() {
  const { currentUser, signOutUser } = useProfile();
  const { latestSessionDate, sessions } = useSessions(currentUser?.id);
  const { sessionData, syncSessionDataByDate } = useSelectedSession();

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
          <Logo />
        </Header.LogoContainer>
      </Header.Container>
      <Box px={"$5"} py={"$8"}>
        <Text testID="home-greetings">Hello {currentUser?.name},</Text>
        <Title>Sleep report</Title>
        <Box pt="$5">
          <DatePicker
            currentDate={new Date()}
            latestSessionDate={latestSessionDate}
            onDateChange={date => syncSessionDataByDate(date)}
          />
        </Box>
        <Box pt="$5">
          {sessionData ? (
            <Metrics.Wrapper>
              <Metrics.SleepFitness score={sessionData.score} />
              <Metrics.TimeSlept
                amountOfSleep={amountOfSleep}
                averageAmountOfSleep={averageAmountOfSleep}
              />
              <Metrics.Timeline timelineRecords={timelineRecords} />
              <Metrics.SleepHeartRate
                heartRateSeries={sessionData.timeseries.heartRate}
              />
              <Metrics.RespiratoryRate
                respiratoryRateSeries={sessionData.timeseries.respiratoryRate}
              />
            </Metrics.Wrapper>
          ) : (
            <EmptyData />
          )}
        </Box>
      </Box>
    </Screen>
  );
}

export default Home;
