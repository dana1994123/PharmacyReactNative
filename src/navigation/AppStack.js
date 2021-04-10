import React from 'react';

import PharmEntry from '../ui/containers/pharmacy/Entry';
import PatientEntry from '../ui/containers/patient/PatientEntry';
import MediTest from '../ui/containers/patient/mediTest/MediTest';
import LoginScreen from '../ui/containers/common/Login';
import SignUp from '../ui/containers/common/SignUp';

export default function AuthStack() {
  const pharm = false
  if (pharm) {
    return <PharmEntry />;
  } else {
    return <PatientEntry />;
  }
}
