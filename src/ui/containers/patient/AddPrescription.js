import React, {useState, useContext} from 'react';
import {StyleSheet, Modal, Text, View, TextInput, Switch} from 'react-native';
import {AppButton} from '../../components/AppButton';
import R from '../../../res/R';
import DatePicker from 'react-native-modern-datepicker';
import {form, layout, button, textstyle} from '../../../res/styles/global';
import {firebase} from '../../../database/config';
import {IconButton} from 'react-native-paper';
import Prescription from '../../../models/Prescription';
import {UserContext} from '../../../utilites/providers/UserProvider';

export default function AddPrescription() {
  const [refill, setRefill] = useState('');
  const [healthInsNum, setHealthInsNum] = useState('');

  const {userInfo} = useContext(UserContext);
  const prescription = new Prescription();
  prescription.user = userInfo;

  const addPrescription = () => {
    //check if the user has filled the pharmacy information
    //check if the user choose file
    //check the health insuarnce number 
  };
  const setToggle = () => {
    setRefill(!refill);
  };
  const uploadFile = () => {
    console.log('upload file ');
    //create a file picker and save the file in the firebase
  };

  return (
    <View style={layout.centeredFullScreen}>
      <View style={styles.box}>
        <Text style={textstyle.h6}>Enter Prescription</Text>
        <TextInput
          style={form.inputGrey}
          selectionColor={R.colors.primary}
          onChangeText={text => setHealthInsNum(text)}
          placeholder="Health Card Number"
        />

        <View style={form.inputGrey}>
          <View style={layout.row}>
            <Text style={styles.Text}>Refillable</Text>
            <Switch
              trackColor={{false: R.colors.Grey, true: R.colors.secondary}}
              thumbColor={refill ? R.colors.white : R.colors.lightGrey}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setToggle()}
              value={refill}
              style={{marginTop: '2.5%'}}
            />
          </View>
        </View>
        <View style={form.inputGrey}>
          <View style={layout.row}>
            <Text>Upload your Prescription</Text>
            <IconButton
              icon="upload"
              color={R.colors.secondary}
              size={30}
              style={styles.icon}
              onPress={() => uploadFile()}
            />
          </View>
        </View>
      </View>

      <AppButton
        title="Submit"
        buttonStyle={button.Wrap}
        textStyle={button.Text}
        onPress={() => addPrescription()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Text: {
    color: R.colors.Grey,
    fontSize: 15,
    marginRight: '5%',
    marginTop: '5%',
  },
  box: {
    marginLeft: 10,
    marginRight: 10,
    padding: 20,
    backgroundColor: R.colors.white,
    elevation: 8,
    borderRadius: 10,
    height: '50%',
  },
});
