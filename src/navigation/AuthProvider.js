import React, {useState, createContext} from 'react';
import auth from '@react-native-firebase/auth';
export const AuthContext = createContext();
import {firebase} from '../database/config';

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          console.log('login IS called');
          try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },

        register: async newUser => {
          try {
            await firebase
              .auth()
              .createUserWithEmailAndPassword(newUser.email, newUser.pass)
              .then(response => {
                const uid = response.user.uid;
                const usersRef = firebase.firestore().collection('users');
                console.log('usersRef: ' + usersRef);
                usersRef.doc(uid).set({
                  u: newUser,
                });
              });
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await firebase.auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
