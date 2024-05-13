import { Box } from "@gluestack-ui/themed";
import { ScrollView } from "react-native";

export function Wrapper({ children }: { children?: React.ReactNode }) {
  return (
    <Box w="$full" h="$full">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 20 }}
      >
        {children}
      </ScrollView>
    </Box>
  );
}
