import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import R from '../../../res/R';

export default function PHeader({name}) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: '3%',
    alignItems: 'center',
    backgroundColor: R.colors.primary,
    height: 60,
  },
  headerTitle: {
    fontSize: 30,
    color: R.colors.white,
  },
});
