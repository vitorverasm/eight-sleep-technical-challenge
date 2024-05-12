import { Box, HStack, Text, styled } from "@gluestack-ui/themed";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { useCallback, useState } from "react";
import { TouchableOpacity } from "react-native";
import NextDayButton from "./NextDayButton";
import PopoverWrapper from "./PopoverWrapper";
import PreviousDayButton from "./PreviousDayButton";

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

type DatePickerProps = {
  currentDate: Date;
  onDateChange: (date: Date) => void;
};

export function DatePicker({ currentDate, onDateChange }: DatePickerProps) {
  const [internalDate, setInternalDate] = useState(currentDate);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [pickDateButtonWidth, setPickDateButtonWidth] = useState<number>(100);

  const goToPreviousDay = useCallback(() => {
    const newDate = new Date(internalDate);
    newDate.setDate(newDate.getDate() - 1);
    setInternalDate(newDate);
    onDateChange(newDate);
  }, [internalDate, onDateChange]);

  const goToNextDay = useCallback(() => {
    const newDate = new Date(internalDate);
    newDate.setDate(newDate.getDate() + 1);
    setInternalDate(newDate);
    onDateChange(newDate);
  }, [internalDate, onDateChange]);

  const openCustomDatePicker = () => setShowDatePicker(true);

  const closeCustomDatePicker = () => setShowDatePicker(false);

  const onPickCustomDate = (
    event: DateTimePickerEvent,
    selectedDate?: Date,
  ) => {
    if (selectedDate && event.type === "set") {
      const newCustomDate = selectedDate;
      setShowDatePicker(false);
      setInternalDate(newCustomDate);
    }
  };

  return (
    <HStack w={"$full"} p="$0.5" alignItems="center">
      <PreviousDayButton onPress={goToPreviousDay} />
      <Box flex={5} alignItems="center">
        <PopoverWrapper
          isOpen={showDatePicker}
          onClose={closeCustomDatePicker}
          onOpen={openCustomDatePicker}
          popoverWidth={pickDateButtonWidth}
          trigger={triggerProps => {
            return (
              <PickDateButton
                {...triggerProps}
                states={{ checked: showDatePicker }}
                testID="pick-date-button"
                onLayout={event => {
                  const { width } = event.nativeEvent.layout;
                  setPickDateButtonWidth(width);
                }}
              >
                <Text fontSize={16} fontWeight={"$bold"}>
                  {internalDate.toLocaleDateString("en-us", {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </Text>
              </PickDateButton>
            );
          }}
        >
          <HStack mt="$4" alignItems="center" justifyContent="center">
            <Text size="md">Select date:</Text>
            <DateTimePicker
              testID="custom-date-picker"
              value={internalDate}
              mode={"date"}
              onChange={onPickCustomDate}
            />
          </HStack>
        </PopoverWrapper>
      </Box>
      <NextDayButton onPress={goToNextDay} />
    </HStack>
  );
}
