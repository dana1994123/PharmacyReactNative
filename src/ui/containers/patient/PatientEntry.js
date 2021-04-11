import React from 'react';
import Profile from './Profile';
import PatientHome from './Home';
import Support from './Support';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import R from '../../../res/R.js';
import News from '../common/news/News';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();

export default function PatientEntry() {
  return (
    <Tab.Navigator
      shifting={false}
      activeColor={R.colors.orange}
      inactiveColor={R.colors.grey}
      barStyle={{backgroundColor: R.colors.white}}>
      <Tab.Screen
        name="Patient3"
        options={{
          title: 'Home',
          tabBarIcon: ({focused, color, size}) => {
            return <Ionicons name={'home'} size={20} color={color} />;
          },
        }}>
        {() => <PatientHome name="PatientHome" />}
      </Tab.Screen>
      <Tab.Screen
        name="Patient1"
        options={{
          title: 'Profile',
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Ionicons name={'person-circle-sharp'} size={20} color={color} />
            );
          },
        }}>
        {() => <Profile name="Profile" />}
      </Tab.Screen>
      <Tab.Screen
        name="Patient2"
        options={{
          title: 'News',
          tabBarIcon: ({focused, color, size}) => {
            return <Ionicons name={'newspaper'} size={20} color={color} />;
          },
        }}>
        {() => <News name="News" />}
      </Tab.Screen>

      <Tab.Screen
        name="Patient4"
        options={{
          title: 'Support',
          tabBarIcon: ({focused, color, size}) => {
            return <Ionicons name={'call'} size={20} color={color} />;
          },
        }}>
        {() => <Support name="SupportPage" />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
