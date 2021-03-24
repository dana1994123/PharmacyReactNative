import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { AppButton } from "../../components/AppButton";
import firestore from "@react-native-firebase/firestore";
import { TouchableOpacity } from "react-native";
import Patient from "../../../models/patient";
import styles from "../common/commonstyle/styles";

export default function AddPrescription() {
  const p = new Patient();

  return (
    <View>
      <Text>ccccc</Text>
    </View>
  );
}
