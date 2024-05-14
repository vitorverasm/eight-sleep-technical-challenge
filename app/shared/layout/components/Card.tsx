import { Card as GCard } from "@gluestack-ui/themed";
import { ComponentProps } from "react";

export default function Card({
  children,
  backgroundColor,
  minHeight,
  onLayout,
}: {
  children: React.ReactNode;
} & ComponentProps<typeof GCard>) {
  return (
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
  );
}
