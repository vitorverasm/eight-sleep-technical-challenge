import { render, screen, userEvent } from "@testing-library/react-native";
import { Text, TouchableOpacity } from "react-native";
import {
  Text as ThemedText,
  Button,
  ButtonText,
  Box,
} from "@gluestack-ui/themed";

const TestComponent = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress} testID="button-1">
      <Text>Test</Text>
    </TouchableOpacity>
  );
};

const ThemedTestComponent = ({ onPress }: { onPress: () => void }) => {
  return (
    <Box>
      <ThemedText>Test</ThemedText>
      <Button onPress={onPress} testID="themed-button-1">
        <ButtonText>Press me</ButtonText>
      </Button>
    </Box>
  );
};

describe("Example of unit testing in RN", () => {
  it("should find text and press button", async () => {
    jest.useFakeTimers();

    const onSubmit = jest.fn();

    const user = userEvent.setup();
    render(<TestComponent onPress={onSubmit} />);

    await user.press(screen.getByTestId("button-1"));

    expect(screen.getByText("Test")).toBeDefined();
    expect(onSubmit).toHaveBeenCalled();
  });

  it("should render themed component", async () => {
    jest.useFakeTimers();

    const onSubmit = jest.fn();

    const user = userEvent.setup();
    render(<ThemedTestComponent onPress={onSubmit} />);

    await user.press(screen.getByTestId("themed-button-1"));

    expect(screen.getByText("Test")).toBeDefined();
    expect(onSubmit).toHaveBeenCalled();
  });
});
