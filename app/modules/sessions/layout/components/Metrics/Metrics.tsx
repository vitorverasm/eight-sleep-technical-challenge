import { SleepSession } from "../../../types/sleep-session";
import { Wrapper } from "./Wrapper";
import { Card as GCard, Heading, Text } from "@gluestack-ui/themed";

function Card({ children }: { children: React.ReactNode }) {
  return (
    <GCard
      size="md"
      variant="elevated"
      w="$full"
      backgroundColor="$backgroundDark950"
    >
      {children}
    </GCard>
  );
}

function SleepFitness({ score }: { score: SleepSession["score"] }) {
  return (
    <Card>
      <Heading mb="$1" size="md">
        Sleep Fitness
      </Heading>
      <Text size="sm">{score}%</Text>
    </Card>
  );
}

export default {
  Wrapper,
  SleepFitness,
};
