import React, {useContext, useState, useEffect, useCallback} from 'react';
import {NavigationContainer} from '@react-navigation/native';
//import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';
import auth from '@react-native-firebase/auth';
import AppStack from './AppStack';
import {firebase} from '../database/config';
import AuthStack from './AuthStack';
import {UserProvider} from '../utilites/providers/UserProvider';
// export const app = firebase.initializeApp(firebaseConfig);

const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = useCallback(
    u => {
      setUser(u);
      if (initializing) {
        setInitializing(false);
      }
    },
    [initializing, setUser],
  );

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [onAuthStateChanged]);

  if (initializing) {
    return null;
  }

  return (
    console.log('Routes' + user),
    (
      <NavigationContainer>
        {user !== null ? (
          <UserProvider>
            <AppStack user={user} />
          </UserProvider>
        ) : (
          <AuthStack />
        )}
      </NavigationContainer>
    )
  );
};

export default Routes;
