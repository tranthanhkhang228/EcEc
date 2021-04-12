import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Color, Typography} from 'styles';
import {Angle} from '../Angle';

const EquipmentItem = ({title, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.item}>
        <Angle
          color={Color.orange}
          width={13}
          height={13}
          direction="bottomleft"
        />
        <Text style={styles.vocabulary}>{title}</Text>
        <Text style={styles.class}> C1 </Text>
        <View style={styles.icon}>
          <Icon size={15} name="sword" color={Color.orange} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginVertical: 13,
    // backgroundColor: 'red',
    borderBottomWidth: 0.3,
    borderBottomColor: Color.orange,
  },

  vocabulary: {
    flex: 1,
    marginLeft: 15,
    padding: 5,
    fontSize: 15,
    lineHeight: 15,
    fontFamily: Typography.light,
  },

  class: {
    fontFamily: Typography.light,
  },

  icon: {
    justifyContent: 'center',
  },
});

export default EquipmentItem;
