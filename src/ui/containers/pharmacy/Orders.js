import React, {useState, useContext, useCallback} from 'react';
import {View, Text, Modal, StyleSheet, Image} from 'react-native';
import {layout, button, textstyle} from '../../../res/styles/global';
import {AppButton} from '../../components/AppButton';
import R from '../../../res/R';
import {db} from '../../../database/config';
import {UserContext} from '../../../utilites/providers/UserProvider';
import {ScrollView} from 'react-native-gesture-handler';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [modalVisible, setModalVisible] = useState('');
  const {userInfo} = useContext(UserContext);

  const [item, setItem] = useState({id: 1, order: {fileUri: ''}});

  const fetchOrders = useCallback(() => {
    console.log(userInfo.phoneNumber);
    setOrders([]);
    db.collection('OrderRequests')
      .where('phone', '==', userInfo.phoneNumber)
      .where('filled', '!=', 'true')
      .get()
      .then(querySnapshot => {
        let data = [];
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, ' => ', doc.data());
          //const data = userConverter.fromFirestore(doc.id, doc.data());
          const obj = {index: orders.length, id: doc.id, order: doc.data()};
          data = [...data, obj];
        });
        setOrders(data);
        console.log(data);
      })
      .catch(error => {
        console.log('Error getting documents: ', error);
      });
    console.log(orders);
  }, [orders, userInfo.phoneNumber]);

  const markComplete = () => {
    const filled = true;
    db.collection('OrderRequests')
      .doc(item.id)
      .update({
        filled,
      })
      .catch(error => {
        console.log('Error getting documents: ', error);
      });
  };

  const showOrder = item => {
    setItem(item);
    setModalVisible(true);
  };

  let outputOrders = [];
  orders.forEach((item, index) => {
    outputOrders.push(
      <View style={layout.row} key={index}>
        <View style={layout.centered}>
          <Text style={styles.rowtext}>{'ID: ' + item.id}</Text>
        </View>

        <AppButton
          title={'Show Order'}
          onPress={() => showOrder(item)}
          buttonStyle={styles.Wrap}
          textStyle={styles.BText}
        />
      </View>,
    );
  });

  return (
    <View style={layout.fullScreen}>
      <View style={layout.fullScreen}>
        <View style={styles.wide}>
          <View>
            <AppButton
              title="Fetch Order"
              onPress={() => fetchOrders()}
              buttonStyle={button.Wrap}
              textStyle={button.Text}
            />
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
          () => setModalVisible(false);
        }}>
        <View style={styles.modalViewSM}>
          <View style={styles.modalCenter}>
            <View>
              <Text style={styles.okText}>Submitted</Text>
              <View style={styles.row_modal}>
                <Text style={styles.Text}>ID:</Text>
                <Text style={styles.Text}>{item.id}</Text>
              </View>
              <Image
                style={styles.avatar}
                source={{uri: item.order.filePath}}
              />
            </View>
            <AppButton
              title="Mark Complete"
              buttonStyle={button.Wrap}
              textStyle={button.Text}
              onPress={() => markComplete()}
            />
            <AppButton
              title="Ok"
              buttonStyle={button.Wrap}
              textStyle={button.Text}
              onPress={() => setModalVisible(false)}
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
  row_modal: {
    width: 200,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 5,
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
  modalCenter: {
    marginLeft: 10,
    marginRight: 10,
    padding: 50,
    backgroundColor: R.colors.white,
    elevation: 8,
    borderRadius: 10,
    width: '110%',
  },
  avatar: {
    width: 300,
    height: 300,
    borderWidth: 4,
    borderColor: R.colors.white,
    alignSelf: 'center',
    marginTop: '5%',
  },
  Wrap: {
    backgroundColor: R.colors.primary,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    elevation: 8,
    width: '25%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  BText: {
    fontSize: 10,
    color: R.colors.white,
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  rowtext: {
    fontSize: 15,
    width: 200,
  },
  wide: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
});
