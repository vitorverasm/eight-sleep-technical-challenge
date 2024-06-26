import type { Config } from "jest";

const config: Config = {
  verbose: true,
  preset: "jest-expo",
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@gluestack-ui/.*|@gluestack-style/.*|@legendapp/.*|react-native-svg|@shopify/react-native-skia)",
  ],
  setupFiles: ["@shopify/react-native-skia/jestSetup.js"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default config;
