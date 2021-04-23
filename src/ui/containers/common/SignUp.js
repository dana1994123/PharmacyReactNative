import React, {useState, useContext} from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import styles from '../common/commonstyle/styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {footer, button} from '../../../res/styles/global';
import {AppButton} from '../../components/AppButton';
import {AuthContext} from '../../../navigation/AuthProvider';
import User from '../../../models/User';

export default function SignUp({navigation}) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [darte, setDate] = useState('2030-05-15');
  const [nError, setnError] = useState('');
  const [pError, setpError] = useState('');
  const [cError, setcError] = useState('');
  const [eError, seteError] = useState('');
  const [errorStatus, setErrorStatus] = useState(false);

  const {register} = useContext(AuthContext);

  const onLoginPress = () => {
    //navigate to login page
    navigation.navigate('Login');
  };

  const validateConfirm = () => {
    if (confirmPassword === '') {
      setcError('Confirm password cannot be empty');
      setErrorStatus(true);
    } else if (confirmPassword !== password) {
      setcError('Confirm password does not match the password');
      setErrorStatus(true);
    } else {
      setcError('');
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
  const validateName = () => {
    if (fullName === '') {
      setnError('Name cannot be empty');
      setErrorStatus(true);
    } else {
      setnError('');
      setErrorStatus(false);
    }
  };

  const onSignUp = () => {
    //validate the information and save it to the firebase
    try {
      validateConfirm();
      validateEmail();
      validateName();
      validatePass();
      if (errorStatus === false) {
        //there is no error in the validation and you should save this obj in data base
        const user = new User(fullName, email, password, 'patient');
        register(user);
        //save the user as a context and then check the role render the matching home
      } else {
        alert('Please fix the issues to continue!');
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{flex: 1, width: '100%'}}
        keyboardShouldPersistTaps="always">
        <Image
          style={styles.logo}
          source={require('../../../../assets/images/circleLogo.png')}
        />
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#aaaaaa"
          onChangeText={text => setFullName(text)}
          value={fullName}
          onBlur={() => validateName()}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <Text style={styles.error}>{nError}</Text>
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
          secureTextEntry
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          value={password}
          onBlur={() => validatePass()}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <Text style={styles.error}>{pError}</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Confirm Password"
          onChangeText={text => setConfirmPassword(text)}
          value={confirmPassword}
          onBlur={() => validateConfirm()}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />

        <Text style={styles.error}>{cError}</Text>
        {/* <Text style={styles.subTitle}>Date of Birth</Text> */}
        {/* <DatePicker
        style={styles.input}
        date={date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        maxDate="2010-01-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: "absolute",
            left: 0,
            top: 10,
            bottom: 10,
            marginLeft: 25,
          },
          dateInput: {
            marginLeft: 60,
            top: 5,
            bottom: 10,
          },
        }}
        //what you want to do when the date is changed
      /> */}
        <AppButton
          buttonStyle={button.Wrap}
          textStyle={button.Text}
          title={'Create account'}
          onPress={() => onSignUp()}
        />
        <View style={footer.footerView}>
          <Text style={footer.footerText}>
            Already got an account?{' '}
            <Text onPress={onLoginPress} style={footer.footerLink}>
              Log in
            </Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
