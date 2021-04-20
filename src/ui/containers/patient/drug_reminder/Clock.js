import React from 'react';
import {Component} from 'react';
import {
  Animated,
  StyleSheet,
  StatusBar,
  Dimensions,
  ScrollView,
  View,
  Text,
} from 'react-native';
import moment from 'moment';
import dayjs from 'dayjs';
import R from '../../../../res/R';
import RenderdrugReminder from './DrugReminder';
import PHeader from '../PHeader';

const {width} = Dimensions.get('screen');
const SIZE = width * 0.9;
const TICK_INTERVAL = 1000;

export default class Clock extends Component {
  state = {
    time: moment().format('LT'),
    date: moment().format('LL'),
    index: new Animated.Value(0),
    tick: new Animated.Value(0),
    //creating an array of the animations
    scales: [...Array(6).keys()].map(() => new Animated.Value(0)),
  };
  //increasing the timer every second and change the location based on the index
  _timer = 0;
  _ticker = null;

  componentDidMount() {
    const current = dayjs();
    const diff = current.endOf('day').diff(current, 'seconds');
    const oneDay = 24 * 60 * 60;
    this._timer = oneDay - diff;
    this.state.tick.setValue(this._timer);
    //to avoid start from the begining all the time we make closer to the timer
    this.state.index.setValue(this._timer - 30);

    this._animate();
    this._ticker = setInterval(() => {
      this._timer += 1;
      this.state.tick.setValue(this._timer);
    }, TICK_INTERVAL);
  }
  componentWillUnmount() {
    clearInterval(this._ticker);
    this._ticker = null;
  }
  _animate = () => {
    const scaleStaggerAnimations = this.state.scales.map(animated => {
      return Animated.spring(animated, {
        toValue: 1,
        tension: 18,
        friction: 3,
        useNativeDriver: true,
      });
    });

    Animated.parallel([
      Animated.stagger(
        TICK_INTERVAL / this.state.scales.length,
        scaleStaggerAnimations,
      ),
      Animated.timing(this.state.index, {
        toValue: this.state.tick,
        duration: TICK_INTERVAL / 2,
        useNativeDriver: true,
      }),
    ]).start();
  };

  render() {
    const {
      index,
      scales: [
        smallQuardanScale,
        mediQuardanScale,
        largeQuardanScale,
        hourScale,
        minScale,
        secondScale,
      ],
    } = this.state;

    setTimeout(() => {
      this.setState({
        time: moment().format('LT'),
        date: moment().format('LL'),
      });
    }, 1000);

    const interpolated = {
      inputRange: [0, 360],
      outputRange: ['0deg', '360deg'],
    };

    //move the second as the circle has 6*60
    const secondDegrees = Animated.multiply(index, 6);
    const transformSeconds = {
      transform: [
        {rotate: secondDegrees.interpolate(interpolated)},
        {scale: secondScale},
      ],
    };

    //move th min each 60 seconds
    const rotateminutes = Animated.divide(
      secondDegrees,
      new Animated.Value(60),
    );
    const transformMinutes = {
      transform: [
        {rotate: rotateminutes.interpolate(interpolated)},
        {scale: minScale},
      ],
    };

    //we hav 12 hours in the circle
    const rotateHours = Animated.divide(rotateminutes, new Animated.Value(12));
    const transformHours = {
      transform: [
        {rotate: rotateHours.interpolate(interpolated)},
        {scale: hourScale},
      ],
    };
    return (
      <View style={styles.circle}>
        <View style={styles.container}>
          {/* clock view */}
          <View style={styles.clockContainer}>
            <StatusBar hidden={true} />
            <Animated.View
              style={[styles.bigQuardan, {transform: [{scale: hourScale}]}]}
            />
            <Animated.View
              style={[styles.mediQuardan, {transform: [{scale: minScale}]}]}
            />
            <Animated.View style={[styles.mover, transformHours]}>
              <View style={[styles.hours]} />
            </Animated.View>
            <Animated.View style={[styles.mover, , transformMinutes]}>
              <View style={[styles.minutes]} />
            </Animated.View>
            <Animated.View style={[styles.mover, transformSeconds]}>
              <View style={[styles.second]} />
            </Animated.View>
            <Animated.View
              style={[styles.smallQuardan, {transform: [{scale: secondScale}]}]}
            />
          </View>
          {/* current time & date */}
          <View style={styles.currentContainer}>
            <Text style={styles.timeStyle}>{this.state.time}</Text>
            <Text style={styles.dateStyle}>{this.state.date}</Text>
          </View>
        </View>
        {/* drugReminder container */}
        <View style={styles.renderContainer}>
          <RenderdrugReminder />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: R.colors.white,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 0,
  },
  clockContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  renderContainer: {
    marginTop: '60%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  timing: {
    flex: 1,
    backgroundColor: R.colors.white,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 90,
    padding: 0,
  },

  mover: {
    position: 'absolute',
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  hours: {
    backgroundColor: R.colors.Grey,
    height: '14%',
    marginTop: '35%',
    width: 4,
    borderRadius: 4,
  },
  minutes: {
    backgroundColor: R.colors.Grey,
    height: '20%',
    marginTop: '30%',
    width: 3,
    borderRadius: 3,
  },
  second: {
    backgroundColor: R.colors.Grey,
    height: '20%',
    width: 1,
    marginTop: '30%',
    borderRadius: 1,
  },
  bigQuardan: {
    position: 'absolute',
    width: SIZE * 0.5,
    height: 150,
    borderRadius: 60,
    backgroundColor: R.colors.lightSec,
    marginTop: 95,
  },
  mediQuardan: {
    width: SIZE * 0.2,
    height: SIZE * 0.2,
    borderRadius: SIZE * 0.25,
    backgroundColor: R.colors.orange,
    position: 'absolute',
    marginTop: 140,
  },
  smallQuardan: {
    width: '3%',
    height: 10,
    borderRadius: 5,
    backgroundColor: R.colors.lightSec,
    position: 'absolute',
    marginTop: 170,
  },
  dateStyle: {
    color: 'black',
    fontSize: 10,
    marginLeft: 10,
  },
  timeStyle: {
    margin: 10,
    color: 'black',
    fontSize: 30,
  },
});
