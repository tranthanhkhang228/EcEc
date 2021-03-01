import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

const launcherImage = '../../assets/images/Launcher.png';

const Launcher = ({navigation}) => {
  const performTimeConsumingTask = () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve('result');
      }, 100),
    );
  };

  useEffect(() => {
    (async () => {
      const data = await performTimeConsumingTask();

      if (data !== null) {
        navigation.navigate('Walkthrough');
      }
    })();
  }, []);

  return (
    <ImageBackground source={require(launcherImage)} style={styles.imgBg} />
  );
};

const styles = StyleSheet.create({
  imgBg: {
    flex: 1,
  },
});

export default Launcher;
