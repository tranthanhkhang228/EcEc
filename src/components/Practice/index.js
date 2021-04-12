import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Course from '../Course';
import {Color, Typography} from 'styles';

const listenAndWrite = '../../assets/images/listen_and_write.jpg';
const reading = '../../assets/images/lion-reading.jpg';
const vocubulary = '../../assets/images/vocabulary.jpg';
const subtitle = '../../assets/images/title.png';

const Practice = ({navigation}) => {
  const courses = [
    {
      id: 1,
      title: 'Nghe-chép',
      point: 0.0,
      image: require(listenAndWrite),
    },
    {
      id: 2,
      title: 'Luyện đọc',
      point: 4.0,
      image: require(reading),
    },
    {
      id: 3,
      title: 'Từ vựng',
      point: 7.3,
      image: require(vocubulary),
    },
    {
      id: 4,
      title: 'Phụ đề',
      point: 6.0,
      image: require(subtitle),
    },
  ];

  const onPress = () => {
    navigation.navigate('GameIntroduction');
  };

  return (
    <View style={styles.practice}>
      <Text style={styles.title}>Chặng 1 | Khởi đầu</Text>
      <View style={styles.tip}>
        <Text style={styles.tipTitle}>Reading tip of the day</Text>
        <Text style={styles.tipContent}>
          Đọc thật cẩn thận trước khi bắt đầu trả lời các câu hỏi!
        </Text>
      </View>
      <Text style={styles.header}>Chọn một mục để bắt đầu</Text>
      <FlatList
        numColumns={2}
        data={courses}
        renderItem={({item}) => (
          <Course
            onPress={onPress}
            title={item.title}
            point={item.point}
            image={item.image}
          />
        )}
        removeClippedSubviews={true}
      />
    </View>
  );
};

export default Practice;

const styles = StyleSheet.create({
  practice: {
    padding: 15,
  },

  title: {
    fontSize: 15,
    fontFamily: Typography.medium,
    color: Color.orange,
    marginBottom: 30,
  },

  tip: {
    marginBottom: 30,
    backgroundColor: Color.grayBlue,
    borderRadius: 15,
    padding: 14,
  },

  tipTitle: {
    fontFamily: Typography.thin,
    color: Color.orange,
    fontSize: 18,
    marginBottom: 5,
  },

  tipContent: {
    fontFamily: Typography.medium,
    color: Color.gray,
    fontSize: 15,
    lineHeight: 25,
  },

  header: {
    marginBottom: 30,
    fontSize: 18,
    fontFamily: Typography.medium,
    textAlign: 'center',
    color: Color.orange,
  },
});
