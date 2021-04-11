import React from 'react';
import Home from './Home';
import R from '../../../res/R';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import FillOrderFlow from './FillOrderFlow';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();

export default function entry() {
  return (
    <Tab.Navigator
      shifting={false}
      activeColor={R.colors.white}
      inactiveColor={R.colors.blueGrey}
      barStyle={{backgroundColor: R.colors.primary}}>
      <Tab.Screen
        name="Pharmacy"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({focused, color, size}) => {
            let iconName = 'home';
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={20} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="FillOrder"
        component={FillOrderFlow}
        options={{
          title: 'Fill Order',
          tabBarIcon: ({focused, color, size}) => {
            let iconName = 'clipboard';
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={20} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
