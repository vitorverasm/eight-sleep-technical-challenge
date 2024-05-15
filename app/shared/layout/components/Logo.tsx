import { Image } from "expo-image";

const logo = require("../../assets/logo.png");

export function Logo() {
  return (
    <Image
      cachePolicy={"disk"}
      style={{
        width: 62,
        height: 25,
      }}
      source={logo}
      contentFit="cover"
    />
  );
}
