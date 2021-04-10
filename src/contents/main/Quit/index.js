import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import {Typography, Color} from '@styles';

const quitGameText =
  'Do you really want to exit this world? \n You can return anytime!';

const QuitScreen = ({navigation}) => {
  const keepFighting = () => {
    navigation.navigate('Continue your Journey');
  };

  const quit = () => {
    BackHandler.exitApp();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{quitGameText}</Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={keepFighting} style={styles.keepFightingBtn}>
          <Text style={styles.btnText}>Keep fighting!</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={quit} style={styles.quitBtn}>
          <Text style={styles.btnText}>Quit!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const btn = {
  padding: 10,
  borderRadius: 10,
  backgroundColor: Color.orange,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'gray',
  },

  text: {
    marginBottom: 20,

    fontSize: Typography.size,
    color: Color.white,
    lineHeight: 30,
    textAlign: 'center',
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  btnText: {
    fontSize: Typography.size,
    color: Color.white,
  },

  keepFightingBtn: {
    ...btn,
  },

  quitBtn: {
    ...btn,
  },
});

export default QuitScreen;
