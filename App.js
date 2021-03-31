import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import Entry from './src/ui/containers/pharmacy/Entry';
import R from './src/res/R';
import {Dimensions} from 'react-native';
import SignUp from './src/ui/containers/common/SignUp';
import LogIn from './src/ui/containers/common/Login';
import PatientEntry from './src/ui/containers/patient/PatientEntry';
import LogoLoad from './src/ui/containers/common/LogoLoad';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

export default class App extends Component {
  state = {
    appReady: false,
    userToken: 'aa',
    pharmToken: null,
    isSignedIn: true,
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
      return <LogoLoad />;
    }
    return (
      <NavigationContainer style={styles.root} mode="modal">
        <Stack.Navigator>
          {this.state.isSignedIn === false ? (
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
                }}
              />
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
                }}
              />
            </>
          ) : this.state.userToken ? (
            <Stack.Screen
              name="User"
              component={PatientEntry}
              options={{headerShown: false}}
            />
          ) : (
            <Stack.Screen
              name="Pharmacy"
              component={Entry}
              options={{headerShown: false}}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
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
