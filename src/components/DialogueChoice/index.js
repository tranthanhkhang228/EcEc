import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DialogueBubble from '../DialogueBubble';
import {Color, Typography} from 'styles';

const DialogueChoice = ({options, onPress}) => {
  return (
    <View>
      <View style={styles.decoration}>
        <Text style={styles.title}>TAP VÀO ĐÁP ÁN ĐÚNG</Text>
      </View>
      <View style={styles.bubbles}>
        {options.map((option, index) => (
          <DialogueBubble
            key={option}
            optionIndex={index}
            text={option}
            onPress={onPress}
          />
        ))}
      </View>
      <View style={styles.decoration} />
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
    backgroundColor: '#ff9e23',
    paddingHorizontal: 20,
    paddingTop: 20,
    marginHorizontal: -20,
  },

  decoration: {
    height: 35,
    marginHorizontal: -20,

    backgroundColor: 'rgba(255, 158, 35, 0.5)',
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
});
