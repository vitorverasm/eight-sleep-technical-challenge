import { Box, Text } from "@gluestack-ui/themed";
import React, { useMemo } from "react";
import { DatePicker } from "../../../shared/layout/components/DatePicker/DatePicker";
import Header from "../../../shared/layout/components/Header";
import Screen from "../../../shared/layout/components/Screen";
import Title from "../../../shared/layout/components/Title";
import { useProfile } from "../../profile-switcher/hooks/useProfile";
import { useSelectedSession } from "../../sessions/hooks/useSelectedSession";
import { useSessions } from "../../sessions/hooks/useSessions";
import { EmptyData } from "../../sessions/layout/components/EmptyData";
import Metrics from "../../sessions/layout/components/Metrics/Metrics";
import { getAmountOfSleep } from "../../sessions/utils/metrics/get-amount-of-sleep";

function Home() {
  const { currentUser, signOutUser } = useProfile();
  const { latestSessionDate } = useSessions(currentUser?.id);
  const { sessionData, syncSessionDataByDate } = useSelectedSession();

  const amountOfSleep = useMemo(() => {
    if (sessionData?.stages) {
      return getAmountOfSleep(sessionData?.stages);
    }
  }, [sessionData?.stages]);

  return (
    <Screen>
      <Header.Container>
        <Header.LeftIcon onPress={signOutUser} />
        <Header.Title>Eight Sleep</Header.Title>
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
              <Metrics.TimeSlept amountOfSleep={amountOfSleep} />
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
