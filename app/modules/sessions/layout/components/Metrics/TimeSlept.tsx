import { Text, Heading } from "@gluestack-ui/themed";
import Card from "../../../../../shared/layout/components/Card";

export function TimeSlept({
  amountOfSleep,
}: {
  amountOfSleep: {
    hours: number;
    minutes: number;
  };
}) {
  const { hours, minutes } = amountOfSleep;
  return (
    <Card>
      <Heading>Time Slept</Heading>
      <Text>
        {hours}h {minutes ? <Text>{minutes}m</Text> : null}
      </Text>
    </Card>
  );
}
