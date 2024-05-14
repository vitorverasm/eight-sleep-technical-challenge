import { Heading, Text } from "@gluestack-ui/themed";
import Card from "../../../../../shared/layout/components/Card";
import { AmountOfSleep } from "../../../types/amount-of-sleep.type";

export function TimeSlept({
  amountOfSleep,
}: {
  amountOfSleep?: AmountOfSleep;
}) {
  if (!amountOfSleep) {
    return (
      <Card>
        <Heading>Time Slept</Heading>
        <Text>--</Text>
      </Card>
    );
  }

  if (amountOfSleep) {
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
}
