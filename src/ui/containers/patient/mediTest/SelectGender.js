import React, {Component} from 'react';
import {connect} from 'react-redux';
import SelectForm from '../../../components/SelectForm';

export default class SelectGender extends React.Component {
  state = {
    genders: ['Male', 'Female'],
    selectedGender: 'Male',
  };

  onFieldChange(field, value) {
    this.setState({selectedGender: value});
  }

  render() {
    return (
      <SelectForm
        options={this.state.genders}
        value={this.state.selectedGender}
        fieldName={'gender'}
        onPressNext={() => {
          this.props.history.push('/search');
        }}
        onFieldChange={this.onFieldChange.bind(this)}
      />
    );
  }
}
