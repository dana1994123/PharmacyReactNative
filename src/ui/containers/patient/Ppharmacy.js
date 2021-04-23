import React, {Component, useContext, useState} from 'react';
import {AppButton} from '../../components/AppButton';
import {form, layout, button, header, footer} from '../../../res/styles/global';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Modal,
  Image,
  Text,
} from 'react-native';
import R from '../../../res/R';
import {IconButton} from 'react-native-paper';
import {PatientContext} from '../../../utilites/providers/PatientProvider';
import {db} from '../../../database/config';
import {UserContext} from '../../../utilites/providers/UserProvider';

export default class Ppharmacy extends Component {
  static contextType = PatientContext;

  state = {
    disabled: false,
    txtColor: '#545454',
    phamName: this.context.pharmacy.phaName,
    phaLoc: this.context.pharmacy.location,
    phaEmail: this.context.pharmacy.phEmail,
    phaNum: this.context.pharmacy.phoneNumber,
  };

  render() {
    const updatePharmacy = () => {
      this.setState({disabled: true});
    };
    savePharmacyInfo = () => {
      this.setState({disabled: false});
      //check if the pharmacy information been updated and then pop the are
      //update the firebase with these information
      db.collection('patients')
        .where('user.email', '==', this.context.user.email)
        .update({
          pharmacy: 'sssss',
        })
        .then(() => {
          console.log('User updated!');
        });
      alert('Pharmacy information been updated');
    };
    const clickDisable = () => {
      alert('Click the pencil icon to start edditting');
    };
    return (
      <View style={layout.fullScreen}>
        <View style={styles.wheader}></View>
        <View style={styles.header}>
          <Image
            style={styles.pham}
            source={require('../../../../assets/images/pham2.jpg')}
          />
          <TouchableOpacity>
            <IconButton
              icon="pencil"
              color={R.colors.secondary}
              size={40}
              style={styles.icon}
              onPress={() => updatePharmacy()}
            />
          </TouchableOpacity>
          <Text style={styles.te}>My Pharmacy </Text>

          <Text style={styles.note}>fill & we will do the work for you</Text>
          <View style={styles.boxInput}>
            {!this.state.disabled ? (
              <View>
                <TextInput
                  editable={this.state.disabled}
                  style={styles.inputGrey}
                  selectionColor={R.colors.primary}
                  onChangeText={text => this.setState({phaNamec: text})}
                  placeholder={this.state.phamName}
                />
                <TextInput
                  editable={this.state.disabled}
                  style={styles.inputGrey}
                  selectionColor={R.colors.primary}
                  onChangeText={text => this.setState({phaLoc: text})}
                  placeholder={this.state.phaLoc}
                />
                <TextInput
                  editable={this.state.disabled}
                  style={styles.inputGrey}
                  selectionColor={R.colors.primary}
                  onChangeText={text => this.setState({phaLoc: text})}
                  placeholder={this.state.phaLoc}
                />
                <TextInput
                  style={styles.inputGrey}
                  editable={this.state.disabled}
                  selectionColor={R.colors.primary}
                  onChangeText={text => this.setState({phaNum: text})}
                  placeholder={this.state.phaNum}
                />
              </View>
            ) : (
              <View>
                <TextInput
                  editable={this.state.disabled}
                  style={styles.inputGrey2}
                  selectionColor={R.colors.primary}
                  onChangeText={text => this.setState({phamName: text})}
                  value={this.state.phamName}
                />
                <TextInput
                  editable={this.state.disabled}
                  style={styles.inputGrey2}
                  selectionColor={R.colors.primary}
                  onChangeText={text => this.setState({phaLoc: text})}
                  value={this.state.phaLoc}
                />
                <TextInput
                  editable={this.state.disabled}
                  style={styles.inputGrey2}
                  selectionColor={R.colors.primary}
                  onChangeText={text => this.setState({phaEmail: text})}
                  value={this.state.phaEmail}
                />
                <TextInput
                  style={styles.inputGrey2}
                  editable={this.state.disabled}
                  selectionColor={R.colors.primary}
                  onChangeText={text => this.setState({phaNum: text})}
                  value={this.state.phaNum}
                />
              </View>
            )}
          </View>
          {!this.state.disabled ? (
            <TouchableOpacity
              style={styles.btn1}
              onPress={() => clickDisable()}>
              <Text style={styles.btnTxt}>Save</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => savePharmacyInfo()}
              style={styles.btn2}>
              <Text style={styles.btnTxt}>Save</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  row1: {
    height: '1000%',
    width: '100%',
    backgroundColor: R.colors.secondary,
  },
  row2: {
    height: '100%',
    width: '1000%',
    backgroundColor: R.colors.white,
  },

  header: {
    height: '100%',
    width: '60%',
    backgroundColor: R.colors.lightSec,
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },

  wheader: {
    height: '100%',
    width: '700%',
    marginTop: '20%',
    backgroundColor: R.colors.white,
  },
  boxInput: {
    marginLeft: '69%',
  },
  note: {
    marginLeft: '5%',
    fontSize: 13,
  },
  pham: {
    height: 230,
    width: 240,
    marginLeft: '140%',
  },
  icon: {
    marginLeft: '190%',
  },
  btn1: {
    backgroundColor: R.colors.lightGrey,
    marginTop: '10%',
    width: '60%',
    height: '7%',
    marginLeft: '90%',
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn2: {
    backgroundColor: R.colors.orange,
    marginTop: '10%',
    width: '60%',
    height: '7%',
    marginLeft: '90%',
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    fontSize: 19,
  },
  te: {
    fontSize: 35,
  },
  inputGrey: {
    width: 320,
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: R.colors.lightYellow,
    marginTop: 10,
    paddingLeft: 16,
    alignSelf: 'center',
  },
  inputGrey2: {
    width: 320,
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: R.colors.lightYellow,
    marginTop: 10,
    paddingLeft: 16,
    alignSelf: 'center',
    color: R.colors.black,
  },
});
