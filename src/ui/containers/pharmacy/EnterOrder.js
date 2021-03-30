import React, {useState} from 'react';
import {StyleSheet, Modal, Text, View, TextInput, Switch} from 'react-native';
import {AppButton} from '../../components/AppButton';
import R from '../../../res/R';
import DatePicker from 'react-native-modern-datepicker';
import PrescriptionOrder from '../../../models/PrescriptionOrder';
import {form, layout, button, text} from '../../../res/styles/global';

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

  const setToggle = () => {
    setToggleSwitch(!toggleSwitch);
  };

  const setModal = () => {
    setModalVisible(!modalVisible);
  };

  const setModal2 = () => {
    setModal2Visible(!modal2Visible);
  };

  const openModal2 = () => {
    setModal2Visible(true);
  };

  return (
    <View style={layout.centeredFullScreen}>
      <View style={styles.box}>
        <TextInput
          style={form.inputGrey}
          selectionColor={R.colors.primary}
          onChangeText={text => setMedName(text)}
          placeholder="Medicine Name"
        />
        <TextInput
          style={form.inputGrey}
          selectionColor={R.colors.primary}
          onChangeText={text => setQuantity(text)}
          placeholder="Quantity"
        />
        <AppButton
          title="Duration"
          buttonStyle={[form.inputGrey, {justifyContent: 'flex-start'}]}
          textStyle={styles.Text}
          onPress={openModal2}
        />
        <View style={form.inputGrey}>
          <View style={layout.row}>
            <Text style={styles.Text}>Refillable</Text>
            <Switch
              trackColor={{false: '#767577', true: R.colors.primary}}
              thumbColor={toggleSwitch ? '#fff' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={setToggle}
              value={toggleSwitch}
              style={{marginTop: 1}}
            />
          </View>
        </View>
      </View>

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
            onPress={setModal2}>
            <Text style={styles.textStyle}>Hide Modal</Text>
          </AppButton>
        </View>
      </Modal>
      <AppButton
        title="Submit"
        buttonStyle={button.Wrap}
        textStyle={button.Text}
        onPress={saveObject}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModal;
        }}>
        <View style={styles.modalViewSM}>
          <View style={styles.modalCenter}>
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
              buttonStyle={button.Wrap}
              textStyle={button.Text}
              onPress={setModal}></AppButton>
          </View>
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

    marginLeft: -5,
    marginTop: 5,
  },
  modalView: {
    flex: 1,
    // margin: 30,
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
  modalViewSM: {
    flex: 1,
    backgroundColor: '#66555533',
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
    color: '#999999',
    fontSize: 15,
    marginTop: 15,
  },
  okText: {
    fontSize: 40,
    color: R.colors.primary,
  },
  box: {
    marginLeft: 10,
    marginRight: 10,
    padding: 20,
    backgroundColor: R.colors.white,
    elevation: 8,
    borderRadius: 10,
  },
  modalCenter: {
    marginLeft: 10,
    marginRight: 10,
    padding: 50,
    backgroundColor: R.colors.white,
    elevation: 8,
    borderRadius: 10,
    width: '110%',
  },
});
