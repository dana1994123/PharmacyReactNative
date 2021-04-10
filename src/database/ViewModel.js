import React from 'react';
import {firebase} from '../database/config';


//Storing Data and Receiving Updates
export const saveDrugReminder = drugReminderObj => {
 firebase
    .firestore(drugReminderObj)
    .ref('users/' + userId)
    .set({});
};

// //update
//   setupHighscoreListener(userId) {
//     firebase.database().ref('users/' + userId).on('value', (snapshot) => {
//       const highscore = snapshot.val().highscore;
//       console.log("New high score: " + highscore);
//     });
//   }

// const search = () => {
//     setIsFound(false);
//     setNotFound(true);
//     console.log('Search is Called');
//     firebase
//       .firestore()
//       .collection('Customers')
//       .where('healthCard', '==', healthCard)
//       .get()
//       .then(querySnapshot => {
//         querySnapshot.forEach(doc => {
//           // doc.data() is never undefined for query doc snapshots
//           console.log(doc.id, ' => ', doc.data());
//           const data = doc.data();
//           setIsFound(true);
//           setNotFound(false);
//           setCust({
//             name: data.custName,
//             healthcard: data.healthCard,
//             date: data.date,
//             uid: doc.id,
//           });
//           console.log('Data' + data.custName);
//           console.log('CUST' + cust.name);
//         });
//       })
//       .catch(error => {
//         console.log('Error getting documents: ', error);
//       });
//     //call the database
//     //setIsFound(true);
//     if (isFound !== true) {
//       setNotFound(true);
//       setIsFound(false);
//     }
//   };
