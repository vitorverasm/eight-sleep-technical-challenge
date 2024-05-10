import { render, screen, userEvent } from "@testing-library/react-native";
import { Text, TouchableOpacity } from "react-native";

const TestComponent = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress} testID="button-1">
      <Text>Test</Text>
    </TouchableOpacity>
  );
};

test("Example of unit testing in RN", async () => {
  jest.useFakeTimers();

  const onSubmit = jest.fn();

  const user = userEvent.setup();
  render(<TestComponent onPress={onSubmit} />);

  await user.press(screen.getByTestId("button-1"));

  expect(screen.getByText("Test")).toBeDefined();
});
