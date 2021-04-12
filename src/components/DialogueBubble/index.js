import React, {useEffect, useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Animated} from 'react-native';
import {Color, Typography} from 'styles';

const DialogueBubble = ({optionIndex, text, isQuestion, onPress}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <TouchableOpacity onPress={() => onPress(optionIndex)}>
      <Animated.View // Special animatable View
        style={{
          opacity: fadeAnim, // Bind opacity to animated value
        }}>
        <View
          style={
            isQuestion
              ? {...styles.dialogueBubble, ...styles.question}
              : {...styles.dialogueBubble, ...styles.option}
          }>
          <Text style={styles.text}>{text}</Text>
        </View>
      </Animated.View>
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
    marginBottom: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomRightRadius: 10,
    backgroundColor: Color.green,
    alignSelf: 'flex-start',
  },
  option: {
    marginBottom: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: Color.blue,
    alignSelf: 'flex-end',
  },

  text: {
    fontFamily: Typography.light,
    fontSize: 15,
    color: Color.white,
    lineHeight: 18,
  },
});
