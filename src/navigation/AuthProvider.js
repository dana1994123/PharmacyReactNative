import React, {useState, createContext} from 'react';
import {userConverter} from '../utilites/firestoreConverters';
import firebase from '@react-native-firebase/app';
import {db} from '../database/config';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState();

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },

        register: async (newUser, password) => {
          try {
            await firebase
              .auth()
              .createUserWithEmailAndPassword(newUser.email, password)
              .then(response => {
                const uid = response.user.uid;
                db.collection('users')
                  .doc(uid)
                  .set(userConverter.toFirestore(newUser));
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
