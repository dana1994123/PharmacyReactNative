import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Image, Text} from 'react-native';
import {form, layout, button, header} from '../../../res/styles/global';
import {AppButton} from '../../components/AppButton';
import R from '../../../res/R';

export default function EditProfile() {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');

  saveProfile = () => {
    console.log('Saved Profile');
  };

  return (
    <View style={layout.fullScreen}>
      <View style={header.bk}>
        <Image
          style={header.avatar}
          source={require('../../../../assets/images/default.png')}
        />
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
          onChangeText={text => setUserName(text)}
          placeholder="Username"
        />
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
        onpress={saveProfile}
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
