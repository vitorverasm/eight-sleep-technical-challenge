import {
  render,
  screen,
  userEvent,
  waitFor,
} from "@testing-library/react-native";
import { TestWrapper } from "../../../../tests/mocks/TestWrapper";
import { DatePicker } from "../DatePicker";

describe("DatePicker", () => {
  jest.useFakeTimers();
  const mockDateString = "2024-05-12T05:00:00.000Z";

  it("Should display correct date format", () => {
    render(
      <TestWrapper>
        <DatePicker
          currentDate={new Date(mockDateString)}
          onDateChange={() => {}}
        />
      </TestWrapper>,
    );

    expect(screen.getByText("Sun, May 12, 2024")).toBeOnTheScreen();
  });

  it("Should change to the previous day", async () => {
    const user = userEvent.setup();
    const onChangeSpy = jest.fn();
    render(
      <TestWrapper>
        <DatePicker
          currentDate={new Date(mockDateString)}
          onDateChange={onChangeSpy}
        />
      </TestWrapper>,
    );

    user.press(screen.getByTestId("previous-day-button"));

    await waitFor(() => {
      expect(screen.getByText("Sat, May 11, 2024")).toBeOnTheScreen();
    });

    expect(onChangeSpy).toHaveBeenCalledWith(
      new Date("2024-05-11T05:00:00.000Z"),
    );
  });

  it("Should change to the next day", async () => {
    const user = userEvent.setup();
    const onChangeSpy = jest.fn();
    render(
      <TestWrapper>
        <DatePicker
          currentDate={new Date(mockDateString)}
          onDateChange={onChangeSpy}
        />
      </TestWrapper>,
    );

    user.press(screen.getByTestId("next-day-button"));

    await waitFor(() => {
      expect(screen.getByText("Mon, May 13, 2024")).toBeOnTheScreen();
    });

    expect(onChangeSpy).toHaveBeenCalledWith(
      new Date("2024-05-13T05:00:00.000Z"),
    );
  });
});
