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
  const userName = 'Joh';
  return (
    <View style={layout.fullScreen}>
      <View style={header.bk}>
        <Image
          style={header.avatar}
          source={require('../../../../assets/images/default.png')}
        />
        <View style={layout.centeredFullScreen}>
          <Text style={header.userName}>{'Welcome, ' + userName + '!'}</Text>
        </View>
      </View>
      <View style={layout.centeredFullScreen}>
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
            onPress={() => navigation.navigate('CheckOrder')}
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
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonContainer: {
    backgroundColor: R.colors.lightGrey,
    height: 60,
    width: 160,
    margin: 5,
    borderWidth: 1,
    borderColor: R.colors.white,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
