import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomButton from '../ButtonFactory';
import {Color, Typography} from 'styles';

const GameIntroduction = () => {
  const onPress = () => {};

  return (
    <View style={styles.introduction}>
      <Text style={styles.title}>B1 Speaking</Text>
      <Text style={styles.topic}>Dialogue</Text>
      <Text style={styles.header}>Chơi như thế nào:</Text>
      <Text style={styles.text}>
        Trò chơi này giúp bạn trở nên tự tin hơn trong giao tiếp tiếng anh bằng
        cách sử dụng các đoạn nhắn tin online.
      </Text>
      <Text style={styles.header}>Để làm gì:</Text>
      <Text style={styles.text}>
        Speaking Parts 1. Nó sẽ giúp bạn luyện tập kỹ năng hội thoại. Trong bài
        kiểm tra, bạn sẽ cần nói chuyện với Giám khảo về các chủ đề giao tiếp
        quen thuộc và các chủ đề đơn giản về kiến thức xã hội.
      </Text>
      <CustomButton text="Bắt đầu" onPress={onPress} />
    </View>
  );
};

export default GameIntroduction;

const styles = StyleSheet.create({
  introduction: {
    padding: 15,
  },

  title: {
    fontFamily: Typography.medium,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
  },

  topic: {
    fontFamily: Typography.semiBold,
    fontSize: 20,
    marginBottom: 15,
  },

  header: {
    fontFamily: Typography.medium,
    fontSize: 15,
    marginBottom: 15,
    color: Color.blue,
  },

  text: {
    fontFamily: Typography.light,
    fontSize: 15,
    lineHeight: 25,
    marginBottom: 20,
  },
});
