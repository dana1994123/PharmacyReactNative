import React from 'react';
import Home from './Home';
import R from '../../../res/R';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import FillOrderFlow from './FillOrderFlow';

const Tab = createMaterialBottomTabNavigator();

export default function entry() {
  return (
    console.log('In Entry'),
    (
      <Tab.Navigator
        shifting={false}
        activeColor={R.colors.black}
        inactiveColor={R.colors.lightGrey}
        barStyle={{backgroundColor: R.colors.white}}>
        <Tab.Screen
          name="Pharmacy"
          component={Home}
          options={{title: 'Home'}}
        />
        <Tab.Screen
          name="FillOrder"
          component={FillOrderFlow}
          options={{title: 'Fill Order'}}
        />
      </Tab.Navigator>
    )
  );
}
