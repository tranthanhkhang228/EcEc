import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import {Typography, Color} from 'styles';

const parentPadding = 15;
const marginRight = 6;
const itemMaxWidth =
  (Dimensions.get('window').width - parentPadding * 2 - marginRight * 5) / 6;

const index = ({text, type, isDone, onPress}) => {
  const definedStyles = () => {
    if (!isDone) return styles.sound;

    switch (type) {
      case 'vowel':
        return {...styles.sound, ...styles.bgcOrange};
      case 'dipthong':
        return {...styles.sound, ...styles.bgcBlue};
      default:
        return {...styles.sound, ...styles.bgcGreen};
    }
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={definedStyles()}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default index;

const styles = StyleSheet.create({
  sound: {
    width: itemMaxWidth,
    height: itemMaxWidth,
    marginRight: 6,
    marginBottom: 6,
    backgroundColor: '#bec3c7',
    borderRadius: 5,
    justifyContent: 'center',
  },

  bgcOrange: {
    backgroundColor: Color.orange,
  },
  bgcBlue: {
    backgroundColor: Color.blue,
  },
  bgcGreen: {
    backgroundColor: Color.green,
  },

  text: {
    fontFamily: Typography.regular,
    fontSize: 18,
    color: Color.white,
    textAlign: 'center',
  },
});

//ff9e23
//3598db
