import React from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Patient from "../../../models/patient";
import R from "../../../res/R";
import PHeader from "./PHeader";
import UpdateProfile from "./UpdateProfile";
import Ppharmacy from "./Ppharmacy";
import AddPrescription from "./AddPrescription";
import Clock from "./drug_reminder/Clock";
import FamilyDr from "./FamilyDr";
import HealthInsurance from "./HealthInsurance";

const Stack = createStackNavigator();

export default function Pprofile() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: R.colors.primary,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name={"Profile"} component={Profile}></Stack.Screen>
      <Stack.Screen name={"Drug Reminder"} component={Clock}></Stack.Screen>
      <Stack.Screen
        name={"prescription"}
        component={AddPrescription}
      ></Stack.Screen>
      <Stack.Screen name={"Pharmacy"} component={Ppharmacy}></Stack.Screen>
      <Stack.Screen name={"FamilyDr"} component={FamilyDr}></Stack.Screen>
      <Stack.Screen
        name={"UpdateProfile"}
        component={UpdateProfile}
      ></Stack.Screen>
      <Stack.Screen
        name={"HealthInsurance"}
        component={HealthInsurance}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
const Profile = ({ navigation }) => {
  //get the patient information from the database and render it here
  const currPatient = new Patient();
  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          {/* user picture and name */}
          <View>
            <View>
              <View style={styles.header}>
                <TouchableOpacity onPress={() => nevigatetoCamera()}>
                  {/* click and give access to the camera to take picture */}
                  <Image
                    style={styles.avatar}
                    source={require("../../../../assets/images/default.png")}
                  />
                  <Text style={styles.userName}>{currPatient.fullName}</Text>
                  <Text style={styles.sub}>
                    {currPatient.location.city}, {currPatient.location.country}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.body}>
                <View style={styles.row}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("prescription")}
                    style={styles.buttonContainer}
                  >
                    <Image
                      style={styles.optionImg}
                      source={require("../../../../assets/images/61122.png")}
                    />
                    <Text style={styles.optionTxt}>
                      Perscription {"\n"} History
                    </Text>
                  </TouchableOpacity>
                  {/* pharmacy */}
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Pharmacy")}
                    style={styles.buttonContainer}
                  >
                    <Image
                      style={styles.optionImg}
                      source={require("../../../../assets/images/pha.png")}
                    />
                    <Text style={styles.optionTxt}>
                      {"       "}My {"\n"} Pharmacy{" "}
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.row}>
                  {/* update profile */}
                  <TouchableOpacity
                    onPress={() => navigation.navigate("UpdateProfile")}
                    style={styles.buttonContainer}
                  >
                    <Image
                      style={styles.optionImg}
                      source={require("../../../../assets/images/update.jpg")}
                    />
                    <Text style={styles.optionTxt}>Update {"\n"} Profile</Text>
                  </TouchableOpacity>

                  {/* health insurance */}
                  <TouchableOpacity
                    onPress={() => navigation.navigate("HealthInsurance")}
                    style={styles.buttonContainer}
                  >
                    <Image
                      style={styles.optionImg}
                      source={require("../../../../assets/images/health.png")}
                    />
                    <Text style={styles.optionTxt}>
                      Health {"\n"} Insurance
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.row}>
                  {/* drug reminder */}
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Clock")}
                    style={styles.buttonContainer}
                  >
                    <Image
                      style={styles.optionImg}
                      source={require("../../../../assets/images/reminder.png")}
                    />
                    <Text style={styles.optionTxt}>Drug {"\n"} Reminder</Text>
                  </TouchableOpacity>
                  {/* family doctor */}
                  <TouchableOpacity
                    onPress={() => navigation.navigate("FamilyDr")}
                    style={styles.buttonContainer}
                  >
                    <Image
                      style={styles.optionImg}
                      source={require("../../../../assets/images/dr.jpg")}
                    />
                    <Text style={styles.optionTxt}>Family {"\n"} Doctor</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: R.colors.blueGrey,
    height: "38%",
    alignContent: "center",
    alignItems: "center",
  },
  optionImg: {
    width: 40,
    height: 50,
    borderRadius: 10,
    position: "absolute",
    marginTop: 25,
    marginLeft: "70%",
  },
  optionTxt: {
    marginLeft: "10%",
    fontWeight: "600",
    fontSize: 18,
    marginTop: "15%",
  },
  sub: {
    fontSize: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  avatar: {
    width: 100,
    height: 80,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: R.colors.white,
    alignSelf: "center",
    position: "absolute",
    marginTop: "5%",
  },
  body: {
    marginTop: "6%",
  },

  buttonContainer: {
    height: 100,
    width: 170,

    borderWidth: 1,
    borderColor: R.colors.white,
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: R.colors.lightGrey,
  },
  userName: {
    marginTop: "28%",
    fontSize: 30,
    fontWeight: "600",
    color: R.colors.black,
  },
});
