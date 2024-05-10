import "@testing-library/react-native/extend-expect";
import "react-native-gesture-handler/jestSetup";

jest.mock("./app/shared/config/env", () => {
  return jest.fn().mockImplementation(() => {
    return {
      EXPO_PUBLIC_API_URL: "https://mockurl.com",
    };
  });
});

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");
