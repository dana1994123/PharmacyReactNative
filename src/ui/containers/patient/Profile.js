import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import R from '../../../res/R';
import UpdateProfile from './UpdateProfile';
import Ppharmacy from './Ppharmacy';
import AddPrescription from './AddPrescription';

import {IconButton} from 'react-native-paper';
import {AuthContext} from '../../../navigation/AuthProvider';

import {UserContext} from '../../../utilites/providers/UserProvider';
import {Clock} from 'react-native-reanimated';

const Stack = createStackNavigator();

export default function Pprofile() {
  // const {userInfo} = useContext(UserContext);
  // const [pat, setPat] = useState(new Patient());
  // const [count, setCount] = useState();

  // //get it from the firebase
  // useEffect(() => {
  //   db.collection('patients')
  //     .where('user.email', '==', userInfo.email)
  //     .get()
  //     .then(doc => {
  //       if (doc.empty) {
  //         console.log('we will add it now');
  //         db.collection('patients').add(pat);
  //       } else {
  //         setPat(doc.data());
  //         console.log('doc here');
  //       }
  //     })
  //     .catch(d => {
  //       console.log('not');
  //     });
  // }, [pat, userInfo.email, count]);

  return (
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
      <Stack.Screen name={'Ppharmacy'} component={Ppharmacy} />
    </Stack.Navigator>
  );
}
const Profile = ({navigation}) => {
  //get the patient information from the database and render it here
  const {userInfo} = useContext(UserContext);
  const {logout} = useContext(AuthContext);
  const updateProfile = () => {
    //navigate to update profile page
    navigation.navigate('UpdateProfile');
  };
  return (
    <ImageBackground
      source={require('../../../../assets/images/bg.jpg')}
      style={styles.image2}>
      <View style={styles.container}>
        {/* user picture and name */}
        <View style={styles.col1}>
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
          <Text style={styles.userName}>{userInfo.fullName}</Text>
          <Text style={styles.note}>{userInfo.email}</Text>
        </View>

        <View style={styles.body}>
          <View style={styles.col}>
            <TouchableOpacity
              onPress={() => navigation.navigate('prescription')}
              style={styles.buttonContainer}>
              <Image
                style={styles.optionImg}
                source={require('../../../../assets/images/61122.png')}
              />
              <Text style={styles.optionTxt}>Request{'\n'}Prescription </Text>
            </TouchableOpacity>
            {/* pharmacy */}
            <TouchableOpacity
              onPress={() => navigation.navigate('Pharmacy')}
              style={styles.buttonContainer}>
              <Image
                style={styles.optionImg}
                source={require('../../../../assets/images/pha.png')}
              />
              <Text style={styles.optionTxt}>My {'\n'}Pharmacy </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => logout()}
              style={styles.buttonContainer}>
              <Text style={styles.optionTxt}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
  body: {
    justifyContent: 'center',
  },
  avatar: {
    width: 100,
    height: 97,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: R.colors.orange,
    alignSelf: 'flex-start',
    position: 'absolute',
    marginTop: '12%',
    marginLeft: '17%',
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
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    marginTop: '15%',
  },
  userName: {
    fontSize: 25,
    fontWeight: '600',
    color: R.colors.black,
    alignSelf: 'center',
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
    marginTop: '35%',
  },
  container: {
    height: '100%',
    flex: 1,
    flexDirection: 'row',
  },
  col1: {
    width: '50%',
  },
  note: {
    fontSize: 13,
    fontWeight: '600',
    color: R.colors.black,
    alignSelf: 'center',
  },
});
