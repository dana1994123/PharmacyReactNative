import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, View, TouchableOpacity, Image, Text} from 'react-native';
import {AppButton} from '../../components/AppButton';
import {layout, header} from '../../../res/styles/global';
import R from '../../../res/R';
import EditProfile from './EditProfile';
import Settings from '../common/Settings';

const Stack = createStackNavigator();

export default function Home() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: R.colors.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name={'Home'} component={HomeScreen} />
      <Stack.Screen name={'EditProfile'} component={EditProfile} />
      <Stack.Screen name={'Settings'} component={Settings} />
    </Stack.Navigator>
  );
}

const HomeScreen = ({navigation}) => {
  const userName = 'John';
  return (
    <View style={layout.fullScreen}>
      <View style={header.bk}>
        <View style={styles.box1}>
          <Image
            style={header.avatar}
            source={require('../../../../assets/images/default.png')}
          />
          <Text style={header.userName}>{'Welcome, ' + userName + '!'}</Text>
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.row}>
          <AppButton
            title="Fill Order"
            buttonStyle={styles.buttonContainer}
            textStyle={styles.optionTxt}
            onPress={() => navigation.navigate('EnterOrder')}
          />
          <AppButton
            title="Add Patient"
            buttonStyle={styles.buttonContainer}
            textStyle={styles.optionTxt}
            onPress={() => navigation.navigate('AddCustomer')}
          />
        </View>
        <View style={styles.row}>
          <AppButton
            title="Edit Profile"
            buttonStyle={styles.buttonContainer}
            textStyle={styles.optionTxt}
            onPress={() => navigation.navigate('EditProfile')}
          />
          <AppButton
            title="Settings"
            buttonStyle={styles.buttonContainer}
            textStyle={styles.optionTxt}
            onPress={() => navigation.navigate('Settings')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  optionImg: {
    width: 40,
    height: 50,
    borderRadius: 10,
    position: 'absolute',
    marginTop: 25,
    marginLeft: '70%',
  },
  optionTxt: {
    fontWeight: '600',
    fontSize: 18,
    color: R.colors.white,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: R.colors.primary,
    height: 60,
    width: 160,
    margin: 5,
    borderWidth: 1,
    borderColor: '#00000000',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    borderRadius: 5,
  },
  box: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: -90,
    backgroundColor: R.colors.white,
    elevation: 8,
    borderRadius: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  box1: {
    //backgroundColor: R.colors.blue,
    height: '80%',
    margin: 30,
  },
});
