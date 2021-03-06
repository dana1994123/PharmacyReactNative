import React, {useState, useContext} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from '../common/commonstyle/styles';
import SignUp from './SignUp';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {footer, layout} from '../../../res/styles/global';
import {AuthContext} from '../../../navigation/AuthProvider';
import {firebase} from '../../../database/config';
export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('vvvvvv');
  const [eError, seteError] = useState('');
  const [errorStatus, setErrorStatus] = useState(false);
  const [pError, setpError] = useState('');

  const {login} = useContext(AuthContext);

  const onSignUp = () => {
    navigation.navigate('Sign Up');
    console.log('navigate to the sign up ');
  };

  const validateEmail = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email === '') {
      seteError('Email cannot be empty');
      setErrorStatus(true);
    } else if (reg.test(email) === false) {
      seteError('Email format INVALID');
      setErrorStatus(true);
    } else {
      seteError('');
      setErrorStatus(false);
    }
  };
  const validatePass = () => {
    if (password === '') {
      setpError('Password cannot be empty');
      setErrorStatus(true);
    } else {
      setpError('');
      setErrorStatus(false);
    }
  };
  const validateCredit = () => {
    console.log("i'm here33");
    //check if the user name and password in our data base records
    // setIsFound(false);
    // setNotFound(true);
    // console.log('Search is Called');
    firebase
      .firestore()
      .collection('Users')
      .where('email', '==', email)
      .get()
      .then(querySnapshot => {
        querySnapshot.map(doc => {
          // doc.data() is never undefined for query doc snapshots
          const data = doc.data();
          console.log('Data' + data);
        });
      })
      .catch(error => {
        console.log('Error getting documents: ', error);
      });
    //call the database
    //setIsFound(true);
  };
  const onLoginPress = () => {
    // validate the user input by searching the data base
    // navigate to the home page
    try {
      validateEmail();
      validatePass();
      validateCredit();
      if (errorStatus === false) {
        //there is no error in the validation and we
        //navigate to the home page
        login(email, password);
      } else {
        alert('Invalid input! Please try again');
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <View style={layout.centeredFullScreen}>
      <KeyboardAwareScrollView
        style={{flex: 1, width: '100%'}}
        keyboardShouldPersistTaps="always">
        <Image
          style={styles.logo}
          source={require('../../../../assets/images/circleLogo.png')}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#aaaaaa"
          onChangeText={text => setEmail(text)}
          value={email}
          onBlur={() => validateEmail()}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <Text style={styles.error}>{eError}</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry={true}
          onBlur={() => onLoginPress}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <Text style={styles.error}>{pError}</Text>
        <TouchableOpacity style={styles.button} onPress={() => onLoginPress()}>
          <Text style={styles.buttonTitle}>Log in</Text>
        </TouchableOpacity>
        <View style={footer.footerView}>
          <Text style={footer.footerText}>
            Don't have an account?{' '}
            <Text onPress={onSignUp} style={footer.footerLink}>
              Sign up
            </Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
