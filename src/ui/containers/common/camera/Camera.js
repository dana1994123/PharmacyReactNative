import React, {Component} from 'react';
import ImagePicker from 'react-native-image-picker';
import {TouchableOpacity, View, Image} from 'react-native';
import storage, {firebase} from '@react-native-firebase/storage';
import {cams} from '../../../../res/styles/global';
import {IconButton} from 'react-native-paper';
import R from '../../../../res/R';

export default class Camera extends Component {
  state = {
    filepath: {},
    fileUri: this.props.picUri,
    id: this.props.id,
    uploading: false,
    imageName: 'test',
  };

  componentDidCatch() {
    //we have to be auth user to be able to upload images
    firebase.auth().signInAnonymously();
  }

  chooseImage = () => {
    let options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      //console.log('Response = ', response);
      if (response.didCancel) {
        //console.log('User cancelled image picker');
      } else if (response.error) {
        //console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        //console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = {uri: response.uri};
        //console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileUri: response.uri,
          imageName: `${response.uri.substring(
            4,
            8,
          )}/test${response.uri.substring(1, 5)}`,
        });
        this.uploadImage();
      }
    });
  };

  //upload the image to the firebase storage
  async uploadImage() {
    const reference = storage().ref(`${this.state.fileUri}`);
    console.log(`i'm refrence ${reference}`);
    const pathToFile = `${this.state.fileUri}`;
    console.log(`this is the path ${pathToFile} `);
    // uploads file
    await reference.putFile(pathToFile);
  }

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
        this.uploadImage();
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
        this.uploadImage();
      }
    });
  };

  //after choosing the imge what to do for with the uri  for the profile picture
  renderProfilePicFileUri() {
    //we need to save the image in the firebase & pass it as a prop
    if (this.state.fileUri) {
      return (
        <View>
          <Image source={{uri: this.state.fileUri}} style={cams.avatar} />

          <IconButton
            icon="camera"
            color={R.colors.black}
            size={30}
            style={cams.icon}
            onPress={() => this.chooseImage()}
          />
        </View>
      );
    }
  }

  render() {
    return <View style={cams.cont}>{this.renderProfilePicFileUri()}</View>;
  }
}
