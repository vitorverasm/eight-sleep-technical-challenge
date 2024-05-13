import { Box } from "@gluestack-ui/themed";
import { Canvas, Path, SkFont, Skia, Text } from "@shopify/react-native-skia";
import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { SharedValue, useDerivedValue } from "react-native-reanimated";

const deviceWidth = Dimensions.get("window").width;

type Props = {
  strokeWidth: number;
  radius: number;
  percentage: SharedValue<number>;
  end: SharedValue<number>;
  font: SkFont;
  subtitleFont: SkFont;
};

const CircularProgressBar = ({
  radius,
  strokeWidth,
  percentage,
  end,
  font,
  subtitleFont,
}: Props) => {
  const x = (deviceWidth - 72) / 2;
  const innerRadius = radius - strokeWidth / 2;

  if (!font || !subtitleFont) {
    throw new Error("Missing font");
  }

  const path = Skia.Path.Make();
  path.addCircle(x, radius, innerRadius);

  const targetText = useDerivedValue(
    () => `${Math.round(percentage.value)}%`,
    [],
  );

  const textX = useDerivedValue(() => {
    const _fontSize = font.measureText(targetText.value);
    return x - radius + (radius * 2 - _fontSize.width) / 2;
  }, []);

  const textY = useDerivedValue(() => {
    const percentageFontSize = font.measureText(targetText.value);
    return radius + percentageFontSize.height / 2 - 20;
  }, []);

  const subtitleTextX = useDerivedValue(() => {
    const _fontSize = subtitleFont.measureText("Sleep Fitness");
    return x - radius + (radius * 2 - _fontSize.width) / 2;
  }, []);

  const subtitleTextY = useDerivedValue(() => {
    const _fontSize = subtitleFont.measureText("Sleep Fitness");
    return textY.value + _fontSize.height + 10;
  }, []);

  return (
    <Box w="$full" h={radius * 2}>
      <Canvas style={styles.container}>
        <Path
          path={path}
          strokeWidth={strokeWidth}
          color="#151515"
          style="stroke"
          strokeJoin="round"
          strokeCap="round"
          start={0}
          end={1}
        />
        <Path
          path={path}
          strokeWidth={strokeWidth}
          color="#1862FF"
          style="stroke"
          strokeJoin="round"
          strokeCap="round"
          start={0}
          end={end}
        />
        <Text x={textX} y={textY} text={targetText} font={font} color="white" />
        <Text
          x={subtitleTextX}
          y={subtitleTextY}
          text={"Sleep Fitness"}
          font={subtitleFont}
          color="white"
        />
      </Canvas>
    </Box>
  );
};

export default CircularProgressBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
