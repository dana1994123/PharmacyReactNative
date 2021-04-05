import React from 'react';

import PharmEntry from '../ui/containers/pharmacy/Entry';
import PatientEntry from '../ui/containers/patient/PatientEntry';

export default function AuthStack() {
  const pharm = true;
  if (pharm) {
    return <PharmEntry />;
  } else {
    return <PatientEntry />;
  }
}
