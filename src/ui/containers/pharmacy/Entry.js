import React, {useContext} from 'react';
import Home from './Home';
import R from '../../../res/R';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import FillOrderFlow from './FillOrderFlow';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddProfile from './AddProfile';
import {UserContext} from '../../../utilites/providers/UserProvider';

const Tab = createMaterialBottomTabNavigator();

export default function Entry({user}) {
  if (user.phoneNumber === null) {
    return <AddProfile />;
  } else {
    return (
      <Tab.Navigator
        shifting={false}
        activeColor={R.colors.white}
        inactiveColor={R.colors.blue}
        labeled={false}
        barStyle={{backgroundColor: R.colors.primary}}>
        <Tab.Screen
          name="Pharmacy"
          component={Home}
          options={{
            title: 'Home',
            tabBarIcon: ({color}) => {
              return <Ionicons name={'home'} size={24} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="FillOrder"
          component={FillOrderFlow}
          options={{
            title: 'Fill Order',
            tabBarIcon: ({color}) => {
              return <Ionicons name={'clipboard'} size={24} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    );
  }
}
