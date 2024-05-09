import { StyledProvider } from "@gluestack-style/react";
import { ReactNode } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { config } from "../../../gluestack-style.config";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <SafeAreaProvider>
      <StyledProvider config={config} colorMode="dark">
        {children}
      </StyledProvider>
    </SafeAreaProvider>
  );
};

export default ThemeProvider;
