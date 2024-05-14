import { Box, HStack, Heading, Text } from "@gluestack-ui/themed";
import { useMemo } from "react";
import { LineChart, lineDataItem } from "react-native-gifted-charts";
import Card from "../../../../../shared/layout/components/Card";
import { SleepSession } from "../../../types/sleep-session";

type RespiratoryRateProps = {
  respiratoryRateSeries: SleepSession["timeseries"]["respiratoryRate"];
};

export function RespiratoryRate({
  respiratoryRateSeries,
}: RespiratoryRateProps) {
  const hours = useMemo(
    () => [
      new Date(respiratoryRateSeries[0][0]).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
      new Date(
        respiratoryRateSeries[respiratoryRateSeries.length - 1][0],
      ).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
    ],
    [respiratoryRateSeries],
  );

  const respiratoryRateValues: lineDataItem[] = useMemo(() => {
    return respiratoryRateSeries.map(rrItem => ({
      value: rrItem[1],
      dataPointText: `${Math.round(rrItem[1])}`,
    }));
  }, [respiratoryRateSeries]);

  const spacing = useMemo(() => {
    if (respiratoryRateSeries.length <= 5) {
      return 60;
    }
    return 40;
  }, [respiratoryRateSeries.length]);

  const yAxisOffset = useMemo(() => {
    return 20;
  }, []);

  return (
    <Card>
      <HStack alignItems="center" justifyContent="space-between">
        <Heading>Sleeping respiratory rate</Heading>
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
          data={respiratoryRateValues}
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
