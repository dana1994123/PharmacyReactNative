import React, {Component, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {IconButton, Colors} from 'react-native-paper';
import {Card, Divider} from 'react-native-elements';
import PHeader from './PHeader';
import R from '../../../res/R';
import {layout} from '../../../res/styles/global';

// either import the whole module and call as Communications.method()
import Communications from 'react-native-communications';

export default class Support extends Component {
  //we need to get the pharmacy phone number from the user pharmacy profile
  state = {
    mess: '',
    phamPhone: 9059627785,
    phamEmailAddress: 'shoppers@gmail.com',
  };
  componentDidMount() {
    this.setState({mess: ''});
  }
  call = () => {
    Communications.phonecall(`${this.state.phamPhone}`, true);
  };
  render() {
    return (
      <View style={layout.fullScreen}>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.sub}>Support</Text>
          </View>
          <View>
            <View style={styles.container}>
              <View style={styles.img}>
                <Image
                  style={styles.supportImg}
                  source={require('../../../../assets/images/support.png')}
                />
              </View>
              <View style={styles.row}>
                {/* call us */}
                <TouchableOpacity style={styles.box}>
                  <IconButton
                    icon="phone"
                    style={styles.optionImg}
                    color={R.colors.orange}
                    size={30}
                    onPress={() => this.call()}
                  />
                </TouchableOpacity>
                {/* Email us */}
                <TouchableOpacity
                  onPress={() =>
                    Communications.email(
                      [
                        this.state.userEmailAddress,
                        this.state.phamEmailAddress,
                      ],
                      null,
                      null,
                      'Question',
                      this.state.mess,
                    )
                  }
                  style={styles.box}>
                  <IconButton
                    icon="mail"
                    style={styles.optionImg}
                    color={R.colors.secondary}
                    size={30}
                  />
                </TouchableOpacity>
                {/* location */}
                <TouchableOpacity
                  onPress={() => nevigatetoPham()}
                  style={styles.box}>
                  <IconButton
                    icon="map"
                    style={styles.optionImg}
                    color={R.colors.yellow}
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
                    onChangeText={text => this.setState({mess: text})}
                    value={this.state.mess}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    style={styles.input}
                  />
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() =>
                      Communications.email(
                        [this.state.phamEmailAddress],
                        null,
                        null,
                        'Question',
                        this.state.mess,
                      )
                    }>
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
    backgroundColor: R.colors.primary,
    height: '18%',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  sub: {
    fontSize: 30,
    fontWeight: '600',
    color: R.colors.white,
    marginBottom:"6%"
  },
  name: {
    fontSize: 22,
    color: R.colors.white,
    fontWeight: '600',
  },
  optionImg: {
    width: 40,
    height: 50,
  },
  optionTxt: {
    marginLeft: '30%',
    fontWeight: '600',
    fontSize: 15,
    marginTop: '40%',
  },

  box: {
    height: '80%',
    width: '20%',
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
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: '3%',
    alignContent: 'center',
    alignItems: 'center',
  },
  supportImg: {
    height: 245,
    marginTop: '3%',
  },
  img: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '40%',
    width: '100%',
    marginTop: '3%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  input: {
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    borderWidth: 1.5,
    marginTop: '2%',
    borderColor: R.colors.lightGrey,
    height: '25%',
  },
  button: {
    backgroundColor: R.colors.primary,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: '20%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '25%',
  },
  buttonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: R.colors.black,
  },
  h4: {
    fontSize: 15,
    marginTop: '5%',
    color: R.colors.black,
  },
  card: {
    marginTop: 0,
    width: '100%',
    height: '37%',
  },
});
