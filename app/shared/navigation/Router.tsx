import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../modules/home/layout/Home";
import { useProfile } from "../../modules/profile-switcher/hooks/useProfile";
import ProfileSwitcher from "../../modules/profile-switcher/layout/ProfileSwitcher";
import { RootStackParamList } from "./types";

const Stack = createStackNavigator<RootStackParamList>();

function Router() {
  const { currentUser } = useProfile();

  return (
    <Stack.Navigator>
      {currentUser === undefined ? (
        <Stack.Screen
          name="ProfileSwitcher"
          component={ProfileSwitcher}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
}

export default Router;
