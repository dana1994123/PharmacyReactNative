import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import {form, layout, button, textstyle} from '../../../res/styles/global';
import {AppButton} from '../../components/AppButton';
import R from '../../../res/R';
import {db} from '../../../database/config';
import {userConverter} from '../../../utilites/firestoreConverters';

export default function PromoteUser() {
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);

  const search = () => {
    setUsers([]);
    db.collection('users')
      .where('fullName', '==', name)
      .where('role', '!=', 'pharmacist')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = userConverter.fromFirestore(doc.data());
          setUsers([
            ...users,
            {
              index: users.length,
              id: doc.id,
              user: data,
            },
          ]);
        });
      })
      .catch(error => {
        console.log('Error getting documents: ', error);
      });
  };

  const Promote = item => {
    db.collection('users').doc(item.id).update({
      role: 'pharmacist',
    });
  };

  let userList = [];
  users.forEach((item, index) => {
    userList.push(
      <View style={layout.row} key={index}>
        <View style={layout.centered}>
          <Text>
            {'Name: ' + item.user.fullName + ' ' + 'Email: ' + item.user.email}
          </Text>
        </View>

        <AppButton
          title={'Promote'}
          onPress={() => Promote(item)}
          buttonStyle={button.Wrap}
          textStyle={button.Text}
        />
      </View>,
    );
  });
  return (
    <View style={layout.fullScreen}>
      <View style={layout.centeredFullScreen}>
        <View style={styles.box}>
          <Text style={textstyle.h6}>Find User</Text>
          <TextInput
            style={form.inputGrey}
            selectionColor={R.colors.primary}
            onChangeText={text => setName(text)}
            placeholder="User Name"
          />
          <AppButton
            title="Search"
            buttonStyle={styles.buttonContainer}
            textStyle={button.Text}
            onPress={() => search()}
          />
          <View>
            <Text style={textstyle.h6}>Found Users:</Text>
            {userList}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  optionImg: {
    width: 40,
    height: 50,
    borderRadius: 10,
    position: 'absolute',
    marginTop: 25,
    marginLeft: '70%',
  },
  optionTxt: {
    fontWeight: '600',
    fontSize: 18,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: R.colors.primary,
    height: 40,
    width: 160,
    margin: 5,
    borderWidth: 1,
    borderColor: '#00000000',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  box: {
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: R.colors.white,
    elevation: 8,
    borderRadius: 10,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
  },
  box1: {
    //backgroundColor: R.colors.blue,
    height: '80%',
    margin: 30,
  },
});
