import React from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  ViewStyle,
  StyleProp,
} from "react-native";
import { useTheme } from "@ui-kitten/components";

import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
} from "react-native-reanimated";

interface DotsProps<T> {
  translationValue: Animated.SharedValue<number>;
  style?: StyleProp<ViewStyle>;
}
function Dots<T>({ translationValue, style }: DotsProps<T>) {
  const theme = useTheme();
  const { width, height } = useWindowDimensions();
  const DATA = [0, 1, 2];

  return (
    <View style={[styles.container, style]}>
      {DATA.map((_, i) => {
        const dotColor = useDerivedValue(() => {
          return interpolateColor(
            translationValue.value,
            [(i - 1) * width, i * width, (i + 1) * width],
            [
              theme["text-basic-color"],
              theme["button-primary-color"],
              theme["text-basic-color"],
            ]
          );
        });

        const dotWidth = useDerivedValue(() => {
          return interpolate(
            translationValue.value,
            [(i - 1) * width, i * width, (i + 1) * width],
            [27, 57, 27],
            Extrapolate.CLAMP
          );
        });
        const opacity = interpolate(
          dotWidth.value,
          [0, 0.3, 0.8, 1],
          [0, 0.3, 0.8, 1]
        );
        const dotStyle = useAnimatedStyle(() => {
          return {
            backgroundColor: dotColor.value,
            width: dotWidth.value,
            height: 4,
            opacity: opacity,
          };
        });

        return (
          <Animated.View key={i.toString()} style={[styles.dot, dotStyle]} />
        );
      })}
    </View>
  );
}

export default Dots;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 8,
    marginHorizontal: 4,
  },
});
