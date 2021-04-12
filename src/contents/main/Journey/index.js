import React, {useState} from 'react';
import {Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import {Stage} from '@components';
import {Color, Typography} from 'styles';

const JourneyScreen = ({navigation}) => {
  const [stage, setStage] = useState([
    {
      order: 1,
      realm: 'Earth',
      percent: '10',
      point: '7.3',
      content: [
        'spelling',
        'topic associations',
        'topic match',
        'speed reading',
      ],
    },
    {
      order: 2,
      realm: 'Earth',
      percent: '30',
      point: '6.0',
      content: [
        'error finding',
        'topic associations',
        'minimal pairs',
        'speed reading',
      ],
    },
    {
      order: 3,
      realm: 'Hell',
      percent: '27',
      point: '3.5',
      content: ['spelling', 'dialogue', 'minimal pairs', 'speed reading'],
    },
    {
      order: 4,
      realm: 'Hell',
      percent: '60',
      point: '10.0',
      content: ['error finding', 'dialogue', 'minimal pairs', 'phrasal verbs'],
    },
  ]);

  const onPress = () => {
    navigation.navigate('Practice');
  };

  return (
    <SafeAreaView style={styles.journeyContainer}>
      <Text style={styles.title}>Hành trình!</Text>
      <Text style={styles.header}>Hãy chọn 1 chặng để bắt đầu!</Text>

      <FlatList
        style={styles.stageList}
        horizontal
        data={stage}
        renderItem={({item}) => (
          <Stage onPress={onPress} customStyles={styles.stage} {...item} />
        )}
        keyExtractor={(item) => item.order.toString()}
        removeClippedSubviews={true}
      />

      <Text style={styles.header}>
        Bắt đầu khi bạn đã hoàn thành hết giai đoạn 1!
      </Text>

      <FlatList
        style={styles.stageList}
        horizontal
        data={stage}
        renderItem={({item}) => (
          <Stage onPress={onPress} customStyles={styles.stage} {...item} />
        )}
        keyExtractor={(item) => item.order.toString()}
        removeClippedSubviews={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontFamily: Typography.medium,
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 10,
    color: Color.blue,
    textAlign: 'center',
  },

  header: {
    fontSize: 15,
    fontFamily: Typography.medium,
    paddingHorizontal: 13,
    paddingVertical: 10,
    color: Color.orange,
  },

  stage: {
    margin: 15,
  },
});

export default JourneyScreen;
