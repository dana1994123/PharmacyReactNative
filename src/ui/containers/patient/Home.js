import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import db from '../../../database/config';
import FamilyDr from './FamilyDr';
import {createStackNavigator} from '@react-navigation/stack';
import {IconButton, Colors} from 'react-native-paper';
import R from '../../../res/R';
import Profile from './Profile';
import AddPrescription from './AddPrescription';
import HealthInsurance from '../../../models/HealthInsurance';
import Ppharmacy from './Ppharmacy';
import News from '../common/news/News';
import Clock from './drug_reminder/Clock';
import Patient from '../../../models/patient';
import MediTest from './mediTest/MediTest';
const Stack = createStackNavigator();

export default function Home() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: R.colors.primary,
        },
        headerTintColor: R.colors.white,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 30,
        },
      }}>
      <Stack.Screen name={'Home'} component={PatientHome}></Stack.Screen>
      <Stack.Screen name={'Clock'} component={Clock}></Stack.Screen>
      <Stack.Screen
        name={'prescription'}
        component={AddPrescription}></Stack.Screen>
      <Stack.Screen name={'MediTest'} component={MediTest}></Stack.Screen>
      <Stack.Screen name={'News'} component={News}></Stack.Screen>
    </Stack.Navigator>
  );
}
const PatientHome = ({navigation}) => {
  const p = new Patient();
  console.log(p.fullName);
  return (
    <View>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.wheader}>
            <View style={styles.row}>
              <View>
                <Text style={styles.txtHeader}>
                  {' '}
                  How {'\n'} are you {'\n'} feeling {'\n'} today?
                </Text>
              </View>

              <Image
                style={styles.phamImg}
                source={require('../../../../assets/images/pham.jpg')}
              />
            </View>
          </View>
        </View>
        <View style={styles.boxCon}>
          <View style={styles.txtCon}>
            <Text style={styles.h3}>Hello $userName</Text>
          </View>
          {/* DrugReminder obj that will be render from the db */}
          <View style={styles.col}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Clock')}
              style={styles.box2}>
              <View style={styles.row}>
                <View>
                  <Text style={styles.h2}> Drug Reminder</Text>
                  <Text style={styles.h5}>
                    {' '}
                    Be in control of your meds{'\n'}
                    {'                     '} CLICK & SET
                  </Text>
                </View>
                <IconButton
                  icon="clock"
                  style={styles.optionImg}
                  color={R.colors.white}
                  size={80}
                  // onPress={addReminder}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('prescription')}
              style={styles.box}>
              <View style={styles.row}>
                <Text style={styles.h6}>Request{'\n'} Perscription</Text>
                <IconButton
                  icon="plus"
                  style={styles.optionImg}
                  color={R.colors.orange}
                  size={80}
                  // onPress={addReminder}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('MediTest')}
              style={styles.box}>
              <View style={styles.row}>
                <Text style={styles.h6}>Get Daignoise</Text>
                <IconButton
                  icon="map"
                  style={styles.optionImg}
                  color={R.colors.orange}
                  size={80}
                  // onPress={addReminder}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 42,
  },
  header: {
    height: '39%',
    width: '100%',
    backgroundColor: R.colors.lightSec,
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  txtHeader: {
    marginLeft: '15%',
    marginTop: '10%',
    fontSize: 32,
    alignSelf: 'flex-start',
    color: R.colors.orange,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  wheader: {
    marginTop: '17%',
    marginRight: '1%',
    marginBottom: '1%',
    marginEnd: '1%',
    height: '75%',
    width: '98%',
    backgroundColor: R.colors.white,
    alignSelf: 'flex-end',
  },
  phamImg: {
    height: 248,
    width: 300,
    alignSelf: 'flex-end',
  },
  optionImg: {
    alignSelf: 'center',
    marginBottom: '10%',
  },
  h3: {
    fontSize: 25,
    fontWeight: 'bold',
    color: R.colors.yellow,
    marginTop: '5%',
  },
  h2: {
    fontSize: 30,
    fontWeight: 'bold',
    color: R.colors.white,
    marginTop: '5%',
  },
  box: {
    alignSelf: 'center',
    height: '27%',
    width: '95%',
    backgroundColor: R.colors.lightGrey,
    borderRadius: 20,
    borderColor: R.colors.Grey,
    shadowColor: R.colors.black,
    shadowOpacity: 0.1,
    borderWidth: 1,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    marginTop: '2%',
  },
  col: {},
  boxCon: {
    marginTop: '100%',
  },
  box2: {
    alignSelf: 'center',
    height: '27%',
    width: '95%',
    backgroundColor: R.colors.lightSec,
    borderRadius: 20,
    borderColor: R.colors.Grey,
    shadowColor: R.colors.black,
    shadowOpacity: 0.1,
    borderWidth: 1,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
  },
  col: {},
  boxCon: {
    marginTop: '83%',
  },
  txtCon: {
    margin: '5%',
  },
  h5: {
    color: R.colors.white,
    fontSize: 12,
  },
  h6: {
    color: R.colors.black,
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: '5%',
  },
  btn: {
    backgroundColor: R.colors.primary,
    borderRadius: 7,
    borderColor: R.colors.Grey,
    shadowColor: R.colors.black,
    shadowOpacity: 0.1,
    borderWidth: 1,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    marginTop: '12%',
    alignSelf: 'center',
    height: '20%',
    width: '80%',
  },
});
