import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';

import {Typography} from 'styles';

const NextButton = ({text, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} style={styles.nextBtn}>
      <Text style={styles.nextBtnText}>{text}</Text>

      <Text style={styles.nextBtnIcon}>
        <Icon name="arrowright" color={Typography.textColor} size={25} />
      </Text>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  nextBtn: {
    flexDirection: 'row',
    justifyContent: 'center',

    width: 200,
    marginBottom: 70,
    padding: 5,
    alignSelf: 'center',

    borderWidth: 1.5,
    borderColor: Typography.textColor,
    borderRadius: 30,
  },

  nextBtnText: {
    margin: 10,
    fontSize: 20,
    fontFamily: Typography.fontMedium,
    textAlign: 'center',
    color: Typography.textColor,
  },

  nextBtnIcon: {
    textAlignVertical: 'center',
  },
});

export default NextButton;
