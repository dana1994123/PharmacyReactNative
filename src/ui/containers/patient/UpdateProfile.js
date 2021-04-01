import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Image, Text} from 'react-native';
import {form, layout, button, header} from '../../../res/styles/global';
import {AppButton} from '../../components/AppButton';
import R from '../../../res/R';
import {TouchableOpacity} from 'react-native';
import {footer} from '../../../res/styles/global';
import Dialog from 'react-native-dialog';


export default function UpdateProfile() {
  //generate the user information into the ui using his information that has
  //been saved as a context for the app

  componentWillMount = () => {
    setnPass('');
    setcnPass('');
    //populate the user information from the firebase
  };
  const [name, setName] = useState('');
  const [userNumber, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [password, setpassword] = useState('');
  const [upassword, setupassword] = useState(false);
  const [nPass, setnPass] = useState('');
  const [cnPass, setcnPass] = useState('');

  const saveProfile = () => {
    console.log('Saved Profile');
  };

  const changePassRequest = () => {
    //open a dialog to change the password in
    setupassword(!upassword);
  };
  const handleCancel = () => {
    componentWillMount();
    setupassword(!upassword);
  };

  const handleSave = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    componentWillMount();
    setupassword(!upassword);
  };

  return (
    <View style={layout.fullScreen}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            style={header.avatar}
            source={require('../../../../assets/images/default.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <TextInput
          style={form.inputGrey}
          selectionColor={R.colors.primary}
          onChangeText={text => setName(text)}
          placeholder="Full Name"
        />
        <TextInput
          style={form.inputGrey}
          selectionColor={R.colors.primary}
          onChangeText={text => setNumber(text)}
          placeholder="Number"
        />
        <TextInput
          style={form.inputGrey}
          selectionColor={R.colors.primary}
          onChangeText={text => setAddress(text)}
          placeholder="Address"
        />
        <TextInput
          style={form.inputGrey}
          selectionColor={R.colors.primary}
          onChangeText={text => setpassword(text)}
          placeholder="Password"
        />
        <TouchableOpacity
          style={styles.fotor}
          onPress={() => changePassRequest()}>
          <Text style={footer.footerText}>
            {'          '}Change your Password{' '}
            <Text style={footer.footerLink}>Update</Text>
          </Text>
        </TouchableOpacity>
      </View>

      <AppButton
        title="Update Profile"
        buttonStyle={button.Wrap}
        textStyle={button.Text}
        onpress={() => saveProfile()}
      />
      <View>
        <Dialog.Container visible={upassword}>
          <Dialog.Title>Change your password</Dialog.Title>
          <Dialog.Input
            style={styles.inputGrey}
            label="New Password"
            onChangeText={text => setnPass(text)}
            value={nPass}></Dialog.Input>
          <Dialog.Input
            style={styles.inputGrey}
            onChangeText={text => setcnPass(text)}
            label="Confirm Password"
            value={cnPass}></Dialog.Input>
          <Dialog.Button label="Cancel" onPress={handleCancel} />
          <Dialog.Button label="Save" onPress={handleSave} />
        </Dialog.Container>
      </View>
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
    marginTop: '2%',
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
  header: {
    backgroundColor: R.colors.primary,
    height: '25%',
    alignContent: 'center',
    alignItems: 'center',
  },
  inputGrey: {
    width: '110%',
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#EEEEEE',
    paddingLeft: 16,
    alignSelf: 'center',
  },
});
