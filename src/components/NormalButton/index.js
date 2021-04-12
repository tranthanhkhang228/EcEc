import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DropShadow from 'react-native-drop-shadow';

import {Typography, Color} from 'styles';

const NormalButton = ({
  onPress,
  children,
  text,
  customView,
  customText,
  customIcon,
}) => {
  return (
    <DropShadow style={{...styles.shadow}}>
      <TouchableOpacity onPress={onPress}>
        <View style={{...styles.btn, ...customView}}>
          <Text style={{...styles.btnText, ...customText}}>{text}</Text>
          <View style={{...styles.icon, ...customIcon}}>{children}</View>
        </View>
      </TouchableOpacity>
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
    fontSize: 15,
    fontFamily: Typography.regular,
    textAlign: 'center',
    color: Color.white,
  },

  icon: {
    justifyContent: 'center',
  },
});
