import React, {useState} from 'react';
import {
  StyleSheet,
  Modal,
  Text,
  View,
  TextInput,
  Pressable,
} from 'react-native';
import {AppButton} from '../../components/AppButton';
import R from '../../../res/R';
import {DateInput} from '../../components/DateInput';
import {form, layout, button, textstyle} from '../../../res/styles/global';
import {db} from '../../../database/config';
import {firebase} from '../../../database/config';

export default function EnterOrder({navigation}) {
  const [custName, setCustName] = useState('');
  const [healthCard, setHealthCard] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [modalVisible, setModalVisible] = useState('');
  const [date, setDate] = useState('');

  const addCustomer = () => {
    db.collection('Customers')
      .add({
        custName,
        healthCard,
        date,
      })
      .then(docRef => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(error => {
        console.error('Error adding document: ', error);
      });
    setModal();
    navigation.goBack();
  };

  const saveObject = () => {
    const d = new Date(year, month, day);
    setDate(d.toString());
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
          <DateInput setDay={setDay} setMonth={setMonth} setYear={setYear} />
        </View>

        <AppButton
          title="Ok"
          buttonStyle={styles.custButtonwrap}
          textStyle={button.Text}
          onPress={() => saveObject()}
        />
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          () => setModal();
        }}>
        <Pressable style={styles.modalViewSM} onPress={() => setModal()}>
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
              <Text style={styles.Text}>{date}</Text>
            </View>
            <View styles={styles.row}>
              <View styles={styles.inputWrap}>
                <AppButton
                  title="Cancel"
                  buttonStyle={button.Wrap}
                  textStyle={button.Text}
                  onPress={() => setModal()}
                />
              </View>
              <View styles={styles.inputWrap}>
                <AppButton
                  title="Ok"
                  buttonStyle={button.Wrap}
                  textStyle={button.Text}
                  onPress={() => addCustomer()}
                />
              </View>
            </View>
          </View>
        </Pressable>
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
  custButtonwrap: {
    backgroundColor: R.colors.primary,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    elevation: 8,
    width: 250,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  inputWrap: {
    flex: 1,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 10,
    backgroundColor: '#FF0000',
  },
});
