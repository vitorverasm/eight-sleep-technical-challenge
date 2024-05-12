import { Text, styled } from "@gluestack-ui/themed";
import React from "react";
import { TouchableOpacity } from "react-native";

type DateDisplayProps = {
  isChecked: boolean;
  notifyCurrentWidth: (width: number) => void;
  date: Date;
  onPress?: () => void;
};

const PickDateButton = styled(TouchableOpacity, {
  px: "$2",
  py: "$2",
  borderRadius: "$md",
  w: "$full",
  alignItems: "center",
  ":checked": {
    bg: "$backgroundDark950",
    borderBottomStartRadius: 0,
    borderBottomEndRadius: 0,
  },
});

function DateDisplay({
  isChecked,
  notifyCurrentWidth,
  date,
  onPress,
}: DateDisplayProps) {
  return (
    <PickDateButton
      states={{ checked: isChecked }}
      testID="pick-date-button"
      onLayout={event => {
        const { width } = event.nativeEvent.layout;
        notifyCurrentWidth(width);
      }}
      onPress={onPress}
    >
      <Text fontSize={16} fontWeight={"$bold"}>
        {date.toLocaleDateString("en-us", {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </Text>
    </PickDateButton>
  );
}

export default DateDisplay;
