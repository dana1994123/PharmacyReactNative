import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableHighlight,
} from 'react-native';

import TagInput from 'react-native-tag-input';
import {button, forms} from '../../res/styles/global';
import {AppButton} from './AppButton';

export default class SearchForm extends React.Component {
  render() {
    const props = this.props;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={forms.main}>
          <View style={[forms.boxContainer, forms.searchBlock, forms.flex1]}>
            <TagInput
              style={[forms.searchInput]}
              value={props.selected}
              labelExtractor={symptom => {
                return symptom.Name;
              }}
              text="Choose Symptom"
              onChange={props.updateSelectedTags}
              onChangeText={props.onSearch}
            />
          </View>

          <View style={[forms.boxContainer, forms.tagsBlock]}>
            <View style={[forms.boxContainer, forms.filteredTagsBlock]}>
              <ScrollView showsVerticalScrollIndicator={true}>
                <View style={[forms.filteredTags]}>
                  {props.filtered.map((symptom, key) => {
                    return (
                      <TouchableHighlight
                        key={key}
                        underlayColor="lightgrey"
                        onPress={props.select.bind(null, symptom)}>
                        <View style={forms.tag}>
                          <Text style={forms.tagText}>{symptom.Name}</Text>
                        </View>
                      </TouchableHighlight>
                    );
                  })}
                </View>
              </ScrollView>
            </View>
          </View>
          <View style={forms.btnS}>
            <Text>{props.error}</Text>
            <AppButton
              onPress={props.searchAction}
              title="Get Daignoise"
              buttonStyle={button.Wrap}
              textStyle={button.Text}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
