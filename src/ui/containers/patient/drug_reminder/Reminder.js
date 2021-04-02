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
export default function Reminder() {
  const [modalVisible, setmodalVisible] = useState(true);

  const handlePress = () => {
    setmodalVisible(!modalVisible);
  };
  const drugReminder = new DrugReminderObj();
  return (
    <View style={styles.cardStyle}>
      <Card
        featuredTitle={drugReminder.drug.dName}
        featuredTitleStyle={{
          marginHorizontal: 5,
          textShadowColor: '#00000f',
          textShadowOffset: {width: 3, height: 3},
          textShadowRadius: 3,
        }}>
        <View style={styles.d}>
          <View style={styles.drugDetails}>
            <Text style={styles.header}>
              {drugReminder.drug.dName.toUpperCase()}
            </Text>
            <Text style={styles.subText}>Drug Information</Text>
          </View>

          <Image
            style={styles.drugImg}
            source={require('../../../../../assets/images/drugs.jpg')}
          />
        </View>
        <Divider style={styles.dividerStyle} />
        <View style={styles.drugInfo}>
          <Text
            style={styles.subText}>{`Start: ${drugReminder.startDate}`}</Text>
          <Text style={styles.subText}>{`End: ${drugReminder.endDate}`}</Text>
        </View>
      </Card>
    </View>
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
