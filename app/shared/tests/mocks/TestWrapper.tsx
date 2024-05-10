import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { NavigationContainer } from "@react-navigation/native";
import { ReactNode } from "react";

export function TestWrapper({ children }: { children: ReactNode }) {
  return (
    <GluestackUIProvider config={config} colorMode="dark">
      <NavigationContainer>{children}</NavigationContainer>
    </GluestackUIProvider>
  );
}
