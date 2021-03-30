import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import {form, layout, button} from '../../../res/styles/global';
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
    <View style={layout.body}>
      <TextInput
        style={form.textInput}
        selectionColor={R.colors.primary}
        onChangeText={text => setName(text)}
        placeholder="Name"
      />
      <TextInput
        style={form.textInput}
        selectionColor={R.colors.primary}
        onChangeText={text => setUserName(text)}
        placeholder="Username"
      />
      <TextInput
        style={form.textInput}
        selectionColor={R.colors.primary}
        onChangeText={text => setCompany(text)}
        placeholder="Company"
      />
      <TextInput
        style={form.textInput}
        selectionColor={R.colors.primary}
        onChangeText={text => setLocation(text)}
        placeholder="Location"
      />
      <AppButton
        title="Update Profile"
        buttonStyle={button.Wrap}
        textStyle={button.Text}
        onpress={this.saveProfile}
      />
    </View>
  );
}
