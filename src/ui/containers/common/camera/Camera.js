import React, {Component, useState} from 'react';
import ImagePicker from 'react-native-image-picker';
import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import {header} from '../../../../res/styles/global';
import R from '../../../../res/R';

export default class Camera extends Component {
  state = {
    filepath: {},
    fileUri: this.props.picUri,
    id: this.props.id,
  };

  chooseImage = () => {
    let options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileUri: response.uri,
        });
      }
    });
  };

  launchCamera = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileUri: response.uri,
        });
      }
    });
  };

  launchImageLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileUri: response.uri,
        });
      }
    });
  };
  //after choosing the imge what to do for with the uri  for the profile picture
  renderProfilePicFileUri() {
    //we need to save the image in the firebase & pass it as a prop
    if (this.state.fileUri) {
      return (
        <TouchableOpacity onPress={() => this.chooseImage()}>
          <Image source={{uri: this.state.fileUri}} style={styles.avatar} />
        </TouchableOpacity>
      );
    }
  }
  render() {
    return <View style={styles.cont}>{this.renderProfilePicFileUri()}</View>;
  }
}
const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: R.colors.white,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: '5%',
  },
  cont: {
    marginTop: '5%',
  },
});
