import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {form, layout, button} from '../../../res/styles/global';
import {AppButton} from '../../components/AppButton';
import R from '../../../res/R';

export default function PatientSearch({navigation}) {
  const [patientName, setPatientName] = useState('');
  const [healthCard, setHealthCardNumber] = useState('');
  const [isFound, setIsFound] = useState(false);

  const search = () => {
    //call the database
    setIsFound(true);
  };
  return (
    <View style={layout.body}>
      <TextInput
        style={form.textInput}
        selectionColor={R.colors.primary}
        onChangeText={text => setPatientName(text)}
        placeholder="Patient Name"
      />
      <TextInput
        style={form.textInput}
        selectionColor={R.colors.primary}
        onChangeText={text => setHealthCardNumber(text)}
        placeholder="Health Card"
      />
      <AppButton
        title="Search"
        buttonStyle={button.appButtonContainer}
        textStyle={button.appButtonText}
        onPress={this.search}
      />
      {isFound ? (
        <AppButton
          title="Enter Order"
          buttonStyle={button.appButtonContainer}
          textStyle={button.appButtonText}
          onPress={navigation.navigate('EnterOrder')}
        />
      ) : (
        <AppButton
          title="Add Patient"
          buttonStyle={button.appButtonContainer}
          textStyle={button.appButtonText}
          //onPress={navigation.navigate("AddRecord")}
        />
      )}
    </View>
  );
}
