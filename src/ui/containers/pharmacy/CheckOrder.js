import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { AppButton } from "../../components/AppButton";
import R from "../../../res/R";

export default function CheckOrder() {
  return (
    <View style={styles.body}>
      <TextInput
        style={styles.textInput}
        selectionColor={R.colors.primary}
        placeholder="Card#"
      />

      <TextInput
        style={styles.textInput}
        selectionColor={R.colors.primary}
        placeholder="Prescription"
      />
      <AppButton
        title="Check Order"
        buttonStyle={styles.appButtonContainer}
        textStyle={styles.appButtonText}
      ></AppButton>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: R.colors.white,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
  },
  appButtonContainer: {
    width: 200,
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 20,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  textInput: {
    color: "#000",
    height: 50,
    fontSize: 20,
    backgroundColor: "#EEEEEE",
    alignSelf: "stretch",
    borderRadius: 5,
    margin: 5,
  },
});
