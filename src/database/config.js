import firebase from '@react-native-firebase/app';
const firebaseConfig = {
  apiKey: 'AIzaSyA7iSdAJjwcJErmhuzSbDCZqkKQZI2fwfQ',
  authDomain: 'pharmacy-app-b935b.firebaseapp.com',
  databaseURL: 'https://pharmacy-app-b935b-default-rtdb.firebaseio.com',
  projectId: 'pharmacy-app-b935b',
  storageBucket: 'pharmacy-app-b935b.appspot.com',
  messagingSenderId: '970418650183',
  appId: '1:970418650183:web:9d71a17c17fa7c159dc562',
};

//const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

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
