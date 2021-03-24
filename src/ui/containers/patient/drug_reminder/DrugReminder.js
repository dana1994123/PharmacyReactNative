import React from "react";
import { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  Dimensions,
} from "react-native";
import { IconButton, Colors } from "react-native-paper";
import { Card, Divider } from "react-native-elements";

import { Directions } from "react-native-gesture-handler";
import DrugReminderObj from "../../../../models/DrugReminderObj";
import Drug from "../../../../models/Drug";
import R from "../../../../res/R";
import Patient from "../../../../models/HealthInsurance";
export default function RenderdrugReminder() {
  //fetch the list of drug reminder from the fire base & render it
  //if there is no drug reminder render a Text

  const drugReminder = new DrugReminderObj();
  const addReminder = () => {
    //open new fragment and create a drug reminder object
    console.log("plus button been clicked");
  };

  return (
    <ScrollView>
      <View style={styles.icons}>
        <IconButton
          icon="plus"
          color={R.colors.primary}
          size={30}
          onPress={addReminder}
        />
      </View>
      <View style={styles.cardStyle}>
        <Card
          featuredTitle={drugReminder.drug.dName}
          featuredTitleStyle={{
            marginHorizontal: 5,
            textShadowColor: "#00000f",
            textShadowOffset: { width: 3, height: 3 },
            textShadowRadius: 3,
          }}
        >
          <View style={styles.d}>
            <View style={styles.drugDetails}>
              <Text style={styles.header}>
                {drugReminder.drug.dName.toUpperCase()}
              </Text>
              <Text style={styles.subText}>Drug Information</Text>
            </View>

            <Image
              style={styles.drugImg}
              source={require("../../../../../assets/images/drugs.jpg")}
            />
          </View>
          <Divider style={styles.dividerStyle} />
          <View style={styles.drugInfo}>
            <Text
              style={styles.subText}
            >{`Start: ${drugReminder.startDate}`}</Text>
            <Text style={styles.subText}>{`End: ${drugReminder.endDate}`}</Text>
          </View>
        </Card>
      </View>
    </ScrollView>
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
    flexDirection: "row",
    justifyContent: "space-around",
  },
  dividerStyle: {
    backgroundColor: R.colors.Grey,
  },
  subText: {
    margin: 5,
    fontStyle: "italic",
    color: R.colors.black,
    fontSize: 15,
  },
  cardStyle: {
    width: 370,
  },
  d: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  header: {
    fontSize: 25,
  },
  icons: {
    flex: 1,
    alignItems: "flex-end",
  },
});
