import React from "react";
import { Pressable, Text } from "react-native";
import R from "../../res/R";

export const AppButton = ({
  onPress,
  title,
  buttonStyle,
  textStyle,
  active = "#3286EE",
  inactive = R.colors.primary,
}) => (
  <Pressable
    onPress={onPress}
    style={({ pressed }) => [
      {
        backgroundColor: pressed ? active : inactive,
      },
      buttonStyle,
    ]}
  >
    <Text style={textStyle}>{title}</Text>
  </Pressable>
);
