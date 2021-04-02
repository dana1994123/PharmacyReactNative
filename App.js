import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import R from './src/res/R';
import {Dimensions} from 'react-native';
import LogoLoad from './src/ui/containers/common/LogoLoad';
import Providers from './src/navigation';

export default class App extends Component {
  state = {
    appReady: false,
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
    return <Providers />;
  }
}
