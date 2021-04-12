import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DialogueBubble from '../DialogueBubble';
import {Color, Typography} from 'styles';

const DialogueChoice = ({options, onPress}) => {
  return (
    <View>
      <Text style={styles.title}>TAP VÀO ĐÁP ÁN ĐÚNG</Text>
      <View style={styles.bubbles}>
        {options.map((option) => (
          <DialogueBubble text={option.text} onPress={onPress} />
        ))}
      </View>
    </View>
  );
};

export default DialogueChoice;

const styles = StyleSheet.create({
  title: {
    fontSize: 13,
    fontFamily: Typography.regular,
    color: Color.white,
  },
  bubbles: {
    backgroundColor: Color.gray,
  },
});
