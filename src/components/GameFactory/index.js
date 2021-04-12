import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Dialogue from '../Dialogue';

const GameFactory = (props) => {
  const {type} = props.route.params;

  switch (type) {
    case 'dialogue':
      return <Dialogue {...props} />;
    default:
      return <View />;
  }
};

export default GameFactory;

const styles = StyleSheet.create({});
