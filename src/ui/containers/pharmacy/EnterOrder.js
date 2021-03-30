import React, {useState} from 'react';
import {StyleSheet, Modal, Text, View, TextInput, Switch} from 'react-native';
import {AppButton} from '../../components/AppButton';
import R from '../../../res/R';
import DatePicker from 'react-native-modern-datepicker';
import PrescriptionOrder from '../../../models/PrescriptionOrder';
import {form, layout, button} from '../../../res/styles/global';

export default function EnterOrder() {
  const [selectedDate, setSelectedDate] = useState('');
  const [toggleSwitch, setToggleSwitch] = useState('');
  const [medName, setMedName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [modalVisible, setModalVisible] = useState('');
  const [modal2Visible, setModal2Visible] = useState('');

  saveObject = () => {
    const obj = new PrescriptionOrder(
      medName,
      quantity,
      selectedDate,
      toggleSwitch,
    );
    console.log(obj);
    setModalVisible(true);
  };

  setToggle = () => {
    setToggleSwitch(!toggleSwitch);
  };

  setModal = () => {
    setModalVisible(!modalVisible);
  };

  setModal2 = () => {
    setModal2Visible(!modal2Visible);
  };

  openModal2 = () => {
    setModal2Visible(true);
  };

  return (
    <View style={layout.body}>
      <TextInput
        style={form.input}
        selectionColor={R.colors.primary}
        onChangeText={text => setMedName(text)}
        placeholder="Medicine Name"
      />
      <TextInput
        style={form.input}
        selectionColor={R.colors.primary}
        onChangeText={text => setQuantity(text)}
        placeholder="Quantity"
      />
      <TextInput
        style={form.input}
        selectionColor={R.colors.primary}
        placeholder="Duration"
      />
      <View style={layout.row}>
        <Text style={styles.switchText}>Refillable</Text>
        <Switch
          trackColor={{false: '#767577', true: R.colors.primary}}
          thumbColor={toggleSwitch ? '#fff' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={this.setToggle}
          value={toggleSwitch}
        />
      </View>
      <AppButton
        title="Duration"
        buttonStyle={button.Wrap}
        textStyle={button.Text}
        onPress={this.openModal2}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal2Visible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setModal2;
        }}>
        <View style={styles.modalView}>
          <DatePicker onSelectedChange={date => setSelectedDate(date)} />
          <AppButton
            title="Ok"
            buttonStyle={button.Wrap}
            textStyle={button.Text}
            onPress={this.setModal2}>
            <Text style={styles.textStyle}>Hide Modal</Text>
          </AppButton>
        </View>
      </Modal>
      <AppButton
        title="Submit"
        buttonStyle={button.Wrap}
        textStyle={button.Text}
        onPress={this.saveObject}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setModal;
        }}>
        <View style={styles.modalView}>
          <Text style={styles.okText}>Submitted</Text>
          <View style={styles.row_modal}>
            <Text style={styles.Text}>Medicine:</Text>
            <Text style={styles.Text}>{medName}</Text>
          </View>
          <View style={styles.row_modal}>
            <Text style={styles.Text}>Quantity:</Text>
            <Text style={styles.Text}>{quantity}</Text>
          </View>
          <View style={styles.row_modal}>
            <Text style={styles.Text}>Refillable:</Text>
            {toggleSwitch ? (
              <Text style={styles.Text}>YES</Text>
            ) : (
              <Text style={styles.Text}>NO</Text>
            )}
          </View>

          <AppButton
            title="Ok"
            buttonStyle={button.appButtonContainer}
            textStyle={button.appButtonText}
            onPress={this.setModal}>
            <Text style={styles.textStyle}>Hide Modal</Text>
          </AppButton>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  row_modal: {
    width: 200,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 5,
  },
  switchText: {
    color: R.colors.primary,
    fontSize: 20,
    padding: 6,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  modalView: {
    flex: 1,
    margin: 30,
    marginTop: 100,
    marginBottom: 100,
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
  Text: {
    color: '#000',
    fontSize: 20,
  },
  okText: {
    fontSize: 40,
    color: R.colors.primary,
  },
});
