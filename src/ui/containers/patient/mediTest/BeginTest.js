// import React from 'react';
// import {connect} from 'react-redux';
import {Text} from 'react-native';
// import {getToken} from '../../../../api/sumChecker/auth';
// import {getSymptoms, getDiagnosis} from '../../../../api/sumChecker/request';
// import filter from '../../../../utilites/filter';
// import deleteFromArray from '../../../../utilites/deleteFromArray';
// import SearchForm from '../../../components/SearchForm';
// import {symptomsFieldChangedAction} from './reducers/SymptomsReducer';
// import {button, form, forms, layout} from '../../../../res/styles/global';
// import {TouchableOpacity} from 'react-native';
// import {AppButton} from '../../../components/AppButton';

// export default class BeginTest extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       token: '',
//       symptoms: [],
//       filteredSymptoms: [],
//       selectedSymptoms: [],
//     };
//   }

//   async componentDidMount() {
//     const res = await getToken();

//     this.setState({
//       token: res.Token,
//     });

//     this.onSearchSymptoms('');
//   }

//   getSymptoms() {
//     if (!this.state.symptoms.length) {
//       return getSymptoms(this.state.token).then(symptoms => {
//         this.setState({symptoms});
//         return symptoms;
//       });
//     }

//     return Promise.resolve(this.state.symptoms);
//   }

//   async getDiagnosis() {
//     const diagnosis = await getDiagnosis(this.state.token, {
//       symptoms: this.state.selectedSymptoms,
//       year: this.props.year,
//     });

//     // console.log(diagnosis);
//     Alert.alert(
//       'Possible diagnosis',
//       diagnosis.reduce((sum, cur) => {
//         return sum + ' ' + cur.Issue.Name + '\n';
//       }, ''),
//     );
//   }

//   onSearchSymptoms(search) {
//     // this.props.dispatch(symptomsFieldChangedAction('search', search));

//     setTimeout(() => {
//       this.getSymptoms().then(symptoms => {
//         const filteredSymptoms = filter(symptoms, s => {
//           return s.Name.toLowerCase().indexOf(this.props.search) !== -1;
//         });

//         this.setState({filteredSymptoms});
//       });
//     }, 0);
//   }

//   selectSymptom(symptom) {
//     let selected = this.state.selectedSymptoms;

//     this.setState({
//       selectedSymptoms:
//         selected.length < 6 && selected.indexOf(symptom) === -1
//           ? selected.concat(symptom)
//           : selected,
//     });
//   }

//   deleteSymptom(symptom) {
//     let selected = this.state.selectedSymptoms;

//     this.setState({
//       selectedSymptoms: deleteFromArray(selected, symptom, true),
//     });
//   }

//   updateSelectedTags(newTags) {
//     this.setState({
//       selectedSymptoms: newTags,
//     });
//   }

//   render() {
//     return (
//       <View style={layout.fullScreen}>
//         <SearchForm
//           search={this.props.search}
//           onSearch={text => this.onSearchSymptoms(text)}
//           select={this.selectSymptom.bind(this)}
//           delete={this.deleteSymptom.bind(this)}
//           updateSelectedTags={this.updateSelectedTags.bind(this)}
//           filtered={this.state.filteredSymptoms}
//           selected={this.state.selectedSymptoms}
//           searchAction={this.getDiagnosis.bind(this)}
//           searchTitle="Get diagnosis"
//         />

//         <View style={styles.buttonCon}>
//           <AppButton
//             title="Get Daignoise "
//             buttonStyle={button.Wrap}
//             textStyle={styles.Text}
//             onPress={() => openModal2()}
//           />
//         </View>
//       </View>
//     );
//   }
// }

// // const mapStateToProps = (state) => ({
// //   ...state.symptomsData,
// //   ...state.personalData
// // });

// const styles = StyleSheet.create({
//   buttonCon: {
//     alignContent: 'center',
//     flex: 1,
//   },
// });

import React from 'react';
import {Alert, View, StyleSheet} from 'react-native';
import ajax from '../../../../api/sumChecker/request';
import filter from '../../../../utilites/filter';
import deleteFromArray from '../../../../utilites/deleteFromArray';
import SearchForm from '../../../components/SearchForm';
import {symptomsFieldChangedAction} from './reducers/SymptomsReducer';
import {button, form, forms, layout} from '../../../../res/styles/global';
import {TouchableOpacity} from 'react-native';
import {AppButton} from '../../../components/AppButton';

export default class BeginTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      symptoms: [],
      filteredSymptoms: [],
      selectedSymptoms: [],
    };
  }

  async componentDidMount() {
    // this.onSearchSymptoms('');
    // console.log(`first symdana ${this.state.symptoms}`);
    const sym = await ajax.getSymptoms();
    this.setState({
      symptoms: this.state.symptoms.concat(sym),
    });
    console.log(`second symdana ${this.state.symptoms.Name}`);
    this.onSearchSymptoms();
  }

  onSearchSymptoms(search) {
    //this.props.dispatch(symptomsFieldChangedAction('search', search));
    setTimeout(() => {
      this.state.symptoms.map(sym => {
        console.log(sym.Name);
        if (sym.Name.toLowerCase().indexOf(search) !== -1) {
          this.setState({
            filteredSymptoms: this.state.symptoms.concat(sym),
          });
        }
      });
    }, 0);
  }

  async getDiagnosis() {
    const diagnosis = await getDiagnosis(this.state.token, {
      symptoms: this.state.selectedSymptoms,
      year: this.props.year,
    });

    // console.log(diagnosis);
    Alert.alert(
      'Possible diagnosis',
      diagnosis.reduce((sum, cur) => {
        return sum + ' ' + cur.Issue.Name + '\n';
      }, ''),
    );
  }

  selectSymptom(symptom) {
    let selected = this.state.selectedSymptoms;

    this.setState({
      selectedSymptoms:
        selected.length < 6 && selected.indexOf(symptom) === -1
          ? selected.concat(symptom)
          : selected,
    });
    
  }

  deleteSymptom(symptom) {
    let selected = this.state.selectedSymptoms;

    this.setState({
      selectedSymptoms: deleteFromArray(selected, symptom, true),
    });
  }

  updateSelectedTags(newTags) {
    this.setState({
      selectedSymptoms: newTags,
    });
  }

  render() {
    return (
      <SearchForm
        search={this.props.search}
        onSearch={this.onSearchSymptoms.bind(this)}
        select={this.selectSymptom.bind(this)}
        delete={this.deleteSymptom.bind(this)}
        updateSelectedTags={this.updateSelectedTags.bind(this)}
        filtered={this.state.filteredSymptoms}
        selected={this.state.selectedSymptoms}
        searchAction={this.getDiagnosis.bind(this)}
        searchTitle="Get diagnosis"
      />
    );
  }
}

// this.state.symptoms.map((a) => {
//   console.log(a.Name);
//   return (
//     <Text>{a.Name}</Text>
//   );
// })
// )
