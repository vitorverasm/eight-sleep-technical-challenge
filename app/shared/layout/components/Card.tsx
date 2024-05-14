import { Card as GCard } from "@gluestack-ui/themed";
import { ComponentProps } from "react";
import { TouchableOpacity } from "react-native";

export default function Card({
  children,
  backgroundColor,
  minHeight,
  onLayout,
  onPress,
}: {
  children: React.ReactNode;
  onPress?: () => void;
} & ComponentProps<typeof GCard>) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.65}>
      <GCard
        size="md"
        variant="elevated"
        w="$full"
        backgroundColor={backgroundColor ?? "$backgroundDark950"}
        minHeight={minHeight}
        onLayout={onLayout}
      >
        {children}
      </GCard>
    </TouchableOpacity>
  );
}
