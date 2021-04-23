import React, {useContext, useEffect, useState} from 'react';
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
import UpdateProfile from './UpdateProfile';
import Ppharmacy from './Ppharmacy';
import AddPrescription from './AddPrescription';
import Clock from './drug_reminder/Clock';
import FamilyDr from './PresHistory';
import HealthInsurance from './HealthInsurance';
import {IconButton} from 'react-native-paper';
import {AuthContext} from '../../../navigation/AuthProvider';
import {layout} from '../../../res/styles/global';
import {Pressable} from 'react-native';
import PreHistory from './PresHistory';
import {PatientContext} from '../../../utilites/providers/PatientProvider';
import {UserContext} from '../../../utilites/providers/UserProvider';
import {db} from '../../../database/config';

const Stack = createStackNavigator();

export default function Pprofile() {
  const {userInfo} = useContext(UserContext);
  const [pat, setPat] = useState(new Patient());
  const [count, setCount] = useState();
  //get it from the firebase
  useEffect(() => {
    db.collection('patients')
      .where('user.email', '==', userInfo.email)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          setPat(doc.data());
          console.log(doc.data());
        });
      })
      .catch(console.log('there is an error occur'));
  }, [count]);

  return (
    <PatientContext.Provider value={pat}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: R.colors.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30,
          },
        }}>
        <Stack.Screen name={'Profile'} component={Profile} />
        <Stack.Screen name={'Drug Reminder'} component={Clock} />
        <Stack.Screen name={'prescription'} component={AddPrescription} />
        <Stack.Screen name={'Pharmacy'} component={Ppharmacy} />
        <Stack.Screen name={'PreHistory'} component={PreHistory} />
        <Stack.Screen name={'UpdateProfile'} component={UpdateProfile} />
      </Stack.Navigator>
    </PatientContext.Provider>
  );
}
const Profile = ({navigation}) => {
  //get the patient information from the database and render it here
  const {logout} = useContext(AuthContext);
  const pat = useContext(PatientContext);
  console.log(pat.user.email);
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
          <View style={layout.row}>
            <Image
              style={styles.avatar}
              source={require('../../../../assets/images/default.png')}
            />
            <IconButton
              icon="pencil"
              color={R.colors.secondary}
              size={40}
              style={styles.icon}
              onPress={() => updateProfile()}
            />
            <View>
              <Text style={styles.userName}></Text>
              <Text style={styles.city}></Text>
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.col}>
              <TouchableOpacity
                onPress={() => navigation.navigate('PreHistory')}
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
              {/* Prescription history */}
              {/* <TouchableOpacity
                  onPress={() => navigation.navigate('PresHistory')}
                  style={styles.buttonContainer}>
                  <Image
                    style={styles.optionImg}
                    source={require('../../../../assets/images/pre.png')}
                  />
                  <Text style={styles.optionTxt}>
                    Prescription {'\n'} History
                  </Text>
                </TouchableOpacity> */}

              {/* health insurance */}
              {/* <TouchableOpacity
                  onPress={() => navigation.navigate('HealthInsurance')}
                  style={styles.buttonContainer}>
                  <Image
                    style={styles.optionImg}
                    source={require('../../../../assets/images/health.png')}
                  />
                  <Text style={styles.optionTxt}>Health {'\n'} Insurance</Text>
                </TouchableOpacity> */}
              <TouchableOpacity
                onPress={() => logout()}
                style={styles.buttonContainer}>
                <Text style={styles.optionTxt}>Logout</Text>
              </TouchableOpacity>
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
    marginTop: '10%',
    marginLeft: '70%',
  },
  optionTxt: {
    marginLeft: '5%',
    fontWeight: '600',
    fontSize: 18,
    marginTop: '10%',
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
    fontSize: 30,
    fontWeight: '600',
    color: R.colors.black,
    alignSelf: 'center',
    marginTop: '30%',
    marginLeft: '40%',
  },
  city: {
    marginTop: '7%',
    fontSize: 20,
    alignSelf: 'center',
    marginLeft: '40%',
  },
  image2: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  icon: {
    marginTop: '25%',
  },
  body: {
    marginTop: '20%',
  },
});
