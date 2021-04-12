import 'react-native-gesture-handler';
import React from 'react';
import R from '../res/R';
import SignUp from '../ui/containers/common/SignUp';
import LogIn from '../ui/containers/common/Login';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function AuthStack() {
  // const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  // let routeName;

  //   const useEffect =
  //     (() => {
  //       AsyncStorage.getItem('alreadyLaunched').then(value => {
  //         if (value == null) {
  //           AsyncStorage.setItem('alreadyLaunched', 'true');
  //           setIsFirstLaunch(true);
  //         } else {
  //           setIsFirstLaunch(false);
  //         }
  //       });

  //       GoogleSignin.configure({
  //         webClientId: 'YOUR_APP_WEB_CLIENT_ID',
  //       });
  //     },
  //     []);

  // if (isFirstLaunch === null) {
  //   return null;
  // } else if (isFirstLaunch === true) {
  //   routeName = 'LogIn';
  // } else {
  //   routeName = 'Sign Up';
  // }
  return (
    <Stack.Navigator>
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
          // animationTypeForReplace: this.state.isSignout ? 'pop' : 'push',
          headerStyle: {
            backgroundColor: R.colors.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}
