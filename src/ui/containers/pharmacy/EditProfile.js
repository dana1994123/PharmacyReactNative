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

export default function EditProfile() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [picUri, setPicUri] = useState(defaultProfileUri);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phErr, setPhErr] = useState('');
  const [errorFlag, setErrorFlag] = useState('');

  const {userInfo} = useContext(UserContext);

  const validatePhone = () => {
    const reg = /^\d+$/;
    if (phoneNumber.length < 11) {
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

  const saveProfile = () => {
    validatePhone();
    if (errorFlag !== true) {
      db.collection('users')
        .doc(userInfo.uid)
        .set({
          name,
          phoneNumber,
          company,
          location,
        })
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
          onChangeText={text => setName(text)}
          placeholder="Name"
        />
        <TextInput
          style={form.inputGrey}
          selectionColor={R.colors.primary}
          onChangeText={text => setPhoneNumber(text)}
          placeholder="Phone Number"
        />
        <Text style={textstyle.error2}>{phErr}</Text>
        <TextInput
          style={form.inputGrey}
          selectionColor={R.colors.primary}
          onChangeText={text => setCompany(text)}
          placeholder="Company"
        />
        <TextInput
          style={form.inputGrey}
          selectionColor={R.colors.primary}
          onChangeText={text => setLocation(text)}
          placeholder="Location"
        />
      </View>

      <AppButton
        title="Update Profile"
        buttonStyle={button.Wrap}
        textStyle={button.Text}
        onpress={() => saveProfile()}
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
    //backgroundColor: R.colors.blue,
    height: '80%',
    margin: 30,
  },
});
