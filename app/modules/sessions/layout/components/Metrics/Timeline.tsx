import { Box, HStack, Heading, Text } from "@gluestack-ui/themed";
import Card from "../../../../../shared/layout/components/Card";
import { SleepStage } from "../../../types/sleep-stage";
import { TimelineRecord } from "../../../types/timeline.type";

type TimelineProps = {
  timelineRecords?: TimelineRecord[];
};

const colorMap: Record<SleepStage["stage"], string> = {
  out: "$yellow300",
  awake: "$blueGray400",
  light: "$blue400",
  deep: "$blue600",
};

const labelMap: Record<SleepStage["stage"], string> = {
  out: "Out of bed",
  awake: "In bed",
  light: "Light",
  deep: "Deep",
};

export function Timeline({ timelineRecords }: TimelineProps) {
  if (!timelineRecords) return null;

  return (
    <Card>
      <Heading>Timeline</Heading>
      <Box mt={"$4"} gap="$2" w="$full">
        {timelineRecords.map(record => (
          <HStack
            gap="$2"
            alignItems="center"
            w="$full"
            justifyContent="space-between"
          >
            <Text fontWeight={"$bold"} color={colorMap[record.stage]}>
              {record.date.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </Text>
            <HStack alignItems="center">
              <Text fontWeight={"$medium"}>{labelMap[record.stage]}</Text>
              {record.stage === "deep" || record.stage === "light" ? (
                <Text ml="$2">😴</Text>
              ) : null}
              {record.stage === "awake" ? <Text ml="$2">🛏️</Text> : null}
            </HStack>
          </HStack>
        ))}
      </Box>
    </Card>
  );
}
