import { NavigationContainer } from "@react-navigation/native";
import { ReactNode } from "react";

export function TestWrapper({ children }: { children: ReactNode }) {
  return <NavigationContainer>{children}</NavigationContainer>;
}
