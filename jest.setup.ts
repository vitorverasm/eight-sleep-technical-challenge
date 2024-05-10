import "@testing-library/react-native/extend-expect";
import "react-native-gesture-handler/jestSetup";

process.env.EXPO_PUBLIC_API_URL = "http://localhost";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");
