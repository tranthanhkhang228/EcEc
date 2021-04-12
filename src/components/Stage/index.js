import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import {Typography, Color} from 'styles';
import DropShadow from 'react-native-drop-shadow';
import ProgressCircle from 'react-native-progress-circle';
import Icon from 'react-native-vector-icons/AntDesign';
import StageContent from '../StageContent';

const stageMaxWidth = (Dimensions.get('window').width / 100) * 90;

const Stage = ({
  order,
  realm,
  percent,
  point,
  content,
  customStyles,
  onPress,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <DropShadow style={{...styles.shadow, ...customStyles}}>
        <View style={styles.stageContainer}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionHeaderLeft}>
              <View style={styles.stageHeader}>
                <Text style={styles.stageHeaderText}>
                  Stage {order} | {realm}
                </Text>
              </View>
              <View style={styles.stageBody}>
                <Text style={styles.stageBodyText}>Overall</Text>
                <View style={styles.stageBodyPoint}>
                  <Text
                    style={{
                      ...styles.stageBodyText,
                      ...styles.stageBodyPointText,
                    }}>
                    {point}
                  </Text>
                  <View style={styles.stageBodyIcon}>
                    <Icon size={20} name="star" color={Color.orange} />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.sectionHeaderRight}>
              <View style={styles.stagePercent}>
                <ProgressCircle
                  percent={parseInt(percent, 10)}
                  radius={50}
                  borderWidth={6}
                  color={Color.orange}
                  shadowColor="#999"
                  bgColor="#fff">
                  <Text style={styles.stagePercentText}>{percent} %</Text>
                </ProgressCircle>
              </View>
            </View>
          </View>
          <View style={styles.sectionFooter}>
            {content.map((name, index) => (
              <StageContent key={index} name={name} />
            ))}
          </View>
        </View>
      </DropShadow>
    </TouchableWithoutFeedback>
  );
};

export default Stage;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },

  stageContainer: {
    padding: 20,
    overflow: 'hidden',
    backgroundColor: '#f7f6f5',
    maxWidth: stageMaxWidth,

    borderTopLeftRadius: 10,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  sectionHeader: {
    display: 'flex',
    flexDirection: 'row',
  },

  sectionFooter: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingTop: 20,

    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
  },

  sectionHeaderLeft: {
    paddingRight: 10,
    width: '70%',
  },

  sectionHeaderRight: {
    width: '30%',
  },

  stageHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  stageHeaderText: {
    fontSize: 20,
    fontFamily: Typography.medium,
    color: Color.orange,
    textAlign: 'center',
    paddingBottom: 20,
  },

  stageBody: {
    borderLeftWidth: 2,
    borderLeftColor: Color.orange,
    paddingLeft: 15,
    marginBottom: 20,
  },

  stageBodyText: {
    fontFamily: Typography.light,
    fontSize: 20,
    lineHeight: 35,
    marginRight: 10,
  },

  stageBodyPoint: {display: 'flex', flexDirection: 'row'},

  stageBodyIcon: {justifyContent: 'center'},

  stageBodyPointText: {
    color: Color.orange,
  },

  stagePercent: {
    height: 100,
    width: 100,
    borderRadius: 999,
    backgroundColor: 'blue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  stagePercentText: {
    fontFamily: Typography.regular,
    fontSize: 20,
    color: Color.orange,
  },
});
