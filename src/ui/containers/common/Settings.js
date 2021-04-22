import React, {useState, useContext} from 'react';
import {Text, View, Switch} from 'react-native';
import R from '../../../res/R';
import {layout, button, textstyle} from '../../../res/styles/global';
import {Stepper} from '../../components/Stepper';
import {AppButton} from '../../components/AppButton';
import {AuthContext} from '../../../navigation/AuthProvider';

export default function Settings() {
  const [fontSize, setFontSize] = useState(24);
  const [toggleSwitch, setToggleSwitch] = useState('');

  const {logout} = useContext(AuthContext);

  return (
    <View style={layout.centeredFullScreen}>
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
        <Text style={textstyle.h6}>Font Size</Text>
        <Stepper
          fCall={setFontSize}
          number={fontSize}
          numStyle={textstyle.h6}
          buttonStyle={button.Wrap}
          textStyle={textstyle.h2}
        />
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
