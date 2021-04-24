import React, {Component, useContext, useEffect, useState} from 'react';
import {StyleSheet, TextInput, View, Modal, Image, Text} from 'react-native';
import {form, layout, button, header, cams} from '../../../res/styles/global';
import {AppButton} from '../../components/AppButton';
import R from '../../../res/R';
import {TouchableOpacity} from 'react-native';
import {footer} from '../../../res/styles/global';
import Dialog from 'react-native-dialog';
import defaultProfile from '../../../../assets/images/default.png';
import Camera from '../common/camera/Camera';
import {color} from 'react-native-reanimated';
import {PatientContext} from '../../../utilites/providers/PatientProvider';
import {UserContext} from '../../../utilites/providers/UserProvider';
import {db} from '../../../database/config';

export default function UpdateProfile() {
  //generate the user information into the ui using his information that has
  //been saved as a context for the app
  const {userInfo} = useContext(UserContext);

  const [de, setdefault] = useState('');
  const [name, setname] = useState(userInfo.fullName);
  const [userNumber, setuserNumber] = useState(userInfo.phoneNumber);

  const [address, setaddress] = useState(userInfo.location);

  const [picModal, setpicModal] = useState(false);
  const [uemail, setuemail] = useState(userInfo.email);
  const [count, setCount] = useState(0);

  const [healthIns, sethealthIns] = useState('');
  const [picUri, setPicUri] = useState();
  useEffect(() => {
    setdefault(Image.resolveAssetSource(defaultProfile).uri);
  }, [count]);

  // handlePress = visible => {
  //   //rerender the details
  //   // this.props.onItemPress(this.props.articles.title);
  //   setpicModal(visible);
  // };

  const handleSave = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    //this.setState({upassword: false});
    //update the password
  };
  const saveProfile = () => {
    console.log('in save profile');
    //updated the user
    // var picURI = this.context.profileURI;
    // if (this.state.picUri !== picURI) {
    //   picURI = this.state.picUri;
    // }

    // var email;
    // if (uemail.length > 0) {
    //   email = this.state.uemail;
    // }
    // var location = this.context.location;
    // if (this.state.address.length > 0) {
    //   location = this.state.address;
    // }
    // var fullName = this.context.fullName;
    // if (this.state.fullName.length > 0) {
    //   fullName = this.state.fullName;
    // }
    // if (
    //   this.state.fullName.length > 0 ||
    //   this.state.address.length > 0 ||
    //   this.state.uemail.length > 0 ||
    //   this.state.picUri.length
    // ) {
    db.collection('users')
      .doc(userInfo.uid)
      .update({
        email: userInfo.email,
        fullName: userInfo.fullName,
        location: userInfo.location,
        phoneNumber: userInfo.phoneNumber,
        picUri: userInfo.picUri,
        role: userInfo.role,
      })
      .catch(error => {
        console.log('Error getting documents: ', error);
      });
  };

  const changePassRequest = () => {
    //open a dialog to change the password in
    this.setState({upassword: true});
  };
  const handleCancel = () => {
    this.setState({upassword: false});
  };

  const addFileHandler = URI => {
    this.setState({picUri: URI});
  };

  return (
    <View style={layout.fullScreen}>
      <View style={styles.header}>
        <Camera
          id="profile"
          picUri={picUri}
          camWrap={cams.cont}
          camIcon={cams.icon}
          onAddFile={addFileHandler}
        />
      </View>
      <View style={styles.box}>
        <TextInput
          style={[form.inputGrey, {backgroundColor: R.colors.lightYellow}]}
          editable={false}
          placeholder="Email Address"
          value={uemail}
        />
        <TextInput
          style={form.inputGrey}
          selectionColor={R.colors.primary}
          onChangeText={text => setname(text)}
          placeholder="Full Name"
          value={name}
        />
        <TextInput
          style={form.inputGrey}
          selectionColor={R.colors.primary}
          onChangeText={text => sethealthIns(text)}
          placeholder="Health Insurance"
          value={healthIns}
        />
        <TextInput
          style={form.inputGrey}
          selectionColor={R.colors.primary}
          onChangeText={text => setuserNumber(text)}
          placeholder="Number"
          value={userNumber}
        />
        <TextInput
          style={form.inputGrey}
          selectionColor={R.colors.primary}
          onChangeText={text => setaddress(text)}
          placeholder="Address"
          value={address}
        />

        <TouchableOpacity
          style={styles.fotor}
          onPress={() => changePassRequest()}>
          <Text style={footer.footerText}>
            {'          '}Change your Password{' '}
            <Text style={(footer.footerLink, styles.colorO)}>Update</Text>
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
        {/* dialog to update the password */}
        <Dialog.Container visible={false}>
          <Dialog.Title>Change your password</Dialog.Title>
          <Dialog.Input
            style={styles.inputGrey}
            label="New Password"
            onChangeText={text => this.setState({nPass: text})}
            value={this.state.nPass}
            secureTextEntry={true}></Dialog.Input>
          <Dialog.Input
            style={styles.inputGrey}
            onChangeText={text => this.setState({cnPass: text})}
            label="Confirm Password"
            value={this.state.cnPass}
            secureTextEntry={true}></Dialog.Input>
          <Dialog.Button label="Cancel" onPress={() => handleCancel()} />
          <Dialog.Button label="Save" onPress={() => handleSave()} />
        </Dialog.Container>
      </View>
      {/* navigate to camera modal */}
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
    backgroundColor: R.colors.lightSec,
    height: '20%',
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
  modalView: {
    flex: 1,
    margin: 10,
    marginTop: 95,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  colorO: {
    color: R.colors.orange,
  },
});
