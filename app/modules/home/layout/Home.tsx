import { Box } from "@gluestack-ui/themed";
import React from "react";
import Header from "../../../shared/layout/components/Header";
import Screen from "../../../shared/layout/components/Screen";
import Title from "../../../shared/layout/components/Title";
import { useProfileSwitcherStore } from "../../profile-switcher/state/useProfileSwitcherStore";

function Home() {
  const currentUser = useProfileSwitcherStore(state => state.currentUser);
  const signOutUser = useProfileSwitcherStore(state => state.signOutUser);

  return (
    <Screen>
      <Header.Container>
        <Header.LeftIcon onPress={signOutUser} />
        <Header.Title>Eight Sleep</Header.Title>
      </Header.Container>
      <Box p={"$8"}>
        <Title>Hello, {currentUser?.name}</Title>
      </Box>
    </Screen>
  );
}

export default Home;
