import React, {useState} from 'react';
import {Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import {Stage} from '@components';

const JourneyScreen = () => {
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

  return (
    <SafeAreaView style={styles.journeyContainer}>
      <Text>Please choose a stage to start!</Text>

      <FlatList
        style={styles.stageList}
        horizontal
        data={stage}
        renderItem={({item}) => <Stage {...item} customStyles={styles.stage} />}
        keyExtractor={(item) => item.order}
        removeClippedSubviews={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // journeyContainer: {
  //   padding: 25,
  // },

  stage: {
    margin: 15,
  },
});

export default JourneyScreen;
