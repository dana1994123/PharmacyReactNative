import React from 'react';
import {View, TextInput} from 'react-native';
import {AppButton} from '../../components/AppButton';
import R from '../../../res/R';
import {layout, form, button} from '../../../res/styles/global';

export default function CheckOrder() {
  return (
    <View style={layout.centeredFullScreen}>
      <TextInput
        style={form.input}
        selectionColor={R.colors.primary}
        placeholder="Card#"
      />
      <TextInput
        style={form.input}
        selectionColor={R.colors.primary}
        placeholder="Prescription"
      />
      <AppButton
        title="Check Order"
        buttonStyle={button.Wrap}
        textStyle={button.Text}
      />
    </View>
  );
}
