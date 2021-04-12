import React, {useState, useContext, useEffect} from 'react';
import {View, Text} from 'react-native';
import {form, layout, button, textstyle} from '../../../res/styles/global';
import {AppButton} from '../../components/AppButton';
import R from '../../../res/R';
import {db} from '../../../database/config';
import {userConverter} from '../../../utilites/firestoreConverters';
import {UserContext} from '../../../utilites/providers/UserProvider';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  const {userInfo} = useContext(UserContext);

  const fetchOrders = () => {
    setOrders([]);
    db.collection('orders')
      .where('pharmacist', '==', 'BOB')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, ' => ', doc.data());
          const data = userConverter.fromFirestore(doc.data());
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
          title={'Promote'}
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
            {outputOrders}
          </View>
        </View>
      </View>
    </View>
  );
}
