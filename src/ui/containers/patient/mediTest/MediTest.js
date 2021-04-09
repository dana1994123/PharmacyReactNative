import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import R from '../../../../res/R';
import SelectForm from '../../../components/SelectForm';
import {
  button,
  form,
  header,
  layout,
  text,
} from '../../../../res/styles/global';
import {AppButton} from '../../../components/AppButton';
import BeginTest from './BeginTest';
import getYearRange from './getYearRange';
import {shouldUseActivityState} from 'react-native-screens';
const Stack = createStackNavigator();

export default function MediTest() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
      }}>
      <Stack.Screen name={'Select your Year of Birth'} component={SelectYear} />
      <Stack.Screen name={'SelectGender'} component={SelectGender} />
      <Stack.Screen name={'BeginTest'} component={BeginTest} />
    </Stack.Navigator>
  );
}

const SelectYear = ({navigation}) => {
  const [year, setYear] = useState(2014);
  state = {
    years: getYearRange(new Date().getFullYear(), 100),
  };

  onFieldChange = (field, value) => {
    setYear(value);
  };
  navigateToGender = () => {
    navigation.navigate(SelectGender);
  };
  return (
    <SelectForm
      options={this.state.years}
      value={year}
      fieldName={'year'}
      onPressNext={() => navigateToGender()}
      onFieldChange={this.onFieldChange.bind(this)}
    />
  );
};
const SelectGender = ({navigation}) => {
  const [selectedGender, setSelected] = useState('Male');
  state = {
    genders: ['Male', 'Female'],
    year: this.props,
  };
  onFieldChange = (field, value) => {
    setSelected(value);
  };
  navigateToSearch = () => {
    navigation.navigate(BeginTest, {
      postId: 3006,
      otherParam: [selectedGender ]
    });
  };

  return (
    <SelectForm
      options={this.state.genders}
      value={selectedGender}
      fieldName={'gender'}
      onPressNext={() => navigateToSearch()}
      onFieldChange={this.onFieldChange.bind(this)}
    />
  );
};
