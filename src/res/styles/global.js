import {StyleSheet} from 'react-native';
import R from '../R';

export const layout = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  centeredFullScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: R.colors.white,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    width: 400,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: R.colors.white,
  },
});

export const form = StyleSheet.create({
  textInput: {
    color: '#000',
    height: 50,
    fontSize: 20,
    backgroundColor: '#EEEEEE',
    alignSelf: 'stretch',
    borderRadius: 5,
    margin: 5,
  },
});

export const button = StyleSheet.create({
  Wrap: {
    backgroundColor: R.colors.primary,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    elevation: 8,
    width: '50%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  Text: {
    fontSize: 18,
    color: R.colors.white,
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export const text = StyleSheet.create({
  default: {
    fontSize: 42,
  },
  h2: {
    fontSize: 30,
    fontWeight: 'bold',
    color: R.colors.white,
    marginTop: '5%',
  },
  h3: {
    fontSize: 25,
    fontWeight: 'bold',
    color: R.colors.purple,
  },

  h5: {
    color: R.colors.white,
    fontSize: 12,
  },
  h6: {
    color: R.colors.black,
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: '5%',
  },
  error: {
    fontSize: 10,
    color: R.colors.red,
    fontWeight: 'bold',
    marginStart: '10%',
  },
});

export const footer = StyleSheet.create({
  footerView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: 'black',
  },
  footerLink: {
    color: R.colors.primary,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
