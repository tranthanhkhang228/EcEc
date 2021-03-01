import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {Typography} from 'styles';
import {CustomButton} from '@components';

const NUMBER_OF_SCREEN = 3;

const Walkthrough = ({navigation}) => {
  const [currentStep, setCurrentStep] = useState(0);

  const [articles, setContent] = useState([
    {
      title: 'First step',
      content: 'First step content',
    },
    {
      title: 'Second step',
      content: 'Second step content',
    },
    {
      title: 'Third step',
      content: 'Third step content',
    },
  ]);

  const generateStep = () => {
    const stepIcons = [];

    for (let i = 0; i < NUMBER_OF_SCREEN; i++) {
      i !== currentStep
        ? stepIcons.push(
            <View key={i} style={styles.stepItem}>
              <Icon
                name="aliwangwang-o1"
                color={Typography.textColor}
                size={20}
              />
            </View>,
          )
        : stepIcons.push(
            <View key={i} style={styles.stepItem}>
              <Icon name="aliwangwang" color={Typography.textColor} size={20} />
            </View>,
          );
    }

    return stepIcons;
  };

  const navigateToHomeScreen = () => {
    navigation.navigate('Home');
  };

  const handlePressNextBtn = () => {
    currentStep + 1 >= NUMBER_OF_SCREEN
      ? navigateToHomeScreen()
      : setCurrentStep(currentStep + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.walkthroughTitle}>{articles[currentStep].title}</Text>
      <Text style={styles.walkthroughContent}>
        {articles[currentStep].content}
      </Text>
      <View style={styles.stepContainer}>
        {generateStep().map((icon) => icon)}
      </View>
      <CustomButton
        text={currentStep === 2 ? 'Get Started' : 'Next'}
        type={currentStep === 2 ? 'start' : 'next'}
        onPress={handlePressNextBtn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  walkthroughTitle: {
    marginBottom: 5,
    color: Typography.textColor,
    fontSize: 35,
    fontFamily: Typography.fontBold,
    textAlign: 'center',
  },
  walkthroughContent: {
    marginBottom: 40,
    color: Typography.textColor,
    fontSize: 30,
    fontFamily: Typography.fontMedium,
    textAlign: 'center',
  },

  stepContainer: {flexDirection: 'row', alignSelf: 'center', marginBottom: 40},
  stepItem: {marginRight: 10},
});

export default Walkthrough;
