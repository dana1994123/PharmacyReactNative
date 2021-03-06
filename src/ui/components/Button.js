import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import R from '../../res/R';


export default function ({ onPress, title, fill = false }) {
  return (
    <TouchableOpacity
      style={[styles.container, fill ? styles.fillContainer : styles.normalContainer]}
      onPress={onPress}
      underlayColor='#fff'>
      <Text
        style={[styles.buttonText, fill ? styles.fillText : styles.normalText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 2,
    borderColor: R.colors.secondary,
    borderRadius: 25
  },
  fillContainer: {
    backgroundColor: R.colors.secondary,
  },
  normalContainer: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    fontWeight: 'bold'
  },
  fillText: {
    color: 'white',
  },
  normalText: {
    color: R.colors.secondary
  }
});