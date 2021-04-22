import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Modal,
  Text,
  View,
  TextInput,
  Switch,
  Image,
} from 'react-native';
import {AppButton} from '../../components/AppButton';
import R from '../../../res/R';
import defaultProfile from '../../../../assets/images/default.png';
import DatePicker from 'react-native-modern-datepicker';
import {form, layout, button, textstyle} from '../../../res/styles/global';
import storage, {firebase} from '@react-native-firebase/storage';
import {IconButton} from 'react-native-paper';
import Prescription from '../../../models/Prescription';
import {UserContext} from '../../../utilites/providers/UserProvider';
import ImagePicker from 'react-native-image-picker';
import Camera from '../common/camera/Camera';

const defaultProfileUri = Image.resolveAssetSource(defaultProfile).uri;

export default function AddPrescription() {
  const [refill, setRefill] = useState('');
  const [healthInsNum, setHealthInsNum] = useState('');
  const [fileUri, setFileUri] = useState(defaultProfileUri);
  const [filePath, setFilePath] = useState('');

  const {userInfo} = useContext(UserContext);
  const prescription = new Prescription();
  prescription.user = userInfo;

  const addPrescription = () => {
    //check if the user has filled the pharmacy information
    //check if the user choose file
    //check the health insuarnce number
  };
  const setToggle = () => {
    setRefill(!refill);
  };

  return (
    <View style={layout.centeredFullScreen}>
      <View style={styles.box}>
        <Text style={textstyle.h6}>Enter Prescription</Text>
        <TextInput
          style={form.inputGrey}
          selectionColor={R.colors.primary}
          onChangeText={text => setHealthInsNum(text)}
          placeholder="Health Card Number"
        />

        <View style={form.inputGrey}>
          <View style={layout.row}>
            <Text style={styles.Text}>Refillable</Text>
            <Switch
              trackColor={{false: R.colors.Grey, true: R.colors.secondary}}
              thumbColor={refill ? R.colors.white : R.colors.lightGrey}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setToggle()}
              value={refill}
              style={{marginTop: '2.5%'}}
            />
          </View>
        </View>

        <View style={form.inputGrey}>
          <View style={layout.row}>
            <Text style={styles.Text2}>Upload your Prescription</Text>
            <Camera
              id="order"
              picUri={fileUri}
              camWrap={styles.cont}
              camIcon={styles.icon}
            />
          </View>
        </View>
      </View>

      <AppButton
        title="Submit"
        buttonStyle={button.Wrap}
        textStyle={button.Text}
        onPress={() => addPrescription()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Text: {
    color: R.colors.Grey,
    fontSize: 15,
    marginRight: '5%',
    marginTop: '5%',
  },
  Text2: {
    color: R.colors.Grey,
    fontSize: 15,
    marginRight: '5%',
    marginTop: '-2%',
  },
  box: {
    marginLeft: 10,
    marginRight: 10,
    padding: 20,
    backgroundColor: R.colors.white,
    elevation: 8,
    borderRadius: 10,
    height: '50%',
  },
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
    marginTop: '1%',
    height: 50,
  },
  icon: {
    alignSelf: 'center',
    backgroundColor: R.colors.primary,
  },
});
