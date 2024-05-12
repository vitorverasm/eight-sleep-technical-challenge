import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { useCallback, useState } from "react";
import { Platform } from "react-native";
import { DatePickerProps } from "../types/DatePicker.type";

export function useDatePicker({
  currentDate,
  onDateChange,
  latestSessionDate,
}: DatePickerProps) {
  const [internalDate, setInternalDate] = useState(currentDate);
  const [showDatePicker, setShowDatePicker] = useState(false);

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

  const closeCustomDatePicker = () => setShowDatePicker(false);

  const onPickCustomDate = (
    event: DateTimePickerEvent,
    selectedDate?: Date,
  ) => {
    if (selectedDate && event.type === "set") {
      const newCustomDate = selectedDate;
      setShowDatePicker(false);
      setInternalDate(newCustomDate);
      onDateChange(newCustomDate);
    }
  };

  const onPressLatestSession = useCallback(() => {
    if (latestSessionDate) {
      const newDate = new Date(latestSessionDate);
      setInternalDate(newDate);
      onDateChange(newDate);
    }
  }, [latestSessionDate, onDateChange]);

  const onPressToday = useCallback(() => {
    const newDate = new Date();
    setInternalDate(newDate);
    onDateChange(newDate);
  }, [onDateChange]);

  const openCustomDatePicker = () => {
    if (Platform.OS === "android") {
      DateTimePickerAndroid.open({
        value: internalDate,
        onChange: onPickCustomDate,
        mode: "date",
      });
    } else {
      setShowDatePicker(true);
    }
  };

  return {
    value: internalDate,
    datePickerVisible: showDatePicker,
    goToPreviousDay,
    goToNextDay,
    openCustomDatePicker,
    closeCustomDatePicker,
    onPickCustomDate,
    onPressLatestSession,
    onPressToday,
  };
}
