import React, {useState, createContext} from 'react';
import auth from '@react-native-firebase/auth';
export const AuthContext = createContext();
import {firebase} from '../database/config';
import {db} from '../database/config';
import User from '../models/User';

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  //create a user obj
  const u = new User();

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

        register: async u => {
          try {
            await firebase
              .auth()
              .createUserWithEmailAndPassword(u.email, u.pass)
              .then(response => {
                const uid = response.user.uid;
                const usersRef = firebase.firestore().collection('users');
                console.log('usersRef: ' + usersRef);
                usersRef.doc(uid).set({
                  u:u,
                  // fullName: fname,
                  // // lname: lname,
                  // email: email,
                  // role: role,
                  // password: password,
                  // //createdAt: firebase.Firebase.Timestamp.fromDate(new Date()),
                  // userImg: null,
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
