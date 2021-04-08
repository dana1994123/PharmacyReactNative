import React, {Component, useState} from 'react';
import {StyleSheet, TextInput, View, Modal, Image, Text} from 'react-native';
import {form, layout, button, header} from '../../../res/styles/global';
import {AppButton} from '../../components/AppButton';
import R from '../../../res/R';
import {TouchableOpacity} from 'react-native';
import {footer} from '../../../res/styles/global';
import Dialog from 'react-native-dialog';
import defaultProfile from '../../../../assets/images/default.png';
import Camera from '../common/camera/Camera';
const defaultProfileUri = Image.resolveAssetSource(defaultProfile).uri;
export default class UpdateProfile extends Component {
  //generate the user information into the ui using his information that has
  //been saved as a context for the app
  state = {
    name: '',
    userNumber: '',
    address: '',
    password: '',
    upassword: false,
    nPass: '',
    cnPass: '',
    picModal: false,
    picUri: defaultProfileUri,
  };
  componentDidMount() {
    //get the user information from the firebase
    this.setState({setnPass: ''});
    this.setState({setcnPass: ''});
  }
  handlePress = visible => {
    //rerender the details
    // this.props.onItemPress(this.props.articles.title);
    this.setState({picModal: visible});
  };

  render() {
    const handleSave = () => {
      // The user has pressed the "Delete" button, so here you can do your own logic.
      // ...Your logic
      this.setState({upassword: false});
      //update the password
    };
    const saveProfile = () => {
      console.log('Saved Profile');
    };
    // retreiveProfileImage = () => {
  //   const {imageName} = this.state;
  //   let imageRef = firebase.storage().ref('/' + imageName);
  //   imageRef
  //     .getDownloadURL()
  //     .then(url => {
  //       //from url you can fetched the uploaded image easily
  //       this.setState({profileImageUrl: url});
  //     })
  //     .catch(e => console.log('getting downloadURL of image error => ', e));
  // };

    const changePassRequest = () => {
      //open a dialog to change the password in
      this.setState({upassword: true});
    };
    const handleCancel = () => {
      componentDidMount();
      this.setState({upassword: false});
    };

    return (
      <View style={layout.fullScreen}>
        <View style={styles.header}>
          <Camera id="profile" picUri={this.state.picUri} />
        </View>
        <View style={styles.box}>
          <TextInput
            style={form.inputGrey}
            selectionColor={R.colors.primary}
            onChangeText={text => this.setState({name: text})}
            placeholder="Full Name"
          />
          <TextInput
            style={form.inputGrey}
            selectionColor={R.colors.primary}
            onChangeText={text => this.setState({userNumber: text})}
            placeholder="Number"
          />
          <TextInput
            style={form.inputGrey}
            selectionColor={R.colors.primary}
            onChangeText={text => this.setState({address: text})}
            placeholder="Address"
          />
          <TextInput
            style={form.inputGrey}
            selectionColor={R.colors.primary}
            onChangeText={text => this.setState({upassword: text})}
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
          {/* dialog to update the password */}
          <Dialog.Container visible={this.state.upassword}>
            <Dialog.Title>Change your password</Dialog.Title>
            <Dialog.Input
              style={styles.inputGrey}
              label="New Password"
              onChangeText={text => this.setState({nPass: text})}
              value={this.state.nPass}></Dialog.Input>
            <Dialog.Input
              style={styles.inputGrey}
              onChangeText={text => this.setState({cnPass: text})}
              label="Confirm Password"
              value={this.state.cnPass}></Dialog.Input>
            <Dialog.Button label="Cancel" onPress={() => handleCancel()} />
            <Dialog.Button label="Save" onPress={() => handleSave()} />
          </Dialog.Container>
        </View>
        {/* navigate to camera modal */}
      </View>
    );
  }
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
});
