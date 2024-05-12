import {
  Box,
  HStack,
  Menu,
  MenuItem,
  MenuItemLabel,
  Text,
} from "@gluestack-ui/themed";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useMemo, useState } from "react";
import { Platform } from "react-native";
import DateDisplay, { DateDisplayAndroid } from "./components/DateDisplay";
import NextDayButton from "./components/NextDayButton";
import Popover from "./components/Popover";
import PreviousDayButton from "./components/PreviousDayButton";
import { useDatePicker } from "./hooks/useDatePicker";
import { DatePickerProps } from "./types/DatePicker.type";

export function DatePicker({
  currentDate,
  onDateChange,
  latestSessionDate,
}: DatePickerProps) {
  const [pickDateButtonWidth, setPickDateButtonWidth] = useState<number>(100);
  const {
    value,
    datePickerVisible,
    goToPreviousDay,
    closeCustomDatePicker,
    openCustomDatePicker,
    onPickCustomDate,
    goToNextDay,
    onPressLatestSession,
    onPressToday,
  } = useDatePicker({
    currentDate,
    onDateChange,
    latestSessionDate,
  });

  const hideLatestSession = useMemo(
    () =>
      !latestSessionDate ||
      value.toDateString() === latestSessionDate.toDateString(),
    [latestSessionDate, value],
  );

  const hideToday = useMemo(
    () => value.toDateString() === new Date().toDateString(),
    [value],
  );

  if (Platform.OS === "android") {
    return (
      <HStack w={"$full"} p="$0.5" alignItems="center">
        <PreviousDayButton onPress={goToPreviousDay} />
        <Box flex={5} alignItems="center">
          <Menu
            placement="bottom"
            trigger={({ ...triggerProps }) => {
              return <DateDisplayAndroid {...triggerProps} date={value} />;
            }}
          >
            <MenuItem
              key="PickCustomDate"
              textValue="Pick a date"
              onPress={openCustomDatePicker}
            >
              <MenuItemLabel>Pick a date</MenuItemLabel>
            </MenuItem>
            {hideLatestSession ? null : (
              <MenuItem
                key="Latest"
                textValue="Latest session"
                onPress={onPressLatestSession}
              >
                <MenuItemLabel>Latest session</MenuItemLabel>
              </MenuItem>
            )}
            {hideToday ? null : (
              <MenuItem key="Today" textValue="Today" onPress={onPressToday}>
                <MenuItemLabel>Today</MenuItemLabel>
              </MenuItem>
            )}
          </Menu>
        </Box>
        <NextDayButton onPress={goToNextDay} />
      </HStack>
    );
  }

  return (
    <HStack w={"$full"} p="$0.5" alignItems="center">
      <PreviousDayButton onPress={goToPreviousDay} />
      <Box flex={5} alignItems="center">
        <Popover.Wrapper
          isOpen={datePickerVisible}
          onClose={closeCustomDatePicker}
          onOpen={openCustomDatePicker}
          popoverWidth={pickDateButtonWidth}
          trigger={triggerProps => {
            return (
              <Popover.Trigger {...triggerProps}>
                <DateDisplay
                  isChecked={datePickerVisible}
                  date={value}
                  notifyCurrentWidth={width => {
                    setPickDateButtonWidth(width);
                  }}
                  onPress={openCustomDatePicker}
                />
              </Popover.Trigger>
            );
          }}
        >
          <Popover.Body>
            <HStack mt="$4" alignItems="center" justifyContent="center">
              <Text size="md">Select date:</Text>
              {Platform.OS === "ios" ? (
                <DateTimePicker
                  testID="custom-date-picker"
                  value={value}
                  mode={"date"}
                  onChange={onPickCustomDate}
                />
              ) : null}
            </HStack>
          </Popover.Body>
          <Popover.Footer
            hideLatestSession={hideLatestSession}
            hideToday={hideToday}
            onPressLatestSession={() => {
              onPressLatestSession();
              closeCustomDatePicker();
            }}
            onPressToday={() => {
              onPressToday();
              closeCustomDatePicker();
            }}
          />
        </Popover.Wrapper>
      </Box>
      <NextDayButton onPress={goToNextDay} />
    </HStack>
  );
}
