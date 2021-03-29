import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, View} from 'react-native';
import {AppButton} from '../../components/AppButton';
import {layout} from '../../../res/styles/global';
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
  return (
    <View style={layout.body}>
      <View style={styles.row}>
        <AppButton
          title="Add Order"
          buttonStyle={styles.buttonContainer}
          textStyle={styles.optionTxt}
          active={R.colors.blueGrey}
          inactive={R.colors.lightGrey}
          nPress={() => navigation.navigate('EnterOrder')}
        />
        <AppButton
          title="Check Order"
          buttonStyle={styles.buttonContainer}
          textStyle={styles.optionTxt}
          active={R.colors.blueGrey}
          inactive={R.colors.lightGrey}
          nPress={() => navigation.navigate('CheckOrder')}
        />
      </View>
      <View style={styles.row}>
        <AppButton
          title="Edit Profile"
          buttonStyle={styles.buttonContainer}
          textStyle={styles.optionTxt}
          active={R.colors.blueGrey}
          inactive={R.colors.lightGrey}
          onPress={() => navigation.navigate('EditProfile')}
        />
        <AppButton
          title="Settings"
          buttonStyle={styles.buttonContainer}
          textStyle={styles.optionTxt}
          active={R.colors.blueGrey}
          inactive={R.colors.lightGrey}
          onPress={() => navigation.navigate('Settings')}
        />
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
