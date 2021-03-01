import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

import {Typography, LinearGradientTemplate} from 'styles';

const StartButton = ({text, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} style={styles.getStartBtn}>
      <LinearGradient
        useAngle={true}
        angle={45}
        angleCenter={{x: 0.5, y: 0.5}}
        colors={[...LinearGradientTemplate.angleOrange]}
        style={styles.linearGradient}>
        <Text style={styles.getStartText}>{text}</Text>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  getStartBtn: {
    width: 200,
    marginBottom: 70,

    alignSelf: 'center',

    borderRadius: 30,
  },

  linearGradient: {
    borderRadius: 30,
  },

  getStartText: {
    margin: 10,
    fontSize: 25,
    fontFamily: Typography.fontBold,
    textAlign: 'center',
    color: Typography.textColor,
  },
});

export default StartButton;
