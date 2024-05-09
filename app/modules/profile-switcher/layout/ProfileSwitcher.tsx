import { Button, ButtonText, Text } from "@gluestack-ui/themed";
import Screen from "../../../shared/layout/components/screen";
import { useNavigate } from "../../../shared/navigation/hooks/useNavigate";

function ProfileSwitcher() {
  const { goBack } = useNavigate();

  return (
    <Screen>
      <Text>Profile Switcher</Text>
      <Button onPress={goBack}>
        <ButtonText>Select profile</ButtonText>
      </Button>
    </Screen>
  );
}

export default ProfileSwitcher;
