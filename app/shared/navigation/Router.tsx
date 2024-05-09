import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../modules/home/Home";
import ProfileSwitcher from "../../modules/profile-switcher/layout/ProfileSwitcher";
import { RootStackParamList } from "./types";

const Stack = createStackNavigator<RootStackParamList>();

function Router() {
  return (
    <Stack.Navigator initialRouteName="Home">
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
