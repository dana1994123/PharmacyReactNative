import React, {Component} from 'react';
import {View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {button, forms} from '../../res/styles/global';
import {AppButton} from './AppButton';

export default class SelectForm extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={forms.cont}>
          <View style={[forms.flex7]}>
            <Picker
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

          <View style={forms.btn}>
            <AppButton
              onPress={this.props.onPressNext}
              title="Next"
              buttonStyle={button.Wrap}
              textStyle={button.Text}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
