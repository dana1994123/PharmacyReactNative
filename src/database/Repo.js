import firestore from '@react-native-firebase/firestore';

const usersCollection = firestore().collection('Users');

// Get user document with an ID of ABC
const userDocument = firestore()
  .collection('Users')
  .doc('ABC');