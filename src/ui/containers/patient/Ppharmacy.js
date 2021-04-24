import React, {Component, useContext, useState, useEffect} from 'react';
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
import Patient from '../../../models/patient';
import Pharmacy from '../../../models/Pharmacy';

export default function Ppharmacy() {
  const [disabled, setdisabled] = useState(false);
  const [phamName, setphamName] = useState('');
  const [phaLoc, setphaLoc] = useState('');
  const [phaEmail, setphaEmail] = useState('');
  const [phaNum, setphaNum] = useState('');
  const [count, setCount] = useState(0);
  const {userInfo} = useContext(UserContext);
  const [pham, setPham] = useState(new Pharmacy());
  pham.userEmail = userInfo.email;

  const updatePharmacy = () => {
    setdisabled(true);
    setCount(2);
    console.log(pham.phaName);
    setphamName(pham.phaName);
    setphaLoc(pham.phlocation);
    setphaEmail(pham.phEmails);
    setphaNum(pham.phphoneNumber);
  };
  savePharmacyInfo = () => {
    setdisabled(false);
    //update the firebase with these information
    db.collection('pharmacy')
      .doc(userInfo.email)
      .update({
        docID: pham.docID,
        phEmail: phaEmail,
        phaName: phamName,
        phlocation: phaLoc,
        phphoneNumber: phaNum,
        userEmail: userInfo.email,
      })
      .catch(() => {
        console.log('catch it');
      });

    alert('Pharmacy information been updated');
  };

  //check if user has pharmacy or not and added one
  useEffect(() => {
    db.collection('pharmacy')
      .where('userEmail', '==', userInfo.email)
      .get()
      .then(doc => {
        if (doc.empty) {
          console.log('user doesnt have pharmacy profile');
          db.collection('pharmacy')
            .doc(userInfo.email)
            .set(pham)
            .then(doc => {
              pham.docID = doc.id;
              setPham(doc.data());
              console.log(doc.id);
              console.log('just added');
            })
            .catch(() => {
              console.log('jjk');
            });
        } else {
          pham.docID = doc.id;
          setPham(doc.data());
          console.log('user has a pharmacy');
        }
      })
      .catch(d => {
        console.log('no pham');
        console.log(pham.docID);
      });
  }, [count]);

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
          <View>
            <TextInput
              editable={disabled}
              style={styles.inputGrey}
              selectionColor={R.colors.primary}
              onChangeText={text => setphamName(text)}
              placeholder="Pharmacy Name"
              value={phamName}
            />
            <TextInput
              editable={disabled}
              style={styles.inputGrey}
              selectionColor={R.colors.primary}
              onChangeText={text => setphaLoc(text)}
              placeholder="Pharmacy Location"
              value={phaLoc}
            />
            <TextInput
              editable={disabled}
              style={styles.inputGrey}
              selectionColor={R.colors.primary}
              onChangeText={text => setphaEmail(text)}
              placeholder="Pharmacy Email"
              value={phaEmail}
            />
            <TextInput
              style={styles.inputGrey}
              editable={disabled}
              selectionColor={R.colors.primary}
              onChangeText={text => setphaNum(text)}
              placeholder="Pharmacy Number"
              value={phaNum}
            />
          </View>
        </View>
        {!disabled ? (
          <TouchableOpacity style={styles.btn1} onPress={() => clickDisable()}>
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
