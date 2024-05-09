import { createConfig } from "@gluestack-style/react";

export const config = createConfig({
  aliases: {
    bg: "backgroundColor",
    bgColor: "backgroundColor",
    rounded: "borderRadius",
    h: "height",
    w: "width",
  },
  tokens: {
    colors: {},
    space: {},
    radii: {},
    letterSpacings: {},
    lineHeights: {},
    fontWeights: {},
    fontSizes: {},
    mediaQueries: {},
  },
  components: {
    Text: {
      theme: {
        _dark: {
          color: "$white",
        },
      },
    },
  },
  globalStyle: {
    variants: {
      shadow: {
        softShadow: {
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 10,
          shadowOpacity: 0.1,
          _android: {
            shadowColor: "$primary500",
            elevation: 5,
            shadowOpacity: 0.05,
          },
        },
      },
    },
  },
} as const);

type ConfigType = typeof config;

declare module "@gluestack-style/react" {
  interface ICustomConfig extends ConfigType { }
}
