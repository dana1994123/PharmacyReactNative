import React, {Component} from 'react';
import {connect} from 'react-redux';
import getYearRange from './getYearRange';
import SelectForm from '../../../components/SelectForm';

export default class SelectYear extends React.Component {
  state = {
    years: getYearRange(new Date().getFullYear(), 100),
    year: '',
  };

  onFieldChange(field, value) {
    //we will need to save these information to use it in
    //change the default to selected value
    this.setState({
      year: value,
    });
    console.log(`the ${field} that the user choose is ${value} `);
  }

  render() {
    return (
      <SelectForm
        options={this.state.years}
        value={this.state.year}
        fieldName={'year'}
        onPressNext={() => {
          this.props.history.push('/gender');
        }}
        onFieldChange={this.onFieldChange.bind(this)}
      />
    );
  }
}
