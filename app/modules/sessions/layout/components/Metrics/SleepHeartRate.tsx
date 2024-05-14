import { Box, HStack, Heading, Text } from "@gluestack-ui/themed";
import Card from "../../../../../shared/layout/components/Card";
import { SleepSession } from "../../../types/sleep-session";
import { useMemo } from "react";
import { LineChart, lineDataItem } from "react-native-gifted-charts";

type SleepHeartRateProps = {
  heartRateSeries: SleepSession["timeseries"]["heartRate"];
};

export function SleepHeartRate({ heartRateSeries }: SleepHeartRateProps) {
  const hours = [
    new Date(heartRateSeries[0][0]).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }),
    new Date(heartRateSeries[heartRateSeries.length - 1][0]).toLocaleTimeString(
      "en-US",
      {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      },
    ),
  ];
  const heartRateValues: lineDataItem[] = useMemo(() => {
    return heartRateSeries.map(hrItem => ({
      value: hrItem[1],
      dataPointText: `${Math.round(hrItem[1])}`,
    }));
  }, [heartRateSeries]);

  return (
    <Card>
      <Heading>Sleep heart rate</Heading>
      <Box mt={"$8"}>
        <LineChart
          height={50}
          isAnimated
          initialSpacing={15}
          spacing={40}
          textColor1="white"
          textShiftY={-8}
          textShiftX={-10}
          textFontSize={11}
          data={heartRateValues}
          color={"#fafafa"}
          dataPointsColor1="#fafafa"
          hideRules
          disableScroll
          hideYAxisText
          hideAxesAndRules
          yAxisOffset={50}
          overflowTop={10}
        />
      </Box>
      <HStack
        alignItems="center"
        justifyContent="space-between"
        mx="$4"
        mb="$2"
      >
        <Text size="sm">{hours[0]}</Text>
        <Text size="sm">{hours[1]}</Text>
      </HStack>
    </Card>
  );
}
