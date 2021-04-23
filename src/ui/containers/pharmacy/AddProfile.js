import React, {useState, useContext} from 'react';
import {StyleSheet, TextInput, View, Image, Text} from 'react-native';
import {
  form,
  layout,
  button,
  header,
  textstyle,
} from '../../../res/styles/global';
import {AppButton} from '../../components/AppButton';
import R from '../../../res/R';
import Camera from '../common/camera/Camera';
import defaultProfile from '../../../../assets/images/default.png';
const defaultProfileUri = Image.resolveAssetSource(defaultProfile).uri;
import {db} from '../../../database/config';
import {UserContext} from '../../../utilites/providers/UserProvider';
import User from '../../../models/User';

export default function AddProfile() {
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [picUri, setPicUri] = useState(defaultProfileUri);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phErr, setPhErr] = useState('');
  const [compError, setCompError] = useState('');
  const [locationError, setLocationError] = useState('');

  const [errorFlag, setErrorFlag] = useState('');

  const {userInfo, setUserData} = useContext(UserContext);

  const validatePhone = () => {
    const reg = /^\d+$/;
    if (phoneNumber === '') {
      setPhErr('Phone Number cannot be empty');
      setErrorFlag(true);
    } else if (phoneNumber.length < 11) {
      setPhErr('INVALID Phone Number');
      setErrorFlag(true);
    } else if (reg.test(phoneNumber) === false) {
      setPhErr('Phone format INVALID');
      setErrorFlag(true);
    } else {
      setPhErr('');
      setErrorFlag(false);
    }
  };

  const validateCompany = () => {
    if (company === '') {
      setCompError('Name cannot be empty');
      setErrorFlag(true);
    } else {
      setCompError('');
      setErrorFlag(false);
    }
  };
  const validateLocation = () => {
    if (location === '') {
      setLocationError('Name cannot be empty');
      setErrorFlag(true);
    } else {
      setLocationError('');
      setErrorFlag(false);
    }
  };
  const saveProfile = () => {
    validatePhone();
    validateCompany();
    validateLocation();
    if (errorFlag !== true) {
      db.collection('users')
        .doc(userInfo.uid)
        .update({
          phoneNumber,
          company,
          location,
        })
        .then(
          setUserData(
            new User(
              userInfo.fullName,
              userInfo.email,
              userInfo.password,
              userInfo.role,
              phoneNumber,
              userInfo.uid,
            ),
          ),
        )
        .catch(error => {
          console.log('Error getting documents: ', error);
        });
    }
  };

  return (
    <View style={layout.fullScreen}>
      <View style={header.bk}>
        <Camera id="profile" picUri={picUri} />
      </View>
      <View style={styles.box}>
        <TextInput
          style={form.inputGrey}
          selectionColor={R.colors.primary}
          placeholder={userInfo.fullName}
        />
        <TextInput
          style={form.inputGrey}
          selectionColor={R.colors.primary}
          onChangeText={text => setPhoneNumber(text)}
          placeholder="Phone Number"
        />
        <Text style={textstyle.error}>{phErr}</Text>
        <TextInput
          style={form.inputGrey}
          selectionColor={R.colors.primary}
          onChangeText={text => setCompany(text)}
          placeholder="Company"
        />
        <Text style={textstyle.error}>{compError}</Text>
        <TextInput
          style={form.inputGrey}
          selectionColor={R.colors.primary}
          onChangeText={text => setLocation(text)}
          placeholder="Location"
        />
        <Text style={textstyle.error}>{locationError}</Text>
      </View>

      <AppButton
        title="Add Profile"
        buttonStyle={button.Wrap}
        textStyle={button.Text}
        onPress={() => saveProfile()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: R.colors.primary,
    height: 60,
    width: 160,
    margin: 5,
    borderWidth: 1,
    borderColor: '#00000000',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    borderRadius: 5,
  },
  box: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: -140,
    backgroundColor: R.colors.white,
    elevation: 8,
    borderRadius: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  box1: {
    height: '80%',
    margin: 30,
  },
});
