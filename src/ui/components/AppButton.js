import React from 'react';
import {Pressable, Text} from 'react-native';

export const AppButton = ({onPress, title, buttonStyle, textStyle}) => (
  <Pressable
    onPress={onPress}
    style={({pressed}) => [{opacity: pressed ? 0.65 : 1.0}, buttonStyle]}>
    <Text style={textStyle}>{title}</Text>
  </Pressable>
);
