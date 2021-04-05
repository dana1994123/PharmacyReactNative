import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import {form, layout, button, textstyle} from '../../../res/styles/global';
import {AppButton} from '../../components/AppButton';
import R from '../../../res/R';
import {firebase} from '../../../database/config';

export default function PatientSearch({navigation}) {
  const [patientName, setPatientName] = useState('');
  const [healthCard, setHealthCardNumber] = useState('');
  const [isFound, setIsFound] = useState(false);
  const [notFound, setNotFound] = useState(false);

  constructor = () => {
    setIsFound(false);
  };

  const search = () => {
    console.log('Search is Called');
    firebase
      .firestore()
      .collection('Customers')
      .where('healthCard', '==', healthCard)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, ' => ', doc.data());
          setIsFound(true);
          setNotFound(false);
          this.forceUpdate();
        });
      })
      .catch(error => {
        console.log('Error getting documents: ', error);
      });
    //call the database
    //setIsFound(true);
    if (isFound !== true) {
      setNotFound(true);
      setIsFound(false);
      this.forceUpdate();
    }
  };
  return (
    <View style={layout.fullScreen}>
      <View style={layout.centeredFullScreen}>
        <View style={styles.box}>
          <Text style={textstyle.h6}>Find Customer</Text>
          <TextInput
            style={form.inputGrey}
            selectionColor={R.colors.primary}
            onChangeText={text => setPatientName(text)}
            placeholder="Patient Name"
          />
          <TextInput
            style={form.inputGrey}
            selectionColor={R.colors.primary}
            onChangeText={text => setHealthCardNumber(text)}
            placeholder="Health Card"
          />
          <AppButton
            title="Search"
            buttonStyle={styles.buttonContainer}
            textStyle={button.Text}
            onPress={() => search()}
          />
        </View>

        {isFound && !notFound ? (
          <AppButton
            title="Enter Order"
            buttonStyle={button.Wrap}
            textStyle={button.Text}
            onPress={() => navigation.navigate('EnterOrder')}
          />
        ) : null}
        {!isFound && notFound ? (
          <AppButton
            title="Add Patient"
            buttonStyle={button.Wrap}
            textStyle={button.Text}
            onPress={() => navigation.navigate('AddCustomer')}
          />
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  optionImg: {
    width: 40,
    height: 50,
    borderRadius: 10,
    position: 'absolute',
    marginTop: 25,
    marginLeft: '70%',
  },
  optionTxt: {
    fontWeight: '600',
    fontSize: 18,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: R.colors.primary,
    height: 40,
    width: 160,
    margin: 5,
    borderWidth: 1,
    borderColor: '#00000000',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  box: {
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: R.colors.white,
    elevation: 8,
    borderRadius: 10,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
  },
  box1: {
    //backgroundColor: R.colors.blue,
    height: '80%',
    margin: 30,
  },
});
