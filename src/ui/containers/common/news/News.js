import React, { Component, useEffect, useState } from "react";
import { View, Text, Modal, StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import ajax from "../../../../api/ajax";
import Article from "./Article";
import { IconButton } from "react-native-paper";
import R from "../../../../res/R";

class News extends Component {
  state = {
    a: [],
    modalView: true,
    // currentArticleId: null,
  };
  // setCurrentArticle = (articleId) => {
  //   this.setState({ currentArticleId: articleId });
  // };
  async componentDidMount() {
    const articles = await ajax.fetchInitialNews();
    this.setState({
      a: this.state.a.concat(articles.articles),
      modalView: true,
    });
  }
  setModalVisible = () => {
    this.setState({ modalVisible: false });
  };
  // currentArticle = () => {
  //   return this.state.a.find(
  //     (article) => article.title === this.state.currentArticleId
  //   );
  // };

  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.sub}>Medical News</Text>
            <Text style={styles.sub2}>
              Stay updated on everything that surrounding you{" "}
            </Text>
          </View>
          <View>
            <Article articles={this.state.a} modalVisible={false} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: R.colors.primary,
    height: "3%",
    alignContent: "center",
    alignItems: "center",
  },

  sub: {
    fontSize: 30,
    fontWeight: "600",
    marginTop: "5%",
    color: R.colors.white,
  },
  sub2: {
    color: R.colors.white,
  },
});

export default News;
