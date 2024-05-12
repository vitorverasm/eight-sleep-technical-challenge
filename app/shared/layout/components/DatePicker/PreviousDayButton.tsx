import { Box, ButtonIcon, ChevronLeftIcon } from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native";

export default function PreviousDayButton({
  onPress,
}: {
  onPress: () => void;
}) {
  return (
    <Box flex={1} alignItems="flex-start">
      <TouchableOpacity onPress={onPress} testID="previous-day-button">
        <ButtonIcon as={ChevronLeftIcon} height={22} width={22} />
      </TouchableOpacity>
    </Box>
  );
}
