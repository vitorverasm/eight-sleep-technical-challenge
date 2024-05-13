import { Card as GCard } from "@gluestack-ui/themed";
import { useFont } from "@shopify/react-native-skia";
import { ComponentProps, useEffect } from "react";
import { View } from "react-native";
import { useSharedValue, withTiming } from "react-native-reanimated";
import CircularProgressBar from "../../../../../shared/layout/components/CircularProgressBar";
import { SleepSession } from "../../../types/sleep-session";
import { Wrapper } from "./Wrapper";

function Card({
  children,
  backgroundColor,
  minHeight,
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
    >
      {children}
    </GCard>
  );
}

function SleepFitness({ score }: { score: SleepSession["score"] }) {
  const percentage = useSharedValue(0);
  const end = useSharedValue(0);
  const font = useFont(require("../../../../../../assets/Inter-Bold.ttf"), 64);
  const subtitleFont = useFont(
    require("../../../../../../assets/Inter-Bold.ttf"),
    16,
  );

  useEffect(() => {
    percentage.value = withTiming(score, { duration: 1000 });
    end.value = withTiming(score / 100, { duration: 1000 });

    return () => {
      percentage.value = 0;
      end.value = 0;
    };
  }, [end, percentage, score]);

  if (!font || !subtitleFont) {
    return <View />;
  }

  return (
    <Card minHeight={"$56"} backgroundColor="$black">
      <CircularProgressBar
        radius={120}
        strokeWidth={8}
        percentage={percentage}
        end={end}
        font={font}
        subtitleFont={subtitleFont}
      />
    </Card>
  );
}

export default {
  Wrapper,
  SleepFitness,
};
