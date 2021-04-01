import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Profile from './Profile';
import Home from '../pharmacy/Home';
import LogIn from '../common/Login';
import PatientHome from './Home';
import AddPrescription from './AddPrescription';
import Support from './Support';
import FAQuestion from './FAQuestion';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Clock from './drug_reminder/Clock';
import R from '../../../res/R.js';
import News from '../common/news/News';

const Tab = createMaterialBottomTabNavigator();

export default function PatientEntry() {
  return (
    <Tab.Navigator
      shifting={false}
      activeColor={R.colors.white}
      inactiveColor={R.colors.lightGrey}
      barStyle={{backgroundColor: R.colors.primary}}>
      <Tab.Screen name="Patient3" options={{title: 'Home'}}>
        {() => <PatientHome name="PatientHome" />}
      </Tab.Screen>
      <Tab.Screen name="Patient1" options={{title: 'Profile'}}>
        {() => <Profile name="Profile" />}
      </Tab.Screen>
      <Tab.Screen name="Patient2" options={{title: 'News'}}>
        {() => <News name="News" />}
      </Tab.Screen>

      <Tab.Screen name="Patient4" options={{title: 'Support'}}>
        {() => <Support name="SupportPage" />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
