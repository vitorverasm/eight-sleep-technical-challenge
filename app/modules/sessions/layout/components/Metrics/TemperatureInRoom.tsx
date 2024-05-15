import { Box, HStack, Heading, Text } from "@gluestack-ui/themed";
import { useMemo } from "react";
import { LineChart, lineDataItem } from "react-native-gifted-charts";
import Card from "../../../../../shared/layout/components/Card";
import { SleepSession } from "../../../types/sleep-session.type";

type TemperatureInRoomProps = {
  temperatureInRoomSeries: SleepSession["timeseries"]["tempRoomC"];
};

export function TemperatureInRoom({
  temperatureInRoomSeries,
}: Readonly<TemperatureInRoomProps>) {
  const hours = useMemo(
    () => [
      new Date(temperatureInRoomSeries[0][0]).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
      new Date(
        temperatureInRoomSeries[temperatureInRoomSeries.length - 1][0],
      ).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
    ],
    [temperatureInRoomSeries],
  );

  const tempInRoomValues: lineDataItem[] = useMemo(() => {
    return temperatureInRoomSeries.map(rrItem => ({
      value: rrItem[1],
      dataPointText: `${Math.round(rrItem[1])}`,
    }));
  }, [temperatureInRoomSeries]);

  const spacing = useMemo(() => {
    if (temperatureInRoomSeries.length <= 5) {
      return 60;
    }
    return 40;
  }, [temperatureInRoomSeries.length]);

  const yAxisOffset = useMemo(() => {
    return 20;
  }, []);

  return (
    <Card>
      <HStack alignItems="center" justifyContent="space-between">
        <Heading>Temperature in room</Heading>
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
          data={tempInRoomValues}
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
