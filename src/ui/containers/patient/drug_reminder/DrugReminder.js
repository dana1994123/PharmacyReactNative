import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import {form, layout, button, header} from '../../../../res/styles/global';
import {IconButton} from 'react-native-paper';
import {Card, Divider} from 'react-native-elements';
import {Directions} from 'react-native-gesture-handler';
import DrugReminderObj from '../../../../models/DrugReminderObj';
import R from '../../../../res/R';
import Reminder from './Reminder';
import {AppButton} from '../../../components/AppButton';
export default function RenderdrugReminder() {
  //fetch the list of drug reminder from the fire base & render it
  //if there is no drug reminder render a Text
  const [modalVisible, setmodalVisible] = useState(false);
  const [drugName, setDrugName] = useState('');
  const [drugDose, setDrugDose] = useState('');
  const [startDate, setstartDate] = useState('');
  const [endDate, setendDate] = useState('');
  const [time, setTime] = useState('');

  //fetch the reminder from db &add it to the list
  const listReminder = [];

  const addReminder = () => {
    //open new fragment and create a drug reminder object
    console.log('plus button been clicked');

    setmodalVisible(!modalVisible);
  };
  const handleSave = () => {
    //validate the information and create a drug reminder object for this specific user
    //& save to the new db
    setmodalVisible(!modalVisible);
    alert('The reminder has been Added');
  };

  const handleCancel = () => {
    setmodalVisible(!modalVisible);
  };

  return (
    <View>
      <ScrollView>
        <View style={styles.icons}>
          <IconButton
            icon="plus"
            color={R.colors.primary}
            size={40}
            onPress={() => addReminder()}
          />
        </View>
        <View>
          {listReminder.length > 0 ? (
            //send the list of reminder and render it
            <Reminder />
          ) : (
            <Text style={styles.txtHeader}>
              There is no Drug Reminder Added
            </Text>
          )}
        </View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => this.handlePress(!modalVisible)}>
          <View style={styles.modalView}>
            {/* render the clickable article in this Model */}
            <Text>render the specific article that has been clicked</Text>
            <AppButton
              title="Save"
              buttonStyle={button.Wrap}
              textStyle={button.Text}
              onPress={() => handleSave()}
            />
            <AppButton
              title="Cancel"
              buttonStyle={button.Wrap}
              textStyle={button.Text}
              onPress={() => handleCancel()}
            />
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  drugImg: {
    height: 70,
    width: 70,
  },
  text: {
    marginBottom: 10,
  },
  drugInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  dividerStyle: {
    backgroundColor: R.colors.Grey,
  },
  subText: {
    margin: 5,
    fontStyle: 'italic',
    color: R.colors.black,
    fontSize: 15,
  },
  cardStyle: {
    width: 370,
  },
  d: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 25,
  },
  icons: {
    flex: 1,
    alignItems: 'flex-end',
  },
  modalView: {
    flex: 1,
    margin: 10,
    marginTop: 95,
    marginBottom: 10,
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
  txtHeader: {
    marginTop: '10%',
    fontSize: 20,
    alignSelf: 'flex-start',
    color: R.colors.purple,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  input: {
    borderWidth: 4,
    borderColor: R.colors.primary,
    height: '20%',
    width: '60%',
  },
  input2: {
    borderWidth: 4,
    borderColor: R.colors.primary,
    height: '20%',
    width: '20%',
  },
  labelTxt: {
    marginBottom: '25%',
    fontSize: 18,
  },
  label: {
    alignSelf: 'flex-start',
  },
  button: {
    backgroundColor: R.colors.primary,
    marginLeft: '10%',
    marginBottom: '5%',
    height: 48,
    width: '30%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
