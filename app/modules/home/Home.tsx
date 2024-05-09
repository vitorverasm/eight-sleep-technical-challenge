import { Button, ButtonText, Text } from "@gluestack-ui/themed";
import React from "react";
import Screen from "../../shared/layout/components/screen";
import { useNavigate } from "../../shared/navigation/hooks/useNavigate";

function Home() {
  const { navigate } = useNavigate();

  return (
    <Screen>
      <Text>Home Screen</Text>
      <Button onPress={() => navigate("ProfileSwitcher")}>
        <ButtonText>Select profile</ButtonText>
      </Button>
    </Screen>
  );
}

export default Home;
