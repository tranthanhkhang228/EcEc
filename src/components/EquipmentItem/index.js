import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Color} from 'styles';
import {Angle} from '@components';

const EquipmentItem = ({title, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.item}>
        <Angle
          color={Color.background}
          width={20}
          height={20}
          direction="bottomleft"
        />
        <Text style={styles.vocabulary}>{title}</Text>
        <Text style={styles.class}> C1 </Text>
        <Icon size={20} name="sword" color={Color.background} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginVertical: 10,
    // backgroundColor: 'red',
    borderBottomWidth: 1.5,
    borderBottomColor: Color.background,
  },

  vocabulary: {
    flex: 1,
    marginLeft: 15,
    padding: 5,
    fontSize: 15,
    lineHeight: 15,
  },

  class: {},
});

export default EquipmentItem;
