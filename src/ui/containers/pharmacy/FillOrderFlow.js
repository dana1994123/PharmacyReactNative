import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PatientSearch from './PatientSearch';
import EnterOrder from './EnterOrder';
import R from '../../../res/R';

const Stack = createStackNavigator();

export default function FillOrderFlow() {
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
      <Stack.Screen
        name={'SearchPatient'}
        component={PatientSearch}
        options={{title: 'Search Patient'}}
      />
      <Stack.Screen name={'EnterOrder'} component={EnterOrder} />
      {/* <Stack.Screen name={"AddPatient"} component={}></Stack.Screen> */}
    </Stack.Navigator>
  );
}
