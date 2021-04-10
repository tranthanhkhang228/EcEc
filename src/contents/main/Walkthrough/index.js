import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {Typography, Color} from 'styles';
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
              <Icon name="aliwangwang-o1" color={Color.white} size={20} />
            </View>,
          )
        : stepIcons.push(
            <View key={i} style={styles.stepItem}>
              <Icon name="aliwangwang" color={Color.white} size={20} />
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
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={Color.orange} />

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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

  walkthroughTitle: {
    marginBottom: 5,
    color: Color.white,
    fontSize: 35,
    fontFamily: Typography.bold,
    textAlign: 'center',
  },
  walkthroughContent: {
    marginBottom: 40,
    color: Color.white,
    fontSize: 30,
    fontFamily: Typography.medium,
    textAlign: 'center',
  },

  stepContainer: {flexDirection: 'row', alignSelf: 'center', marginBottom: 40},
  stepItem: {marginRight: 10},
});

export default Walkthrough;
