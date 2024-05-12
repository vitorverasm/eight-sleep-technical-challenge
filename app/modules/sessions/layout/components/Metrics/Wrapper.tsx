import { Box } from "@gluestack-ui/themed";

export function Wrapper({ children }: { children?: React.ReactNode }) {
  return <Box w="$full">{children}</Box>;
}
