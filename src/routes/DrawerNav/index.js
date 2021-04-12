import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Color, Typography} from 'styles';

const DrawerNav = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.drawer}>
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
            case 'Trang chủ':
              return 'home';
            case 'Cá nhân':
              return 'briefcase-account-outline';
            case 'Đăng ký làm đồng hành':
              return 'ninja';
            case 'Góp ý':
              return 'chat-processing-outline';
            default:
              return 'home-export-outline';
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
            onLongPress={onLongPress}>
            <View style={styles.navItem}>
              <View style={styles.iconContainer}>
                <View style={isFocused ? styles.icon : null}>
                  <Icon
                    name={iconName()}
                    size={25}
                    color={isFocused ? Color.orange : 'gray'}
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

export default DrawerNav;

const styles = StyleSheet.create({
  drawer: {
    padding: 10,
  },

  navItem: {
    flexDirection: 'row',
  },

  iconContainer: {
    justifyContent: 'center',
  },

  label: {
    paddingLeft: 10,
    fontFamily: Typography.light,
    fontSize: 15,
    color: Color.gray,
    paddingVertical: 15,
  },

  labelActive: {
    paddingLeft: 10,
    fontFamily: Typography.medium,
    fontSize: 15,
    color: Color.orange,
    paddingVertical: 15,
  },
});
