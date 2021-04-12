import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Dialogue from '../Dialogue';

const GameFactory = (props) => {
  const {type} = props;

  switch (type) {
    case 'dialogue':
      return <Dialogue {...props} />;
  }
};

export default GameFactory;

const styles = StyleSheet.create({});
