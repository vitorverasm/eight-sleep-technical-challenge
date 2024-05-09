import { Box, styled } from "@gluestack-ui/themed";
import { StatusBar } from "expo-status-bar";
import { ReactNode } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ScreenContainer = styled(Box, {
  bg: "$black",
  flex: 1,
});

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000",
  },
});

const Screen = ({ children }: { children: ReactNode }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />
      <ScreenContainer>{children}</ScreenContainer>
    </SafeAreaView>
  );
};

export default Screen;
