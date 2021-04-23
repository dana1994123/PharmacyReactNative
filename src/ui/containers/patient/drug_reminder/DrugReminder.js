import React, {useState, useContext, useEffect} from 'react';
import {StyleSheet, ScrollView, View, Text, Modal} from 'react-native';
import {layout} from '../../../../res/styles/global';
import {IconButton} from 'react-native-paper';
import DrugReminderObj from '../../../../models/DrugReminderObj';
import R from '../../../../res/R';
import Reminder from './Reminder';
import TextInputAlarm from '../../../components/TextInputAlarm';
import DayPicker from '../../../components/DayPicker';
import TimePicker from '../../../components/TimePicker';
import Button from '../../../components/Button';
import SwitcherInput from '../../../components/SwitcherInput';
import {db} from '../../../../database/config';
import moment from 'moment';
import {UserContext} from '../../../../utilites/providers/UserProvider';

export default function RenderdrugReminder() {
  //fetch the list of drug reminder from the fire base & render it
  //if there is no drug reminder render a Text
  const [modalVisible, setmodalVisible] = useState(false);
  const [drugName, setDrugName] = useState('');
  const [drugDisc, setDrugDisc] = useState('');
  const [startH, setstartH] = useState(moment().format('LT'));
  const [eError, seteError] = useState('');
  const [repeat, setRepeat] = useState(false);
  const [alarm, setAlarm] = useState(new DrugReminderObj());
  const [mode, setMode] = useState('CREATE');
  const {userInfo} = useContext(UserContext);
  const [listReminder, setListReminders] = useState([]);
  const [count, setCount] = useState(0);
  const [pm, setPm] = useState('pm');

  useEffect(() => {
    fetchReminders();
  }, [count]);
  //fetch the reminder from db &add it to the list
  const fetchReminders = () => {
    db.collection('Reminders')
      .where('userEmail', '==', userInfo.email)
      .limit(5)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          listReminder.push(doc.data());
          console.log(doc.data());
          console.log(listReminder.length);
          console.log(count);
        });
      })
      .catch(console.log('there is an error occur'));
  };

  const addReminder = () => {
    //open new fragment and create a drug reminder object
    console.log('plus button been clicked');
    setmodalVisible(!modalVisible);
  };

  function update(updates) {
    const a = Object.assign({}, alarm);
    for (let u of updates) {
      console.log(u);
      a[u[0]] = u[1];
    }
    setAlarm(a);
  }

  const setToggle = () => {
    setRepeat(!repeat);
  };

  const validationReminder = () => {
    //check the drug name
    if (drugName === '') {
      seteError('Please insert Drug Name');
    } else if (drugDisc === '') {
      seteError('Please insert Drug Disc');
    } else {
      seteError('');
      onSave();
    }
    //check the drug Description
    //then call the save method
  };

  resetFeild = () => {
    setDrugName('');
    setDrugDisc('');
    setstartH(moment().format('LT'));
    seteError('');
    setRepeat(false);
  };
  async function onSave() {
    console.log(alarm.hour);
    console.log(alarm.minutes);
    console.log(alarm.title);
    console.log(alarm.description);
    alarm.userEmail = userInfo.email;
    console.log(alarm.userEmail);
    setmodalVisible(!modalVisible);
    if (mode === 'CREATE') {
      //save the reminder to this user
      alarm.drugName = drugName;
      alarm.description = drugDisc;
      alarm.repeat = repeat;
      alarm.userEmail = userInfo.email;
      alarm.pm = pm;

      db.collection('Reminders')
        .add(alarm)
        .then(() => {
          console.log('Reminders added!');
        });
      //add it to the list
      listReminder.push(alarm);
      resetFeild();
    }
    //setListReminders([]);
    //fetchReminders();
  }

  async function onCancel() {
    setmodalVisible(!modalVisible);
  }

  return (
    <View>
      <ScrollView>
        <View style={styles.icons}>
          <IconButton
            icon="plus"
            color={R.colors.orange}
            size={40}
            onPress={() => addReminder()}
          />
        </View>
        <View style={layout.centered}>
          {listReminder.length != 0 ? (
            //send the list of reminder and render it
            <Reminder reminders={listReminder} />
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
            <TimePicker
              onChange={(h, m) =>
                update([
                  ['hour', h],
                  ['minutes', m],
                ])
              }
              hour={alarm.hour}
              minutes={alarm.minutes}
            />
            <View styles={styles.inputsContainer}>
              <TextInputAlarm
                description={'Drug Name'}
                style={styles.textInput}
                onChangeText={v => setDrugName(v)}
                value={drugName}
              />

              <TextInputAlarm
                description={'Description'}
                style={styles.textInput}
                onChangeText={v => setDrugDisc(v)}
                value={drugDisc}
              />

              <SwitcherInput
                trackColor={{false: R.colors.Grey, true: R.colors.secondary}}
                thumbColor={repeat ? R.colors.white : R.colors.lightGrey}
                description={'Repeat'}
                value={repeat}
                onChange={() => setToggle()}
              />
              {repeat && (
                //show it if we only change the repeat status
                <DayPicker
                  onChange={v => update([['days', v]])}
                  activeDays={'sunday'}
                />
              )}
            </View>
            <View style={styles.buttonContainer}>
              <Button onPress={onCancel} title={'Cancel'} />
              <Button fill={true} onPress={validationReminder} title={'Save'} />
            </View>
            <Text style={styles.error}>{eError}</Text>
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
    margin: '3%',
    marginTop: '10%',
    marginBottom: '10%',
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
    elevation: 4,
  },
  txtHeader: {
    marginTop: '10%',
    fontSize: 20,
    alignSelf: 'flex-start',
    color: R.colors.Grey,
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
  inputsContainer: {
    width: '100%',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  error: {
    color: R.colors.red,
  },
});
