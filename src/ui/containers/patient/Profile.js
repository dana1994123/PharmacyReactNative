import React from 'react';
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
import Patient from '../../../models/patient';
import R from '../../../res/R';
import PHeader from './PHeader';
import UpdateProfile from './UpdateProfile';
import Ppharmacy from './Ppharmacy';
import AddPrescription from './AddPrescription';
import Clock from './drug_reminder/Clock';
import FamilyDr from './FamilyDr';
import HealthInsurance from './HealthInsurance';
import {IconButton} from 'react-native-paper';

const Stack = createStackNavigator();

export default function Pprofile() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: R.colors.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize:30
        },
      }}>
      <Stack.Screen name={'Profile'} component={Profile} />
      <Stack.Screen name={'Drug Reminder'} component={Clock} />
      <Stack.Screen name={'prescription'} component={AddPrescription} />
      <Stack.Screen name={'Pharmacy'} component={Ppharmacy} />
      <Stack.Screen name={'FamilyDr'} component={FamilyDr} />
      <Stack.Screen name={'UpdateProfile'} component={UpdateProfile} />
      <Stack.Screen name={'HealthInsurance'} component={HealthInsurance} />
    </Stack.Navigator>
  );
}
const Profile = ({navigation}) => {
  //get the patient information from the database and render it here
  const currPatient = new Patient();
  const updateProfile = () => {
    //navigate to update profile page
    navigation.navigate('UpdateProfile');
  };
  return (
    <ImageBackground
      source={require('../../../../assets/images/bg.jpg')}
      style={styles.image2}>
      <ScrollView>
        <View style={styles.container}>
          {/* user picture and name */}
          <View>
            <Image
              style={styles.avatar}
              source={require('../../../../assets/images/default.png')}
            />
            <Text style={styles.userName}>{currPatient.fullName}</Text>
            <Text style={styles.sub}>
              {currPatient.location.city}, {currPatient.location.country}
            </Text>
            <IconButton
              icon="pencil"
              color={R.colors.secondary}
              size={40}
              onPress={() => updateProfile()}
            />

            <View style={styles.body}>
              <View style={styles.col}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('prescription')}
                  style={styles.buttonContainer}>
                  <Image
                    style={styles.optionImg}
                    source={require('../../../../assets/images/61122.png')}
                  />
                  <Text style={styles.optionTxt}>
                    Perscription {'\n'} History
                  </Text>
                </TouchableOpacity>
                {/* pharmacy */}
                <TouchableOpacity
                  onPress={() => navigation.navigate('Pharmacy')}
                  style={styles.buttonContainer}>
                  <Image
                    style={styles.optionImg}
                    source={require('../../../../assets/images/pha.png')}
                  />
                  <Text style={styles.optionTxt}>
                    {'       '}My {'\n'} Pharmacy{' '}
                  </Text>
                </TouchableOpacity>
                {/* update profile */}
                <TouchableOpacity
                  onPress={() => navigation.navigate('FamilyDr')}
                  style={styles.buttonContainer}>
                  <Image
                    style={styles.optionImg}
                    source={require('../../../../assets/images/dr.jpg')}
                  />
                  <Text style={styles.optionTxt}>Family {'\n'} Doctor</Text>
                </TouchableOpacity>

                {/* health insurance */}
                <TouchableOpacity
                  onPress={() => navigation.navigate('HealthInsurance')}
                  style={styles.buttonContainer}>
                  <Image
                    style={styles.optionImg}
                    source={require('../../../../assets/images/health.png')}
                  />
                  <Text style={styles.optionTxt}>Health {'\n'} Insurance</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: R.colors.blueGrey,
    height: '38%',
    alignContent: 'center',
    alignItems: 'center',
  },
  optionImg: {
    width: 40,
    height: 50,
    borderRadius: 10,
    position: 'absolute',
    marginTop: 25,
    marginLeft: '70%',
  },
  optionTxt: {
    marginLeft: '10%',
    fontWeight: '600',
    fontSize: 18,
    marginTop: '15%',
    color: R.colors.black,
  },
  sub: {
    fontSize: 15,
    marginLeft: '5%',
    alignSelf: 'flex-end',
    marginRight: '16%',
  },
  col: {
    justifyContent: 'space-evenly',
    marginTop: '5%',
    alignSelf: 'flex-end',
  },
  avatar: {
    width: 100,
    height: 80,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: R.colors.orange,
    alignSelf: 'flex-start',
    position: 'absolute',
    marginTop: '12%',
    marginLeft: '5%',
  },

  buttonContainer: {
    height: 90,
    width: 170,
    borderWidth: 4,
    borderColor: R.colors.orange,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginRight: '5%',
    marginBottom: '5%',
  },
  userName: {
    marginRight: '10%',
    fontSize: 30,
    fontWeight: '600',
    color: R.colors.black,
    alignSelf: 'flex-end',
    marginTop: '10%',
  },
  image2: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
});
