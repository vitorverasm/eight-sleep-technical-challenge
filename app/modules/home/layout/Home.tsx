import { Box, Text } from "@gluestack-ui/themed";
import React from "react";
import Header from "../../../shared/layout/components/Header";
import Screen from "../../../shared/layout/components/Screen";
import Title from "../../../shared/layout/components/Title";
import { useProfile } from "../../profile-switcher/hooks/useProfile";
import { useSessions } from "../../sessions/hooks/useSessions";

function Home() {
  const { currentUser, signOutUser } = useProfile();
  const { sessions, isLoading, error } = useSessions(currentUser?.id);

  console.log("[Home] Response", {
    sessions: sessions?.length,
    isLoading,
    error,
  });

  return (
    <Screen>
      <Header.Container>
        <Header.LeftIcon onPress={signOutUser} />
        <Header.Title>Eight Sleep</Header.Title>
      </Header.Container>
      <Box p={"$8"}>
        <Text testID="home-greetings">Hello {currentUser?.name},</Text>
        <Title>Sleep report</Title>
      </Box>
    </Screen>
  );
}

export default Home;
