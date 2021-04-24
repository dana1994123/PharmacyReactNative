import React, {useContext, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {IconButton} from 'react-native-paper';
import R from '../../../res/R';
import AddPrescription from './AddPrescription';
import News from '../common/news/News';
import Clock from './drug_reminder/Clock';
import Patient from '../../../models/patient';
import MediTest from './mediTest/MediTest';
import {UserContext} from '../../../utilites/providers/UserProvider';
import Support from './Support';
import UpdateProfile from './UpdateProfile';
import {db} from '../../../database/config';
import Pprofile from './Profile';
import Ppharmacy from './Ppharmacy';
import {
  PatientContext,
  PatientProvider,
} from '../../../utilites/providers/PatientProvider';
const Stack = createStackNavigator();

export default function Home() {
  //create patient context

  //console.log(patientInfo.user.email);
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
      <Stack.Screen name={'PatientHome'} component={PatientHome} />
      <Stack.Screen name={'Clock'} component={Clock} />
      <Stack.Screen name={'prescription'} component={AddPrescription} />
      <Stack.Screen name={'MediTest'} component={MediTest} />
      <Stack.Screen name={'News'} component={News} />
      <Stack.Screen name={'Support'} component={Support} />
      <Stack.Screen name={'UpdateProfile'} component={UpdateProfile} />
      <Stack.Screen name={'Profile'} component={Pprofile} />
      <Stack.Screen name={'Pharmacy'} component={Ppharmacy} />
    </Stack.Navigator>
  );
}
const PatientHome = ({navigation}) => {
  const p = new Patient();
  const [count, setCount] = useState(0);
  const {userInfo} = useContext(UserContext);
  p.email = userInfo.email;
  // useEffect(() => {
  //   db.collection('patients')
  //     .where('user.email', '==', userInfo.email)
  //     .get()
  //     .then(doc => {
  //       if (doc.empty) {
  //         console.log('we will add it now');
  //         p.user = userInfo;
  //         db.collection('patients')
  //           .add(p)
  //           .then(doc => {
  //             console.log('we will set it to the patient context');
  //             setPatientInfo(doc.data());
  //           });
  //       } else {
  //         setPatientData(p);
  //         console.log('doc here');
  //         setPatientInfo(doc.data());
  //       }
  //     })
  //     .catch(d => {
  //       console.log('not');
  //     });
  // }, [p, count, userInfo]);
  return (
    <View>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.wheader}>
            <View style={styles.row}>
              <View style={styles.col}>
                <Text style={styles.txtHeader}>
                  {' '}
                  {'Hello ' + userInfo.fullName + '!'}
                  {'\n '}
                </Text>
                <Text style={styles.subText}>How are you feeling today?</Text>
              </View>

              <Image
                style={styles.phamImg}
                source={require('../../../../assets/images/pham.jpg')}
              />
            </View>
          </View>
        </View>
        <View style={styles.boxCon}>
          <View style={styles.col}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Clock', {p})}
              style={styles.box2}>
              <View style={styles.row}>
                <View>
                  <Text style={styles.h2}>Drug Reminder</Text>
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
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('prescription', {p})}
              style={styles.box}>
              <View style={styles.row}>
                <Text style={styles.h6}>Request{'\n'}Prescription</Text>
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
              onPress={() => navigation.navigate('MediTest', {p})}
              style={styles.box}>
              <View style={styles.row}>
                <Text style={styles.h6}>Get Diagnosis</Text>
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
    marginTop: '10%',
    fontSize: 28,
    alignSelf: 'center',
    color: R.colors.orange,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  col: {
    flex: 0.6,
    flexDirection: 'column',
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
    flex: 1,
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
    height: '30%',
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
  box2: {
    alignSelf: 'center',
    height: '30%',
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
  subText: {
    fontSize: 20,
    alignSelf: 'center',
    color: R.colors.orange,
    textAlign: 'center',
    marginTop: '-60%',
  },
});
