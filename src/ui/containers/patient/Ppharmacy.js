import React, {Component, useState} from 'react';
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

export default class Ppharmacy extends Component {
  state = {
    disabled: false,
  };
  componentDidMount() {
    //serch the firebase if the user has a pharmacy and render it here
  }
  render() {
    const updatePharmacy = () => {
      this.setState({disabled: true});
    };
    const savePharmacyInfo = () => {
      this.setState({disabled: false});
      //check if the pharmacy information been updated and then pop the are
      //update the firebase with these information
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
          <Text style={styles.note}>
            Fill your Pharmacy information & we will do the work for you
          </Text>

          <View style={styles.boxInput}>
            <TextInput
              editable={this.state.disabled}
              style={form.inputGrey}
              selectionColor={R.colors.primary}
              onChangeText={text => this.setState({name: text})}
              placeholder="Pharmacy Name"
            />
            <TextInput
              editable={this.state.disabled}
              style={form.inputGrey}
              selectionColor={R.colors.primary}
              onChangeText={text => this.setState({userNumber: text})}
              placeholder="Phone Number"
            />
            <TextInput
              editable={this.state.disabled}
              style={form.inputGrey}
              selectionColor={R.colors.primary}
              onChangeText={text => this.setState({address: text})}
              placeholder="Address"
            />
            <TextInput
              style={form.inputGrey}
              editable={this.state.disabled}
              selectionColor={R.colors.primary}
              onChangeText={text => this.setState({upassword: text})}
              placeholder="Contact Info"
            />
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
    fontSize: 16,
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
});
