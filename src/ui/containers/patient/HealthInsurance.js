import React from 'react';
// import FAQuestion from "react-faq-component";

import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {AppButton} from '../../components/AppButton';
import db from '../../../database/config';
import Patient from '../../../models/patient';
import {TouchableOpacity} from 'react-native';

export default function HealthInsurance() {
  

  const p = new Patient();
  const COLLECTION_ONE = 'Patient';

  addGuest = () => {
    fdb
      .collection(COLLECTION_ONE)
      .document(p.email.toString())
      .set(p).addOnSuccessListener = () => {
      console.Log(TAG, 'Guest DOC succseefully added');
    };
  };
  return (
    <View>
      <Text>Health insurance</Text>
      <TouchableOpacity onPress={() => addGuest()}>
        <Text>click hi</Text>
      </TouchableOpacity>
    </View>
  );
}
