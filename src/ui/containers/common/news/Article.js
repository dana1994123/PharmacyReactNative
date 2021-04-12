import React, {useState} from 'react';
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

  const closeModal = () => {
    setModalVisible(false);
  };
  articles.map(a => {
    output.push(
      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
        <Card
          featuredTitle={a.title}
          featuredTitleStyle={{
            marginHorizontal: 5,
            textShadowColor: '#00000f',
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
          <Divider style={{backgroundColor: '#dfe6e9'}} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                margin: 5,
                fontStyle: 'italic',
                color: '#b2bec3',
                fontSize: 10,
              }}>
              {a.source.name.toUpperCase()}
            </Text>
          </View>
        </Card>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}>
          <View style={styles.modalView}>
            {/* render the clickable article in this Model */}
            <Text>render the specific article that has been clicked</Text>
            <TouchableOpacity style={styles.btn} onPress={() => closeModal()}>
              <Text>Close Me</Text>
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
    marginTop: 95,
    marginBottom: 10,
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
    width: 200,
    elevation: 8,
    backgroundColor: R.colors.primary,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
