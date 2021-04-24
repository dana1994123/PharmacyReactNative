import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {Linking} from 'react-native';
Linking.openURL(`tel:9059627785`);

// either import the whole module and call as Communications.method()
import Communications, {web, phonecall} from 'react-native-communications';

// or can now import single methods and call straight via the method name
//import  from 'react-native-communications';
// e.g. onPress={() => { web('http://www.github.com') }}

export default class RNCommunications extends Component {
  onPressCall() {
    const url = 'telprompt:5551231234';
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        return Linking.openURL(url).catch(() => null);
      }
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>j,hkjh</Text>
        <Text>kjhkjl</Text>
        <TouchableOpacity
          onPress={() => Communications.phonecall('9059627785', true)}>
          <View style={styles.holder}>
            <Text style={styles.text}>Make phonecall</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Communications.email(
              ['emailAddress1', 'emailAddress2'],
              null,
              null,
              'My Subject',
              'My body text',
            )
          }>
          <View style={styles.holder}>
            <Text style={styles.text}>Send an email</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Communications.text('0123456789')}>
          <View style={styles.holder}>
            <Text style={styles.text}>Send a text/iMessage</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Communications.web('https://github.com/facebook/react-native')
          }>
          <View style={styles.holder}>
            <Text style={styles.text}>Open react-native repo on Github</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(253,253,253)',
  },
  holder: {
    flex: 0.25,
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
  },
});
