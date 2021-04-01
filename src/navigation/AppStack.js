import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PharmEntry from '../ui/containers/pharmacy/Entry';
import PatientEntry from '../ui/containers/patient/PatientEntry';

export default function AuthStack() {
  const user = true;
  if (user) {
    return <PharmEntry />;
  } else {
    return <PatientEntry />;
  }
}
