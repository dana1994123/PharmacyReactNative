import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Card,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SelectGender from './SelectGender';
import SelectYear from './SelectYear';
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
const Stack = createStackNavigator();

export default function MediTest() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: R.colors.primary,
        },
        headerTintColor: R.colors.white,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
        },
      }}>
      <Stack.Screen name={'StartTest'} component={StartTest} />
    </Stack.Navigator>
  );
}

const StartTest = ({navigation}) => {
  const [genders, setGender] = useState(['Male', 'Female']);
  onFieldChange = (field, value) => {
    this.props.dispatch(fieldChangedAction(field, value));
  };
  return (
    <View style={layout.fullScreen}>
      <View style={styles.txtcontainer}>
        <Text style={styles.h2}>Fill This Form to get Started</Text>
        <Text style={styles.note}>note:this test will need up to 5 mins</Text>
      </View>

      <View>
        <Text>Gender:</Text>
        <SelectGender />
      </View>
      <View>
        <Text>Year of Birth</Text>
        <SelectYear />
      </View>
      <View>
        <AppButton
          buttonStyle={button.Wrap}
          textStyle={button.Text}
          title={'Start'}
          onPress={() => onSignUp()}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  h2: {
    fontSize: 30,
    color: R.colors.orange,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  note: {
    fontSize: 10,
    color: R.colors.black,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  txtcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
  },
});
