import React from "react";
import { Pressable, Text, View } from "react-native";
export const Stepper = ({ fCall, number, buttonStyle, textStyle }) => {
  return (
    <View>
      {/* <Pressable onPress={fCall(number--)} style={buttonStyle}>
        <Text style={textStyle}>-</Text>
      </Pressable>
      <Text>{number}</Text>
      <Pressable onPress={fCall(number++)} style={buttonStyle}>
        <Text style={textStyle}>+</Text>
      </Pressable> */}
    </View>
  );
};
