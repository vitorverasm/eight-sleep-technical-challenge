import { ButtonIcon, ButtonText, HStack } from "@gluestack-ui/themed";
import {
  BedDoubleIcon,
  HeartPulseIcon,
  ThermometerSnowflakeIcon,
} from "lucide-react-native";
import { Platform, View } from "react-native";
import Tab from "../../../../shared/layout/components/Tab";
import { SessionTab } from "../../types/session-tab.enum";

type SessionTabsProps = {
  isVisible: boolean;
  currentTab: SessionTab;
  onTabPress: (tab: SessionTab) => void;
};

export function SessionTabs({
  currentTab,
  isVisible,
  onTabPress,
}: Readonly<SessionTabsProps>) {
  if (!isVisible) {
    return null;
  }
  return (
    <View
      style={{
        position: "absolute",
        bottom: Platform.OS === "ios" ? -10 : 0,
        zIndex: 3,
        height: 56,
        width: "100%",
        justifyContent: "center",
      }}
    >
      <HStack px="$2" alignItems="center" justifyContent="center" gap="$4">
        <Tab.Button
          onPress={() => onTabPress(SessionTab.Sleep)}
          testID="session-tab-sleep"
        >
          <ButtonIcon
            as={BedDoubleIcon}
            color={currentTab === SessionTab.Sleep ? "#1862FF" : "$white"}
          />
          <ButtonText
            size="sm"
            color={currentTab === SessionTab.Sleep ? "#1862FF" : "$white"}
          >
            {" "}
            Sleep
          </ButtonText>
        </Tab.Button>
        <Tab.Button
          onPress={() => onTabPress(SessionTab.Health)}
          testID="session-tab-health"
        >
          <ButtonIcon
            as={HeartPulseIcon}
            color={currentTab === SessionTab.Health ? "#1862FF" : "$white"}
          />
          <ButtonText
            size="sm"
            color={currentTab === SessionTab.Health ? "#1862FF" : "$white"}
          >
            {" "}
            Health
          </ButtonText>
        </Tab.Button>
        <Tab.Button
          onPress={() => onTabPress(SessionTab.Temperature)}
          testID="session-tab-temperature"
        >
          <ButtonIcon
            as={ThermometerSnowflakeIcon}
            color={currentTab === SessionTab.Temperature ? "#1862FF" : "$white"}
          />
          <ButtonText
            size="sm"
            color={currentTab === SessionTab.Temperature ? "#1862FF" : "$white"}
          >
            {" "}
            Climate
          </ButtonText>
        </Tab.Button>
      </HStack>
    </View>
  );
}
