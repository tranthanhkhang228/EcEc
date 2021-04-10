import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons';
import IconSA from 'react-native-vector-icons/SimpleLineIcons';
import {Typography, Color} from 'styles';

const StageContent = ({name}) => {
  switch (name) {
    case 'error finding':
      return (
        <View style={styles.stageContent}>
          <IconFA size={20} name="pencil-square-o" color={Color.background} />
          <Text style={styles.stageContentText}>Error Finding</Text>
        </View>
      );
    case 'dialogue':
      return (
        <View style={styles.stageContent}>
          <IconMat
            size={20}
            name="comment-processing-outline"
            color={Color.background}
          />
          <Text style={styles.stageContentText}>Dialogue</Text>
        </View>
      );
    case 'minimal pairs':
      return (
        <View style={styles.stageContent}>
          <IconSA size={17} name="earphones" color={Color.background} />
          <Text style={{...styles.stageContentText, ...styles.stageListening}}>
            Minimal Pairs
          </Text>
        </View>
      );
    case 'speed reading':
      return (
        <View style={styles.stageContent}>
          <IconMat
            size={20}
            name="feature-search-outline"
            color={Color.background}
          />
          <Text style={styles.stageContentText}>Speed Reading</Text>
        </View>
      );
    case 'spelling':
      return (
        <View style={styles.stageContent}>
          <IconFA size={20} name="pencil-square-o" color={Color.background} />
          <Text style={styles.stageContentText}>Spelling</Text>
        </View>
      );
    case 'topic associations':
      return (
        <View style={styles.stageContent}>
          <IconMat
            size={20}
            name="comment-processing-outline"
            color={Color.background}
          />
          <Text style={styles.stageContentText}>Topic Associations</Text>
        </View>
      );
    case 'topic match':
      return (
        <View style={styles.stageContent}>
          <IconSA size={17} name="earphones" color={Color.background} />
          <Text style={{...styles.stageContentText, ...styles.stageListening}}>
            Topic Match
          </Text>
        </View>
      );
    case 'phrasal verbs':
      return (
        <View style={styles.stageContent}>
          <IconMat
            size={20}
            name="feature-search-outline"
            color={Color.background}
          />
          <Text style={styles.stageContentText}>Phrasal Verb</Text>
        </View>
      );
  }
};

export default StageContent;

const styles = StyleSheet.create({
  stageContent: {
    display: 'flex',
    alignItems: 'center',
  },

  stageContentText: {
    paddingTop: 10,
    fontFamily: Typography.light,
    fontSize: 8,
  },

  stageListening: {
    paddingTop: 12,
  },
});
