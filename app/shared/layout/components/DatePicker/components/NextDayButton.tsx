import { Box, ButtonIcon, ChevronRightIcon } from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native";

export default function NextDayButton({ onPress }: { onPress: () => void }) {
  return (
    <Box flex={1} alignItems="flex-end">
      <TouchableOpacity onPress={onPress} testID="next-day-button">
        <ButtonIcon as={ChevronRightIcon} height={22} width={22} />
      </TouchableOpacity>
    </Box>
  );
}
