import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { IconButton, Colors } from "react-native-paper";
import { Card, Divider } from "react-native-elements";
import PHeader from "./PHeader";
import R from "../../../res/R";

export default class Support extends Component {
  state = {
    mess: "",
  };
  render() {
    const sendEmail = () => {
      //navigate to prescription history page
      console.log("Sending Email");
    };
    return (
      <View>
        <ScrollView>
          <View>
            <View style={styles.container}>
              <View style={styles.img}>
                <Image
                  style={styles.supportImg}
                  source={require("../../../../assets/images/support.png")}
                />
              </View>
              <View style={styles.row}>
                {/* call us */}
                <TouchableOpacity
                  onPress={() => nevigatetoPers()}
                  style={styles.box}
                >
                  <IconButton
                    icon="phone"
                    style={styles.optionImg}
                    color={R.colors.orange}
                    size={30}
                    // onPress={addReminder}
                  />
                </TouchableOpacity>
                {/* Email us */}
                <TouchableOpacity
                  onPress={() => nevigatetoPham()}
                  style={styles.box}
                >
                  <IconButton
                    icon="mail"
                    style={styles.optionImg}
                    color={R.colors.secondary}
                    size={30}
                    // onPress={addReminder}
                  />
                </TouchableOpacity>
                {/* location */}
                <TouchableOpacity
                  onPress={() => nevigatetoPham()}
                  style={styles.box}
                >
                  <IconButton
                    icon="map"
                    style={styles.optionImg}
                    color={R.colors.blue}
                    size={30}
                    // onPress={addReminder}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.card}>
                <Card featuredTitle="Message">
                  <Text style={styles.h1}>QUICK CONTACT</Text>
                  <Text style={styles.h4}>Message</Text>
                  <TextInput
                    placeholder="Enter Message"
                    placeholderTextColor={R.colors.Grey}
                    onChangeText={(text) => this.setState({ mess: text })}
                    value={this.state.mess}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    style={styles.input}
                  />
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => sendEmail()}
                  >
                    <Text style={styles.buttonTitle}>Send</Text>
                  </TouchableOpacity>
                  {/* <Divider style={styles.dividerStyle} /> */}
                </Card>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    backgroundColor: R.colors.primary,
  },
  name: {
    fontSize: 22,
    color: R.colors.white,
    fontWeight: "600",
  },
  optionImg: {
    width: 40,
    height: 50,
  },
  optionTxt: {
    marginLeft: "30%",
    fontWeight: "600",
    fontSize: 15,
    marginTop: "40%",
  },

  box: {
    height: "80%",
    width: "20%",
    backgroundColor: R.colors.white,
    borderRadius: 10,
    borderColor: R.colors.Grey,
    shadowColor: R.colors.black,
    shadowOpacity: 0.1,
    borderWidth: 1,
    borderColor: R.colors.lightGrey,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: "3%",
    alignContent: "center",
    alignItems: "center",
  },
  supportImg: {
    height: 245,
  },
  img: {
    alignItems: "center",
    justifyContent: "center",
    height: "40%",
    width: "100%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  input: {
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",
    borderWidth: 1.5,
    marginTop: "2%",
    borderColor: R.colors.lightGrey,
    height: "25%",
  },
  button: {
    backgroundColor: R.colors.primary,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: "20%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: "25%",
  },
  buttonTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  h1: {
    fontSize: 20,
    fontWeight: "bold",
    color: R.colors.black,
  },
  h4: {
    fontSize: 15,
    marginTop: "5%",
    color: R.colors.black,
  },
  card: {
    marginTop: 0,
    width: "100%",
    height: "37%",
  },
});
