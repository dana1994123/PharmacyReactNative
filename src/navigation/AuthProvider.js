import React, {useState, createContext} from 'react';

export const AuthContext = createContext();
import {firebase} from '../database/config';
import {db} from '../database/config';

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
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
        register: async (fname, pharmacist, email, password) => {
          try {
            await firebase
              .auth()
              .createUserWithEmailAndPassword(email, password)
              .then(response => {
                const uid = response.user.uid;
                const usersRef = firebase.firestore().collection('users');
                console.log('usersRef: ' + usersRef);
                usersRef.doc(uid).set({
                  fname: fname,
                  // lname: lname,
                  email: email,
                  pharmacist: pharmacist,
                  //createdAt: firebase.Firebase.Timestamp.fromDate(new Date()),
                  userImg: null,
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
