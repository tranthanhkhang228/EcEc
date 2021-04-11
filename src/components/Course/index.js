import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {Color, Typography} from 'styles';

const parentPadding = 15;
const marginRight = 20;
const itemMaxWidth =
  (Dimensions.get('window').width - parentPadding * 2 - marginRight) / 2;

const Course = ({title, point, image}) => {
  return (
    <View style={styles.course}>
      <View style={styles.upper}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.pointContainer}>
          <Text style={styles.pointText}>Điểm</Text>
          <View style={styles.point}>
            <Text style={styles.pointText}>{point}</Text>
            <View style={styles.pointIcon}>
              <Icon size={15} name="star" color={Color.orange} />
            </View>
          </View>
        </View>
      </View>
      <DropShadow style={{...styles.shadow}}>
        <View style={styles.lower}>
          <Image source={image} style={styles.image} />
        </View>
      </DropShadow>
    </View>
  );
};

export default Course;

const styles = StyleSheet.create({
  shadow: {
    zIndex: 3,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },

  course: {
    width: itemMaxWidth,
    marginRight: 20,
    marginBottom: 30,
  },

  upper: {
    zIndex: 1,
    backgroundColor: Color.grayBlue,
    padding: 14,
    borderRadius: 15,
  },

  title: {
    color: Color.gray,
    fontFamily: Typography.medium,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 12,
  },

  pointContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },

  pointText: {
    color: Color.orange,
    fontFamily: Typography.light,
    fontSize: 15,
  },

  point: {flexDirection: 'row', justifyContent: 'space-between'},

  pointIcon: {
    marginLeft: 4,
    justifyContent: 'center',
  },

  lower: {
    alignSelf: 'center',
    width: '70%',
    maxWidth: '70%',
    height: 80,
    marginTop: -40,
    borderRadius: 15,
    backgroundColor: 'white',
    overflow: 'hidden',
  },

  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
