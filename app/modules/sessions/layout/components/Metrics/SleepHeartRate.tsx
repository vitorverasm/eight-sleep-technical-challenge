import { Box, HStack, Heading, Text } from "@gluestack-ui/themed";
import { useMemo } from "react";
import { LineChart, lineDataItem } from "react-native-gifted-charts";
import Card from "../../../../../shared/layout/components/Card";
import { SleepSession } from "../../../types/sleep-session.type";

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

  const spacing = useMemo(() => {
    if (heartRateSeries.length <= 5) {
      return 60;
    }
    return 40;
  }, [heartRateSeries.length]);

  const yAxisOffset = useMemo(() => {
    if (heartRateSeries.length <= 5) {
      return 80;
    }
    return 50;
  }, [heartRateSeries.length]);

  return (
    <Card>
      <HStack alignItems="center" justifyContent="space-between">
        <Heading>Sleeping heart rate</Heading>
        <Text size="xs">BPM</Text>
      </HStack>
      <Box mt={"$8"}>
        <LineChart
          height={50}
          isAnimated
          spacing={spacing}
          initialSpacing={15}
          textColor1="white"
          textShiftY={-8}
          textShiftX={-10}
          textFontSize={12}
          data={heartRateValues}
          color={"#fafafa"}
          dataPointsColor1="#fafafa"
          hideRules
          disableScroll
          hideYAxisText
          hideAxesAndRules
          yAxisOffset={yAxisOffset}
          overflowTop={30}
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
