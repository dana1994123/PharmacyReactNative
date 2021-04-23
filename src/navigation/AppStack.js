import React, {useEffect, useContext, useState} from 'react';
import {db} from '../database/config';
import PharmEntry from '../ui/containers/pharmacy/Entry';
import PatientEntry from '../ui/containers/patient/PatientEntry';
import {UserContext} from '../utilites/providers/UserProvider';
import {userConverter} from '../utilites/firestoreConverters';

export default function AuthStack({user}) {
  // const pharm = true;
  const {userInfo, setUserData} = useContext(UserContext);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    db.collection('users')
      .doc(user.uid)
      .get()
      .then(doc => {
        if (doc.exists) {
          setUserData(userConverter.fromFirestore(user.uid, doc.data()));
          setInitializing(false);
        } else {
          // doc.data() will be undefined in this case
          //console.log(userInfo);
          console.log('App Stack: No such document!');
        }
      })
      .catch(error => {
        console.log('Error getting document:', error);
      });
  });

  if (initializing) {
    return null;
  }

  if (userInfo.role !== 'patient') {
    return <PharmEntry user={userInfo} />;
  } else {
    return <PatientEntry />;
  }
}
