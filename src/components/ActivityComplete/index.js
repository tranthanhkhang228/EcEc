import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Color, Typography} from 'styles';
import Result from '../Result';

const ActivityComplete = (props) => {
  const [ac, setAc] = useState(true);

  setTimeout(() => {
    setAc(false);
  }, 2500);

  return (
    <>
      {ac ? (
        <View style={styles.activityComplete}>
          <Text style={styles.text}>Hoàn thành</Text>
        </View>
      ) : (
        <Result {...props} />
      )}
    </>
  );
};

export default ActivityComplete;

const styles = StyleSheet.create({
  activityComplete: {
    flex: 1,
    backgroundColor: 'rgba(255, 158, 35, 0.2)',
    justifyContent: 'center',
  },

  text: {
    fontFamily: Typography.bold,
    fontSize: 40,
    textAlign: 'center',
    color: Color.orange,
  },
});
