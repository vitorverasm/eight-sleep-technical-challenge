import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import ThemeProvider from "./app/shared/layout/ThemeProvider";
import Router from "./app/shared/navigation/Router";

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </ThemeProvider>
  );
}
