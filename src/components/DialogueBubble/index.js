import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Color, Typography} from 'styles';

const DialogueBubble = ({text, isQuestion, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={
          isQuestion
            ? {...styles.dialogueBubble, ...styles.question}
            : {...styles.dialogueBubble, ...styles.option}
        }>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DialogueBubble;

const styles = StyleSheet.create({
  dialogueBubble: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  question: {
    borderBottomRightRadius: 10,
    backgroundColor: Color.grayBlue,
    alignSelf: 'flex-start',
  },
  option: {
    borderBottomLeftRadius: 10,
    backgroundColor: Color.blue,
    alignSelf: 'flex-end',
  },

  text: {
    fontFamily: Typography.regular,
    fontSize: 13,
    lineHeight: 18,
  },
});
