import React, {Component, cloneElement} from 'react';
import {StyleSheet, View, Image, Animated, StatusBar} from 'react-native';

class LogoLoadPage extends Component {
  state = {
    fadeAnim: new Animated.Value(100),
    animationDone: false,
    isLoaded: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.fadeOut();
    }, 500);
  }

  fadeOut = () => {
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 2500,
      useNativeDriver: true,
    }).start();
  };

  render() {
    return (
      <View style={styles.centeredFullScreen}>
        <StatusBar animated={true} hidden={!this.state.animationDone} />
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              opacity: this.state.fadeAnim,
            },
          ]}>
          <Image
            style={styles.logo}
            source={require('../../../../assets/images/Logo_10.png')}
          />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredFullScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  maskImageStyle: {
    height: 100,
    width: 100,
  },
  fadingContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'powderblue',
  },
});
export default LogoLoadPage;
