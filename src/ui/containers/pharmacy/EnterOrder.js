import React, {useState} from 'react';
import {StyleSheet, Modal, Text, View, TextInput, Switch} from 'react-native';
import {AppButton} from '../../components/AppButton';
import R from '../../../res/R';
import DatePicker from 'react-native-modern-datepicker';
import {form, layout, button, textstyle} from '../../../res/styles/global';
import {db} from '../../../database/config';
import {firebase} from '../../../database/config';
import PrescriptionOrder from '../../../models/PrescriptionOrder';
import {orderCoverter} from '../../../utilites/firestoreConverters';

export default function EnterOrder({route, navigation}) {
  const [selectedDate, setSelectedDate] = useState('');
  const [durationset, setDurationSet] = useState(false);
  const [refill, setRefill] = useState('');
  const [medName, setMedName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [modalVisible, setModalVisible] = useState('');
  const [modal2Visible, setModal2Visible] = useState('');
  const [orderConflict, setOrderConflict] = useState('');
  const [quantError, setQuantError] = useState('');
  const [medError, setMedError] = useState('');
  const [durError, setDurError] = useState('');
  const [errorFlag, setErrorFlag] = useState('');

  const {customer} = route.params;

  const checkOrder = Timestamp => {
    setOrderConflict(false);
    console.log('check orer called');
    db.collection('orders')
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

  const validateQuantity = () => {
    const reg = /^\d+$/;
    if (quantity === '') {
      setQuantError('Quanitity cannot be empty');
      setErrorFlag(true);
    } else if (reg.test(quantity) === false) {
      setQuantError('Quantity format INVALID');
      setErrorFlag(true);
    } else {
      setQuantError('');
      setErrorFlag(false);
    }
  };

  const validateMedName = () => {
    if (medName === '') {
      setMedError('Med Name cannot be empty');
      setErrorFlag(true);
    } else {
      setMedError('');
      setErrorFlag(false);
    }
  };

  const validateDuration = () => {
    if (selectedDate === '') {
      setDurError('Duration cannot be empty');
      setErrorFlag(true);
    } else {
      setDurError('');
      setErrorFlag(false);
    }
  };

  const confirmOrder = () => {
    validateQuantity();
    validateMedName();
    validateDuration();
    console.log('confirm order' + errorFlag);
    if (errorFlag === false) {
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  };

  const addOrder = () => {
    const uid = customer.uid;
    const pharmID = '1111';
    const Timestamp = firebase.firestore.Timestamp.fromDate(
      new Date(selectedDate),
    );
    checkOrder(Timestamp);
    if (!orderConflict && errorFlag) {
      const order = new PrescriptionOrder(
        uid,
        pharmID,
        medName,
        quantity,
        Timestamp,
        refill,
      );
      db.collection('orders')
        .add(orderCoverter.toFirestore(order))
        .then(docRef => {
          console.log('Document written with ID: ', docRef.id);
        })
        .catch(error => {
          console.error('Error adding document: ', error);
        });
      setModal();
      navigation.navigate('Home');
    }
    setModal(false);
  };

  const setToggle = () => {
    setRefill(!refill);
  };

  const setModal = () => {
    setModalVisible(!modalVisible);
  };

  const closeDatePicker = () => {
    setModal2Visible(false);
    setDurationSet(true);
  };

  const openModal2 = () => {
    setModal2Visible(true);
  };

  return (
    <View style={layout.centeredFullScreen}>
      <View style={styles.box}>
        <Text style={textstyle.h3bl}>Enter Prescription</Text>
        <View style={form.staticinputBlue}>
          <Text>{'Name: ' + customer.name}</Text>
        </View>
        <View style={form.staticinputBlue}>
          <Text>{'Card#: ' + customer.healthcard}</Text>
        </View>
        <TextInput
          style={form.inputGrey}
          selectionColor={R.colors.primary}
          onChangeText={text => setMedName(text)}
          placeholder="Medicine Name"
        />
        <Text style={textstyle.error2}>{medError}</Text>
        <TextInput
          style={form.inputGrey}
          selectionColor={R.colors.primary}
          onChangeText={text => setQuantity(text)}
          placeholder="Quantity"
        />
        <Text style={textstyle.error2}>{quantError}</Text>
        {durationset ? (
          <AppButton
            title={selectedDate}
            buttonStyle={[form.inputGrey, {justifyContent: 'flex-start'}]}
            textStyle={styles.Text}
            onPress={() => openModal2()}
          />
        ) : (
          <AppButton
            title={'Duration'}
            buttonStyle={[form.inputGrey, {justifyContent: 'flex-start'}]}
            textStyle={styles.Text}
            onPress={() => openModal2()}
          />
        )}
        <Text style={textstyle.error2}>{durError}</Text>
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
          () => closeDatePicker();
        }}>
        <View style={styles.modalView}>
          <DatePicker onSelectedChange={date => setSelectedDate(date)} />
          <AppButton
            title="Ok"
            buttonStyle={button.Wrap}
            textStyle={button.Text}
            onPress={() => closeDatePicker()}>
            <Text style={styles.textStyle}>Hide Modal</Text>
          </AppButton>
        </View>
      </Modal>

      <AppButton
        title="Submit"
        buttonStyle={button.Wrap}
        textStyle={button.Text}
        onPress={() => confirmOrder()}
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
              onPress={() => addOrder()}
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
