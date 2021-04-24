import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, View, Image, Text} from 'react-native';
import {AppButton} from '../../components/AppButton';
import {layout, header} from '../../../res/styles/global';
import R from '../../../res/R';
import EditProfile from './EditProfile';
import Settings from '../common/Settings';
import {UserContext} from '../../../utilites/providers/UserProvider';
import PromoteUser from './PromoteUser';
import Orders from './Orders';
import {AuthContext} from '../../../navigation/AuthProvider';
import AddCustomer from './AddCustomer';

const Stack = createStackNavigator();

export default function Home() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: R.colors.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name={'Home'} component={HomeScreen} />
      <Stack.Screen name={'EditProfile'} component={EditProfile} />
      <Stack.Screen name={'Settings'} component={Settings} />
      <Stack.Screen name={'PromoteUser'} component={PromoteUser} />
      <Stack.Screen name={'Orders'} component={Orders} />
      <Stack.Screen name={'AddCustomer'} component={AddCustomer} />
    </Stack.Navigator>
  );
}

const HomeScreen = ({navigation}) => {
  const {userInfo} = useContext(UserContext);
  const {logout} = useContext(AuthContext);

  return (
    <View style={layout.fullScreen}>
      <View style={header.bk}>
        <View style={styles.box1}>
          <Image
            style={header.avatar}
            source={
              userInfo.profileURI === null
                ? require('../../../../assets/images/default.png')
                : {uri: userInfo.profileURI}
            }
          />
          <Text style={header.userName}>
            {'Welcome, ' + userInfo.fullName + '!'}
          </Text>
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.row}>
          <AppButton
            title="Fill Order"
            buttonStyle={styles.buttonContainer}
            textStyle={styles.optionTxt}
            onPress={() => navigation.navigate('FillOrder')}
          />
          <AppButton
            title="Add Patient"
            buttonStyle={styles.buttonContainer}
            textStyle={styles.optionTxt}
            onPress={() => navigation.navigate('AddCustomer')}
          />
        </View>
        <View style={styles.row}>
          <AppButton
            title="Edit Profile"
            buttonStyle={styles.buttonContainer}
            textStyle={styles.optionTxt}
            onPress={() => navigation.navigate('EditProfile')}
          />
          <AppButton
            title="Orders"
            buttonStyle={styles.buttonContainer}
            textStyle={styles.optionTxt}
            onPress={() => navigation.navigate('Orders')}
          />
        </View>
        <View style={styles.row}>
          <AppButton
            title="Promote User"
            buttonStyle={styles.buttonContainer}
            textStyle={styles.optionTxt}
            onPress={() => navigation.navigate('PromoteUser')}
          />
          <AppButton
            title="Log Out"
            buttonStyle={styles.buttonContainer}
            textStyle={styles.optionTxt}
            onPress={() => logout()}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  optionImg: {
    width: 40,
    height: 50,
    borderRadius: 10,
    position: 'absolute',
    marginTop: 25,
    marginLeft: '70%',
  },
  optionTxt: {
    fontWeight: '600',
    fontSize: 18,
    color: R.colors.white,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: R.colors.primary,
    height: 60,
    width: 160,
    margin: 5,
    borderWidth: 1,
    borderColor: '#00000000',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    borderRadius: 5,
  },
  box: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: -90,
    backgroundColor: R.colors.white,
    elevation: 8,
    borderRadius: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  box1: {
    //backgroundColor: R.colors.blue,
    height: '80%',
    margin: 30,
  },
});
