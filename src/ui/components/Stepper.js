import React from 'react';
import {Pressable, Text, View, StyleSheet} from 'react-native';
export const Stepper = ({fCall, number, buttonStyle, textStyle, numStyle}) => {
  return (
    <View style={styles.num}>
      <Pressable onPress={() => fCall(number--)} style={buttonStyle}>
        <Text style={textStyle}>-</Text>
      </Pressable>
      <View>
        <Text style={[numStyle, styles.num]}>{number}</Text>
      </View>
      <Pressable onPress={() => fCall(number++)} style={buttonStyle}>
        <Text style={textStyle}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  num: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
