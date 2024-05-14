import { Text, Heading } from "@gluestack-ui/themed";
import Card from "../../../../../shared/layout/components/Card";

export function TimeSlept({ amountOfSleep }: { amountOfSleep: number }) {
  return (
    <Card>
      <Heading>Time Slept</Heading>
      <Text>{amountOfSleep}h</Text>
    </Card>
  );
}
