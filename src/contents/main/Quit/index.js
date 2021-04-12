import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import {Typography, Color} from '@styles';

const quitGameText =
  'Bạn muốn tạm thời dừng lại? \n Bạn có thể trở lại bất cứ lúc nào!';

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
          <View style={styles.btnIcon}>
            <IconMCI name="sword-cross" color="white" size={18} />
          </View>
          <Text style={styles.btnText}>Tiếp tục!</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={quit} style={styles.quitBtn}>
          <View style={styles.btnIcon}>
            <IconMCI name="exit-run" color="white" size={18} />
          </View>
          <Text style={styles.btnText}>Thoát!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const btn = {
  flexDirection: 'row',
  paddingVertical: 7,
  paddingHorizontal: 15,
  borderRadius: 10,
  backgroundColor: 'rgba(247, 149, 2,0.9)',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'gray',
  },

  text: {
    marginBottom: 20,
    fontFamily: Typography.regular,
    fontSize: 18,
    color: Color.white,
    lineHeight: 30,
    textAlign: 'center',
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  btnText: {
    fontFamily: Typography.light,
    fontSize: Typography.size,
    color: Color.white,
  },

  btnIcon: {
    justifyContent: 'center',
    marginRight: 7,
  },

  keepFightingBtn: {
    ...btn,
  },

  quitBtn: {
    ...btn,
  },
});

export default QuitScreen;
