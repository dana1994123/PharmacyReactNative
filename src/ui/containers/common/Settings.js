import React, {useState, useContext} from 'react';
import {Text, View, Switch} from 'react-native';
import R from '../../../res/R';
import {form, layout, button} from '../../../res/styles/global';
import {Stepper} from '../../components/Stepper';
import {AppButton} from '../../components/AppButton';
import {AuthContext} from '../../../navigation/AuthProvider';

export default function Settings() {
  const [fontSize, setFontSize] = useState('');
  const [toggleSwitch, setToggleSwitch] = useState('');

  const {logout} = useContext(AuthContext);

  return (
    <View style={layout.fullScreen}>
      <View>
        <Text>Settings Page</Text>
      </View>
      <View style={layout.row}>
        <Text>Dark/Light</Text>
        <Switch
          trackColor={{false: '#767577', true: R.colors.primary}}
          thumbColor={toggleSwitch ? '#fff' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setToggleSwitch()}
          value={toggleSwitch}
        />
      </View>
      <View style={layout.row}>
        <Text>Font Size</Text>
        <Stepper fCall={setFontSize} number={fontSize} />
      </View>
      <AppButton
        title={'Sign Out'}
        buttonStyle={button.Wrap}
        textStyle={button.Text}
        onPress={() => logout()}
      />
    </View>
  );
}
