import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { ReactNode } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config} colorMode="dark">
        {children}
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
};

export default ThemeProvider;
