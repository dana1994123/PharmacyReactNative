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
  const {userInfo} = useContext(UserContext);
  const [fullName1, setFullName1] = useState('');
  const [company1, setCompany1] = useState('');
  const [location1, setLocation1] = useState('');
  const [picUri, setPicUri] = useState(defaultProfileUri);
  const [phoneNumber1, setPhoneNumber1] = useState('');
  const [phErr, setPhErr] = useState('');
  const [errorFlag, setErrorFlag] = useState('');

  const validatePhone = () => {
    const reg = /^\d+$/;
    if (phoneNumber1.length < 11) {
      setPhErr('INVALID Phone Number');
      setErrorFlag(true);
    } else if (reg.test(phoneNumber1) === false) {
      setPhErr('Phone format INVALID');
      setErrorFlag(true);
    } else {
      setPhErr('');
      setErrorFlag(false);
    }
  };

  const saveProfile = () => {
    var picURI = null;
    if (picUri !== defaultProfileUri) {
      picURI = picUri;
    }
    var company = userInfo.company;
    if (company1.length > 0) {
      company = company1;
    }
    var phoneNumber = userInfo.phoneNumber;
    if (phoneNumber1.length > 0) {
      validatePhone();
      phoneNumber = phoneNumber1;
    }
    var location = userInfo.address;
    if (location1.length > 0) {
      location = location1;
    }
    var fullName = userInfo.fullName;
    if (fullName1.length > 0) {
      fullName = fullName1;
    }

    if (errorFlag !== true) {
      db.collection('users')
        .doc(userInfo.uid)
        .update({
          fullName,
          phoneNumber,
          company,
          location,
          picURI,
        })
        .catch(error => {
          console.log('Error getting documents: ', error);
        });
    }
  };

  const addFileHandler = URI => {
    setPicUri(URI);
  };
  console.log(userInfo.profileURI);
  return (
    <View style={layout.fullScreen}>
      <View style={header.bk}>
        <Camera
          id="profile"
          picUri={userInfo.profileURI === null ? picUri : userInfo.profileURI}
          onAddFile={addFileHandler}
        />
      </View>
      <View style={styles.box}>
        <TextInput
          style={form.inputGrey}
          selectionColor={R.colors.primary}
          onChangeText={text => setFullName1(text)}
          placeholder={userInfo.fullName !== '' ? userInfo.fullName : 'Name'}
        />
        <TextInput
          style={form.inputGrey}
          selectionColor={R.colors.primary}
          onChangeText={text => setPhoneNumber1(text)}
          placeholder={
            userInfo.phoneNumber !== '' ? userInfo.phoneNumber : 'Phone Number'
          }
        />
        <Text style={textstyle.error}>{phErr}</Text>
        <TextInput
          style={form.inputGrey}
          selectionColor={R.colors.primary}
          onChangeText={text => setCompany1(text)}
          placeholder={userInfo.company !== '' ? userInfo.company : 'Company'}
        />
        <TextInput
          style={form.inputGrey}
          selectionColor={R.colors.primary}
          onChangeText={text => setLocation1(text)}
          placeholder={userInfo.address !== '' ? userInfo.address : 'Address'}
        />
      </View>

      <AppButton
        title="Update Profile"
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
