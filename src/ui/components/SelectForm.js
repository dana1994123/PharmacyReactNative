import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {forms} from '../../res/styles/global';
import R from '../../res/R';

export default class SelectForm extends React.Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex: 1}}>
          <Picker
          itemStyle ={{color:R.colors.orange}}
            style={forms.formcon}
            selectedValue={this.props.value}
            onValueChange={this.props.onFieldChange.bind(
              null,
              this.props.fieldName,
            )}>
            {this.props.options.map((item, key) => {
              return (
                <Picker.Item label={item.toString()} key={key} value={item} />
              );
            })}
          </Picker>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
