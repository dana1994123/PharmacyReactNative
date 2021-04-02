import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Platform} from 'react-native';
import {RNCamera} from 'react-native-camera';
import RNFetchBlob from 'rn-fetch-blob';
import R from '../../../../res/R';
import {IconButton} from 'react-native-paper';
import moment from 'moment';
import Dialog from 'react-native-dialog';
import {Permission, PERMISSION_TYPE} from "./AppPermissions"

export default class CameraScreen extends Component {
  state = {
    time: moment().format('LT'),
    date: moment().format('LL'),
    isCameraPermGranted: false,
    isPhotoLibraryPermGranted: false,
    seen: true,
  };

  handleCancel = () => {
    console.log('hjhkj');
  };

  componentDidMount = () => {
    //start camera
    //ask for the permission
    Permission.checkPermission(PERMISSION_TYPE.camera)


    
    // request(PERMISSIONS.IOS.CAMERA).then(result => {
    //   switch (result) {
    //     case RESULTS.DENIED:
    //       console.log(
    //         'The permission has not been requested / is denied but requestable',
    //       );

    //       break;
    //     case RESULTS.GRANTED:
    //       console.log('The permission is granted');
    //       this.setState({isCameraPermGranted: true});
    //       break;
    //     case RESULTS.BLOCKED:
    //       console.log('The permission is denied and not requestable anymore');
    //       break;
    //   }
    // });

    // //check the permission
    // check(PERMISSIONS.ANDROID.CAMERA)
    //   .then(result => {
    //     switch (result) {
    //       case RESULTS.UNAVAILABLE:
    //         console.log(
    //           'This feature is not available (on this device / in this context)',
    //         );
    //         break;
    //       case RESULTS.DENIED:
            // const granted = PermissionsAndroid.request(
            //   PermissionsAndroid.PERMISSIONS.CAMERA,
            //   {
            //     title: 'Permission for Captureeeee Extraaaordinary Application',
            //     message:
            //       'For your beautiful pictures, ' +
            //       'Grant permission to Captureeeee Extraaaordinary Application',
            //     buttonNeutral: 'Not Right Now!',
            //     buttonNegative: 'Cancel',
            //     buttonPositive: 'Alright',
            //   },
            // );

            // if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //   console.log('Camera access is granted');
            //   this.setState({isCameraPermGranted: true});
            // }
      //       console.log(
      //         'The permission has not been requested / is denied but requestable',
      //       );
      //       break;
      //     case RESULTS.GRANTED:
      //       console.log('The permission is granted');
      //       //request the permission

      //       break;
      //     case RESULTS.BLOCKED:
      //       console.log('The permission is denied and not requestable anymore');
      //       break;
      //   }
      // })
      // .catch(error => {
      //   console.log(error);
      // });
    // check(PERMISSIONS.IOS.CAMERA)
    //   .then(result => {
    //     switch (result) {
    //       case RESULTS.UNAVAILABLE:
    //         console.log(
    //           'This feature is not available (on this device / in this context)',
    //         );
    //         break;
    //       case RESULTS.DENIED:
    //         console.log(
    //           'The permission has not been requested / is denied but requestable',
    //         );
    //         break;
    //       case RESULTS.GRANTED:
    //         console.log('The permission is granted');
    //         this.setState({isCameraPermGranted: true});
    //         break;
    //       case RESULTS.BLOCKED:
    //         console.log('The permission is denied and not requestable anymore');
    //         break;
    //     }
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };

  render() {
    const permision = () => {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      );
    };
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
        {this.state.isCameraPermGranted == false ? (
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
                onPress={() => permision()}
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
  icon: {
    marginLeft: '40%',
  },
});
