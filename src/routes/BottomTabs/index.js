import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Color, Typography} from 'styles';

const BottomTabs = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.bottomTabs}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const iconName = () => {
          switch (route.name) {
            case 'Hành trình':
              return 'bike';
            case 'Phát âm':
              return 'account-voice';
            case 'Từ điển':
              return 'bookshelf';
            default:
              return 'chart-line-variant';
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tab}>
            <View>
              <View style={styles.iconContainer}>
                <View style={isFocused ? styles.icon : null}>
                  <Icon
                    name={iconName()}
                    size={25}
                    color={isFocused ? Color.white : 'gray'}
                  />
                </View>
              </View>
              <Text style={isFocused ? styles.labelActive : styles.label}>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  bottomTabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  tab: {
    flex: 1,
    height: 60,
    justifyContent: 'flex-end',
  },

  iconContainer: {
    alignItems: 'center',
  },

  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
    width: 35,
    height: 35,
    backgroundColor: 'orange',
  },

  labelActive: {
    paddingBottom: 10,
    color: Color.orange,
    fontFamily: Typography.medium,
    fontSize: 13,
    textAlign: 'center',
  },

  label: {
    paddingBottom: 10,
    color: 'gray',
    fontFamily: Typography.light,
    fontSize: 13,
    textAlign: 'center',
  },
});
