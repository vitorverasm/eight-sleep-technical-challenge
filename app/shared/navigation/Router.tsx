import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../modules/home/Home";
import ProfileSwitcher from "../../modules/profile-switcher/layout/ProfileSwitcher";
import { RootStackParamList } from "./types";
import { useProfileSwitcherStore } from "../../modules/profile-switcher/state/useProfileSwitcherStore";

const Stack = createStackNavigator<RootStackParamList>();

function Router() {
  const currentUser = useProfileSwitcherStore(state => state.currentUser);

  return (
    <Stack.Navigator
      initialRouteName={currentUser !== undefined ? "Home" : "ProfileSwitcher"}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileSwitcher"
        component={ProfileSwitcher}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default Router;