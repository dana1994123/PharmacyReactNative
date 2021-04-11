import React, {useEffect, useContext, useState} from 'react';
import {firebase} from '../database/config';
import PharmEntry from '../ui/containers/pharmacy/Entry';
import PatientEntry from '../ui/containers/patient/PatientEntry';
import {UserContext} from '../utilites/providers/UserProvider';

export default function AuthStack({user}) {
  // const pharm = true;
  const {userInfo, setUserData} = useContext(UserContext);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .get()
      .then(doc => {
        if (doc.exists) {
          setUserData(doc.data());
          setInitializing(false);
        } else {
          // doc.data() will be undefined in this case
          console.log('No such document!');
        }
      })
      .catch(error => {
        console.log('Error getting document:', error);
      });
  });

  if (initializing) {
    return null;
  }

  if (userInfo.role) {
    return <PharmEntry />;
  } else {
    return <PatientEntry />;
  }
}
