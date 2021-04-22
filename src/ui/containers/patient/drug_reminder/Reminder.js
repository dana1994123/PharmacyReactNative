import React, {useState} from 'react';
import {render} from 'react-dom';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {Card, Divider} from 'react-native-elements';
import DrugReminderObj from '../../../../models/DrugReminderObj';
import R from '../../../../res/R';
export default function Reminder({reminders}) {
  const imageList = [
    'drugs1.png',
    'drugs2.png',
    'drugs3.png',
    'drugs4.png',
    'drugs5.png',
  ];
  const [count , setCount] = useState(0);

  let output = [];

  reminders.map((a,i) => {
    output.push(
      <View style={styles.cardStyle} key ={i} >
      <Card
        featuredTitle={a.drugName}
        featuredTitleStyle={{
          marginHorizontal: 5,
          textShadowColor: '#00000f',
          textShadowOffset: {width: 3, height: 3},
          textShadowRadius: 3,
        }}>
        <View style={styles.d}>
          <View style={styles.drugDetails}>
            <Text style={styles.header}>{a.drugName}</Text>
            <Text style={styles.subText}>{a.description}</Text>
          </View>

{/* //generate a random image and then delete it from the list */}
          <Image
            style={styles.drugImg}
            source={require('../../../../../assets/images/drugs.jpg')}
          />
        </View>
        <Divider style={styles.dividerStyle} />
        <View style={styles.drugInfo}>
          <Text style={styles.subText}>{`Days:${a.days} `}</Text>
          <Text style={styles.subText}>{`@${a.hour}:${a.minutes}`}</Text>
        </View>
      </Card>
    </View>

    )})
  
  //const drugReminder = new DrugReminderObj();
  return (
    <ScrollView>{output}</ScrollView>
    
  );
}

const styles = StyleSheet.create({
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
  drugImg: {
    height: 70,
    width: 70,
  },
  text: {
    marginBottom: 10,
  },
});
