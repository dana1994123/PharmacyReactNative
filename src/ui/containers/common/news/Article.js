import React, {useEffect, useState} from 'react';
import {
  View,
  Modal,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Card, Divider} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import R from '../../../../res/R';

export default function Article({articles, showModal}) {
  const [modalVisible, setModalVisible] = useState(showModal);
  let output = [];
  const [ind, setInd] = useState(0);
  const [currentA, setCurrentA] = useState();

  const closeModal = () => {
    setModalVisible(false);
  };
  useEffect(() => {
    setCurrentA();
    articles.map((a, i) => {
      if (i === ind) {
        setCurrentA(a);
      }
    });
    console.log('ind');
  }, [ind]);

  const currentArticle = index => {
    setModalVisible(!modalVisible);
    setInd(index);
    articles.map((a, i) => {
      if (i === ind) {
        setCurrentA(a);
      }
    });
  };

  articles.map((a, i) => {
    output.push(
      <TouchableOpacity onPress={() => currentArticle(i)} key={i}>
        <Card
          featuredTitle={a.title}
          featuredTitleStyle={{
            marginHorizontal: 5,
            textShadowColor: R.colors.secondary,
            textShadowOffset: {width: 3, height: 3},
            textShadowRadius: 3,
          }}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: a.urlToImage,
            }}
          />
          <Text style={{marginBottom: 10}}>
            {a.description || 'Read more...'}
          </Text>
          <Divider style={{backgroundColor: R.colors.secondary}} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              color: R.colors.orange,
            }}>
            <Text
              style={{
                margin: 5,
                fontStyle: 'italic',
                color: R.colors.orange,

                fontSize: 10,
              }}>
              {a.source.name.toUpperCase()}
            </Text>
          </View>
        </Card>

        <Modal
          key={i}
          animationType="fade"
          transparent={false}
          visible={modalVisible}
          style={styles.modalView}
          onRequestClose={() => setModalVisible(!modalVisible)}>
          <View>
            <Text style={styles.h}>{currentA.title}</Text>
            <Card
              featuredTitle={currentA.title}
              featuredTitleStyle={{
                marginHorizontal: 5,
                textShadowColor: R.colors.secondary,
                textShadowOffset: {width: 3, height: 3},
                textShadowRadius: 3,
              }}
              style={styles.modalView}>
              <Image
                style={styles.bigImg}
                source={{
                  uri: currentA.urlToImage,
                }}
              />
              <Text style={{marginBottom: 10}}>
                {currentA.description || 'Read more...'}
              </Text>
              <Divider style={{backgroundColor: R.colors.secondary}} />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  color: R.colors.orange,
                }}>
                <Text
                  style={{
                    margin: 5,
                    fontStyle: 'italic',
                    color: R.colors.orange,

                    fontSize: 10,
                  }}>
                  {currentA.source.name.toUpperCase()}
                </Text>
              </View>
            </Card>
            <TouchableOpacity style={styles.btn} onPress={() => closeModal()}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </TouchableOpacity>,
    );
  });

  return (
    <SafeAreaView>
      <ScrollView>{output}</ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  limit: {
    height: 500,
    paddingTop: 50,
  },
  container: {
    paddingTop: 50,
    flexDirection: 'column',
    backgroundColor: R.colors.primary,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  modalView: {
    flex: 1,
    margin: 10,
    marginTop: 10,
    marginBottom: 50,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  Text: {
    color: '#000',
    fontSize: 20,
  },
  okText: {
    fontSize: 40,
    color: R.colors.primary,
  },
  btn: {
    width: 100,
    elevation: 8,
    backgroundColor: R.colors.primary,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: '5%',
    marginLeft: '38%',
  },
  bigImg: {
    width: 300,
    height: 200,
    marginBottom: '20%',
  },
  h: {
    marginTop: '40%',
    fontSize: 15,
    marginLeft: '5%',
    marginBottom: '10%',
  },
});
