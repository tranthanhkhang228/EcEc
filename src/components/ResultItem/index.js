import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {Color, Typography} from 'styles';

const ResultItem = ({order, question, answer, correctAnswer}) => {
  return (
    <View style={styles.result}>
      <View style={styles.title}>
        <View style={styles.icon}>
          <Icon size={20} name="star" color={Color.orange} />
        </View>
        <Text style={styles.titleText}>Câu hỏi {order}</Text>
      </View>
      <Text style={styles.text}>{question}</Text>
      <Text style={styles.header}>Câu trả lời của bạn</Text>
      <Text style={styles.text}>{answer}</Text>
      <Text style={styles.header}>Đáp án</Text>
      <Text style={styles.text}>{correctAnswer}</Text>
    </View>
  );
};

export default ResultItem;

const styles = StyleSheet.create({
  result: {
    marginBottom: 30,
  },

  title: {flexDirection: 'row'},

  icon: {justifyContent: 'center', marginRight: 10},

  titleText: {
    fontFamily: Typography.medium,
    fontSize: 20,
    color: Color.orange,
  },

  header: {
    marginLeft: 30,
    fontFamily: Typography.semiBold,
    fontSize: 18,
    color: Color.gray,
  },

  text: {
    marginLeft: 30,
    fontFamily: Typography.light,
    fontSize: 15,
    marginBottom: 10,
  },
});
