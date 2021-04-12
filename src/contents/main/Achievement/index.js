import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {VictoryBar, VictoryChart, VictoryAxis} from 'victory-native';
import {CustomButton} from '@components';
import {Color, Typography, CustomChartTheme} from 'styles';

const parentPadding = 15;
const itemMaxWidth = Dimensions.get('window').width - parentPadding * 2;

const data = [
  {quarter: 1, earnings: 10},
  {quarter: 2, earnings: 20},
  {quarter: 3, earnings: 20},
  {quarter: 4, earnings: 40},
  {quarter: 5, earnings: 40},
  {quarter: 6, earnings: 60},
  {quarter: 7, earnings: 60},
  {quarter: 8, earnings: 80},
  {quarter: 9, earnings: 80},
  {quarter: 10, earnings: 100},
  {quarter: 11, earnings: 10},
  {quarter: 12, earnings: 20},
  {quarter: 13, earnings: 20},
  {quarter: 14, earnings: 40},
  {quarter: 15, earnings: 40},
  {quarter: 16, earnings: 60},
  {quarter: 17, earnings: 60},
  {quarter: 18, earnings: 80},
  {quarter: 19, earnings: 80},
  {quarter: 20, earnings: 100},
];

const Achievement = () => {
  const onPress = () => {};
  return (
    <View style={styles.achievement}>
      <Text style={styles.title}>Progress</Text>
      <View style={styles.skillBar}>
        <CustomButton
          text="All SKILLS"
          onPress={onPress}
          customView={styles.btnAll}
          customText={styles.btnAllText}
        />
        <CustomButton
          text="R"
          onPress={onPress}
          customView={styles.btn}
          customText={styles.btnText}
        />
        <CustomButton
          text="S"
          onPress={onPress}
          customView={styles.btn}
          customText={styles.btnText}
        />
        <CustomButton
          text="L"
          onPress={onPress}
          customView={styles.btn}
          customText={styles.btnText}
        />
        <CustomButton
          text="W"
          onPress={onPress}
          customView={styles.btn}
          customText={styles.btnText}
        />
      </View>
      <View style={styles.overall}>
        <View style={styles.overallTitle}>
          <Text style={styles.overallTitleText}>Tỷ lệ đúng</Text>
          <Text style={styles.overallTitlePercent}>76%</Text>
        </View>
        <Text style={styles.overallSubtitle}>Tỷ lệ đáp án đúng trung bình</Text>
      </View>
      <View style={styles.container}>
        <VictoryChart
          domainPadding={{x: 20}}
          padding={{top: 30, left: 50, right: 50, bottom: 50}}
          height={250}
          theme={CustomChartTheme}>
          <VictoryAxis
            style={{
              axis: {
                fill: 'transparent',
                stroke: '#2329de',
                strokeWidth: 1,
              },
              grid: {
                fill: 'none',
                stroke: 'none',
                pointerEvents: 'painted',
              },
              axisLabel: {
                fontFamily: Typography.regular,
                fontSize: 14,
                padding: 5,
                fill: Color.blue,
                stroke: 'transparent',
              },
            }}
          />
          <VictoryAxis
            dependentAxis
            crossAxis
            style={{
              axis: {
                fill: 'transparent',
                stroke: 'none',
                strokeWidth: 0.5,
              },
              grid: {
                fill: 'none',
                stroke: 'rgba(35, 41, 222,0.3)',
                strokeWidth: 0.5,
                pointerEvents: 'painted',
              },
            }}
            offsetX={itemMaxWidth}
            standalone={false}
          />
          <VictoryBar
            barRatio={0.9}
            data={data}
            x="quarter"
            y="earnings"
            width={itemMaxWidth}
            animate={{
              duration: 1000,
              onLoad: {duration: 500},
            }}
          />
        </VictoryChart>
      </View>
    </View>
  );
};

export default Achievement;

const styles = StyleSheet.create({
  achievement: {
    padding: 15,
  },

  title: {
    fontFamily: Typography.regular,
    fontSize: 20,
    textAlign: 'center',
    color: Color.blue,
    marginBottom: 180,
  },

  skillBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 60,
  },

  btnAll: {
    backgroundColor: Color.orange,
    paddingHorizontal: 10,
    paddingVertical: 0,
    borderWidth: 1,
    borderRadius: 20,
    marginRight: 5,
  },

  btnAllText: {
    fontSize: 12,
    fontFamily: Typography.semiBold,
    color: Color.white,
  },

  btn: {
    backgroundColor: Color.white,
    paddingHorizontal: 10,
    paddingVertical: 0,
    borderWidth: 0.8,
    borderColor: Color.orange,
    borderRadius: 20,
    marginRight: 5,
  },

  btnText: {
    fontSize: 12,
    fontFamily: Typography.semiBold,
    color: Color.orange,
  },

  overall: {},

  overallTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  overallTitleText: {
    fontFamily: Typography.medium,
    fontSize: 25,
    color: Color.gray,
  },

  overallTitlePercent: {
    fontFamily: Typography.semiBold,
    fontSize: 35,
    color: Color.blue,
  },

  overallSubtitle: {
    fontSize: 13,
    fontFamily: Typography.regular,
    color: Color.gray,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
});
