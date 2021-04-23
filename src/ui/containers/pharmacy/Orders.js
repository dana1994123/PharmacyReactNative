import React, {useState, useContext, useEffect} from 'react';
import {View, Text, Modal, StyleSheet, Image} from 'react-native';
import {layout, button, textstyle} from '../../../res/styles/global';
import {AppButton} from '../../components/AppButton';
import R from '../../../res/R';
import {db} from '../../../database/config';
import {userConverter} from '../../../utilites/firestoreConverters';
import {UserContext} from '../../../utilites/providers/UserProvider';
import {ScrollView} from 'react-native-gesture-handler';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [modalVisible, setModalVisible] = useState('');
  const {userInfo} = useContext(UserContext);

  const [fileUri, setFileUri] = useState('');

  const fetchOrders = () => {
    setOrders([]);
    db.collection('orders')
      .where('phoneNumber', '==', userInfo.phoneNumber)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, ' => ', doc.data());
          const data = userConverter.fromFirestore(doc.id, doc.data());
          setOrders([
            ...orders,
            {
              index: orders.length,
              id: doc.id,
              order: data,
            },
          ]);
        });
      })
      .catch(error => {
        console.log('Error getting documents: ', error);
      });
  };

  const deleteOrder = () => {
    //delete an Order here
  };

  useEffect(() => {
    // fetchOrders();
  });

  const showOrder = () => {};

  let outputOrders = [];
  orders.forEach((item, index) => {
    outputOrders.push(
      <View style={layout.row} key={index}>
        <View style={layout.centered}>
          <Text>
            {'Name: ' + item.user.fullName + ' ' + 'Email: ' + item.user.email}
          </Text>
        </View>

        <AppButton
          title={'Show Order'}
          onPress={() => showOrder(item)}
          buttonStyle={button.Wrap}
          textStyle={button.Text}
        />
      </View>,
    );
  });
  return (
    <View style={layout.fullScreen}>
      <View style={layout.centeredFullScreen}>
        <View>
          <View>
            <Text style={textstyle.h6}>Orders:</Text>
            <ScrollView>{outputOrders}</ScrollView>
          </View>
        </View>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          () => setModalVisible();
        }}>
        <View style={styles.modalViewSM}>
          <View style={styles.modalCenter}>
            <Text style={styles.okText}>Submitted</Text>
            <View style={styles.row_modal}>
              <Text style={styles.Text}>Medicine:</Text>
              {/* <Text style={styles.Text}>{medName}</Text> */}
              <Image source={{uri: fileUri}} style={styles.image} />
            </View>
            )}
            <AppButton
              title="Ok"
              buttonStyle={button.Wrap}
              textStyle={button.Text}
              onPress={() => setModalVisible(false)}
            />
            <AppButton
              title="Delete"
              buttonStyle={button.Wrap}
              textStyle={button.Text}
              onPress={() => deleteOrder()}
            />
          </View>
        </View>
      </Modal>
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
  image: {},
});
