import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import R from '../../res/R';

export const DateInput = ({setDay, setMonth, setYear}) => (
  <View style={styles.row}>
    <View style={styles.inputWrap}>
      <TextInput
        style={styles.input1}
        selectionColor={R.colors.primary}
        onChangeText={text => setDay(text)}
        placeholder="Day"
      />
    </View>
    <View style={styles.inputWrap}>
      <TextInput
        style={styles.input2}
        selectionColor={R.colors.primary}
        onChangeText={text => setMonth(text)}
        placeholder="Month"
      />
    </View>
    <View style={styles.inputWrap}>
      <TextInput
        style={styles.input3}
        selectionColor={R.colors.primary}
        onChangeText={text => setYear(text)}
        placeholder="Year"
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  inputWrap: {
    flex: 1,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  input1: {
    height: 48,
    borderRadius: 5,
    backgroundColor: '#EEEEEE',
  },
  input2: {
    height: 48,
    borderRadius: 5,
    backgroundColor: '#EEEEEE',
  },
  input3: {
    height: 48,
    backgroundColor: '#EEEEEE',
  },
});
