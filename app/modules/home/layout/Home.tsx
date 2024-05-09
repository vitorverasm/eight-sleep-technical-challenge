import { Box, Text } from "@gluestack-ui/themed";
import React from "react";
import Header from "../../../shared/layout/components/Header";
import Screen from "../../../shared/layout/components/Screen";
import Title from "../../../shared/layout/components/Title";
import { useProfile } from "../../profile-switcher/hooks/useProfile";

function Home() {
  const { currentUser, signOutUser } = useProfile();

  return (
    <Screen>
      <Header.Container>
        <Header.LeftIcon onPress={signOutUser} />
        <Header.Title>Eight Sleep</Header.Title>
      </Header.Container>
      <Box p={"$8"}>
        <Text>Hello {currentUser?.name},</Text>
        <Title>Sleep report</Title>
      </Box>
    </Screen>
  );
}

export default Home;
