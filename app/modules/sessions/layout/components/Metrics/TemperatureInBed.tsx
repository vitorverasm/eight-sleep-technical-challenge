import { Box, HStack, Heading, Text } from "@gluestack-ui/themed";
import { useMemo } from "react";
import { LineChart, lineDataItem } from "react-native-gifted-charts";
import Card from "../../../../../shared/layout/components/Card";
import { SleepSession } from "../../../types/sleep-session.type";

type TemperatureInBedProps = {
  temperatureInBedSeries: SleepSession["timeseries"]["tempBedC"];
};

export function TemperatureInBed({
  temperatureInBedSeries,
}: Readonly<TemperatureInBedProps>) {
  const hours = useMemo(
    () => [
      new Date(temperatureInBedSeries[0][0]).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
      new Date(
        temperatureInBedSeries[temperatureInBedSeries.length - 1][0],
      ).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
    ],
    [temperatureInBedSeries],
  );

  const tempInBedValues: lineDataItem[] = useMemo(() => {
    return temperatureInBedSeries.map(rrItem => ({
      value: rrItem[1],
      dataPointText: `${Math.round(rrItem[1])}`,
    }));
  }, [temperatureInBedSeries]);

  const spacing = useMemo(() => {
    if (temperatureInBedSeries.length <= 5) {
      return 60;
    }
    return 40;
  }, [temperatureInBedSeries.length]);

  const yAxisOffset = useMemo(() => {
    return 20;
  }, []);

  return (
    <Card>
      <HStack alignItems="center" justifyContent="space-between">
        <Heading>Temperature in bed</Heading>
        <Text size="xs">Celsius</Text>
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
          data={tempInBedValues}
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
