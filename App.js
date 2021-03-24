import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Entry from './src/ui/containers/pharmacy/Entry';
import R from './src/res/R';
import {Dimensions} from 'react-native';
import SignUp from './src/ui/containers/common/SignUp';
import LogIn from './src/ui/containers/common/Login';
import News from './src/ui/containers/common/news/News';
import {AppButton} from './src/ui/components/AppButton';
import Home from './src/ui/containers/pharmacy/Home';
import MainPage from './src/ui/containers/patient/PatientEntry';
import PatientEntry from './src/ui/containers/patient/PatientEntry';
import LogoLoad from './src/ui/containers/common/LogoLoad';
import DrugReminder from './src/ui/containers/patient/drug_reminder/DrugReminder';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NavPatient from './src/ui/containers/patient/NavPatient';
import Clock from './src/ui/containers/patient/drug_reminder/Clock';
import RenderdrugReminder from './src/ui/containers/patient/drug_reminder/DrugReminder';
import Support from './src/ui/containers/patient/Support';
import AddPrescription from './src/ui/containers/patient/AddPrescription';
const Stack = createStackNavigator();

export default class App extends Component {
  state = {
    appReady: false,
    userToken: null,
    isSignout: false,
  };

  constructor() {
    super();
    this._image = require('./assets/images/Logo_10.png');
    setTimeout(() => {
      this.setState({appReady: true});
    }, 3000);
  }

  render() {
    if (!this.state.appReady) {
      return <LogoLoad></LogoLoad>;
    }
    return (
      <NavigationContainer style={styles.root} mode="modal">
        <Stack.Navigator>
          {this.state.userToken == null ? (
            <>
              <Stack.Screen
                name="Login"
                component={LogIn}
                options={{
                  title: R.strings.appName,
                  headerStyle: {
                    backgroundColor: R.colors.primary,
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}></Stack.Screen>
              <Stack.Screen
                name="Sign Up"
                component={SignUp}
                options={{
                  title: R.strings.appName,
                  animationTypeForReplace: this.state.isSignout
                    ? 'pop'
                    : 'push',
                  headerStyle: {
                    backgroundColor: R.colors.primary,
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}></Stack.Screen>
            </>
          ) : (
            <Stack.Screen
              name="Pharmacy"
              component={PatientEntry}
              options={{
                title: R.strings.appName,
                headerStyle: {
                  backgroundColor: R.colors.primary,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}></Stack.Screen>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: R.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  loadingBackgroundStyle: {
    backgroundColor: 'rgba(125, 125, 255, 1)',
  },
});
