import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {Color, Typography} from 'styles';
import ResultItem from '../ResultItem';
import CustomButton from '../ButtonFactory';

const congratulation = '../../assets/images/congratulation.jpg';

const Result = ({navigation}) => {
  const results = [
    {
      order: 1,
      question: "How's it going?",
      answer: "I'm fine. How are you?",
      correctAnswer: "I'm not bad.",
    },
    {
      order: 2,
      question: "How's it going?",
      answer: "I'm fine. How are you?",
      correctAnswer: "I'm not bad.",
    },
    {
      order: 3,
      question: "How's it going?",
      answer: "I'm fine. How are you?",
      correctAnswer: "I'm not bad.",
    },
  ];

  const onPress = () => {
    navigation.navigate('Practice');
  };

  return (
    <SafeAreaView style={styles.result}>
      <ScrollView style={styles.scroll}>
        <Text style={styles.title}>All done</Text>

        <DropShadow style={{...styles.shadow}}>
          <View style={styles.imageContainer}>
            <Image source={require(congratulation)} style={styles.image} />
          </View>
        </DropShadow>
        <Text style={styles.header}>Tổng kết Dialogue</Text>

        <Text style={styles.subHeader}>Bạn đã trả lời đúng 5 / 5</Text>

        {results.map((result) => (
          <ResultItem {...result} />
        ))}
      </ScrollView>
      <CustomButton text="Continue" onPress={onPress} />
    </SafeAreaView>
  );
};

export default Result;

const styles = StyleSheet.create({
  shadow: {
    zIndex: 3,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },

  scroll: {
    maxHeight: 650,
  },

  result: {
    padding: 15,
  },

  title: {
    marginBottom: 20,
    fontFamily: Typography.bold,
    textAlign: 'center',
    fontSize: 25,
    color: Color.orange,
  },

  imageContainer: {
    overflow: 'hidden',
    maxWidth: '70%',
    height: 180,
    width: 180,
    marginBottom: 30,
    borderRadius: 600,
    backgroundColor: 'white',
    alignSelf: 'center',
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  header: {
    marginBottom: 5,
    fontFamily: Typography.semiBold,
    fontSize: 20,
  },

  subHeader: {
    fontFamily: Typography.light,
    color: Color.gray,
    marginBottom: 30,
  },
});
