import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DialogueBubble from '../DialogueBubble';
import DialogueChoice from '../DialogueChoice';

const Dialogue = () => {
  const options = [
    {
      text: "Not much. I'm watching Youtube",
    },
    {
      text: "I'm going to the cinema tomorrow",
    },
  ];

  const onPress = () => {};

  return (
    <View>
      <DialogueChoice options={options} onPress={onPress} />
    </View>
  );
};

export default Dialogue;

const styles = StyleSheet.create({});
