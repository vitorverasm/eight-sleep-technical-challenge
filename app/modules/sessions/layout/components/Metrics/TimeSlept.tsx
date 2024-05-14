import { Box, Heading, Text } from "@gluestack-ui/themed";
import Card from "../../../../../shared/layout/components/Card";
import { AmountOfSleep } from "../../../types/amount-of-sleep.type";

export function TimeSlept({
  amountOfSleep,
  averageAmountOfSleep,
}: {
  amountOfSleep?: AmountOfSleep;
  averageAmountOfSleep?: AmountOfSleep;
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
        <Box mt="$4" gap="$2">
          <Heading size="md">
            {hours}h {minutes ? <Heading>{minutes}m</Heading> : null}
          </Heading>
          {averageAmountOfSleep ? (
            <Text>
              Average: {averageAmountOfSleep.hours}h{" "}
              {averageAmountOfSleep.minutes ? (
                <Text>{averageAmountOfSleep.minutes}m</Text>
              ) : null}
            </Text>
          ) : null}
        </Box>
      </Card>
    );
  }
}
