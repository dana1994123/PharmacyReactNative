import React, {useState} from 'react';
import {TextInput, View, Image, Text} from 'react-native';
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
      <View style={[header.bk, layout.centered]}>
        <Image
          style={header.avatar}
          source={require('../../../../assets/images/default.png')}
        />
      </View>
      <TextInput
        style={form.input}
        selectionColor={R.colors.primary}
        onChangeText={text => setName(text)}
        placeholder="Name"
      />
      <TextInput
        style={form.input}
        selectionColor={R.colors.primary}
        onChangeText={text => setUserName(text)}
        placeholder="Username"
      />
      <TextInput
        style={form.input}
        selectionColor={R.colors.primary}
        onChangeText={text => setCompany(text)}
        placeholder="Company"
      />
      <TextInput
        style={form.input}
        selectionColor={R.colors.primary}
        onChangeText={text => setLocation(text)}
        placeholder="Location"
      />
      <AppButton
        title="Update Profile"
        buttonStyle={button.Wrap}
        textStyle={button.Text}
        onpress={saveProfile}
      />
    </View>
  );
}
