<<<<<<< HEAD
import * as firebase from 'firebase';

=======
// import firestore from "@react-native-firebase/firestore";

// const usersCollection = firestore().collection("Users");
import firebase from '@react-native-firebase/app';
>>>>>>> 61511c087acff7ff226a0e93be84ec54c2624220
const firebaseConfig = {
  apiKey: 'AIzaSyA7iSdAJjwcJErmhuzSbDCZqkKQZI2fwfQ',
  authDomain: 'pharmacy-app-b935b.firebaseapp.com',
  databaseURL: 'https://pharmacy-app-b935b-default-rtdb.firebaseio.com',
  projectId: 'pharmacy-app-b935b',
  storageBucket: 'pharmacy-app-b935b.appspot.com',
  messagingSenderId: '970418650183',
  appId: '1:970418650183:web:9d71a17c17fa7c159dc562',
};

<<<<<<< HEAD
const app = firebase.initializeApp(firebaseConfig);
export const db = app.firebase;
=======
//const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.Firebase;
>>>>>>> 61511c087acff7ff226a0e93be84ec54c2624220

// //storing a document named "mario" inside of a collection named "characters" in Firestore:
// dbh.collection("characters").doc("mario").set({
//   employment: "plumber",
//   outfitColor: "red",
//   specialAttack: "fireball",
// });
// export { Firebase };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
