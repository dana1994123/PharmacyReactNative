import React, {useState} from 'react';
import {StyleSheet, Modal, Text, View, TextInput} from 'react-native';
import {AppButton} from '../../components/AppButton';
import R from '../../../res/R';
import {DateInput} from '../../components/DateInput';
import {form, layout, button, textstyle} from '../../../res/styles/global';
import {db} from '../../../database/config';
import {firebase} from '../../../database/config';

export default function EnterOrder() {
  const [selectedDate, setSelectedDate] = useState('');
  const [toggleSwitch, setToggleSwitch] = useState('');
  const [custName, setCustName] = useState('');
  const [healthCard, setHealthCard] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [modalVisible, setModalVisible] = useState('');
  const [customer, setCustomer] = useState({
    name: '',
    healthCard: '',
    date: '',
  });

  const addCustomer = () => {
    console.log(customer);
    firebase
      .firestore()
      .collection('Customers')
      .add({
        customer,
      })
      .then(docRef => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(error => {
        console.error('Error adding document: ', error);
      });
    setModal();
  };

  const saveObject = () => {
    const date = new Date(year, month, day);
    setCustomer({
      name: custName,
      healthCard: healthCard,
      date: date.toString(),
    });
    setModalVisible(true);
  };

  const setModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <View style={layout.centeredFullScreen}>
      <View style={styles.box}>
        <TextInput
          style={form.inputGrey}
          selectionColor={R.colors.primary}
          onChangeText={text => setCustName(text)}
          placeholder="Customer Name"
        />
        <TextInput
          style={form.inputGrey}
          selectionColor={R.colors.primary}
          onChangeText={text => setHealthCard(text)}
          placeholder="Health Card"
        />
        <Text style={textstyle.h3}>Date of Birth</Text>
        <View style={layout.row}>
          <DateInput />
        </View>

        <AppButton
          title="Ok"
          buttonStyle={button.Wrap}
          textStyle={button.Text}
          onPress={() => saveObject()}
        />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          () => setModal();
        }}>
        <View style={styles.modalViewSM}>
          <View style={styles.modalCenter}>
            <Text style={styles.okText}>Submit Record</Text>
            <View style={styles.row_modal}>
              <Text style={styles.Text}>Name:</Text>
              <Text style={styles.Text}>{custName}</Text>
            </View>
            <View style={styles.row_modal}>
              <Text style={styles.Text}>HealthCard:</Text>
              <Text style={styles.Text}>{healthCard}</Text>
            </View>
            <View style={styles.row_modal}>
              <Text style={styles.Text}>DOB:</Text>
              <Text style={styles.Text}>{customer.date}</Text>
            </View>
          </View>

          <AppButton
            title="Ok"
            buttonStyle={button.Wrap}
            textStyle={button.Text}
            onPress={() => addCustomer()}
          />
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
