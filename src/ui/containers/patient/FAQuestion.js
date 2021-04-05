import React from 'react';
// import FAQuestion from "react-faq-component";

import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {AppButton} from '../../components/AppButton';

export default function FAQuestion() {
  return (
    <View>
      {/* {faqsData.map((faq, i) => (
        <FAQuestion key={i} question={faq.question} answer={faq.answer} />
      ))} */}
    </View>
  );
}

const faqsData = [
  {
    question: 'What does FAQ stand for?',
    answer: 'Frequently Asked Question',
  },
  {
    question: 'What is the best language?',
    answer: 'Not React Native ',
  },
];
const styles = {
  // bgColor: 'white',
  titleTextColor: 'blue',
  rowTitleColor: 'blue',
  // rowContentColor: 'grey',
  // arrowColor: "red",
};

const config = {
  animate: true,
  arrowIcon: 'V',
  tabFocus: true,
};
