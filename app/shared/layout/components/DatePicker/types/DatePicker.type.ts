export type DatePickerProps = {
  currentDate: Date;
  onDateChange: (date: Date) => void;
  latestSessionDate?: Date;
};
