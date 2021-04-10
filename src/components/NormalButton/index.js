import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import DropShadow from 'react-native-drop-shadow';

import {Typography, Color} from 'styles';

const NormalButton = ({children, text}) => {
  return (
    <DropShadow style={{...styles.shadow}}>
      <TouchableWithoutFeedback>
        <View style={styles.btn}>
          <Text style={styles.btnText}>{text}</Text>
          <View style={styles.icon}>{children}</View>
        </View>
      </TouchableWithoutFeedback>
    </DropShadow>
  );
};

export default NormalButton;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },

  btn: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 15,

    alignSelf: 'center',

    borderWidth: 1.5,
    borderColor: 'transparent',
    borderRadius: 30,

    backgroundColor: 'rgba(26, 162, 235,0.6)',
  },

  btnText: {
    margin: 10,
    fontSize: 13,
    fontFamily: Typography.light,
    textAlign: 'center',
    color: Color.white,
  },

  icon: {
    justifyContent: 'center',
  },
});
