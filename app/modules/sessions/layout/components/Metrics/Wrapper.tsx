import { ScrollView } from "react-native";

export function Wrapper({
  children,
}: Readonly<{ children?: React.ReactNode }>) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap: 20, paddingBottom: 300 }}
    >
      {children}
    </ScrollView>
  );
}
