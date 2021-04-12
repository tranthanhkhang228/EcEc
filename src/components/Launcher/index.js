import React from 'react';
import {ActivityIndicator, View, Text, StyleSheet} from 'react-native';
import {Color, Typography} from 'styles';

const Launcher = () => {
  return (
    <View style={styles.launcher}>
      <Text style={styles.message}>Processing, please wait...!</Text>
      <ActivityIndicator size={60} color={Color.orange} />
    </View>
  );
};

const styles = StyleSheet.create({
  launcher: {
    flex: 1,
    justifyContent: 'center',
  },

  message: {
    fontFamily: Typography.regular,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 25,
    color: Color.blue,
  },
});

export default Launcher;
