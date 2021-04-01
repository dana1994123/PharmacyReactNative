import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';
import RNFetchBlob from 'rn-fetch-blob';
import R from '../../../res/R';
import {IconButton} from 'react-native-paper';
import moment from 'moment';
export default class CameraScreen extends Component {
  state = {
    time: moment().format('LT'),
    date: moment().format('LL'),
    permission: true,
  };
  // componentWillMount = () => {
  //   //start camera
  // //ask for the permission

  // };

  render() {
    const takePicture = async () => {
      if (this.camera) {
        const options = {quality: 0.5, base64: true};
        const data = await this.camera.takePictureAsync(options);
        const filename = `pharmacyApp_ ${this.state.date}_ ${this.state.time}.jpeg`;
        try {
          RNFetchBlob.fs.writeFile(filename, data.base64, 'base64');
        } catch (err) {
          console.log(err);
        }
      }
    };
    return (
      <View style={styles.container}>
        {this.state.permission == false ? (
          <Text style={styles.error}>
            you don't have permission to open the camera
          </Text>
        ) : (
          <View style={styles.container}>
            <RNCamera
              style={{flex: 1, alignItems: 'center'}}
              ref={ref => {
                this.camera = ref;
              }}
              type={RNCamera.Constants.Type.back}
              flashMode={RNCamera.Constants.FlashMode.on}></RNCamera>
            <View>
              <IconButton
                icon="camera"
                color={R.colors.lightGrey}
                size={60}
                style={styles.icon}
                onPress={() => takePicture()}
              />
            </View>
          </View>
        )}
      </View>
    );
  }

  //save the image in external storage
  //start camera
  //ask for the permission whenever this will render
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: R.colors.lightGrey,
    borderRadius: 5,
    padding: 15,
    alignSelf: 'center',
    margin: 20,
  },
  error: {
    color: R.colors.white,
    alignSelf: 'center',
    alignContent: 'center',
    marginTop: '90%',
  },
  icon:{
    marginLeft:"40%"
  }
});
