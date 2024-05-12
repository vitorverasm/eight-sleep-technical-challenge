import { Card, Heading, Text } from "@gluestack-ui/themed";

export function EmptyData() {
  return (
    <Card
      size="md"
      variant="elevated"
      w="$full"
      backgroundColor="$backgroundDark950"
    >
      <Heading mb="$1" size="md">
        Empty session
      </Heading>
      <Text size="sm">No sleep data was recorded on this date.</Text>
    </Card>
  );
}
