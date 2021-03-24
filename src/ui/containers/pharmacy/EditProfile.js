import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { form, layout, button } from "../../../res/styles/global";
import { AppButton } from "../../components/AppButton";
import R from "../../../res/R";

export default function EditProfile() {
  return (
    <View style={layout.body}>
      <TextInput
        style={form.textInput}
        selectionColor={R.colors.primary}
        onChangeText={(text) => setMedName(text)}
        placeholder="Name"
      />
      <TextInput
        style={form.textInput}
        selectionColor={R.colors.primary}
        onChangeText={(text) => setQuantity(text)}
        placeholder="Username"
      />
      <TextInput
        style={form.textInput}
        selectionColor={R.colors.primary}
        placeholder="Company"
      />
      <TextInput
        style={form.textInput}
        selectionColor={R.colors.primary}
        placeholder="Location"
      />
      <AppButton
        title="Update Profile"
        buttonStyle={button.appButtonContainer}
        textStyle={button.appButtonText}
      ></AppButton>
    </View>
  );
}
