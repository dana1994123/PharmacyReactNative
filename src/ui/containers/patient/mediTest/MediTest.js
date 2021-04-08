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
import {Card, Divider} from 'react-native-elements';
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
import BeginTest from './BeginTest';
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
      <Stack.Screen name={'BeginTest'} component={BeginTest} />
    </Stack.Navigator>
  );
}

const StartTest = ({navigation}) => {
  

  onFieldChange = (field, value) => {
    this.props.dispatch(fieldChangedAction(field, value));
  };
  startQuiz = () => {
    console.log('the quiz will start soooon');
    navigation.navigate(BeginTest);
  };
  return (
    <View style={layout.fullScreen}>
      <View>
        <Card
          featuredTitle="{drugReminder.drug.dName}"
          featuredTitleStyle={{
            marginHorizontal: 5,
            textShadowColor: '#00000f',
            textShadowOffset: {width: 3, height: 3},
            textShadowRadius: 3,
          }}>
          <View style={styles.txtcontainer}>
            <Text style={styles.h2}>Fill This Form to get Started</Text>
            <Text style={styles.note}>This test will need up to 5 mins</Text>
          </View>
          <View style={styles.q}>
            <Text style={styles.txt}>Year of Birth</Text>
            <SelectYear />
          </View>

          <View style={styles.genderSpin}>
            <Text style={styles.txt}>Gender</Text>
            <SelectGender />
          </View>

          <View style={styles.btncont}>
            <AppButton
              buttonStyle={button.Wrap}
              textStyle={button.Text}
              title={'Start'}
              onPress={() => startQuiz()}
            />
          </View>
        </Card>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  h2: {
    fontSize: 25,
    color: R.colors.primary,
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
    marginTop: '15%',
  },
  q: {
    marginTop: '15%',
    flexDirection: 'row',
  },
  genderSpin: {
    marginTop: '1%',
    flexDirection: 'row',
  },
  txt: {
    alignSelf: 'flex-start',
    fontSize: 20,
    marginTop: '10%',
    marginLeft: '10%',
    color: R.colors.black,
  },
});
