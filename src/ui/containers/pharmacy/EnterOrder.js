import React, {useState} from 'react';
import {StyleSheet, Modal, Text, View, TextInput, Switch} from 'react-native';
import {AppButton} from '../../components/AppButton';
import R from '../../../res/R';
import DatePicker from 'react-native-modern-datepicker';
import PrescriptionOrder from '../../../models/PrescriptionOrder';
import {form, layout, button, textstyle} from '../../../res/styles/global';
import {firebase} from '../../../database/config';

export default function EnterOrder({route, navigation}) {
  const [selectedDate, setSelectedDate] = useState('');
  const [refill, setRefill] = useState('');
  const [medName, setMedName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [modalVisible, setModalVisible] = useState('');
  const [modal2Visible, setModal2Visible] = useState('');
  const [orderConflict, setOrderConflict] = useState('');

  const {customer} = route.params;

  const checkOrder = Timestamp => {
    setOrderConflict(false);
    console.log('check orer called');
    firebase
      .firestore()
      .collection('orders')
      .where('uid', '==', customer.uid)
      .where('medName', '==', medName)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          console.log('times' + doc.data().Timestamp + ' ' + Timestamp);
          if (doc.data() !== undefined) {
            if (doc.data().Timestamp > Timestamp) {
              setOrderConflict(true);
            }
          }
        });
      });
  };

  const addOrder = () => {
    const uid = customer.uid;
    const pharmID = '1111';
    const Timestamp = firebase.firestore.Timestamp.fromDate(
      new Date(selectedDate),
    );
    checkOrder(Timestamp);
    if (!orderConflict) {
      firebase
        .firestore()
        .collection('orders')
        .add({
          uid,
          pharmID,
          medName,
          quantity,
          Timestamp,
          refill,
        })
        .then(docRef => {
          console.log('Document written with ID: ', docRef.id);
        })
        .catch(error => {
          console.error('Error adding document: ', error);
        });
      setModal();
      navigation.navigate('Home');
    }
    console.log(orderConflict);
    setModalVisible(true);
  };

  const saveOrder = () => {
    //const obj = new PrescriptionOrder(medName, quantity, selectedDate, refill);
  };

  const setToggle = () => {
    setRefill(!refill);
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
        <Text style={textstyle.h6}>Enter Prescription</Text>
        <View style={form.staticinputGrey}>
          <Text>{'Name: ' + customer.name}</Text>
        </View>
        <View style={form.staticinputGrey}>
          <Text>{'Card#: ' + customer.healthcard}</Text>
        </View>
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
          onPress={() => openModal2()}
        />
        <View style={form.inputGrey}>
          <View style={layout.row}>
            <Text style={styles.Text}>Refillable</Text>
            <Switch
              trackColor={{false: '#767577', true: R.colors.primary}}
              thumbColor={refill ? '#fff' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setToggle()}
              value={refill}
              style={{marginTop: 3}}
            />
          </View>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modal2Visible}
        onRequestClose={() => {
          () => setModal2();
        }}>
        <View style={styles.modalView}>
          <DatePicker onSelectedChange={date => setSelectedDate(date)} />
          <AppButton
            title="Ok"
            buttonStyle={button.Wrap}
            textStyle={button.Text}
            onPress={() => setModal2()}>
            <Text style={styles.textStyle}>Hide Modal</Text>
          </AppButton>
        </View>
      </Modal>
      <AppButton
        title="Submit"
        buttonStyle={button.Wrap}
        textStyle={button.Text}
        onPress={() => addOrder()}
      />

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          () => setModal();
        }}>
        <View style={styles.modalViewSM}>
          <View style={styles.modalCenter}>
            {orderConflict ? (
              <Text style={textstyle.error}>Conflict</Text>
            ) : (
              <View>
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
                  {refill ? (
                    <Text style={styles.Text}>YES</Text>
                  ) : (
                    <Text style={styles.Text}>NO</Text>
                  )}
                </View>
              </View>
            )}

            <AppButton
              title="Ok"
              buttonStyle={button.Wrap}
              textStyle={button.Text}
              onPress={() => setModal()}
            />
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
